<template>
  <PaginaFuncion
    clave="limpieza"
    nombre="Limpieza"
    grupo="Gestiona tu alojamiento"
    h1="La limpieza, coordinada desde el móvil"
    entradilla="Cada persona de tu equipo entra con su usuario, ve las habitaciones que le tocan y les cambia el estado. Tú lo ves en el planning, con sus notas y sus fotos."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  />
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'

const DESCRIPCION = 'Tu equipo de limpieza ve sus habitaciones en el móvil y las marca como limpias, para repasar o sucias. Tú lo ves en el planning, con sus notas y fotos.'

useSeoPagina({
  titulo: 'App de limpieza para hoteles y apartamentos',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'Un acceso para cada persona',
    texto: 'Creas un usuario para cada persona del equipo y le pasas la dirección de la aplicación. Entra desde el navegador del móvil o del ordenador, y puede dejarla en la pantalla de inicio. Si alguien deja de trabajar contigo, le cortas el acceso al momento.',
  },
  {
    titulo: 'Cada uno, sus habitaciones',
    texto: 'Repartes las habitaciones entre tu equipo y cada persona ve solo las suyas. Cambiar el reparto es elegir otro nombre en la habitación.',
  },
  {
    titulo: 'Limpia, para repasar o sucia',
    texto: 'Tu equipo marca cada habitación y el color cambia en tu planning: sin color si está limpia, ámbar si necesita un repaso y rojo si está sucia. Cada día Hospedy las marca solas según las estancias: repaso donde los huéspedes siguen y limpieza completa donde se fueron. Si lo prefieres, lo llevas tú a mano.',
  },
  {
    titulo: 'Notas con foto',
    texto: 'Tu equipo deja avisos e incidencias con fotos desde su aplicación, y tú les dejas tareas. Las ves en las notas del día del planning y en la lista de pendientes, y las marcas como hechas cuando se resuelven.',
  },
  {
    titulo: 'Quién hizo qué',
    texto: 'El registro de actividad guarda las cien últimas acciones de tu equipo: qué habitación cambió de estado, quién lo hizo y cuándo, y las notas y fotos que dejaron.',
  },
  {
    titulo: 'Sin datos de huéspedes',
    texto: 'La aplicación de limpieza no enseña nombres ni datos de tus huéspedes: solo las habitaciones, su estado y las notas.',
  },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿Hay que instalar una aplicación?',
    respuesta: 'No. Se abre en el navegador del móvil o del ordenador, y se puede añadir a la pantalla de inicio para entrar con un toque. No hay que descargar nada de ninguna tienda de aplicaciones.',
  },
  {
    pregunta: '¿Mi equipo ve los datos de los huéspedes?',
    respuesta: 'No. Cada persona ve las habitaciones que le has asignado, su estado y las notas, sin nombres ni datos de las reservas.',
  },
  {
    pregunta: '¿Tengo que marcar las habitaciones sucias cada día?',
    respuesta: 'No. Cada día Hospedy cambia el estado de las habitaciones según las estancias. Si prefieres llevarlo tú, lo desactivas en tu perfil.',
  },
  {
    pregunta: '¿Cómo me avisa mi equipo de una incidencia?',
    respuesta: 'Con una nota desde su aplicación, con fotos si hace falta. La ves en las notas del día del planning y en las notas pendientes de limpieza.',
  },
  {
    pregunta: '¿Qué hago cuando alguien deja el equipo?',
    respuesta: 'Desactivas su usuario y pierde el acceso al momento. Si vuelve, lo activas de nuevo con los mismos datos.',
  },
]
</script>
