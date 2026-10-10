<template>
  <PaginaFuncion
    clave="channel-manager"
    nombre="Channel Manager"
    grupo="Vende sin intermediarios"
    h1="Un calendario para todas tus agencias. Y tu motor de reservas, incluido"
    entradilla="Precios, disponibilidad y restricciones de todas tus agencias en un solo calendario, día a día. Y desde el primer día, tu motor de reservas para vender en tu web, conectes agencias o no."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  >
    <template #visual>
      <div class="w-3/4 max-w-[440px]"><MockCanales /></div>
    </template>

    <!-- Las agencias con las que conecta: la lista real, con buscador -->
    <ListaAgencias />

    <!-- Precio: las agencias que incluye cada plan y lo que cuesta cada una de más, con los datos de /precios
         (utils/precios.ts). Cada establecimiento cuenta aparte (decisión de Arturo del 30-09) y el alta de cada
         agencia de más incluye la configuración asistida (02-10). -->
    <section class="max-w-4xl mx-auto px-6 mt-20" aria-labelledby="precio-channel">
      <h2 id="precio-channel" class="text-3xl font-bold text-center text-gray-900 mb-8">Lo que cuesta</h2>
      <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 max-w-xl mx-auto text-center">
        <p class="text-gray-600 mb-6">
          El calendario y el motor de reservas van en todos los planes. Y cada plan incluye de 1 a 5 agencias,
          según las unidades de tu alojamiento.
        </p>
        <div class="overflow-x-auto mb-6">
          <table class="min-w-full border border-gray-200 rounded-lg text-left">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-3 sm:px-4 py-3 text-sm font-semibold text-gray-900">Plan</th>
                <th scope="col" class="px-3 sm:px-4 py-3 text-sm font-semibold text-gray-900">Agencias incluidas</th>
                <th scope="col" class="px-3 sm:px-4 py-3 text-sm font-semibold text-gray-900">Alta de cada agencia de más</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="plan in PLANES" :key="plan.nombre">
                <th scope="row" class="px-3 sm:px-4 py-3 text-sm font-normal text-gray-700">{{ plan.nombre }} <span class="text-gray-500">({{ plan.unidades }})</span></th>
                <td class="px-3 sm:px-4 py-3 text-sm text-gray-700">{{ plan.otasIncluidas }}</td>
                <td class="px-3 sm:px-4 py-3 text-sm text-gray-700">{{ plan.altaOtaExtra }}&nbsp;€</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-5xl font-bold text-primary mb-2">{{ CUOTA_OTA_EXTRA }}&nbsp;€<span class="text-xl text-gray-500">/mes</span></p>
        <p class="text-gray-600 mb-2">por cada agencia de más, en todos los planes (sin IVA)</p>
        <p class="text-sm text-gray-500 mb-6">
          El alta se paga una sola vez por agencia e incluye la configuración asistida. Cada establecimiento cuenta
          aparte: dos alojamientos con su propio perfil de Booking son dos agencias.
        </p>
        <NuxtLink class="btn btn-outline inline-block px-6" to="/precios">Ver los planes</NuxtLink>
        <p class="text-base text-gray-500 mt-6">Servicio ofrecido en colaboración con WuBook</p>
      </div>
    </section>
  </PaginaFuncion>
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'
import { CUOTA_OTA_EXTRA, PLANES } from '~/utils/precios'

const DESCRIPCION = 'Conecta Booking, Airbnb y más agencias y lleva sus precios y disponibilidad en un calendario, con tu motor de reservas incluido aunque no conectes ninguna.'

