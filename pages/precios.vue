<template>
    <div>
        <Navbar />
        <div class="mt-24 mb-16">
            <!-- Hero -->
            <div class="text-center max-w-4xl mx-auto px-6">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Precios claros, sin sorpresas
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Elige el plan que se adapta a tu alojamiento. Sin permanencia, sin letra pequeña.
                </p>
            </div>

            <!-- Pricing Cards -->
            <div class="max-w-6xl mx-auto px-6 mt-12">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Esencial -->
                    <div class="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                        <div class="text-center mb-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Esencial</h3>
                            <p class="text-gray-500 text-sm">1-3 unidades</p>
                        </div>
                        <div class="text-center mb-6">
                            <p class="text-4xl font-bold text-primary">35€</p>
                            <p class="text-gray-500">/mes</p>
                            <p class="text-sm text-gray-400 mt-2">350€/año (ahorra 70€)</p>
                        </div>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>PMS completo</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>1 OTA incluida</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Partes automáticos</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Motor de reservas</span>
                            </li>
                        </ul>
                        <p class="text-xs text-gray-400 text-center mb-4">OTA extra: 79€ setup + 10€/mes</p>
                        <NuxtLink to="/demo" class="btn btn-outline w-full block text-center">Solicitar demo</NuxtLink>
                    </div>

                    <!-- Profesional (Recommended) -->
                    <div class="bg-primary rounded-2xl p-6 text-white relative overflow-hidden hover:shadow-lg transition-shadow">
                        <div class="absolute top-0 right-0 bg-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            Recomendado
                        </div>
                        <div class="text-center mb-6">
                            <h3 class="text-xl font-bold mb-2">Profesional</h3>
                            <p class="text-primary-100 text-sm">4-10 unidades</p>
                        </div>
                        <div class="text-center mb-6">
                            <p class="text-4xl font-bold">59€</p>
                            <p class="text-primary-100">/mes</p>
                            <p class="text-sm text-primary-100 mt-2">590€/año (ahorra 118€)</p>
                        </div>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Todo de Esencial</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>2 OTAs incluidas</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Multi-propiedad</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Pre check-in</span>
                            </li>
                        </ul>
                        <p class="text-xs text-primary-100 text-center mb-4">OTA extra: 49€ setup + 10€/mes</p>
                        <NuxtLink to="/demo" class="bg-white text-primary font-semibold py-2 px-4 rounded-lg w-full block text-center hover:bg-gray-100 transition-colors">Solicitar demo</NuxtLink>
                    </div>

                    <!-- Business -->
                    <div class="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                        <div class="text-center mb-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Business</h3>
                            <p class="text-gray-500 text-sm">11-25 unidades</p>
                        </div>
                        <div class="text-center mb-6">
                            <p class="text-4xl font-bold text-primary">89€</p>
                            <p class="text-gray-500">/mes</p>
                            <p class="text-sm text-gray-400 mt-2">890€/año (ahorra 178€)</p>
                        </div>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Todo de Profesional</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>3 OTAs incluidas</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Housekeeping</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Cartas virtuales QR</span>
                            </li>
                        </ul>
                        <p class="text-xs text-gray-400 text-center mb-4">OTA extra: 29€ setup + 10€/mes</p>
                        <NuxtLink to="/demo" class="btn btn-outline w-full block text-center">Solicitar demo</NuxtLink>
                    </div>

                    <!-- Enterprise -->
                    <div class="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                        <div class="text-center mb-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                            <p class="text-gray-500 text-sm">26+ unidades</p>
                        </div>
                        <div class="text-center mb-6">
                            <p class="text-4xl font-bold text-primary">129€</p>
                            <p class="text-gray-500">/mes</p>
                            <p class="text-sm text-gray-400 mt-2">1.290€/año (ahorra 258€)</p>
                        </div>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Todo de Business</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>OTAs ilimitadas</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Soporte prioritario</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Onboarding dedicado</span>
                            </li>
                        </ul>
                        <p class="text-xs text-gray-400 text-center mb-4">Sin coste extra por OTAs</p>
                        <NuxtLink to="/demo" class="btn btn-outline w-full block text-center">Solicitar demo</NuxtLink>
                    </div>
                </div>
                <p class="text-center text-gray-500 mt-6">* Precios sin IVA</p>
            </div>

            <!-- What's included -->
            <div class="bg-gray-50 py-16 mt-20">
                <div class="max-w-5xl mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-12">Qué incluyen todos los planes</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>PMS con calendario visual</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Check-in con escáner de documentos</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Pre check-in / Auto check-in</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Partes de viajeros automáticos</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Encuestas INE automáticas</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Facturación integrada</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Zenfisk: facturación y gastos con Verifactu</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Motor de reservas sin comisiones</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Soporte por email + videollamadas</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Multi-propiedad</span>
                        </div>
                    </div>
                    <p class="text-center text-gray-600 mt-10">Zenfisk, el programa de facturación y gastos con Verifactu, va incluido: si contratas ahora, lo tendrás incluido mientras mantengas tu suscripción de Hospedy.</p>
                </div>
            </div>

            <!-- FAQ -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Preguntas sobre precios</h2>
                <div class="space-y-6">
                    <div class="border-b border-gray-200 pb-6">
                        <h3 class="font-semibold text-lg mb-2">¿Qué incluye el precio?</h3>
                        <p class="text-gray-600">Todo: PMS, channel manager, motor de reservas, partes de viajeros, INE, facturación, housekeeping y soporte. No hay costes ocultos.</p>
                    </div>
                    <div class="border-b border-gray-200 pb-6">
                        <h3 class="font-semibold text-lg mb-2">¿Hay permanencia?</h3>
                        <p class="text-gray-600">No. Puedes darte de baja cuando quieras sin penalización.</p>
                    </div>
                    <div class="border-b border-gray-200 pb-6">
                        <h3 class="font-semibold text-lg mb-2">¿Los precios incluyen IVA?</h3>
                        <p class="text-gray-600">No, los precios mostrados son sin IVA.</p>
                    </div>
                    <div class="border-b border-gray-200 pb-6">
                        <h3 class="font-semibold text-lg mb-2">¿Puedo probarlo gratis?</h3>
                        <p class="text-gray-600">Sí, tienes 30 días de prueba gratis con todas las funciones. Sin tarjeta de crédito, sin compromiso.</p>
                    </div>
                    <div class="border-b border-gray-200 pb-6">
                        <h3 class="font-semibold text-lg mb-2">¿Cómo se cuentan las unidades de alojamiento?</h3>
                        <p class="text-gray-600">Contamos cada habitación de hotel o cada apartamento/casa rural como una unidad. Si tienes un hotel de 15 habitaciones, son 15 unidades.</p>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-20 px-6">
                <h2 class="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
                <p class="text-xl text-gray-600 mb-8">30 días gratis. Sin tarjeta de crédito. Sin compromiso.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink class="btn btn-grad" to="/demo">Solicitar demo</NuxtLink>
                    <NuxtLink class="btn btn-outline" to="/comparar">Comparar con otros PMS</NuxtLink>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Precios - Software de gestión hotelera - Hospedy',
    meta: [
        { name: 'description', content: 'Precios claros de Hospedy: desde 35€/mes. PMS completo con partes de viajeros automáticos, channel manager, motor de reservas y más. Sin permanencia.' }
    ]
})
</script>
