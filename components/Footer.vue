<template>
  <!-- El mapa de la web: todas las funciones, los tipos de alojamiento, los recursos, la empresa y lo legal, de
       utils/navegacion.ts. Texto blanco sobre el teal secundario (#0F766E, 5,5:1). -->
  <footer class="pie mt-16 bg-secondary text-white">
    <div class="max-w-6xl mx-auto px-6 pt-14 pb-8">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <nav aria-labelledby="pie-funciones">
          <p id="pie-funciones" class="pie-titulo">Funciones</p>
          <ul class="space-y-2">
            <li v-for="funcion in TODAS_LAS_FUNCIONES" :key="funcion.ruta">
              <NuxtLink :to="funcion.ruta" class="pie-enlace">{{ nombreCorto(funcion.nombre) }}</NuxtLink>
            </li>
            <li><NuxtLink :to="INDICE_FUNCIONES.ruta" class="pie-enlace font-semibold">Todas las funciones →</NuxtLink></li>
          </ul>
        </nav>
        <nav aria-labelledby="pie-para-quien">
          <p id="pie-para-quien" class="pie-titulo">Para quién</p>
          <ul class="space-y-2">
            <li v-for="tipo in PARA_QUIEN" :key="tipo.ruta"><NuxtLink :to="tipo.ruta" class="pie-enlace">{{ tipo.nombre }}</NuxtLink></li>
          </ul>
        </nav>
        <nav aria-labelledby="pie-recursos">
          <p id="pie-recursos" class="pie-titulo">Recursos</p>
          <ul class="space-y-2">
            <li v-for="recurso in RECURSOS" :key="recurso.ruta"><NuxtLink :to="recurso.ruta" class="pie-enlace">{{ recurso.nombre }}</NuxtLink></li>
          </ul>
        </nav>
        <nav aria-labelledby="pie-hospedy">
          <p id="pie-hospedy" class="pie-titulo">Hospedy</p>
          <ul class="space-y-2">
            <li v-for="pagina in EMPRESA" :key="pagina.ruta"><NuxtLink :to="pagina.ruta" class="pie-enlace">{{ pagina.nombre }}</NuxtLink></li>
            <li><a :href="appUrl('/')" class="pie-enlace">Iniciar sesión</a></li>
          </ul>
        </nav>
        <nav aria-labelledby="pie-legal">
          <p id="pie-legal" class="pie-titulo">Legal</p>
          <ul class="space-y-2">
            <li v-for="pagina in LEGAL" :key="pagina.ruta"><NuxtLink :to="pagina.ruta" class="pie-enlace">{{ pagina.nombre }}</NuxtLink></li>
          </ul>
        </nav>
      </div>

      <div class="mt-12 pt-8 border-t border-white/20 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a :href="`mailto:${CONTACTO.email}`" class="pie-enlace inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            {{ CONTACTO.email }}
          </a>
          <a :href="CONTACTO.whatsapp" target="_blank" rel="noopener" class="pie-enlace inline-flex items-center gap-2">
            <img src="/whatsapp.svg" width="22" height="22" alt="" />
            WhatsApp
          </a>
          <span class="flex items-center gap-3">
            <a href="https://www.facebook.com/Ridid-122157706306005/" target="_blank" rel="noopener" title="Facebook de Hospedy" class="block">
              <img class="bg-white rounded-md" width="30" height="30" src="/facebook.svg" alt="Facebook de Hospedy" />
            </a>
            <a href="https://www.instagram.com/ridid.me/" target="_blank" rel="noopener" title="Instagram de Hospedy" class="block">
              <img class="bg-white rounded-md" width="30" height="30" src="/instagram.svg" alt="Instagram de Hospedy" />
            </a>
            <a href="https://www.youtube.com/@ridid-gestionhostelera8053" target="_blank" rel="noopener" title="YouTube de Hospedy" class="block">
              <img width="52" height="30" src="/youtube.svg" alt="YouTube de Hospedy" />
            </a>
          </span>
        </div>
        <p class="text-white/90 text-center">© {{ anio }} Hospedy es una marca de Silatek, S.L.U.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { CONTACTO } from '~/utils/sitio'
import { EMPRESA, INDICE_FUNCIONES, LEGAL, PARA_QUIEN, RECURSOS, TODAS_LAS_FUNCIONES } from '~/utils/navegacion'

const { appUrl } = useReferral()
const anio = new Date().getFullYear()

// En el pie, sin la coletilla: «Hugo, tu asistente con IA» se queda en «Hugo, asistente con IA»
function nombreCorto(nombre: string) {
  return nombre.replace('Hugo, tu asistente con IA', 'Hugo, asistente con IA')
}
</script>

<style scoped>
.pie-titulo {
  margin-bottom: 1rem;
  font-weight: 700;
  color: #ccfbf1;
  letter-spacing: 0.02em;
}

.pie-enlace {
  color: #ffffff;
  text-underline-offset: 4px;
}

.pie-enlace:hover {
  text-decoration: underline;
}
</style>
