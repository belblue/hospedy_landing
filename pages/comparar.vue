<template>
  <div>
    <div class="pt-24">
      <div class="max-w-6xl mx-auto px-6">
        <MigasDePan :migas="[{ nombre: 'Comparativa de PMS', ruta: '/comparar' }]" />
      </div>
      <!-- Cabecera -->
      <div class="text-center max-w-4xl mx-auto px-6 mt-8">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Hospedy frente a otros PMS</h1>
        <p class="text-xl text-gray-600">
          Qué hace la inteligencia artificial de cada programa, cuánto cuesta y cómo resuelve los partes de viajeros y la
          encuesta del INE. Con la información que publica cada empresa, revisada el {{ revision }}.
        </p>
      </div>

      <!-- La IA de cada uno. Las tablas se leen en filas en el móvil (cada celda con su rótulo), sin scroll lateral. El
           rótulo lleva data-nosnippet: en el Markdown de la página (y en los buscadores) ya lo dice la cabecera -->
      <section class="max-w-6xl mx-auto px-6 mt-14" aria-labelledby="titulo-ia">
        <h2 id="titulo-ia" class="text-3xl font-bold text-gray-900 text-center mb-4">La inteligencia artificial de cada uno</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
          Casi todos los programas hablan ya de IA, pero no hacen lo mismo. Hay tres tipos: la que contesta a tus
          huéspedes, la que responde preguntas sobre tus datos y la que hace el trabajo contigo, que prepara los cambios
          para que tú los confirmes.
        </p>
        <TablaIa />
        <p class="text-lg text-gray-600 mt-4">
          Hugo trabaja para ti y no habla con tus huéspedes: los emails automáticos salen de
          <NuxtLink to="/funciones/comunicaciones" class="text-secondary font-semibold hover:underline underline-offset-4">Comunicaciones</NuxtLink>,
          y lo que te contestan lo respondes tú desde
          <NuxtLink to="/funciones/mensajes" class="text-secondary font-semibold hover:underline underline-offset-4">Mensajes</NuxtLink>.
        </p>
      </section>

      <!-- Precio y normativa -->
      <section class="max-w-6xl mx-auto px-6 mt-16" aria-labelledby="titulo-precio">
        <h2 id="titulo-precio" class="text-3xl font-bold text-gray-900 text-center mb-8">Precio y normativa</h2>
        <div class="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <table class="w-full text-left">
            <caption class="sr-only">Precio, partes de viajeros y encuesta del INE de cada programa de gestión</caption>
            <thead class="hidden md:table-header-group bg-gray-50">
              <tr>
                <th scope="col" class="p-4 font-semibold text-gray-900 w-[16%]">Programa</th>
                <th v-for="columna in COLUMNAS_PRECIO" :key="columna" scope="col" class="p-4 font-semibold text-gray-900">{{ columna }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="fila in FILAS_PRECIO"
                :key="fila.nombre"
                class="block md:table-row border-t border-gray-200 first:border-t-0 md:first:border-t px-5 py-4 md:p-0"
                :class="{ 'bg-primary/5': fila.propia }"
              >
                <th scope="row" class="block md:table-cell md:p-4 align-top text-lg" :class="fila.propia ? 'text-primary font-bold' : 'font-semibold text-gray-900'">{{ fila.nombre }}</th>
                <td v-for="clave in CLAVES_PRECIO" :key="clave" class="block md:table-cell md:p-4 align-top mt-2 md:mt-0 text-gray-700">
                  <span class="md:hidden font-semibold text-gray-900" data-nosnippet>{{ COLUMNAS_PRECIO[clave] }}: </span>
                  <IconoMarca v-if="fila[clave].marca" :tipo="fila[clave].marca" class="mr-1" />{{ fila[clave].texto }}
                </td>
                <td class="block md:table-cell md:p-4 align-top mt-2 md:mt-0 text-gray-700">
                  <span class="md:hidden font-semibold text-gray-900" data-nosnippet>{{ COLUMNAS_PRECIO.notas }}: </span>{{ fila.notas }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- La fecha de la revisión, junto a las tablas: un dato de otra empresa puede cambiar -->
        <p class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-lg text-amber-900 mt-6">
          <svg class="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Revisado el {{ revision }} con la información pública de cada empresa. Puede haber cambiado. «No consta» quiere decir que esa empresa no lo cuenta, y «Sin comprobar», que no hemos podido verlo.</span>
        </p>
      </section>

      <!-- Por qué elegir Hospedy -->
      <section class="bg-primary/5 py-16 mt-20" aria-labelledby="titulo-por-que">
        <div class="max-w-5xl mx-auto px-6">
          <h2 id="titulo-por-que" class="text-3xl font-bold text-center mb-12">Por qué elegir Hospedy</h2>
          <ul class="grid md:grid-cols-2 gap-10">
            <li v-for="motivo in MOTIVOS" :key="motivo.titulo" class="text-center">
              <span class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="motivo.icono"></path>
                </svg>
              </span>
              <h3 class="font-semibold text-xl text-gray-900 mb-2">{{ motivo.titulo }}</h3>
              <p class="text-lg text-gray-600">{{ motivo.texto }}</p>
              <NuxtLink v-if="motivo.enlace" :to="motivo.enlace.ruta" class="inline-block mt-3 text-secondary font-semibold hover:underline underline-offset-4">{{ motivo.enlace.texto }} →</NuxtLink>
            </li>
          </ul>
        </div>
      </section>

      <!-- Más comparativas, en el blog -->
      <section class="max-w-5xl mx-auto px-6 mt-20" aria-labelledby="titulo-mas-comparativas">
        <h2 id="titulo-mas-comparativas" class="text-3xl font-bold text-center mb-8">Más comparativas</h2>
        <ul class="grid md:grid-cols-3 gap-6">
          <li v-for="articulo in COMPARATIVAS" :key="articulo.slug">
            <NuxtLink :to="`/blog/${articulo.slug}`" class="group block h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
              <span class="font-semibold text-gray-900 group-hover:text-secondary">{{ articulo.titulo }}</span>
              <span class="block text-gray-600 mt-2">{{ articulo.extracto }}</span>
            </NuxtLink>
          </li>
        </ul>
        <p class="text-center mt-8">
          <NuxtLink to="/precios" class="btn btn-principal sm:flex-none inline-block px-8 py-3 font-semibold">Ver los precios de Hospedy</NuxtLink>
        </p>
      </section>

      <CtaFinal />

    </div>
  </div>
</template>

<script setup lang="ts">
import { ARTICULOS } from '~/utils/blog'
import { COLUMNAS_PRECIO, FILAS_PRECIO, REVISION_COMPARATIVA } from '~/utils/comparativa'
import { fechaLarga } from '~/utils/fechas'
import { PLANES } from '~/utils/precios'

useSeoPagina({
  titulo: 'Comparativa de PMS: IA, precios y normativa',
  descripcion: 'Hospedy frente a Avirato, Cloudbeds, Mews, Amenitiz, AvaiBook y otros PMS: qué hace su IA, cuánto cuestan y cómo envían los partes y la encuesta del INE.',
})

const revision = fechaLarga(REVISION_COMPARATIVA)

// las columnas con marca; la última es solo texto
const CLAVES_PRECIO = ['precio', 'partes', 'ine'] as const

// Iconos de 24 × 24 con trazo (como los de Heroicons)
const MOTIVOS = [
  {
    titulo: 'Hugo hace el trabajo, no solo contesta',
    texto: 'Cambia precios y cierres de muchos días en una frase, y arregla reservas, huéspedes, partes y facturas. Te lo prepara y se aplica cuando tú lo confirmas.',
    icono: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    enlace: { texto: 'Conoce a Hugo', ruta: '/funciones/hugo' },
  },
  {
    titulo: 'La IA y la normativa, juntas',
    texto: 'Si el registro rechaza un parte, Hugo te dice por qué, corrige el dato y lo vuelve a enviar cuando le das el sí. Los partes salen solos y la encuesta del INE se envía desde Hospedy.',
    icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    enlace: { texto: 'Ver los partes de viajeros', ruta: '/funciones/partes-viajeros' },
  },
  {
    titulo: 'Precio público, con todo dentro',
    texto: `Desde ${PLANES[0].mensual} €/mes, con Hugo, el channel manager, el motor de reservas y Zenfisk incluidos. Todas las funciones en todos los planes: pagas según el tamaño de tu alojamiento.`,
    icono: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    enlace: { texto: 'Ver los precios', ruta: '/precios' },
  },
  {
    titulo: 'Hugo funciona en nuestros servidores',
    texto: 'En servidores propios de Hospedy, los mismos en los que se guardan tus datos. Los documentos y teléfonos de tus huéspedes los enseña tapados en parte, y cada cambio que confirmas queda en el registro de actividad.',
    icono: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
  },
]

// los artículos del blog que comparan PMS
const COMPARATIVAS = ['pms-con-inteligencia-artificial', 'mejores-pms-casas-rurales', 'hospedy-vs-ruralgest']
  .map(slug => ARTICULOS.find(articulo => articulo.slug === slug))
  .filter((articulo): articulo is NonNullable<typeof articulo> => Boolean(articulo))
</script>
