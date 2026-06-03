
<template>
    <div class="footer w-full text-center ">
        <!-- Trust Badges -->
        <div class="pb-8 mb-8 border-b border-white/20">
            <p class="text-gray-800 text-lg mb-4">Cumplimiento y seguridad garantizados</p>
            <div class="flex flex-wrap justify-center items-center gap-4 lg:gap-6 px-6">
                <!-- GDPR/RGPD Badge -->
                <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <span class="text-lg text-gray-800 font-medium">RGPD</span>
                </div>
                <!-- SES Hospedajes -->
                <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span class="text-lg text-gray-800 font-medium">SES Hospedajes</span>
                </div>
                <!-- Ertzaintza -->
                <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span class="text-lg text-gray-800 font-medium">Ertzaintza</span>
                </div>
                <!-- Stripe -->
                <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                    <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                    </svg>
                    <span class="text-lg text-gray-800 font-medium">Pagos seguros</span>
                </div>
                <!-- SSL -->
                <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span class="text-lg text-gray-800 font-medium">SSL 256-bit</span>
                </div>
                <!-- INE -->
                <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                    <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span class="text-lg text-gray-800 font-medium">Encuestas INE</span>
                </div>
            </div>
        </div>

        <!-- Footer Navigation -->
        <div class="grid lg:grid-cols-4 gap-8 text-left max-w-5xl mx-auto px-6">
            <!-- Soluciones -->
            <div>
                <h4 class="text-black font-semibold mb-4">Soluciones</h4>
                <ul class="space-y-2">
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/hoteles">Para hoteles</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/casas-rurales">Para casas rurales</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/apartamentos">Para apartamentos</NuxtLink></li>
                </ul>
            </div>
            <!-- Funciones -->
            <div>
                <h4 class="text-black font-semibold mb-4">Funciones</h4>
                <ul class="space-y-2">
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/funciones/partes-viajeros">Partes de viajeros</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/funciones/encuestas-ine">Encuestas INE</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/funciones/motor-reservas">Motor de reservas</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/funciones/channel-manager">Channel Manager</NuxtLink></li>
                </ul>
            </div>
            <!-- Recursos -->
            <div>
                <h4 class="text-black font-semibold mb-4">Recursos</h4>
                <ul class="space-y-2">
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/blog">Blog</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/comparar">Comparar PMS</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/faq">Preguntas frecuentes</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/demo">Solicitar demo</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/precios">Precios</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/programa-amigos">Programa Amigos</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/#contacto">Contacto</NuxtLink></li>
                </ul>
            </div>
            <!-- Legal -->
            <div>
                <h4 class="text-black font-semibold mb-4">Legal</h4>
                <ul class="space-y-2">
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/privacidad">Politica de privacidad</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/aviso_legal">Aviso legal</NuxtLink></li>
                    <li><NuxtLink class="text-white hover:text-white transition-colors" to="/cookies">Politica de cookies</NuxtLink></li>
                </ul>
            </div>
        </div>

        <p class="text-lg text-white mt-8">Síguenos en:</p>
        <div class="flex justify-center">
            <NuxtLink class=" py-2" href="https://www.facebook.com/Ridid-122157706306005/?modal=admin_todo_tour" title="cuenta de facebook de Hospedy"  target="_blank" aria-label="facebook">
                <img class="bg-white rounded-xl" width="35px" src="/facebook.svg" alt="cuenta de facebook Hospedy">
            </NuxtLink>
            <NuxtLink href="https://www.instagram.com/ridid.me/" class="ml-5 py-2" title="cuenta de instagram de Hospedy" aria-label="instagram"  target="_blank">
                <img class="bg-white rounded-xl" width="35px" src="/instagram.svg" alt="cuenta de instagram Hospedy">
            </NuxtLink>
            <NuxtLink href="https://www.youtube.com/@ridid-gestionhostelera8053" class="ml-2 py-1" title="cuenta de youtube de Hospedy" aria-label="youtube"  target="_blank">
                <img class="" width="70px" src="/youtube.svg" alt="cuenta de youtube de Hospedy">
            </NuxtLink>
        </div>
        <p class="text-lg text-white mt-4">©Hospedy 2024 - Diseñado por Silatek SLU</p>
    </div>
</template>
