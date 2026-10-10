<template>
  <!-- «Sigue explorando»: el paso siguiente de cada página (funciones relacionadas, guías y tipos de alojamiento), con
       los datos de utils/navegacion.ts. Así nunca hace falta volver a la portada para llegar a otra página. -->
  <section v-if="grupos.length" class="max-w-6xl mx-auto px-6 mt-20" aria-labelledby="relacionadas-titulo">
    <h2 id="relacionadas-titulo" class="text-3xl font-bold text-center text-gray-900 mb-10">Sigue explorando</h2>
    <div class="grid gap-6" :class="grupos.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2'">
      <div v-for="grupo in grupos" :key="grupo.titulo" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">{{ grupo.titulo }}</h3>
        <ul class="space-y-4">
          <li v-for="enlace in grupo.enlaces" :key="enlace.ruta">
            <NuxtLink :to="enlace.ruta" class="group block">
              <span class="font-semibold text-secondary group-hover:underline underline-offset-4">{{ enlace.nombre }}</span>
              <span v-if="enlace.descripcion" class="block text-gray-600">{{ enlace.descripcion }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <p class="text-center mt-8">
      <NuxtLink to="/precios" class="text-lg font-semibold text-secondary hover:underline underline-offset-4">
        Ver los precios: todas las funciones en todos los planes →
      </NuxtLink>
    </p>
  </section>
</template>

<script setup lang="ts">
import { PARA_QUIEN, RELACIONES, TODAS_LAS_FUNCIONES } from '~/utils/navegacion'
import { ARTICULOS } from '~/utils/blog'

const props = defineProps<{ clave: string }>()

interface Enlace { nombre: string, ruta: string, descripcion?: string }

const relaciones = RELACIONES[props.clave]
if (!relaciones && import.meta.dev) console.warn(`RelacionesPagina: «${props.clave}» no está en RELACIONES`)

const funciones: Enlace[] = (relaciones?.funciones || [])
  .map(ruta => TODAS_LAS_FUNCIONES.find(f => f.ruta === ruta))
  .filter((f): f is NonNullable<typeof f> => Boolean(f))
  .map(f => ({ nombre: f.nombre, ruta: f.ruta, descripcion: f.descripcion }))

const guias: Enlace[] = (relaciones?.guias || [])
  .map(slug => ARTICULOS.find(a => a.slug === slug))
  .filter((a): a is NonNullable<typeof a> => Boolean(a))
  .map(a => ({ nombre: a.titulo, ruta: `/blog/${a.slug}`, descripcion: a.extracto }))

const tipos: Enlace[] = (relaciones?.tipos || [])
  .map(ruta => PARA_QUIEN.find(p => p.ruta === ruta))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))
  .map(p => ({ nombre: p.nombre, ruta: p.ruta }))

const grupos = [
  { titulo: 'Funciones relacionadas', enlaces: funciones },
  { titulo: 'Guías', enlaces: guias },
  { titulo: 'Para tu alojamiento', enlaces: tipos },
].filter(grupo => grupo.enlaces.length)
</script>
