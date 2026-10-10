<template>
  <!-- La banda de cierre de todas las páginas, siempre la misma: los dos botones y el contacto -->
  <section class="cta-final max-w-6xl mx-4 sm:mx-6 xl:mx-auto mt-20 rounded-3xl px-6 py-14 sm:py-16 text-center text-white" aria-labelledby="cta-final-titulo">
    <h2 id="cta-final-titulo" class="text-3xl lg:text-4xl font-bold mb-4">{{ titulo }}</h2>
    <p class="text-xl text-white/90 max-w-2xl mx-auto mb-8">{{ texto }}</p>
    <BotonesPrueba centrados oscuro />
    <p class="mt-8 text-lg text-white/90">
      ¿Prefieres hablar con alguien?
      <NuxtLink to="/contacto" class="font-semibold text-white underline underline-offset-4 hover:text-tertiary">Escríbenos</NuxtLink>
    </p>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ titulo?: string, texto?: string }>(), {
  titulo: 'Prueba Hospedy 30 días gratis',
  texto: 'Con todas las funciones, sin tarjeta y sin permanencia. Y si prefieres verlo antes, te lo enseñamos.',
})
</script>

<style scoped>
.cta-final {
  background: linear-gradient(135deg, #0f766e 0%, #0d9488 55%, #0f766e 100%);
}
</style>
