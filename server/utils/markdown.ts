// Las páginas de la web en Markdown, para asistentes y agentes de IA (/ruta.md, llms-full.txt). Se pide el HTML a la
// propia app (sin salir a la red), se toma solo el <main> y se convierte con turndown. Fuera queda lo que no es texto:
// las maquetas (data-nosnippet, con datos de ejemplo), los iconos, los formularios, los botones y las migas.
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'
import { SITIO_URL, urlAbsoluta } from '../../utils/sitio'
import { paginasDelSitemap } from '../../utils/navegacion'

function conversor() {
  const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', emDelimiter: '*' })
  turndown.use(gfm)
  // fuera también el <caption> de las tablas: es para lectores de pantalla y en Markdown rompería la tabla
  turndown.remove(['script', 'style', 'noscript', 'svg', 'img', 'button', 'form', 'input', 'textarea', 'select', 'label', 'iframe', 'nav', 'caption'])
  turndown.remove((nodo) => {
    const elemento = nodo as unknown as Element
    return Boolean(elemento.hasAttribute?.('data-nosnippet') || elemento.getAttribute?.('aria-hidden') === 'true')
  })
  // enlaces absolutos: el Markdown se lee fuera de la web
  turndown.addRule('enlaces', {
    filter: nodo => nodo.nodeName === 'A' && Boolean((nodo as unknown as Element).getAttribute('href')),
    replacement: (contenido, nodo) => {
      let href = (nodo as unknown as Element).getAttribute('href') || ''
      if (href.startsWith('/')) href = SITIO_URL + href
      const texto = contenido.replace(/\s+/g, ' ').trim()
      return texto ? `[${texto}](${href})` : ''
    },
  })
  return turndown
}

function atributo(html: string, patron: RegExp): string {
  const m = html.match(patron)
  return m ? m[1].replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x2F;/g, '/').replace(/&#39;/g, "'") : ''
}

async function convertir(ruta: string): Promise<string> {
  const html = await $fetch<string>(ruta, { responseType: 'text', headers: { accept: 'text/html' } })
  const main = html.match(/<main id="contenido"[^>]*>([\s\S]*?)<\/main>/)
  if (!main) throw new Error(`Sin <main> en ${ruta}`)
  const titulo = atributo(html, /<title>([^<]*)<\/title>/)
  const descripcion = atributo(html, /<meta name="description" content="([^"]*)"/)
  const cuerpo = conversor().turndown(main[1]).replace(/\n{3,}/g, '\n\n').trim()
  const cabecera = [`Título: ${titulo}`, `URL: ${urlAbsoluta(ruta)}`]
  if (descripcion) cabecera.push(`Resumen: ${descripcion}`)
  return `${cabecera.join('\n')}\n\n${cuerpo}\n`
}

// Una hora en caché: las páginas solo cambian con un despliegue
export const paginaEnMarkdown = defineCachedFunction(convertir, {
  name: 'pagina-md',
  maxAge: 60 * 60,
  swr: true,
  getKey: (ruta: string) => ruta.replace(/[^a-z0-9]+/gi, '_') || 'portada',
})

// Las páginas que tienen versión en Markdown: las del sitemap (lo indexable)
export function rutasConMarkdown(demoLista: boolean): Set<string> {
  return new Set(paginasDelSitemap({ demoLista }).map(pagina => pagina.ruta))
}

// /precios → /precios.md; la portada, /index.md
export function rutaMarkdown(ruta: string): string {
  return ruta === '/' ? '/index.md' : `${ruta.replace(/\/+$/, '')}.md`
}
