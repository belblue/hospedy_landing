<template>
  <PaginaFuncion
    clave="planning-reservas"
    nombre="Planning y reservas"
    grupo="Gestiona tu alojamiento"
    h1="Tu planning, de un vistazo"
    entradilla="Todas tus reservas, habitación por habitación y día a día, con su estado a la vista. Mueves una reserva arrastrándola, también con el dedo, y si el precio puede cambiar, decides tú antes."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  >
    <template #visual>
      <!-- el planning de ejemplo, para usarlo: se recorre arrastrando y tiene su modo mover reservas -->
      <div class="w-full max-w-[640px]">
        <MockPlanning perfil="hotel" />
      </div>
    </template>
  </PaginaFuncion>
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'

const DESCRIPCION = 'Todas tus reservas en un planning por habitaciones: arrastra para moverlas, cambia fechas y precios, bloquea habitaciones y coloca las que llegan sin hueco.'

useSeoPagina({
  titulo: 'Planning de reservas visual para alojamientos',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'Lo ves todo sin abrir nada',
    texto: 'Tus habitaciones en filas y los días en columnas: cada reserva es una barra con el nombre del titular y su régimen.',
    puntos: [
      'Los días corren seguidos, también en el móvil',
      'Colores e iconos para cada estado: por llegar, en casa, con el auto check-in enviado o ya terminada',
      'El estado de limpieza de cada habitación, en su propia fila',
      'Si quieres, el precio de la noche en las casillas libres',
    ],
    nota: 'El precio de las casillas libres sale de tu calendario de precios.',
  },
  {
    titulo: 'Arrastra y listo',
    texto: 'Con el modo mover reservas, arrastras una reserva a otra habitación o a otras fechas, con el ratón o con el dedo.',
    puntos: [
      'Suéltala encima de otra y se intercambian las habitaciones, viendo antes lo que cambia',
      'Si el importe puede variar, eliges: mantener el precio de ahora o recalcularlo con tu calendario',
      'Te avisa si una habitación se queda pequeña o si las fechas no cumplen tus restricciones de venta',
    ],
    nota: 'Las reservas de agencia solo cambian de habitación: sus fechas las marca la agencia.',
  },
  {
    titulo: 'Reservas a tu medida',
    texto: 'Cada reserva se adapta a lo que necesitas.',
    puntos: [
      'Varias habitaciones en una misma reserva',
      'Precio noche a noche',
      'Cambia las fechas o las habitaciones, o separa una reserva en dos',
      'El historial de cambios de cada reserva',
      'Recupera las que borraste por error',
    ],
  },
  {
    titulo: 'Bloquea habitaciones',
    texto: 'Cierra una habitación unas noches por obras, por una avería o para uso propio. Mientras está cerrada deja de venderse, también en las agencias, y sin crear una reserva falsa.',
  },
  {
    titulo: 'Reservas que llegan sin hueco',
    texto: 'Si entra una reserva de agencia y no queda ninguna habitación libre todas sus noches, no se pierde: espera en una bandeja hasta que la colocas, y Hospedy la coloca sola en cuanto se libera una habitación del tipo que pide.',
  },
  {
    titulo: 'Notas del día',
    texto: 'Apunta lo de cada día en el propio planning, con fotos si hace falta, y compártelo con tu equipo de limpieza.',
  },
  {
    titulo: 'Encuentra cualquier reserva',
    texto: 'Ábrela por su localizador desde el planning, o pídele a Hugo que la busque por el nombre del huésped. Las reservas pasadas siguen en el histórico.',
  },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿Puedo mover reservas desde el móvil?',
    respuesta: 'Sí. Activa el modo mover reservas, mantén pulsada la reserva y arrástrala. Si deslizas sin esperar, lo que se mueve es la pantalla.',
  },
  {
    pregunta: '¿Qué pasa con el precio al mover una reserva?',
    respuesta: 'Si el movimiento puede cambiar el importe, Hospedy te pregunta antes: mantener el precio por noche que tenía o recalcularlo con tu calendario de precios. Si no cambia nada, se aplica al soltar.',
  },
  {
    pregunta: '¿Puedo cambiar las fechas de una reserva de Booking?',
    respuesta: 'No: las fechas de una reserva de agencia las marca la agencia. Desde Hospedy sí puedes cambiarla de habitación.',
  },
  {
    pregunta: '¿Qué pasa si llega una reserva y no hay hueco?',
    respuesta: 'Entra igualmente, sin habitación asignada, y el planning te avisa. La colocas desde la bandeja, o Hospedy la coloca sola si se libera una habitación del tipo que pide.',
  },
  {
    pregunta: '¿Puedo recuperar una reserva que borré?',
    respuesta: 'Sí, desde el histórico de reservas, en «Eliminadas». Si su habitación se ocupó mientras tanto, se coloca en otra libre del mismo tipo.',
  },
]
</script>
