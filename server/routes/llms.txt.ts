// llms.txt (formato de llmstxt.org): qué es Hospedy y sus páginas, con un enlace a la versión en Markdown de cada una,
// para que un asistente de IA entienda la web sin leer el HTML. Sale de los mismos datos que la barra y el sitemap.
import { CONTACTO, DEFINICION, SITIO_URL } from '../../utils/sitio'
import { EMPRESA, FUNCIONES, DESTACADO, LEGAL, PARA_QUIEN, RECURSOS, INDICE_FUNCIONES } from '../../utils/navegacion'
import type { PaginaWeb } from '../../utils/navegacion'
import { ARTICULOS } from '../../utils/blog'
import { COMISION_COBROS, CUOTA_OTA_EXTRA, DIAS_DE_PRUEBA, MENSAJE_PLANES, PLANES } from '../../utils/precios'

const COMISION = `${String(COMISION_COBROS.porcentaje).replace('.', ',')} % + ${COMISION_COBROS.fijo.toFixed(2).replace('.', ',')} €`

function enlace(pagina: { nombre: string, ruta: string, descripcion?: string }) {
  const md = `${SITIO_URL}${rutaMarkdown(pagina.ruta)}`
  return `- [${pagina.nombre}](${md})${pagina.descripcion ? `: ${pagina.descripcion}` : ''}`
}

// 1290 → «1.290», como en la web
function miles(numero: number) {
  return String(numero).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function planes() {
  return PLANES.map(plan => `${plan.nombre} (${plan.unidades}): ${plan.mensual} €/mes o ${miles(plan.anual)} €/año`).join('; ')
}

export default defineEventHandler((event) => {
  const empresa: PaginaWeb[] = EMPRESA.filter(pagina => pagina.ruta !== '/precios')
  const texto = [
    '# Hospedy',
    '',
    `> ${DEFINICION}`,
    '',
    `Hospedy es una marca de Silatek, S.L.U. Web: ${SITIO_URL}. Contacto: ${CONTACTO.email}.`,
    '',
    '## Datos clave',
    '',
    `- Precios sin IVA, según las unidades del alojamiento (habitaciones, apartamentos o casas): ${planes()}.`,
    `- ${MENSAJE_PLANES.titulo}: ${MENSAJE_PLANES.texto}`,
    `- Cada plan incluye de 1 a 5 agencias (OTAs) en el channel manager; cada agencia de más cuesta ${CUOTA_OTA_EXTRA} €/mes.`,
    `- Cobros online con tarjeta: ${COMISION} por cobro, IVA incluido, solo si se usan. El motor de reservas no cobra comisión por reserva.`,
    `- Prueba gratis de ${DIAS_DE_PRUEBA} días con todas las funciones, sin tarjeta y sin permanencia.`,
    '- Soporte en español por email y videollamada, de lunes a viernes, con respuesta en 24-48 horas.',
    '- Normativa: partes de viajeros a SES Hospedajes (Policía Nacional y Guardia Civil) y a la Ertzaintza; encuesta de ocupación del INE (hoteles y apartamentos, enviada con un clic; turismo rural, rellena para presentar); documento de admisión de 11 comunidades autónomas.',
    '- Para hoteles, hostales, casas rurales y apartamentos turísticos en España. Funciona en el navegador, también en el móvil.',
    '',
    '## Funciones',
    '',
    enlace(INDICE_FUNCIONES),
    ...FUNCIONES.flatMap(grupo => grupo.items.map(enlace)),
    enlace(DESTACADO),
    '',
    '## Para quién',
    '',
    ...PARA_QUIEN.map(enlace),
    '',
    '## Precios',
    '',
    enlace({ nombre: 'Precios', ruta: '/precios', descripcion: 'Los cuatro planes, lo que incluyen y la comisión de los cobros' }),
    ...RECURSOS.filter(r => r.ruta === '/comparar').map(enlace),
    '',
    '## Guías',
    '',
    ...ARTICULOS.map(a => enlace({ nombre: a.titulo, ruta: `/blog/${a.slug}`, descripcion: a.extracto })),
    '',
    '## Empresa y contacto',
    '',
    ...RECURSOS.filter(r => r.ruta === '/faq').map(enlace),
    ...empresa.map(enlace),
    '',
    '## Optional',
    '',
    ...LEGAL.filter(pagina => pagina.indexar !== false).map(enlace),
    `- [Todo el contenido en un solo fichero](${SITIO_URL}/llms-full.txt): las páginas principales en Markdown`,
    '',
  ].join('\n')
  setResponseHeaders(event, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'public, max-age=3600',
  })
  return texto
})
