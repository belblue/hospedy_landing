// Datos de la web que comparten las páginas, las rutas del servidor (robots.txt, sitemap.xml) y los datos
// estructurados. Sin clases de Tailwind: utils/ no está en el content de tailwind.config.js.

// Dirección pública de la web. Es la de los canonical, el sitemap y los datos estructurados, también en dev.
export const SITIO_URL = 'https://gethospedy.com'

// Solo en estos hosts la web se deja indexar. En cualquier otro (dev, la LAN, localhost) todas las respuestas llevan
// «X-Robots-Tag: noindex, nofollow» y robots.txt lo cierra todo (server/plugins/indexacion.ts).
const HOSTS_DE_PRODUCCION = ['gethospedy.com', 'www.gethospedy.com']

export function esHostDeProduccion(host: string | null | undefined): boolean {
  const nombre = String(host || '').trim().toLowerCase().replace(/:\d+$/, '').replace(/\.$/, '')
  return HOSTS_DE_PRODUCCION.includes(nombre)
}

// Dirección absoluta de una ruta de la web, sin barra final (salvo la portada)
export function urlAbsoluta(ruta: string): string {
  const limpia = ('/' + String(ruta || '').replace(/^\/+/, '')).replace(/\/+$/, '')
  return SITIO_URL + (limpia || '/')
}

// Qué es Hospedy, en una sola versión: el párrafo de la portada, su meta description, los datos estructurados y
// llms.txt dicen exactamente esto.
export const DEFINICION =
  'Hospedy es un programa de gestión (PMS) para hoteles, casas rurales y apartamentos turísticos en España. ' +
  'Envía los partes de viajeros y la encuesta del INE, sincroniza tus agencias, incluye motor de reservas y te deja ' +
  'cobrar online. Desde 35 €/mes, con todas las funciones en todos los planes.'

export const CONTACTO = {
  email: 'hola@hospedy.app',
  // WhatsApp para dudas antes de contratar. Si cambia el número, solo se cambia aquí.
  whatsapp: 'https://wa.me/376619224',
}

// La cuenta de demo bajo demanda solo funciona activada (NUXT_PUBLIC_DEMO_ENABLED) y con el admin panel configurado
// (NUXT_PUBLIC_PANEL_API_BASE). Nuxt convierte «true» en un booleano, pero se admite también el texto.
export function cuentaDemoActivada(publico: { demoEnabled?: unknown, panelApiBase?: unknown }): boolean {
  const valor = publico.demoEnabled
  const activada = valor === true || valor === 1 || valor === 'true' || valor === '1'
  return activada && Boolean(String(publico.panelApiBase || '').trim())
}
