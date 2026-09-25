<template>
  <div>
    <Navbar />
    <article class="mt-24 mb-16">
      <!-- Header -->
      <header class="max-w-3xl mx-auto px-6">
        <NuxtLink
          to="/blog"
          class="text-primary hover:underline mb-4 inline-block"
          >← Volver al blog</NuxtLink
        >
        <span class="block text-lg text-orange-600 font-medium mb-2"
          >Consejos</span
        >
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Cómo conectar tu casa rural a Booking.com sin overbooking
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Para conectar tu alojamiento a Booking.com sin riesgo de overbooking necesitas un channel manager con sincronización bidireccional en tiempo real.
        </p>
        <div
          class="flex items-center text-lg text-gray-500 border-b border-gray-200 pb-6"
        >
          <span>7 min lectura</span>
          <span class="mx-2">·</span>
          <span>Actualizado Febrero 2026</span>
        </div>
      </header>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          Hospedy sincroniza automáticamente cada vez que hay un cambio en cualquier canal, no cada 15 o 30 minutos. El sistema también optimiza la disponibilidad para maximizar reservas sin conflictos.
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

        <h2>La solución: sincronización en tiempo real</h2>
        <p>
          Hospedy utiliza <strong>sincronización bidireccional</strong> que se activa cada vez que hay un cambio. No hay intervalos de 15 o 30 minutos esperando: cuando entra una reserva, se actualiza todo instantáneamente.
        </p>
        <p>
          <strong>Bidireccional</strong> significa que funciona en ambas direcciones:
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
          Hospedy no solo sincroniza, también optimiza. Si tienes varias habitaciones del mismo tipo, el sistema las gestiona para admitir el máximo número de reservas sin conflictos.
        </p>
        <p>
          Por ejemplo: si tienes 3 habitaciones dobles y recibes una reserva para una de ellas, el sistema mantiene las otras 2 disponibles en todos los canales. Si el huésped modifica las fechas, se recalcula automáticamente.
        </p>

        <h2>Mapeo de habitaciones y tarifas</h2>
        <p>La configuración del channel manager en Hospedy permite:</p>
        <ul>
          <li><strong>Habitaciones por tipo:</strong> agrupa habitaciones similares para gestión eficiente</li>
          <li><strong>Tarifas por tipo y fecha:</strong> diferentes precios según temporada o día de la semana</li>
          <li><strong>Cambios manuales:</strong> puedes modificar valores para unidades específicas cuando lo necesites</li>
        </ul>
        <p>
          Cualquier cambio manual se sincroniza inmediatamente con todos los canales conectados.
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
                <td class="px-4 py-3 text-sm text-gray-700">€79 + €10/mes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Profesional</td>
                <td class="px-4 py-3 text-sm text-gray-700">2</td>
                <td class="px-4 py-3 text-sm text-gray-700">€49 + €10/mes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Business</td>
                <td class="px-4 py-3 text-sm text-gray-700">3</td>
                <td class="px-4 py-3 text-sm text-gray-700">€29 + €10/mes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700 font-medium">Enterprise</td>
                <td class="px-4 py-3 text-sm text-gray-700 font-medium">Ilimitadas</td>
                <td class="px-4 py-3 text-sm text-gray-700">Incluidas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-primary/5 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4">Channel Manager de Hospedy</h3>
          <p class="text-gray-700 mb-4">
            Hospedy se conecta con más de 50 OTAs incluyendo:
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
              <span>Sincronización bidireccional en tiempo real</span>
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
          La conexión inicial suele completarse en unas horas. Necesitas tener una cuenta de Booking.com activa y seguir el proceso de vinculación desde Hospedy.
        </p>

        <h3>¿Qué pasa si cambio un precio en Booking.com directamente?</h3>
        <p>
          El cambio se sincroniza automáticamente a Hospedy y a cualquier otro canal conectado. La sincronización es bidireccional.
        </p>

        <h3>¿Puedo bloquear fechas para uso personal?</h3>
        <p>
          Sí, puedes crear bloqueos en el calendario de Hospedy que se sincronizan automáticamente a todos los canales.
        </p>

        <h3>¿Funciona con Airbnb, Expedia y otras plataformas?</h3>
        <p>
          Sí, Hospedy se conecta con más de 50 OTAs incluyendo Booking.com, Airbnb, Expedia, Vrbo y muchas más.
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

      <!-- CTA -->
      <div class="max-w-3xl mx-auto px-6 mt-16">
        <div class="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">¿Quieres olvidarte de los overbookings?</h2>
          <p class="text-gray-600 mb-6">
            Crea tu cuenta, prueba Hospedy gratis 30 días con Channel Manager y sincroniza todas tus OTAs en tiempo real.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink class="btn btn-grad" to="/demo">Solicitar demo</NuxtLink>
            <NuxtLink class="btn btn-outline" to="/funciones/channel-manager"
              >Ver Channel Manager</NuxtLink
            >
          </div>
        </div>
      </div>
    </article>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Cómo conectar tu casa rural a Booking.com sin overbooking",
  meta: [
    {
      name: "description",
      content: "Conecta tu alojamiento a Booking.com sin riesgo de overbooking. Hospedy sincroniza en tiempo real de forma bidireccional con más de 50 OTAs.",
    },
  ],
});
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
