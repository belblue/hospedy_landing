<template>
  <!-- La cabecera de cada artículo: migas, categoría, el título y la entradilla (los pone el artículo) y cuánto se
       tarda en leer y cuándo se actualizó, con su <time> -->
  <header class="max-w-3xl mx-auto px-6">
    <MigasDePan :migas="[{ nombre: 'Blog', ruta: '/blog' }, { nombre: articulo.titulo, ruta: `/blog/${articulo.slug}` }]" class="mb-6" />
    <p class="text-lg text-primary font-medium mb-2">{{ articulo.categoria }}</p>
    <slot />
    <p class="flex flex-wrap items-center gap-x-2 text-lg text-gray-500 border-b border-gray-200 pb-6">
      <span>{{ articulo.minutos }} min de lectura</span>
      <span aria-hidden="true">·</span>
      <span>Actualizado en <time :datetime="articulo.actualizado">{{ mesYAnio(articulo.actualizado) }}</time></span>
    </p>
  </header>
</template>

<script setup lang="ts">
import type { ArticuloBlog } from '~/utils/blog'
import { mesYAnio } from '~/utils/fechas'

defineProps<{ articulo: ArticuloBlog }>()
</script>
