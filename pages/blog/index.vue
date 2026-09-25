<template>
  <div>
    <Navbar />
    <div class="mt-24 mb-16">
      <!-- Hero -->
      <div class="text-center max-w-4xl mx-auto px-6">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Blog de Hospedy
        </h1>
        <p class="text-xl text-gray-600">
          Guías prácticas, normativa y consejos para gestionar tu alojamiento turístico en España.
        </p>
      </div>

      <!-- Blog posts grid -->
      <div class="max-w-6xl mx-auto px-6 mt-16">
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Post 1 - Partes de viajeros SES -->
          <NuxtLink to="/blog/como-enviar-partes-viajeros-ses-hospedajes" class="group">
            <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-primary/10 h-48 flex items-center justify-center">
                <svg class="w-20 h-20 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div class="p-6">
                <span class="text-lg text-primary font-medium">Normativa</span>
                <h2 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">Cómo enviar partes de viajeros a SES Hospedajes automáticamente</h2>
                <p class="text-gray-600 mt-2">Guía completa sobre el Real Decreto 933/2021, multas de hasta 30.000€ y cómo cumplir en 4 clics.</p>
                <div class="mt-4 flex items-center text-lg text-gray-500">
                  <span>10 min lectura</span>
                  <span class="mx-2">·</span>
                  <span>Actualizado Feb 2026</span>
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- Post 2 - Encuestas INE -->
          <NuxtLink to="/blog/encuestas-ine-alojamientos-turisticos" class="group">
            <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-secondary/10 h-48 flex items-center justify-center">
                <svg class="w-20 h-20 text-secondary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div class="p-6">
                <span class="text-lg text-secondary font-medium">Normativa</span>
                <h2 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">Guía completa: Encuesta INE para alojamientos turísticos 2026</h2>
                <p class="text-gray-600 mt-2">Hospedy es el único PMS que envía la encuesta INE automáticamente. Plazos, datos y cómo automatizarlo.</p>
                <div class="mt-4 flex items-center text-lg text-gray-500">
                  <span>8 min lectura</span>
                  <span class="mx-2">·</span>
                  <span>Actualizado Feb 2026</span>
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- Post 3 - Mejores PMS casas rurales -->
          <NuxtLink to="/blog/mejores-pms-casas-rurales" class="group">
            <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-blue-50 h-48 flex items-center justify-center">
                <svg class="w-20 h-20 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <div class="p-6">
                <span class="text-lg text-blue-600 font-medium">Comparativas</span>
                <h2 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">Los 5 mejores PMS para casas rurales en España [2026]</h2>
                <p class="text-gray-600 mt-2">Comparativa de Hospedy, RuralGest, AvaiBook, Amenitiz y Cloudbeds. Precios y funcionalidades.</p>
                <div class="mt-4 flex items-center text-lg text-gray-500">
                  <span>12 min lectura</span>
                  <span class="mx-2">·</span>
                  <span>Actualizado Feb 2026</span>
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- Post 4 - Hospedy vs RuralGest -->
          <NuxtLink to="/blog/hospedy-vs-ruralgest" class="group">
            <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-blue-50 h-48 flex items-center justify-center">
                <svg class="w-20 h-20 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <div class="p-6">
                <span class="text-lg text-blue-600 font-medium">Comparativas</span>
                <h2 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">Hospedy vs RuralGest: Comparativa completa 2026</h2>
                <p class="text-gray-600 mt-2">Diferencias clave entre los dos principales PMS españoles para casas rurales y hoteles pequeños.</p>
                <div class="mt-4 flex items-center text-lg text-gray-500">
                  <span>10 min lectura</span>
                  <span class="mx-2">·</span>
                  <span>Actualizado Feb 2026</span>
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- Post 5 - Booking sin overbooking -->
          <NuxtLink to="/blog/como-evitar-overbookings" class="group">
            <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-orange-50 h-48 flex items-center justify-center">
                <svg class="w-20 h-20 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="p-6">
                <span class="text-lg text-orange-600 font-medium">Consejos</span>
                <h2 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">Cómo conectar tu casa rural a Booking.com sin overbooking</h2>
                <p class="text-gray-600 mt-2">Sincronización bidireccional en tiempo real con más de 50 OTAs para evitar dobles reservas.</p>
                <div class="mt-4 flex items-center text-lg text-gray-500">
                  <span>7 min lectura</span>
                  <span class="mx-2">·</span>
                  <span>Actualizado Feb 2026</span>
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- Post 6 - Pre check-in -->
          <NuxtLink to="/blog/pre-checkin-ahorrar-tiempo" class="group">
            <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-orange-50 h-48 flex items-center justify-center">
                <svg class="w-20 h-20 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="p-6">
                <span class="text-lg text-orange-600 font-medium">Consejos</span>
                <h2 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">Pre check-in: Cómo ahorrar tiempo en la recepción</h2>
                <p class="text-gray-600 mt-2">Los huéspedes completan su registro antes de llegar. De 5-10 minutos a 30 segundos por reserva.</p>
                <div class="mt-4 flex items-center text-lg text-gray-500">
                  <span>6 min lectura</span>
                  <span class="mx-2">·</span>
                  <span>Actualizado Feb 2026</span>
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- Post 7 - Reservas directas vs OTAs -->
          <NuxtLink to="/blog/reservas-directas-vs-otas" class="group">
            <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-green-50 h-48 flex items-center justify-center">
                <svg class="w-20 h-20 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="p-6">
                <span class="text-lg text-green-600 font-medium">Rentabilidad</span>
                <h2 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">Reservas directas vs OTAs: qué es más rentable</h2>
                <p class="text-gray-600 mt-2">Análisis de costes y beneficios de cada canal. Calcula cuánto puedes ahorrar con reservas directas.</p>
                <div class="mt-4 flex items-center text-lg text-gray-500">
                  <span>7 min lectura</span>
                  <span class="mx-2">·</span>
                  <span>Actualizado Feb 2026</span>
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- Post 8 - Cuánto cuesta un PMS -->
          <NuxtLink to="/blog/cuanto-cuesta-pms-hotel" class="group">
            <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-yellow-50 h-48 flex items-center justify-center">
                <svg class="w-20 h-20 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div class="p-6">
                <span class="text-lg text-yellow-600 font-medium">Precios</span>
                <h2 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">¿Cuánto cuesta un PMS para hotel pequeño en 2026?</h2>
                <p class="text-gray-600 mt-2">Rango de precios del mercado, costes ocultos y ROI. Hospedy desde €350/año todo incluido.</p>
                <div class="mt-4 flex items-center text-lg text-gray-500">
                  <span>8 min lectura</span>
                  <span class="mx-2">·</span>
                  <span>Actualizado Feb 2026</span>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>
      </div>

      <!-- Newsletter CTA -->
      <div class="max-w-4xl mx-auto px-6 mt-20">
        <div class="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">¿Quieres recibir más consejos?</h2>
          <p class="text-gray-600 mb-6">Suscríbete a nuestro boletín y recibe guías prácticas para gestionar tu alojamiento.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <NuxtLink to="/#contacto" class="btn btn-grad">Contactar con nosotros</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog - Guías para gestión hotelera',
  meta: [
    { name: 'description', content: 'Blog de Hospedy con guías prácticas sobre partes de viajeros, encuestas INE, channel manager y consejos para gestionar tu alojamiento turístico en España.' }
  ]
})
</script>
