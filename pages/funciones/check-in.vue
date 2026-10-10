<template>
  <PaginaFuncion
    clave="check-in"
    nombre="Check-in"
    grupo="Gestiona tu alojamiento"
    h1="Check-in en el mostrador o desde el móvil del huésped"
    entradilla="Escanea el documento y Hospedy rellena los datos, o envía al huésped su auto check-in para que lo haga él antes de llegar. Y el parte de viajeros sale solo."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  >
    <template #visual>
      <!-- el auto check-in de ejemplo, para usarlo: empieza en la lista de la reserva, lo primero que ve el huésped -->
      <div class="w-[250px] sm:w-[270px]">
        <MockCheckinPhone inicio="lista" />
      </div>
    </template>
  </PaginaFuncion>
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'

const DESCRIPCION = 'Registra a tus huéspedes escaneando su DNI o pasaporte en el mostrador, o deja que lo hagan desde su móvil antes de llegar con el auto check-in online.'

useSeoPagina({
  titulo: 'Check-in con escaneo de DNI y auto check-in online',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'En el mostrador: escanea y firma',
    texto: 'Haz una foto del documento con el móvil o pásalo por el escáner, y Hospedy rellena el formulario con lo que lee. Tú solo lo revisas.',
    puntos: [
      'Lee la banda de caracteres (MRZ) del DNI y del pasaporte, y el código QR de MiDNI',
      'Con el DNI español, también el domicilio',
      'El huésped firma en la pantalla',
      'Registras un grupo seguido, huésped tras huésped',
      'Te sugiere la reserva que llega hoy',
    ],
  },
  {
    titulo: 'Auto check-in, desde el móvil de cada huésped',
    texto: 'Cada reserva tiene su enlace, con un formulario por ocupante. El huésped hace una foto de su documento, revisa sus datos y firma con el dedo antes de llegar.',
    puntos: [
      'Le llega por email, o le mandas tú el enlace por donde quieras',
      'Puede salir solo unos días antes de la llegada, con las comunicaciones automáticas',
      'En 8 idiomas y con tu mensaje de bienvenida',
      'Ves cuántos formularios faltan (por ejemplo, 1 de 3), lo reenvías o cambias la habitación',
      'Al hacer el check-in, sus datos pasan a tu lista de huéspedes',
    ],
  },
  {
    titulo: 'Menores, con su adulto responsable',
    texto: 'Si la fecha de nacimiento dice que un huésped es menor, Hospedy te pide quién es el adulto que responde por él y su parentesco, como exige el registro de viajeros. Si viaja sin adulto, también se indica.',
  },
  {
    titulo: 'Días de cambio sin líos',
    texto: 'Las llegadas y salidas de hoy y de mañana, a la vista. Si en una habitación se va una reserva y entra otra el mismo día, Hospedy te pregunta a cuál pertenece cada huésped. Y las salidas que nadie marca se cierran solas a la hora que fijes.',
  },
  {
    titulo: 'Parte, consentimiento y documentos',
    texto: 'Todo lo que pide la normativa sale del mismo registro.',
    puntos: [
      'El parte de viajeros sale solo a SES Hospedajes o a la Ertzaintza, según lo que tengas activado, y ves su estado; si hace falta, lo reenvías',
      'Descargas el parte, la cláusula firmada y el libro de viajeros',
      'El documento de admisión que piden 11 comunidades autónomas',
    ],
  },
  {
    titulo: 'Si un huésped pide borrar sus datos',
    texto: 'Con «Suprimir datos» borras sus datos personales de todas sus estancias. Lo que la ley obliga a guardar, como el registro de viajeros durante tres años, se borra solo cuando se cumple el plazo.',
  },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿Cómo le llega el auto check-in al huésped?',
    respuesta: 'Por email, al correo de la reserva, o con un enlace que copias y le mandas tú por WhatsApp o por donde quieras. Cada reserva tiene un único enlace, con un formulario para cada ocupante.',
  },
  {
    pregunta: '¿El huésped tiene que instalar algo?',
    respuesta: 'No. El auto check-in se abre en el navegador de su móvil, sin descargar ninguna aplicación.',
  },
  {
    pregunta: '¿Qué documentos lee el escáner?',
    respuesta: 'El DNI y el pasaporte, por su banda de caracteres (MRZ), y el código QR de MiDNI. Si la foto no se lee bien, puedes repetirla o escribir los datos a mano.',
  },
  {
    pregunta: '¿Cómo se registran los menores?',
    respuesta: 'Como cualquier huésped. Si por la fecha de nacimiento es menor el día de entrada, Hospedy te pide el adulto responsable de la misma reserva y el parentesco, o que marques que viaja sin adulto.',
  },
  {
    pregunta: '¿El parte de viajeros se envía solo?',
    respuesta: 'Sí. Lo envía solo a SES Hospedajes (Policía Nacional y Guardia Civil) o a la Ertzaintza, según lo que tengas activado en la ficha de tu alojamiento. Lo configuramos contigo una sola vez.',
  },
]
</script>
