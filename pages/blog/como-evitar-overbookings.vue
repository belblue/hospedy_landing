<template>
  <div>
    <article class="pt-24">
      <!-- Header -->
      <ArticuloCabecera :articulo="articulo">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Cómo conectar tu casa rural a Booking.com sin overbooking
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Para conectar tu alojamiento a Booking.com con el menor riesgo de overbooking necesitas un channel manager que lleve la disponibilidad de todas tus agencias en un solo calendario y la actualice en cada una cuando vendes.
        </p>
        </ArticuloCabecera>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          En Hospedy, cada cambio de precio o disponibilidad sale solo hacia tus agencias, con un indicador que te dice si ya ha salido, y las reservas de las agencias entran en tu planning nada más producirse.
        </p>

        <h2>El problema del overbooking</h2>
        <p>
          Un overbooking ocurre cuando vendes la misma habitación dos veces. Es una de las peores situaciones para un alojamiento:
        </p>
        <ul>
          <li>Tienes que cancelar una reserva confirmada</li>
          <li>El huésped deja una reseña negativa</li>
          <li>Booking.com puede penalizarte en el ranking</li>
          <li>Pierdes la confianza del cliente</li>
        </ul>

        <h2>¿Por qué ocurren los overbookings?</h2>
        <p>
          La causa principal es la <strong>sincronización lenta o manual</strong> entre canales. Imagina este escenario:
        </p>
        <ol>
          <li>Un huésped reserva en Booking.com</li>
          <li>El channel manager sincroniza cada 30 minutos</li>
          <li>Durante esos 30 minutos, otro huésped reserva la misma fecha en Airbnb</li>
          <li><strong>Overbooking</strong></li>
        </ol>
        <p>
          También ocurren cuando gestionas los calendarios manualmente y olvidas actualizar uno de los canales.
        </p>

        <div class="bg-red-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-red-800">El coste real de un overbooking</h3>
          <p class="text-red-900 mb-2">Un overbooking no es solo perder una reserva. Implica:</p>
          <ul class="text-red-900 space-y-1 list-disc pl-5">
            <li>Realojar al cliente y pagarlo de tu bolsillo</li>
            <li>Reseña negativa que afecta futuras reservas</li>
            <li>Penalización de las OTAs en el ranking</li>
            <li>Pérdida de visibilidad en las búsquedas</li>
          </ul>
        </div>

        <h2>La solución: un solo calendario para todas tus agencias</h2>
        <p>
          Hospedy lleva <strong>un solo calendario para todas tus agencias</strong>: cada cambio de precio o de disponibilidad sale solo de Hospedy hacia ellas, y con las notificaciones instantáneas, que se activan solas en las horas siguientes a conectar, sus reservas entran en tu planning nada más producirse.
        </p>
        <p>
          <strong>Un solo calendario</strong> significa que lo que vendes en una agencia deja de estar a la venta en las demás:
        </p>
        <ul>
          <li>Reserva en Booking → se actualiza Hospedy → se actualiza Airbnb</li>
          <li>Reserva en Airbnb → se actualiza Hospedy → se actualiza Booking</li>
          <li>Reserva directa en Hospedy → se actualizan todos los canales</li>
        </ul>
        <p>
          Además, siempre puedes forzar una sincronización manual si lo necesitas.
        </p>

        <h2>Sistema inteligente de disponibilidad</h2>
        <p>
          Si tienes varias habitaciones del mismo tipo, Hospedy las vende por tipo y a cada reserva le busca una habitación libre todas las noches. Si no la hay, entra igual en una bandeja para que la coloques tú, y se coloca sola si se libera sitio.
        </p>
        <p>
          Por ejemplo: si tienes 3 habitaciones dobles y recibes una reserva para una de ellas, el sistema mantiene las otras 2 disponibles en todos los canales. Si el huésped modifica las fechas, se recalcula automáticamente.
        </p>

        <h2>Mapeo de habitaciones y tarifas</h2>
        <p>La configuración del channel manager en Hospedy permite:</p>
        <ul>
          <li><strong>Habitaciones por tipo:</strong> agrupa habitaciones similares para gestión eficiente</li>
          <li><strong>Tarifas por tipo y fecha:</strong> diferentes precios según temporada o día de la semana</li>
          <li><strong>Cierres por habitación:</strong> si bloqueas una habitación concreta (obras, avería, uso propio), se descuenta también de lo que vendes en las agencias</li>
        </ul>
        <p>
          Cualquier cambio que hagas sale solo hacia todos los canales conectados.
        </p>

        <h2>¿Cuántas OTAs puedo conectar?</h2>
        <p>Depende del plan de Hospedy:</p>

        <div class="overflow-x-auto my-6 not-prose">
          <table class="min-w-full border border-gray-200 rounded-lg">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Plan</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">OTAs incluidas</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">OTA adicional</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Esencial</td>
                <td class="px-4 py-3 text-sm text-gray-700">1</td>
                <td class="px-4 py-3 text-sm text-gray-700">79&nbsp;€ + 10&nbsp;€/mes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Profesional</td>
                <td class="px-4 py-3 text-sm text-gray-700">2</td>
                <td class="px-4 py-3 text-sm text-gray-700">49&nbsp;€ + 10&nbsp;€/mes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Business</td>
                <td class="px-4 py-3 text-sm text-gray-700">3</td>
                <td class="px-4 py-3 text-sm text-gray-700">29&nbsp;€ + 10&nbsp;€/mes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700 font-medium">Enterprise</td>
                <td class="px-4 py-3 text-sm text-gray-700 font-medium">5</td>
                <td class="px-4 py-3 text-sm text-gray-700">29&nbsp;€ + 10&nbsp;€/mes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-primary/5 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4">Channel Manager de Hospedy</h3>
          <p class="text-gray-700 mb-4">
            Hospedy se conecta con más de 150 OTAs incluyendo:
          </p>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Booking.com, Airbnb, Expedia, Vrbo...</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Precios y disponibilidad salen de Hospedy; las reservas entran solas</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Gestión de precios centralizada</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>30 días de prueba gratis</span>
            </li>
          </ul>
        </div>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Cuánto tiempo tarda en conectarse Booking.com?</h3>
        <p>
          Depende también de Booking. Nos lo pides, nuestro equipo lo conecta contigo y te explica los pasos (conviene tener ya creadas tus habitaciones, con su tipo). Necesitas una cuenta de Booking.com activa.
        </p>

        <h3>¿Qué pasa si cambio un precio en Booking.com directamente?</h3>
        <p>
          Mejor no hacerlo: los precios van de Hospedy a las agencias, no al revés. Un cambio hecho directamente en Booking.com no llega a Hospedy ni a tus otras agencias. Cambia los precios siempre desde Hospedy y salen hacia todas.
        </p>

        <h3>¿Puedo bloquear fechas para uso personal?</h3>
        <p>
          Sí, puedes crear bloqueos en el calendario de Hospedy que se sincronizan automáticamente a todos los canales.
        </p>

        <h3>¿Funciona con Airbnb, Expedia y otras plataformas?</h3>
        <p>
          Sí, Hospedy se conecta con más de 150 OTAs incluyendo Booking.com, Airbnb, Expedia, Vrbo y muchas más.
        </p>

        <h3>¿Y si ya tengo un overbooking?</h3>
        <p>Si el problema ya ha ocurrido, actúa rápido:</p>
        <ol>
          <li>Contacta al cliente cuanto antes, no esperes a que llegue</li>
          <li>Busca alternativas y ofrece un alojamiento similar en la zona</li>
          <li>Compensa la diferencia de precio y ofrece un descuento para futuras estancias</li>
          <li>Discúlpate sinceramente y reconoce el error</li>
        </ol>
      </div>

    </article>
    <!-- La función de la que habla, más guías y la banda de cierre -->
    <ArticuloPie
      :articulo="articulo"
      titulo="¿Quieres evitar los overbookings?"
      texto="Crea tu cuenta y prueba Hospedy gratis 30 días, con el channel manager y todas tus agencias en un solo calendario."
    />
  </div>
</template>

<script setup lang="ts">
const articulo = useArticulo('como-evitar-overbookings')
</script>

<style scoped>
.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-10 mb-4;
}
.prose h3 {
  @apply text-xl font-semibold text-gray-900 mt-8 mb-3;
}
.prose p {
  @apply text-gray-700 mb-4 leading-relaxed;
}
.prose ul,
.prose ol {
  @apply mb-4 pl-6;
}
.prose li {
  @apply mb-2 text-gray-700;
}
.prose ul li {
  @apply list-disc;
}
.prose ol li {
  @apply list-decimal;
}
.prose a {
  @apply text-primary hover:underline;
}
.prose .lead {
  @apply text-xl text-gray-600 mb-8;
}
.prose strong {
  @apply font-semibold text-gray-900;
}
</style>
