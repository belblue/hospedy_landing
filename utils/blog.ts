// Artículos del blog: de aquí salen el índice, el título y la descripción de cada artículo, su fecha, el sitemap y los
// datos estructurados. Al cambiar el contenido de un artículo se cambia su «actualizado».

export type CategoriaBlog = 'Normativa' | 'Ventas y canales' | 'Gestión diaria' | 'Elegir un PMS'

export interface ArticuloBlog {
  slug: string
  // el H1 del artículo y el título de su tarjeta
  titulo: string
  // el <title>: unos 50 caracteres como mucho (la plantilla añade « | Hospedy»), con la búsqueda delante
  tituloSeo: string
  // la meta description: unos 155 caracteres como mucho
  descripcion: string
  // el texto de la tarjeta del índice
  extracto: string
  categoria: CategoriaBlog
  minutos: number
  // AAAA-MM-DD
  publicado: string
  actualizado: string
  // la página del producto con la que se relaciona (una función, un tipo de alojamiento o /precios)
  funcion?: string
}

export const ARTICULOS: ArticuloBlog[] = [
  {
    slug: 'como-enviar-partes-viajeros-ses-hospedajes',
    titulo: 'Cómo enviar partes de viajeros a SES Hospedajes automáticamente',
    tituloSeo: 'Cómo enviar partes de viajeros a SES Hospedajes',
    descripcion: 'Qué exige el Real Decreto 933/2021, qué datos lleva el parte de viajeros, las multas y cómo enviarlo a SES Hospedajes sin entrar en el portal.',
    extracto: 'Guía del Real Decreto 933/2021: qué datos lleva el parte, multas de hasta 30.000 € y cómo cumplir sin entrar en el portal.',
    categoria: 'Normativa',
    minutos: 10,
    publicado: '2026-06-03',
    actualizado: '2026-10-10',
    funcion: '/funciones/partes-viajeros',
  },
  {
    slug: 'encuestas-ine-alojamientos-turisticos',
    titulo: 'Guía completa: Encuesta INE para alojamientos turísticos 2026',
    tituloSeo: 'Encuesta del INE para alojamientos: guía 2026',
    descripcion: 'Plazos, datos y cómo cumplir con la encuesta de ocupación del INE. Con Hospedy sale rellena con tus reservas y, en hoteles y apartamentos, va con un clic.',
    extracto: 'Plazos, datos que pide y cómo tenerla rellena con tus reservas; en hoteles y apartamentos, se envía con un clic.',
    categoria: 'Normativa',
    minutos: 8,
    publicado: '2026-06-03',
    actualizado: '2026-10-10',
    funcion: '/funciones/encuestas-ine',
  },
  {
    slug: 'mejores-pms-casas-rurales',
    titulo: 'Los 5 mejores PMS para casas rurales en España [2026]',
    tituloSeo: 'Los 5 mejores PMS para casas rurales (2026)',
    descripcion: 'Hospedy, RuralGest, AvaiBook, Amenitiz y Cloudbeds comparados para casas rurales: precios, funciones, encuesta del INE y partes de viajeros.',
    extracto: 'Comparativa de Hospedy, RuralGest, AvaiBook, Amenitiz y Cloudbeds. Precios y funcionalidades.',
    categoria: 'Elegir un PMS',
    minutos: 12,
    publicado: '2026-06-03',
    actualizado: '2026-10-10',
    funcion: '/casas-rurales',
  },
  {
    slug: 'hospedy-vs-ruralgest',
    titulo: 'Hospedy vs RuralGest: Comparativa completa 2026',
    tituloSeo: 'Hospedy vs RuralGest: comparativa 2026',
    descripcion: 'Hospedy y RuralGest, frente a frente: encuesta del INE, precios públicos, channel manager y servicios. Qué ofrece cada uno y para quién encaja mejor.',
    extracto: 'Diferencias entre dos PMS para casas rurales y hoteles pequeños en España: INE, precios y servicios.',
    categoria: 'Elegir un PMS',
    minutos: 10,
    publicado: '2026-06-03',
    actualizado: '2026-10-10',
    funcion: '/casas-rurales',
  },
  {
    slug: 'como-evitar-overbookings',
    titulo: 'Cómo conectar tu casa rural a Booking.com sin overbooking',
    tituloSeo: 'Conectar tu casa rural a Booking sin overbooking',
    descripcion: 'Cómo conectar tu casa rural a Booking.com y otras agencias sin dobles reservas, con un calendario que reparte la disponibilidad entre tus canales.',
    extracto: 'Un calendario para todas tus agencias: lo que vendes en una deja de estar a la venta en las demás.',
    categoria: 'Ventas y canales',
    minutos: 7,
    publicado: '2026-06-03',
    actualizado: '2026-10-10',
    funcion: '/funciones/channel-manager',
  },
  {
    slug: 'pre-checkin-ahorrar-tiempo',
    titulo: 'Pre check-in: Cómo ahorrar tiempo en la recepción',
    tituloSeo: 'Pre check-in: cómo ahorrar tiempo en recepción',
    descripcion: 'Con el pre check-in tus huéspedes rellenan sus datos y firman desde el móvil antes de llegar. Cómo funciona y cuánto tiempo te ahorra en recepción.',
    extracto: 'Los huéspedes rellenan sus datos y firman desde el móvil antes de llegar: en recepción solo queda darles la llave.',
    categoria: 'Gestión diaria',
    minutos: 6,
    publicado: '2026-06-03',
    actualizado: '2026-10-10',
    funcion: '/funciones/check-in',
  },
  {
    slug: 'reservas-directas-vs-otas',
    titulo: 'Reservas directas vs OTAs: qué es más rentable',
    tituloSeo: 'Reservas directas vs OTAs: qué es más rentable',
    descripcion: 'Lo que cuestan las comisiones de Booking, Airbnb y otras agencias frente a la reserva directa, y cómo conseguir más reservas en tu propia web.',
    extracto: 'Análisis de costes y beneficios de cada canal. Calcula cuánto puedes ahorrar con reservas directas.',
    categoria: 'Ventas y canales',
    minutos: 7,
    publicado: '2026-06-03',
    actualizado: '2026-10-10',
    funcion: '/funciones/motor-reservas',
  },
  {
    slug: 'cuanto-cuesta-pms-hotel',
    titulo: '¿Cuánto cuesta un PMS para hotel pequeño en 2026?',
    tituloSeo: '¿Cuánto cuesta un PMS para hotel pequeño en 2026?',
    descripcion: 'Un PMS para un hotel pequeño cuesta entre 120 € y 1.500 € al año. Qué entra en el precio, los costes que no se ven y por qué Hospedy empieza en 350 €/año.',
    extracto: 'Rango de precios del mercado, costes ocultos y retorno. Hospedy, desde 350 €/año con todas las funciones.',
    categoria: 'Elegir un PMS',
    minutos: 8,
    publicado: '2026-06-03',
    actualizado: '2026-10-10',
    funcion: '/precios',
  },
]

export function articuloDelBlog(slug: string): ArticuloBlog {
  const articulo = ARTICULOS.find(a => a.slug === slug)
  if (!articulo) throw new Error(`Artículo sin datos en utils/blog.ts: ${slug}`)
  return articulo
}
