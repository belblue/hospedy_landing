<template>
  <div class="pt-24">
    <div class="max-w-6xl mx-auto px-6">
      <MigasDePan :migas="[{ nombre: INDICE_FUNCIONES.nombre, ruta: INDICE_FUNCIONES.ruta }]" />
    </div>

    <!-- Cabecera -->
    <section class="max-w-4xl mx-auto px-6 mt-8 text-center">
      <p class="text-secondary font-semibold text-lg mb-3">Funciones</p>
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">Todo lo que hace Hospedy</h1>
      <p class="text-xl text-gray-600 mb-8">
        Once funciones para el día a día de tu alojamiento, de la reserva a la factura. Y todas van en todos los planes:
        no pagas aparte por ninguna.
      </p>
      <BotonesPrueba centrados />
    </section>

    <!-- Hugo, destacado -->
    <section class="max-w-6xl mx-auto px-6 mt-16" aria-labelledby="funcion-destacada">
      <div class="destacado rounded-3xl p-6 sm:p-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p class="text-secondary font-semibold text-lg mb-2">Destacado</p>
          <h2 id="funcion-destacada" class="text-3xl font-bold text-gray-900 mb-4">{{ DESTACADO.nombre }}</h2>
          <p class="text-xl text-gray-700 mb-6">
            {{ DESTACADO.descripcion }}. Cambia precios, busca reservas y responde tus dudas, y no aplica nada sin que lo
            veas antes.
          </p>
          <NuxtLink :to="DESTACADO.ruta" class="btn btn-principal sm:flex-none inline-block px-6 py-3 font-semibold">Conoce a Hugo</NuxtLink>
        </div>
        <div class="flex justify-center" data-nosnippet>
          <MockChatHugo />
        </div>
      </div>
    </section>

    <!-- Los tres grupos -->
    <section
      v-for="grupo in FUNCIONES"
      :key="grupo.titulo"
      class="max-w-6xl mx-auto px-6 mt-16"
      :aria-labelledby="idGrupo(grupo.titulo)"
    >
      <h2 :id="idGrupo(grupo.titulo)" class="text-3xl font-bold text-gray-900 mb-6">{{ grupo.titulo }}</h2>
      <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <li v-for="funcion in grupo.items" :key="funcion.ruta">
          <NuxtLink
            :to="funcion.ruta"
            class="group block h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-primary/30 transition"
          >
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-secondary mb-2">{{ funcion.nombre }}</h3>
            <p class="text-lg text-gray-600">{{ funcion.descripcion }}</p>
            <span class="inline-block mt-4 font-semibold text-secondary">Saber más →</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <div class="max-w-5xl mx-auto px-6 mt-20">
      <MensajePlanes con-enlace />
    </div>

    <CtaFinal />
  </div>
</template>

<script setup lang="ts">
import { DESTACADO, FUNCIONES, INDICE_FUNCIONES } from '~/utils/navegacion'

const DESCRIPCION = 'Partes de viajeros, INE, check-in, planning, facturación, channel manager, motor de reservas, cobros, limpieza y asistente con IA. Todo, en todos los planes.'

useSeoPagina({
  titulo: 'Funciones del PMS: todas, en todos los planes',
  descripcion: DESCRIPCION,
})
useEsquema('pagina', esquemaPagina('CollectionPage', {
  nombre: 'Todo lo que hace Hospedy',
  descripcion: DESCRIPCION,
  ruta: INDICE_FUNCIONES.ruta,
  sobreHospedy: true,
}))

function idGrupo(titulo: string) {
  return 'grupo-' + titulo.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-')
}
</script>

<style scoped>
.destacado {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(13, 148, 136, 0.1) 100%);
}
</style>
