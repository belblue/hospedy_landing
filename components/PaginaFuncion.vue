<template>
  <!-- Plantilla de las páginas de cada función: migas, cabecera con lo esencial (qué es, para quién, que va incluido
       y cuánto cuesta), un bloque por cosa que resuelve, preguntas frecuentes, «Sigue explorando» y la banda de
       cierre. El contenido lo pone cada página; aquí solo la forma. -->
  <div class="pt-24">
    <div class="max-w-6xl mx-auto px-6">
      <MigasDePan :migas="[{ nombre: INDICE_FUNCIONES.nombre, ruta: INDICE_FUNCIONES.ruta }, { nombre: nombre, ruta: ruta }]" />
    </div>

    <!-- Cabecera -->
    <section
      class="max-w-6xl mx-auto px-6 mt-8"
      :class="$slots.visual ? 'grid lg:grid-cols-2 gap-10 lg:gap-14 items-center' : 'text-center max-w-4xl'"
    >
      <div>
        <p class="text-secondary font-semibold text-lg mb-3">{{ grupo }}</p>
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">{{ h1 }}</h1>
        <p class="text-xl text-gray-600 mb-6">{{ entradilla }}</p>
        <NuxtLink
          to="/precios"
          class="inline-flex items-center gap-2 bg-tertiary text-secondary font-semibold rounded-full px-4 py-1.5 mb-8 hover:bg-teal-200 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Incluido en todos los planes, desde {{ PLANES[0].mensual }}&nbsp;€/mes
        </NuxtLink>
        <BotonesPrueba :centrados="!$slots.visual" />
      </div>
      <!-- las maquetas llevan datos de ejemplo: fuera de los resúmenes de los buscadores -->
      <div v-if="$slots.visual" class="flex justify-center" data-nosnippet>
        <slot name="visual" />
      </div>
    </section>

    <!-- Lo que resuelve -->
    <div class="bg-gray-50 py-16 mt-16">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        <section
          v-for="seccion in secciones"
          :key="seccion.titulo"
          class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ seccion.titulo }}</h2>
          <p class="text-lg text-gray-600">{{ seccion.texto }}</p>
          <ul v-if="seccion.puntos?.length" class="mt-4 space-y-2">
            <li v-for="punto in seccion.puntos" :key="punto" class="flex items-start gap-2 text-lg text-gray-700">
              <svg class="w-5 h-5 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{{ punto }}</span>
            </li>
          </ul>
          <p v-if="seccion.nota" class="mt-4 text-base text-gray-500">{{ seccion.nota }}</p>
        </section>
      </div>
    </div>

    <!-- lo propio de cada página (la lista de agencias, el precio...) -->
    <slot />

    <FaqLista :preguntas="preguntas" class="max-w-4xl mx-auto px-6 mt-20" />

    <RelacionesPagina :clave="clave" />

    <CtaFinal />
  </div>
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'
import { INDICE_FUNCIONES } from '~/utils/navegacion'
import { PLANES } from '~/utils/precios'

const props = defineProps<{
  // la clave de la página en RELACIONES (y el final de su ruta: /funciones/<clave>)
  clave: string
  // el nombre corto de la miga de pan
  nombre: string
  // el grupo del menú al que pertenece, encima del H1
  grupo: string
  h1: string
  entradilla: string
  // la misma descripción que el meta description: para el WebPage de los datos estructurados
  descripcion: string
  secciones: SeccionFuncion[]
  preguntas: PreguntaFaq[]
}>()

const ruta = `/funciones/${props.clave}`
useEsquema('pagina', esquemaPagina('WebPage', { nombre: props.h1, descripcion: props.descripcion, ruta, sobreHospedy: true }))
</script>
