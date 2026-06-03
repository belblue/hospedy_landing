<template>
    <div>
        <Navbar />
        <!-- Hero with gradient -->
        <div class="subpage-hero pt-24 pb-16 relative overflow-hidden">
            <!-- Decorative Stars -->
            <StarAccent class="top-32 left-[8%] hidden lg:block" size="lg" animation="float" :opacity="0.4" :delay="0.2" />
            <StarAccent class="top-44 right-[15%] hidden lg:block" size="sm" animation="twinkle" :opacity="0.5" :delay="1" />

            <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
                <div class="lg:mt-12" data-aos="fade-right">
                    <p class="text-secondary font-semibold text-lg mb-4">Software para apartamentos turisticos</p>
                    <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Menos comisiones, mas reservas directas
                    </h1>
                    <p class="text-xl text-gray-600 mb-6">
                        Deja de depender solo de Airbnb y Booking. Motor de reservas sin comisiones, channel manager para evitar overbookings y partes automaticos.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="100">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Motor de reservas sin comisiones</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="150">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Channel Manager con +50 OTAs</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="200">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Cobro de depositos con Stripe</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg" data-aos="fade-up" data-aos-delay="250">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Partes de viajeros automaticos</span>
                        </li>
                    </ul>
                    <div class="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="300">
                        <NuxtLink class="btn btn-grad btn-shimmer" to="/demo">Solicitar demo</NuxtLink>
                    </div>
                </div>
                <div class="flex items-center justify-center" data-aos="fade-left" data-aos-delay="200">
                    <img src="/laptop_and_phone.webp" alt="Gestion de apartamentos turisticos" class="max-w-full hover:scale-105 transition-transform duration-500">
                </div>
            </div>
        </div>

        <div class="mb-16">
            <!-- Pain points -->
            <div class="section-gradient-alt py-16">
                <div class="max-w-5xl mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-4" data-aos="fade-up">Los problemas de gestionar apartamentos</h2>
                    <p class="text-center text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="100">¿Te sientes identificado?</p>
                    <div class="grid lg:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover" data-aos="fade-up" data-aos-delay="0">
                            <div class="text-3xl mb-4">💸</div>
                            <h3 class="font-semibold text-lg mb-2">"Las comisiones me comen"</h3>
                            <p class="text-gray-600">Booking cobra 15%, Airbnb otro tanto... Con un motor de reservas propio, cada reserva directa es 100% tuya.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover" data-aos="fade-up" data-aos-delay="100">
                            <div class="text-3xl mb-4">😱</div>
                            <h3 class="font-semibold text-lg mb-2">"Otro no-show mas"</h3>
                            <p class="text-gray-600">Reservan y no aparecen. Con Stripe integrado, cobras depositos y te aseguras de que vengan.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover" data-aos="fade-up" data-aos-delay="200">
                            <div class="text-3xl mb-4">📱</div>
                            <h3 class="font-semibold text-lg mb-2">"Actualizo 5 calendarios"</h3>
                            <p class="text-gray-600">Booking, Airbnb, Vrbo, tu web... Con el Channel Manager todo se sincroniza automaticamente.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Commission savings -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-8" data-aos="fade-up">Cuanto te ahorras en comisiones</h2>
                <div class="savings-card rounded-2xl p-8" data-aos="zoom-in">
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div class="bg-white p-6 rounded-xl border-2 border-red-200 lift-hover">
                            <h3 class="text-xl font-semibold mb-4 text-red-600">Reserva via Booking</h3>
                            <p class="text-gray-600 mb-2">Apartamento 3 noches × 100€/noche</p>
                            <p class="text-gray-600 mb-4">Comision Booking: 15%</p>
                            <p class="text-3xl font-bold text-red-600">-45€</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border-2 border-green-200 lift-hover">
                            <h3 class="text-xl font-semibold mb-4 text-green-600">Reserva directa con Hospedy</h3>
                            <p class="text-gray-600 mb-2">Apartamento 3 noches × 100€/noche</p>
                            <p class="text-gray-600 mb-4">Comision Hospedy: 0%</p>
                            <p class="text-3xl font-bold text-green-600">0€</p>
                        </div>
                    </div>
                    <div class="text-center mt-8 p-4 bg-white/80 rounded-lg">
                        <p class="text-lg">
                            Con <span class="font-bold">10 reservas directas al mes</span> de 300€ de media,
                            <span class="font-bold text-primary">ahorras 450€/mes</span> en comisiones.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Key features -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Pensado para apartamentos turisticos</h2>
                <div class="grid lg:grid-cols-2 gap-12">
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="0">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Motor de reservas para tu web</h3>
                            <p class="text-gray-600">Un codigo que pegas en tu pagina y empiezas a recibir reservas directas. Sin comisiones, sin intermediarios.</p>
                            <NuxtLink to="/funciones/motor-reservas" class="text-primary hover:underline text-lg mt-2 inline-block">Saber mas →</NuxtLink>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="100">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Channel Manager</h3>
                            <p class="text-gray-600">Conecta Booking, Airbnb, Vrbo, Expedia y +50 OTAs. Cuando entra una reserva, se bloquea en todas las demas.</p>
                            <NuxtLink to="/funciones/channel-manager" class="text-primary hover:underline text-lg mt-2 inline-block">Ver agencias →</NuxtLink>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="200">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Cobro de depositos</h3>
                            <p class="text-gray-600">Evita disgustos cobrando depositos o la reserva completa. Integrado con Stripe, la pasarela mas segura.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="300">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Gestion de varios apartamentos</h3>
                            <p class="text-gray-600">Una cuenta, multiples propiedades. Cada apartamento tiene su calendario pero los ves todos juntos.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="400">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Encuesta de Apartamentos Turisticos</h3>
                            <p class="text-gray-600">Hospedy genera automaticamente la encuesta del INE especifica para apartamentos turisticos.</p>
                            <NuxtLink to="/funciones/encuestas-ine" class="text-primary hover:underline text-lg mt-2 inline-block">Ver mas →</NuxtLink>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item" data-aos="fade-up" data-aos-delay="500">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Auto check-in</h3>
                            <p class="text-gray-600">Perfecto para llegadas fuera de horario. El huesped se registra antes de llegar y tu solo entregas las llaves.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Testimonial -->
            <div class="testimonial-gradient py-16 mt-20 relative overflow-hidden">
                <StarAccent class="top-6 right-[12%] hidden lg:block" size="md" animation="pulse" :opacity="0.4" :delay="0.6" />
                <StarAccent class="bottom-10 left-[8%] hidden lg:block" size="xs" animation="twinkle" :opacity="0.35" :delay="1.4" />
                <div class="max-w-3xl mx-auto px-6 text-center" data-aos="fade-up">
                    <div class="text-5xl mb-6 text-secondary">"</div>
                    <p class="text-2xl text-gray-700 mb-6">
                        Gestiono 8 apartamentos en el centro de Zaragoza. Desde que uso Hospedy he pasado del 90% de reservas por Booking al 60%. El resto son directas y me ahorro una pasta.
                    </p>
                    <p class="font-semibold text-lg">Laura Martinez</p>
                    <p class="text-gray-500">Apartamentos Centro Zaragoza</p>
                </div>
            </div>

            <!-- CTA -->
            <div class="cta-gradient text-center mt-20 py-16 px-6">
                <h2 class="text-3xl font-bold mb-4 text-white" data-aos="fade-up">Prueba Hospedy en tus apartamentos</h2>
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
    title: 'Software para Apartamentos Turisticos - Hospedy',
    meta: [
        { name: 'description', content: 'Software para apartamentos turisticos con motor de reservas sin comisiones, channel manager y partes automaticos. Menos comisiones, mas reservas directas.' }
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

.savings-card {
    background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(245, 158, 11, 0.15) 100%);
}

@keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.feature-item {
    transition: transform 0.3s ease;
}

.feature-item:hover {
    transform: translateX(8px);
}
</style>
