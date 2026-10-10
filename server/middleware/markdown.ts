// /ruta.md: la página en Markdown (server/utils/markdown.ts). La portada es /index.md. Solo las páginas del sitemap;
// el resto, 404. Lleva el canonical a la página HTML, para que un buscador no las tome por copias.
import { cuentaDemoActivada, urlAbsoluta } from '../../utils/sitio'

export default defineEventHandler(async (event) => {
  const ruta = event.path.split('?')[0]
  if (!ruta.endsWith('.md')) return
  const pagina = ruta === '/index.md' ? '/' : ruta.slice(0, -3)
  if (!rutasConMarkdown(cuentaDemoActivada(useRuntimeConfig(event).public)).has(pagina)) {
    throw createError({ statusCode: 404, statusMessage: 'Esta página no tiene versión en Markdown' })
  }
  const markdown = await paginaEnMarkdown(pagina)
  setResponseHeaders(event, {
    'Content-Type': 'text/markdown; charset=utf-8',
    'Cache-Control': 'public, max-age=3600',
    'Link': `<${urlAbsoluta(pagina)}>; rel="canonical"`,
  })
  return markdown
})
