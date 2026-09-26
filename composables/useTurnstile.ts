// Cloudflare Turnstile en los formularios de la web: carga del script oficial (sin dependencia
// npm) y sitekey de la configuración pública (NUXT_PUBLIC_TURNSTILE_SITE_KEY), que se lee al
// arrancar el servidor: cambiar de clave no obliga a recompilar la web. El token lo comprueba el
// admin panel, que es quien recibe los formularios.
//
// Sin sitekey no se pinta el widget (disponible = false): el formulario no podría pasar la
// comprobación, así que en su lugar invita a escribir a hola@hospedy.app.
const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

let scriptPromise: Promise<any> | null = null

function loadScript(): Promise<any> {
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve, reject) => {
    const w = window as any
    if (w.turnstile) {
      resolve(w.turnstile)
      return
    }
    const script = document.createElement('script')
    script.src = SCRIPT_URL
    script.async = true
    script.defer = true
    script.onload = () => {
      if (w.turnstile) {
        resolve(w.turnstile)
      } else {
        scriptPromise = null
        reject(new Error('Turnstile cargado sin API'))
      }
    }
    script.onerror = () => {
      // Sin esto, un fallo de red dejaría la promesa cacheada y rota para siempre.
      scriptPromise = null
      reject(new Error('No se ha podido cargar Turnstile'))
    }
    document.head.appendChild(script)
  })
  return scriptPromise
}

export function useTurnstile(action: string) {
  const siteKey = String(useRuntimeConfig().public.turnstileSiteKey || '').trim()
  const disponible = Boolean(siteKey)
  const token = ref('')
  const error = ref(false)
  let widgetId: string | null = null
  let montado = true

  async function render(el: HTMLElement) {
    if (!disponible) return
    try {
      const turnstile = await loadScript()
      // Si el formulario ha desaparecido mientras cargaba el script, no se pinta en el vacío
      if (!montado) return
      widgetId = turnstile.render(el, {
        sitekey: siteKey,
        action,
        callback: (t: string) => {
          token.value = t
          error.value = false
        },
        // El token caduca a los 300 s: se descarta y el widget saca otro solo (refresh-expired)
        'refresh-expired': 'auto',
        'expired-callback': () => {
          token.value = ''
        },
        'error-callback': () => {
          token.value = ''
          error.value = true
        },
      })
    } catch (e) {
      error.value = true
    }
  }

  // El token es de un solo uso: reponerlo cuando un envío falla, sea cual sea el error.
  function reset() {
    token.value = ''
    const w = window as any
    if (w.turnstile && widgetId !== null) w.turnstile.reset(widgetId)
  }

  // Quitar el widget antes de que desaparezca su contenedor (formulario enviado o página
  // abandonada); si no, Turnstile sigue intentando refrescarlo y avisa por consola.
  function remove() {
    token.value = ''
    const w = window as any
    if (w.turnstile && widgetId !== null) {
      try {
        w.turnstile.remove(widgetId)
      } catch (e) {
        // el widget ya no existe
      }
    }
    widgetId = null
  }

  onBeforeUnmount(() => {
    montado = false
    remove()
  })

  return { token, error, disponible, render, reset, remove }
}
