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
        <span class="block text-lg text-yellow-600 font-medium mb-2"
          >Precios</span
        >
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          ¿Cuánto cuesta un PMS para hotel pequeño en 2026?
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Un PMS para hotel pequeño o casa rural en España cuesta entre €120 y €1.500 al año. La media del mercado está en €50-70 al mes para soluciones completas con channel manager incluido.
        </p>
        <div
          class="flex items-center text-lg text-gray-500 border-b border-gray-200 pb-6"
        >
          <span>8 min lectura</span>
          <span class="mx-2">·</span>
          <span>Actualizado Febrero 2026</span>
        </div>
      </header>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          Hospedy ofrece todo incluido desde €350/año. El retorno de inversión típico es recuperar el coste en 1-6 meses gracias al ahorro de tiempo y reducción de errores.
        </p>

        <h2>Rango de precios del mercado</h2>

        <div class="overflow-x-auto my-6 not-prose">
          <table class="min-w-full border border-gray-200 rounded-lg">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Tipo de solución</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Precio mensual</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Precio anual</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Básico (solo channel manager)</td>
                <td class="px-4 py-3 text-sm text-gray-700">€10 - €20</td>
                <td class="px-4 py-3 text-sm text-gray-700">€120 - €240</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Completo (PMS + CM + Motor)</td>
                <td class="px-4 py-3 text-sm text-gray-700">€50 - €70</td>
                <td class="px-4 py-3 text-sm text-gray-700">€600 - €840</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Premium (plataformas internacionales)</td>
                <td class="px-4 py-3 text-sm text-gray-700">€100+</td>
                <td class="px-4 py-3 text-sm text-gray-700">€1.200+</td>
              </tr>
              <tr class="bg-green-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Hospedy (todo incluido)</td>
                <td class="px-4 py-3 text-sm text-gray-700">€29 - €129</td>
                <td class="px-4 py-3 text-sm font-medium text-green-600">€350 - €1.290</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Cuidado con los costes ocultos</h2>
        <p>El precio base no siempre es el precio final. Muchos sistemas tienen costes adicionales que pueden sorprenderte:</p>

        <h3>Costes de implementación</h3>
        <ul>
          <li><strong>Configuración inicial:</strong> algunos sistemas cobran €100+ por puesta en marcha</li>
          <li><strong>Formación:</strong> pueden cobrarte por horas de training</li>
          <li><strong>Migración de datos:</strong> pasar información de tu sistema anterior</li>
        </ul>

        <h3>Comisiones por reserva</h3>
        <ul>
          <li>Algunos sistemas cobran un porcentaje de cada reserva (2-4%)</li>
          <li>AvaiBook, por ejemplo, tiene comisiones en su pasarela de pagos</li>
          <li>Con muchas reservas, estas comisiones pueden superar el coste del software</li>
        </ul>

        <h3>Servicios adicionales</h3>
        <ul>
          <li>RuralGest cobra por diseño web (€150-1.200)</li>
          <li>Packs de SEO (€220-800)</li>
          <li>Mantenimiento SEO mensual (€90/mes)</li>
          <li>Soporte premium o prioritario</li>
        </ul>

        <div class="bg-yellow-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-yellow-800">Consejo</h3>
          <p class="text-yellow-900">
            Pregunta siempre por el <strong>coste total</strong> incluyendo todos los extras que puedas necesitar. El precio de entrada más bajo no siempre es el más económico a largo plazo.
          </p>
        </div>

        <h2>¿Cuándo se amortiza la inversión?</h2>
        <p>Los estudios del sector muestran que el software de hospitalidad tiene un retorno de inversión muy positivo:</p>
        <ul>
          <li><strong>ROI medio:</strong> hasta 17x en algunos casos</li>
          <li><strong>Tiempo de amortización:</strong> típicamente 1-6 meses</li>
          <li><strong>Ahorro de tiempo:</strong> hasta 75% en tareas administrativas</li>
          <li><strong>Reducción de errores:</strong> menos multas, menos overbookings</li>
        </ul>

        <h3>¿De dónde viene el ahorro?</h3>
        <ul>
          <li><strong>Menos tiempo en tareas manuales:</strong> partes de viajeros, INE, sincronización de calendarios</li>
          <li><strong>Más reservas directas:</strong> motor de reservas sin comisiones vs 15-30% de OTAs</li>
          <li><strong>Menos errores:</strong> sin overbookings, sin multas por partes tardíos</li>
          <li><strong>Mejor gestión:</strong> informes, estadísticas, control de ocupación</li>
        </ul>

        <h2>El nivel de digitalización en España</h2>
        <p>
          Según estudios recientes, solo el <strong>31% de las PYMES turísticas en España</strong> están completamente digitalizadas. Esto significa que hay una gran oportunidad:
        </p>
        <ul>
          <li>Los alojamientos digitalizados tienen ventaja competitiva</li>
          <li>Pueden ofrecer mejor experiencia al huésped</li>
          <li>Ahorran tiempo que pueden dedicar a la atención personal</li>
          <li>Tienen mejor visibilidad online</li>
        </ul>

        <h2>¿Qué incluye Hospedy por €350/año?</h2>
        <p>El plan Esencial de Hospedy (€350/año) incluye:</p>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>PMS completo con calendario y gestión de reservas</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Channel manager (1 OTA incluida)</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Motor de reservas sin comisiones</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Partes de viajeros automáticos a SES Hospedajes</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Encuesta INE automática (único en el mercado)</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Escáner de documentos</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Pre check-in</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Soporte en español</span>
            </li>
          </ul>
        </div>

        <p>Los planes superiores añaden más OTAs, más unidades de alojamiento y funcionalidades adicionales.</p>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Es mejor pagar mensual o anual?</h3>
        <p>
          El pago anual suele tener descuento. En Hospedy, el plan anual equivale a pagar 10 meses en lugar de 12.
        </p>

        <h3>¿Hay período de prueba?</h3>
        <p>
          Hospedy ofrece 30 días de prueba gratis sin necesidad de tarjeta de crédito.
        </p>

        <h3>¿Puedo cambiar de plan después?</h3>
        <p>
          Sí, puedes subir o bajar de plan según tus necesidades. El cambio se aplica en el siguiente período de facturación.
        </p>

        <h3>¿El IVA está incluido?</h3>
        <p>
          Los precios de Hospedy son sin IVA, como es habitual en software B2B. El IVA se añade en la factura.
        </p>
      </div>

      <!-- CTA -->
      <div class="max-w-3xl mx-auto px-6 mt-16">
        <div class="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">
            ¿Quieres saber cuánto pagarías con Hospedy?
          </h2>
          <p class="text-gray-600 mb-6">
            Consulta nuestros precios públicos y transparentes. Sin sorpresas, sin letra pequeña.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink class="btn btn-grad" to="/precios">Ver precios</NuxtLink>
            <PruebaHospedyButton class="btn btn-outline" />
          </div>
        </div>
      </div>
    </article>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "¿Cuánto cuesta un PMS para hotel pequeño en 2026?",
  meta: [
    {
      name: "description",
      content: "Un PMS para hotel pequeño cuesta entre €120 y €1.500 al año. Hospedy ofrece todo incluido desde €350/año. Análisis de precios, costes ocultos y ROI.",
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
