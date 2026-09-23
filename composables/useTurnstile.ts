// Cloudflare Turnstile en los formularios de la web: carga del script oficial (sin dependencia
// npm) y sitekey servida por el backend en /api/public_config, de modo que cambiar de clave no
// obliga a recompilar la web.
const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

let scriptPromise: Promise<any> | null = null
let siteKeyPromise: Promise<string> | null = null

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

function fetchSiteKey(baseURL: string): Promise<string> {
  if (!siteKeyPromise) {
    siteKeyPromise = $fetch<{ turnstile_site_key?: string }>(`${baseURL}/api/public_config`)
      .then((r) => (r && r.turnstile_site_key) || '')
      .catch((e) => {
        siteKeyPromise = null
        throw e
      })
  }
  return siteKeyPromise
}

export function useTurnstile(action: string) {
  const config = useRuntimeConfig()
  const token = ref('')
  const error = ref(false)
  let widgetId: string | null = null

  async function render(el: HTMLElement) {
    try {
      const siteKey = await fetchSiteKey(config.public.baseURL as string)
      if (!siteKey) throw new Error('Turnstile sin sitekey')
      const turnstile = await loadScript()
      widgetId = turnstile.render(el, {
        sitekey: siteKey,
        action,
        callback: (t: string) => {
          token.value = t
          error.value = false
        },
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

  // El token es de un solo uso y caduca a los 300 s: reponerlo cuando un envío falla.
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

  onBeforeUnmount(remove)

  return { token, error, render, reset, remove }
}
