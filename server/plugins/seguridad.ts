// Seguridad de las páginas que genera Nitro (hardening, tanda 5).
//
// Nuxt pone «X-Powered-By: Nuxt» en cada página: la respuesta no anuncia con qué está hecha la app. Las demás cabeceras
// van en las routeRules de nuxt.config, que alcanzan también a los estáticos.
//
// CSP estricta (5.5): solo se ejecutan los scripts que llevan la clave de esta página y lo que esos scripts carguen
// después ('strict-dynamic'), venga del dominio que venga: una integración nueva no obliga a tocar nada. Lo que se cuele
// en un texto (un <script> o un onerror=) no se ejecuta. «https:» y 'unsafe-inline' son para los navegadores antiguos,
// que no entienden la clave; los actuales los ignoran. Sin default-src: estilos, imágenes, fuentes, conexiones e iframes
// quedan libres.
import { randomBytes } from 'node:crypto'

const csp = (clave: string) =>
  `script-src 'nonce-${clave}' 'strict-dynamic' 'wasm-unsafe-eval' https: 'unsafe-inline'; ` +
  "worker-src 'self' blob:; object-src 'self'; base-uri 'self'; frame-ancestors 'self'"

// La clave va en las etiquetas que pone Nuxt (la cabecera y el principio y el final del body), nunca en el contenido de
// la página: un <script> que llegara en un texto no la lleva
const conClave = (trozo: string, clave: string) => trozo.replace(/<(script|link)\b/g, `<$1 nonce="${clave}"`)

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    const clave = randomBytes(16).toString('base64')
    event.context.claveCsp = clave
    html.head = html.head.map((trozo) => conClave(trozo, clave))
    html.bodyPrepend = html.bodyPrepend.map((trozo) => conClave(trozo, clave))
    html.bodyAppend = html.bodyAppend.map((trozo) => conClave(trozo, clave))
  })

  nitroApp.hooks.hook('render:response', (response, { event }) => {
    for (const nombre of Object.keys(response.headers || {})) {
      if (nombre.toLowerCase() === 'x-powered-by') delete response.headers[nombre]
    }
    const clave = event.context.claveCsp
    if (clave) response.headers = { ...response.headers, 'Content-Security-Policy': csp(clave) }
  })
})
