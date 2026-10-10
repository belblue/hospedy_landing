// llms-full.txt: las páginas principales en Markdown, una detrás de otra (server/utils/markdown.ts), para quien quiera
// leer toda la web de una vez. Sin el blog: sus artículos van enlazados en llms.txt.
import { SITIO_URL } from '../../utils/sitio'
import { EMPRESA, INDICE_FUNCIONES, PARA_QUIEN, TODAS_LAS_FUNCIONES } from '../../utils/navegacion'

const RUTAS = [
  '/',
  INDICE_FUNCIONES.ruta,
  ...TODAS_LAS_FUNCIONES.map(funcion => funcion.ruta),
  ...PARA_QUIEN.map(tipo => tipo.ruta),
  '/precios',
  '/faq',
  ...EMPRESA.filter(pagina => ['/contacto', '/quienes-somos'].includes(pagina.ruta)).map(pagina => pagina.ruta),
]

const todoEnMarkdown = defineCachedFunction(async () => {
  const partes: string[] = [`# Hospedy: la web en Markdown\n\nFuente: ${SITIO_URL}. Índice con enlaces: ${SITIO_URL}/llms.txt\n`]
  for (const ruta of RUTAS) {
    partes.push(await paginaEnMarkdown(ruta))
  }
  return partes.join('\n---\n\n')
}, { name: 'llms-full', maxAge: 60 * 60, swr: true, getKey: () => 'todo' })

export default defineEventHandler(async (event) => {
  setResponseHeaders(event, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'public, max-age=3600',
  })
  return await todoEnMarkdown()
})
