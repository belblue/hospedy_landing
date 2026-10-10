<template>
    <div>
        <div class="pt-24">
            <div class="max-w-6xl mx-auto px-6">
                <MigasDePan :migas="[{ nombre: 'Funciones', ruta: '/funciones' }, { nombre: 'Partes de viajeros', ruta: '/funciones/partes-viajeros' }]" />
            </div>
            <!-- Hero -->
            <div class="text-center max-w-4xl mx-auto px-6 mt-8">
                <p class="text-secondary font-semibold text-lg mb-4">Cumplimiento normativo automático</p>
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Partes de viajeros que se envían solos
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Olvida las multas y el papeleo. Hospedy genera y envía los partes automáticamente a SES Hospedajes y Ertzaintza cada vez que haces un check-in.
                </p>
                <BotonesPrueba centrados />
            </div>

            <!-- How it works -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
                <div class="grid lg:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-primary">1</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Escanea el DNI</h3>
                        <p class="text-gray-600">Con la cámara del móvil o un lector de documentos. Los datos se extraen automáticamente.</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-primary">2</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Hospedy genera el parte</h3>
                        <p class="text-gray-600">Con todos los datos del huésped y la reserva. Sin que tengas que escribir nada.</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-primary">3</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Envío automático</h3>
                        <p class="text-gray-600">El parte sale al cuerpo policial que tengas activado. Tu libro de viajeros queda al día.</p>
                    </div>
                </div>
            </div>

            <!-- Benefits -->
            <div class="bg-gray-50 py-16 mt-20">
                <div class="max-w-5xl mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-12">Por qué automatizar los partes</h2>
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Menos tiempo en recepción</h3>
                                    <p class="text-gray-600">Sin teclear los datos del huésped: escaneas el documento y el formulario se rellena solo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Menos errores al teclear</h3>
                                    <p class="text-gray-600">Los datos se leen del documento, así que te ahorras las erratas de copiarlos a mano.</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Evita multas</h3>
                                    <p class="text-gray-600">No comunicar a tus viajeros es una infracción grave: multas de 601 a 30.000&nbsp;€ (Ley Orgánica 4/2015). Con el envío automático, cada parte sale solo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Envío automático a SES y Ertzaintza</h3>
                                    <p class="text-gray-600">Lo envía solo a SES Hospedajes (Policía Nacional y Guardia Civil) o a la Ertzaintza, según lo que tengas activado en la ficha de tu alojamiento. Lo configuramos contigo una sola vez.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Multi-police support -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <div class="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold mb-4">Envío a SES Hospedajes, Ertzaintza y Mossos d'Esquadra</h2>
                        <p class="text-gray-600 text-lg max-w-2xl mx-auto">Configuramos contigo, una sola vez, el envío a los cuerpos que te corresponden, con las credenciales que te da cada organismo. Desde entonces, cada parte sale solo.</p>
                    </div>
                    <div class="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div class="bg-white rounded-xl p-6 text-center shadow-sm">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 class="font-semibold mb-1">SES Hospedajes</h3>
                            <p class="text-lg text-gray-500">Policía Nacional y Guardia Civil</p>
                        </div>
                        <div class="bg-white rounded-xl p-6 text-center shadow-sm">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 class="font-semibold mb-1">Ertzaintza</h3>
                            <p class="text-lg text-gray-500">País Vasco</p>
                        </div>
                        <div class="bg-white rounded-xl p-6 text-center shadow-sm">
                            <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 class="font-semibold mb-1">Mossos d'Esquadra</h3>
                            <p class="text-lg text-gray-500">Cataluña</p>
                        </div>
                    </div>
                    <p class="text-center text-gray-600 mt-8">La activación se hace una sola vez, con nosotros, desde la ficha de tu alojamiento.</p>
                </div>
            </div>

            <!-- SES Hospedajes explanation -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-8">Qué es SES Hospedajes</h2>
                <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 text-lg">
                        SES Hospedajes es el sistema del Ministerio del Interior de España para el registro de viajeros.
                        Todos los establecimientos de hospedaje están obligados a comunicar los datos de sus huéspedes
                        en las primeras 24 horas desde su llegada.
                    </p>
                    <p class="text-gray-600 text-lg mt-4">
                        Con Hospedy, esta comunicación es automática. Cuando registras un huésped, el parte se genera
                        y se envía sin que tengas que hacer nada más. Además, tu libro de viajeros queda actualizado
                        y disponible para cualquier inspección.
                    </p>
                </div>
            </div>

            <!-- El paso siguiente: funciones, guías y tipos de alojamiento relacionados -->
            <RelacionesPagina clave="partes-viajeros" />

            <CtaFinal />
        </div>
    </div>
</template>

<script setup lang="ts">
const DESCRIPCION = 'Hospedy envía los partes de viajeros a SES Hospedajes o a la Ertzaintza sin entrar en ningún portal: escaneas el documento y el parte sale solo.'

useSeoPagina({
    titulo: 'Partes de viajeros a SES Hospedajes y Ertzaintza',
    descripcion: DESCRIPCION,
})
useEsquema('pagina', esquemaPagina('WebPage', { nombre: 'Partes de viajeros que se envían solos', descripcion: DESCRIPCION, ruta: '/funciones/partes-viajeros', sobreHospedy: true }))
</script>
