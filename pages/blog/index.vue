<template>
  <div class="pt-24">
    <div class="max-w-6xl mx-auto px-6">
      <MigasDePan :migas="[{ nombre: 'Blog', ruta: '/blog' }]" />
    </div>

    <section class="text-center max-w-4xl mx-auto px-6 mt-8">
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog y guías de Hospedy</h1>
      <p class="text-xl text-gray-600">
        Guías prácticas sobre normativa, ventas y el día a día de tu alojamiento turístico en España.
      </p>
    </section>

    <!-- Filtro por categoría: todos los artículos van en el HTML; el filtro solo esconde -->
    <div class="max-w-6xl mx-auto px-6 mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar por categoría">
      <button
        v-for="opcion in OPCIONES"
        :key="opcion.valor || 'todas'"
        type="button"
        class="px-4 py-2 rounded-full font-semibold transition-colors"
        :class="filtro === opcion.valor ? 'bg-secondary text-white' : 'bg-tertiary text-secondary hover:bg-teal-200'"
        :aria-pressed="filtro === opcion.valor"
        @click="filtro = opcion.valor"
      >{{ opcion.nombre }}</button>
    </div>

    <ul class="max-w-6xl mx-auto px-6 mt-10 grid lg:grid-cols-2 gap-8">
      <li v-for="articulo in ARTICULOS" v-show="!filtro || articulo.categoria === filtro" :key="articulo.slug">
        <NuxtLink :to="`/blog/${articulo.slug}`" class="group block h-full">
          <article class="h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-40 flex items-center justify-center" :class="ESTILO[articulo.categoria].fondo">
              <svg class="w-16 h-16" :class="ESTILO[articulo.categoria].icono" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="ESTILO[articulo.categoria].trazo"></path>
              </svg>
            </div>
            <div class="p-6">
              <p class="text-lg font-medium" :class="ESTILO[articulo.categoria].texto">{{ articulo.categoria }}</p>
              <h2 class="text-xl font-bold mt-2 text-gray-900 group-hover:text-secondary transition-colors">{{ articulo.titulo }}</h2>
              <p class="text-gray-600 mt-2">{{ articulo.extracto }}</p>
              <p class="mt-4 flex flex-wrap items-center gap-x-2 text-base text-gray-500">
                <span>{{ articulo.minutos }} min de lectura</span>
                <span aria-hidden="true">·</span>
                <span>Actualizado en <time :datetime="articulo.actualizado">{{ mesYAnio(articulo.actualizado) }}</time></span>
              </p>
            </div>
          </article>
        </NuxtLink>
      </li>
    </ul>

    <!-- Novedades: sin boletín propio, con la casilla del formulario de contacto -->
    <section class="max-w-4xl mx-auto px-6 mt-20" aria-labelledby="titulo-novedades">
      <div class="bg-primary/5 rounded-2xl p-8 text-center">
        <h2 id="titulo-novedades" class="text-2xl font-bold mb-4">¿Quieres enterarte de las guías nuevas?</h2>
        <p class="text-gray-600 mb-6">
          Escríbenos y marca la casilla de novedades: te avisaremos por email cuando publiquemos algo nuevo.
        </p>
        <NuxtLink to="/contacto" class="btn btn-principal sm:flex-none inline-block px-6 py-3 font-semibold">Escríbenos</NuxtLink>
      </div>
    </section>

    <CtaFinal />
  </div>
</template>

<script setup lang="ts">
import type { CategoriaBlog } from '~/utils/blog'
import { ARTICULOS } from '~/utils/blog'
import { mesYAnio } from '~/utils/fechas'

const DESCRIPCION = 'Guías prácticas sobre partes de viajeros, la encuesta del INE, channel manager, reservas directas y cómo elegir un PMS para tu alojamiento en España.'

useSeoPagina({
  titulo: 'Blog y guías para alojamientos turísticos',
  descripcion: DESCRIPCION,
})
useEsquema('pagina', esquemaPagina('CollectionPage', { nombre: 'Blog y guías de Hospedy', descripcion: DESCRIPCION, ruta: '/blog' }))

const CATEGORIAS: CategoriaBlog[] = ['Normativa', 'Ventas y canales', 'Gestión diaria', 'Elegir un PMS']
const OPCIONES: { nombre: string, valor: CategoriaBlog | null }[] = [
  { nombre: 'Todas', valor: null },
  ...CATEGORIAS.map(categoria => ({ nombre: categoria, valor: categoria })),
]
const filtro = ref<CategoriaBlog | null>(null)

// el color y el icono de cada categoría (las clases van aquí, en un .vue: Tailwind no mira utils/)
const ESTILO: Record<CategoriaBlog, { fondo: string, icono: string, texto: string, trazo: string }> = {
  'Normativa': {
    fondo: 'bg-primary/10',
    icono: 'text-primary/60',
    texto: 'text-secondary',
    trazo: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  'Ventas y canales': {
    fondo: 'bg-green-50',
    icono: 'text-green-400',
    texto: 'text-green-700',
    trazo: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  'Gestión diaria': {
    fondo: 'bg-orange-50',
    icono: 'text-orange-300',
    texto: 'text-orange-700',
    trazo: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  'Elegir un PMS': {
    fondo: 'bg-blue-50',
    icono: 'text-blue-300',
    texto: 'text-blue-700',
    trazo: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  },
}
</script>
