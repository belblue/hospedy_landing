<template>
  <PaginaFuncion
    clave="hugo"
    nombre="Hugo"
    grupo="Asistente con IA"
    h1="Hugo: se lo pides y lo prepara él"
    entradilla="Pídeselo como a una persona («baja la Doble a 90 € del 1 al 7 de julio»): Hugo te enseña el cambio y decides tú. Está en todas las pantallas de Hospedy y va incluido en todos los planes."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  >
    <template #visual>
      <MockChatHugo />
    </template>
  </PaginaFuncion>
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'

const DESCRIPCION = 'Hugo cambia precios y disponibilidad, busca reservas y responde tus dudas: se lo pides escribiendo o con la voz, y tú confirmas cada cambio.'

useSeoPagina({
  titulo: 'Hugo, el asistente con IA para tu alojamiento',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'Pídelo con tus palabras',
    texto: 'Hugo tiene su botón en todas las pantallas del panel. Le escribes o le hablas como a alguien de tu equipo, sin aprender comandos ni menús.',
    puntos: [
      'Escribiendo o con la voz',
      'Si tienes varios alojamientos, le dices de cuál hablas',
      'Retomas tus conversaciones anteriores cuando quieras',
    ],
  },
  {
    titulo: 'La última palabra es tuya',
    texto: 'En el día a día, antes de cambiar nada, Hugo te enseña lo que va a hacer: el antes y el después de cada precio o cierre. Solo se aplica cuando pulsas «Sí, aplicar», y cada cambio queda en el registro de actividad firmado como «Asistente IA».',
  },
  {
    titulo: 'Precios y disponibilidad en una frase',
    texto: 'Lo que harías casilla a casilla en el calendario, dicho en una frase.',
    puntos: [
      'Precios fijos, o subidas y bajadas en euros o en porcentaje, por días, por fechas o por días de la semana',
      'Abrir y cerrar la venta, la estancia mínima y el reparto entre agencias y venta directa',
      'Copiar los precios de un periodo a otro',
      'Tiene en cuenta los festivos nacionales y autonómicos y los puentes',
    ],
    nota: 'Trabaja sobre tu calendario de precios y disponibilidad, que tienes aunque no conectes ninguna agencia.',
  },
  {
    titulo: 'Reservas y día a día',
    texto: 'También te echa una mano con lo de cada día.',
    puntos: [
      'Busca reservas por nombre, email, teléfono o fechas',
      'Crea reservas directas enseñándote antes la habitación y el precio',
      'Reparte un grupo entre varias habitaciones',
      'Añade notas a una reserva y cierra una habitación por obras o por una avería',
      'Revisa una reserva cuando algo no te cuadra: huéspedes que faltan o se repiten, cobros pendientes o datos de contacto vacíos',
    ],
  },
  {
    titulo: 'Pregúntale cómo va el negocio',
    texto: 'Hazle las preguntas que le harías a tu socio y te contesta con los datos de tu alojamiento.',
    puntos: ['«¿Cómo va septiembre?»', '«¿Qué me queda por cobrar?»', '«¿Quién llega mañana?»', '«¿Quién desayuna hoy?»'],
  },
  {
    titulo: 'Sabe cómo funciona Hospedy',
    texto: '¿No encuentras dónde se cambia algo o no sabes cómo se hace? Pregúntaselo: Hugo responde con el manual de Hospedy y te dice dónde está cada cosa.',
  },
  {
    titulo: 'Se acuerda de cómo trabajas',
    texto: 'Cada alojamiento tiene su estrategia: tus temporadas, tus reglas de precios, las fiestas del pueblo o tu política de grupos. Hugo la tiene en cuenta en cada propuesta, y si te sugiere añadir algo, solo se guarda si lo apruebas.',
  },
  {
    titulo: 'También te prepara los emails a huéspedes',
    texto: 'Dile qué quieres enviar y cuándo, y Hugo te deja preparada la comunicación automática, en español y en inglés. Se queda apagada hasta que la revisas y la activas, con otra confirmación.',
  },
  {
    titulo: 'Empieza hablando',
    texto: 'Al crear tu cuenta, Hugo te acompaña en la primera configuración: le cuentas cómo es tu alojamiento y lo va dejando preparado mientras habláis. En esa primera configuración guarda lo que le cuentas sobre la marcha; después, cualquier cambio te lo enseña antes.',
  },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿Hugo cambia cosas sin preguntarme?',
    respuesta: 'No. En el día a día, Hugo te enseña cada cambio con el antes y el después y solo lo aplica cuando pulsas «Sí, aplicar».\n\nLa única excepción es la configuración inicial al crear tu cuenta: ahí va guardando lo que le cuentas mientras habláis, porque es justo lo que le estás pidiendo.',
  },
  {
    pregunta: '¿Hugo cuesta aparte?',
    respuesta: 'No. Va incluido en todos los planes de Hospedy, como el resto de funciones.',
  },
  {
    pregunta: '¿Puedo hablarle en vez de escribir?',
    respuesta: 'Sí. Pulsa el micro, dile lo que necesitas y Hugo lo entiende igual que si lo hubieras escrito.',
  },
  {
    pregunta: '¿Qué no hace Hugo?',
    respuesta: 'No registra huéspedes, no emite facturas, no cobra ni envía emails sueltos a tus huéspedes, y no pone los precios por su cuenta: los cambios los decides tú. Para todo eso tienes sus pantallas en Hospedy, y Hugo te explica cómo se hace.',
  },
  {
    pregunta: '¿Qué pasa con mis conversaciones?',
    respuesta: 'Se guardan en tu cuenta para que puedas retomarlas y se borran cuando pasa un año desde la última vez que las usaste. Tienes el detalle en la política de privacidad.',
  },
]
</script>
