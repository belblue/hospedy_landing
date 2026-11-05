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
    slug: 'pms-con-inteligencia-artificial',
    titulo: 'PMS con inteligencia artificial en 2026: qué hace de verdad cada uno',
    tituloSeo: 'PMS con inteligencia artificial: qué hace cada uno',
    descripcion: 'Qué hace la IA de Hospedy, Avirato, Cloudbeds, Mews, Amenitiz, AvaiBook y otros PMS: contestar a huéspedes, responder preguntas o preparar cambios.',
    extracto: 'Contestar a los huéspedes, responder preguntas o preparar los cambios para que los confirmes: lo que hace de verdad la IA de cada PMS.',
    categoria: 'Elegir un PMS',
    minutos: 7,
    publicado: '2026-11-04',
    actualizado: '2026-11-05',
    funcion: '/funciones/hugo',
  },
  {
    slug: 'parte-viajeros-rechazado-ses-hospedajes',
    titulo: 'Parte de viajeros rechazado en SES Hospedajes: por qué pasa y cómo corregirlo',
    tituloSeo: 'Parte de viajeros rechazado en SES: cómo corregirlo',
    descripcion: 'Por qué SES Hospedajes rechaza un parte de viajeros (contacto, soporte del DNI, fechas, repetidos) y cómo corregirlo y reenviarlo, a mano o con Hugo.',
    extracto: 'Las causas más habituales de un parte rechazado y cómo corregirlo y reenviarlo, a mano o pidiéndoselo a Hugo.',
    categoria: 'Normativa',
    minutos: 7,
    publicado: '2026-11-04',
    actualizado: '2026-11-05',
    funcion: '/funciones/partes-viajeros',
  },
  {
    slug: 'como-enviar-partes-viajeros-ses-hospedajes',
    titulo: 'Cómo enviar partes de viajeros a SES Hospedajes automáticamente',
    tituloSeo: 'Cómo enviar partes de viajeros a SES Hospedajes',
    descripcion: 'Qué exige el Real Decreto 933/2021, qué datos lleva el parte de viajeros, las multas y cómo enviarlo a SES Hospedajes sin entrar en el portal.',
    extracto: 'Guía del Real Decreto 933/2021: qué datos lleva el parte, multas de hasta 30.000 € y cómo cumplir sin entrar en el portal.',
    categoria: 'Normativa',
    minutos: 10,
    publicado: '2026-06-03',
    actualizado: '2026-11-05',
    funcion: '/funciones/partes-viajeros',
  },
  {
    slug: 'encuestas-ine-alojamientos-turisticos',
    titulo: 'Guía completa: encuesta INE para alojamientos turísticos 2026',
    tituloSeo: 'Encuesta del INE para alojamientos: guía 2026',
    descripcion: 'Plazos, datos y cómo cumplir con la encuesta de ocupación del INE. Con Hospedy sale rellena con tus reservas y, en hoteles y apartamentos, va con un clic.',
    extracto: 'Plazos, datos que pide y cómo tenerla rellena con tus reservas; en hoteles y apartamentos, se envía con un clic.',
    categoria: 'Normativa',
    minutos: 8,
    publicado: '2026-06-03',
    actualizado: '2026-11-05',
    funcion: '/funciones/encuestas-ine',
  },
  {
    slug: 'mejores-pms-casas-rurales',
    titulo: 'Los 5 mejores PMS para casas rurales en España [2026]',
    tituloSeo: 'Los 5 mejores PMS para casas rurales (2026)',
    descripcion: 'Hospedy, MisterPlan (antes RuralGest), AvaiBook, Amenitiz y Avirato comparados para casas rurales: precio, partes, encuesta del INE y lo que hace su IA.',
    extracto: 'Hospedy, MisterPlan, AvaiBook, Amenitiz y Avirato: precio, normativa y lo que hace la IA de cada uno.',
    categoria: 'Elegir un PMS',
    minutos: 10,
    publicado: '2026-06-03',
    actualizado: '2026-11-05',
    funcion: '/casas-rurales',
  },
  {
    slug: 'hospedy-vs-ruralgest',
    titulo: 'Hospedy vs RuralGest, ahora MisterPlan: comparativa 2026',
    tituloSeo: 'Hospedy vs RuralGest, ahora MisterPlan (2026)',
    descripcion: 'RuralGest ahora es MisterPlan. Lo comparamos con Hospedy, que incluye a Hugo, asistente con IA, desde 35 € al mes: precio, funciones y partes.',
    extracto: 'RuralGest ahora se llama MisterPlan. Cómo queda frente a Hospedy, con Hugo incluido desde 35 € al mes.',
    categoria: 'Elegir un PMS',
    minutos: 6,
    publicado: '2026-06-03',
    actualizado: '2026-11-05',
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
    actualizado: '2026-11-05',
    funcion: '/funciones/channel-manager',
  },
  {
    slug: 'pre-checkin-ahorrar-tiempo',
    titulo: 'Pre check-in: cómo ahorrar tiempo en la recepción',
    tituloSeo: 'Pre check-in: cómo ahorrar tiempo en recepción',
    descripcion: 'Con el pre check-in tus huéspedes rellenan sus datos y firman desde el móvil antes de llegar. Cómo funciona y cuánto tiempo te ahorra en recepción.',
    extracto: 'Los huéspedes rellenan sus datos y firman desde el móvil antes de llegar: en recepción solo queda darles la llave.',
    categoria: 'Gestión diaria',
    minutos: 6,
    publicado: '2026-06-03',
    actualizado: '2026-11-05',
    funcion: '/funciones/check-in',
  },
  {
    slug: 'reservas-directas-vs-otas',
    titulo: 'Reservas directas vs OTAs: qué es más rentable',
    tituloSeo: 'Reservas directas vs OTAs: qué es más rentable',
    descripcion: 'Lo que cuestan las comisiones de Booking, Airbnb y otras agencias frente a la reserva directa, y cómo conseguir más reservas en tu propia web.',
    extracto: 'Lo que se llevan las agencias de cada reserva y cuánto ganas con cada reserva directa.',
    categoria: 'Ventas y canales',
    minutos: 7,
    publicado: '2026-06-03',
    actualizado: '2026-11-05',
    funcion: '/funciones/motor-reservas',
  },
  {
    slug: 'cuanto-cuesta-pms-hotel',
    titulo: '¿Cuánto cuesta un PMS para hotel pequeño en 2026?',
    tituloSeo: '¿Cuánto cuesta un PMS para hotel pequeño en 2026?',
    descripcion: 'Un PMS completo para hotel pequeño ronda los 50-70 € al mes; Hospedy, desde 35 €, con todas las funciones y su IA. Qué entra en el precio y qué no se ve.',
    extracto: 'Rango de precios del mercado, costes ocultos y la IA: incluida o aparte. Hospedy, desde 350 €/año con todas las funciones.',
    categoria: 'Elegir un PMS',
    minutos: 7,
    publicado: '2026-06-03',
    actualizado: '2026-11-05',
    funcion: '/precios',
  },
]

export function articuloDelBlog(slug: string): ArticuloBlog {
  const articulo = ARTICULOS.find(a => a.slug === slug)
  if (!articulo) throw new Error(`Artículo sin datos en utils/blog.ts: ${slug}`)
  return articulo
}
