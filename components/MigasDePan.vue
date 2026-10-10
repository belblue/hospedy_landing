<template>
  <!-- De la portada a la página actual. Lleva también su BreadcrumbList para los buscadores. -->
  <nav aria-label="Migas de pan" class="text-base text-gray-500">
    <ol class="flex flex-wrap items-center gap-x-2 gap-y-1">
      <li v-for="(miga, i) in todas" :key="miga.ruta" class="flex items-center gap-2">
        <NuxtLink
          v-if="i < todas.length - 1"
          :to="miga.ruta"
          class="hover:text-secondary hover:underline underline-offset-4"
        >{{ miga.nombre }}</NuxtLink>
        <span v-else aria-current="page" class="text-gray-700">{{ miga.nombre }}</span>
        <span v-if="i < todas.length - 1" aria-hidden="true">›</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{ migas: { nombre: string, ruta: string }[] }>()
const todas = [{ nombre: 'Inicio', ruta: '/' }, ...props.migas]
useEsquema('migas', esquemaMigas(todas))
</script>
