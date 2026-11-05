<template>
    <div class="testimonials-gradient py-8 shadow-[0_6px_20px_rgba(0,0,0,0.12)] relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-8" data-aos="fade-up">
                <p class="text-white text-2xl font-medium">Lo que dicen nuestros clientes</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col" data-aos="fade-up" data-aos-delay="0">
                    <p class="text-gray-700 mb-6 leading-relaxed flex-1">
                        "Soy torpe con el ordenador, pero con Hospedy me he animado a <span class="font-semibold text-primary">dejar la libreta de lado</span> y actualizar la forma en la que trabajo."
                    </p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="/testimonios/MC-zalama.webp" alt="Cliente MC" width="48" height="48" loading="lazy" class="w-12 h-12 rounded-full object-cover">
                            <p class="text-lg text-gray-500">Burgos</p>
                        </div>
                        <IconoMarca :estrellas="5" />
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col" data-aos="fade-up" data-aos-delay="100">
                    <p class="text-gray-700 mb-6 leading-relaxed flex-1">
                        "Cada vez nos exigen más cosas y el tiempo simplemente no da para más. <span class="font-semibold text-primary">Somos hoteleros, no policías ni funcionarios</span>. Nos hacen perder mucho tiempo."
                    </p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="/testimonios/O-prado.webp" alt="Cliente O" width="48" height="48" loading="lazy" class="w-12 h-12 rounded-full object-cover">
                            <p class="text-lg text-gray-500">Burgos</p>
                        </div>
                        <IconoMarca :estrellas="5" />
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col" data-aos="fade-up" data-aos-delay="200">
                    <p class="text-gray-700 mb-6 leading-relaxed flex-1">
                        "No tengo recepción en la casa y antes era todo un lío. Ahora <span class="font-semibold text-primary">lo hacemos todo desde el móvil en un momento</span> o lo hacen los huéspedes solos."
                    </p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="/testimonios/MA-solar.webp" alt="Cliente MA" width="48" height="48" loading="lazy" class="w-12 h-12 rounded-full object-cover">
                            <p class="text-lg text-gray-500">Álava</p>
                        </div>
                        <IconoMarca :estrellas="5" />
                    </div>
                </div>
            </div>

            <!-- Los principios: cada uno lleva a su pregunta de la FAQ -->
            <div class="flex flex-wrap justify-center gap-3 mt-10" data-aos="fade-up" data-aos-delay="300">
                <NuxtLink to="/faq#permanencia" class="bg-white px-4 py-2 rounded-full text-base font-medium text-black shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                    <img src="/permanencia.svg" alt="" width="16" height="16" class="w-4 h-4 icon-teal" />Sin permanencia
                </NuxtLink>
                <NuxtLink to="/faq#letra-pequena" class="bg-white px-4 py-2 rounded-full text-base font-medium text-black shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                    <span class="text-lg font-bold text-secondary">A</span>Sin letra pequeña
                </NuxtLink>
                <NuxtLink to="/faq#si-algo-falla" class="bg-white px-4 py-2 rounded-full text-base font-medium text-black shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                    <img src="/humanos.svg" alt="" width="16" height="16" class="w-4 h-4 icon-teal" />Asumimos errores
                </NuxtLink>
                <NuxtLink to="/faq#igualdad" class="bg-white px-4 py-2 rounded-full text-base font-medium text-black shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                    <img src="/igualdad.svg" alt="" width="16" height="16" class="w-4 h-4 icon-teal" />Igualdad
                </NuxtLink>
                <NuxtLink to="/faq#sugerencias" class="bg-white px-4 py-2 rounded-full text-base font-medium text-black shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                    <img src="/flexibilidad.svg" alt="" width="16" height="16" class="w-4 h-4 icon-teal" />Flexibilidad
                </NuxtLink>
            </div>
            <div class="text-center mt-4">
                <NuxtLink to="/faq" class="text-white font-medium hover:underline">Saber más →</NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.testimonials-gradient {
    background: linear-gradient(135deg, #0f766e 0%, #24c9bb 100%);
}

.icon-teal {
    filter: invert(52%) sepia(85%) saturate(401%) hue-rotate(127deg) brightness(92%) contrast(91%);
}
</style>
