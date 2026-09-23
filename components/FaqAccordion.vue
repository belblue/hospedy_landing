<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl lg:text-5xl font-bold text-primary mb-4">
        Preguntas frecuentes
      </h2>
      <p class="text-xl text-gray-600">
        Todo lo que necesitas saber sobre Hospedy
      </p>
    </div>

    <div class="space-y-4">
      <div
        v-for="(item, index) in faqItems"
        :key="index"
        class="border border-gray-200 rounded-xl overflow-hidden"
      >
        <button
          @click="toggleItem(index)"
          class="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
        >
          <span class="font-semibold text-lg text-gray-900">{{
            item.question
          }}</span>
          <svg
            class="w-5 h-5 text-primary transition-transform duration-200"
            :class="{ 'rotate-180': openItems.includes(index) }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <Transition name="accordion">
          <div v-if="openItems.includes(index)" class="px-6 pb-4">
            <p class="text-gray-600 leading-relaxed">{{ item.answer }}</p>
          </div>
        </Transition>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-10">
      <p class="text-gray-600 mb-4">¿Tienes más preguntas?</p>
      <NuxtLink to="/#contacto" class="text-primary font-semibold hover:underline"
        >Contáctanos →</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const openItems = ref<number[]>([]);

const faqItems = [
  {
    question: "¿Cuáles son los principios de Hospedy?",
    answer:
      "Sin permanencia: Si no estás satisfecho puedes darte de baja en cualquier momento. Sin letra pequeña: Ni subidas de precio sin aviso, ni cargos extras. Asumimos errores: Podemos equivocarnos, pero trabajaremos para solucionarlo. Igualdad: Da igual si tienes un establecimiento grande o pequeño, siempre tendrás el mejor servicio. Flexibilidad: Si tienes una sugerencia que crees que podría mejorar el servicio, háznosla llegar.",
  },
  {
    question: "¿Qué es SES Hospedajes y cómo funciona el envío automático?",
    answer:
      "SES Hospedajes es el sistema del Ministerio del Interior para registrar viajeros. Hospedy genera automáticamente los partes cuando haces el check-in y los envía a la autoridad correspondiente (Policía Nacional, Guardia Civil o Ertzaintza según tu ubicación). Tú solo escaneas el DNI, nosotros nos encargamos del resto.",
  },
  {
    question: "¿Puedo probar Hospedy antes de pagar?",
    answer:
      "Sí, tienes 30 días de prueba gratis con todas las funciones. No necesitas tarjeta de crédito para registrarte. Si después de probar decides que no es para ti, simplemente no continúas. Sin compromisos ni cargos ocultos.",
  },
  {
    question: "¿Qué pasa con mis datos si dejo de usar Hospedy?",
    answer:
      "Tus datos siempre son tuyos. Puedes exportar toda tu información (reservas, facturas, libro de viajeros) en cualquier momento. Si decides darte de baja, te ayudamos con la migración y cumplimos con la normativa RGPD para la eliminación de datos.",
  },
  {
    question: "¿Funciona con Booking, Airbnb y otras OTAs?",
    answer:
      "Sí, nuestro Channel Manager conecta con más de 50 OTAs incluyendo Booking.com, Airbnb, Expedia, Hotels.com y muchas más. Según tu plan, tienes 1-3 OTAs incluidas o ilimitadas (Enterprise). Puedes añadir OTAs extra pagando un suplemento. Las reservas se sincronizan automáticamente evitando overbookings.",
  },
  {
    question: "¿Necesito instalar algo en mi ordenador?",
    answer:
      "No, Hospedy funciona completamente en la nube. Solo necesitas un navegador web y conexión a internet. Puedes acceder desde cualquier dispositivo: ordenador, tablet o móvil. También ofrecemos una PWA que puedes instalar en tu smartphone.",
  },
  {
    question: "¿Qué soporte ofrecéis?",
    answer:
      "Ofrecemos soporte en español por email (respondemos en 24-48 horas) y videollamadas para temas complejos o configuración inicial. Nuestro equipo está formado por personas reales, no bots. Además, tenemos tutoriales en video en nuestro canal de YouTube.",
  },
  {
    question: "¿Cómo se generan las encuestas del INE?",
    answer:
      "Hospedy rellena las encuestas de ocupación del INE con los datos de tus reservas. La de hoteles y la de apartamentos turísticos se envían al INE desde Hospedy con un clic, sin entrar en ARCE; la de turismo rural y la de Castilla y León te las deja listas para descargar y presentar. También genera el documento de admisión que exigen once comunidades autónomas.",
  },
  {
    question: "¿Puedo gestionar varios alojamientos?",
    answer:
      "Sí, puedes gestionar múltiples propiedades desde una sola cuenta. Tu plan se elige según el número total de unidades (1-3, 4-10, 11-25 o 26+). Cada propiedad tiene su propio calendario pero puedes verlos todos desde un mismo panel.",
  },
  {
    question: "¿Cuántas OTAs puedo conectar?",
    answer:
      "Depende de tu plan: Esencial incluye 1 OTA, Profesional incluye 2, Business incluye 3, y Enterprise incluye OTAs ilimitadas. Puedes añadir más OTAs pagando un suplemento.",
  },
];

function toggleItem(index: number) {
  const pos = openItems.value.indexOf(index);
  if (pos > -1) {
    openItems.value.splice(pos, 1);
  } else {
    openItems.value.push(index);
  }
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>
