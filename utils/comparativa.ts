// La comparativa con otros programas, con la información pública de cada empresa en la fecha de REVISION_COMPARATIVA:
// la IA de cada uno (TablaIa, en /comparar y en el artículo «PMS con inteligencia artificial») y su precio y normativa
// (/comparar). Las fuentes, en la nota ridid-pms-landing-competencia-2026-11 del repo de documentación.
// - Los competidores se nombran, pero sin enlazar a sus webs (decisión de Arturo del 04-11-2026).
// - Un dato de otro programa solo se cambia después de volver a mirarlo en su fuente, y entonces se cambia también la
//   fecha: la página la enseña junto a las tablas.
// - En la fila de Hospedy, solo lo que está en producción y publicado en el manual. Lo que Hospedy comparte con otro
//   programa, como la voz, no se cuenta como ventaja de ese programa, y lo que no hace por decisión, como contestar a los
//   huéspedes, va como elección y sin marca de «no» (Arturo, 05-11-2026).
// - «Hospedy vs RuralGest» y «Los 5 mejores PMS para casas rurales» llevan sus datos escritos en el texto: al cambiar uno
//   aquí, se repasan allí.
// Sin clases de Tailwind: utils/ no está en el content de Tailwind.
import { DIAS_DE_PRUEBA, PLANES } from './precios'

export const REVISION_COMPARATIVA = '2026-11-04'

// si, no o parcial (IconoMarca); sin marca, la celda es solo texto: lo que no consta, lo que no se ha podido comprobar o
// lo que Hospedy no hace por decisión
export interface CeldaComparativa {
  marca?: 'si' | 'no' | 'parcial'
  texto: string
}

export interface FilaIa {
  nombre: string
  // la fila de Hospedy, que va primero y resaltada
  propia?: boolean
  huespedes: CeldaComparativa
  datos: CeldaComparativa
  cambios: CeldaComparativa
  coste: string
}

export interface FilaPrecio {
  nombre: string
  propia?: boolean
  precio: CeldaComparativa
  partes: CeldaComparativa
  ine: CeldaComparativa
  // lo que conviene saber del precio: qué incluye y qué va aparte
  notas: string
}

const NO_CONSTA: CeldaComparativa = { texto: 'No consta' }
const SIN_COMPROBAR: CeldaComparativa = { texto: 'Sin comprobar' }
const NO: CeldaComparativa = { marca: 'no', texto: 'No' }

export const COLUMNAS_IA = {
  cambios: 'Hace cambios que tú confirmas',
  datos: 'Responde preguntas sobre tus datos',
  huespedes: 'Contesta a los huéspedes por ti',
  coste: 'Coste de la IA',
}

export const FILAS_IA: FilaIa[] = [
  {
    nombre: 'Hospedy (Hugo)',
    propia: true,
    huespedes: { texto: 'No, a propósito: contestas tú' },
    datos: { marca: 'si', texto: 'Sí, con cifras que calcula el programa' },
    cambios: { marca: 'si', texto: 'Sí: precios, reservas, huéspedes, partes, tareas y facturas, siempre con tu confirmación' },
    coste: 'Incluida en todos los planes, de precio público',
  },
  {
    nombre: 'Avirato',
    huespedes: { marca: 'si', texto: 'Sí: WhatsApp, web, Booking, Airbnb y email' },
    datos: { marca: 'si', texto: 'Sí' },
    cambios: NO_CONSTA,
    coste: 'Incluida, ampliable con complementos de pago',
  },
  {
    nombre: 'Cloudbeds',
    huespedes: { marca: 'si', texto: 'Sí, con su agente de atención al huésped' },
    datos: { marca: 'si', texto: 'Sí, con «Ask Signals»' },
    cambios: { marca: 'parcial', texto: 'Crea tareas desde los mensajes' },
    coste: 'El agente, sin coste extra; el programa, con presupuesto',
  },
  {
    nombre: 'Mews',
    huespedes: { marca: 'si', texto: 'Sí, en automático' },
    datos: { marca: 'parcial', texto: 'Resúmenes de sus informes' },
    cambios: { marca: 'si', texto: 'Sí: reservas y tareas, con la aprobación que se configure' },
    coste: 'Con presupuesto',
  },
  {
    nombre: 'Amenitiz',
    huespedes: { marca: 'si', texto: 'Su asistente Ami redacta o envía las respuestas' },
    datos: NO,
    cambios: NO,
    coste: 'Ami es un módulo de pago aparte',
  },
  {
    nombre: 'Little Hotelier',
    huespedes: { marca: 'parcial', texto: 'Mensajes automáticos' },
    datos: NO,
    cambios: NO,
    coste: 'Los precios dinámicos, como complemento',
  },
  {
    nombre: 'AvaiBook',
    huespedes: NO,
    datos: NO,
    cambios: NO,
    coste: 'Solo un chat de soporte con IA',
  },
  {
    nombre: 'MisterPlan (antes RuralGest)',
    huespedes: NO_CONSTA,
    datos: NO_CONSTA,
    cambios: NO_CONSTA,
    coste: '—',
  },
  {
    nombre: 'HotelManager',
    huespedes: NO_CONSTA,
    datos: NO_CONSTA,
    cambios: NO_CONSTA,
    coste: '—',
  },
]

