<template>
  <!-- Programa Amigos: quien llega con un código de amigo ve con qué código viene y un botón para
       crear la cuenta con él. Se puede cerrar (vuelve en la siguiente visita). -->
  <div v-if="codigo && !cerrado" class="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
    <div class="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-3 text-center">
      <span class="text-gray-700">
        Te ha invitado un amigo con el código <strong class="text-primary">{{ codigo }}</strong>. Crea tu cuenta y empieza tu prueba gratis.
      </span>
      <a :href="appUrl('/register')" class="btn btn-grad px-4 py-2" title="Crea tu cuenta de Hospedy con el código de tu amigo">Crear mi cuenta</a>
      <button type="button" class="text-gray-500 hover:text-gray-700 px-2" aria-label="Cerrar" @click="cerrado = true">✕</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { codigo, appUrl } = useReferral()
const cerrado = ref(false)
</script>
