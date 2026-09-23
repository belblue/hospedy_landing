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
                            <img src="/testimonios/MC-zalama.png" alt="Cliente MC" class="w-12 h-12 rounded-full object-cover">
                            <p class="text-lg text-gray-500">Burgos</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col" data-aos="fade-up" data-aos-delay="100">
                    <p class="text-gray-700 mb-6 leading-relaxed flex-1">
                        "Cada vez nos exigen más cosas y el tiempo simplemente no da para más. <span class="font-semibold text-primary">Somos hoteleros, no policías ni funcionarios</span>. Nos hacen perder mucho tiempo."
                    </p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="/testimonios/O-prado.png" alt="Cliente O" class="w-12 h-12 rounded-full object-cover">
                            <p class="text-lg text-gray-500">Burgos</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col" data-aos="fade-up" data-aos-delay="200">
                    <p class="text-gray-700 mb-6 leading-relaxed flex-1">
                        "No tengo recepción en la casa y antes era todo un lío. Ahora <span class="font-semibold text-primary">lo hacemos todo desde el móvil en un momento</span> o lo hacen los huéspedes solos."
                    </p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="/testimonios/MA-solar.png" alt="Cliente MA" class="w-12 h-12 rounded-full object-cover">
                            <p class="text-lg text-gray-500">Álava</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Principles badges -->
            <div class="flex flex-wrap justify-center gap-3 mt-10" data-aos="fade-up" data-aos-delay="300">
                <NuxtLink to="/faq" class="bg-white px-4 py-2 rounded-full text-base font-medium text-black shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                    <img src="/permanencia.svg" alt="" class="w-4 h-4 icon-teal" />Sin permanencia
                </NuxtLink>
                <NuxtLink to="/faq" class="bg-white px-4 py-2 rounded-full text-base font-medium text-black shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                    <span class="text-lg font-bold text-secondary">A</span>Sin letra pequeña
                </NuxtLink>
                <NuxtLink to="/faq" class="bg-white px-4 py-2 rounded-full text-base font-medium text-black shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                    <img src="/humanos.svg" alt="" class="w-4 h-4 icon-teal" />Asumimos errores
                </NuxtLink>
                <NuxtLink to="/faq" class="bg-white px-4 py-2 rounded-full text-base font-medium text-black shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                    <img src="/igualdad.svg" alt="" class="w-4 h-4 icon-teal" />Igualdad
                </NuxtLink>
                <NuxtLink to="/faq" class="bg-white px-4 py-2 rounded-full text-base font-medium text-black shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                    <img src="/flexibilidad.svg" alt="" class="w-4 h-4 icon-teal" />Flexibilidad
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
