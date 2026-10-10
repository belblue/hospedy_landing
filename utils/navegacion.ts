// Mapa de la web: de aquí salen la barra, el pie, las páginas de índice, el sitemap y los datos estructurados.
//
// «actualizado» es la fecha del último cambio de CONTENIDO de la página (el lastmod del sitemap): se cambia al tocar
// lo que dice la página, no al tocar su diseño. Sin clases de Tailwind: utils/ no está en el content de Tailwind.
import { ARTICULOS } from './blog'

export interface PaginaWeb {
  nombre: string
  ruta: string
  // una línea: lo que resuelve la página (menús e índices)
  descripcion?: string
  // AAAA-MM-DD
  actualizado: string
  // false: lleva noindex y no va en el sitemap
  indexar?: boolean
}

export interface GrupoDeFunciones {
  titulo: string
  items: PaginaWeb[]
}

export const PORTADA: PaginaWeb = { nombre: 'Inicio', ruta: '/', actualizado: '2026-10-10' }

export const FUNCIONES: GrupoDeFunciones[] = [
  {
    titulo: 'Gestiona tu alojamiento',
    items: [
      {
        nombre: 'Check-in y auto check-in',
        ruta: '/funciones/check-in',
        descripcion: 'Escanea el documento en el mostrador o deja que el huésped lo haga desde su móvil',
        actualizado: '2026-10-10',
      },
      {
        nombre: 'Planning y reservas',
        ruta: '/funciones/planning-reservas',
        descripcion: 'Todas tus reservas de un vistazo; arrastra para moverlas',
        actualizado: '2026-10-10',
      },
      {
        nombre: 'Facturación',
        ruta: '/funciones/facturacion',
        descripcion: 'La factura de cada reserva con un clic, y Zenfisk con Verifactu incluido',
        actualizado: '2026-10-10',
      },
      {
        nombre: 'Comunicaciones con el huésped',
        ruta: '/funciones/comunicaciones',
        descripcion: 'Emails automáticos a tus huéspedes, cuando tú decidas',
        actualizado: '2026-10-10',
      },
      {
        nombre: 'Limpieza',
        ruta: '/funciones/limpieza',
        descripcion: 'Tu equipo marca las habitaciones desde el móvil y tú lo ves en el planning',
        actualizado: '2026-10-10',
      },
    ],
  },
  {
    titulo: 'Cumple la normativa',
    items: [
      {
        nombre: 'Partes de viajeros',
        ruta: '/funciones/partes-viajeros',
        descripcion: 'Se envían solos a la policía, sin entrar en ningún portal',
        actualizado: '2026-10-10',
      },
      {
        nombre: 'Encuestas INE y documentos autonómicos',
        ruta: '/funciones/encuestas-ine',
        descripcion: 'La encuesta de ocupación, al INE con un clic; y los documentos autonómicos',
        actualizado: '2026-10-10',
      },
    ],
  },
  {
    titulo: 'Vende sin intermediarios',
    items: [
      {
        nombre: 'Channel Manager',
        ruta: '/funciones/channel-manager',
        descripcion: 'Precios y disponibilidad de todas tus agencias en un calendario',
        actualizado: '2026-10-10',
      },
      {
        nombre: 'Motor de reservas',
        ruta: '/funciones/motor-reservas',
        descripcion: 'Reservas directas en tu web, sin comisión por reserva',
        actualizado: '2026-10-10',
      },
      {
        nombre: 'Cobros y depósitos',
        ruta: '/funciones/cobros',
        descripcion: 'Cobra el total o un depósito con tarjeta al reservar',
        actualizado: '2026-10-10',
      },
    ],
  },
]

// La función que va aparte en el menú
export const DESTACADO: PaginaWeb = {
  nombre: 'Hugo, tu asistente con IA',
  ruta: '/funciones/hugo',
  descripcion: 'Pídele cambios o dudas, escribiendo o con la voz; tú confirmas',
  actualizado: '2026-10-10',
}

// Las once funciones en una lista: los tres grupos y Hugo
export const TODAS_LAS_FUNCIONES: PaginaWeb[] = [...FUNCIONES.flatMap(grupo => grupo.items), DESTACADO]

