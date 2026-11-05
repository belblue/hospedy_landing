<template>
  <div class="pt-24">
    <div class="max-w-6xl mx-auto px-6">
      <MigasDePan :migas="[{ nombre: 'Contacto', ruta: '/contacto' }]" />
    </div>

    <section class="max-w-4xl mx-auto px-6 mt-8 text-center">
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">Contacta con Hospedy</h1>
      <p class="text-xl text-gray-600">
        Escríbenos y te respondemos por email. Si ya usas Hospedy, nuestro soporte te atiende por email y por
        videollamada, de lunes a viernes, y te responde en 24-48 horas.
      </p>
    </section>

    <div class="max-w-6xl mx-auto px-6 mt-12 grid lg:grid-cols-5 gap-10">
      <!-- El formulario: llega a nuestra bandeja (ContactForm, una sola vez por página) -->
      <section class="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8" aria-labelledby="formulario-contacto">
        <h2 id="formulario-contacto" class="text-2xl font-bold text-gray-900">Escríbenos</h2>
        <ContactForm solo-formulario />
      </section>

      <!-- Las otras formas de hablar con nosotros, con la ilustración del contacto encima (desde tablet) -->
      <div class="lg:col-span-2 space-y-5">
        <div class="hidden sm:flex justify-center group" data-aos="fade-up">
          <IlustracionContacto class="block w-64 h-[200px]" />
        </div>
        <section class="bg-gray-50 rounded-2xl p-6" aria-labelledby="contacto-antes">
          <h2 id="contacto-antes" class="text-xl font-bold text-gray-900 mb-2">¿Dudas antes de contratar?</h2>
          <p class="text-lg text-gray-600 mb-4">Pregúntanos lo que quieras por WhatsApp o por email.</p>
          <ul class="space-y-3 text-lg">
            <li>
              <a :href="CONTACTO.whatsapp" target="_blank" rel="noopener" class="inline-flex items-center gap-3 font-semibold text-secondary hover:underline underline-offset-4">
                <img src="/whatsapp.svg" width="28" height="28" alt="" />
                Escríbenos por WhatsApp
              </a>
            </li>
            <li>
              <a :href="`mailto:${CONTACTO.email}`" class="group inline-flex items-center gap-3 font-semibold text-secondary hover:underline underline-offset-4">
                <span class="flex w-7 h-7 shrink-0 rounded-full bg-tertiary items-center justify-center">
                  <IconoContacto class="block w-[22px] h-[22px]" />
                </span>
                {{ CONTACTO.email }}
              </a>
            </li>
          </ul>
        </section>

        <section class="bg-gray-50 rounded-2xl p-6" aria-labelledby="contacto-soporte">
          <h2 id="contacto-soporte" class="text-xl font-bold text-gray-900 mb-2">¿Ya usas Hospedy?</h2>
          <p class="text-lg text-gray-600">
            Soporte por email y por videollamada, con personas que hablan español, de lunes a viernes. Te respondemos
            en 24-48 horas. Desde tu panel también puedes escribirnos en «Ayuda», o preguntarle a Hugo.
          </p>
        </section>

        <section class="bg-gray-50 rounded-2xl p-6" aria-labelledby="contacto-demo">
          <h2 id="contacto-demo" class="text-xl font-bold text-gray-900 mb-2">¿Prefieres verlo antes?</h2>
          <p class="text-lg text-gray-600 mb-4">Te enseñamos Hospedy con tu caso en una videollamada, sin compromiso.</p>
          <NuxtLink to="/demo" class="btn btn-outline sm:flex-none inline-block px-6 py-2">Pedir una demo</NuxtLink>
        </section>
      </div>
    </div>

    <CtaFinal />
  </div>
</template>

<script setup lang="ts">
import { CONTACTO } from '~/utils/sitio'

const DESCRIPCION = 'Escríbenos para resolver tus dudas antes de contratar o pide una demo. Soporte por email y videollamada, de lunes a viernes, con respuesta en 24-48 horas.'

useSeoPagina({
  titulo: 'Contacto y soporte',
  descripcion: DESCRIPCION,
})
useEsquema('pagina', esquemaPagina('ContactPage', { nombre: 'Contacta con Hospedy', descripcion: DESCRIPCION, ruta: '/contacto' }))
</script>
