<template>
  <!-- "¡Prueba Hospedy en 5 minutos!": las tres formas de probar Hospedy. Lo abre cualquier
       PruebaHospedyButton; vive una sola vez en el layout. Se cierra con la X, con Escape o
       pulsando fuera. -->
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="abierto" class="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/50" @click="cerrar"></div>

        <div
          ref="panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="prueba-hospedy-titulo"
          tabindex="-1"
          class="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 lg:p-8 outline-none"
        >
          <button
            type="button"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
            @click="cerrar"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <h2 id="prueba-hospedy-titulo" class="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-2 pr-6">
            ¿Cómo quieres probar Hospedy?
          </h2>
          <p class="text-lg text-gray-600 text-center mb-6">
            Elige lo que mejor te encaje. Sin tarjeta de crédito y sin compromiso.
          </p>

          <!-- flex-none en los botones: .btn trae flex 1 1 auto y en una tarjeta en columna se estira -->
          <div class="grid gap-4 md:grid-cols-3">
            <!-- Demo asistida: el formulario de /demo, que llega al equipo por email -->
            <div class="border border-gray-200 rounded-xl p-5 flex flex-col">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Demo asistida</h3>
              <p class="text-gray-600 mb-4 flex-1">
                Una persona del equipo te enseña Hospedy y te va resolviendo las dudas mientras lo ves.
              </p>
              <NuxtLink to="/demo" class="btn btn-outline flex-none text-center" @click="cerrar">Pedir demo asistida</NuxtLink>
            </div>

            <!-- Cuenta de demo: cuestionario corto y entorno de pruebas con datos ficticios -->
            <div class="border border-gray-200 rounded-xl p-5 flex flex-col">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Cuenta de demo
                <span v-if="!demoLista" class="ml-1 align-middle inline-block bg-gold/20 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded-full">Muy pronto</span>
              </h3>
              <p class="text-gray-600 mb-4 flex-1">
                Responde un breve cuestionario y te preparamos un entorno de pruebas parecido a tu alojamiento, con datos ficticios, para que lo pruebes a tu aire.
              </p>
              <NuxtLink to="/cuenta-demo" class="btn btn-outline flex-none text-center" @click="cerrar">Quiero mi cuenta de demo</NuxtLink>
            </div>

            <!-- Cuenta propia: el registro de la app, con el código de amigo si lo hay -->
            <div class="border-2 border-primary rounded-xl p-5 flex flex-col bg-primary/5">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Crear mi cuenta</h3>
              <p class="text-gray-600 mb-4 flex-1">
                ¿Ya lo has probado y lo tienes claro? Crea tu cuenta y nuestro asistente de configuración te ayuda a dejarlo todo listo, como en la demo, en menos de 15 minutos.
              </p>
              <a :href="appUrl('/register')" class="btn btn-grad flex-none text-center" title="Crea tu cuenta de Hospedy y empieza la prueba gratis">Crear mi cuenta</a>
              <p class="text-sm text-gray-500 text-center mt-2">30 días gratis</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { abierto, demoLista, cerrar } = usePruebaHospedy()
const { appUrl } = useReferral()
const panel = ref<HTMLElement | null>(null)
let foco: HTMLElement | null = null

function alTeclear(e: KeyboardEvent) {
  if (e.key === 'Escape') cerrar()
}

// Al abrir, el foco pasa al modal (lectores de pantalla y teclado) y vuelve al botón al cerrar
watch(abierto, async (visible) => {
  if (!import.meta.client) return
  if (visible) {
    foco = document.activeElement as HTMLElement | null
    document.addEventListener('keydown', alTeclear)
    await nextTick()
    panel.value?.focus()
  } else {
    document.removeEventListener('keydown', alTeclear)
    foco?.focus?.()
    foco = null
  }
})

// Cambiar de página con el modal abierto (enlaces de dentro o atrás del navegador) lo cierra
const route = useRoute()
watch(() => route.fullPath, () => cerrar())

onBeforeUnmount(() => {
  if (import.meta.client) document.removeEventListener('keydown', alTeclear)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
