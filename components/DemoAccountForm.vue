<template>
  <!-- Cuestionario de la cuenta de demo (demo bajo demanda): con él, el admin panel prepara un
       entorno de pruebas parecido al alojamiento, con datos ficticios, y envía el enlace por
       email. Sin NUXT_PUBLIC_DEMO_ENABLED=true o sin NUXT_PUBLIC_PANEL_API_BASE (la demo aún no
       está montada) enseña las otras dos formas de probar Hospedy. Portado del DemoRequestForm de
       la landing de RidID. -->
  <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
    <div v-if="!demoLista" class="text-center py-4">
      <h2 class="text-xl font-semibold text-gray-900 mb-2">La cuenta de demo estará disponible muy pronto</h2>
      <p class="text-gray-600 mb-6">
        Mientras tanto, pide una demo asistida con una persona del equipo o crea tu cuenta: el asistente de
        configuración te ayuda a dejarlo todo listo en menos de 15 minutos.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/demo" class="btn btn-outline">Pedir demo asistida</NuxtLink>
        <a :href="appUrl('/register')" class="btn btn-grad" title="Crea tu cuenta de Hospedy y empieza la prueba gratis">Crear mi cuenta</a>
      </div>
    </div>

    <div v-else-if="enviado" class="text-center py-8">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h2 class="text-xl font-semibold text-gray-900 mb-2">¡Solicitud recibida!</h2>
      <p class="text-gray-600">
        En unos minutos te llegará un email con el enlace a tu cuenta de demo, con datos de ejemplo adaptados a tu
        alojamiento.
      </p>
    </div>

    <div v-else class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-900 mb-2">Cuéntanos cómo es tu alojamiento</h2>
      <div class="grid lg:grid-cols-2 gap-4">
        <div>
          <label for="demo-email" class="block text-lg font-medium text-gray-700 mb-1">Email *</label>
          <input id="demo-email" v-model="email" type="email" class="form-input" placeholder="tu@email.com">
        </div>
        <div>
          <label for="demo-nombre" class="block text-lg font-medium text-gray-700 mb-1">Nombre del alojamiento</label>
          <input id="demo-nombre" v-model="nombre" type="text" class="form-input" maxlength="100" placeholder="Como quieras que salga en la demo">
        </div>
        <div>
          <label for="demo-tipo" class="block text-lg font-medium text-gray-700 mb-1">Tipo de alojamiento</label>
          <select id="demo-tipo" v-model="arquetipo" class="form-input">
            <option value="hotel">Hotel</option>
            <option value="apartamentos">Apartamentos turísticos</option>
            <option value="hostal">Hostal o pensión</option>
            <option value="casa_rural">Casa rural</option>
          </select>
        </div>
        <div>
          <label for="demo-unidades" class="block text-lg font-medium text-gray-700 mb-1">Habitaciones o apartamentos</label>
          <input id="demo-unidades" v-model.number="unidades" type="number" min="1" max="60" class="form-input">
        </div>
        <div>
          <label for="demo-entorno" class="block text-lg font-medium text-gray-700 mb-1">Entorno</label>
          <select id="demo-entorno" v-model="temporada" class="form-input">
            <option value="urbano">Ciudad</option>
            <option value="playa">Playa</option>
            <option value="montana">Montaña</option>
            <option value="rural">Rural</option>
          </select>
        </div>
        <div>
          <label for="demo-regimen" class="block text-lg font-medium text-gray-700 mb-1">Régimen habitual</label>
          <select id="demo-regimen" v-model="regimen" class="form-input">
            <option value="solo_alojamiento">Solo alojamiento</option>
            <option value="desayuno">Alojamiento y desayuno</option>
            <option value="media_pension">Media pensión</option>
            <option value="pension_completa">Pensión completa</option>
          </select>
        </div>
      </div>

      <div class="flex items-start gap-2">
        <input id="demo-consentimiento" v-model="consentimiento" type="checkbox" class="checkbox mt-1">
        <label for="demo-consentimiento" class="text-lg text-gray-600">
          He leído la <NuxtLink to="/privacidad" class="text-primary hover:underline">política de privacidad</NuxtLink>
          y acepto que tratéis mis datos para preparar la demo, ver cómo la uso y contactarme sobre ella. *
        </label>
      </div>

      <AvisoFormularioNoDisponible v-if="!captchaDisponible" />
      <template v-else>
        <div ref="turnstileEl" class="flex justify-center"></div>
        <p v-if="captchaError" class="text-red-600">
          No se ha podido cargar la verificación antispam. Recarga la página e inténtalo de nuevo.
        </p>
      </template>

      <button
        :disabled="enviando || !captchaDisponible"
        class="w-full btn btn-grad py-3 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
        @click="solicitar"
      >
        {{ enviando ? 'Preparando...' : 'Quiero mi cuenta de demo' }}
      </button>

      <p class="text-sm text-gray-500">
        La demo es un entorno de pruebas con datos ficticios: los envíos a organismos van contra sus entornos de
        pruebas y la cuenta caduca a los pocos días.
      </p>
      <p class="text-sm text-gray-500">
        Responsable: Silatek, S.L.U. (Hospedy). Finalidad: preparar tu cuenta de demo, enviarte el enlace, ver cómo la
        usas para mejorarla y contactarte sobre ella. Legitimación: tu consentimiento. Destinatarios: los proveedores de
        red, seguridad y correo que los tratan por nuestra cuenta; no cedemos tus datos salvo obligación legal.
        Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad en hola@hospedy.app; puedes
        reclamar ante la APDA o la AEPD. Más información en la
        <NuxtLink to="/privacidad" class="text-primary hover:underline">política de privacidad</NuxtLink>. Este formulario
        usa Cloudflare Turnstile contra el spam.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast, POSITION, TYPE } from 'vue-toastification/dist/index.mjs'

