<template>
  <div>
    <article class="pt-24">
      <!-- Header -->
      <ArticuloCabecera :articulo="articulo">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          ¿Cuánto cuesta un PMS para hotel pequeño en 2026?
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Un PMS completo para hotel pequeño o casa rural, con channel manager y motor de reservas, ronda en España los
          50-70&nbsp;€ al mes. Hospedy cuesta desde {{ PLANES[0].mensual }}&nbsp;€ al mes sin IVA.
        </p>
        </ArticuloCabecera>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          Hospedy tiene todas las funciones en todos los planes, desde 350&nbsp;€/año sin IVA y con Hugo, su asistente con IA, incluido. Te quita trabajo en partes, encuesta del INE y calendarios.
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
                <td class="px-4 py-3 text-sm text-gray-700">10-20&nbsp;€</td>
                <td class="px-4 py-3 text-sm text-gray-700">120-240&nbsp;€</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Completo (PMS + CM + Motor)</td>
                <td class="px-4 py-3 text-sm text-gray-700">50-70&nbsp;€</td>
                <td class="px-4 py-3 text-sm text-gray-700">600-840&nbsp;€</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Premium (plataformas internacionales)</td>
                <td class="px-4 py-3 text-sm text-gray-700">100&nbsp;€+</td>
                <td class="px-4 py-3 text-sm text-gray-700">1.200&nbsp;€+</td>
              </tr>
              <tr class="bg-green-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Hospedy (todas las funciones y Hugo)</td>
                <td class="px-4 py-3 text-sm text-gray-700">desde {{ PLANES[0].mensual }}&nbsp;€</td>
                <td class="px-4 py-3 text-sm font-medium text-green-600">desde {{ PLANES[0].anual }}&nbsp;€</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Cuidado con los costes ocultos</h2>
        <p>El precio base no siempre es el precio final. Muchos sistemas tienen costes adicionales que pueden sorprenderte:</p>

        <h3>Costes de implementación</h3>
        <ul>
          <li><strong>Configuración inicial:</strong> algunos sistemas cobran 100&nbsp;€+ por puesta en marcha</li>
          <li><strong>Formación:</strong> pueden cobrarte por horas de formación</li>
          <li><strong>Migración de datos:</strong> pasar información de tu sistema anterior</li>
        </ul>

        <h3>Comisiones por reserva</h3>
        <ul>
          <li>Algunos sistemas cobran un porcentaje de cada reserva y, si tienes muchas, puede costarte más que el propio programa</li>
          <li>En Hospedy, el motor no cobra comisión por reserva. Cobrar con tarjeta es opcional: {{ comision }} por cobro, IVA incluido, más las tarifas de Stripe</li>
        </ul>

        <h3>Funciones que se pagan aparte</h3>
        <ul>
          <li>Funciones que solo entran en los planes caros o se venden como módulo, como el channel manager o el lector de documentos</li>
          <li>En Hospedy, todas las funciones van en todos los planes, también las que vayamos añadiendo</li>
        </ul>

        <h3>La inteligencia artificial: ¿incluida o aparte?</h3>
        <p>
          Cada vez más programas venden un asistente con IA, y no siempre va en el precio: pregunta si está incluido y qué
          hace de verdad. En Hospedy, Hugo va incluido en todos los planes: responde con tus datos y te prepara cambios de
          precios, reservas, partes o facturas, que se aplican cuando le das el sí. Con tus huéspedes no habla: preferimos
          que el trato con ellos siga siendo tuyo.
        </p>

        <div class="bg-yellow-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-yellow-800">Consejo</h3>
          <p class="text-yellow-900">
            Pregunta siempre por el <strong>coste total</strong> incluyendo todos los extras que puedas necesitar. El precio de entrada más bajo no siempre es el más económico a largo plazo.
          </p>
        </div>

        <h2>¿De dónde sale lo que te ahorras?</h2>
        <p>Un buen PMS se paga con el tiempo y los errores que te quita:</p>
        <ul>
          <li><strong>Menos tiempo en tareas manuales:</strong> partes de viajeros, INE, sincronización de calendarios</li>
          <li><strong>Más reservas directas:</strong> motor de reservas sin comisión por reserva frente al 15-30&nbsp;% de las agencias</li>
          <li><strong>Menos errores:</strong> menos overbookings y partes que salen solos, sin olvidos</li>
          <li><strong>Mejor gestión:</strong> informes, estadísticas, control de ocupación</li>
          <li><strong>Menos clics:</strong> con un asistente como Hugo, un cambio de precios de todo un mes o un parte rechazado se piden con una frase y se aplican con un botón</li>
        </ul>

        <h2>¿Qué incluye Hospedy por 350&nbsp;€/año?</h2>
        <p>El plan Esencial de Hospedy (350&nbsp;€/año) incluye:</p>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <ul class="space-y-2">
            <li class="flex items-start gap-2 group">
              <MarcaLista class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>PMS completo con calendario y gestión de reservas</span>
            </li>
            <li class="flex items-start gap-2 group">
              <MarcaLista class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Hugo, el asistente con IA</span>
            </li>
            <li class="flex items-start gap-2 group">
              <MarcaLista class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Channel manager (1 OTA incluida)</span>
            </li>
            <li class="flex items-start gap-2 group">
              <MarcaLista class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Motor de reservas sin comisión por reserva</span>
            </li>
            <li class="flex items-start gap-2 group">
              <MarcaLista class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Partes de viajeros automáticos a SES Hospedajes</span>
            </li>
            <li class="flex items-start gap-2 group">
              <MarcaLista class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Encuesta del INE rellena (con envío en un clic en hoteles y apartamentos)</span>
            </li>
            <li class="flex items-start gap-2 group">
              <MarcaLista class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Escaneo del documento con el móvil</span>
            </li>
            <li class="flex items-start gap-2 group">
              <MarcaLista class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Pre check-in</span>
            </li>
            <li class="flex items-start gap-2 group">
              <MarcaLista class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Facturas y Zenfisk, el programa de facturación con Verifactu</span>
            </li>
            <li class="flex items-start gap-2 group">
              <MarcaLista class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Soporte en español</span>
            </li>
          </ul>
        </div>

        <p>Los planes superiores admiten más unidades e incluyen más agencias (y Enterprise, soporte prioritario y onboarding dedicado); las funciones son las mismas en todos.</p>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Es mejor pagar mensual o anual?</h3>
        <p>
          El pago anual suele tener descuento. En Hospedy, el plan anual equivale a pagar 10 meses en lugar de 12.
        </p>

        <h3>¿Hay período de prueba?</h3>
        <p>
          Sí: 30 días gratis, sin tarjeta de crédito y sin permanencia.
        </p>

        <h3>¿Puedo cambiar de plan después?</h3>
        <p>
          Sí. El plan va por el número de unidades: si cambian, pasas al plan que te corresponde y se aplica en la siguiente cuota.
        </p>

        <h3>¿El IVA está incluido?</h3>
        <p>
          Los precios de los planes de Hospedy son sin IVA, como es habitual en software B2B. La comisión de los cobros con tarjeta sí lo lleva incluido.
        </p>
      </div>

    </article>
    <!-- La función de la que habla, más guías y la banda de cierre -->
    <ArticuloPie
      :articulo="articulo"
      titulo="¿Quieres saber cuánto pagarías con Hospedy?"
      texto="Desde 350 € al año, con todas las funciones y Hugo en todos los planes. Te lo enseñamos en una demo y, después, 30 días gratis, sin tarjeta y sin permanencia."
    />
  </div>
</template>

<script setup lang="ts">
import { PLANES, TEXTO_COMISION_COBROS } from '~/utils/precios'

const comision = TEXTO_COMISION_COBROS
const articulo = useArticulo('cuanto-cuesta-pms-hotel')
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
