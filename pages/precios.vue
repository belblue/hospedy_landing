<template>
  <div class="pt-24">
    <div class="max-w-6xl mx-auto px-6">
      <MigasDePan :migas="[{ nombre: 'Precios', ruta: '/precios' }]" />
    </div>

    <!-- Cabecera -->
    <section class="text-center max-w-4xl mx-auto px-6 mt-8">
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Precios claros, sin sorpresas</h1>
      <p class="text-xl text-gray-600 mb-3">
        Desde {{ PLANES[0].mensual }}&nbsp;€/mes sin IVA, según las unidades de tu alojamiento. {{ DIAS_DE_PRUEBA }} días
        gratis, sin tarjeta y sin permanencia.
      </p>
      <p class="text-base text-gray-500">Actualizado: <time :datetime="ACTUALIZADO">{{ mesYAnio(ACTUALIZADO) }}</time></p>
    </section>

    <div class="max-w-5xl mx-auto px-6 mt-10">
      <MensajePlanes />
    </div>

    <!-- Tarjetas: solo cambian por el tamaño, las agencias incluidas y, en el grande, el soporte prioritario -->
    <section class="max-w-6xl mx-auto px-6 mt-12" aria-labelledby="titulo-planes">
      <h2 id="titulo-planes" class="sr-only">Los cuatro planes</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="plan in PLANES"
          :key="plan.nombre"
          class="relative rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow"
          :class="plan.recomendado ? 'bg-secondary text-white' : 'bg-white border border-gray-200'"
        >
          <span v-if="plan.recomendado" class="absolute top-0 right-0 bg-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">Recomendado</span>
          <div class="text-center mb-5">
            <h3 class="text-xl font-bold mb-1" :class="plan.recomendado ? 'text-white' : 'text-gray-900'">{{ plan.nombre }}</h3>
            <p :class="plan.recomendado ? 'text-teal-100' : 'text-gray-500'">{{ plan.unidades }}</p>
          </div>
          <div class="text-center mb-5">
            <p class="text-4xl font-bold" :class="plan.recomendado ? 'text-white' : 'text-primary'">{{ plan.mensual }}&nbsp;€</p>
            <p :class="plan.recomendado ? 'text-teal-100' : 'text-gray-500'">/mes</p>
            <p class="text-sm mt-2" :class="plan.recomendado ? 'text-teal-100' : 'text-gray-500'">
              {{ miles(plan.anual) }}&nbsp;€/año (ahorras {{ plan.mensual * 12 - plan.anual }}&nbsp;€)
            </p>
          </div>
          <ul class="space-y-3 mb-5 flex-1">
            <li v-for="punto in puntosDelPlan(plan)" :key="punto" class="flex items-start gap-2">
              <svg class="w-5 h-5 shrink-0 mt-0.5" :class="plan.recomendado ? 'text-white' : 'text-green-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{{ punto }}</span>
            </li>
          </ul>
          <p class="text-sm text-center mb-4" :class="plan.recomendado ? 'text-teal-100' : 'text-gray-500'">
            Agencia de más: {{ plan.altaOtaExtra }}&nbsp;€ de alta + {{ CUOTA_OTA_EXTRA }}&nbsp;€/mes
          </p>
          <a
            :href="appUrl('/register')"
            class="btn flex-none text-center font-semibold py-3"
            :class="plan.recomendado ? 'bg-white text-secondary hover:bg-tertiary' : 'btn-principal'"
          >Prueba gratis {{ DIAS_DE_PRUEBA }} días</a>
        </div>
      </div>
      <p class="text-center text-gray-500 mt-6">
        Precios sin IVA. Cada unidad es una habitación, un apartamento o una casa; si tienes varios alojamientos, se suman.
      </p>
    </section>

    <!-- La tabla de los planes -->
    <section class="max-w-5xl mx-auto px-6 mt-16" aria-labelledby="titulo-tabla">
      <h2 id="titulo-tabla" class="text-3xl font-bold text-center text-gray-900 mb-8">Los planes, comparados</h2>
      <div class="overflow-x-auto rounded-2xl border border-gray-200">
        <table class="min-w-full text-left">
          <caption class="sr-only">Comparación de los cuatro planes de Hospedy: unidades, precios sin IVA, funciones, agencias y soporte</caption>
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-4 py-3 text-sm font-semibold text-gray-900"><span class="sr-only">Característica</span></th>
              <th v-for="plan in PLANES" :key="plan.nombre" scope="col" class="px-4 py-3 text-sm font-semibold text-gray-900">{{ plan.nombre }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="fila in FILAS" :key="fila.nombre">
              <th scope="row" class="px-4 py-3 text-sm font-semibold text-gray-700 whitespace-nowrap">{{ fila.nombre }}</th>
              <td v-for="plan in PLANES" :key="plan.nombre" class="px-4 py-3 text-sm text-gray-700">{{ fila.valor(plan) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Lo que incluyen todos -->
    <section class="bg-gray-50 py-16 mt-16" aria-labelledby="titulo-incluye">
      <div class="max-w-5xl mx-auto px-6">
        <h2 id="titulo-incluye" class="text-3xl font-bold text-center text-gray-900 mb-3">Qué incluyen todos los planes</h2>
        <p class="text-lg text-gray-600 text-center mb-10">Todo esto, en el plan Esencial igual que en el Enterprise.</p>
        <ul class="grid md:grid-cols-2 gap-x-8 gap-y-5">
          <li v-for="funcion in TODAS_LAS_FUNCIONES" :key="funcion.ruta" class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>
              <NuxtLink :to="funcion.ruta" class="font-semibold text-gray-900 hover:text-secondary underline decoration-gray-300 underline-offset-4">{{ funcion.nombre }}</NuxtLink>
              <span class="block text-gray-600">{{ funcion.descripcion }}</span>
              <span v-if="funcion.ruta === '/funciones/cobros'" class="block text-sm text-gray-500 mt-1">
                {{ comision }} por cobro, IVA incluido, solo si los usas; el motor no cobra comisión por reserva.
              </span>
            </span>
          </li>
          <li v-for="extra in EXTRAS" :key="extra.nombre" class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>
              <span class="font-semibold text-gray-900">{{ extra.nombre }}</span>
              <span class="block text-gray-600">{{ extra.descripcion }}</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Lo único que se paga por uso -->
    <section class="max-w-4xl mx-auto px-6 mt-16 text-center" aria-labelledby="titulo-cobros">
      <h2 id="titulo-cobros" class="text-3xl font-bold text-gray-900 mb-4">Si cobras online a tus huéspedes</h2>
      <p class="text-xl text-gray-600">
        La pasarela de cobros cuesta <strong class="text-gray-900">{{ comision }} por cobro, IVA incluido</strong>, con la
        comisión de Stripe dentro, y solo si la usas. El motor de reservas no cobra comisión por reserva.
      </p>
      <NuxtLink to="/funciones/cobros" class="inline-block mt-4 text-lg font-semibold text-secondary hover:underline underline-offset-4">Cómo funcionan los cobros →</NuxtLink>
    </section>

    <FaqLista :preguntas="PREGUNTAS" titulo="Preguntas sobre precios" class="max-w-4xl mx-auto px-6 mt-16" />

    <p class="text-center mt-10">
      <NuxtLink to="/comparar" class="text-lg font-semibold text-secondary hover:underline underline-offset-4">Comparar con otros PMS →</NuxtLink>
    </p>

    <CtaFinal />
  </div>
</template>

<script setup lang="ts">
import type { Plan } from '~/utils/precios'
import type { PreguntaFaq } from '~/utils/contenido'
import { COMISION_COBROS, CUOTA_OTA_EXTRA, DIAS_DE_PRUEBA, PLANES } from '~/utils/precios'
import { TODAS_LAS_FUNCIONES } from '~/utils/navegacion'
import { mesYAnio } from '~/utils/fechas'

// Se cambia al tocar los precios o lo que incluyen
const ACTUALIZADO = '2026-10'

useSeoPagina({
  titulo: 'Precios: PMS para hotel desde 35 €/mes',
  descripcion: 'Planes de Hospedy desde 35 €/mes sin IVA, según el tamaño de tu alojamiento y con todas las funciones en todos. 30 días gratis y sin permanencia.',
})
useEsquema('software', esquemaSoftware())

const { appUrl } = useReferral()

const comision = `${String(COMISION_COBROS.porcentaje).replace('.', ',')} % + ${COMISION_COBROS.fijo.toFixed(2).replace('.', ',')} €`

// 1290 → «1.290», como el resto de la web
function miles(numero: number) {
  return String(numero).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function agencias(n: number) {
  return n === 1 ? '1 agencia incluida' : `${n} agencias incluidas`
}

function puntosDelPlan(plan: Plan) {
  return [
    'Todas las funciones',
    agencias(plan.otasIncluidas),
    plan.soportePrioritario ? 'Soporte prioritario por email y videollamada' : 'Soporte por email y videollamada',
    ...(plan.onboardingDedicado ? ['Onboarding dedicado'] : []),
  ]
}

const FILAS: { nombre: string, valor: (plan: Plan) => string }[] = [
  { nombre: 'Unidades', valor: plan => plan.unidades.replace(' unidades', '') },
  { nombre: 'Precio al mes', valor: plan => `${plan.mensual} €` },
  { nombre: 'Precio al año', valor: plan => `${miles(plan.anual)} €` },
  { nombre: 'Funciones', valor: () => 'Todas' },
  { nombre: 'Agencias incluidas', valor: plan => String(plan.otasIncluidas) },
  { nombre: 'Alta de cada agencia de más', valor: plan => `${plan.altaOtaExtra} €` },
  { nombre: 'Cada agencia de más, al mes', valor: () => `${CUOTA_OTA_EXTRA} €` },
  { nombre: 'Soporte por email y videollamada', valor: plan => (plan.soportePrioritario ? 'Prioritario' : 'Sí') },
  { nombre: 'Onboarding dedicado', valor: plan => (plan.onboardingDedicado ? 'Sí' : '—') },
]

const EXTRAS = [
  { nombre: 'Zenfisk', descripcion: 'El programa de facturación y gastos con Verifactu, incluido mientras mantengas tu suscripción de Hospedy.' },
  { nombre: 'Soporte por email y videollamada', descripcion: 'En español, de lunes a viernes, con respuesta en 24-48 horas.' },
  { nombre: 'Varios alojamientos en una cuenta', descripcion: 'Cada uno con su calendario y todos en el mismo panel.' },
  { nombre: `${DIAS_DE_PRUEBA} días de prueba gratis`, descripcion: 'Con todas las funciones, sin tarjeta de crédito y sin permanencia.' },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿Qué incluye el precio?',
    respuesta: 'Todas las funciones de Hospedy: planning y reservas, check-in y auto check-in, partes de viajeros, encuestas del INE, facturación, comunicaciones con el huésped, limpieza, channel manager con las agencias de tu plan, motor de reservas, cobros online y Hugo, el asistente. Y el soporte por email y videollamada.',
  },
  {
    pregunta: '¿Cómo se cuentan las unidades?',
    respuesta: 'Cada habitación de hotel, cada apartamento y cada casa rural es una unidad: un hotel de 15 habitaciones son 15 unidades. Si tienes varios alojamientos, se suman todas.',
  },
  {
    id: 'permanencia-precios',
    pregunta: '¿Hay permanencia?',
    respuesta: 'No. Puedes darte de baja cuando quieras, sin penalización.',
  },
  {
    pregunta: '¿Cuánto me ahorro pagando al año?',
    respuesta: 'El precio anual equivale a diez meses: te ahorras dos mensualidades. En el plan Esencial, 350 € al año en vez de 420 €.',
  },
  {
    pregunta: '¿Los precios incluyen IVA?',
    respuesta: 'No, los precios de los planes son sin IVA. La comisión de los cobros online sí lo lleva incluido.',
  },
  {
    pregunta: '¿Puedo probarlo gratis?',
    respuesta: `Sí. ${DIAS_DE_PRUEBA} días de prueba con todas las funciones, sin tarjeta de crédito.`,
  },
  {
    pregunta: '¿Y si necesito más agencias de las que incluye mi plan?',
    respuesta: `Cada agencia de más cuesta ${CUOTA_OTA_EXTRA} €/mes, más un alta única según tu plan, de 29 € a 79 €, que incluye la configuración asistida. Cada establecimiento cuenta aparte.`,
  },
  {
    pregunta: '¿Qué cuesta cobrar a mis huéspedes con tarjeta?',
    respuesta: `${comision} por cobro, IVA incluido, con la comisión de Stripe dentro, y solo si lo usas. El motor de reservas no cobra comisión por reserva.`,
  },
]
</script>
