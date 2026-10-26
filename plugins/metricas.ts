// Medición de audiencia con Umami en nuestros servidores (metricas.silatek.net), sin cookies y sin guardar
// nada en el navegador, dentro de las condiciones de la AEPD para medir sin consentimiento (decisión
// homelab-umami-self-hosted del vault): el identificador de visitante cambia cada día (lo fija el servidor),
// los datos se borran a los 25 meses y, antes de cada envío, el filtro de abajo deja en la URL solo los
// utm_*, quita la query del referrer y no manda el idioma.
//
// Solo carga con NUXT_PUBLIC_METRICAS_URL y NUXT_PUBLIC_METRICAS_SITIO, y data-domains impide que cuente
// visitas desde otro dominio. Corre también en el servidor para que los scripts salgan en el HTML con la
// clave de la CSP (server/plugins/seguridad.ts). En el navegador cuenta además los clics en los enlaces a
// la app, al correo y a WhatsApp; los formularios avisan al enviarse (useMetricas).
const FILTRO = `window.metricasFiltro = function (tipo, datos) {
  try {
    if (datos.url) {
      var url = new URL(datos.url, location.origin), utm = new URLSearchParams()
      url.searchParams.forEach(function (valor, clave) { if (clave.indexOf('utm_') === 0) utm.append(clave, valor) })
      datos.url = url.origin + url.pathname + (utm.toString() ? '?' + utm : '')
    }
    if (datos.referrer) {
      var ref = new URL(datos.referrer)
      datos.referrer = ref.origin + ref.pathname
    }
  } catch (e) {}
  delete datos.language
  return datos
}`

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public
  const base = String(config.metricasUrl || '').trim().replace(/\/+$/, '')
  const sitio = String(config.metricasSitio || '').trim()
  if (!base || !sitio) return

  useHead({
    script: [
      { innerHTML: FILTRO },
      {
        src: `${base}/m/s.js`,
        defer: true,
        'data-website-id': sitio,
        'data-domains': String(config.metricasDominios || '').trim() || undefined,
        'data-exclude-hash': 'true',
        'data-do-not-track': 'true',
        'data-performance': 'true',
        'data-before-send': 'metricasFiltro',
      },
    ],
  })

  if (import.meta.client) {
    const { evento } = useMetricas()
    const app = new URL(useReferral().appUrl('/')).origin
    document.addEventListener('click', (e) => {
      const enlace = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!enlace) return
      const destino = new URL(enlace.href, location.href)
      if (destino.protocol === 'mailto:') evento('correo')
      else if (/(^|\.)(wa\.me|whatsapp\.com)$/.test(destino.hostname)) evento('whatsapp')
      else if (destino.origin === app) evento('ir-a-la-app', { destino: destino.pathname })
    }, { capture: true })
  }
})
