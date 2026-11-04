<template>
  <div>
    <article class="pt-24">
      <!-- Header -->
      <ArticuloCabecera :articulo="articulo">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {{ articulo.titulo }}
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Cuando el registro de viajeros rechaza un parte, ese viajero no consta como comunicado hasta que lo corriges.
          Estas son las causas más habituales y cómo se arregla, a mano o pidiéndoselo a Hugo.
        </p>
        </ArticuloCabecera>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          Casi siempre es un dato: una fecha, el documento o el contacto del huésped. Se corrige en la ficha del huésped y
          se vuelve a enviar, y en unos minutos el parte sale otra vez.
        </p>

        <h2>Cómo sabes que un parte se ha rechazado</h2>
        <p>
          En Hospedy, el listado de huéspedes marca con un triángulo rojo los partes con problemas. Al pulsarlo se abre la
          ficha del huésped, y su bloque «Envío a SES-Hospedajes» dice «Error en el envío a SES Hospedajes.» y, debajo, el
          motivo, cuando se conoce. Si todo va bien, ese mismo bloque enseña el código de comunicación que devuelve el
          registro.
        </p>
        <p>
          También se lo puedes preguntar a Hugo: «¿tengo partes rechazados?» o «¿qué tengo pendiente hoy?».
        </p>

        <h2>Las causas más habituales</h2>
        <p>
          Algunas las detecta Hospedy antes de enviar, y entonces el parte no sale hasta que se corrige. Las demás las
          devuelve el registro al comprobar el envío.
        </p>
        <ul>
          <li><strong>Faltan datos de contacto.</strong> Sin el teléfono o sin el email del huésped, el parte no se envía, y Hospedy te dice cuál falta.</li>
          <li><strong>El número de soporte del DNI o del NIE.</strong> En los documentos españoles es obligatorio, y un guion o un valor de relleno no sirve.</li>
          <li><strong>Una fecha mal escrita.</strong> Sobre todo la de nacimiento, y más aún en los menores, que llevan además el parentesco con el adulto responsable.</li>
          <li><strong>Los apellidos y el domicilio.</strong> Los huéspedes españoles necesitan sus dos apellidos, y el domicilio, el municipio de residencia.</li>
          <li><strong>La misma persona, dos veces.</strong> Si el motivo es «Ya existe una comunicación con estos datos», esa persona está repetida en la reserva y su parte ya salió con el otro registro: sobra el repetido.</li>
          <li><strong>Un huésped sin reserva.</strong> El parte va unido a la estancia: un huésped que no está en ninguna reserva no se puede comunicar.</li>
        </ul>

        <h2>Cómo se corrige a mano</h2>
        <ol>
          <li>En «Huéspedes», pulsa el triángulo rojo del huésped para abrir su ficha y lee el motivo.</li>
          <li>Corrige en «Datos del huésped» lo que falle (el documento, las fechas, el domicilio o el contacto) y pulsa «Guardar».</li>
          <li>Pulsa «Reenviar parte». El bloque vuelve a «Procesando, pendiente de envío.» y el parte sale en la siguiente pasada.</li>
        </ol>
        <p>
          Guarda los datos <strong>antes</strong> de reenviar: si no, se vuelve a intentar con los datos de antes y el error
          reaparece. Si el motivo es una persona repetida, no hay nada que reenviar: quita el huésped repetido con
          «Eliminar» en su ficha.
        </p>

        <h2>Cómo te lo prepara Hugo</h2>
        <p>
          Se lo cuentas con tus palabras: «el registro ha rechazado el parte de Luis Gómez, su fecha de nacimiento es el 1
          de enero de 2016, corrígelo y reenvíalo». Hugo mira la ficha y el motivo del rechazo y te prepara dos pasos,
          corregir el dato y volver a enviar el parte, con el valor de antes y el nuevo. Se aplican los dos juntos cuando
          pulsas «Sí, aplicar».
        </p>
        <p>
          Si le falta un dato que solo tienes tú, como el número de documento correcto, te lo pide antes de preparar nada.
          Y si el motivo no es un dato, como una persona repetida, te lo explica y te dice qué hacer.
        </p>
      </div>

      <div class="max-w-3xl mx-auto px-6 my-8 flex justify-center">
        <!-- alto fijo (500 + 76 del botón): el hueco reservado mide lo mismo que la maqueta a cualquier ancho -->
        <MontarAlVerse class="w-full max-w-[380px] h-[576px]" :descripcion="HUGO_PARTE_RECHAZADO.descripcion">
          <MockChatHugo v-bind="HUGO_PARTE_RECHAZADO" :saludo="false" :alto="500" />
        </MontarAlVerse>
      </div>

      <div class="max-w-3xl mx-auto px-6 prose prose-lg">
        <h2>¿Y si tus partes van a la Ertzaintza?</h2>
        <p>
          Funciona igual. Cuando la Ertzaintza rechaza un parte por un dato, el motivo sale en la ficha del huésped y el resto
          de huéspedes se envía igualmente. Se corrige y se reenvía de la misma manera.
        </p>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Me pueden multar por un parte rechazado?</h3>
        <p>
          Mientras no lo corrijas, ese viajero no consta como comunicado, y no comunicar a los viajeros es una infracción
          grave de la Ley Orgánica 4/2015, de protección de la seguridad ciudadana, con multas de 601 a 30.000&nbsp;€. Por
          eso conviene corregirlo en cuanto lo veas.
        </p>

        <h3>¿Cuánto tarda en salir el parte corregido?</h3>
        <p>
          «Reenviar parte» no lo envía en el momento: lo marca para que el sistema lo vuelva a mandar en su siguiente pasada,
          en unos minutos. Si el dato sigue mal, el error vuelve a aparecer con su motivo.
        </p>

        <h3>¿Cómo evito que vuelva a pasar?</h3>
        <p>
          Con el auto check-in, cada huésped rellena sus datos desde el móvil antes de llegar, con su documento delante, y el
          formulario no deja que una misma persona rellene dos huecos de la reserva. Y pregúntale a Hugo de vez en cuando qué
          tienes pendiente: los partes rechazados salen en esa lista.
        </p>
        <p>
          Más sobre el registro de viajeros en la guía
          <NuxtLink to="/blog/como-enviar-partes-viajeros-ses-hospedajes">Cómo enviar partes de viajeros a SES Hospedajes</NuxtLink>.
        </p>
      </div>

    </article>
    <!-- La función de la que habla, más guías y la banda de cierre -->
    <ArticuloPie
      :articulo="articulo"
      titulo="¿Quieres que los partes salgan solos?"
      texto="Pide una demo y te enseñamos cómo se envían los partes y cómo Hugo te prepara los rechazados. Después, 30 días de prueba gratis."
    />
  </div>
</template>

<script setup lang="ts">
import { HUGO_PARTE_RECHAZADO } from '~/utils/hugoEjemplos'

const articulo = useArticulo('parte-viajeros-rechazado-ses-hospedajes')
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
