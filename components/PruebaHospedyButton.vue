<template>
  <!-- Botón "¡Prueba Hospedy en 5 minutos!": abre el modal con las tres formas de probar Hospedy.
       Es un enlace a /demo (la demo asistida) para que, sin JavaScript o al abrirlo en otra
       pestaña (Ctrl, Cmd, botón central), siga llevando a algún sitio; el clic normal abre el
       modal. Las clases y el título los pone quien lo usa, como en el enlace al que sustituye. -->
  <a href="/demo" aria-haspopup="dialog" @click="alPulsar">
    <slot>¡Prueba Hospedy en 5 minutos!</slot>
  </a>
</template>

<script setup lang="ts">
const { abrir } = usePruebaHospedy()

function alPulsar(e: MouseEvent) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  e.preventDefault()
  abrir()
}
</script>
