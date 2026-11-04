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
                        <li class="flex items-center gap-3 text-lg group" data-aos="fade-up" data-aos-delay="100">
                            <MarcaLista :retraso="100" class="w-5 h-5 flex-shrink-0" />
                            <span>Check-in con escaneo de DNI</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg group" data-aos="fade-up" data-aos-delay="150">
                            <MarcaLista :retraso="150" class="w-5 h-5 flex-shrink-0" />
                            <span>Envío automático a SES Hospedajes</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg group" data-aos="fade-up" data-aos-delay="200">
                            <MarcaLista :retraso="200" class="w-5 h-5 flex-shrink-0" />
                            <span>Encuestas INE de ocupación hotelera</span>
                        </li>
                        <li class="flex items-center gap-3 text-lg group" data-aos="fade-up" data-aos-delay="250">
                            <MarcaLista :retraso="250" class="w-5 h-5 flex-shrink-0" />
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
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover group" data-aos="fade-up" data-aos-delay="0">
                            <IconoReto nombre="checkin" :retraso="0" class="mb-4" />
                            <h3 class="font-semibold text-lg mb-2">"El check-in es eterno"</h3>
                            <p class="text-gray-600">Teclear datos de 10 huéspedes a mano lleva media hora. Con Hospedy, escaneas y listo.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover group" data-aos="fade-up" data-aos-delay="100">
                            <IconoReto nombre="parte" :retraso="100" class="mb-4" />
                            <h3 class="font-semibold text-lg mb-2">"Se me olvidó enviar el parte"</h3>
                            <p class="text-gray-600">No comunicar a tus viajeros es una infracción grave: multas de 601 a 30.000&nbsp;€ (Ley Orgánica 4/2015). Con Hospedy, los partes se envían solos.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm lift-hover group" data-aos="fade-up" data-aos-delay="200">
                            <IconoReto nombre="overbooking" :retraso="200" class="mb-4" />
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
                    <div class="flex gap-4 feature-item group" data-aos="fade-up" data-aos-delay="0">
                        <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center">
                            <IconoFuncion nombre="planning" :retraso="0" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Gestión de múltiples habitaciones</h3>
                            <p class="text-gray-600">Planning visual donde ves todas tus habitaciones de un vistazo. Arrastra reservas, cambia asignaciones, todo con un clic.</p>
                            <NuxtLink to="/funciones/planning-reservas" class="text-secondary font-semibold hover:underline underline-offset-4 text-lg mt-2 inline-block">Saber más →</NuxtLink>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item group" data-aos="fade-up" data-aos-delay="100">
                        <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center">
                            <IconoFuncion nombre="checkin" :retraso="100" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Check-in con escáner y auto check-in</h3>
                            <p class="text-gray-600">Escanea el DNI o el pasaporte en recepción, o deja que cada huésped lo haga desde su móvil antes de llegar. El parte sale solo.</p>
                            <NuxtLink to="/funciones/check-in" class="text-secondary font-semibold hover:underline underline-offset-4 text-lg mt-2 inline-block">Saber más →</NuxtLink>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item group" data-aos="fade-up" data-aos-delay="200">
                        <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center">
                            <IconoFuncion nombre="encuesta-hotel" :retraso="200" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                        </div>
                        <div>
                            <h3 class="font-semibold text-xl mb-2">Encuesta de Ocupación Hotelera</h3>
                            <p class="text-gray-600">Hospedy rellena la Encuesta de Ocupación Hotelera con los datos que ya tienes y la envía al INE con un clic, sin entrar en el portal del INE.</p>
                            <NuxtLink to="/funciones/encuestas-ine" class="text-secondary font-semibold hover:underline underline-offset-4 text-lg mt-2 inline-block">Saber más →</NuxtLink>
                        </div>
                    </div>
                    <div class="flex gap-4 feature-item group" data-aos="fade-up" data-aos-delay="300">
                        <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center">
                            <IconoFuncion nombre="factura" :retraso="300" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
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

            <!-- Hugo con lo de cada día de un hotel: cambios de habitación y grupos -->
            <BloqueHugo
                titulo="Hugo mueve reservas y reparte grupos"
                texto="Con muchas habitaciones, cambiar a alguien de habitación o separar la reserva de un grupo son varios pasos. A Hugo se lo dices en una frase: te prepara la propuesta y se aplica cuando la confirmas."
                :frases="['Pasa la reserva de los Wilson a la 102', 'Divide la reserva del grupo Martín: la 204, a nombre de Laura Martín', 'Reparte el grupo del congreso entre la 301 y la 305']"
                respuesta="Te lo preparo: revísalo y, si está bien, pulsa «Sí, aplicar»."
            />

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
