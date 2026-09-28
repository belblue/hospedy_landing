import respaldo from '../data/agencias-respaldo.json'

// Lista de agencias para las páginas de la web: el nombre y, si tenemos su logo en SVG, la ruta de su
// icono servido desde esta misma web. Sin el PMS, la copia del repo, sin iconos. Nunca falla.
export default defineEventHandler(async () => {
  let agencias: { canal: number, nombre: string, svg?: boolean }[] = respaldo.agencias
  let delPms = false
  try {
    agencias = await agenciasDelPms()
    delPms = true
  } catch {
    // se queda la copia del repo
  }
  const lista = agencias.map(agencia => ({
    canal: agencia.canal,
    nombre: agencia.nombre,
    icono: delPms && agencia.svg ? `/logos-agencias/${agencia.canal}` : null,
  }))
  return { total: lista.length, agencias: lista }
})
