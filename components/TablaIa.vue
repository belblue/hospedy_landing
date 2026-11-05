<template>
  <!-- La IA de cada programa (utils/comparativa.ts), en /comparar y en el artículo de los PMS con IA. En el móvil cada
       fila se lee como una ficha, con el rótulo de cada celda y sin scroll lateral; el rótulo lleva data-nosnippet: en el
       Markdown de la página (y en los buscadores) ya lo dice la cabecera. -->
  <div class="rounded-2xl border border-gray-200 bg-white overflow-hidden">
    <table class="w-full text-left">
      <caption class="sr-only">La inteligencia artificial de cada programa de gestión</caption>
      <thead class="hidden md:table-header-group bg-gray-50">
        <tr>
          <th scope="col" class="p-4 font-semibold text-gray-900 w-[16%]">Programa</th>
          <th v-for="clave in COLUMNAS" :key="clave" scope="col" class="p-4 font-semibold text-gray-900">{{ COLUMNAS_IA[clave] }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="fila in FILAS_IA"
          :key="fila.nombre"
          class="block md:table-row border-t border-gray-200 first:border-t-0 md:first:border-t px-5 py-4 md:p-0"
          :class="{ 'bg-primary/5': fila.propia }"
        >
          <th scope="row" class="block md:table-cell md:p-4 align-top text-lg" :class="fila.propia ? 'text-primary font-bold' : 'font-semibold text-gray-900'">{{ fila.nombre }}</th>
          <td v-for="clave in CLAVES_IA" :key="clave" class="block md:table-cell md:p-4 align-top mt-2 md:mt-0 text-gray-700">
            <span class="md:hidden font-semibold text-gray-900" data-nosnippet>{{ COLUMNAS_IA[clave] }}: </span>
            <IconoMarca v-if="fila[clave].marca" :tipo="fila[clave].marca" class="mr-1" />{{ fila[clave].texto }}
          </td>
          <td class="block md:table-cell md:p-4 align-top mt-2 md:mt-0 text-gray-700">
            <span class="md:hidden font-semibold text-gray-900" data-nosnippet>{{ COLUMNAS_IA.coste }}: </span>{{ fila.coste }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { COLUMNAS_IA, FILAS_IA } from '~/utils/comparativa'

// las columnas con marca, primero lo que hace Hugo; la última, el coste, es solo texto. La cabecera sigue la misma lista
// que las celdas, para que no se descuadren si cambia el orden
const CLAVES_IA = ['cambios', 'datos', 'huespedes'] as const
const COLUMNAS = [...CLAVES_IA, 'coste'] as const
</script>
