<template>
  <!-- «Ver una demo» (decisión de Arturo del 10-10). Mientras la cuenta de demo esté apagada lleva directo a /demo,
       la demo asistida; con NUXT_PUBLIC_DEMO_ENABLED abre el modal con las dos formas de ver Hospedy. Es un enlace a
       /demo para que, sin JavaScript o al abrirlo en otra pestaña (Ctrl, Cmd, botón central), siga llevando a algún
       sitio. Las clases y el título los pone quien lo usa. -->
  <a href="/demo" :aria-haspopup="demoLista ? 'dialog' : undefined" @click="alPulsar">
    <slot>Ver una demo</slot>
  </a>
</template>

<script setup lang="ts">
const { abrir, demoLista } = usePruebaHospedy()

function alPulsar(e: MouseEvent) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  e.preventDefault()
  if (demoLista.value) abrir()
  else navigateTo('/demo')
}
</script>
