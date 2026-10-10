<template>
  <PaginaFuncion
    clave="comunicaciones"
    nombre="Comunicaciones"
    grupo="Gestiona tu alojamiento"
    h1="Tus emails a huéspedes, en piloto automático"
    entradilla="Elige qué email sale, cuándo y a quién, y Hospedy lo envía con los datos de cada reserva. Empiezas con plantillas ya redactadas y lo pruebas con una reserva real antes de activarlo."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  />
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'

const DESCRIPCION = 'Emails automáticos a tus huéspedes: confirmación, recordatorio de llegada, auto check-in, pago anticipado o agradecimiento, cuando tú decidas.'

useSeoPagina({
  titulo: 'Emails automáticos para tus huéspedes',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'Empieza con una plantilla',
    texto: 'Siete plantillas ya redactadas para lo que más se envía, o un email en blanco si prefieres escribirlo tú. Todas nacen apagadas y se activan cuando tú quieras.',
    puntos: [
      'Confirmación de las reservas que llegan de agencias',
      'Recordatorio de llegada',
      'Invitación al auto check-in y recordatorio si sigue pendiente',
      'Solicitud de pago anticipado',
      'Agradecimiento tras la salida',
      'Código de acceso el día de la llegada',
    ],
    nota: 'La solicitud de pago anticipado necesita tener activados los cobros online.',
  },
  {
    titulo: 'Tú decides cuándo',
    texto: 'Cada email sale en el momento que elijas.',
    puntos: [
      'Al recibir la reserva',
      'Programado de 0 a 90 días antes o después de la entrada, de la salida o de la creación de la reserva, a la hora que elijas',
      'Siempre en la hora de tu alojamiento',
      'O manual: lo envías tú cuando quieras',
    ],
  },
  {
    titulo: 'Y a quién',
    texto: 'Cada email llega solo a las reservas que tocan.',
    puntos: [
      'Por alojamiento o por habitaciones concretas, como las instrucciones de acceso de una cabaña',
      'Por origen: reservas de agencias, de tu motor de reservas o las que das de alta tú',
      'Los que salen después de la llegada, solo a quien hizo el check-in',
    ],
  },
  {
    titulo: 'Con los datos de cada reserva',
    texto: 'Lo escribes una vez y Hospedy rellena cada email con lo de cada huésped.',
    puntos: [
      'Nombre, fechas, noches, habitación, precio y demás datos de la reserva',
      'El enlace a su auto check-in y, con los cobros activados, el de pago',
      'Botones para abrir Google Maps, escribirte por WhatsApp o dejar una opinión en TripAdvisor',
      'En español y en inglés, en el mismo email',
      'Tu pie de email común y, si quieres, copia a tu correo',
    ],
  },
  {
    titulo: 'Pruébalo antes',
    texto: 'La vista previa te enseña el email montado con los datos de una reserva real. Si te convence, «Enviar ahora» lo manda en ese momento al huésped de esa reserva.',
  },
  {
    titulo: 'Los emails de Hospedy, con tus palabras',
    texto: 'Hospedy ya envía algunos emails por su cuenta, como la confirmación de tu motor de reservas o el recibo de un pago. Puedes cambiarlos por tu propia versión, con tu texto y tu tono. Si tu versión no encaja con una reserva concreta, sale la de Hospedy: el huésped nunca se queda sin su email.',
  },
  {
    titulo: 'Sabes qué ha salido y qué no',
    texto: 'El historial te dice qué email salió, a quién y cuándo, y si alguno no se envió, por qué: por ejemplo, que la reserva no tenía email de contacto. Cada email sale una sola vez por reserva, nunca repetido ni a medias.',
  },
  {
    titulo: 'O pídeselo a Hugo',
    texto: 'Cuéntale a Hugo, el asistente, qué quieres enviar y cuándo. Te prepara la comunicación, te enseña el texto y la deja apagada hasta que la actives.',
  },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿En qué idioma reciben los emails mis huéspedes?',
    respuesta: 'Escribes cada email en español y, si quieres, también en inglés. El huésped recibe un solo email con los dos textos, primero el español y debajo el inglés. Si dejas un idioma vacío, ese no sale.',
  },
  {
    pregunta: '¿Puedo ver cómo queda un email antes de activarlo?',
    respuesta: 'Sí. Eliges una de tus reservas y la vista previa te enseña el email completo con sus datos. Si quieres, desde ahí mismo lo envías a esa reserva con «Enviar ahora».',
  },
  {
    pregunta: '¿Qué pasa si una reserva no tiene email?',
    respuesta: 'Ese envío no sale, y el historial te dice el motivo y si se enviará solo en cuanto completes el contacto de la reserva.',
  },
  {
    pregunta: '¿Les llegan emails a los huéspedes que no se presentan?',
    respuesta: 'Los emails programados para después de la llegada, como el agradecimiento, salen solo si el huésped hizo el check-in. Viene marcado así de serie y puedes cambiarlo en cada email.',
  },
  {
    pregunta: '¿Puedo cambiar los emails que ya envía Hospedy?',
    respuesta: 'Sí. En «Emails del sistema» sustituyes cualquiera de ellos por tu versión, sin cambiar el momento en que se envía. Si tu versión no sirve para una reserva concreta, sale la de Hospedy y el historial lo indica.',
  },
]
</script>
