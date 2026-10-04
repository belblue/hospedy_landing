// Seguridad de las páginas que genera Nitro (hardening, tanda 5). Nuxt pone «X-Powered-By: Nuxt» en cada página: la
// respuesta no anuncia con qué está hecha la app. Las demás cabeceras van en las routeRules de nuxt.config, que
// alcanzan también a los estáticos.
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response) => {
    for (const nombre of Object.keys(response.headers || {})) {
      if (nombre.toLowerCase() === 'x-powered-by') delete response.headers[nombre]
    }
  })
})