// El índice de todas las funciones, que es también la miga de pan de cada una
export const INDICE_FUNCIONES: PaginaWeb = {
  nombre: 'Funciones',
  ruta: '/funciones',
  descripcion: 'Todo lo que hace Hospedy, agrupado',
  actualizado: '2026-10-10',
}

export const PARA_QUIEN: PaginaWeb[] = [
  {
    nombre: 'Hoteles y hostales',
    ruta: '/hoteles',
    descripcion: 'Check-in con escáner, partes, INE y channel para muchas habitaciones',
    actualizado: '2026-10-10',
  },
  {
    nombre: 'Casas rurales',
    ruta: '/casas-rurales',
    descripcion: 'Desde el móvil, con auto check-in y la encuesta de turismo rural',
    actualizado: '2026-10-10',
  },
  {
    nombre: 'Apartamentos turísticos',
    ruta: '/apartamentos',
    descripcion: 'Reservas directas, cobros por adelantado y limpieza coordinada',
    actualizado: '2026-10-10',
  },
]

export const RECURSOS: PaginaWeb[] = [
  { nombre: 'Blog y guías', ruta: '/blog', descripcion: 'Normativa, ventas y gestión del día a día', actualizado: '2026-10-10' },
  { nombre: 'Comparativa de PMS', ruta: '/comparar', descripcion: 'Hospedy frente a otros programas', actualizado: '2026-10-10' },
  { nombre: 'Preguntas frecuentes', ruta: '/faq', descripcion: 'Las dudas de antes de empezar', actualizado: '2026-10-10' },
]

export const EMPRESA: PaginaWeb[] = [
  { nombre: 'Precios', ruta: '/precios', actualizado: '2026-10-10' },
  { nombre: 'Contacto', ruta: '/contacto', actualizado: '2026-10-10' },
  { nombre: 'Ver una demo', ruta: '/demo', actualizado: '2026-10-10' },
  { nombre: 'Quiénes somos', ruta: '/quienes-somos', actualizado: '2026-10-10' },
  { nombre: 'Programa Amigos', ruta: '/programa-amigos', actualizado: '2026-09-25' },
]

export const LEGAL: PaginaWeb[] = [
  // el domicilio tiene que estar publicado, pero no hace falta que lo recojan los buscadores
  { nombre: 'Aviso legal', ruta: '/aviso_legal', actualizado: '2026-10-10', indexar: false },
  { nombre: 'Privacidad', ruta: '/privacidad', actualizado: '2026-10-10' },
  { nombre: 'Cookies', ruta: '/cookies', actualizado: '2026-09-23' },
  { nombre: 'Encargo del tratamiento', ruta: '/encargo-tratamiento', actualizado: '2026-10-10' },
]

// Solo se indexa con la cuenta de demo activada; mientras tanto la página remite a las otras formas de probar
export const CUENTA_DEMO: PaginaWeb = { nombre: 'Cuenta de demo', ruta: '/cuenta-demo', actualizado: '2026-09-26' }

// Páginas que van en el sitemap, con su fecha de último cambio
export function paginasDelSitemap({ demoLista }: { demoLista: boolean }): { ruta: string, actualizado: string }[] {
  const paginas: PaginaWeb[] = [
    PORTADA,
    INDICE_FUNCIONES,
    ...TODAS_LAS_FUNCIONES,
    ...PARA_QUIEN,
    ...EMPRESA,
    ...RECURSOS,
    ...ARTICULOS.map(articulo => ({ nombre: articulo.titulo, ruta: `/blog/${articulo.slug}`, actualizado: articulo.actualizado })),
    ...(demoLista ? [CUENTA_DEMO] : []),
    ...LEGAL,
  ]
  const vistas = new Set<string>()
  return paginas
    .filter(pagina => pagina.indexar !== false && !vistas.has(pagina.ruta) && vistas.add(pagina.ruta))
    .map(({ ruta, actualizado }) => ({ ruta, actualizado }))
}

