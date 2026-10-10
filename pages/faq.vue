<template>
  <div class="pt-24">
    <div class="max-w-6xl mx-auto px-6">
      <MigasDePan :migas="[{ nombre: 'Preguntas frecuentes', ruta: '/faq' }]" />
    </div>

    <section class="max-w-4xl mx-auto px-6 mt-8 text-center">
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h1>
      <p class="text-xl text-gray-600">
        Lo que más nos preguntan antes de empezar con Hospedy. ¿No encuentras tu duda?
        <NuxtLink to="/contacto" class="text-secondary font-semibold underline underline-offset-4">Escríbenos</NuxtLink>.
      </p>
      <nav aria-label="Grupos de preguntas" class="mt-8 flex flex-wrap justify-center gap-2">
        <a
          v-for="grupo in FAQ"
          :key="grupo.titulo"
          :href="`#${idGrupo(grupo.titulo)}`"
          class="px-4 py-2 rounded-full bg-tertiary text-secondary font-semibold hover:bg-teal-200 transition-colors"
        >{{ grupo.titulo }}</a>
      </nav>
    </section>

    <div class="max-w-4xl mx-auto px-6 mt-12 space-y-14">
      <!-- un solo FAQPage para toda la página (abajo): cada grupo, sin el suyo -->
      <FaqLista
        v-for="grupo in FAQ"
        :id="idGrupo(grupo.titulo)"
        :key="grupo.titulo"
        :titulo="grupo.titulo"
        :preguntas="grupo.preguntas"
        :con-esquema="false"
      />
    </div>

    <div class="max-w-5xl mx-auto px-6 mt-16">
      <MensajePlanes con-enlace />
    </div>

    <CtaFinal />
  </div>
</template>

<script setup lang="ts">
import { FAQ } from '~/utils/faq'

useSeoPagina({
  titulo: 'Preguntas frecuentes',
  descripcion: 'Respuestas sobre Hospedy: la prueba gratis, los planes, tus datos, los partes de viajeros, la encuesta del INE, las agencias y el soporte.',
})
useEsquema('faq', esquemaPreguntas(FAQ.flatMap(grupo => grupo.preguntas).map(p => ({
  pregunta: p.pregunta,
  respuesta: p.respuesta.replace(/\n\s*\n/g, ' '),
}))))

function idGrupo(titulo: string) {
  return titulo.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}
</script>
