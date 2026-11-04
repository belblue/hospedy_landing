<template>
  <div>
    <article class="pt-24">
      <!-- Header -->
      <ArticuloCabecera :articulo="articulo">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Los 5 mejores PMS para casas rurales en España [2026]
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Comparativa de cinco programas de gestión para casas rurales: precio, partes de viajeros, encuesta del INE y lo
          que hace de verdad la inteligencia artificial de cada uno.
        </p>
        </ArticuloCabecera>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          Hospedy (desde {{ PLANES[0].mensual }}&nbsp;€ + IVA al mes, con Hugo, su asistente con IA, incluido), MisterPlan
          (antes RuralGest, desde 45&nbsp;€ + IVA al mes), AvaiBook (de idealista, pensado para el alquiler vacacional),
          Amenitiz (con su asistente Ami como módulo de pago) y Avirato (con IA para los huéspedes incluida). Los comparamos
          con la información que publica cada empresa, revisada el {{ revision }}.
        </p>

        <h2>Comparativa rápida</h2>

        <div class="overflow-x-auto my-6 not-prose">
          <table class="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-3 py-3 text-left font-semibold text-gray-900">PMS</th>
                <th class="px-3 py-3 text-left font-semibold text-gray-900">Precio</th>
                <th class="px-3 py-3 text-left font-semibold text-gray-900">Partes</th>
                <th class="px-3 py-3 text-left font-semibold text-gray-900">Encuesta del INE</th>
                <th class="px-3 py-3 text-left font-semibold text-gray-900">Asistente con IA</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="bg-green-50">
                <td class="px-3 py-3 font-medium text-gray-900">Hospedy</td>
                <td class="px-3 py-3 text-gray-700">Público: desde {{ PLANES[0].mensual }}&nbsp;€ + IVA al mes</td>
                <td class="px-3 py-3 text-gray-700"><IconoMarca tipo="si" /> Automáticos</td>
                <td class="px-3 py-3 text-gray-700"><IconoMarca tipo="si" /> La rural sale rellena; la hotelera y la de apartamentos se envían desde Hospedy</td>
                <td class="px-3 py-3 text-gray-700"><IconoMarca tipo="si" /> Hugo, incluido: responde con tus datos y prepara los cambios que tú confirmas</td>
              </tr>
              <tr>
                <td class="px-3 py-3 font-medium text-gray-900">MisterPlan (antes RuralGest)</td>
                <td class="px-3 py-3 text-gray-700">Público: desde 45&nbsp;€ + IVA al mes</td>
                <td class="px-3 py-3 text-gray-700"><IconoMarca tipo="si" /> Automáticos</td>
                <td class="px-3 py-3 text-gray-700">Anuncia el envío telemático</td>
                <td class="px-3 py-3 text-gray-700">No consta</td>
              </tr>
              <tr>
                <td class="px-3 py-3 font-medium text-gray-900">AvaiBook</td>
                <td class="px-3 py-3 text-gray-700">Según unidades</td>
                <td class="px-3 py-3 text-gray-700"><IconoMarca tipo="si" /> Manual, semiautomático o automático</td>
                <td class="px-3 py-3 text-gray-700">Sin comprobar</td>
                <td class="px-3 py-3 text-gray-700"><IconoMarca tipo="no" /> Solo un chat de soporte con IA</td>
              </tr>
              <tr>
                <td class="px-3 py-3 font-medium text-gray-900">Amenitiz</td>
                <td class="px-3 py-3 text-gray-700">Con presupuesto</td>
                <td class="px-3 py-3 text-gray-700"><IconoMarca tipo="si" /> Con Chekin, en su plan Core</td>
                <td class="px-3 py-3 text-gray-700">Sin comprobar</td>
                <td class="px-3 py-3 text-gray-700"><IconoMarca tipo="parcial" /> Ami, de pago aparte: redacta o envía las respuestas a los huéspedes</td>
              </tr>
              <tr>
                <td class="px-3 py-3 font-medium text-gray-900">Avirato</td>
                <td class="px-3 py-3 text-gray-700">Con presupuesto</td>
                <td class="px-3 py-3 text-gray-700">Sin comprobar</td>
                <td class="px-3 py-3 text-gray-700"><IconoMarca tipo="parcial" /> Semiautomática, con vista previa</td>
                <td class="px-3 py-3 text-gray-700"><IconoMarca tipo="parcial" /> Incluida: contesta a los huéspedes y responde preguntas, también por voz</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-gray-500 not-prose">
          Revisado el {{ revision }} con la información pública de cada empresa. Puede haber cambiado. «No consta» quiere
          decir que esa empresa no lo cuenta, y «Sin comprobar», que no hemos podido verlo. Más programas en la
          <NuxtLink to="/comparar" class="text-primary hover:underline">comparativa de PMS</NuxtLink>.
        </p>

        <h2>1. Hospedy</h2>
        <p><strong>Ideal para:</strong> casas rurales y alojamientos pequeños que quieren quitarse papeleo y trabajo de encima</p>
        <p>
          Hospedy es un programa de gestión hecho para alojamientos turísticos en España. Su punto fuerte es Hugo, un
          asistente con inteligencia artificial al que le pides las cosas como a una persona: «pon la casa a 150&nbsp;€ la
          noche del 1 al 7 de agosto», «¿qué tengo pendiente hoy?» o «el registro ha rechazado el parte de Luis Gómez,
          corrígelo y reenvíalo».
          Hugo mira tus datos, te prepara el cambio y <strong>no aplica nada hasta que tú lo confirmas</strong>. Y la
          normativa va sola: los partes de viajeros salen solos y la encuesta de turismo rural sale rellena con tus
          reservas.
        </p>

        <h3>Puntos fuertes</h3>
        <ul>
          <li>Hugo, incluido: cambia precios y cierres de muchos días en una frase, arregla reservas y partes, y te dice qué tienes pendiente</li>
          <li>Partes de viajeros automáticos a SES Hospedajes y a la Ertzaintza</li>
          <li>La encuesta del INE de turismo rural, rellena con tus reservas</li>
          <li>Precio público con todo dentro: channel manager, motor de reservas, Hugo y Zenfisk con Verifactu</li>
          <li>Sin instalar nada: se abre en el navegador de cualquier dispositivo, siempre al día, y se añade a la pantalla de inicio del móvil</li>
        </ul>

        <h3>Puntos débiles</h3>
        <ul>
          <li>Empresa más joven que los veteranos del sector</li>
          <li>Cada plan incluye de {{ MIN_OTAS }} a {{ MAX_OTAS }} agencias; cada agencia de más tiene una cuota aparte</li>
          <li>Hugo no contesta a los huéspedes: lo que te escriben lo respondes tú desde Mensajes</li>
          <li>No tiene precios dinámicos automáticos</li>
        </ul>

        <p><strong>Precio:</strong> desde {{ PLANES[0].anual }}&nbsp;€/año (plan {{ PLANES[0].nombre }}) hasta {{ miles(PLANES[PLANES.length - 1].anual) }}&nbsp;€/año ({{ PLANES[PLANES.length - 1].nombre }}), sin IVA</p>

        <h2>2. MisterPlan (antes RuralGest)</h2>
        <p><strong>Ideal para:</strong> quien quiere soporte por teléfono a cualquier hora y una empresa con muchos años en el sector</p>
        <p>
          RuralGest ahora se llama MisterPlan: es la misma empresa, de Cáceres, en el sector desde 2009, y dice trabajar con
          más de 5.000 establecimientos. Publica su precio, con el programa de gestión, el motor de reservas y el channel
          manager.
        </p>

        <h3>Puntos fuertes</h3>
        <ul>
          <li>Precio público con motor de reservas y channel manager, sin permanencia</li>
          <li>Configuración y formación incluidas</li>
          <li>Soporte por teléfono las 24 horas</li>
          <li>Ficha policial automática y pre check-in con escáner</li>
        </ul>

        <h3>Puntos débiles</h3>
        <ul>
          <li>No anuncia ningún asistente con IA</li>
          <li>Del INE anuncia el envío telemático, sin más detalle en su web</li>
        </ul>

        <p><strong>Precio:</strong> desde 45&nbsp;€ + IVA al mes</p>

        <h2>3. AvaiBook (idealista)</h2>
        <p><strong>Ideal para:</strong> el alquiler vacacional con pocas unidades</p>
        <p>
          AvaiBook es de idealista y está pensado sobre todo para el alquiler vacacional. Tiene tres planes, Standard (hasta
          5 unidades), Pro y Elite, con el precio según las unidades, y app para iOS y Android.
        </p>

        <h3>Puntos fuertes</h3>
        <ul>
          <li>Su Fast Check-in envía los partes a SES, Mossos y Ertzaintza, de forma manual, semiautomática o automática</li>
          <li>Precio publicado según tus unidades</li>
          <li>Verifactu en los planes superiores</li>
        </ul>

        <h3>Puntos débiles</h3>
        <ul>
          <li>No tiene asistente de gestión con IA: solo un agente de soporte en su centro de ayuda</li>
          <li>El lector de documentos va solo en Pro y Elite</li>
        </ul>

        <p><strong>Precio:</strong> según las unidades, en su web</p>

        <h2>4. Amenitiz</h2>
        <p><strong>Ideal para:</strong> quien quiere que una IA le redacte las respuestas a los huéspedes</p>
        <p>
          Amenitiz es una empresa de Barcelona, de 2017, con alojamientos en España, Francia, Italia y Portugal. Tiene dos
          planes, Core y Advanced, con presupuesto según las habitaciones, y vende aparte su asistente Ami, la web, su
          sistema de precios, el TPV y las cerraduras.
        </p>

        <h3>Puntos fuertes</h3>
        <ul>
          <li>Ami redacta o envía las respuestas a los huéspedes en WhatsApp, Booking y Airbnb: a mano, como borrador o en automático</li>
          <li>El check-in online con Chekin, que envía los partes a SES, va incluido en Core</li>
          <li>Soporte por teléfono en Core y un gestor de cuenta en Advanced</li>
          <li>Migración gratuita</li>
        </ul>

        <h3>Puntos débiles</h3>
        <ul>
          <li>Ya no publica precios</li>
          <li>Ami es un módulo de pago aparte</li>
          <li>No tiene asistente para gestionar el alojamiento: Ami solo habla con los huéspedes</li>
        </ul>

        <p><strong>Precio:</strong> con presupuesto</p>

        <h2>5. Avirato</h2>
        <p><strong>Ideal para:</strong> quien quiere una IA que atienda a sus huéspedes por muchos canales</p>
        <p>
          Avirato es español, dice trabajar con más de 24.300 hoteleros y conecta con más de 450 agencias. Su IA, Avirato
          Intelligence, va en todos los planes y se amplía con complementos de pago: atiende a los huéspedes, lleva el chat
          de la web, redacta textos y tiene un asistente para el hotelero que, por voz o por escrito, consulta la ocupación,
          las llegadas, las reservas, la disponibilidad y los precios.
        </p>

        <h3>Puntos fuertes</h3>
        <ul>
          <li>IA incluida que contesta a los huéspedes por WhatsApp, la web, Booking, Airbnb y el email</li>
          <li>Un asistente para el hotelero, por voz o por escrito, con permisos por rol</li>
          <li>Más de 450 agencias</li>
          <li>Envío de la encuesta del INE semiautomático, con vista previa</li>
        </ul>

        <h3>Puntos débiles</h3>
        <ul>
          <li>Precio con presupuesto: Premium, Advanced y Platinum</li>
          <li>No consta que su asistente haga cambios en la gestión: consulta los datos y prepara propuestas para el huésped</li>
          <li>Parte de la IA va en complementos de pago</li>
        </ul>

        <p><strong>Precio:</strong> con presupuesto; 20 días de prueba</p>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-green-800">¿Cuál elegir?</h3>
          <ul class="space-y-2 text-green-900">
            <li><strong>Si quieres que la IA te prepare el trabajo y la normativa resuelta, con precio publicado →</strong> Hospedy</li>
            <li><strong>Si quieres poder llamar por teléfono a cualquier hora →</strong> MisterPlan</li>
            <li><strong>Si te dedicas al alquiler vacacional y quieres una app de las tiendas →</strong> AvaiBook</li>
            <li><strong>Si quieres que una IA redacte las respuestas a tus huéspedes →</strong> Amenitiz</li>
            <li><strong>Si quieres que una IA atienda a tus huéspedes por muchos canales →</strong> Avirato</li>
          </ul>
        </div>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Qué hace la IA de cada uno?</h3>
        <p>
          No hacen lo mismo. Amenitiz y Avirato usan la IA sobre todo para contestar a los huéspedes. Avirato tiene además un
          asistente que responde preguntas sobre tus datos. Hugo, el de Hospedy, no habla con tus huéspedes: trabaja
          contigo, responde con tus datos y prepara los cambios (precios, reservas, partes, facturas) para que los confirmes.
          Lo tienes todo en la <NuxtLink to="/comparar">comparativa de PMS</NuxtLink>.
        </p>

        <h3>¿Puedo cambiar de un PMS a otro fácilmente?</h3>
        <p>
          La migración entre sistemas suele requerir exportar datos y configurar de nuevo los canales. La mayoría ofrecen ayuda en la migración durante el período de prueba.
        </p>

        <h3>¿Qué diferencia hay entre enviar la encuesta del INE y generar el fichero?</h3>
        <p>
          Enviarla quiere decir que el programa se la manda al INE y tú recibes el justificante, como hace Hospedy con la de
          ocupación hotelera y la de apartamentos. Generar el fichero quiere decir que te lo descargas y lo presentas tú en
          el portal del INE cada mes. La encuesta de turismo rural, en Hospedy, sale rellena con tus datos para que la
          presentes tú.
        </p>

        <h3>¿Tengo que instalar algo para usar Hospedy en el móvil?</h3>
        <p>
          No. Hospedy se abre en el navegador de cualquier dispositivo, siempre en su última versión, y lo puedes añadir a
          la pantalla de inicio para entrar con un toque. Y a Hugo le puedes hablar en vez de escribir.
        </p>
      </div>

    </article>
    <!-- La función de la que habla, más guías y la banda de cierre -->
    <ArticuloPie
      :articulo="articulo"
      titulo="¿Quieres probar Hospedy en tu casa rural?"
      texto="Pide una demo y te enseñamos Hospedy con tu casa rural. Después, 30 días gratis, sin tarjeta y sin compromiso."
    />
  </div>
</template>

<script setup lang="ts">
import { REVISION_COMPARATIVA } from '~/utils/comparativa'
import { fechaLarga } from '~/utils/fechas'
import { PLANES } from '~/utils/precios'

const articulo = useArticulo('mejores-pms-casas-rurales')
const revision = fechaLarga(REVISION_COMPARATIVA)
const MIN_OTAS = Math.min(...PLANES.map(plan => plan.otasIncluidas))
const MAX_OTAS = Math.max(...PLANES.map(plan => plan.otasIncluidas))

// 1290 → «1.290», como el resto de la web
function miles(numero: number) {
  return String(numero).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
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
