<template>
  <!-- El final de cada artículo: la función de Hospedy de la que habla, dos guías más de su categoría (o de otra, si
       no hay) y la banda de cierre común, con el título del propio artículo -->
  <section class="max-w-5xl mx-auto px-6 mt-16" aria-labelledby="sigue-leyendo">
    <h2 id="sigue-leyendo" class="text-3xl font-bold text-center text-gray-900 mb-8">Sigue leyendo</h2>
    <ul class="grid md:grid-cols-3 gap-6">
      <li v-if="funcion">
        <NuxtLink :to="funcion.ruta" class="group flex flex-col h-full rounded-2xl p-6 bg-tertiary/60 hover:bg-tertiary transition-colors">
          <span class="text-sm font-bold uppercase tracking-wide text-secondary">En Hospedy</span>
          <span class="mt-2 text-xl font-bold text-gray-900 group-hover:text-secondary">{{ funcion.nombre }}</span>
          <span class="mt-2 text-gray-700">{{ funcion.descripcion }}</span>
        </NuxtLink>
      </li>
      <li v-for="otro in otros" :key="otro.slug">
        <NuxtLink :to="`/blog/${otro.slug}`" class="group flex flex-col h-full rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
          <span class="text-sm font-bold uppercase tracking-wide text-primary">{{ otro.categoria }}</span>
          <span class="mt-2 text-xl font-bold text-gray-900 group-hover:text-secondary">{{ otro.titulo }}</span>
          <span class="mt-2 text-gray-600">{{ otro.extracto }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
  <CtaFinal :titulo="titulo" :texto="texto" />
</template>

<script setup lang="ts">
import type { ArticuloBlog } from '~/utils/blog'
import { ARTICULOS } from '~/utils/blog'
import { PARA_QUIEN, TODAS_LAS_FUNCIONES } from '~/utils/navegacion'

const props = defineProps<{ articulo: ArticuloBlog, titulo?: string, texto?: string }>()

// la página del producto: una función o, si el artículo apunta a otra página (/precios, un tipo de alojamiento), esa
const funcion = computed(() => {
  const ruta = props.articulo.funcion
  if (!ruta) return null
  return TODAS_LAS_FUNCIONES.find(f => f.ruta === ruta)
    || PARA_QUIEN.find(p => p.ruta === ruta)
    || (ruta === '/precios' ? { nombre: 'Precios', ruta, descripcion: 'Todas las funciones, en todos los planes, desde 35 €/mes' } : null)
})

const otros = computed(() => {
  const resto = ARTICULOS.filter(a => a.slug !== props.articulo.slug)
  const misma = resto.filter(a => a.categoria === props.articulo.categoria)
  const demas = resto.filter(a => a.categoria !== props.articulo.categoria)
  const cuantos = funcion.value ? 2 : 3
  return [...misma, ...demas].slice(0, cuantos)
})
</script>
