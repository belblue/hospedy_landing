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
          La diferencia que más pesa: Hospedy incluye a Hugo, un asistente con inteligencia artificial que te prepara el
          trabajo para que tú lo confirmes, y MisterPlan no anuncia ninguna IA. Además, Hospedy empieza en
          {{ PLANES[0].mensual }}&nbsp;€ al mes sin IVA y MisterPlan, en 45&nbsp;€. Los dos incluyen channel manager, envían
          los partes solos y no tienen permanencia.
        </p>

        <h2>RuralGest y MisterPlan son la misma empresa</h2>
        <p>
          Es una empresa de Cáceres, en el sector desde 2009. Su producto se llama ahora MisterPlan y la web de RuralGest ya
          solo enseña su contacto: si buscas RuralGest, lo que vas a contratar es MisterPlan.
        </p>

        <h2>Comparativa directa</h2>

        <!-- En el móvil cada fila se lee como una ficha, con el rótulo de cada celda (data-nosnippet: en el Markdown ya lo
             dice la cabecera), sin scroll lateral -->
        <div class="my-6 not-prose rounded-lg border border-gray-200 overflow-hidden">
          <table class="w-full text-left text-sm">
            <thead class="hidden md:table-header-group bg-gray-50">
              <tr>
                <th scope="col" class="px-4 py-3 font-semibold text-gray-900">Característica</th>
                <th scope="col" class="px-4 py-3 font-semibold text-gray-900">Hospedy</th>
                <th scope="col" class="px-4 py-3 font-semibold text-gray-900">MisterPlan (antes RuralGest)</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="fila in FILAS"
                :key="fila.nombre"
                class="block md:table-row border-t border-gray-200 first:border-t-0 md:first:border-t px-4 py-3 md:p-0"
                :class="{ 'bg-green-50': fila.destacada }"
              >
                <th scope="row" class="block md:table-cell md:px-4 md:py-3 align-top font-semibold md:font-normal text-gray-900 md:text-gray-700">{{ fila.nombre }}</th>
                <td class="block md:table-cell md:px-4 md:py-3 align-top mt-1 md:mt-0 text-gray-700">
                  <span class="md:hidden font-semibold text-gray-900" data-nosnippet>Hospedy: </span>
                  <IconoMarca v-if="fila.hospedy.marca" :tipo="fila.hospedy.marca" class="mr-1" />{{ fila.hospedy.texto }}
                </td>
                <td class="block md:table-cell md:px-4 md:py-3 align-top mt-1 md:mt-0 text-gray-700">
                  <span class="md:hidden font-semibold text-gray-900" data-nosnippet>MisterPlan: </span>
                  <IconoMarca v-if="fila.otro.marca" :tipo="fila.otro.marca" class="mr-1" />{{ fila.otro.texto }}
                </td>
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
          «pasa la reserva de los Wilson a la 102» o «el registro ha rechazado el parte de Luis Gómez, su segundo apellido
          es Martín: corrígelo y reenvíalo». Hugo mira tus datos, te enseña lo que va a hacer y <strong>no cambia nada hasta que
          pulsas «Sí, aplicar»</strong>. También te dice qué tienes pendiente: reservas sin habitación, partes rechazados,
          cobros de las salidas o mensajes sin contestar.
        </p>

        <h3>2. Todo incluido desde {{ PLANES[0].mensual }}&nbsp;€ al mes</h3>
        <p>
          En Hospedy todas las funciones están en todos los planes: el channel manager, el motor de reservas, Hugo y
          Zenfisk, el programa de facturación con Verifactu. Pagas según el tamaño de tu alojamiento, con los precios
          publicados en la web.
        </p>

        <h3>3. Te ayudamos a empezar</h3>
        <p>
          Hugo te deja el panel listo con una conversación sobre tu alojamiento, y nuestro equipo configura contigo las
          agencias. Para cualquier duda tienes el manual y a Hugo a cualquier hora, y a nuestro equipo por email y
          videollamada.
        </p>

        <h2>¿Cuál elegir?</h2>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-green-800">Elige Hospedy si:</h3>
          <ul class="space-y-2 text-green-900">
            <li>Quieres un asistente con IA que te prepare el trabajo y te diga qué tienes pendiente</li>
            <li>Quieres empezar desde {{ PLANES[0].mensual }}&nbsp;€ al mes, con todas las funciones incluidas</li>
            <li>Quieres Zenfisk incluido, para facturar con Verifactu</li>
            <li>Quieres que Hugo te ayude a empezar y te resuelva las dudas</li>
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
          No. Hugo te deja el panel listo con una conversación, las reservas futuras se las puedes pedir a él, y nuestro
          equipo configura contigo las conexiones con las agencias.
        </p>

        <h3>¿Puedo probar Hospedy sin compromiso?</h3>
        <p>
          Sí. Pide una demo y después tienes 30 días de prueba gratis, sin tarjeta, para probarlo en paralelo con tu sistema
          actual.
        </p>

        <h3>¿Puedo usar Hospedy desde el móvil?</h3>
        <p>
          Sí. Hospedy funciona en el navegador del teléfono, sin instalar nada, y se puede añadir a la pantalla de inicio
          para entrar con un toque. Y a Hugo le puedes hablar en vez de escribir.
        </p>

        <h3>¿Qué pasa con mis datos si cambio de sistema?</h3>
        <p>
          Son tuyos: descargas cuando quieras el listado de huéspedes, el libro de viajeros, tus facturas, las encuestas del
          INE y los documentos de admisión, y te ayudamos con la migración.
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
import type { CeldaComparativa } from '~/utils/comparativa'
import { fechaLarga } from '~/utils/fechas'
import { PLANES } from '~/utils/precios'

