<template>
    <div>
        <Navbar />
        <div class="mt-24 mb-16">
            <!-- Hero -->
            <div class="text-center max-w-4xl mx-auto px-6">
                <p class="text-secondary font-semibold text-lg mb-4">Todas tus OTAs sincronizadas</p>
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Channel Manager: adiós a los overbookings
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Conecta con Booking, Airbnb, Expedia y más de 50 OTAs. Actualiza precios y disponibilidad desde un solo lugar.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink class="btn btn-grad" to="/demo">Solicitar demo</NuxtLink>
                </div>
            </div>

            <!-- OTA logos -->
            <div class="max-w-4xl mx-auto px-6 mt-16">
                <p class="text-center text-gray-500 mb-8">Conecta con las principales agencias</p>
                <div class="flex flex-wrap justify-center items-center gap-8">
                    <div class="bg-gray-100 px-6 py-3 rounded-lg">
                        <span class="text-xl font-semibold text-gray-700">Booking.com</span>
                    </div>
                    <div class="bg-gray-100 px-6 py-3 rounded-lg">
                        <span class="text-xl font-semibold text-gray-700">Airbnb</span>
                    </div>
                    <div class="bg-gray-100 px-6 py-3 rounded-lg">
                        <span class="text-xl font-semibold text-gray-700">Expedia</span>
                    </div>
                    <div class="bg-gray-100 px-6 py-3 rounded-lg">
                        <span class="text-xl font-semibold text-gray-700">Hotels.com</span>
                    </div>
                    <div class="bg-gray-100 px-6 py-3 rounded-lg">
                        <span class="text-xl font-semibold text-gray-700">Vrbo</span>
                    </div>
                </div>
                <p class="text-center mt-6">
                    <a class="text-primary hover:underline" target="_blank" href="https://es.wubook.net/s-pgs/partners-ota/Canales-con-conexin-XML-4.html">Ver todas las agencias disponibles →</a>
                </p>
            </div>

            <!-- How it works -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
                <div class="grid lg:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-primary">1</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Conecta tus cuentas</h3>
                        <p class="text-gray-600">Vincula tus perfiles de Booking, Airbnb y otras OTAs a Hospedy.</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-primary">2</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Gestiona desde Hospedy</h3>
                        <p class="text-gray-600">Cambia precios, bloquea fechas, todo desde tu calendario de Hospedy.</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-primary">3</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Todo sincronizado</h3>
                        <p class="text-gray-600">Los cambios se reflejan en todas las agencias en tiempo real.</p>
                    </div>
                </div>
            </div>

            <!-- Benefits -->
            <div class="bg-gray-50 py-16 mt-20">
                <div class="max-w-5xl mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-12">Ventajas del Channel Manager</h2>
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Cero overbookings</h3>
                                    <p class="text-gray-600">Cuando entra una reserva en una OTA, se bloquea automáticamente en las demás.</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Ahorra tiempo</h3>
                                    <p class="text-gray-600">Un solo lugar para actualizar precios en lugar de entrar en cada OTA.</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Maximiza ocupación</h3>
                                    <p class="text-gray-600">Estás presente en más agencias, llegas a más viajeros potenciales.</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Reservas centralizadas</h3>
                                    <p class="text-gray-600">Todas las reservas de todas las OTAs aparecen en tu calendario de Hospedy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pricing -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-8">Precio transparente</h2>
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-md mx-auto text-center">
                    <p class="text-5xl font-bold text-primary mb-2">8€<span class="text-xl text-gray-500">/mes</span></p>
                    <p class="text-gray-600 mb-4">por agencia conectada (+ IVA)</p>
                    <ul class="text-left space-y-3 mb-6">
                        <li class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Sincronización en tiempo real</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>15 días de prueba gratis</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Sin permanencia</span>
                        </li>
                    </ul>
                    <p class="text-lg text-gray-500">Servicio ofrecido en colaboración con Wubook</p>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-20 px-6">
                <h2 class="text-3xl font-bold mb-4">Sincroniza todas tus OTAs</h2>
                <p class="text-xl text-gray-600 mb-8">Prueba el Channel Manager 15 días gratis.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink class="btn btn-grad" to="/demo">Solicitar demo</NuxtLink>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Channel Manager - Conecta con Booking, Airbnb y más - Hospedy',
    meta: [
        { name: 'description', content: 'Channel Manager para conectar tu alojamiento con Booking, Airbnb, Expedia y más de 50 OTAs. Evita overbookings y ahorra tiempo.' }
    ]
})
</script>
