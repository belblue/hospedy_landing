<template>
  <!-- Hugo en cada tipo de alojamiento: lo que le pedirías tú, en burbujas como las de su chat (las tuyas en teal, la
       suya en blanco), y lo de siempre: te lo prepara y confirmas tú. La maqueta entera del chat está en
       /funciones/hugo. -->
  <section class="hm-bloque-hugo py-16 mt-20" aria-labelledby="titulo-hugo-alojamiento">
    <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
      <div data-aos="fade-right">
        <p class="text-secondary font-semibold text-lg mb-3">Hugo, tu asistente con IA</p>
        <h2 id="titulo-hugo-alojamiento" class="text-3xl font-bold text-gray-900 mb-4">{{ titulo }}</h2>
        <p class="text-xl text-gray-700 mb-6">{{ texto }}</p>
        <NuxtLink to="/funciones/hugo" class="text-lg font-semibold text-secondary hover:underline underline-offset-4">Conoce a Hugo →</NuxtLink>
      </div>
      <div data-aos="fade-left">
        <p class="sr-only">Lo que le puedes pedir a Hugo:</p>
        <ul class="space-y-3">
          <li v-for="frase in frases" :key="frase" class="flex justify-end">
            <span class="max-w-[90%] bg-secondary text-white rounded-2xl rounded-br-md px-4 py-3 text-lg shadow-sm">«{{ frase }}»</span>
          </li>
        </ul>
        <p class="mt-3 flex justify-start">
          <span class="max-w-[90%] bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-bl-md px-4 py-3 text-lg shadow-sm">{{ respuesta }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  titulo: string
  texto: string
  // lo que le dirías a Hugo, sin comillas: las pone la burbuja
  frases: string[]
  // lo que contesta Hugo, que tiene que valer para todas las frases: preguntas y cambios
  respuesta?: string
}>(), {
  respuesta: 'Te lo miro y te lo cuento. Si hay que cambiar algo, te lo preparo y lo aplicas con «Sí, aplicar».',
})
</script>

<style scoped>
/* el mismo fondo que la banda de Hugo de la portada */
.hm-bloque-hugo {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(13, 148, 136, 0.1) 100%);
}
</style>
