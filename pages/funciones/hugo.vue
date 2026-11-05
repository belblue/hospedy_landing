<template>
  <PaginaFuncion
    clave="hugo"
    nombre="Hugo"
    grupo="Asistente con IA"
    h1="Hugo: se lo pides y lo prepara él"
    entradilla="Pídeselo como a una persona: cambia precios, arregla reservas, huéspedes y partes, y te dice qué tienes pendiente. Te enseña cada cambio y decides tú. Está en todas las pantallas de Hospedy y va incluido en todos los planes."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  >
    <template #visual>
      <MockChatHugo v-bind="HUGO_PARTE_RECHAZADO" />
    </template>

    <!-- Dos conversaciones más: lo pendiente, sin tarjeta, y un arreglo de un paso. Son maquetas con datos de ejemplo:
         la sección entera, título incluido, fuera del Markdown y de los resúmenes de los buscadores -->
    <section class="max-w-6xl mx-auto px-6 mt-20" aria-labelledby="titulo-ejemplos" data-nosnippet>
      <h2 id="titulo-ejemplos" class="text-3xl font-bold text-gray-900 text-center mb-10">Así te lo cuenta</h2>
      <div class="grid lg:grid-cols-2 gap-12 justify-items-center items-start">
        <!-- alto fijo (480 + 76 del botón): el hueco reservado mide lo mismo que la maqueta a cualquier ancho -->
        <MontarAlVerse class="w-full max-w-[380px] h-[556px]" :descripcion="HUGO_PENDIENTES.descripcion">
          <MockChatHugo v-bind="HUGO_PENDIENTES" :cambios="[]" :saludo="false" :alto="480" />
        </MontarAlVerse>
        <MontarAlVerse class="w-full max-w-[380px] h-[556px]" :descripcion="HUGO_MOVER_RESERVA.descripcion">
          <MockChatHugo v-bind="HUGO_MOVER_RESERVA" :alto="480" />
        </MontarAlVerse>
      </div>
    </section>
  </PaginaFuncion>
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'
import { HUGO_MOVER_RESERVA, HUGO_PARTE_RECHAZADO, HUGO_PENDIENTES } from '~/utils/hugoEjemplos'

const DESCRIPCION = 'Hugo cambia precios, arregla reservas, huéspedes y partes, te dice qué tienes pendiente y te da las cifras de tu negocio. Tú confirmas cada cambio.'

