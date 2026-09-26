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
          title="cuenta de Facebook de Hospedy"
          target="_blank"
          aria-label="Facebook"
        >
          <img
            class="bg-white rounded-md"
            width="50px"
            src="/facebook.svg"
            alt="cuenta de Facebook de Hospedy"
          />
        </a>
        <a
          href="https://www.instagram.com/ridid.me/"
          class="mx-4 p-2.5"
          title="cuenta de Instagram de Hospedy"
          aria-label="Instagram"
          target="_blank"
        >
          <img
            class="bg-white rounded-sm"
            width="50px"
            src="/instagram.svg"
            alt="cuenta de Instagram de Hospedy"
          />
        </a>
        <a
          title="Envíanos un mensaje por WhatsApp"
          target="_blank"
          href="https://wa.me/376619224"
          class="mx-4 p-2"
        >
          <img
            class=""
            width="60px"
            src="/whatsapp.svg"
            alt="cuenta de WhatsApp de Hospedy"
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
    <!-- Form section (right): llega a la Bandeja del admin panel (useSolicitudWeb) -->
    <div>
      <div class="grid lg:grid-cols-2">
        <div class="lg:mr-4">
          <label for="contacto-nombre" class="block text-primary text-xl my-4">Nombre</label>
          <input
            id="contacto-nombre"
            v-model="name"
            type="text"
            maxlength="100"
            autocomplete="name"
            class="form-input"
          />
        </div>
        <div class="">
          <label for="contacto-email" class="block text-primary text-xl my-4">Email</label>
          <input
            id="contacto-email"
            v-model="email"
            type="email"
            maxlength="254"
            autocomplete="email"
            class="form-input"
          />
        </div>
      </div>
      <label for="contacto-mensaje" class="block text-primary text-xl my-4">Mensaje</label>
      <textarea
        id="contacto-mensaje"
        v-model="message"
        cols="10"
        rows="4"
        maxlength="3000"
        class="form-input"
      ></textarea>

      <label class="flex items-start gap-2 mt-4 text-lg text-gray-600">
        <input v-model="quiere_novedades" type="checkbox" class="checkbox mt-1" />
        <span
          >Quiero recibir por email novedades de Hospedy (puedo darme de baja
          cuando quiera).</span
        >
      </label>

      <!-- Trampa antispam: los robots rellenan todos los campos; una persona ni lo ve ni llega a
           él con el tabulador. Si llega relleno, el panel responde que todo ha ido bien y no
           hace nada. -->
      <div class="campo-trampa" aria-hidden="true">
        <label for="contacto-asunto">Deja este campo vacío</label>
        <input
          id="contacto-asunto"
          v-model="trampa"
          type="text"
          name="asunto"
          tabindex="-1"
          autocomplete="off"
        />
      </div>

      <div class="text-center my-6" v-if="!message_sent">
        <AvisoFormularioNoDisponible v-if="!disponible" class="mb-4" />
        <template v-else>
          <div ref="turnstileEl" class="flex justify-center mb-4"></div>
          <p v-if="captchaError" class="text-red-600 mb-4">
            No se ha podido cargar la verificación antispam. Recarga la página e
            inténtalo de nuevo.
          </p>
        </template>
        <p v-if="errorEnvio" class="text-red-600 mb-4" role="alert">
          {{ errorEnvio }}
        </p>
        <button
          type="button"
          class="btn bg-gradient-to-r from-secondary to-primary text-white font-bold disabled:opacity-60 disabled:cursor-not-allowed"
          :disabled="sending_form || !disponible"
          @click="enviar"
        >
          {{ sending_form ? "Enviando..." : "Enviar" }}
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
      <!-- Éxito: el texto que devuelve el panel -->
      <p v-else ref="bloqueExito" class="text-xl text-primary text-center my-6">
        {{ mensajeExito }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast, POSITION, TYPE } from "vue-toastification/dist/index.mjs";
const route = useRoute();
const {
  disponible: panelDisponible,
  emailValido,
  enviarSolicitud,
} = useSolicitudWeb();
const name = ref("");
const email = ref("");
const message = ref("");
const sending_form = ref(false);
const quiere_novedades = ref(false);
const trampa = ref("");
const message_sent = ref(false);
const mensajeExito = ref("");
const bloqueExito = ref<HTMLElement | null>(null);
const errorEnvio = ref("");
const showEmail = ref(false);
const toast = useToast();

const turnstileEl = ref<HTMLElement | null>(null);
const {
  token: captchaToken,
  error: captchaError,
  disponible: captchaDisponible,
  render: renderCaptcha,
  reset: resetCaptcha,
  remove: removeCaptcha,
} = useTurnstile("contacto");
// Sin sitekey o sin la dirección del panel, el formulario no se puede enviar: se da el correo
const disponible = captchaDisponible && panelDisponible;

onMounted(() => {
  if (disponible && turnstileEl.value) renderCaptcha(turnstileEl.value);
});

function aviso(texto: string, tipo: TYPE) {
  toast(texto, { position: POSITION.TOP_CENTER, type: tipo, timeout: 3000 });
}

async function enviar() {
  errorEnvio.value = "";
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    aviso("Rellena nombre, email y mensaje", TYPE.ERROR);
    return;
  }
  if (!emailValido(email.value)) {
    aviso("Escribe un email válido", TYPE.ERROR);
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
  try {
    mensajeExito.value = await enviarSolicitud({
      tipo: "contacto",
      nombre: name.value,
      email: email.value,
      mensaje: message.value,
      novedades: quiere_novedades.value,
      pagina: route.path,
      captcha_token: captchaToken.value,
      web: trampa.value,
    });
    removeCaptcha();
    message_sent.value = true;
    aviso("Mensaje enviado correctamente", TYPE.SUCCESS);
    // El mensaje de éxito sustituye al formulario: se lleva a la vista
    await nextTick();
    bloqueExito.value?.scrollIntoView({ behavior: "smooth", block: "center" });
  } catch (e: unknown) {
    // El texto ya viene listo para enseñar: el del panel o el que invita a escribirnos
    errorEnvio.value = (e as Error).message;
    // El token es de un solo uso: tras cualquier error del envío hay que pedir otro al widget.
    resetCaptcha();
  } finally {
    sending_form.value = false;
  }
}
</script>
