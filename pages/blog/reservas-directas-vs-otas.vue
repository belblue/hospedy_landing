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
        <span class="block text-lg text-green-600 font-medium mb-2"
          >Rentabilidad</span
        >
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Reservas directas vs OTAs: qué es más rentable
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Análisis de costes y beneficios de cada canal. Calcula cuánto puedes
          ahorrar con reservas directas.
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
          Booking, Airbnb, Expedia... las OTAs te dan visibilidad, pero también
          se llevan un buen mordisco de cada reserva. ¿Merece la pena depender
          de ellas? ¿Cuánto podrías ahorrar con reservas directas? Vamos a hacer
          números.
        </p>

        <h2>¿Cuánto cobran las OTAs?</h2>
        <p>
          Las comisiones varían según la plataforma y el tipo de propiedad, pero
          estos son los rangos habituales:
        </p>

        <div class="not-prose overflow-x-auto my-8">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left p-4 border-b border-gray-200">
                  Plataforma
                </th>
                <th class="text-center p-4 border-b border-gray-200">
                  Comisión
                </th>
                <th class="text-center p-4 border-b border-gray-200">
                  En reserva de 500€
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-4 border-b border-gray-100">Booking.com</td>
                <td class="p-4 border-b border-gray-100 text-center">15-18%</td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-red-600 font-semibold"
                >
                  -75€ a -90€
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Airbnb</td>
                <td class="p-4 border-b border-gray-100 text-center">
                  3-5% (host) + 14% (guest)
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-red-600 font-semibold"
                >
                  -15€ a -25€*
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Expedia</td>
                <td class="p-4 border-b border-gray-100 text-center">15-25%</td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-red-600 font-semibold"
                >
                  -75€ a -125€
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Vrbo</td>
                <td class="p-4 border-b border-gray-100 text-center">5-8%</td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-red-600 font-semibold"
                >
                  -25€ a -40€
                </td>
              </tr>
              <tr class="bg-green-50">
                <td class="p-4 border-b border-gray-100 font-semibold">
                  Reserva directa
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center font-semibold"
                >
                  0%
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-green-600 font-semibold"
                >
                  0€
                </td>
              </tr>
            </tbody>
          </table>
          <p class="text-lg text-gray-500 mt-2">
            *Airbnb cobra al huésped, lo que puede reducir tu precio neto
            indirectamente.
          </p>
        </div>

        <h2>El impacto real en tu negocio</h2>
        <p>
          Veamos un ejemplo concreto. Imagina que gestionas un apartamento con
          estas características:
        </p>
        <ul>
          <li>Precio medio por noche: 100€</li>
          <li>Estancia media: 3 noches</li>
          <li>20 reservas al mes</li>
        </ul>

        <div class="bg-gray-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4">
            Escenario A: 100% reservas vía Booking (15% comisión)
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-600">Facturación bruta mensual</p>
              <p class="text-2xl font-bold">6.000€</p>
            </div>
            <div>
              <p class="text-gray-600">Comisiones a Booking</p>
              <p class="text-2xl font-bold text-red-600">-900€</p>
            </div>
            <div>
              <p class="text-gray-600">Ingresos netos</p>
              <p class="text-2xl font-bold">5.100€</p>
            </div>
            <div>
              <p class="text-gray-600">Comisiones anuales</p>
              <p class="text-2xl font-bold text-red-600">-10.800€</p>
            </div>
          </div>
        </div>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4">
            Escenario B: 50% directas + 50% Booking
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-600">Facturación bruta mensual</p>
              <p class="text-2xl font-bold">6.000€</p>
            </div>
            <div>
              <p class="text-gray-600">Comisiones a Booking</p>
              <p class="text-2xl font-bold text-red-600">-450€</p>
            </div>
            <div>
              <p class="text-gray-600">Ingresos netos</p>
              <p class="text-2xl font-bold">5.550€</p>
            </div>
            <div>
              <p class="text-gray-600">Ahorro anual</p>
              <p class="text-2xl font-bold text-green-600">+5.400€</p>
            </div>
          </div>
        </div>

        <p>
          <strong
            >Pasar del 100% OTAs al 50% reservas directas supone 5.400€ más al
            año en tu bolsillo.</strong
          >
          Y eso sin contar que puedes ofrecer un precio ligeramente mejor al
          cliente directo y aun así ganar más.
        </p>

        <h2>Ventajas de las reservas directas</h2>

        <h3>1. Mayor margen de beneficio</h3>
        <p>
          Sin comisiones, cada euro de la reserva es para ti. Puedes usar parte
          de ese ahorro para ofrecer mejores condiciones a tus clientes
          directos.
        </p>

        <h3>2. Relación directa con el cliente</h3>
        <p>
          Cuando un cliente reserva por Booking, sus datos pertenecen a Booking.
          Si reserva directamente contigo, puedes:
        </p>
        <ul>
          <li>Enviarle ofertas para futuras estancias</li>
          <li>Pedirle una reseña en Google</li>
          <li>Fidelizarlo con descuentos de repetición</li>
        </ul>

        <h3>3. Flexibilidad en políticas</h3>
        <p>
          Puedes establecer tus propias políticas de cancelación, depósitos y
          condiciones sin estar sujeto a las reglas de las OTAs.
        </p>

        <h3>4. Menos dependencia</h3>
        <p>
          Si Booking decide cambiar sus comisiones o penalizarte por algo, tu
          negocio no se resiente tanto si tienes un flujo sano de reservas
          directas.
        </p>

        <h2>Ventajas de las OTAs</h2>
        <p>Las OTAs no son el enemigo. Tienen su función:</p>

        <h3>1. Visibilidad global</h3>
        <p>
          Millones de viajeros buscan alojamiento en Booking y Airbnb cada día.
          Conseguir esa visibilidad por tu cuenta requeriría una inversión
          enorme en marketing.
        </p>

        <h3>2. Confianza del consumidor</h3>
        <p>
          Muchos viajeros prefieren reservar por plataformas conocidas porque se
          sienten protegidos ante problemas.
        </p>

        <h3>3. Menos trabajo de captación</h3>
        <p>
          Las OTAs hacen el trabajo de atraer clientes. Tú solo tienes que estar
          ahí y tener buenas valoraciones.
        </p>

        <h2>La estrategia óptima: combinar ambas</h2>
        <p>
          La clave no es eliminar las OTAs, sino
          <strong>reducir la dependencia</strong>. Una estrategia equilibrada
          podría ser:
        </p>
        <ul>
          <li>
            <strong>OTAs para captación:</strong> Usa Booking y Airbnb para
            conseguir nuevos clientes
          </li>
          <li>
            <strong>Fidelización directa:</strong> Cuando un cliente repite,
            anímale a reservar directamente
          </li>
          <li>
            <strong>Motor de reservas propio:</strong> Ten un sistema fácil en
            tu web para reservas directas
          </li>
          <li>
            <strong>Incentivos:</strong> Ofrece un 5-10% de descuento por
            reservar directo (aún ganas más que con OTAs)
          </li>
        </ul>

        <h2>Cómo captar reservas directas</h2>

        <h3>1. Ten un motor de reservas en tu web</h3>
        <p>
          Parece obvio, pero muchos alojamientos aún no tienen forma de reservar
          online en su web. Un motor de reservas te permite recibir reservas
          24/7 sin intermediarios.
        </p>

        <h3>2. Posiciona tu web en Google</h3>
        <p>
          Cuando alguien busca "hotel [tu ciudad]", tu web debería aparecer.
          Trabaja el SEO local y crea contenido útil sobre tu zona.
        </p>

        <h3>3. Recoge emails y fideliza</h3>
        <p>
          Cada cliente que pasa por tu alojamiento es una oportunidad. Pídele su
          email y envíale ofertas para futuras estancias.
        </p>

        <h3>4. Incentiva las reseñas en Google</h3>
        <p>
          Las reseñas de Google dan visibilidad y confianza. Pide a tus clientes
          satisfechos que dejen una valoración.
        </p>

        <h3>5. Tarjetas de visita con código QR</h3>
        <p>
          Deja en la habitación una tarjeta con un QR que lleve directamente a
          tu motor de reservas. Cuando el cliente quiera volver, la tendrá
          guardada.
        </p>

        <div class="bg-primary/5 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4">Motor de reservas de Hospedy</h3>
          <p class="text-gray-700 mb-4">
            Hospedy incluye un motor de reservas sin comisiones que puedes
            integrar en cualquier web:
          </p>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>0% de comisión por reserva</span>
            </li>
            <li class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Cobro de depósitos con Stripe</span>
            </li>
            <li class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Sincronizado con tu calendario</span>
            </li>
            <li class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Incluido en la suscripción</span>
            </li>
          </ul>
        </div>

        <h2>Conclusión</h2>
        <p>
          Las OTAs son útiles para captar clientes, pero depender exclusivamente
          de ellas es caro. Con una estrategia que combine OTAs para captación y
          un buen motor de reservas para fidelización, puedes aumentar
          significativamente tu rentabilidad.
        </p>
        <p>
          <strong>Objetivo realista:</strong> pasar del 10% de reservas directas
          al 40-50% en un año. El ahorro en comisiones puede suponer miles de
          euros.
        </p>
      </div>

      <!-- CTA -->
      <div class="max-w-3xl mx-auto px-6 mt-16">
        <div class="bg-green-50 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">
            ¿Quieres aumentar tus reservas directas?
          </h2>
          <p class="text-gray-600 mb-6">
            Hospedy incluye motor de reservas sin comisiones. Crea tu cuenta y pruébalo gratis durante 30 días.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink class="btn btn-grad" to="/demo">Solicitar demo</NuxtLink>
            <NuxtLink class="btn btn-outline" to="/funciones/motor-reservas"
              >Ver motor de reservas</NuxtLink
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
  title: "Reservas directas vs OTAs: qué es más rentable - Análisis completo",
  meta: [
    {
      name: "description",
      content:
        "Compara el coste de las comisiones de Booking, Airbnb y otras OTAs vs reservas directas. Calcula cuánto puedes ahorrar y cómo captar más reservas directas.",
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