// Lo que enseña al final de cada página «Sigue explorando» (RelacionesPagina): funciones relacionadas, guías del blog
// y tipos de alojamiento. Nunca hace falta volver a la portada para llegar a otra página.
export interface Relaciones {
  // rutas de TODAS_LAS_FUNCIONES
  funciones: string[]
  // slugs de utils/blog.ts
  guias: string[]
  // rutas de PARA_QUIEN
  tipos: string[]
}

const LOS_TRES = ['/hoteles', '/casas-rurales', '/apartamentos']
const F = (clave: string) => `/funciones/${clave}`

export const RELACIONES: Record<string, Relaciones> = {
  'hoteles': {
    funciones: [F('check-in'), F('partes-viajeros'), F('encuestas-ine'), F('planning-reservas'), F('facturacion'), F('channel-manager')],
    guias: ['cuanto-cuesta-pms-hotel', 'como-enviar-partes-viajeros-ses-hospedajes', 'pre-checkin-ahorrar-tiempo'],
    tipos: ['/casas-rurales', '/apartamentos'],
  },
  'casas-rurales': {
    funciones: [F('check-in'), F('planning-reservas'), F('channel-manager'), F('encuestas-ine'), F('partes-viajeros'), F('motor-reservas')],
    guias: ['mejores-pms-casas-rurales', 'como-evitar-overbookings', 'hospedy-vs-ruralgest'],
    tipos: ['/hoteles', '/apartamentos'],
  },
  'apartamentos': {
    funciones: [F('motor-reservas'), F('channel-manager'), F('cobros'), F('check-in'), F('limpieza'), F('comunicaciones')],
    guias: ['reservas-directas-vs-otas', 'como-evitar-overbookings', 'pre-checkin-ahorrar-tiempo'],
    tipos: ['/hoteles', '/casas-rurales'],
  },
  'partes-viajeros': {
    funciones: [F('encuestas-ine'), F('check-in')],
    guias: ['como-enviar-partes-viajeros-ses-hospedajes', 'pre-checkin-ahorrar-tiempo'],
    tipos: LOS_TRES,
  },
  'encuestas-ine': {
    funciones: [F('partes-viajeros'), F('planning-reservas')],
    guias: ['encuestas-ine-alojamientos-turisticos'],
    tipos: LOS_TRES,
  },
  'check-in': {
    funciones: [F('partes-viajeros'), F('comunicaciones'), F('planning-reservas')],
    guias: ['pre-checkin-ahorrar-tiempo', 'como-enviar-partes-viajeros-ses-hospedajes'],
    tipos: LOS_TRES,
  },
  'planning-reservas': {
    funciones: [F('channel-manager'), F('check-in'), F('limpieza'), F('hugo')],
    guias: ['como-evitar-overbookings'],
    tipos: LOS_TRES,
  },
  'facturacion': {
    funciones: [F('cobros'), F('planning-reservas')],
    guias: ['cuanto-cuesta-pms-hotel'],
    tipos: LOS_TRES,
  },
  'comunicaciones': {
    funciones: [F('check-in'), F('cobros'), F('hugo'), F('motor-reservas')],
    guias: ['pre-checkin-ahorrar-tiempo'],
    tipos: ['/apartamentos', '/casas-rurales', '/hoteles'],
  },
  'limpieza': {
    funciones: [F('planning-reservas')],
    guias: [],
    tipos: ['/hoteles', '/apartamentos'],
  },
  'channel-manager': {
    funciones: [F('motor-reservas'), F('planning-reservas'), F('hugo'), F('cobros')],
    guias: ['como-evitar-overbookings', 'reservas-directas-vs-otas'],
    tipos: LOS_TRES,
  },
  'motor-reservas': {
    funciones: [F('channel-manager'), F('cobros')],
    guias: ['reservas-directas-vs-otas'],
    tipos: ['/apartamentos', '/casas-rurales'],
  },
  'cobros': {
    funciones: [F('motor-reservas'), F('comunicaciones'), F('facturacion')],
    guias: ['reservas-directas-vs-otas'],
    tipos: ['/casas-rurales', '/apartamentos', '/hoteles'],
  },
  'hugo': {
    funciones: [F('channel-manager'), F('planning-reservas'), F('comunicaciones')],
    guias: [],
    tipos: LOS_TRES,
  },
}
