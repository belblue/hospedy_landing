<template>
  <div />
</template>

<script setup lang="ts">
// Atajo del Programa Amigos: gethospedy.com/r/CODIGO recuerda el código (la cookie se fija ya en
// el servidor) y lleva a la portada, donde la barra "Te ha invitado un amigo" ofrece crear la
// cuenta con él. Página sin contenido: nunca se indexa. Sin el registro en la web (NUXT_PUBLIC_REGISTRO_VISIBLE), el
// código no se guarda y lleva a la portada sin más.
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
const route = useRoute()
const { guardar } = useReferral()
const codigo = registroOfrecido(useRuntimeConfig().public) ? normalizarCodigo(route.params.code) : ''
if (codigo) guardar(codigo)
await navigateTo(codigo ? { path: '/', query: { ref: codigo } } : '/', { redirectCode: 302 })
</script>