useSeoPagina({
  titulo: 'Hugo, el asistente con IA para tu alojamiento',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'Arregla reservas, huéspedes y partes',
    texto: 'Lo que harías desde el planning o la ficha, se lo pides con tus palabras: «pasa la reserva de los Wilson a la 102» o «el registro ha rechazado el parte de Luis Gómez, corrígelo y reenvíalo». Hugo mira tus datos, te explica lo que ha encontrado y te prepara una tarjeta con cada paso, con los nombres, las fechas y los importes reales. Se aplican todos juntos, o ninguno, cuando pulsas «Sí, aplicar».',
    puntos: [
      'Mover, dividir, cancelar o restaurar una reserva, y cambiar su titular, su agencia o su régimen',
      'Corregir los datos de un huésped y volver a enviar su parte rechazado',
      'Marcar el check-in, el check-out o el pago, y añadir o quitar extras',
      'Pre-check-ins, tareas, limpieza, conversaciones de Mensajes y facturas cobradas',
    ],
    nota: 'Son los mismos cambios que harías tú, con las mismas reglas. Si algún paso no se puede hacer, te dice el motivo y no prepara nada.',
  },
  {
    titulo: 'Lo que tienes pendiente y lo que no cuadra',
    texto: 'Pregúntale «¿qué tengo pendiente hoy?» y te lo cuenta por apartados, con los nombres, los localizadores y las cifras, y te dice en qué pantalla se resuelve cada cosa. Lo que puede arreglar él, te ofrece prepararlo.',
    puntos: [
      'Reservas de agencias sin habitación y partes rechazados o sin enviar',
      'Cobros de las salidas, depósitos sin pagar y disputas',
      'Mensajes sin contestar, pre-check-ins sin terminar y llegadas sin check-in',
      'Tareas, habitaciones por limpiar y noches sin precio',
      '«¿Qué me falta para cerrar octubre?»: reservas sin cobrar o sin facturar, estancias sin huéspedes registrados y partes rechazados de ese mes',
    ],
    nota: 'También te señala lo que conviene revisar, como dos reservas que parecen la misma o más huéspedes que plazas. Son sospechas, no hechos: decides tú.',
  },
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
    texto: 'En el día a día, antes de cambiar nada, Hugo te enseña lo que va a hacer: el antes y el después de cada precio, o cada paso de un arreglo. Solo se aplica cuando pulsas «Sí, aplicar», y cada cambio queda en el registro de actividad como un cambio del asistente confirmado por ti.',
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
    texto: 'También te echa una mano con lo de cada día: quién llega mañana, quién desayuna hoy o qué te queda por cobrar.',
    puntos: [
      'Busca reservas por nombre, email, teléfono o fechas',
      'Crea reservas directas enseñándote antes la habitación y el precio',
      'Reparte un grupo entre varias habitaciones',
      'Añade notas a una reserva y cierra una habitación por obras o por una avería',
    ],
  },
  {
    titulo: 'Pregúntale cómo va el negocio',
    texto: 'Te da las cifras de cualquier periodo, por antiguo que sea, y las compara con otro: ocupación, ingresos, precio medio por noche, estancias y huéspedes, con la diferencia en número y en porcentaje. Las cuentas las hace el programa, no Hugo: él te las lee.',
    puntos: [
      '«Compara agosto de este año con el del año pasado»',
      '«¿Cómo fue 2025 mes a mes?»',
      '«¿Qué días de la semana se me llenan más?»',
      'Si se lo pides, te lo desglosa por mes, por semana, por tipo de habitación o por día de la semana',
    ],
    nota: 'Su respuesta acaba con el enlace «Ver estos gráficos en Estadísticas», que abre esa pantalla con el mismo periodo y los mismos filtros.',
    enlace: { texto: 'Conoce las estadísticas de Hospedy', ruta: '/funciones/estadisticas' },
  },
  {
    titulo: 'Pregúntale por tus datos',
    texto: 'Además de los totales, Hugo consulta los datos de todos tus alojamientos (reservas, huéspedes, agencias, extras, cobros, mensajes, partes y facturas) y te contesta con las cifras y los nombres que encuentra. También te enseña la ficha de una reserva o de un huésped. Consultar no cambia nada.',
    puntos: [
      '«¿Qué agencia me trajo más reservas este año?»',
      '«¿Por qué se rechazó el parte de Luis Gómez?»',
      '«¿Tengo mensajes sin contestar?»',
      '«¿Cuántas cunas vendí en agosto?»',
    ],
    nota: 'En las fichas, los documentos, las fechas de nacimiento, las direcciones, los teléfonos y los correos de tus huéspedes salen tapados en parte, lo justo para reconocerlos.',
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
    respuesta: 'No cobra ni devuelve dinero con tarjeta, no envía enlaces de pago, no borra huéspedes, reservas ni facturas de forma definitiva, no emite facturas y no toca la conexión con tus agencias. Y con tus huéspedes no habla: preferimos que el trato con ellos siga siendo tuyo.\n\nPara todo eso tienes sus pantallas en Hospedy, y Hugo te dice cuál es. Y los precios no los pone por su cuenta: los cambios los decides tú.',
  },
  {
    pregunta: '¿Y si alguien cambia la reserva mientras tanto?',
    respuesta: 'Si entre la propuesta y el botón alguien cambia esa reserva (otra persona de tu equipo o la agencia), Hospedy no aplica nada y te pide que se lo vuelvas a pedir a Hugo. Así nunca se aplica un cambio preparado con datos que ya no son los de ahora.',
  },
  {
    pregunta: '¿Dónde funciona Hugo?',
    respuesta: 'En servidores propios de Hospedy, los mismos en los que se guardan los datos de tu cuenta. Lo dice también el contrato de encargo del tratamiento.',
  },
  {
    pregunta: '¿Qué datos ve Hugo?',
    respuesta: 'Solo los de tu cuenta: reservas, huéspedes, agencias, extras, cobros, mensajes, partes, pre-check-ins, tareas y facturas. Para responder a tus preguntas ve las reservas con salida en los dos últimos años y todas las futuras, con lo que cuelga de ellas; si preguntas por algo anterior, dile el año y lo incluye. Las estadísticas te las da de cualquier periodo. Los cobros con tarjeta, los mensajes con los huéspedes y los envíos de las comunicaciones automáticas solo los ve si tienes esos módulos activados.\n\nLos documentos, las fechas de nacimiento, las direcciones, los teléfonos y los correos de tus huéspedes los enseña tapados en parte y nunca te los dicta enteros. Sí puedes darle un teléfono o un correo para que te diga de qué reserva es, y no lo repite. Lo que pone en las notas de una reserva o en el mensaje de un huésped lo lee como información: nunca sigue instrucciones que haya ahí.',
  },
  {
    pregunta: '¿Qué pasa con mis conversaciones?',
    respuesta: 'Se guardan en tu cuenta para que puedas retomarlas y se borran cuando pasa un año desde la última vez que las usaste. Tienes el detalle en la política de privacidad.',
  },
]
</script>
