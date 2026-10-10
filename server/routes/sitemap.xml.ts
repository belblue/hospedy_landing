// Sitemap generado con el mapa de la web (utils/navegacion.ts) y los artículos (utils/blog.ts): una página nueva
// entra sola, y su lastmod es la fecha en que cambió su contenido. Fuera quedan las páginas con noindex (aviso legal,
// /r/*) y la cuenta de demo mientras no esté activada.
import { SITIO_URL, cuentaDemoActivada } from '../../utils/sitio'
import { paginasDelSitemap } from '../../utils/navegacion'

export default defineEventHandler((event) => {
  const demoLista = cuentaDemoActivada(useRuntimeConfig(event).public)
  const urls = paginasDelSitemap({ demoLista }).map(pagina => [
    '  <url>',
    `    <loc>${SITIO_URL}${pagina.ruta}</loc>`,
    `    <lastmod>${pagina.actualizado}</lastmod>`,
    '  </url>',
  ].join('\n'))
  setResponseHeaders(event, {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'public, max-age=3600',
  })
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n')
})
