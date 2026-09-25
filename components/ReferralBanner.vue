<template>
  <!-- Programa Amigos: quien llega con un código de amigo ve con qué código viene y un botón para
       crear la cuenta con él. Se puede cerrar (vuelve en la siguiente visita). -->
  <div v-if="codigo && !cerrado" class="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
    <div class="relative max-w-6xl mx-auto pl-4 pr-12 py-3 flex flex-wrap items-center justify-center gap-3 text-center">
      <span class="text-gray-700">
        Te ha invitado un amigo con el código <strong class="text-primary">{{ codigo }}</strong>. Crea tu cuenta y empieza tu prueba gratis.
      </span>
      <!-- flex-none: .btn trae flex 1 1 auto y, al pasar a otra fila, se estiraba a todo el ancho -->
      <a :href="appUrl('/register')" class="btn btn-grad flex-none px-4 py-2" title="Crea tu cuenta de Hospedy con el código de tu amigo">Crear mi cuenta</a>
      <!-- la X va fija a la derecha para que no salte de línea con el texto y el botón -->
      <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 px-2" aria-label="Cerrar" @click="cerrado = true">✕</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { codigo, appUrl } = useReferral()
const cerrado = ref(false)
</script>
