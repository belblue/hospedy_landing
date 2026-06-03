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
          Pre check-in: Cómo ahorrar tiempo en la recepción
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          El pre check-in de Hospedy permite que los huéspedes completen su registro antes de llegar. Al llegar, el propietario solo hace un clic y el parte de viajeros se envía automáticamente.
        </p>
        <div
          class="flex items-center text-lg text-gray-500 border-b border-gray-200 pb-6"
        >
          <span>6 min lectura</span>
          <span class="mx-2">·</span>
          <span>Actualizado Febrero 2026</span>
        </div>
      </header>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          Los huéspedes pueden escanear o subir una foto de su documento (DNI, pasaporte, NIE) desde su móvil antes de llegar. El ahorro de tiempo es prácticamente total: de 5-10 minutos por reserva a menos de 30 segundos.
        </p>

        <h2>¿Qué es el pre check-in?</h2>
        <p>
          El pre check-in es un sistema que permite a los huéspedes completar su registro <strong>antes de llegar</strong> al alojamiento. En lugar de hacer todo el papeleo en recepción, el huésped rellena sus datos desde casa, el trabajo o incluso desde el taxi camino al hotel.
        </p>
        <p>
          El resultado: cuando llega, tú solo verificas que es quien dice ser y haces clic en un botón. Sin esperas, sin colas, sin teclear datos.
        </p>

        <h2>¿Qué información recoge?</h2>
        <p>El pre check-in de Hospedy recoge exactamente la misma información que el escaneo de documento en recepción:</p>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Fecha de nacimiento</li>
          <li>Nacionalidad</li>
          <li>Número de documento</li>
          <li>Tipo de documento</li>
          <li>Fecha de expedición y caducidad</li>
          <li>Dirección (para documentos españoles)</li>
        </ul>
        <p>
          Toda esta información se necesita para el parte de viajeros, así que el pre check-in <strong>mata dos pájaros de un tiro</strong>: ahorra tiempo y cumple la normativa.
        </p>

        <h2>¿Cómo funciona en Hospedy?</h2>
        <ol>
          <li>Generas un enlace de pre check-in en la web de Hospedy</li>
          <li>Envías el enlace al huésped (hay un botón para email, o puedes copiar el enlace para WhatsApp)</li>
          <li>El huésped abre el enlace en su móvil</li>
          <li>Rellena los datos de todos los huéspedes mayores de 14 años</li>
          <li>Escanea o sube una foto de cada documento</li>
          <li>Envía el formulario</li>
          <li>Cuando llega al alojamiento, tú marcas 'Check-in' con un clic</li>
          <li>El parte de viajeros se envía automáticamente a SES Hospedajes</li>
        </ol>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-green-800">Dato importante para reservas de Booking.com</h3>
          <p class="text-green-900">
            El email que genera Booking automáticamente es suficiente para enviar el enlace de pre check-in. No necesitas pedir el email personal del huésped.
          </p>
        </div>

        <h2>¿Los huéspedes pueden escanear su propio documento?</h2>
        <p>Sí. Los huéspedes tienen dos opciones:</p>
        <ul>
          <li><strong>Usar la cámara del móvil</strong> para escanear el documento en el momento</li>
          <li><strong>Subir una foto del documento</strong> desde su galería (si ya la tienen)</li>
        </ul>
        <p>
          El sistema lee automáticamente la zona MRZ del documento y extrae todos los datos. El huésped solo tiene que verificar que está todo correcto.
        </p>

        <h2>¿Cuánto tiempo ahorro?</h2>
        <p>El ahorro es enorme. Compara estos dos escenarios:</p>

        <div class="bg-red-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-red-800">Sin pre check-in (proceso tradicional)</h3>
          <ol class="list-decimal pl-5 space-y-1 text-red-900">
            <li>Recibir al huésped</li>
            <li>Pedir documentos de todos los ocupantes</li>
            <li>Escanear o fotocopiar cada documento</li>
            <li>Teclear datos en el sistema</li>
            <li>Verificar que todo está correcto</li>
            <li>Entregar llaves</li>
          </ol>
          <p class="mt-4 font-semibold text-red-900">Tiempo estimado: 5-10 minutos por reserva</p>
        </div>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-green-800">Con pre check-in</h3>
          <ol class="list-decimal pl-5 space-y-1 text-green-900">
            <li>Recibir al huésped</li>
            <li>Verificar identidad (opcional)</li>
            <li>Hacer clic en 'Check-in'</li>
            <li>Entregar llaves</li>
          </ol>
          <p class="mt-4 font-semibold text-green-900">Tiempo estimado: 30 segundos</p>
        </div>

        <h2>¿Y si el huésped no completa el pre check-in?</h2>
        <p>
          No pasa nada. Siempre puedes hacer el registro tradicional en recepción. El pre check-in es una <strong>opción para ahorrar tiempo</strong>, no una obligación.
        </p>
        <p>
          Algunos propietarios envían el enlace con antelación y un recordatorio el día antes. Otros solo lo usan para huéspedes que llegan a horas complicadas. Tú decides cómo integrarlo en tu operativa.
        </p>

        <h2>Preguntas frecuentes</h2>

        <h3>¿El huésped necesita descargar alguna app?</h3>
        <p>
          No, el pre check-in funciona directamente en el navegador del móvil. Solo necesita abrir el enlace que le envías.
        </p>

        <h3>¿Puedo personalizar el formulario de pre check-in?</h3>
        <p>
          El formulario recoge los datos necesarios para el parte de viajeros. Los campos están predefinidos para cumplir la normativa.
        </p>

        <h3>¿Funciona para grupos grandes?</h3>
        <p>
          Sí, el huésped puede añadir los datos de todos los ocupantes mayores de 14 años en el mismo formulario.
        </p>

        <h3>¿Los datos se guardan de forma segura?</h3>
        <p>
          Sí, todos los datos se transmiten cifrados y se almacenan cumpliendo la normativa de protección de datos (RGPD).
        </p>

        <h3>¿Qué tipos de documento acepta?</h3>
        <p>
          Cualquier documento con zona MRZ: DNI español, pasaportes de cualquier país, NIE, documentos de identidad europeos, carnets de conducir...
        </p>
      </div>

      <!-- CTA -->
      <div class="max-w-3xl mx-auto px-6 mt-16">
        <div class="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">
            ¿Quieres ahorrar tiempo con el pre check-in?
          </h2>
          <p class="text-gray-600 mb-6">
            El pre check-in está incluido en todos los planes de Hospedy. Pruébalo gratis durante 30 días.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink class="btn btn-grad" to="/demo">Solicitar demo</NuxtLink>
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
  title: "Pre check-in: Cómo ahorrar tiempo en la recepción",
  meta: [
    {
      name: "description",
      content: "El pre check-in de Hospedy permite que los huéspedes completen su registro antes de llegar. Ahorra de 5-10 minutos a 30 segundos por reserva.",
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
