<template>
    <NuxtLayout>
        <div class="flex justify-center pt-28 pb-12 px-6">
            <div class="text-center max-w-2xl">
                <img src="/error404.svg" width="433" height="407" class="mx-auto w-1/2 lg:w-2/5 h-auto" alt="Ilustración: página no encontrada">
                <h1 class="text-4xl font-bold text-secondary mt-10 mb-4">{{ es404 ? 'No encontramos esta página' : 'Algo ha fallado' }}</h1>
                <p class="text-xl text-gray-600 mb-8">
                    {{ es404
                        ? 'Puede que la dirección esté mal escrita o que la página ya no exista.'
                        : 'No hemos podido cargar la página. Prueba de nuevo dentro de un momento.' }}
                </p>
                <NuxtLink class="btn btn-grad inline-block px-6 py-3" to="/">Volver a la portada</NuxtLink>
                <p class="text-lg text-gray-700 mt-10 mb-3">O ve directo a:</p>
                <ul class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
                    <li v-for="enlace in enlaces" :key="enlace.ruta">
                        <NuxtLink class="text-secondary underline underline-offset-4 hover:text-primary" :to="enlace.ruta">{{ enlace.nombre }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const es404 = computed(() => Number(props.error?.statusCode) === 404)

const enlaces = [
    { nombre: 'Precios', ruta: '/precios' },
    { nombre: 'Hoteles', ruta: '/hoteles' },
    { nombre: 'Casas rurales', ruta: '/casas-rurales' },
    { nombre: 'Apartamentos', ruta: '/apartamentos' },
    { nombre: 'Blog', ruta: '/blog' },
    { nombre: 'Preguntas frecuentes', ruta: '/faq' },
]

useHead({
    title: () => (es404.value ? 'Página no encontrada' : 'Error'),
    meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>
