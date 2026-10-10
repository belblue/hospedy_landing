<template>
  <!-- Preguntas frecuentes de una página. Las respuestas van en el HTML del servidor (un <details> cerrado, no un
       v-if), cada pregunta tiene su ancla (/pagina#id) y la lista lleva su FAQPage con el mismo texto. -->
  <section :aria-labelledby="titulo ? idTitulo : undefined">
    <h2 v-if="titulo" :id="idTitulo" class="text-3xl font-bold text-center text-gray-900 mb-8">{{ titulo }}</h2>
    <div class="space-y-3">
      <details
        v-for="item in items"
        :id="item.id"
        :key="item.id"
        class="faq-item group bg-white border border-gray-200 rounded-xl"
      >
        <summary class="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 cursor-pointer list-none">
          <h3 class="font-semibold text-lg text-gray-900">{{ item.pregunta }}</h3>
          <svg class="faq-flecha w-5 h-5 shrink-0 text-secondary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </summary>
        <div class="px-5 sm:px-6 pb-5 text-lg text-gray-700 leading-relaxed">
          <p v-for="(parrafo, i) in item.parrafos" :key="i" :class="{ 'mt-3': i > 0 }">{{ parrafo }}</p>
        </div>
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PreguntaFaq } from '~/utils/contenido'

const props = withDefaults(defineProps<{
  preguntas: PreguntaFaq[]
  titulo?: string
  // false cuando la página junta varias listas en un solo FAQPage
  conEsquema?: boolean
}>(), { titulo: 'Preguntas frecuentes', conEsquema: true })

function ancla(texto: string): string {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60).replace(/-+$/, '')
}

const items = props.preguntas.map(p => ({
  id: p.id || ancla(p.pregunta),
  pregunta: p.pregunta,
  parrafos: p.respuesta.split(/\n\s*\n/).map(t => t.trim()).filter(Boolean),
}))
const idTitulo = `faq-${useId()}`

if (props.conEsquema) {
  useEsquema('faq', esquemaPreguntas(props.preguntas.map(p => ({ pregunta: p.pregunta, respuesta: p.respuesta.replace(/\n\s*\n/g, ' ') }))))
}

// Al llegar con el ancla de una pregunta (/faq#id), se abre
function abrirLaDelAncla() {
  const id = decodeURIComponent(window.location.hash.slice(1))
  const pregunta = id ? document.getElementById(id) : null
  if (pregunta instanceof HTMLDetailsElement) pregunta.open = true
}
onMounted(() => {
  abrirLaDelAncla()
  window.addEventListener('hashchange', abrirLaDelAncla)
})
onBeforeUnmount(() => window.removeEventListener('hashchange', abrirLaDelAncla))
</script>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}

.faq-item[open] .faq-flecha {
  transform: rotate(180deg);
}

.faq-item summary:focus-visible {
  outline: 2px solid #0F766E;
  outline-offset: 2px;
  border-radius: 0.75rem;
}
</style>
