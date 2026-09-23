<template>
  <div class="grid lg:grid-cols-2 gap-8 items-center">
    <!-- Picture section (left) -->
    <div class="text-center">
      <div class="flex justify-center mb-4">
        <img class="w-1/2" src="/contacto.svg" alt="" />
      </div>
      <div class="flex justify-center mt-4">
        <a
          class="mx-4 p-2.5"
          href="https://www.facebook.com/Ridid-122157706306005/?modal=admin_todo_tour"
          title="cuenta de facebook de Hospedy"
          target="_blank"
          aria-label="facebook"
        >
          <img
            class="bg-white rounded-md"
            width="50px"
            src="/facebook.svg"
            alt="cuenta de facebook Hospedy"
          />
        </a>
        <a
          href="https://www.instagram.com/ridid.me/"
          class="mx-4 p-2.5"
          title="cuenta de instagram de Hospedy"
          aria-label="instagram"
          target="_blank"
        >
          <img
            class="bg-white rounded-sm"
            width="50px"
            src="/instagram.svg"
            alt="cuenta de instagram Hospedy"
          />
        </a>
        <a
          title="Envíanos un mensaje por whatsapp"
          target="_blank"
          href="https://wa.me/376619224"
          class="mx-4 p-2"
        >
          <img
            class=""
            width="60px"
            src="/whatsapp.svg"
            alt="cuenta de whatsapp de Hospedy"
          />
        </a>
      </div>
      <!-- Email reveal button -->
      <div class="mt-6">
        <button
          v-if="!showEmail"
          @click="showEmail = true"
          class="group flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-secondary to-primary hover:opacity-90 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <svg
            class="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <span class="text-white font-semibold">Contáctanos por email</span>
          <svg
            class="w-4 h-4 text-white group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
        <a
          v-else
          href="mailto:hola@hospedy.app"
          class="inline-flex items-center gap-2 text-xl text-primary hover:underline transition-all duration-300"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          hola@hospedy.app
        </a>
      </div>
    </div>
    <!-- Form section (right) -->
    <div>
      <div class="grid lg:grid-cols-2">
        <div class="lg:mr-4">
          <p class="text-primary text-xl my-4">Nombre</p>
          <input type="text" v-model="name" class="form-input" />
        </div>
        <div class="">
          <p class="text-primary text-xl my-4">Email</p>
          <input type="text" v-model="email" class="form-input" />
        </div>
      </div>
      <p class="text-primary text-xl my-4">Mensaje</p>
      <textarea
        v-model="message"
        cols="10"
        rows="4"
        class="form-input"
      ></textarea>

      <label class="flex items-start gap-2 mt-4 text-lg text-gray-600">
        <input v-model="quiere_novedades" type="checkbox" class="checkbox mt-1" />
        <span
          >Quiero recibir por email novedades de Hospedy (puedo darme de baja
          cuando quiera).</span
        >
      </label>
      <div class="text-center my-6" v-if="message_sent == false">
        <div ref="turnstileEl" class="flex justify-center mb-4"></div>
        <p v-if="captchaError" class="text-red-600 mb-4">
          No se ha podido cargar la verificación antispam. Recarga la página e
          inténtalo de nuevo.
        </p>
        <button v-if="sending_form == true" class="btn btn-grad disabled">
          Enviando...
        </button>
        <button
          v-else
          class="btn bg-gradient-to-r from-secondary to-primary text-white font-bold"
          @click="enviar"
        >
          Enviar
        </button>
        <p class="mt-4 text-left">
          Responsable: Silatek, S.L.U. (Hospedy). Finalidad: responder a tu
          consulta. Legitimación: tu solicitud y nuestro interés legítimo en
          atenderla. Destinatarios: los proveedores de red, seguridad y correo
          que los tratan por nuestra cuenta; no cedemos tus datos salvo
          obligación legal. Derechos: acceso,
          rectificación, supresión, oposición, limitación y portabilidad en
          hola@hospedy.app; puedes reclamar ante la APDA o la AEPD. Más
          información en la
          <a href="/privacidad" class="text-primary">política de privacidad</a>.
          Este formulario usa Cloudflare Turnstile contra el spam.
        </p>
      </div>
      <div v-else>Mensaje enviado</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast, POSITION, TYPE } from "vue-toastification/dist/index.mjs";
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;
const name = ref("");
const email = ref("");
const message = ref("");
const sending_form = ref(false);
const quiere_novedades = ref(false);
const message_sent = ref(false);
const showEmail = ref(false);
const toast = useToast();

const turnstileEl = ref<HTMLElement | null>(null);
const {
  token: captchaToken,
  error: captchaError,
  render: renderCaptcha,
  reset: resetCaptcha,
} = useTurnstile("contact");

onMounted(() => {
  if (turnstileEl.value) renderCaptcha(turnstileEl.value);
});

function aviso(texto: string, tipo: TYPE) {
  toast(texto, { position: POSITION.TOP_CENTER, type: tipo, timeout: 3000 });
}

async function enviar() {
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    aviso("Rellena nombre, email y mensaje", TYPE.ERROR);
    return;
  }
  if (!captchaToken.value) {
    aviso(
      "Espera a que termine la comprobación antispam e inténtalo de nuevo",
      TYPE.ERROR
    );
    return;
  }
  sending_form.value = true;
  const texto = quiere_novedades.value
    ? `${message.value}\n\nQuiere recibir novedades de Hospedy por email: sí`
    : message.value;
  try {
    await $fetch(`${baseURL}/api/contact/send_message`, {
      method: "post",
      body: {
        contact_email: email.value,
        name: name.value,
        message: texto,
        captcha_token: captchaToken.value,
      },
    });
    message_sent.value = true;
    aviso("Mensaje enviado correctamente", TYPE.SUCCESS);
  } catch (e: unknown) {
    aviso("No se ha podido enviar el mensaje. Inténtalo de nuevo.", TYPE.ERROR);
  } finally {
    sending_form.value = false;
    resetCaptcha();
  }
}
</script>
