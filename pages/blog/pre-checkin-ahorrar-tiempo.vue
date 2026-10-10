<template>
  <div>
    <article class="pt-24">
      <!-- Header -->
      <ArticuloCabecera :articulo="articulo">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Pre check-in: Cómo ahorrar tiempo en la recepción
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          El pre check-in de Hospedy permite que los huéspedes completen su registro antes de llegar. Al llegar, el propietario solo hace un clic y el parte de viajeros se envía automáticamente.
        </p>
        </ArticuloCabecera>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          Los huéspedes pueden escanear o subir una foto de su documento (DNI, pasaporte, NIE) desde su móvil antes de llegar. En recepción ya no tienes que teclear nada: solo comprobar los datos y entregar la llave.
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
          <li>Fecha de caducidad y, con DNI o NIE, número de soporte</li>
          <li>Dirección, teléfono y correo electrónico</li>
        </ul>
        <p>
          Toda esta información se necesita para el parte de viajeros, así que el pre check-in <strong>mata dos pájaros de un tiro</strong>: ahorra tiempo y cumple la normativa.
        </p>

        <h2>¿Cómo funciona en Hospedy?</h2>
        <ol>
          <li>Generas un enlace de pre check-in en la web de Hospedy</li>
          <li>Envías el enlace al huésped (hay un botón para email, o puedes copiar el enlace para WhatsApp)</li>
          <li>El huésped abre el enlace en su móvil</li>
          <li>Rellena los datos de cada ocupante, también de los menores (con su adulto responsable)</li>
          <li>Escanea o sube una foto de cada documento</li>
          <li>Envía el formulario</li>
          <li>Cuando llega al alojamiento, tú marcas 'Check-in' con un clic</li>
          <li>El parte de viajeros se envía automáticamente a SES Hospedajes</li>
        </ol>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-green-800">Dato importante para reservas de Booking.com</h3>
          <p class="text-green-900">
            Puedes enviar el enlace al email que da Booking, sin pedir el personal. Si en su extranet tienes activada la seguridad de mensajes, autoriza allí la dirección de Hospedy y el enlace del pre check-in.
          </p>
        </div>

        <h2>¿Los huéspedes pueden escanear su propio documento?</h2>
        <p>Sí. Los huéspedes tienen dos opciones:</p>
        <ul>
          <li><strong>Usar la cámara del móvil</strong> para escanear el documento en el momento</li>
          <li><strong>Subir una foto del documento</strong> desde su galería (si ya la tienen)</li>
        </ul>
        <p>
          El sistema lee la zona MRZ del documento y rellena sus datos (y el domicilio, si es un DNI español). El huésped los revisa, completa lo que falte y firma.
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
          <p class="mt-4 font-semibold text-green-900">Sin teclear nada</p>
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
          Sí: con un solo enlace, el huésped rellena los datos de cada ocupante de la reserva, también los de los menores.
        </p>

        <h3>¿Los datos se guardan de forma segura?</h3>
        <p>
          Sí, todos los datos se transmiten cifrados y se almacenan cumpliendo la normativa de protección de datos (RGPD).
        </p>

        <h3>¿Qué tipos de documento acepta?</h3>
        <p>
          El DNI, el NIE, los pasaportes y los documentos de identidad europeos, por su zona MRZ, y el QR de MiDNI. Si alguno no se lee, se escriben los datos a mano.
        </p>
      </div>

    </article>
    <!-- La función de la que habla, más guías y la banda de cierre -->
    <ArticuloPie
      :articulo="articulo"
      titulo="¿Quieres ahorrar tiempo con el pre check-in?"
      texto="El pre check-in está incluido en todos los planes de Hospedy. Crea tu cuenta y pruébalo gratis durante 30 días."
    />
  </div>
</template>

<script setup lang="ts">
const articulo = useArticulo('pre-checkin-ahorrar-tiempo')
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
