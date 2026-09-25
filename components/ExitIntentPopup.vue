<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="showPopup"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50" @click="closePopup"></div>

        <!-- Popup -->
        <div
          class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 transform transition-all"
        >
          <!-- Close button -->
          <button
            @click="closePopup"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <!-- Content -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mb-2">
              Antes de irte...
            </h2>
            <p class="text-gray-600 mb-6">
              ¿Sabías que puedes crear tu cuenta y probar Hospedy
              <span class="font-semibold text-primary">30 días gratis</span> para ver
              cómo automatiza los partes de viajeros?
            </p>

            <!-- Features reminder -->
            <div class="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <p class="text-lg font-semibold text-gray-700 mb-2">
                Con Hospedy tendrás:
              </p>
              <ul class="space-y-1 text-lg text-gray-600">
                <li class="flex items-center gap-2">
                  <IconoMarca tipo="si" /> Partes de viajeros
                  automáticos
                </li>
                <li class="flex items-center gap-2">
                  <IconoMarca tipo="si" /> Encuestas INE sin
                  esfuerzo
                </li>
                <li class="flex items-center gap-2">
                  <IconoMarca tipo="si" /> Soporte en español L-V
                </li>
              </ul>
            </div>

            <!-- CTAs -->
            <div class="space-y-3">
              <a
                :href="appUrl('/register')"
                class="block w-full btn btn-grad py-3"
                title="Crea tu cuenta de Hospedy y empieza la prueba gratis"
                @click="closePopup"
              >
                Crear mi cuenta
              </a>
              <PruebaHospedyButton
                class="block w-full btn btn-outline py-3"
                @click="closePopup"
              />
            </div>

            <p class="text-xs text-gray-400 mt-4">
              Sin tarjeta de crédito. Sin compromiso.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const showPopup = ref(false);
const hasShownPopup = useState("exitPopupShown", () => false);
const { appUrl } = useReferral();

onMounted(() => {
  // Ya se ha mostrado en esta visita: estado en memoria, sin escribir nada en el navegador.
  if (hasShownPopup.value) return;

  // Only show on desktop (exit intent doesn't work well on mobile)
  if (window.innerWidth < 1024) return;

  // Detect exit intent
  const handleMouseLeave = (e: MouseEvent) => {
    // Check if mouse is leaving through the top of the page
    if (e.clientY <= 0 && !hasShownPopup.value) {
      showPopup.value = true;
      hasShownPopup.value = true;
      document.removeEventListener("mouseleave", handleMouseLeave);
    }
  };

  // Wait a bit before enabling exit intent (don't show immediately)
  setTimeout(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
  }, 5000); // Wait 5 seconds before enabling
});

function closePopup() {
  showPopup.value = false;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
