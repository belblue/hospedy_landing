<template>
    <div>
        <Navbar />
        <div class="mt-24 mb-16">
            <div class="text-center max-w-3xl mx-auto px-6">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Tu cuenta de demo de Hospedy
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Cuéntanos cómo es tu alojamiento y te preparamos un entorno de pruebas a su medida, con datos
                    ficticios: el calendario con ocupación, las llegadas del día y los partes de viajeros enviándose a
                    un entorno de pruebas. Te llegará el enlace por email en unos minutos.
                </p>
            </div>
            <div class="max-w-3xl mx-auto px-6">
                <DemoAccountForm />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
// Mientras la demo bajo demanda no esté montada (sin NUXT_PUBLIC_DEMO_ENABLED=true o sin
// NUXT_PUBLIC_PANEL_API_BASE) la página solo remite a las otras dos formas de probar Hospedy: no
// se indexa.
const { demoLista } = usePruebaHospedy()

useHead({
    title: 'Cuenta de demo - Prueba Hospedy con datos de ejemplo',
    meta: [
        { name: 'description', content: 'Responde un breve cuestionario y prueba Hospedy en un entorno de demo con datos ficticios parecido a tu alojamiento. Sin tarjeta y sin compromiso.' },
        ...(demoLista.value ? [] : [{ name: 'robots', content: 'noindex, follow' }]),
    ],
})
</script>
