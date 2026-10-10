<template>
  <div>
    <article class="pt-24">
      <!-- Header -->
      <ArticuloCabecera :articulo="articulo">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Reservas directas vs OTAs: qué es más rentable
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Análisis de costes y beneficios de cada canal. Calcula cuánto puedes
          ahorrar con reservas directas.
        </p>
        </ArticuloCabecera>

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
                  En reserva de 500&nbsp;€
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-4 border-b border-gray-100">Booking.com</td>
                <td class="p-4 border-b border-gray-100 text-center">15-18&nbsp;%</td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-red-600 font-semibold"
                >
                  -75&nbsp;€ a -90&nbsp;€
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Airbnb</td>
                <td class="p-4 border-b border-gray-100 text-center">
                  3-5&nbsp;% (host) + 14&nbsp;% (guest)
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-red-600 font-semibold"
                >
                  -15&nbsp;€ a -25&nbsp;€*
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Expedia</td>
                <td class="p-4 border-b border-gray-100 text-center">15-25&nbsp;%</td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-red-600 font-semibold"
                >
                  -75&nbsp;€ a -125&nbsp;€
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Vrbo</td>
                <td class="p-4 border-b border-gray-100 text-center">5-8&nbsp;%</td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-red-600 font-semibold"
                >
                  -25&nbsp;€ a -40&nbsp;€
                </td>
              </tr>
              <tr class="bg-green-50">
                <td class="p-4 border-b border-gray-100 font-semibold">
                  Reserva directa
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center font-semibold"
                >
                  0&nbsp;%
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-green-600 font-semibold"
                >
                  0&nbsp;€
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
          <li>Precio medio por noche: 100&nbsp;€</li>
          <li>Estancia media: 3 noches</li>
          <li>20 reservas al mes</li>
        </ul>

        <div class="bg-gray-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4">
            Escenario A: 100&nbsp;% reservas vía Booking (15&nbsp;% comisión)
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-600">Facturación bruta mensual</p>
              <p class="text-2xl font-bold">6.000&nbsp;€</p>
            </div>
            <div>
              <p class="text-gray-600">Comisiones a Booking</p>
              <p class="text-2xl font-bold text-red-600">-900&nbsp;€</p>
            </div>
            <div>
              <p class="text-gray-600">Ingresos netos</p>
              <p class="text-2xl font-bold">5.100&nbsp;€</p>
            </div>
            <div>
              <p class="text-gray-600">Comisiones anuales</p>
              <p class="text-2xl font-bold text-red-600">-10.800&nbsp;€</p>
            </div>
          </div>
        </div>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4">
            Escenario B: 50&nbsp;% directas + 50&nbsp;% Booking
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-600">Facturación bruta mensual</p>
              <p class="text-2xl font-bold">6.000&nbsp;€</p>
            </div>
            <div>
              <p class="text-gray-600">Comisiones a Booking</p>
              <p class="text-2xl font-bold text-red-600">-450&nbsp;€</p>
            </div>
            <div>
              <p class="text-gray-600">Ingresos netos</p>
              <p class="text-2xl font-bold">5.550&nbsp;€</p>
            </div>
            <div>
              <p class="text-gray-600">Ahorro anual</p>
              <p class="text-2xl font-bold text-green-600">+5.400&nbsp;€</p>
            </div>
          </div>
        </div>

        <p>
          <strong
            >Pasar del 100&nbsp;% OTAs al 50&nbsp;% reservas directas supone 5.400&nbsp;€ más al
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
            <strong>Incentivos:</strong> Ofrece un 5-10&nbsp;% de descuento por
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
            Hospedy incluye un motor de reservas sin comisión por reserva que
            puedes enlazar desde tu web o tus redes:
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
              <span>0&nbsp;% de comisión por reserva</span>
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
              <span>Cobro del total o de un depósito con tarjeta: 3,9&nbsp;% + 0,40&nbsp;€ por cobro, IVA incluido, solo si lo usas</span>
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
          <strong>Objetivo realista:</strong> pasar del 10&nbsp;% de reservas directas
          al 40-50&nbsp;% en un año. El ahorro en comisiones puede suponer miles de
          euros.
        </p>
      </div>

    </article>
    <!-- La función de la que habla, más guías y la banda de cierre -->
    <ArticuloPie
      :articulo="articulo"
      titulo="¿Quieres aumentar tus reservas directas?"
      texto="Hospedy incluye motor de reservas sin comisión por reserva. Crea tu cuenta y pruébalo gratis durante 30 días."
    />
  </div>
</template>

<script setup lang="ts">
const articulo = useArticulo('reservas-directas-vs-otas')
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