export const COLUMNAS_PRECIO = {
  precio: 'Precio',
  partes: 'Partes a SES Hospedajes',
  ine: 'Encuesta del INE',
  notas: 'Lo que conviene saber',
}

export const FILAS_PRECIO: FilaPrecio[] = [
  {
    nombre: 'Hospedy',
    propia: true,
    precio: { marca: 'si', texto: `Público: desde ${PLANES[0].mensual} € + IVA al mes` },
    partes: { marca: 'si', texto: 'Automáticos, a SES Hospedajes y a la Ertzaintza' },
    ine: { marca: 'si', texto: 'Hoteles y apartamentos: se envía con un clic, con justificante. Turismo rural: sale rellena' },
    notas: `Todas las funciones en todos los planes: Hugo, channel manager, motor de reservas y Zenfisk con Verifactu. Agencias incluidas según el plan. Sin permanencia y ${DIAS_DE_PRUEBA} días gratis.`,
  },
  {
    nombre: 'MisterPlan (antes RuralGest)',
    precio: { marca: 'si', texto: 'Público: desde 45 € + IVA al mes' },
    partes: { marca: 'si', texto: 'Automáticos' },
    ine: { texto: 'Anuncia el envío telemático' },
    notas: 'Con motor de reservas y channel manager, sin permanencia y con soporte telefónico las 24 horas.',
  },
  {
    nombre: 'HotelManager',
    precio: { marca: 'si', texto: 'Público: de 109 a 449 €/mes' },
    partes: { marca: 'si', texto: 'Automáticos' },
    ine: { texto: 'Anuncia un «Envío Informe INE», sin detalle' },
    notas: 'Instalación de 150 a 350 €. El plan de 109 € no lleva channel manager y el de 179 € conecta de 1 a 3 canales.',
  },
  {
    nombre: 'Avirato',
    precio: { texto: 'Con presupuesto' },
    partes: SIN_COMPROBAR,
    ine: { marca: 'parcial', texto: 'Semiautomática, con vista previa' },
    notas: 'Más de 450 agencias. Tres planes y 20 días de prueba.',
  },
  {
    nombre: 'Cloudbeds',
    precio: { texto: 'Con presupuesto' },
    partes: { marca: 'si', texto: 'Integración propia y gratuita; también Ertzaintza y Mossos' },
    ine: { marca: 'parcial', texto: 'Genera un fichero mensual' },
    notas: '—',
  },
  {
    nombre: 'Mews',
    precio: { texto: 'Con presupuesto' },
    partes: { marca: 'parcial', texto: 'Genera un fichero diario que se sube a mano' },
    ine: { marca: 'parcial', texto: 'Genera un fichero que se sube a mano' },
    notas: 'Pensado para hoteles medianos, grupos y cadenas.',
  },
  {
    nombre: 'Amenitiz',
    precio: { texto: 'Con presupuesto, según habitaciones' },
    partes: { marca: 'si', texto: 'Con Chekin, incluido en su plan Core' },
    ine: SIN_COMPROBAR,
    notas: 'Planes Core y Advanced. Ami, la web, su sistema de precios, el TPV y las cerraduras van aparte. Conexiones con agencias sin límite.',
  },
  {
    nombre: 'Little Hotelier',
    precio: { texto: 'En dólares, según habitaciones, más IVA' },
    partes: { texto: 'No consta integración propia' },
    ine: SIN_COMPROBAR,
    notas: 'Es de SiteMinder. Prueba de 30 días.',
  },
  {
    nombre: 'AvaiBook',
    precio: { texto: 'Según unidades' },
    partes: { marca: 'si', texto: 'Manual, semiautomático o automático' },
    ine: SIN_COMPROBAR,
    notas: 'Sobre todo para alquiler vacacional. El plan Standard llega a 5 unidades; el lector de documentos va en Pro y Elite, y Verifactu, en los planes superiores.',
  },
]
