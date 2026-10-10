// La FAQ general (/faq), agrupada. Las anclas (id) son estables: las enlazan la portada, las opiniones y otras
// páginas (/faq#permanencia). Las respuestas son el mismo texto para la página y para los datos estructurados.
import type { PreguntaFaq } from './contenido'
import { COMISION_COBROS, CUOTA_OTA_EXTRA, DIAS_DE_PRUEBA } from './precios'

const COMISION = `${String(COMISION_COBROS.porcentaje).replace('.', ',')} % + ${COMISION_COBROS.fijo.toFixed(2).replace('.', ',')} €`

export interface GrupoFaq {
  titulo: string
  preguntas: PreguntaFaq[]
}

export const FAQ: GrupoFaq[] = [
  {
    titulo: 'Empezar y probar',
    preguntas: [
      {
        id: 'probar-gratis',
        pregunta: '¿Puedo probar Hospedy antes de pagar?',
        respuesta: `Sí. Creas tu cuenta y tienes ${DIAS_DE_PRUEBA} días de prueba gratis con todas las funciones, sin tarjeta de crédito. Si prefieres que te lo enseñemos antes, pide una demo por videollamada.`,
      },
      {
        id: 'instalar',
        pregunta: '¿Necesito instalar algo?',
        respuesta: 'No. Hospedy funciona en el navegador, desde el ordenador, la tableta o el móvil, con conexión a internet. En el móvil puedes añadirlo a la pantalla de inicio para entrar con un toque.',
      },
      {
        id: 'varios-alojamientos',
        pregunta: '¿Puedo gestionar varios alojamientos?',
        respuesta: 'Sí, desde una sola cuenta. El plan se elige por el número total de unidades de todos tus alojamientos (1-3, 4-10, 11-25 o 26 o más). Cada uno tiene su calendario y los ves todos desde el mismo panel.',
      },
      {
        id: 'soporte',
        pregunta: '¿Qué soporte ofrecéis?',
        respuesta: 'Soporte en español por email, de lunes a viernes, con respuesta en 24-48 horas, y por videollamada para la configuración o lo que lo necesite. Te atienden personas. Además, el panel tiene su manual en «Ayuda», y Hugo, el asistente, responde tus dudas.',
      },
      {
        id: 'si-algo-falla',
        pregunta: '¿Qué pasa si algo falla?',
        respuesta: 'Escríbenos y nos ponemos con ello en cuanto nos llega tu aviso. Podemos equivocarnos, como cualquiera, pero lo reconocemos y lo arreglamos.',
      },
      {
        id: 'sugerencias',
        pregunta: '¿Puedo proponer mejoras?',
        respuesta: 'Sí, y nos encanta. Muchas funciones de Hospedy empezaron como la petición de alguien que gestiona un alojamiento. Escríbenos desde «Ayuda», en el panel, o desde la página de contacto.',
      },
    ],
  },
  {
    titulo: 'Condiciones y datos',
    preguntas: [
      {
        id: 'todas-las-funciones',
        pregunta: '¿Los planes pequeños tienen menos funciones?',
        respuesta: 'No. Todas las funciones están en todos los planes, también las que vayamos añadiendo. Los planes cambian por el tamaño de tu alojamiento (las unidades), por las agencias que incluyen y, en el más grande, por el soporte prioritario y el onboarding dedicado.',
      },
      {
        id: 'igualdad',
        pregunta: '¿Un alojamiento pequeño tiene el mismo servicio que uno grande?',
        respuesta: 'Sí. Tienes todas las funciones, igual que un hotel grande, y te atendemos con el mismo cuidado. Pagas según el tamaño de tu alojamiento porque un negocio pequeño no puede pagar lo mismo que un gran hotel, pero necesita las mismas herramientas.',
      },
      {
        id: 'permanencia',
        pregunta: '¿Hay permanencia?',
        respuesta: 'No. Puedes darte de baja cuando quieras, sin penalización.',
      },
      {
        id: 'letra-pequena',
        pregunta: '¿Hay letra pequeña o costes ocultos?',
        respuesta: `No. El precio de tu plan es el que ves en la página de precios, sin IVA y con las agencias que incluye, y no lo subimos sin avisarte. Si cobras a tus huéspedes con tarjeta, cada cobro lleva su comisión (${COMISION}, IVA incluido), solo si lo usas.`,
      },
      {
        id: 'mis-datos',
        pregunta: '¿Qué pasa con mis datos si dejo de usar Hospedy?',
        respuesta: 'Tus datos son tuyos. Descarga cuando quieras el listado de huéspedes (PDF o CSV), el libro de viajeros, tus facturas (una a una o en Excel), las encuestas del INE y los documentos de admisión. Si te das de baja, te ayudamos con la migración y borramos tus datos como manda la normativa de protección de datos.',
      },
      {
        id: 'vender-datos',
        pregunta: '¿Vendéis mis datos o los de mis huéspedes?',
        respuesta: 'No. No vendemos tus datos ni los de tus huéspedes, ni los usamos para nada que no sea darte el servicio. Solo salen de Hospedy cuando la ley lo exige, como los partes de viajeros o las encuestas del INE, o cuando un proveedor que trabaja para nosotros los necesita para darte el servicio.',
      },
    ],
  },
  {
    titulo: 'Normativa',
    preguntas: [
      {
        id: 'ses-hospedajes',
        pregunta: '¿Qué es SES Hospedajes y cómo se envían los partes?',
        respuesta: 'SES Hospedajes es el sistema del Ministerio del Interior para el registro de viajeros. Hospedy genera el parte cuando registras al huésped y lo envía solo a SES Hospedajes (Policía Nacional y Guardia Civil) o a la Ertzaintza, según lo que tengas activado en la ficha de tu alojamiento. Lo configuramos contigo una sola vez.',
      },
      {
        id: 'multas',
        pregunta: '¿Qué multa hay por no comunicar los viajeros?',
        respuesta: 'No comunicar a tus viajeros es una infracción grave de la Ley Orgánica 4/2015, de protección de la seguridad ciudadana, con multas de 601 a 30.000 €.',
      },
      {
        id: 'encuestas-ine',
        pregunta: '¿Cómo se hacen las encuestas del INE?',
        respuesta: 'Hospedy rellena las encuestas de ocupación del INE con los datos de tus reservas. La de hoteles y la de apartamentos turísticos se envían al INE desde Hospedy con un clic, sin entrar en ARCE; la de turismo rural y la de Castilla y León te las deja listas para descargar y presentar. También genera el documento de admisión que exigen once comunidades autónomas.',
      },
      {
        id: 'auto-checkin',
        pregunta: '¿Mis huéspedes pueden registrarse antes de llegar?',
        respuesta: 'Sí, con el auto check-in: les llega un enlace por email, o se lo mandas tú por donde quieras, y cada uno rellena sus datos, hace una foto de su documento y firma desde el móvil. Al hacer el check-in, el parte sale solo.',
      },
    ],
  },
  {
    titulo: 'Channel y agencias',
    preguntas: [
      {
        id: 'booking-airbnb',
        pregunta: '¿Funciona con Booking, Airbnb y otras agencias?',
        respuesta: 'Sí. El channel manager conecta con más de 150 agencias, entre ellas Booking.com, Airbnb, Expedia y Hotels.com, y lleva sus precios y su disponibilidad en un solo calendario. Las reservas de las agencias entran solas en tu planning.',
      },
      {
        id: 'cuantas-agencias',
        pregunta: '¿Cuántas agencias puedo conectar?',
        respuesta: `Depende de tu plan: Esencial incluye 1, Profesional 2, Business 3 y Enterprise 5. Si necesitas más, cada agencia de más cuesta ${CUOTA_OTA_EXTRA} €/mes sin IVA, más un alta única que incluye la configuración asistida.`,
      },
      {
        id: 'motor-sin-agencias',
        pregunta: '¿Puedo usar el motor de reservas sin conectar agencias?',
        respuesta: 'Sí. El motor de reservas y su calendario de precios y disponibilidad van incluidos en todos los planes, conectes o no agencias. Y si las conectas más adelante, se conserva todo lo que tenías.',
      },
    ],
  },
]
