// Título, descripción, canonical, Open Graph, tarjeta de X y robots de cada página, en un solo sitio. Cada página lo
// llama una vez; lo común a todas (imagen por defecto, idioma, nombre del sitio) va en nuxt.config.

export interface SeoPagina {
  // Sin « | Hospedy», que lo añade la plantilla: unos 50 caracteres como mucho, con la búsqueda principal delante
  titulo: string
  // Unos 155 caracteres como mucho: lo que responde la página
  descripcion: string
  tipo?: 'website' | 'article'
  // false: noindex (sigue los enlaces) y fuera del sitemap
  indexar?: boolean
  // artículos: AAAA-MM-DD
  publicado?: string
  actualizado?: string
}

export function useSeoPagina(seo: SeoPagina) {
  const canonical = urlAbsoluta(useRoute().path)
  // fuera de gethospedy.com nada se indexa: además de la cabecera X-Robots-Tag (server/plugins/indexacion.ts), la
  // propia página lo dice
  const produccion = esHostDeProduccion(useRequestURL().hostname)
  const robots = !produccion
    ? 'noindex, nofollow'
    : seo.indexar === false ? 'noindex, follow' : 'index, follow, max-image-preview:large'

  useSeoMeta({
    title: seo.titulo,
    description: seo.descripcion,
    robots,
    ogType: seo.tipo || 'website',
    ogTitle: seo.titulo,
    ogDescription: seo.descripcion,
    ogUrl: canonical,
    twitterTitle: seo.titulo,
    twitterDescription: seo.descripcion,
    ...(seo.publicado ? { articlePublishedTime: seo.publicado } : {}),
    ...(seo.actualizado ? { articleModifiedTime: seo.actualizado } : {}),
  })
  useHead({ link: [{ rel: 'canonical', href: canonical, key: 'canonical' }] })
}
