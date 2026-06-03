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
          title="Envíanos un mesaje por whatsapp"
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
          href="mailto:info@hospedy.us"
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
          info@hospedy.us
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

      <input
        v-model="terms_accepted"
        type="checkbox"
        class="checkbox mt-4"
        id="privacy_checkbox"
      />
      <span class="text-lg mt-4 ml-2" for="privacy_checkbox"
        >He leído la
        <a href="{{url_for('core.privacyWeb')}}" class="text-primary"
          >política de privacidad</a
        >
        y acepto el tratamiento de mis datos para la resolución de dudas o
        consultas que realice.</span
      >
      <div class="text-center my-6" v-if="message_sent == false">
        <VueRecaptcha
          sitekey="6LfhO_YUAAAAAButNYQA5eCAUwXdL9LzhGmg4Px8"
          :loadRecaptchaScript="true"
          @verify="verifyRecaptcha"
        >
          <button v-if="sending_form == true" class="btn btn-grad disabled">
            Enviando...
          </button>
          <button
            v-else
            class="btn bg-gradient-to-r from-secondary to-primary text-white font-bold"
          >
            Enviar
          </button>
          <!---->
        </VueRecaptcha>
        <p class="mt-4 text-left">
          Responsable del tratamiento: Pyrebytes, S.L..; Finalidad: resolución
          de dudas o consultas planteadas a través del formulario; Legitimación:
          Consentimiento, No se cederán los datos; Tiene derecho a ejercer el
          acceso, rectificación, supresión, portabilidad, limitación, oposición
          o retirada del consentimiento; para más información diríjase a nuestra
          política de privacidad.
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
const terms_accepted = ref(false);
const message_sent = ref(false);
const showEmail = ref(false);
const toast = useToast();

async function verifyRecaptcha(response: String) {
  console.log("miau?");
  if (terms_accepted.value == false) {
    console.log("Terms not accepted");
    toast("Términos y condiciones no aceptados", {
      position: POSITION.TOP_CENTER,
      type: TYPE.ERROR,
      timeout: 3000,
    });

    return "Error";
  }
  sending_form.value = true;
  console.log("response onverify", response);
  try {
    const server_response = await $fetch(
      `${baseURL}/api/contact/send_message`,
      {
        method: "post",
        body: {
          contact_email: email.value,
          name: name.value,
          message: message.value,
          response_recaptcha: response,
        },
      }
    );
    console.log(server_response);
    sending_form.value = false;
    message_sent.value = true;
    toast("Mensaje enviado correctamente", {
      position: POSITION.TOP_CENTER,
      type: TYPE.SUCCESS,
      timeout: 3000,
    });
  } catch (e: unknown) {
    console.log("Error al enviar", e);
    sending_form.value = false;
    toast("Términos y condiciones no aceptados", {
      position: POSITION.TOP_CENTER,
      type: TYPE.ERROR,
      timeout: 3000,
    });
  }
}
</script>
