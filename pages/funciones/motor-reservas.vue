<template>
    <div>
        <Navbar />
        <div class="mt-24 mb-16">
            <!-- Hero -->
            <div class="text-center max-w-4xl mx-auto px-6">
                <p class="text-secondary font-semibold text-lg mb-4">Reservas directas sin comisiones</p>
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Motor de reservas que no te cobra por reserva
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Recibe reservas directamente en tu web. Sin comisiones por reserva, sin intermediarios. Cada reserva directa es dinero que no pagas a Booking.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <PruebaHospedyButton class="btn btn-grad" />
                </div>
            </div>

            <!-- Comparison -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Cuánto te ahorras</h2>
                <div class="bg-gray-50 rounded-2xl p-8">
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div class="bg-white p-6 rounded-xl border-2 border-red-200">
                            <h3 class="text-xl font-semibold mb-4 text-red-600">Con Booking.com</h3>
                            <p class="text-gray-600 mb-4">Reserva de 100€ × 15% comisión</p>
                            <p class="text-3xl font-bold text-red-600">-15€</p>
                            <p class="text-lg text-gray-500 mt-2">Por cada reserva</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border-2 border-green-200">
                            <h3 class="text-xl font-semibold mb-4 text-green-600">Con Hospedy</h3>
                            <p class="text-gray-600 mb-4">Reserva de 100€ × 0% comisión</p>
                            <p class="text-3xl font-bold text-green-600">0€</p>
                            <p class="text-lg text-gray-500 mt-2">Sin comisiones por reserva</p>
                        </div>
                    </div>
                    <p class="text-center mt-8 text-lg text-gray-700">
                        Con 10 reservas directas al mes de 100€, <span class="font-bold text-primary">ahorras 150€/mes</span> en comisiones.
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
                            <p class="text-gray-600">Tus huéspedes ven en tiempo real qué fechas están disponibles.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg mb-2">Precios dinámicos</h3>
                            <p class="text-gray-600">Configura precios por temporada, fin de semana, eventos especiales...</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg mb-2">Pagos con Stripe</h3>
                            <p class="text-gray-600">Cobra depósitos o el total de la reserva con la pasarela más segura.</p>
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
                            <h3 class="font-semibold text-lg mb-2">Fácil de integrar</h3>
                            <p class="text-gray-600">Un código embed que funciona en cualquier web: WordPress, Wix, tu propia página...</p>
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
                        <span class="font-semibold">Cero overbookings.</span> Todo sincronizado en tiempo real.
                    </p>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-20 px-6">
                <h2 class="text-3xl font-bold mb-4">Empieza a recibir reservas directas</h2>
                <p class="text-xl text-gray-600 mb-8">El motor de reservas está incluido en tu suscripción. Sin coste adicional.</p>
                <div class="flex flex-col gap-4 items-center">
                    <PruebaHospedyButton class="btn btn-grad" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Motor de reservas sin comisiones - Hospedy',
    meta: [
        { name: 'description', content: 'Recibe reservas directas en tu web sin pagar comisiones. Motor de reservas incluido en Hospedy con pagos Stripe integrados.' }
    ]
})
</script>