// El cuestionario va al admin panel; solo se enseña con la demo activada y el panel configurado
const panelApiBase = usePanelApiBase()
const { demoLista } = usePruebaHospedy()
const { appUrl } = useReferral()
const toast = useToast()

const email = ref('')
const nombre = ref('')
const arquetipo = ref('hotel')
const unidades = ref(12)
const temporada = ref('urbano')
const regimen = ref('solo_alojamiento')
const consentimiento = ref(false)
const enviando = ref(false)
const enviado = ref(false)

// La sitekey sale de la configuración pública (NUXT_PUBLIC_TURNSTILE_SITE_KEY); el token lo
// comprueba el admin panel. Sin sitekey no hay widget y el formulario da el correo.
const turnstileEl = ref<HTMLElement | null>(null)
const { token: captchaToken, error: captchaError, disponible: captchaDisponible, render: renderCaptcha, reset: resetCaptcha, remove: removeCaptcha } = useTurnstile('demo')

onMounted(() => {
  if (demoLista.value && turnstileEl.value) renderCaptcha(turnstileEl.value)
})

function aviso(mensaje: string, tipo: TYPE = TYPE.ERROR) {
  toast(mensaje, { position: POSITION.TOP_CENTER, type: tipo, timeout: 3000 })
}

async function solicitar() {
  if (!email.value || email.value.indexOf('@') < 1) {
    aviso('Escribe un email válido')
    return
  }
  if (!consentimiento.value) {
    aviso('Para preparar la demo tienes que aceptar la política de privacidad')
    return
  }
  if (!captchaToken.value) {
    aviso('Espera a que termine la comprobación antispam e inténtalo de nuevo')
    return
  }
  enviando.value = true
  try {
    await $fetch(`${panelApiBase}/api/demo/request`, {
      method: 'POST',
      body: {
        email: email.value.trim(),
        nombre_alojamiento: nombre.value.trim() || 'Mi alojamiento',
        arquetipo: arquetipo.value,
        unidades: Math.min(Math.max(Number(unidades.value) || 1, 1), 60),
        temporada: temporada.value,
        regimen: regimen.value,
        captcha_token: captchaToken.value,
        consentimiento: consentimiento.value,
      },
    })
    removeCaptcha()
    enviado.value = true
  } catch (e: any) {
    aviso(String(e?.data?.detail || 'No se ha podido registrar la solicitud. Inténtalo de nuevo.'))
    // El token es de un solo uso: si el envío falla, hay que reponer el widget.
    resetCaptcha()
  } finally {
    enviando.value = false
  }
}
</script>
