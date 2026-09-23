<template>
    <div>
        <Navbar />
        <!-- Hero with gradient -->
        <div class="subpage-hero pt-24 pb-16 relative overflow-hidden">
            <!-- Decorative Stars -->
            <StarAccent class="top-36 left-[12%] hidden lg:block" size="md" animation="float" :opacity="0.45" :delay="0.3" />
            <StarAccent class="top-28 right-[10%] hidden lg:block" size="sm" animation="twinkle" :opacity="0.5" :delay="0.9" />

            <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
                <div class="lg:mt-12" data-aos="fade-right">
                    <p class="text-secondary font-semibold text-lg mb-4">Software para casas rurales</p>
                    <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Gestiona tu casa rural desde cualquier lugar
                    </h1>
                    <p class="text-xl text-gray-600 mb-6">
                        No necesitas estar en la casa para gestionar reservas. Tus huéspedes hacen el check-in solos y los partes de viajeros se envían automáticamente.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="100">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Auto check-in para huéspedes</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="150">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Partes de viajeros automáticos</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="200">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Encuesta de Turismo Rural del INE, rellena y lista para presentar</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="250">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Gestión remota desde el móvil</span>
                        </li>
                    </ul>
                    <div class="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="300">
                        <NuxtLink class="btn btn-grad btn-shimmer" to="/demo">Solicitar demo</NuxtLink>
                    </div>
                </div>
                <div class="flex items-center justify-center" data-aos="fade-left" data-aos-delay="200">
                    <img src="/phone.webp" alt="Gestión de casa rural desde el móvil" class="max-w-xs hover:scale-105 transition-transform duration-500">
                </div>
            </div>
        </div>

        <div class="mb-16">
            <!-- Pain points -->
            <div class="section-gradient-alt py-16">
                <div class="max-w-5xl mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-4" data-aos="fade-up">Los retos de gestionar una casa rural</h2>
                    <p class="text-center text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="100">Sabemos lo que es...</p>
                    <div class="grid lg:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover" data-aos="fade-up" data-aos-delay="0">
                            <div class="text-3xl mb-4">🚗</div>
                            <h3 class="font-semibold text-lg mb-2">"Tengo que ir a recibir a todos"</h3>
                            <p class="text-gray-600">Desplazarte cada vez que llega un huésped es agotador. Con el auto check-in, ellos se registran solos antes de llegar.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover" data-aos="fade-up" data-aos-delay="100">
                            <div class="text-3xl mb-4">📝</div>
                            <h3 class="font-semibold text-lg mb-2">"El papeleo me quita tiempo"</h3>
                            <p class="text-gray-600">Partes de viajeros, INE, facturas... Con Hospedy todo se genera automáticamente.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover" data-aos="fade-up" data-aos-delay="200">
                            <div class="text-3xl mb-4">📅</div>
                            <h3 class="font-semibold text-lg mb-2">"No sé cuándo tengo libre"</h3>
                            <p class="text-gray-600">Reservas en Booking, en Airbnb, directas... Un solo calendario donde ves todo de un vistazo.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Auto check-in highlight -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 class="text-3xl font-bold mb-6">Auto check-in: tus huéspedes se registran solos</h2>
                        <p class="text-xl text-gray-600 mb-6">
                            Perfecto para casas rurales donde no siempre puedes estar presente.
                        </p>
                        <ol class="space-y-4">
                            <li class="flex gap-4" data-aos="fade-up" data-aos-delay="100">
                                <span class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</span>
                                <div>
                                    <p class="font-semibold">El huésped recibe un enlace</p>
                                    <p class="text-gray-600">Por email o SMS antes de llegar</p>
                                </div>
                            </li>
                            <li class="flex gap-4" data-aos="fade-up" data-aos-delay="200">
                                <span class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</span>
                                <div>
                                    <p class="font-semibold">Introduce sus datos y escanea el DNI</p>
                                    <p class="text-gray-600">Desde su propio móvil, sin apps</p>
                                </div>
                            </li>
                            <li class="flex gap-4" data-aos="fade-up" data-aos-delay="300">
                                <span class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</span>
                                <div>
                                    <p class="font-semibold">Hospedy envía el parte automáticamente</p>
                                    <p class="text-gray-600">Tú solo verificas cuando lleguen</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div class="feature-image-card p-8 rounded-2xl glow-hover" data-aos="fade-left">
                        <img src="/auto_check.svg" alt="Auto check-in para casa rural" class="w-full max-w-xs mx-auto">
                    </div>
                </div>
            </div>

            <!-- Key features -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Pensado para casas rurales</h2>
                <div class="grid lg:grid-cols-2 gap-12">
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="0">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Gestión desde el móvil</h3>
                            <p class="text-gray-600">Controla reservas, check-ins y facturación desde tu smartphone. Como tener la recepción en el bolsillo.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="100">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Precios por temporada</h3>
                            <p class="text-gray-600">Configura tarifas diferentes para Semana Santa, verano, puentes... Se aplican automáticamente.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="200">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Encuesta de Turismo Rural</h3>
                            <p class="text-gray-600">Hospedy rellena cada mes la encuesta del INE de turismo rural con los datos de tus reservas. La descargas lista para presentar.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="300">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Gestión de varias casas</h3>
                            <p class="text-gray-600">¿Tienes más de una casa rural? Gestiónalas todas desde una sola cuenta con calendarios separados.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Testimonial -->
            <div class="testimonial-gradient py-16 mt-20 relative overflow-hidden">
                <StarAccent class="top-10 left-[10%] hidden lg:block" size="sm" animation="pulse" :opacity="0.4" :delay="0.7" />
                <StarAccent class="bottom-6 right-[15%] hidden lg:block" size="xs" animation="twinkle" :opacity="0.35" :delay="1.1" />
                <div class="max-w-3xl mx-auto px-6 text-center" data-aos="fade-up">
                    <div class="text-5xl mb-6 text-secondary">"</div>
                    <p class="text-2xl text-gray-700 mb-6">
                        Tengo 3 casas rurales en pueblos diferentes. Antes tenía que ir a todas para los check-ins. Ahora los huéspedes se registran solos y yo gestiono todo desde casa.
                    </p>
                    <p class="font-semibold text-lg">Carlos Fernández</p>
                    <p class="text-gray-500">Casas Rurales Sierra de Albarracín, Teruel</p>
                </div>
            </div>

            <!-- Pricing teaser -->
            <div class="max-w-4xl mx-auto px-6 mt-20 text-center" data-aos="fade-up">
                <h2 class="text-3xl font-bold mb-4">Precios para casas rurales</h2>
                <p class="text-xl text-gray-600 mb-8">
                    Desde <span class="text-primary font-bold">35€/mes</span> para una casa rural.
                    Precio según número de unidades, sin comisiones.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink class="btn btn-grad btn-shimmer" to="/#precios">Ver precios</NuxtLink>
                    <NuxtLink class="btn btn-outline-gradient" to="/comparar"><span>Comparar con otros PMS</span></NuxtLink>
                </div>
            </div>

            <!-- CTA -->
            <div class="cta-gradient text-center mt-20 py-16 px-6">
                <h2 class="text-3xl font-bold mb-4 text-white" data-aos="fade-up">Prueba Hospedy en tu casa rural</h2>
                <p class="text-xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="100">30 días gratis. Sin tarjeta de crédito. Sin compromiso.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
                    <NuxtLink class="btn bg-white text-primary hover:bg-gray-100 font-semibold" to="/demo">Solicitar demo personalizada</NuxtLink>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Software para Casas Rurales - Gestión y partes automáticos - Hospedy',
    meta: [
        { name: 'description', content: 'Software de gestión para casas rurales con auto check-in, partes de viajeros automáticos y encuestas INE. Gestiona tu casa rural desde cualquier lugar.' }
    ]
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

.cta-gradient {
    background: linear-gradient(135deg, #0D9488 0%, #0f766e 50%, #0D9488 100%);
    background-size: 200% 200%;
    animation: gradient-shift 6s ease infinite;
}

@keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.feature-image-card {
    background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%);
}

.feature-item {
    transition: transform 0.3s ease;
}

.feature-item:hover {
    transform: translateX(8px);
}
</style>
