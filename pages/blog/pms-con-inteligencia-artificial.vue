<template>
  <div>
    <article class="pt-24">
      <!-- Header -->
      <ArticuloCabecera :articulo="articulo">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {{ articulo.titulo }}
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Cada vez más programas de gestión dicen tener IA, pero no hacen lo mismo. Te explicamos los tres tipos que hay y
          qué hace la de cada uno.
        </p>
        </ArticuloCabecera>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          La IA de un PMS puede hacer tres cosas muy distintas: contestar a tus huéspedes, responder a tus preguntas sobre
          tus datos o hacer el trabajo contigo, preparando los cambios para que tú los confirmes. La primera te ahorra
          mensajes; la segunda, búsquedas; la tercera es la que más tiempo te ahorra.
        </p>

        <h2>Los tres tipos de IA que vas a encontrar</h2>

        <h3>1. La que contesta a tus huéspedes</h3>
        <p>
          Lee los mensajes que te llegan por WhatsApp, Booking, Airbnb o el email y los contesta con la información de tu
          alojamiento: a qué hora es la entrada, si hay parking o cómo llegar. Según el programa, la respuesta sale sola o
          te la deja como borrador para que la revises. Es la más extendida: la tienen Avirato, Cloudbeds, Mews y Amenitiz,
          en este último caso como un módulo de pago aparte.
        </p>
        <p>
          Te ahorra escribir. En Hospedy, el trato con tus huéspedes lo llevas tú, y es a propósito: en un alojamiento
          pequeño es personal. Hugo, el asistente de Hospedy, te prepara los emails automáticos y te dice qué mensajes
          tienes sin contestar, pero la respuesta es tuya.
        </p>

        <h3>2. La que responde preguntas sobre tus datos</h3>
        <p>
          Le preguntas como a una persona, «¿cuántas llegadas tengo mañana?» o «¿qué agencia me trae más reservas?», y te
          contesta con tus datos. A Hugo se lo escribes o se lo dices con la voz, y las cifras las calcula el programa, no
          la IA. Avirato también acepta la voz, Cloudbeds lo llama «Ask Signals» y Mews resume sus informes.
        </p>

        <h3>3. La que hace el trabajo contigo</h3>
        <p>
          Le pides un cambio, «baja la Doble a 90&nbsp;€ del 1 al 7 de julio» o «corrige y reenvía el parte de Luis Gómez»,
          y te lo deja preparado para que lo confirmes. Es la que más trabajo te quita, porque hace por ti los clics de cada
          cambio. <strong>Lo importante es que te enseñe exactamente lo que va a hacer y que no aplique nada sin tu
          sí</strong>.
        </p>
        <p>
          En Hospedy lo hace Hugo, incluido en todos los planes desde {{ PLANES[0].mensual }}&nbsp;€ + IVA al mes. También
          lo tienen programas para hoteles medianos y grandes, como Mews, Newhotel o Ulyses.
        </p>

        <h2>Qué hace la IA de cada uno</h2>
      </div>

      <!-- La misma tabla que /comparar, algo más ancha que el texto -->
      <div class="max-w-5xl mx-auto px-6 my-8">
        <TablaIa />
        <p class="text-base text-gray-500 mt-4">
          Revisado el {{ revision }} con la información pública de cada empresa. Puede haber cambiado. «No consta» quiere
          decir que esa empresa no lo cuenta. El precio, los partes y la encuesta del INE de cada uno, en la
          <NuxtLink to="/comparar" class="text-primary hover:underline">comparativa de PMS</NuxtLink>.
        </p>
      </div>

      <div class="max-w-3xl mx-auto px-6 prose prose-lg">
        <h2>Qué hace Hugo</h2>
        <p>
          Hugo es el asistente de Hospedy y va incluido en todos los planes. Le hablas o le escribes desde cualquier
          pantalla, y:
        </p>
        <ul>
          <li>Cambia precios, cierres y estancias mínimas de muchos días en una frase.</li>
          <li>Arregla reservas, huéspedes y partes: mover o dividir una reserva, corregir a un huésped y volver a enviar su parte rechazado, marcar un pago o el check-in.</li>
          <li>Te dice qué tienes pendiente: reservas sin habitación, partes rechazados, cobros de las salidas o mensajes sin contestar, y lo que conviene revisar, como dos reservas que parecen la misma.</li>
          <li>Te da las cifras de cualquier periodo y las compara con otro.</li>
        </ul>
        <p>
          Cada cambio te lo enseña en una tarjeta, paso a paso, con los nombres, las fechas y los importes reales, y
          <strong>solo se aplica cuando pulsas «Sí, aplicar»</strong>. Lo que confirmas queda en el registro de actividad, y
          Hugo funciona en servidores propios de Hospedy.
        </p>
        <p>
          <NuxtLink to="/funciones/hugo">Todo lo que hace Hugo</NuxtLink>
        </p>

        <h2>Qué preguntar antes de elegir</h2>
        <ul>
          <li><strong>¿Qué tipo de IA es?</strong> Contestar a huéspedes, responder preguntas y hacer cambios no es lo mismo.</li>
          <li><strong>¿Va incluida o es un módulo de pago?</strong> ¿Y tiene complementos que se pagan aparte?</li>
          <li><strong>Si hace cambios, ¿te enseña antes exactamente qué va a hacer?</strong> ¿Puede aplicarlos sin que tú los confirmes?</li>
          <li><strong>¿Queda registro</strong> de lo que hizo y de quién lo confirmó?</li>
          <li><strong>¿Dónde se procesan tus datos</strong> y los de tus huéspedes?</li>
        </ul>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Puede una IA cambiarme los precios sola?</h3>
        <p>
          Depende del programa. Algunos sistemas de precios publican tarifas en piloto automático, dentro de los límites que
          les fijas, como el de Cloudbeds. Hugo no: te propone el cambio y solo se aplica cuando lo confirmas.
        </p>

        <h3>¿Es seguro que una IA toque mis reservas?</h3>
        <p>
          Si te enseña antes lo que va a hacer y no aplica nada sin ti, sí. En Hospedy, Hugo hace los mismos cambios que
          harías tú desde el planning o la ficha, con las mismas reglas. Si algún paso no se puede hacer, te dice el motivo;
          y si alguien cambia la reserva entre la propuesta y el botón, no se aplica nada.
        </p>
      </div>

    </article>
    <!-- La función de la que habla, más guías y la banda de cierre -->
    <ArticuloPie
      :articulo="articulo"
      titulo="¿Quieres ver a Hugo con tus datos?"
      texto="Pide una demo y te enseñamos lo que Hugo puede hacer por tu alojamiento. Después, 30 días de prueba gratis, sin tarjeta y sin permanencia."
    />
  </div>
</template>

<script setup lang="ts">
import { REVISION_COMPARATIVA } from '~/utils/comparativa'
import { fechaLarga } from '~/utils/fechas'
import { PLANES } from '~/utils/precios'

const articulo = useArticulo('pms-con-inteligencia-artificial')
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
