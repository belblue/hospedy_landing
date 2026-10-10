<template>
    <div>
        <div class="pt-24">
            <div class="max-w-6xl mx-auto px-6">
                <MigasDePan :migas="[{ nombre: 'Funciones', ruta: '/funciones' }, { nombre: 'Motor de reservas', ruta: '/funciones/motor-reservas' }]" />
            </div>
            <!-- Hero -->
            <div class="text-center max-w-4xl mx-auto px-6 mt-8">
                <p class="text-secondary font-semibold text-lg mb-4">Reservas directas sin comisión por reserva</p>
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Motor de reservas que no te cobra por reserva
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Recibe reservas directamente en tu web. Sin comisión por reserva y sin intermediarios: cada reserva directa es dinero que no pagas a Booking. El motor y su calendario de precios van incluidos en todos los planes, conectes o no agencias.
                </p>
                <BotonesPrueba centrados />
            </div>

            <!-- Comparison -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Cuánto te ahorras</h2>
                <div class="bg-gray-50 rounded-2xl p-8">
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div class="bg-white p-6 rounded-xl border-2 border-red-200">
                            <h3 class="text-xl font-semibold mb-4 text-red-600">Con Booking.com</h3>
                            <p class="text-gray-600 mb-4">Reserva de 100&nbsp;€ × 15&nbsp;% comisión</p>
                            <p class="text-3xl font-bold text-red-600">-15&nbsp;€</p>
                            <p class="text-lg text-gray-500 mt-2">Por cada reserva</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border-2 border-green-200">
                            <h3 class="text-xl font-semibold mb-4 text-green-600">Con Hospedy</h3>
                            <p class="text-gray-600 mb-4">Reserva de 100&nbsp;€ × 0&nbsp;% comisión</p>
                            <p class="text-3xl font-bold text-green-600">0&nbsp;€</p>
                            <p class="text-lg text-gray-500 mt-2">Sin comisiones por reserva</p>
                        </div>
                    </div>
                    <p class="text-center mt-8 text-lg text-gray-700">
                        Con 10 reservas directas al mes de 100&nbsp;€, <span class="font-bold text-primary">ahorras 150&nbsp;€/mes</span> en comisiones.
                    </p>
                    <p class="text-center mt-2 text-base text-gray-600">
                        Si además cobras la reserva con tarjeta, la pasarela de cobros cuesta 3,9&nbsp;% + 0,40&nbsp;€ por cobro, IVA incluido.
                    </p>
                </div>
            </div>

            <!-- Features -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Qué incluye el motor de reservas</h2>
                <div class="grid lg:grid-cols-2 gap-8">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg mb-2">Calendario de disponibilidad</h3>
                            <p class="text-gray-600">Tus huéspedes ven qué noches tienes libres y a qué precio.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg mb-2">Precios por día desde tu calendario</h3>
                            <p class="text-gray-600">Precios por temporada, para los fines de semana o para fechas especiales, día a día en tu calendario de precios.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg mb-2">Cobros con tarjeta</h3>
                            <p class="text-gray-600">Cobra un depósito o el total al reservar, con la pasarela de Stripe.</p>
                            <NuxtLink to="/funciones/cobros" class="text-secondary font-semibold hover:underline underline-offset-4 inline-block mt-1">Saber más →</NuxtLink>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg mb-2">Confirmación automática</h3>
                            <p class="text-gray-600">El huésped recibe un email de confirmación con todos los detalles.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg mb-2">Sincronizado con tu calendario</h3>
                            <p class="text-gray-600">Las reservas aparecen automáticamente en tu planning de Hospedy.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg mb-2">Fácil de enlazar</h3>
                            <p class="text-gray-600">Un enlace que pones en tu web o en tus redes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Channel Manager sync -->
            <div class="bg-gray-50 py-16 mt-20">
                <div class="max-w-4xl mx-auto px-6 text-center">
                    <h2 class="text-3xl font-bold mb-4">Sincronizado con tus OTAs</h2>
                    <p class="text-xl text-gray-600 mb-8">
                        Si tienes el Channel Manager activo, cuando recibes una reserva directa,
                        la disponibilidad se actualiza automáticamente en Booking, Airbnb, Expedia y todas tus OTAs.
                    </p>
                    <p class="text-lg text-gray-700">
                        Y si no conectas ninguna agencia, el motor funciona igual, con tu calendario de precios y disponibilidad.
                        <NuxtLink to="/funciones/channel-manager" class="text-secondary font-semibold hover:underline underline-offset-4">Ver el Channel Manager →</NuxtLink>
                    </p>
                </div>
            </div>

            <!-- El paso siguiente: funciones, guías y tipos de alojamiento relacionados -->
            <RelacionesPagina clave="motor-reservas" />

            <CtaFinal />
        </div>
    </div>
</template>

<script setup lang="ts">
const DESCRIPCION = 'Recibe reservas directas en tu web sin pagar comisión por reserva: el motor de reservas va incluido en Hospedy, con su calendario de precios por día.'

useSeoPagina({
    titulo: 'Motor de reservas sin comisión por reserva',
    descripcion: DESCRIPCION,
})
useEsquema('pagina', esquemaPagina('WebPage', { nombre: 'Motor de reservas que no te cobra por reserva', descripcion: DESCRIPCION, ruta: '/funciones/motor-reservas', sobreHospedy: true }))
</script>
