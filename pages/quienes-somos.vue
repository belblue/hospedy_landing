<template>
  <div class="pt-24">
    <div class="max-w-6xl mx-auto px-6">
      <MigasDePan :migas="[{ nombre: 'Quiénes somos', ruta: '/quienes-somos' }]" />
    </div>

    <article class="max-w-3xl mx-auto px-6 mt-8">
      <p class="text-secondary font-semibold text-lg mb-3">Quiénes somos</p>
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Hacemos Hospedy escuchando a quien lo usa</h1>

      <div class="space-y-6 text-xl text-gray-700 leading-relaxed">
        <p>
          Somos un equipo pequeño y nos gusta así: decidimos rápido, probamos cosas nuevas y lo que funciona llega pronto
          a tu panel. Nos apasiona la tecnología, pero solo la que te quita trabajo de verdad.
        </p>
        <p>
          Hospedy nace del día a día de hoteles, casas rurales y apartamentos. Muchas de sus funciones empezaron como la
          petición de alguien que gestiona un alojamiento: el parte que hay que enviar, la reserva que no cabe, la
          encuesta del INE de cada mes. Seguimos trabajando así, cerca de quien usa Hospedy, y lo que nos cuentas acaba
          convertido en mejoras.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 pt-4">Tus datos son tuyos</h2>
        <p>
          No vendemos tus datos ni los de tus huéspedes, ni los usamos para nada que no sea darte el servicio. Solo salen
          de Hospedy cuando la ley lo exige, como los partes de viajeros o las encuestas del INE, o cuando un proveedor
          que trabaja para nosotros los necesita para darte el servicio, como la pasarela de pagos o la conexión con las
          agencias si las activas. Siempre lo imprescindible, y con todo el detalle en nuestra
          <NuxtLink to="/privacidad" class="text-secondary font-semibold underline underline-offset-4">política de privacidad</NuxtLink>.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 pt-4">Qué es Hospedy</h2>
        <p>{{ DEFINICION }}</p>
        <p>
          <NuxtLink to="/funciones" class="text-secondary font-semibold underline underline-offset-4">Ver todas las funciones</NuxtLink>
          ·
          <NuxtLink to="/precios" class="text-secondary font-semibold underline underline-offset-4">Ver los precios</NuxtLink>
        </p>
      </div>
    </article>

    <CtaFinal titulo="¿Hablamos?" texto="Pruébalo 30 días gratis, pide una demo o escríbenos." />
  </div>
</template>

<script setup lang="ts">
import { DEFINICION } from '~/utils/sitio'

const DESCRIPCION = 'Somos un equipo pequeño que hace Hospedy escuchando a quien gestiona hoteles, casas rurales y apartamentos. Y tus datos son tuyos: no los vendemos.'

useSeoPagina({
  titulo: 'Quiénes somos',
  descripcion: DESCRIPCION,
})
useEsquema('pagina', esquemaPagina('AboutPage', { nombre: 'Quiénes somos', descripcion: DESCRIPCION, ruta: '/quienes-somos' }))
</script>
