<template>
    <div>
        <Navbar />
        <div class="mt-24 mb-16">
            <!-- Hero -->
            <div class="text-center max-w-4xl mx-auto px-6">
                <div class="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Envío INE automático incluido
                </div>
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Encuestas INE enviadas con un clic
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Otros sistemas solo generan un archivo XML que tú debes subir manualmente. Hospedy envía la encuesta directamente al INE con un solo clic.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink class="btn btn-grad" to="/demo">Solicitar demo</NuxtLink>
                </div>
            </div>

            <!-- Why different -->
            <div class="max-w-4xl mx-auto px-6 mt-16">
                <div class="bg-gradient-to-r from-green-50 to-primary/5 border border-green-200 rounded-2xl p-8">
                    <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">¿Por qué somos diferentes?</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-red-50 p-6 rounded-xl border border-red-100">
                            <p class="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                Otros PMS
                            </p>
                            <ol class="text-red-700 space-y-2">
                                <li class="flex items-start gap-2">
                                    <span class="bg-red-200 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                                    <span>Generan archivo XML</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="bg-red-200 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                                    <span>Tú descargas el archivo</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="bg-red-200 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                                    <span>Entras en ARCE (web del INE)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="bg-red-200 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
                                    <span>Subes el archivo manualmente</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="bg-red-200 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">5</span>
                                    <span>Verificas que no hay errores</span>
                                </li>
                            </ol>
                        </div>
                        <div class="bg-green-50 p-6 rounded-xl border border-green-200">
                            <p class="font-bold text-green-800 mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Hospedy
                            </p>
                            <ol class="text-green-700 space-y-2">
                                <li class="flex items-start gap-2">
                                    <span class="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                                    <span>Haces clic en "Enviar al INE"</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                                    <span class="font-semibold">¡Listo! Nosotros nos encargamos</span>
                                </li>
                            </ol>
                            <p class="mt-4 text-green-800 font-medium text-sm">Sin descargas, sin ARCE, sin errores.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Survey types -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-4">Encuestas que enviamos</h2>
                <p class="text-center text-gray-600 mb-12">Para todo tipo de alojamientos turísticos</p>
                <div class="grid lg:grid-cols-3 gap-8">
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Encuesta de Ocupación Hotelera</h3>
                        <p class="text-gray-600">Para hoteles y establecimientos similares. Datos de ocupación, pernoctaciones y procedencia.</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Encuesta de Apartamentos Turísticos</h3>
                        <p class="text-gray-600">Para apartamentos, villas y alojamientos de alquiler completo.</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Encuesta de Turismo Rural</h3>
                        <p class="text-gray-600">Para casas rurales, albergues y establecimientos de turismo rural.</p>
                    </div>
                </div>
            </div>

            <!-- Regional documents -->
            <div class="bg-gray-50 py-16 mt-20">
                <div class="max-w-5xl mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-8">También documentos autonómicos</h2>
                    <p class="text-center text-gray-600 text-lg mb-12">Algunas comunidades autónomas tienen requisitos adicionales. Hospedy los genera automáticamente.</p>
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div class="bg-white p-6 rounded-xl">
                            <h3 class="font-semibold text-lg mb-2">Castilla y León</h3>
                            <p class="text-gray-600">Encuesta de Ocupación en Alojamientos de Turismo Rural de Castilla y León.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl">
                            <h3 class="font-semibold text-lg mb-2">Andalucía</h3>
                            <p class="text-gray-600">Documento de Admisión y Parte de Entrada de Viajeros.</p>
                        </div>
                    </div>
                    <p class="text-center text-gray-500 mt-8">¿Tu comunidad tiene requisitos específicos? <NuxtLink to="/demo" class="text-primary hover:underline">Contáctanos</NuxtLink> y lo implementamos.</p>
                </div>
            </div>

            <!-- How it works -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Así de fácil</h2>
                <div class="space-y-8">
                    <div class="flex gap-6 items-start">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                        <div>
                            <h3 class="text-xl font-semibold mb-2">Gestiona tus reservas como siempre</h3>
                            <p class="text-gray-600">Hospedy va recopilando los datos de ocupación automáticamente mientras trabajas.</p>
                        </div>
                    </div>
                    <div class="flex gap-6 items-start">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                        <div>
                            <h3 class="text-xl font-semibold mb-2">Al final del mes, haz clic en "Enviar"</h3>
                            <p class="text-gray-600">Un clic y la encuesta se envía directamente al INE. Sin descargas, sin ARCE.</p>
                        </div>
                    </div>
                    <div class="flex gap-6 items-start">
                        <div class="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold mb-2">¡Listo! Nosotros nos encargamos</h3>
                            <p class="text-gray-600">Hospedy envía los datos al INE automáticamente. Sin descargas, sin ARCE.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Benefits -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <div class="grid lg:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="text-4xl font-bold text-primary mb-2">2h</div>
                        <p class="text-gray-600">Tiempo ahorrado cada mes</p>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-primary mb-2">0</div>
                        <p class="text-gray-600">Errores de cálculo</p>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-primary mb-2">100%</div>
                        <p class="text-gray-600">Cumplimiento garantizado</p>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-20 px-6">
                <h2 class="text-3xl font-bold mb-4">Olvídate del INE para siempre</h2>
                <p class="text-xl text-gray-600 mb-8">Prueba Hospedy gratis durante 30 días.</p>
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
    title: 'Envío INE automático - Hospedy',
    meta: [
        { name: 'description', content: 'Hospedy envía automáticamente las encuestas del INE con un clic. Sin descargar XML, sin subir archivos a ARCE. Ahorra horas cada mes.' }
    ]
})
</script>