useSeoPagina({
  titulo: 'Channel manager con motor de reservas incluido',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'Empieza sin agencias, si quieres',
    texto: 'El calendario de precios y disponibilidad, tu motor de reservas y Hugo funcionan sin conectar ninguna agencia y sin pagar nada más. Si después conectas Booking o Airbnb, se conserva todo lo que ya tenías.',
  },
  {
    titulo: 'Precios y disponibilidad, día a día',
    texto: 'Cada día de cada tipo de habitación, de un vistazo: su precio, cuántas quedan libres, cuántas anuncias y cuántas has vendido.',
    puntos: [
      'Te avisa si tienes habitaciones libres que no estás poniendo a la venta',
      'También desde el móvil',
    ],
  },
  {
    titulo: 'Muchos días de golpe',
    texto: 'Cambia precios, cupos o restricciones de hasta dos años en una sola operación, por días de la semana y en varios tipos de habitación a la vez. Antes de aplicar, ves un resumen de lo que va a cambiar.',
  },
  {
    titulo: 'Agencias o venta directa: tú repartes',
    texto: 'De cada tipo de habitación decides, día a día, cuántas pones en las agencias y cuántas te guardas para vender tú directamente.',
  },
  {
    titulo: 'Restricciones',
    texto: 'Estancia mínima y máxima, estancia mínima según el día de llegada, y abrir o cerrar la venta de un día. Con varios planes de restricciones si los necesitas.',
  },
  {
    titulo: 'Planes y tarifas',
    texto: 'Crea tus planes de precios, y planes que siguen a otro con un más o un menos en euros o en porcentaje: cambias el principal y los demás se mueven solos. También con precio para uso individual.',
  },
  {
    titulo: 'Regímenes',
    texto: 'Desayuno, media pensión, pensión completa o todo incluido: el que va en el precio y los demás, con su suplemento o con descuento.',
  },
  {
    titulo: 'Habitaciones bien presentadas',
    texto: 'Las fotos y la descripción de cada tipo de habitación, en cada idioma, para tu motor de reservas y algunas agencias.',
  },
  {
    titulo: 'Siempre sabes si está al día',
    texto: 'Un indicador te dice si todo lo que has cambiado ya está enviado a las agencias. Y con las notificaciones instantáneas, que se activan solas al conectar, las reservas de las agencias entran en tu planning nada más producirse.',
  },
  {
    titulo: 'Ninguna reserva se pierde',
    texto: 'Si entra una reserva y no queda hueco para todas sus noches, espera en una bandeja hasta que la colocas, y Hospedy la coloca sola en cuanto se libera una habitación del tipo que pide.',
  },
  {
    titulo: 'Tu motor de reservas',
    texto: 'Eliges qué planes de precios vendes en tu web y te damos la dirección de tu motor de reservas, para enlazarla desde tu web o tus redes. Sin comisión por reserva.',
  },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿Tengo que conectar Booking para usar el motor de reservas?',
    respuesta: 'No. El motor de reservas y su calendario de precios y disponibilidad funcionan sin conectar ninguna agencia, y van incluidos en todos los planes.',
  },
  {
    pregunta: '¿Pierdo algo si conecto las agencias más adelante?',
    respuesta: 'No. Tus precios, tu disponibilidad y tus reservas se quedan como estaban, y desde ese momento se sincronizan también con las agencias que conectes.',
  },
  {
    pregunta: '¿Puedo guardar habitaciones para la venta directa?',
    respuesta: 'Sí. De cada tipo de habitación decides cuántas anuncias en las agencias y cuántas te guardas en exclusiva para vender tú.',
  },
  {
    pregunta: '¿Qué pasa si llega una reserva y no tengo hueco?',
    respuesta: 'Entra igualmente, sin habitación asignada, y espera en una bandeja hasta que la colocas. Si se libera una habitación del tipo que pide, Hospedy la coloca sola.',
  },
  {
    pregunta: '¿Cuánto cuesta el channel manager?',
    respuesta: `Va incluido en tu plan, con 1, 2, 3 o 5 agencias según las unidades de tu alojamiento. Cada agencia de más cuesta ${CUOTA_OTA_EXTRA} €/mes sin IVA, más un alta única que incluye la configuración asistida.`,
  },
]
</script>
