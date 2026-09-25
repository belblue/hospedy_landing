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
          Los 5 mejores PMS para casas rurales en España [2026]
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Comparativa de los principales sistemas de gestión para casas rurales: funcionalidades, precios y automatización del cumplimiento normativo español.
        </p>
        <div
          class="flex items-center text-lg text-gray-500 border-b border-gray-200 pb-6"
        >
          <span>12 min lectura</span>
          <span class="mx-2">·</span>
          <span>Actualizado Febrero 2026</span>
        </div>
      </header>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          Los 5 mejores PMS para casas rurales en España son: Hospedy (desde €350/año, único con envío INE automático), RuralGest (veterano del sector, sin precios públicos), AvaiBook (desde €204/año pero con comisiones del 2-4%), Amenitiz (desde €504/año) y Cloudbeds (desde €1.200/año).
        </p>

        <h2>Comparativa rápida</h2>

        <div class="overflow-x-auto my-6 not-prose">
          <table class="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-3 py-3 text-left font-semibold text-gray-900">PMS</th>
                <th class="px-3 py-3 text-left font-semibold text-gray-900">Precio/año</th>
                <th class="px-3 py-3 text-center font-semibold text-gray-900">Partes</th>
                <th class="px-3 py-3 text-center font-semibold text-gray-900">INE</th>
                <th class="px-3 py-3 text-center font-semibold text-gray-900">CM</th>
                <th class="px-3 py-3 text-center font-semibold text-gray-900">Comisiones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="bg-green-50">
                <td class="px-3 py-3 font-medium text-gray-900">Hospedy</td>
                <td class="px-3 py-3 text-gray-700">€350-1.290</td>
                <td class="px-3 py-3 text-center text-green-600"><IconoMarca tipo="si" /> Auto</td>
                <td class="px-3 py-3 text-center text-green-600 font-medium"><IconoMarca tipo="si" /> Rellena y lista</td>
                <td class="px-3 py-3 text-center text-green-600"><IconoMarca tipo="si" /><span class="sr-only">Sí</span></td>
                <td class="px-3 py-3 text-center text-green-600">0%</td>
              </tr>
              <tr>
                <td class="px-3 py-3 font-medium text-gray-900">RuralGest</td>
                <td class="px-3 py-3 text-gray-700">No público</td>
                <td class="px-3 py-3 text-center text-green-600"><IconoMarca tipo="si" /> Auto</td>
                <td class="px-3 py-3 text-center text-orange-600"><IconoMarca tipo="no" /> XML</td>
                <td class="px-3 py-3 text-center text-green-600"><IconoMarca tipo="si" /><span class="sr-only">Sí</span></td>
                <td class="px-3 py-3 text-center text-gray-500">Variable</td>
              </tr>
              <tr>
                <td class="px-3 py-3 font-medium text-gray-900">AvaiBook</td>
                <td class="px-3 py-3 text-gray-700">€204-576+</td>
                <td class="px-3 py-3 text-center text-green-600"><IconoMarca tipo="si" /> Auto</td>
                <td class="px-3 py-3 text-center text-orange-600"><IconoMarca tipo="no" /> XML</td>
                <td class="px-3 py-3 text-center text-green-600"><IconoMarca tipo="si" /><span class="sr-only">Sí</span></td>
                <td class="px-3 py-3 text-center text-red-600">2-4%</td>
              </tr>
              <tr>
                <td class="px-3 py-3 font-medium text-gray-900">Amenitiz</td>
                <td class="px-3 py-3 text-gray-700">€504-1.500</td>
                <td class="px-3 py-3 text-center text-green-600"><IconoMarca tipo="si" /> Auto</td>
                <td class="px-3 py-3 text-center text-orange-600"><IconoMarca tipo="no" /> XML</td>
                <td class="px-3 py-3 text-center text-green-600"><IconoMarca tipo="si" /><span class="sr-only">Sí</span></td>
                <td class="px-3 py-3 text-center text-green-600">0%</td>
              </tr>
              <tr>
                <td class="px-3 py-3 font-medium text-gray-900">Cloudbeds</td>
                <td class="px-3 py-3 text-gray-700">€1.200+</td>
                <td class="px-3 py-3 text-center text-orange-600"><IconoMarca tipo="parcial" /> Parcial</td>
                <td class="px-3 py-3 text-center text-orange-600"><IconoMarca tipo="no" /> XML</td>
                <td class="px-3 py-3 text-center text-green-600"><IconoMarca tipo="si" /><span class="sr-only">Sí</span></td>
                <td class="px-3 py-3 text-center text-green-600">0%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>1. Hospedy</h2>
        <p><strong>Ideal para:</strong> casas rurales y hoteles pequeños que quieren automatización total</p>
        <p>
          Hospedy es un PMS español lanzado en 2020 y recientemente rebautizado. Su punto fuerte es la automatización del cumplimiento normativo español: envía los partes de viajeros a SES Hospedajes automáticamente y te deja la encuesta del INE rellena con tus datos: la de turismo rural, lista para presentar; en hoteles y apartamentos, <strong>enviada al INE con un clic</strong>.
        </p>

        <h3>Puntos fuertes</h3>
        <ul>
          <li>Único con envío INE automático completo</li>
          <li>Partes de viajeros automáticos a SES y Ertzaintza</li>
          <li>Precios públicos y transparentes</li>
          <li>Channel manager incluido en todos los planes</li>
          <li>0% comisiones en reservas directas</li>
        </ul>

        <h3>Puntos débiles</h3>
        <ul>
          <li>No tiene app móvil</li>
          <li>Empresa más joven que competidores veteranos</li>
        </ul>

        <p><strong>Precio:</strong> desde €350/año (plan Esencial) hasta €1.290/año (Enterprise)</p>

        <h2>2. RuralGest</h2>
        <p><strong>Ideal para:</strong> quienes valoran la experiencia y quieren servicios adicionales de web/SEO</p>
        <p>
          RuralGest es el veterano del sector con más de 20 años en el mercado español. Tiene una base de clientes consolidada y ofrece servicios adicionales como diseño web y posicionamiento SEO.
        </p>

        <h3>Puntos fuertes</h3>
        <ul>
          <li>20+ años de experiencia</li>
          <li>App móvil disponible</li>
          <li>Servicios adicionales de diseño web y SEO</li>
          <li>Amplia base de clientes</li>
        </ul>

        <h3>Puntos débiles</h3>
        <ul>
          <li>No publica precios (hay que pedir presupuesto)</li>
          <li>Solo genera XML para el INE (no envío automático)</li>
          <li>Costes adicionales: web €150-1.200, SEO €220-800, mantenimiento SEO €90/mes</li>
        </ul>

        <p><strong>Precio:</strong> no público, varía según negociación</p>

        <h2>3. AvaiBook (Idealista)</h2>
        <p><strong>Ideal para:</strong> quien busca el precio de entrada más bajo</p>
        <p>
          AvaiBook, parte del grupo Idealista, ofrece el precio de entrada más bajo del mercado. Sin embargo, su modelo incluye comisiones en algunos planes y tarifas por procesamiento de pagos.
        </p>

        <h3>Puntos fuertes</h3>
        <ul>
          <li>Precio inicial más bajo (desde €17/mes)</li>
          <li>Parte del ecosistema Idealista</li>
          <li>Fast Check-in para partes de viajeros</li>
        </ul>

        <h3>Puntos débiles</h3>
        <ul>
          <li>Comisiones del 2-4% en pasarela de pagos</li>
          <li>Solo genera XML para el INE</li>
          <li>El precio final puede ser mayor por comisiones</li>
        </ul>

        <p><strong>Precio:</strong> desde €204/año, pero con posibles comisiones adicionales</p>

        <h2>4. Amenitiz</h2>
        <p><strong>Ideal para:</strong> hoteles boutique que buscan diseño moderno</p>
        <p>
          Amenitiz es una plataforma internacional con presencia en España. Destaca por su interfaz moderna y su enfoque en hoteles boutique y alojamientos con encanto.
        </p>

        <h3>Puntos fuertes</h3>
        <ul>
          <li>Interfaz moderna y atractiva</li>
          <li>Buen posicionamiento para hoteles boutique</li>
          <li>Sin comisiones en reservas directas</li>
        </ul>

        <h3>Puntos débiles</h3>
        <ul>
          <li>Precio más elevado (desde €42/mes)</li>
          <li>Solo genera XML para el INE</li>
          <li>Soporte desde call center internacional</li>
        </ul>

        <p><strong>Precio:</strong> desde €504/año (plan básico) hasta €1.500/año</p>

        <h2>5. Cloudbeds</h2>
        <p><strong>Ideal para:</strong> hoteles medianos-grandes con operaciones internacionales</p>
        <p>
          Cloudbeds es una plataforma internacional potente, pero su adaptación al mercado español tiene limitaciones. El módulo Guest Experience puede tener problemas de compatibilidad con campos obligatorios españoles como el parentesco o el segundo apellido.
        </p>

        <h3>Puntos fuertes</h3>
        <ul>
          <li>Plataforma robusta y escalable</li>
          <li>Buena para operaciones internacionales</li>
          <li>Amplio ecosistema de integraciones</li>
        </ul>

        <h3>Puntos débiles</h3>
        <ul>
          <li>Problemas de compatibilidad con normativa española</li>
          <li>Precio elevado (desde €100/mes)</li>
          <li>Solo genera XML para el INE</li>
          <li>Campos como parentesco/segundo apellido requieren revisión manual</li>
        </ul>

        <p><strong>Precio:</strong> desde €1.200/año (contactar para presupuesto)</p>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-green-800">¿Cuál elegir?</h3>
          <ul class="space-y-2 text-green-900">
            <li><strong>Si quieres automatización total del INE →</strong> Hospedy (único que lo ofrece)</li>
            <li><strong>Si valoras la experiencia y quieres servicios de web →</strong> RuralGest</li>
            <li><strong>Si buscas el precio más bajo de entrada →</strong> AvaiBook</li>
            <li><strong>Si tienes un hotel boutique y valoras el diseño →</strong> Amenitiz</li>
            <li><strong>Si tienes un hotel mediano-grande internacional →</strong> Cloudbeds</li>
          </ul>
        </div>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Cuál tiene mejor soporte en español?</h3>
        <p>
          Hospedy y RuralGest son empresas españolas con soporte nativo. AvaiBook también tiene buen soporte en español al ser parte de Idealista. Amenitiz y Cloudbeds tienen soporte en español pero desde equipos internacionales.
        </p>

        <h3>¿Puedo cambiar de un PMS a otro fácilmente?</h3>
        <p>
          La migración entre sistemas suele requerir exportar datos y configurar de nuevo los canales. La mayoría ofrecen ayuda en la migración durante el período de prueba.
        </p>

        <h3>¿Qué significa "Rellena y lista", "INE FULL" e "INE XML"?</h3>
        <p>
          "Rellena y lista" significa que el sistema te deja la encuesta de turismo rural rellena con tus datos para que la presentes tú, como hace Hospedy. "INE FULL" significa que el sistema envía la encuesta directamente al INE con un clic (Hospedy lo hace con la de ocupación hotelera y la de apartamentos). "INE XML" significa que genera un archivo que tú debes descargar y subir manualmente a la plataforma ARCE del INE cada mes.
        </p>
      </div>

      <!-- CTA -->
      <div class="max-w-3xl mx-auto px-6 mt-16">
        <div class="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">
            ¿Quieres probar el único PMS con INE automático?
          </h2>
          <p class="text-gray-600 mb-6">
            Crea tu cuenta y prueba Hospedy gratis durante 30 días. Sin tarjeta de crédito, sin compromiso.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <PruebaHospedyButton class="btn btn-grad" />
            <NuxtLink class="btn btn-outline" to="/precios">Ver precios</NuxtLink>
          </div>
        </div>
      </div>
    </article>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Los 5 mejores PMS para casas rurales en España [2026]",
  meta: [
    {
      name: "description",
      content: "Comparativa de los mejores PMS para casas rurales: Hospedy (único con INE automático), RuralGest, AvaiBook, Amenitiz y Cloudbeds. Precios, funcionalidades y recomendaciones.",
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
