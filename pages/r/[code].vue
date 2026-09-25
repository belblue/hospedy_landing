<template>
  <div />
</template>

<script setup lang="ts">
// Atajo del Programa Amigos: gethospedy.com/r/CODIGO recuerda el código (la cookie se fija ya en
// el servidor) y lleva a la portada, donde la barra "Te ha invitado un amigo" ofrece crear la
// cuenta con él. Página sin contenido: nunca se indexa.
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
const route = useRoute()
const { guardar } = useReferral()
const codigo = normalizarCodigo(route.params.code)
if (codigo) guardar(codigo)
await navigateTo(codigo ? { path: '/', query: { ref: codigo } } : '/', { redirectCode: 302 })
</script>
