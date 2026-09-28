// Icono SVG de una agencia, servido desde la propia web: el navegador no pide nada a terceros. Sale del
// PMS y se guarda 24 horas, como la lista (server/utils/agencias.ts).
export default defineEventHandler(async (event) => {
  const canal = Number(getRouterParam(event, 'canal'))
  if (!Number.isInteger(canal) || canal < 1 || canal > 99999) {
    throw createError({ statusCode: 404 })
  }
  let svg: string
  try {
    svg = await iconoDeAgencia(canal)
  } catch {
    throw createError({ statusCode: 404 })
  }
  setResponseHeaders(event, {
    'Content-Type': 'image/svg+xml; charset=utf-8',
    'Cache-Control': 'public, max-age=86400',
    'X-Content-Type-Options': 'nosniff',
    // aunque alguien abra el SVG suelto, no ejecuta nada
    'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; sandbox",
  })
  return svg
})
