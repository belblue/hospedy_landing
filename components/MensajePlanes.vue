<template>
  <!-- «Todas las funciones, en todos los planes»: el mismo texto en todas las páginas que hablan de precio -->
  <section class="mensaje-planes rounded-3xl px-6 py-10 sm:px-10 text-center" :aria-labelledby="idTitulo">
    <h2 :id="idTitulo" class="text-2xl lg:text-3xl font-bold text-secondary mb-4">{{ MENSAJE_PLANES.titulo }}</h2>
    <p class="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">{{ MENSAJE_PLANES.texto }}</p>
    <p v-if="conEnlace" class="mt-6">
      <NuxtLink to="/precios" class="text-lg font-semibold text-secondary hover:underline underline-offset-4">Ver los planes y lo que incluyen →</NuxtLink>
    </p>
  </section>
</template>

<script setup lang="ts">
import { MENSAJE_PLANES } from '~/utils/precios'

defineProps<{ conEnlace?: boolean }>()
const idTitulo = `mensaje-planes-${useId()}`
</script>

<style scoped>
.mensaje-planes {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(245, 158, 11, 0.1) 100%);
  border: 1px solid rgba(13, 148, 136, 0.15);
}
</style>
