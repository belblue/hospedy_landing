<template>
  <!-- Entre 1024 y 1279 px la barra va justa: el WhatsApp sale desde 1280 (está también en Contacto y en el pie) y el
       botón dice solo «Prueba gratis».
       La barra responde a lo que busca quien llega: qué hace (Funciones), si sirve para su alojamiento (Para quién),
       cuánto cuesta, dónde están las dudas (Recursos), cómo hablar con alguien y cómo empezar. Lleva a páginas, nunca
       a anclas de la portada. Los desplegables van siempre en el HTML del servidor (v-show): los buscadores ven todos
       los enlaces. Se esconde al bajar, pasada la primera pantalla, y vuelve al subir. -->
  <header
    :class="[
      'fixed top-0 inset-x-0 z-10 bg-white/90 backdrop-blur-md shadow-sm transition-transform duration-300',
      oculta ? '-translate-y-full' : 'translate-y-0',
    ]"
    @keydown.esc="cerrarConEscape"
  >
    <div class="max-w-7xl mx-auto h-16 px-4 lg:px-6 flex items-center gap-2">
      <NuxtLink to="/" class="shrink-0 mr-2 xl:mr-4" title="Hospedy, ir a la portada">
        <img src="/logo.svg" width="130" height="35" alt="Hospedy" class="hidden lg:block w-[130px] h-auto" />
        <img src="/logor.svg" width="32" height="36" alt="Hospedy" class="lg:hidden w-8 h-auto" />
      </NuxtLink>

      <!-- Escritorio -->
      <nav ref="navEscritorio" aria-label="Principal" class="hidden lg:block" @focusout="alSalirElFoco">
        <ul class="flex items-center gap-0.5 xl:gap-1">
          <!-- static: el menú grande se coloca respecto a la barra entera, no respecto al botón -->
          <li class="static" @mouseenter="abrirConRaton('funciones')" @mouseleave="cerrarConRaton('funciones')">
            <button
              id="boton-funciones"
              type="button"
              class="boton-menu"
              :class="{ 'boton-menu-abierto': abierto === 'funciones', 'boton-menu-actual': seccionActual === 'funciones' }"
              aria-controls="menu-funciones"
              :aria-expanded="abierto === 'funciones'"
              @click="alternar('funciones')"
            >
              Funciones
              <svg class="flecha" :class="{ 'rotate-180': abierto === 'funciones' }" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 7.5L10 12l4.5-4.5" /></svg>
            </button>
            <div v-show="abierto === 'funciones'" id="menu-funciones" class="absolute inset-x-0 top-full pt-2">
              <div class="max-w-6xl mx-auto px-4">
                <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                  <div class="grid grid-cols-4 gap-6">
                    <div v-for="grupo in FUNCIONES" :key="grupo.titulo">
                      <p class="text-sm font-bold uppercase tracking-wide text-secondary mb-2 px-2">{{ grupo.titulo }}</p>
                      <ul>
                        <li v-for="funcion in grupo.items" :key="funcion.ruta">
                          <NuxtLink :to="funcion.ruta" class="opcion-menu">
                            <span class="font-semibold text-gray-900">{{ funcion.nombre }}</span>
                            <span class="block text-sm text-gray-600 leading-snug">{{ funcion.descripcion }}</span>
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p class="text-sm font-bold uppercase tracking-wide text-secondary mb-2 px-2">Destacado</p>
                      <NuxtLink :to="DESTACADO.ruta" class="block rounded-xl p-4 bg-amber-50 hover:bg-amber-100 transition-colors">
                        <span class="font-bold text-gray-900">{{ DESTACADO.nombre }}</span>
                        <span class="block text-sm text-gray-700 leading-snug mt-1">{{ DESTACADO.descripcion }}</span>
                        <span class="block text-sm font-semibold text-secondary mt-3">Conoce a Hugo →</span>
                      </NuxtLink>
                    </div>
                  </div>
                  <div class="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-4 px-2">
                    <NuxtLink :to="INDICE_FUNCIONES.ruta" class="font-semibold text-secondary hover:underline underline-offset-4">Ver todas las funciones →</NuxtLink>
                    <span class="text-sm text-gray-600">Todas, en todos los planes</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="relative" @mouseenter="abrirConRaton('para-quien')" @mouseleave="cerrarConRaton('para-quien')">
            <button
              id="boton-para-quien"
              type="button"
              class="boton-menu"
              :class="{ 'boton-menu-abierto': abierto === 'para-quien', 'boton-menu-actual': seccionActual === 'para-quien' }"
              aria-controls="menu-para-quien"
              :aria-expanded="abierto === 'para-quien'"
              @click="alternar('para-quien')"
            >
              Para quién
              <svg class="flecha" :class="{ 'rotate-180': abierto === 'para-quien' }" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 7.5L10 12l4.5-4.5" /></svg>
            </button>
            <div v-show="abierto === 'para-quien'" id="menu-para-quien" class="absolute left-0 top-full pt-2 w-80">
              <ul class="bg-white rounded-2xl shadow-xl border border-gray-100 p-3">
                <li v-for="tipo in PARA_QUIEN" :key="tipo.ruta">
                  <NuxtLink :to="tipo.ruta" class="opcion-menu">
                    <span class="font-semibold text-gray-900">{{ tipo.nombre }}</span>
                    <span class="block text-sm text-gray-600 leading-snug">{{ tipo.descripcion }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NuxtLink to="/precios" class="boton-menu" :class="{ 'boton-menu-actual': seccionActual === 'precios' }">Precios</NuxtLink>
          </li>

          <li class="relative" @mouseenter="abrirConRaton('recursos')" @mouseleave="cerrarConRaton('recursos')">
            <button
              id="boton-recursos"
              type="button"
              class="boton-menu"
              :class="{ 'boton-menu-abierto': abierto === 'recursos', 'boton-menu-actual': seccionActual === 'recursos' }"
              aria-controls="menu-recursos"
              :aria-expanded="abierto === 'recursos'"
              @click="alternar('recursos')"
            >
              Recursos
              <svg class="flecha" :class="{ 'rotate-180': abierto === 'recursos' }" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 7.5L10 12l4.5-4.5" /></svg>
            </button>
            <div v-show="abierto === 'recursos'" id="menu-recursos" class="absolute left-0 top-full pt-2 w-80">
              <ul class="bg-white rounded-2xl shadow-xl border border-gray-100 p-3">
                <li v-for="recurso in RECURSOS" :key="recurso.ruta">
                  <NuxtLink :to="recurso.ruta" class="opcion-menu">
                    <span class="font-semibold text-gray-900">{{ recurso.nombre }}</span>
                    <span class="block text-sm text-gray-600 leading-snug">{{ recurso.descripcion }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NuxtLink to="/contacto" class="boton-menu" :class="{ 'boton-menu-actual': seccionActual === 'contacto' }">Contacto</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="ml-auto flex items-center gap-1 sm:gap-2 xl:gap-3">
        <a
          :href="CONTACTO.whatsapp"
          target="_blank"
          rel="noopener"
          class="hidden xl:block shrink-0 p-1.5 rounded-lg hover:bg-tertiary"
          title="Escríbenos por WhatsApp"
        >
          <img src="/whatsapp.svg" width="26" height="26" alt="WhatsApp de Hospedy" />
        </a>
        <a :href="appUrl('/')" class="hidden lg:inline-block shrink-0 px-2 py-2 text-[17px] text-gray-700 hover:text-secondary whitespace-nowrap">Iniciar sesión</a>
        <a
          :href="appUrl('/register')"
          class="btn btn-principal flex-none text-base font-semibold px-4 py-2 whitespace-nowrap"
          title="Crea tu cuenta de Hospedy y empieza la prueba gratis"
        >Prueba gratis<span class="hidden sm:inline lg:hidden xl:inline"> 30 días</span></a>
        <button
          id="boton-menu-movil"
          type="button"
          class="lg:hidden p-2 -mr-1 rounded-lg hover:bg-tertiary"
          aria-controls="menu-movil"
          :aria-expanded="movilAbierto"
          @click="movilAbierto = !movilAbierto"
        >
          <span class="sr-only">{{ movilAbierto ? 'Cerrar el menú' : 'Abrir el menú' }}</span>
          <svg v-if="!movilAbierto" class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-width="2.2" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-width="2.2" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Móvil: un acordeón con lo mismo que la barra. Por encima de las maquetas de la página (la barra lleva z-10) -->
    <div
      v-show="movilAbierto"
      id="menu-movil"
      class="lg:hidden border-t border-gray-100 bg-white shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
    >
      <nav aria-label="Principal" class="px-4 pt-3 pb-6">
        <a :href="appUrl('/')" class="enlace-movil">Iniciar sesión</a>

        <details class="grupo-movil">
          <summary class="enlace-movil">Funciones <svg class="flecha" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 7.5L10 12l4.5-4.5" /></svg></summary>
          <div class="pl-3 pb-2">
            <div v-for="grupo in FUNCIONES" :key="grupo.titulo" class="mt-2">
              <p class="text-sm font-bold uppercase tracking-wide text-secondary px-3 py-1">{{ grupo.titulo }}</p>
              <NuxtLink v-for="funcion in grupo.items" :key="funcion.ruta" :to="funcion.ruta" class="subenlace-movil">{{ funcion.nombre }}</NuxtLink>
            </div>
            <div class="mt-2">
              <p class="text-sm font-bold uppercase tracking-wide text-secondary px-3 py-1">Destacado</p>
              <NuxtLink :to="DESTACADO.ruta" class="subenlace-movil">{{ DESTACADO.nombre }}</NuxtLink>
            </div>
            <NuxtLink :to="INDICE_FUNCIONES.ruta" class="subenlace-movil font-semibold text-secondary">Ver todas las funciones →</NuxtLink>
          </div>
        </details>

        <details class="grupo-movil">
          <summary class="enlace-movil">Para quién <svg class="flecha" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 7.5L10 12l4.5-4.5" /></svg></summary>
          <div class="pl-3 pb-2">
            <NuxtLink v-for="tipo in PARA_QUIEN" :key="tipo.ruta" :to="tipo.ruta" class="subenlace-movil">{{ tipo.nombre }}</NuxtLink>
          </div>
        </details>

        <NuxtLink to="/precios" class="enlace-movil">Precios</NuxtLink>

        <details class="grupo-movil">
          <summary class="enlace-movil">Recursos <svg class="flecha" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 7.5L10 12l4.5-4.5" /></svg></summary>
          <div class="pl-3 pb-2">
            <NuxtLink v-for="recurso in RECURSOS" :key="recurso.ruta" :to="recurso.ruta" class="subenlace-movil">{{ recurso.nombre }}</NuxtLink>
          </div>
        </details>

        <NuxtLink to="/contacto" class="enlace-movil">Contacto</NuxtLink>

        <a :href="CONTACTO.whatsapp" target="_blank" rel="noopener" class="enlace-movil justify-start gap-3 mt-2">
          <img src="/whatsapp.svg" width="26" height="26" alt="" />
          Escríbenos por WhatsApp
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { CONTACTO } from '~/utils/sitio'
import { DESTACADO, FUNCIONES, INDICE_FUNCIONES, PARA_QUIEN, RECURSOS } from '~/utils/navegacion'

type Menu = 'funciones' | 'para-quien' | 'recursos'

const { appUrl } = useReferral()
const route = useRoute()

const abierto = ref<Menu | null>(null)
const movilAbierto = ref(false)
const oculta = ref(false)
const navEscritorio = ref<HTMLElement | null>(null)

// Abierto al pasar el ratón: se cierra al salir. Abierto con un clic o con el teclado: se queda hasta otro clic,
// Escape, un clic fuera, un cambio de página o el scroll.
let conRaton = false
let temporizador: ReturnType<typeof setTimeout> | null = null

// La sección de la web en la que está el visitante, para marcarla en la barra
const seccionActual = computed(() => {
  const ruta = route.path
  if (ruta.startsWith('/funciones')) return 'funciones'
  if (PARA_QUIEN.some(tipo => tipo.ruta === ruta)) return 'para-quien'
  if (ruta === '/precios') return 'precios'
  if (ruta.startsWith('/blog') || RECURSOS.some(recurso => recurso.ruta === ruta)) return 'recursos'
  if (ruta === '/contacto') return 'contacto'
  return null
})

function cancelarCierre() {
  if (temporizador) clearTimeout(temporizador)
  temporizador = null
}

// Solo con un ratón de verdad: en una tableta, el toque dispara también el mouseenter
function hayRaton() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

function abrirConRaton(menu: Menu) {
  if (!hayRaton()) return
  cancelarCierre()
  if (abierto.value !== menu || conRaton) {
    abierto.value = menu
    conRaton = true
  }
}

function cerrarConRaton(menu: Menu) {
  if (!conRaton) return
  cancelarCierre()
  temporizador = setTimeout(() => {
    if (abierto.value === menu) abierto.value = null
  }, 200)
}

function alternar(menu: Menu) {
  cancelarCierre()
  if (abierto.value === menu && !conRaton) {
    abierto.value = null
  } else {
    abierto.value = menu
  }
  conRaton = false
}

function cerrarConEscape() {
  if (abierto.value) {
    const boton = document.getElementById(`boton-${abierto.value}`)
    abierto.value = null
    boton?.focus()
  } else if (movilAbierto.value) {
    movilAbierto.value = false
    document.getElementById('boton-menu-movil')?.focus()
  }
}

// Con el teclado: si el foco sale de la barra, el desplegable se cierra
function alSalirElFoco(evento: FocusEvent) {
  const destino = evento.relatedTarget as Node | null
  if (!destino || !navEscritorio.value?.contains(destino)) abierto.value = null
}

function alPulsarFuera(evento: PointerEvent) {
  if (abierto.value && navEscritorio.value && !navEscritorio.value.contains(evento.target as Node)) {
    abierto.value = null
  }
}

let ultimoScroll = 0
function alHacerScroll() {
  const y = window.scrollY
  if (abierto.value && Math.abs(y - ultimoScroll) > 4) abierto.value = null
  // pasada la primera pantalla, se esconde al bajar y vuelve al subir; nunca con el menú del móvil abierto
  if (movilAbierto.value || y <= window.innerHeight) oculta.value = false
  else if (y > ultimoScroll) oculta.value = true
  else if (y < ultimoScroll) oculta.value = false
  ultimoScroll = y
}

watch(() => route.fullPath, () => {
  cancelarCierre()
  abierto.value = null
  movilAbierto.value = false
})

onMounted(() => {
  ultimoScroll = window.scrollY
  window.addEventListener('scroll', alHacerScroll, { passive: true })
  document.addEventListener('pointerdown', alPulsarFuera)
})

onBeforeUnmount(() => {
  cancelarCierre()
  window.removeEventListener('scroll', alHacerScroll)
  document.removeEventListener('pointerdown', alPulsarFuera)
})
</script>

<style scoped>
.boton-menu {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 17px;
  color: #1f2937;
  white-space: nowrap;
  transition: background-color 0.15s;
}

@media (min-width: 1280px) {
  .boton-menu {
    padding: 0.5rem 0.75rem;
  }
}

.boton-menu:hover,
.boton-menu-abierto {
  background: #ccfbf1;
}

.boton-menu-actual {
  color: #0f766e;
  font-weight: 700;
}

.flecha {
  width: 1rem;
  height: 1rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.15s;
}

.opcion-menu {
  display: block;
  padding: 0.5rem;
  border-radius: 0.6rem;
  transition: background-color 0.15s;
}

.opcion-menu:hover,
.opcion-menu.router-link-exact-active {
  background: rgba(204, 251, 241, 0.6);
}

.enlace-movil {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.75rem;
  border-radius: 0.6rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: #111827;
  cursor: pointer;
  list-style: none;
}

.enlace-movil:hover {
  background: #f0fdfa;
}

.grupo-movil summary::-webkit-details-marker {
  display: none;
}

.grupo-movil[open] > summary .flecha {
  transform: rotate(180deg);
}

.subenlace-movil {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 1.05rem;
  color: #374151;
}

.subenlace-movil:hover,
.subenlace-movil.router-link-exact-active {
  background: #f0fdfa;
  color: #0f766e;
}
</style>
