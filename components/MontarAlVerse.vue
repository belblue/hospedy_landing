<template>
  <!-- Una maqueta de fuera de la primera pantalla: no va en el HTML del servidor (ni sus datos de ejemplo, que
       confundirían a buscadores y asistentes) y se monta cuando está a punto de verse. Hasta entonces ocupa su caja,
       para que la página no salte, con su texto alternativo. -->
  <div ref="caja" data-nosnippet>
    <slot v-if="montada" />
    <div v-else role="img" :aria-label="descripcion" class="w-full h-full" :style="proporcion ? { aspectRatio: proporcion } : undefined" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  // lo que enseña la maqueta, para quien no la ve
  descripcion: string
  // ancho / alto de la caja mientras no está montada (si el hueco no lo fija ya quien la usa)
  proporcion?: string
}>()

const caja = ref<HTMLElement | null>(null)
const montada = ref(false)
let observador: IntersectionObserver | null = null

onMounted(() => {
  if (!('IntersectionObserver' in window) || !caja.value) {
    montada.value = true
    return
  }
  // se monta un poco antes de entrar en la pantalla: cuando se ve, ya está
  observador = new IntersectionObserver((entradas) => {
    if (entradas.some(entrada => entrada.isIntersecting)) {
      montada.value = true
      observador?.disconnect()
    }
  }, { rootMargin: '400px 0px' })
  observador.observe(caja.value)
})

onBeforeUnmount(() => observador?.disconnect())
</script>
