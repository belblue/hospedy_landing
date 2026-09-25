<template>
    <div>
        <Navbar />
        <div class="mt-24 mb-16">
            <!-- Hero -->
            <div class="text-center max-w-4xl mx-auto px-6">
                <div class="inline-block bg-gold/20 text-gold font-semibold px-4 py-2 rounded-full mb-4">
                    Programa de referidos
                </div>
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Programa Amigos de Hospedy
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Recomienda Hospedy y gana meses gratis. Cuanto mayor sea el plan de tu amigo, más meses ganas tú.
                </p>
            </div>

            <!-- How it works -->
            <div class="max-w-5xl mx-auto px-6 mt-16">
                <h2 class="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
                <div class="grid lg:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-primary">1</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Comparte tu código</h3>
                        <p class="text-gray-600">Tu código se forma con el nombre de tu empresa, por ejemplo HOSPEDY-JUAN-GARCIA. Compártelo con otros alojamientos turísticos o envíales tu enlace de invitación.</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-primary">2</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Tu amigo contrata</h3>
                        <p class="text-gray-600">Tu amigo crea su cuenta con tu código y paga su primera cuota.</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-primary">3</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Tú ganas meses gratis</h3>
                        <p class="text-gray-600">Los meses se añaden solos a tu suscripción y retrasan tu próximo cobro.</p>
                    </div>
                </div>
            </div>

            <!-- Rewards table -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-8">Cuánto ganas por cada referido</h2>
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="text-left p-4 font-semibold">Tu amigo contrata</th>
                                <th class="text-center p-4 font-semibold text-primary">Tú ganas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-t border-gray-100">
                                <td class="p-4">
                                    <span class="font-medium">Esencial</span>
                                    <span class="text-gray-500 ml-2">(350€/año)</span>
                                </td>
                                <td class="p-4 text-center">
                                    <span class="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">1 mes gratis</span>
                                </td>
                            </tr>
                            <tr class="border-t border-gray-100 bg-primary/5">
                                <td class="p-4">
                                    <span class="font-medium">Profesional</span>
                                    <span class="text-gray-500 ml-2">(590€/año)</span>
                                </td>
                                <td class="p-4 text-center">
                                    <span class="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">2 meses gratis</span>
                                </td>
                            </tr>
                            <tr class="border-t border-gray-100">
                                <td class="p-4">
                                    <span class="font-medium">Business</span>
                                    <span class="text-gray-500 ml-2">(890€/año)</span>
                                </td>
                                <td class="p-4 text-center">
                                    <span class="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">3 meses gratis</span>
                                </td>
                            </tr>
                            <tr class="border-t border-gray-100 bg-primary/5">
                                <td class="p-4">
                                    <span class="font-medium">Enterprise</span>
                                    <span class="text-gray-500 ml-2">(1.290€/año)</span>
                                </td>
                                <td class="p-4 text-center">
                                    <span class="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">4 meses gratis</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="text-center text-gray-500 mt-4">Sin límite de referidos. Los meses se acumulan.</p>
            </div>

            <!-- Embajador -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <div class="bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl p-8 lg:p-12">
                    <div class="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div class="inline-block bg-gold text-white font-semibold px-3 py-1 rounded-full text-sm mb-4">
                                Estatus especial
                            </div>
                            <h2 class="text-3xl font-bold mb-4">Conviértete en Embajador</h2>
                            <p class="text-gray-600 text-lg mb-6">
                                Con 5 amigos que ya hayan pagado su primera cuota, te convertimos en Embajador de Hospedy.
                            </p>
                        </div>
                        <div class="bg-white rounded-xl p-6 shadow-sm">
                            <h3 class="font-semibold text-lg mb-4">Beneficios de Embajador:</h3>
                            <ul class="space-y-3">
                                <li class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span><strong>10&nbsp;% de descuento</strong> en tu renovación</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span><strong>Sigue ganando</strong> meses gratis por cada referido</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FAQ -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
                <div class="space-y-6">
                    <div class="border-b border-gray-200 pb-6">
                        <h3 class="font-semibold text-lg mb-2">¿Cómo consigo mi código?</h3>
                        <p class="text-gray-600">Se crea solo con el nombre de la empresa que tienes en tu perfil, con guiones entre palabras y sin coletillas como SL: si tu empresa es "Juan García, SL", tu código sería HOSPEDY-JUAN-GARCIA. Lo ves en tu Panel de usuario, en el bloque "Programa Amigos", junto al botón para copiar tu enlace de invitación.</p>
                    </div>
                    <div class="border-b border-gray-200 pb-6">
                        <h3 class="font-semibold text-lg mb-2">¿Cuándo recibo los meses gratis?</h3>
                        <p class="text-gray-600">Cuando tu amigo paga su primera cuota. Los meses se añaden solos a tu suscripción y retrasan tu próximo cobro.</p>
                    </div>
                    <div class="border-b border-gray-200 pb-6">
                        <h3 class="font-semibold text-lg mb-2">¿Hay límite de referidos?</h3>
                        <p class="text-gray-600">No, puedes referir a tantos amigos como quieras. Los meses se van acumulando sin límite.</p>
                    </div>
                    <div class="border-b border-gray-200 pb-6">
                        <h3 class="font-semibold text-lg mb-2">¿Caduca mi código?</h3>
                        <p class="text-gray-600">No, tu código no caduca mientras seas cliente de Hospedy.</p>
                    </div>
                    <div class="border-b border-gray-200 pb-6">
                        <h3 class="font-semibold text-lg mb-2">¿Te ha invitado otro alojamiento?</h3>
                        <p class="text-gray-600">Escribe su código al crear tu cuenta; si llegas con su enlace, ya viene puesto. Si se te olvida, puedes añadirlo en tu perfil durante tus primeros 30 días. Quien te invitó verá el nombre de tu alojamiento.</p>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-20 px-6">
                <h2 class="text-3xl font-bold mb-4">¿Aún no eres cliente?</h2>
                <p class="text-xl text-gray-600 mb-8">Crea tu cuenta, prueba Hospedy 30 días gratis y empieza a invitar a tus amigos.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <PruebaHospedyButton class="btn btn-grad" />
                    <NuxtLink class="btn btn-outline" to="/precios">Ver precios</NuxtLink>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Programa Amigos - Gana meses gratis recomendando Hospedy',
    meta: [
        { name: 'description', content: 'Gana hasta 4 meses gratis de Hospedy por cada amigo que pague su primera cuota, sin límite. Con 5 amigos eres Embajador: 10 % de descuento en tu renovación.' }
    ]
})
</script>
