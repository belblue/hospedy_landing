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
        <span class="block text-lg text-secondary font-medium mb-2"
          >Normativa</span
        >
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Guía completa: Encuesta INE para alojamientos turísticos 2026
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Hospedy genera la encuesta del INE automáticamente con los datos de tus reservas. Solo tienes que actualizar el código de control cada mes y enviar con un clic.
        </p>
        <div
          class="flex items-center text-lg text-gray-500 border-b border-gray-200 pb-6"
        >
          <span>8 min lectura</span>
          <span class="mx-2">·</span>
          <span>Actualizado Febrero 2026</span>
        </div>
      </header>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-6 mt-10 prose prose-lg">
        <p class="lead">
          La encuesta de ocupación hotelera del Instituto Nacional de Estadística (INE) recoge datos sobre la actividad de los alojamientos turísticos en España. Si has sido seleccionado, es obligatorio cumplir. Con Hospedy, ahorras hasta 2 horas mensuales de trabajo manual.
        </p>

        <h2>¿Qué es la encuesta del INE?</h2>
        <p>
          La encuesta de ocupación del INE sirve para generar estadísticas oficiales del sector turístico español. Es una herramienta fundamental para medir la actividad económica del turismo.
        </p>
        <p>
          <strong>Importante:</strong> no todos los alojamientos están obligados a enviarla. El INE selecciona una muestra de establecimientos cada año. Si te han seleccionado, recibirás una notificación oficial y es obligatorio cumplir.
        </p>

        <h2>¿Qué datos recoge la encuesta?</h2>
        <p>La encuesta del INE necesita información detallada sobre tus huéspedes y tu ocupación:</p>
        <ul>
          <li><strong>Procedencia de los huéspedes:</strong> comunidad autónoma de origen (para españoles) y país de origen (para extranjeros)</li>
          <li><strong>Número de huéspedes</strong></li>
          <li><strong>Tipo de habitación o alojamiento</strong></li>
          <li><strong>Precio medio</strong></li>
          <li><strong>Días que el establecimiento ha estado abierto</strong></li>
          <li><strong>Personal empleado</strong></li>
        </ul>

        <h2>Plazos de envío</h2>
        <p>La encuesta se envía mensualmente con estos plazos:</p>
        <ul>
          <li><strong>Fecha de referencia:</strong> último día del mes</li>
          <li><strong>Plazo de envío:</strong> entre el día 1 y el día 10 del mes siguiente</li>
          <li><strong>Frecuencia:</strong> solo puede enviarse una vez por mes</li>
        </ul>
        <p>
          <strong>Ejemplo:</strong> para los datos de marzo, tienes hasta el 10 de abril para enviar la encuesta.
        </p>

        <h2>El problema del proceso manual</h2>
        <p>Sin automatización, generar la encuesta del INE es un proceso tedioso:</p>
        <ol>
          <li>Recopilar todos los datos de huéspedes del mes</li>
          <li>Clasificarlos por procedencia, tipo de habitación, etc.</li>
          <li>Calcular promedios y totales</li>
          <li>Rellenar el formulario en la plataforma ARCE del INE</li>
          <li>Revisar y enviar</li>
        </ol>
        <p>
          Este proceso puede llevar hasta <strong>2 horas</strong> dependiendo del volumen de huéspedes. Hay quien lo hace por teléfono, que es más rápido, pero igualmente requiere tener todos los datos preparados.
        </p>

        <div class="bg-green-50 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4 text-green-800">
            Hospedy: el ÚNICO PMS con envío automático
          </h3>
          <p class="text-green-900 mb-4">
            Aquí está la diferencia clave que debes conocer:
          </p>
          <p class="text-green-900 font-semibold mb-4">
            Hospedy es el único PMS del mercado que envía la encuesta INE de forma completamente automática.
          </p>
          <p class="text-green-900">
            Otros sistemas como RuralGest, AvaiBook, Amenitiz o Cloudbeds solo generan un archivo XML. Tú tienes que descargar ese archivo y subirlo manualmente a la plataforma ARCE del INE cada mes.
          </p>
        </div>

        <h2>Cómo funciona con Hospedy</h2>
        <p>Con Hospedy, el proceso es mucho más sencillo:</p>
        <ol>
          <li>Los datos se recopilan automáticamente de tus reservas</li>
          <li>Actualizas el código de control mensual (te lo proporciona el INE)</li>
          <li>Haces clic en enviar</li>
          <li>Listo</li>
        </ol>
        <p>
          Sin descargar archivos XML, sin entrar en la plataforma ARCE, sin verificaciones manuales.
        </p>

        <h2>La importancia del check-out</h2>
        <p>
          Para que la encuesta se genere correctamente, es fundamental <strong>marcar el check-out</strong> cuando los huéspedes se van. Esto afecta directamente a:
        </p>
        <ul>
          <li>El cálculo correcto de noches de estancia</li>
          <li>La disponibilidad de habitaciones</li>
          <li>Los estados de limpieza automáticos</li>
        </ul>
        <p>
          Si olvidas marcar el check-out, el sistema lo marca automáticamente pasadas unas horas, pero es mejor hacerlo manualmente para mayor precisión.
        </p>

        <h2>Tipos de encuestas según tu alojamiento</h2>
        <p>Existen diferentes encuestas según el tipo de establecimiento:</p>

        <h3>Encuesta de Ocupación Hotelera (EOH)</h3>
        <p>
          Para <strong>hoteles, hostales, pensiones y establecimientos similares</strong>. Recoge datos sobre viajeros, pernoctaciones, ocupación y personal empleado.
        </p>

        <h3>Encuesta de Ocupación de Apartamentos Turísticos (EOAT)</h3>
        <p>
          Para <strong>apartamentos turísticos registrados</strong>. Mide variables similares adaptadas a este tipo de alojamiento.
        </p>

        <h3>Encuesta de Ocupación en Alojamientos de Turismo Rural (EOTR)</h3>
        <p>
          Para <strong>casas rurales y alojamientos de turismo rural</strong>.
        </p>

        <div class="bg-secondary/5 p-6 rounded-xl my-8 not-prose">
          <h3 class="text-xl font-bold mb-4">Hospedy genera automáticamente:</h3>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Encuesta de Ocupación Hotelera (EOH)</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Encuesta de Apartamentos Turísticos (EOAT)</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Encuesta de Turismo Rural (EOTR)</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Documentos autonómicos (Castilla y León, Andalucía...)</span>
            </li>
          </ul>
        </div>

        <h2>Encuestas regionales</h2>
        <p>Además de la encuesta nacional del INE, algunas comunidades autónomas tienen sus propias encuestas de ocupación. Hospedy también las soporta:</p>
        <ul>
          <li><strong>Castilla y León:</strong> encuesta regional de turismo</li>
          <li><strong>Andalucía:</strong> encuesta de ocupación andaluza</li>
        </ul>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Cómo sé si estoy obligado a enviar la encuesta del INE?</h3>
        <p>
          El INE te notifica por correo postal o electrónico si has sido seleccionado. Si no has recibido ninguna comunicación, no tienes obligación.
        </p>

        <h3>¿Qué es el código de control?</h3>
        <p>
          Es un código que el INE te proporciona cada mes. Cambia mensualmente y debes actualizarlo en Hospedy antes de enviar la encuesta.
        </p>

        <h3>¿Qué pasa si envío la encuesta con errores?</h3>
        <p>
          Como solo puedes enviar una vez al mes, es importante revisar los datos antes. Hospedy te muestra un resumen para que lo verifiques.
        </p>

        <h3>¿Puedo ver un histórico de las encuestas enviadas?</h3>
        <p>
          Sí, Hospedy guarda un registro de todas las encuestas enviadas para tu referencia.
        </p>

        <h3>¿Cuánto tiempo ahorro con Hospedy?</h3>
        <p>
          El proceso manual puede llevar hasta 2 horas mensuales. Con Hospedy, son unos minutos para verificar los datos y hacer clic en enviar.
        </p>

        <h3>¿Los datos son confidenciales?</h3>
        <p>
          Sí. Los datos individuales están protegidos por el secreto estadístico. Solo se publican datos agregados que no permiten identificar a ningún establecimiento concreto.
        </p>
      </div>

      <!-- CTA -->
      <div class="max-w-3xl mx-auto px-6 mt-16">
        <div class="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">
            ¿Quieres automatizar tus encuestas del INE?
          </h2>
          <p class="text-gray-600 mb-6">
            Prueba Hospedy gratis durante 30 días. Somos el único PMS con envío automático completo.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink class="btn btn-grad" to="/demo">Solicitar demo</NuxtLink>
            <NuxtLink class="btn btn-outline" to="/funciones/encuestas-ine"
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
  title: "Guía completa: Encuesta INE para alojamientos turísticos 2026",
  meta: [
    {
      name: "description",
      content: "Hospedy es el único PMS que envía la encuesta INE automáticamente. Guía completa sobre plazos, datos requeridos y cómo automatizar el envío mensual.",
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
