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
        <span class="block text-lg text-primary font-medium mb-2"
          >Normativa</span
        >
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Cómo enviar partes de viajeros a SES Hospedajes automáticamente
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Hospedy envía los partes de viajeros a SES Hospedajes automáticamente en solo 4 clics. El parte se transmite instantáneamente al Ministerio del Interior.
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
          Desde el 2 de diciembre de 2024, el Real Decreto 933/2021 obliga a todos los alojamientos turísticos en España a enviar los partes de viajeros a través de SES Hospedajes. Con Hospedy, el proceso se reduce a 4 clics: escanear el documento, asignar habitación, guardar y marcar check-in.
        </p>

        <h2>El problema: multas de hasta 30.000€</h2>
        <p>
          El plazo máximo para enviar el parte es de <strong>24 horas</strong> desde el check-in. Las sanciones por incumplimiento son severas:
        </p>
        <ul>
          <li><strong>Infracciones leves (€100 - €600):</strong> envío fuera de plazo, datos incompletos</li>
          <li><strong>Infracciones graves (€601 - €30.000):</strong> no enviar, no registrar, incumplimiento reiterado</li>
        </ul>
        <p>
          El proceso manual consume tiempo valioso: entrar en la web de SES, teclear todos los datos del huésped, revisar errores, enviar... Y repetir con cada huésped. En temporada alta, esto puede suponer horas de trabajo administrativo.
        </p>

        <h2>La solución: envío automático en 4 clics</h2>
        <p>Con Hospedy, el proceso completo se reduce a 4 acciones:</p>
        <ol>
          <li><strong>Escanear el documento</strong> del huésped (DNI, pasaporte, NIE o cualquier documento con zona MRZ)</li>
          <li><strong>Asignar la habitación</strong></li>
          <li><strong>Guardar los datos</strong></li>
          <li><strong>Marcar 'Check-in'</strong> en el calendario</li>
        </ol>
        <p>
          En el momento en que marcas el check-in, el parte se envía automáticamente a SES Hospedajes. No tienes que hacer nada más.
        </p>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-green-800">
            Dato importante
          </h3>
          <p class="text-green-900">
            Los documentos españoles (DNI y NIE) capturan la <strong>dirección del huésped automáticamente</strong>. Muchos sistemas del mercado no hacen esto.
          </p>
        </div>

        <h2>¿Y si hay un error?</h2>
        <p>
          Si SES Hospedajes devuelve un error, verás una <strong>alerta roja</strong> en el Planning o en la ficha del huésped. Además, recibirás un email directamente de SES con los detalles del problema.
        </p>
        <p>Los errores más comunes son:</p>
        <ul>
          <li>Credenciales de SES incorrectas (se configuran una sola vez en el perfil)</li>
          <li>Datos incompletos del huésped</li>
          <li>Problemas temporales en la plataforma de SES</li>
        </ul>

        <h2>Medida de seguridad: sin partes de no-shows</h2>
        <p>
          El parte solo se envía cuando marcas el check-in. Esta es una medida de seguridad importante: si un huésped no aparece (no-show), no marcas check-in y no se envía ningún parte. Así evitas problemas con registros de personas que nunca llegaron.
        </p>

        <h2>¿Y el País Vasco?</h2>
        <p>
          En País Vasco, los partes se envían a <strong>Ertzaintza</strong> en lugar de a SES Hospedajes. Con Hospedy, el proceso es exactamente el mismo: los 4 clics funcionan igual, solo cambia el destino del envío.
        </p>

        <div class="bg-primary/5 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4">
            ¿Alojamiento en el País Vasco?
          </h3>
          <p class="mb-4">
            Muchos PMS solo envían a SES Hospedajes y no cubren Ertzaintza. <strong>Hospedy envía automáticamente tanto a SES Hospedajes como a Ertzaintza</strong>.
          </p>
          <p>
            Si gestionas un hotel, casa rural o apartamento en Euskadi, con Hospedy cumples la normativa sin preocuparte de a qué sistema hay que enviar.
          </p>
        </div>

        <h2>Pre check-in: que el huésped haga el trabajo</h2>
        <p>
          Si quieres ahorrar aún más tiempo, puedes usar el <strong>pre check-in</strong>. Generas un enlace en Hospedy y se lo envías al huésped por email o WhatsApp. El huésped rellena sus datos y escanea o sube una foto de su documento desde su móvil.
        </p>
        <p>
          Cuando llega al alojamiento, tú solo tienes que hacer un clic en 'Check-in' y el parte se envía automáticamente.
        </p>
        <p>
          <strong>Para reservas de Booking.com:</strong> el email que genera Booking es suficiente para enviar el enlace de pre check-in.
        </p>

        <h2>Normativa: Real Decreto 933/2021</h2>
        <p>
          El Real Decreto 933/2021 estableció SES Hospedajes como la plataforma obligatoria para el registro de viajeros. Aunque se aprobó en octubre de 2021, su uso obligatorio definitivo entró en vigor el 2 de diciembre de 2024 tras varias prórrogas.
        </p>
        <p>La obligación afecta a todos los alojamientos turísticos:</p>
        <ul>
          <li>Hoteles de cualquier categoría</li>
          <li>Hostales y pensiones</li>
          <li>Casas rurales</li>
          <li>Apartamentos turísticos</li>
          <li>Viviendas de uso turístico (Airbnb, Booking, etc.)</li>
          <li>Campings</li>
          <li>Albergues</li>
        </ul>
        <p>
          También afecta a las agencias de viajes y plataformas de alquiler vacacional.
        </p>

        <h3>Plazos legales</h3>
        <p>El plazo máximo para enviar el parte es de <strong>24 horas</strong> desde el inicio del hospedaje.</p>
        <ul>
          <li>La comunicación debe ser inmediata o en las siguientes 24 horas</li>
          <li>Solo se registran huéspedes mayores de 14 años</li>
          <li>Los datos deben conservarse durante 3 años</li>
          <li>Las estancias superiores a 30 días (no turísticas) pueden estar exentas</li>
        </ul>

        <h3>Sistemas regionales</h3>
        <p>Aunque SES Hospedajes es la plataforma para la mayor parte de España, algunas comunidades mantienen sus propios sistemas:</p>

        <div class="overflow-x-auto my-6 not-prose">
          <table class="min-w-full border border-gray-200 rounded-lg">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Región</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Sistema</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Estado en Hospedy</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Resto de España</td>
                <td class="px-4 py-3 text-sm text-gray-700">SES Hospedajes</td>
                <td class="px-4 py-3 text-sm text-green-600 font-medium"><IconoMarca tipo="si" /> Automático</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">País Vasco</td>
                <td class="px-4 py-3 text-sm text-gray-700">Ertzaintza</td>
                <td class="px-4 py-3 text-sm text-green-600 font-medium"><IconoMarca tipo="si" /> Automático</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Catalunya</td>
                <td class="px-4 py-3 text-sm text-gray-700">Mossos d'Esquadra</td>
                <td class="px-4 py-3 text-sm text-green-600 font-medium"><IconoMarca tipo="si" /> Lo activamos contigo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Funciona con todos los tipos de documento?</h3>
        <p>
          Sí, con cualquier documento que tenga zona MRZ: DNI español, pasaportes de cualquier país, NIE, documentos de identidad europeos, carnets de conducir...
        </p>

        <h3>¿Cuánto tiempo ahorro respecto al proceso manual?</h3>
        <p>
          El proceso manual puede llevar 5-10 minutos por huésped entre entrar en SES, teclear datos y revisar. Con Hospedy son 4 clics en <strong>menos de 30 segundos</strong>.
        </p>

        <h3>¿Necesito configurar algo antes de empezar?</h3>
        <p>
          Solo una vez: introduces tus credenciales de SES Hospedajes en tu perfil de Hospedy. A partir de ahí, todo es automático.
        </p>

        <h3>¿Qué pasa si SES Hospedajes está caído?</h3>
        <p>
          Verás una alerta en el Planning y recibirás un email de SES cuando el servicio se restablezca. Hospedy reintentará el envío automáticamente.
        </p>

        <h3>¿Qué pasa si no envío los partes?</h3>
        <p>
          Las multas por no comunicar viajeros pueden ir de 100 a 30.000 euros dependiendo de la gravedad. Además, en caso de inspección, podrías tener problemas con tu licencia de actividad.
        </p>

        <h3>¿Tengo que guardar los datos de los viajeros?</h3>
        <p>
          Sí. Debes mantener un libro de viajeros con todos los registros durante al menos 3 años. Con Hospedy, este libro se genera automáticamente y puedes consultarlo o descargarlo cuando lo necesites.
        </p>
      </div>

      <!-- CTA -->
      <div class="max-w-3xl mx-auto px-6 mt-16">
        <div class="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">
            ¿Quieres automatizar tus partes de viajeros?
          </h2>
          <p class="text-gray-600 mb-6">
            Prueba Hospedy gratis durante 30 días y olvídate del papeleo.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink class="btn btn-grad" to="/demo">Solicitar demo</NuxtLink>
            <NuxtLink class="btn btn-outline" to="/funciones/partes-viajeros"
              >Saber más</NuxtLink
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
  title: "Cómo enviar partes de viajeros a SES Hospedajes automáticamente - Guía 2026",
  meta: [
    {
      name: "description",
      content: "Hospedy envía los partes de viajeros a SES Hospedajes automáticamente en 4 clics. Guía completa sobre el Real Decreto 933/2021, multas y cómo cumplir la normativa.",
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
