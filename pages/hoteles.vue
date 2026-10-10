<template>
    <div>
        <!-- Hero with gradient -->
        <div class="subpage-hero pt-24 pb-16 relative overflow-hidden">
            <!-- Decorative Stars -->
            <StarAccent class="top-28 left-[10%] hidden lg:block" size="md" animation="float" :opacity="0.4" :delay="0" />
            <StarAccent class="top-40 right-[12%] hidden lg:block" size="sm" animation="twinkle" :opacity="0.5" :delay="0.8" />

            <div class="max-w-6xl mx-auto px-6 mb-6">
                <MigasDePan :migas="[{ nombre: 'Hoteles y hostales', ruta: '/hoteles' }]" />
            </div>
            <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
                <div class="lg:mt-12" data-aos="fade-right">
                    <p class="text-secondary font-semibold text-lg mb-4">PMS para hoteles</p>
                    <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Gestiona tu hotel sin complicaciones
                    </h1>
                    <p class="text-xl text-gray-600 mb-6">
                        Desde la recepción hasta el cumplimiento normativo: check-in escaneando el documento, partes de viajeros que se envían solos y todo sincronizado con tus agencias.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="100">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Check-in con escaneo de DNI</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="150">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Envío automático a SES Hospedajes</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="200">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Encuestas INE de ocupación hotelera</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="250">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Planning visual para múltiples habitaciones</span>
                        </li>
                    </ul>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <BotonesPrueba />
                    </div>
                </div>
                <div class="flex items-center justify-center" data-aos="fade-left" data-aos-delay="200">
                    <!-- Maquetas en CSS (sustituyen a la captura /macbook.webp): el planning de
                         un hotel en el portatil, que se puede usar como el de casas rurales, y el
                         de 30 habitaciones en el movil, en foto -->
                    <MockDevices perfil="hotel" movil="planning" />
                </div>
            </div>
        </div>

        <div>
            <!-- Pain points -->
            <div class="section-gradient-alt py-16">
                <div class="max-w-5xl mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-4" data-aos="fade-up">Los problemas de gestionar un hotel</h2>
                    <p class="text-center text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="100">Seguro que te suenan...</p>
                    <div class="grid lg:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover" data-aos="fade-up" data-aos-delay="0">
                            <IconoReto nombre="checkin" class="mb-4" />
                            <h3 class="font-semibold text-lg mb-2">"El check-in es eterno"</h3>
                            <p class="text-gray-600">Teclear datos de 10 huéspedes a mano lleva media hora. Con Hospedy, escaneas y listo.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover" data-aos="fade-up" data-aos-delay="100">
                            <IconoReto nombre="parte" class="mb-4" />
                            <h3 class="font-semibold text-lg mb-2">"Se me olvidó enviar el parte"</h3>
                            <p class="text-gray-600">No comunicar a tus viajeros es una infracción grave: multas de 601 a 30.000&nbsp;€ (Ley Orgánica 4/2015). Con Hospedy, los partes se envían solos.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover" data-aos="fade-up" data-aos-delay="200">
                            <IconoReto nombre="overbooking" class="mb-4" />
                            <h3 class="font-semibold text-lg mb-2">"Tengo overbooking otra vez"</h3>
                            <p class="text-gray-600">Booking, Expedia, tu web... imposible tenerlo todo sincronizado. Con el Channel Manager, todo sincronizado.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Key features for hotels -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Funcionalidades clave para hoteles</h2>
                <div class="grid lg:grid-cols-2 gap-12">
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="0">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Gestión de múltiples habitaciones</h3>
                            <p class="text-gray-600">Planning visual donde ves todas tus habitaciones de un vistazo. Arrastra reservas, cambia asignaciones, todo con un clic.</p>
                            <NuxtLink to="/funciones/planning-reservas" class="text-secondary font-semibold hover:underline underline-offset-4 text-lg mt-2 inline-block">Saber más →</NuxtLink>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="100">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Check-in con escáner y auto check-in</h3>
                            <p class="text-gray-600">Escanea el DNI o el pasaporte en recepción, o deja que cada huésped lo haga desde su móvil antes de llegar. El parte sale solo.</p>
                            <NuxtLink to="/funciones/check-in" class="text-secondary font-semibold hover:underline underline-offset-4 text-lg mt-2 inline-block">Saber más →</NuxtLink>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="200">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Encuesta de Ocupación Hotelera</h3>
                            <p class="text-gray-600">Hospedy rellena la Encuesta de Ocupación Hotelera con los datos que ya tienes y la envía al INE con un clic, sin entrar en ARCE.</p>
                            <NuxtLink to="/funciones/encuestas-ine" class="text-secondary font-semibold hover:underline underline-offset-4 text-lg mt-2 inline-block">Saber más →</NuxtLink>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="300">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Facturación profesional</h3>
                            <p class="text-gray-600">La factura de cada reserva con un clic, con todos los conceptos: habitación, extras, tasa turística. Y Zenfisk, el programa de facturación y gastos con Verifactu, incluido en tu suscripción.</p>
                            <NuxtLink to="/funciones/facturacion" class="text-secondary font-semibold hover:underline underline-offset-4 text-lg mt-2 inline-block">Saber más →</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Testimonial -->
            <div class="testimonial-gradient py-16 mt-20 relative overflow-hidden">
                <StarAccent class="top-8 left-[15%] hidden lg:block" size="sm" animation="pulse" :opacity="0.4" :delay="0.5" />
                <StarAccent class="bottom-8 right-[10%] hidden lg:block" size="xs" animation="twinkle" :opacity="0.3" :delay="1.2" />
                <div class="max-w-3xl mx-auto px-6 text-center" data-aos="fade-up">
                    <div class="text-5xl mb-6 text-secondary">"</div>
                    <p class="text-2xl text-gray-700 mb-6">
                        Tenemos 18 habitaciones y antes el check-in era un caos. Ahora escaneamos el DNI y en 30 segundos está todo hecho. Los partes se envían solos y yo me olvido.
                    </p>
                    <p class="font-semibold text-lg">María García</p>
                    <p class="text-gray-500">Hotel Rural El Rincón, Teruel</p>
                </div>
            </div>

            <!-- Pricing teaser -->
            <div class="max-w-4xl mx-auto px-6 mt-20 text-center" data-aos="fade-up">
                <h2 class="text-3xl font-bold mb-4">Precios para hoteles</h2>
                <p class="text-xl text-gray-600 mb-8">
                    Desde <span class="text-primary font-bold">35&nbsp;€/mes</span> para hoteles pequeños.
                    Precio según número de habitaciones, sin comisiones por reserva.
                </p>
                <p class="text-lg font-semibold text-secondary -mt-4 mb-8">Todas las funciones, en todos los planes.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink class="btn btn-principal sm:flex-none px-6" to="/precios">Ver precios</NuxtLink>
                    <NuxtLink class="btn btn-outline-gradient sm:flex-none px-6" to="/comparar"><span>Comparar con otros PMS</span></NuxtLink>
                </div>
            </div>

            <!-- El paso siguiente: funciones, guías y otros tipos de alojamiento -->
            <RelacionesPagina clave="hoteles" />

            <CtaFinal />
        </div>
    </div>
</template>

<script setup lang="ts">
useSeoPagina({
    titulo: 'PMS para hoteles pequeños y hostales',
    descripcion: 'Programa de gestión para hoteles y hostales: check-in con escáner, partes de viajeros a SES Hospedajes, encuesta del INE, planning y channel manager.',
})
</script>

<style scoped>
.subpage-hero {
    background:
        radial-gradient(ellipse at 20% 0%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 100%, rgba(13, 148, 136, 0.1) 0%, transparent 50%),
        linear-gradient(to bottom right, rgba(255, 180, 0, 0.2) 0%, rgba(255, 255, 255, 1) 60%);
}

.section-gradient-alt {
    background: linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%);
}

.testimonial-gradient {
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(13, 148, 136, 0.1) 100%);
}



.feature-item {
    transition: transform 0.3s ease;
}

.feature-item:hover {
    transform: translateX(8px);
}
</style>
