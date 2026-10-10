// Fuera de producción (dev, la LAN, localhost) ninguna respuesta se deja indexar: ni las páginas ni los estáticos ni
// los .txt. Se decide por el host de la petición, sin variables de entorno, así que una copia nueva de la web nace
// cerrada. Solo se mira la cabecera Host, que Cloudflare y Traefik pasan tal cual; X-Forwarded-Host podría ponerla el
// visitante y envenenar la caché de robots.txt.
import { esHostDeProduccion } from '../../utils/sitio'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    if (!esHostDeProduccion(getRequestHost(event))) {
      setResponseHeader(event, 'X-Robots-Tag', 'noindex, nofollow')
    }
  })
})
