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
        <span class="block text-lg text-blue-600 font-medium mb-2"
          >Comparativas</span
        >
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Hospedy vs RuralGest: Comparativa completa 2026
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Hospedy y RuralGest son los dos principales PMS españoles para casas rurales. Analizamos las diferencias clave para ayudarte a elegir.
        </p>
        <div
          class="flex items-center text-lg text-gray-500 border-b border-gray-200 pb-6"
        >
          <span>10 min lectura</span>
          <span class="mx-2">·</span>
          <span>Actualizado Febrero 2026</span>
        </div>
      </header>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          La diferencia clave: Hospedy te deja la encuesta del INE rellena con los datos de tus reservas (y en hoteles y apartamentos la envía al INE con un clic), mientras RuralGest solo genera un archivo XML que debes subir manualmente. Hospedy tiene precios públicos desde €350/año; RuralGest no publica precios y cobra extras por diseño web y SEO.
        </p>

        <h2>Comparativa directa</h2>

        <div class="overflow-x-auto my-6 not-prose">
          <table class="min-w-full border border-gray-200 rounded-lg">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Característica</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Hospedy</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">RuralGest</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Años en el mercado</td>
                <td class="px-4 py-3 text-sm text-gray-700">Desde 2020</td>
                <td class="px-4 py-3 text-sm text-gray-700">20+ años</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Precios públicos</td>
                <td class="px-4 py-3 text-sm text-green-600"><IconoMarca tipo="si" /> Sí, transparentes</td>
                <td class="px-4 py-3 text-sm text-orange-600"><IconoMarca tipo="no" /> Hay que pedir presupuesto</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Precio base anual</td>
                <td class="px-4 py-3 text-sm text-gray-700">€350 - €1.290</td>
                <td class="px-4 py-3 text-sm text-gray-700">Variable (estimado €298-980)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Partes SES automáticos</td>
                <td class="px-4 py-3 text-sm text-green-600"><IconoMarca tipo="si" /> Sí</td>
                <td class="px-4 py-3 text-sm text-green-600"><IconoMarca tipo="si" /> Sí</td>
              </tr>
              <tr class="bg-green-50">
                <td class="px-4 py-3 text-sm text-gray-700 font-medium">Encuesta INE</td>
                <td class="px-4 py-3 text-sm text-green-600 font-medium"><IconoMarca tipo="si" /> Rellena y lista (envío automático en hoteles y apartamentos)</td>
                <td class="px-4 py-3 text-sm text-orange-600"><IconoMarca tipo="no" /> Solo genera XML</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">App móvil</td>
                <td class="px-4 py-3 text-sm text-orange-600"><IconoMarca tipo="no" /> No disponible</td>
                <td class="px-4 py-3 text-sm text-green-600"><IconoMarca tipo="si" /> Sí</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Facilidad de uso</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca :estrellas="5" /> Muy intuitivo</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca :estrellas="3" /> Curva de aprendizaje</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Channel manager</td>
                <td class="px-4 py-3 text-sm text-green-600"><IconoMarca tipo="si" /> Incluido</td>
                <td class="px-4 py-3 text-sm text-green-600"><IconoMarca tipo="si" /> Incluido</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Diseño web</td>
                <td class="px-4 py-3 text-sm text-gray-500"><IconoMarca tipo="no" /> No ofrece</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> €150 - €1.200</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Servicios SEO</td>
                <td class="px-4 py-3 text-sm text-gray-500"><IconoMarca tipo="no" /> No ofrece</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> €220 - €800 + €90/mes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Por qué los clientes cambian de RuralGest a Hospedy</h2>
        <p>Basándonos en el feedback de usuarios que han hecho el cambio, estos son los tres motivos principales:</p>

        <h3>1. Encuesta INE sin rellenar nada</h3>
        <p>
          Con RuralGest, cada mes tienes que descargar un archivo XML y subirlo manualmente a la plataforma ARCE del INE. Con Hospedy, la encuesta de turismo rural sale rellena con tus datos, lista para presentar; y si tienes un hotel o apartamentos, la envías al INE con un clic. <strong>El ahorro de tiempo es significativo</strong>, especialmente si gestionas varios alojamientos.
        </p>

        <h3>2. Precio más accesible</h3>
        <p>
          Hospedy tiene precios públicos desde €350/año. RuralGest no publica sus tarifas y los costes adicionales pueden sumar: diseño web (€150-1.200), packs SEO (€220-800), mantenimiento SEO mensual (€90/mes). Al final, <strong>el coste total de RuralGest puede ser considerablemente mayor</strong>.
        </p>

        <h3>3. Más fácil e intuitivo</h3>
        <p>
          Hospedy tiene una interfaz moderna diseñada para ser usada sin formación previa. RuralGest, con 20 años de desarrollo, tiene más funcionalidades pero también una curva de aprendizaje más pronunciada.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-blue-800">Seamos honestos: ¿en qué gana RuralGest?</h3>
          <p class="text-blue-900 mb-4">No todo son ventajas para Hospedy. RuralGest tiene puntos fuertes importantes:</p>
          <ul class="space-y-2 text-blue-900">
            <li><strong>20+ años de experiencia:</strong> han visto y resuelto prácticamente cualquier problema que pueda surgir</li>
            <li><strong>App móvil nativa:</strong> puedes gestionar tu alojamiento desde el teléfono, algo que Hospedy no ofrece actualmente</li>
            <li><strong>Servicios integrados:</strong> si necesitas diseño web y posicionamiento SEO, RuralGest te lo ofrece todo en un mismo proveedor</li>
            <li><strong>Base de clientes consolidada:</strong> hay una gran comunidad de usuarios con experiencia</li>
          </ul>
        </div>

        <h2>¿Cuál elegir?</h2>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-green-800">Elige Hospedy si:</h3>
          <ul class="space-y-2 text-green-900">
            <li>Quieres la encuesta del INE rellena sin tocar nada</li>
            <li>Valoras los precios claros y transparentes</li>
            <li>Prefieres una interfaz moderna e intuitiva</li>
            <li>No necesitas app móvil para gestionar el alojamiento</li>
          </ul>
        </div>

        <div class="bg-gray-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Elige RuralGest si:</h3>
          <ul class="space-y-2 text-gray-700">
            <li>Necesitas app móvil para gestionar sobre la marcha</li>
            <li>Quieres servicios de diseño web y SEO del mismo proveedor</li>
            <li>Valoras la experiencia de 20+ años en el sector</li>
            <li>No te importa subir el XML del INE manualmente cada mes</li>
          </ul>
        </div>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Es difícil migrar de RuralGest a Hospedy?</h3>
        <p>
          No especialmente. Hospedy ofrece ayuda en la configuración inicial durante los 30 días de prueba gratis. Los datos de reservas futuras se pueden introducir fácilmente y las conexiones con OTAs se configuran en pocas horas.
        </p>

        <h3>¿Puedo probar Hospedy sin compromiso?</h3>
        <p>
          Sí, Hospedy ofrece 30 días de prueba gratis sin necesidad de tarjeta de crédito. Puedes probarlo en paralelo con tu sistema actual antes de decidir.
        </p>

        <h3>¿Hospedy tendrá app móvil en el futuro?</h3>
        <p>
          No podemos confirmar planes futuros de desarrollo, pero la interfaz web de Hospedy está optimizada para móvil y funciona bien desde el navegador del teléfono.
        </p>

        <h3>¿Qué pasa con mis datos si cambio de sistema?</h3>
        <p>
          Tus datos siempre son tuyos. Puedes exportar toda tu información (reservas, facturas, libro de viajeros) de cualquier sistema. Hospedy te ayuda con la migración durante el período de prueba.
        </p>
      </div>

      <!-- CTA -->
      <div class="max-w-3xl mx-auto px-6 mt-16">
        <div class="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">
            ¿Quieres probar Hospedy sin compromiso?
          </h2>
          <p class="text-gray-600 mb-6">
            Crea tu cuenta: 30 días de prueba gratis y sin tarjeta de crédito. Puedes probarlo en paralelo con tu sistema actual.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink class="btn btn-grad" to="/demo">Solicitar demo</NuxtLink>
            <NuxtLink class="btn btn-outline" to="/comparar">Ver comparativa completa</NuxtLink>
          </div>
        </div>
      </div>
    </article>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Hospedy vs RuralGest: Comparativa completa 2026",
  meta: [
    {
      name: "description",
      content: "Comparativa detallada entre Hospedy y RuralGest. Hospedy te deja la encuesta del INE rellena y tiene precios públicos. RuralGest ofrece app móvil y servicios de web/SEO.",
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
