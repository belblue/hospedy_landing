<template>
  <div>
    <article class="pt-24">
      <!-- Header -->
      <ArticuloCabecera :articulo="articulo">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {{ articulo.titulo }}
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          RuralGest ahora se llama MisterPlan. Comparamos lo que hace cada uno, cuánto cuesta y para quién encaja mejor,
          con la información pública de los dos a {{ revision }}.
        </p>
        </ArticuloCabecera>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          La diferencia que más pesa en 2026: Hospedy incluye a Hugo, un asistente con inteligencia artificial que te
          prepara el trabajo (cambiar precios, mover una reserva, corregir y reenviar un parte rechazado) para que tú lo
          confirmes, y MisterPlan no anuncia ninguna IA. Los dos publican sus precios, incluyen channel manager y envían los
          partes de viajeros solos.
        </p>

        <h2>RuralGest y MisterPlan son la misma empresa</h2>
        <p>
          Es una empresa de Cáceres que está en el sector desde 2009 y dice trabajar con más de 5.000 establecimientos. Su
          producto se llama ahora MisterPlan, y la web de RuralGest ya solo enseña el contacto de MisterPlan. Si buscas
          RuralGest, lo que vas a contratar es MisterPlan.
        </p>

        <h2>Comparativa directa</h2>

        <div class="overflow-x-auto my-6 not-prose">
          <table class="min-w-full border border-gray-200 rounded-lg">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Característica</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Hospedy</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">MisterPlan (antes RuralGest)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Precio</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> Público: desde {{ PLANES[0].mensual }}&nbsp;€ + IVA al mes</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> Público: desde 45&nbsp;€ + IVA al mes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Qué incluye</td>
                <td class="px-4 py-3 text-sm text-gray-700">Todas las funciones en todos los planes: channel manager, motor de reservas, Hugo y Zenfisk con Verifactu</td>
                <td class="px-4 py-3 text-sm text-gray-700">Programa de gestión, motor de reservas y channel manager, con la configuración y la formación</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Permanencia</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> Sin permanencia</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> Sin permanencia</td>
              </tr>
              <tr class="bg-green-50">
                <td class="px-4 py-3 text-sm text-gray-700 font-medium">Asistente con IA</td>
                <td class="px-4 py-3 text-sm text-gray-700 font-medium"><IconoMarca tipo="si" /> Hugo, incluido: responde con tus datos y prepara los cambios para que los confirmes</td>
                <td class="px-4 py-3 text-sm text-gray-700">No consta</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Partes de viajeros</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> Automáticos, a SES Hospedajes y a la Ertzaintza</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> Automáticos</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Encuesta del INE</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> Se envía desde Hospedy, con el justificante del INE, en hoteles y apartamentos; la de turismo rural sale rellena</td>
                <td class="px-4 py-3 text-sm text-gray-700">Anuncia el envío telemático automático</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Check-in</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> Escáner de documentos y auto check-in desde el móvil del huésped</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> Pre check-in con escáner</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-gray-700">Soporte</td>
                <td class="px-4 py-3 text-sm text-gray-700">En español</td>
                <td class="px-4 py-3 text-sm text-gray-700"><IconoMarca tipo="si" /> Por teléfono, las 24 horas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-gray-500 not-prose">
          Datos de MisterPlan tomados de su web el {{ revision }}. Pueden haber cambiado. «No consta» quiere decir que su
          web no lo cuenta.
        </p>

        <h2>Por qué elegir Hospedy si vienes de RuralGest</h2>

        <h3>1. Hugo te prepara el trabajo</h3>
        <p>
          Le pides las cosas como a una persona, escribiendo o con la voz: «baja la Doble a 90&nbsp;€ del 1 al 7 de julio»,
          «pasa la reserva de los Wilson a la 102» o «el registro ha rechazado el parte de Luis Gómez, corrige su fecha de
          nacimiento y reenvíalo». Hugo mira tus datos, te enseña lo que va a hacer y <strong>no cambia nada hasta que
          pulsas «Sí, aplicar»</strong>. También te dice qué tienes pendiente: reservas sin habitación, partes rechazados,
          cobros de las salidas o mensajes sin contestar.
        </p>

        <h3>2. Todo incluido desde {{ PLANES[0].mensual }}&nbsp;€ al mes</h3>
        <p>
          En Hospedy todas las funciones están en todos los planes: el channel manager, el motor de reservas, Hugo y
          Zenfisk, el programa de facturación con Verifactu. Pagas según el tamaño de tu alojamiento, con los precios
          publicados en la web.
        </p>

        <h3>3. La encuesta del INE, enviada desde el programa</h3>
        <p>
          Si tienes un hotel o apartamentos turísticos, Hospedy envía la encuesta de ocupación al INE con un clic y te llega
          por email el justificante del INE en PDF. Si tienes una casa rural, la encuesta de turismo rural sale rellena con
          tus reservas, lista para presentar.
        </p>

        <h3>4. Sin instalar nada</h3>
        <p>
          Hospedy se abre en el navegador de cualquier dispositivo: el ordenador de recepción, la tablet o tu móvil. Siempre
          está en su última versión y lo puedes añadir a la pantalla de inicio para entrar con un toque.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-blue-800">Seamos honestos: ¿en qué gana MisterPlan?</h3>
          <p class="text-blue-900 mb-4">No todo son ventajas para Hospedy. MisterPlan tiene puntos fuertes:</p>
          <ul class="space-y-2 text-blue-900">
            <li><strong>Soporte por teléfono las 24 horas:</strong> si quieres llamar a cualquier hora, ellos lo ofrecen</li>
            <li><strong>Muchos años de oficio:</strong> están en el sector desde 2009 y dicen trabajar con más de 5.000 establecimientos</li>
            <li><strong>Configuración y formación incluidas</strong> en el precio</li>
          </ul>
        </div>

        <h2>¿Cuál elegir?</h2>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-green-800">Elige Hospedy si:</h3>
          <ul class="space-y-2 text-green-900">
            <li>Quieres un asistente con IA que te prepare el trabajo y te diga qué tienes pendiente</li>
            <li>Quieres la encuesta del INE enviada desde el programa, con su justificante</li>
            <li>Quieres la facturación con Verifactu incluida en la suscripción</li>
            <li>Quieres usarlo desde cualquier dispositivo sin instalar nada</li>
          </ul>
        </div>

        <div class="bg-gray-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Elige MisterPlan si:</h3>
          <ul class="space-y-2 text-gray-700">
            <li>Necesitas poder llamar por teléfono a cualquier hora</li>
            <li>Valoras una empresa con muchos años en el sector</li>
            <li>No necesitas un asistente con IA</li>
          </ul>
        </div>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Es difícil migrar de RuralGest a Hospedy?</h3>
        <p>
          No especialmente. Hospedy ofrece ayuda en la configuración inicial durante los 30 días de prueba gratis. Los datos de reservas futuras se pueden introducir fácilmente y las conexiones con las agencias las configura nuestro equipo contigo.
        </p>

        <h3>¿Puedo probar Hospedy sin compromiso?</h3>
        <p>
          Sí, Hospedy ofrece 30 días de prueba gratis sin necesidad de tarjeta de crédito. Puedes probarlo en paralelo con tu sistema actual antes de decidir.
        </p>

        <h3>¿Puedo usar Hospedy desde el móvil?</h3>
        <p>
          Sí. Hospedy funciona en el navegador del teléfono, sin instalar nada, y se puede añadir a la pantalla de inicio
          para entrar con un toque. Y a Hugo le puedes hablar en vez de escribir.
        </p>

        <h3>¿Qué pasa con mis datos si cambio de sistema?</h3>
        <p>
          Tus datos siempre son tuyos. En Hospedy descargas cuando quieras el listado de huéspedes (PDF o CSV), el libro de viajeros, tus facturas (una a una o en Excel), las encuestas del INE y los documentos de admisión. Y te ayudamos con la migración durante el período de prueba.
        </p>
      </div>

    </article>
    <!-- La función de la que habla, más guías y la banda de cierre -->
    <ArticuloPie
      :articulo="articulo"
      titulo="¿Quieres probar Hospedy sin compromiso?"
      texto="Pide una demo. Después tienes 30 días de prueba gratis, sin tarjeta de crédito, para probarlo en paralelo con tu sistema actual."
    />
  </div>
</template>

<script setup lang="ts">
import { REVISION_COMPARATIVA } from '~/utils/comparativa'
import { fechaLarga } from '~/utils/fechas'
import { PLANES } from '~/utils/precios'

const articulo = useArticulo('hospedy-vs-ruralgest')
const revision = fechaLarga(REVISION_COMPARATIVA)
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
