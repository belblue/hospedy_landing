<template>
  <PaginaFuncion
    clave="mensajes"
    nombre="Mensajes"
    grupo="Gestiona tu alojamiento"
    h1="Los mensajes de tus huéspedes, cada uno en su reserva"
    entradilla="Cuando un huésped contesta a un correo de Hospedy, su respuesta entra en la conversación de su reserva. Le contestas desde el panel, sale desde la dirección de tu alojamiento y sabes si le ha llegado."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  >
    <template #maqueta>
      <!-- la pantalla Mensajes de ejemplo, para usarla: se monta al verse (los mensajes ficticios no van en el HTML) -->
      <MontarAlVerse
        class="caja-mensajes"
        descripcion="Ejemplo de la pantalla Mensajes de Hospedy: a la izquierda, las conversaciones con los huéspedes, con las pendientes marcadas; a la derecha, la conversación abierta de una reserva, con el mensaje del huésped y la caja para responderle."
      >
        <MockMensajes />
      </MontarAlVerse>
      <p class="mt-4 text-center text-base text-gray-500">
        Datos de ejemplo. Contesta a Lucía y mira cómo le llega, o corrige el email de Javier y vuelve a enviarle su correo.
      </p>
    </template>
  </PaginaFuncion>
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'

const DESCRIPCION = 'Las respuestas de tus huéspedes, en la conversación de su reserva: contéstales desde Hospedy con la dirección de tu alojamiento y comprueba si cada correo les ha llegado.'

useSeoPagina({
  titulo: 'Mensajes con tus huéspedes, reserva por reserva',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'Cada respuesta, en su reserva',
    texto: 'Los correos que Hospedy envía a tus huéspedes, como la invitación al auto check-in, la confirmación o tus comunicaciones automáticas, llevan una dirección de respuesta con el código de su reserva. Si el huésped contesta, su mensaje entra solo en la conversación de esa reserva.',
    puntos: [
      'También lo que te escriben a la dirección de tu alojamiento: Hospedy lo asigna a la reserva de quien escribe',
      'Lo que no encaja con ninguna reserva queda en «Sin asignar» y lo colocas tú en la suya',
      'Las fotos y los documentos que adjunta el huésped, debajo de su mensaje',
    ],
  },
  {
    titulo: 'Lo ves sin buscarlo',
    texto: 'Sabes que un huésped te ha escrito estés en la pantalla que estés.',
    puntos: [
      'Un número ámbar en «Mensajes», en el menú',
      'Un sobre en la barra de su reserva, en el planning',
      'La pestaña «Mensajes» en la ficha de la reserva',
      'Y, si quieres, un aviso a tu correo con el mensaje y el enlace a la reserva',
    ],
  },
  {
    titulo: 'Contestas desde Hospedy',
    texto: 'Escribes la respuesta en la conversación y le llega al huésped desde la dirección de tu alojamiento, en el mismo hilo de correo. Nunca ve tu correo personal.',
    puntos: [
      'Desde la pantalla «Mensajes» o desde la ficha de la reserva',
      'Puedes escribirle tú primero, aunque todavía no te haya contestado',
      'Si tienes direcciones en copia para el hotel, reciben cada respuesta',
    ],
  },
  {
    titulo: 'Sabes si le ha llegado',
    texto: 'Cada correo de la conversación dice qué ha pasado después de salir: «Entregado» o, en rojo, «No entregado» con el motivo, como una dirección que no existe o un buzón lleno.',
    puntos: [
      'Un correo que no llega te sale como pendiente, igual que si el huésped te hubiera escrito',
      'Corriges el email y se lo vuelves a enviar desde ahí mismo; la corrección se guarda en la reserva',
      'A una dirección que no recibe correos no se le envía nada más',
    ],
  },
  {
    titulo: 'Como una bandeja de correo',
    texto: '«Pendientes» te enseña lo que espera respuesta, y «Todos», el resto.',
    puntos: [
      'Abrir una conversación la deja atendida',
      'Zanjas las que están cerradas del todo; si el huésped vuelve a escribir, se reabren solas',
      'Con varios alojamientos, eliges cuál ver o los ves todos juntos',
      'Lo que parece correo no deseado queda marcado y no cuenta como pendiente',
    ],
    nota: 'Las conversaciones se borran a los dos años de la salida de la reserva y del último mensaje.',
  },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿Tengo que configurar algún correo?',
    respuesta: 'No. Cada alojamiento tiene su propia dirección en Hospedy, y los correos a tus huéspedes salen desde ella. Lo que te contestan llega a «Mensajes».',
  },
  {
    pregunta: '¿Y los huéspedes que reservan por Booking?',
    respuesta: 'Booking les da una dirección suya, que termina en guest.booking.com. Tus correos les llegan si apruebas la dirección de tu alojamiento en Hospedy en tu extranet de Booking, y sus respuestas te llegan al correo que tienes en Booking, no a Hospedy. La conversación te lo recuerda.',
  },
  {
    pregunta: '¿Puedo adjuntar archivos a mis respuestas?',
    respuesta: 'No: las respuestas son de texto. Los archivos que te manda el huésped sí se ven en la conversación: las fotos, al pulsarlas, y los documentos, al descargarlos.',
  },
  {
    pregunta: '¿Cuánto tiempo se guardan las conversaciones?',
    respuesta: 'Dos años desde la salida de la reserva y desde el último mensaje. Después se borran solas, con sus archivos.',
  },
  {
    pregunta: '¿Está incluido en mi plan?',
    respuesta: 'Sí. Los mensajes con tus huéspedes van incluidos en todos los planes.',
  },
]
</script>

<style scoped>
/* el hueco de la maqueta, con su alto antes de montarse: el movil por debajo de 1024 px y el portatil desde ahi */
.caja-mensajes {
  width: min(300px, 100%);
  margin: 0 auto;
  aspect-ratio: 288 / 602.64;
}
@media (min-width: 1024px) {
  .caja-mensajes {
    width: 100%;
    aspect-ratio: 1000 / 674.9;
  }
}
</style>
