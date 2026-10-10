// Lo común de cada artículo del blog: su título y descripción para buscadores, y su BlogPosting. Los datos salen de
// utils/blog.ts, los mismos que pinta el índice.
export function useArticulo(slug: string) {
  const articulo = articuloDelBlog(slug)
  useSeoPagina({
    titulo: articulo.tituloSeo,
    descripcion: articulo.descripcion,
    tipo: 'article',
    publicado: articulo.publicado,
    actualizado: articulo.actualizado,
  })
  useEsquema('articulo', esquemaArticulo(articulo))
  return articulo
}