const articulo = useArticulo('hospedy-vs-ruralgest')
const revision = fechaLarga(REVISION_COMPARATIVA)

// Los datos de MisterPlan, de su web en la fecha de REVISION_COMPARATIVA
const FILAS: { nombre: string, destacada?: boolean, hospedy: CeldaComparativa, otro: CeldaComparativa }[] = [
  { nombre: 'Asistente con IA', destacada: true, hospedy: { marca: 'si', texto: 'Hugo, incluido: responde con tus datos y prepara los cambios para que los confirmes' }, otro: { texto: 'No consta' } },
  { nombre: 'Precio', hospedy: { marca: 'si', texto: `Público: desde ${PLANES[0].mensual}\u00a0€ + IVA al mes` }, otro: { marca: 'si', texto: 'Público: desde 45\u00a0€ + IVA al mes' } },
  { nombre: 'Qué incluye', hospedy: { texto: 'Todas las funciones: channel manager, motor de reservas, Hugo, Zenfisk con Verifactu y ayuda para empezar' }, otro: { texto: 'Programa de gestión, motor de reservas y channel manager, con la configuración y la formación' } },
  { nombre: 'Permanencia', hospedy: { marca: 'si', texto: 'Sin permanencia' }, otro: { marca: 'si', texto: 'Sin permanencia' } },
  { nombre: 'Partes de viajeros', hospedy: { marca: 'si', texto: 'Automáticos, a SES Hospedajes y a la Ertzaintza' }, otro: { marca: 'si', texto: 'Automáticos' } },
  { nombre: 'Encuesta del INE', hospedy: { marca: 'si', texto: 'Hoteles y apartamentos: se envía con un clic, con justificante. Turismo rural: sale rellena' }, otro: { texto: 'Anuncia el envío telemático automático' } },
  { nombre: 'Check-in', hospedy: { marca: 'si', texto: 'Escáner de documentos y auto check-in desde el móvil del huésped' }, otro: { marca: 'si', texto: 'Pre check-in con escáner' } },
  { nombre: 'Soporte', hospedy: { marca: 'si', texto: 'Email y videollamada; Hugo, a cualquier hora' }, otro: { marca: 'si', texto: 'Por teléfono, las 24 horas' } },
]
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
