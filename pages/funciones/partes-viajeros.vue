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

            <!-- How it works: los tres pasos y, al lado, el auto check-in de ejemplo, que es donde el huésped escanea su
                 documento y deja los datos con los que sale su parte -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
                <div class="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
                    <ol class="space-y-10">
                        <li class="flex gap-5">
                            <span class="w-16 h-16 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary" aria-hidden="true">1</span>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">Escanea el documento</h3>
                                <p class="text-gray-600">En el mostrador, con la cámara del móvil o un escáner. O lo hace el huésped desde su móvil con el auto check-in, antes de llegar. Los datos se rellenan solos.</p>
                            </div>
                        </li>
                        <li class="flex gap-5">
                            <span class="w-16 h-16 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary" aria-hidden="true">2</span>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">Hospedy genera el parte</h3>
                                <p class="text-gray-600">Con todos los datos del huésped y la reserva. Sin que tengas que escribir nada.</p>
                            </div>
                        </li>
                        <li class="flex gap-5">
                            <span class="w-16 h-16 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary" aria-hidden="true">3</span>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">Envío automático</h3>
                                <p class="text-gray-600">El parte sale al cuerpo policial que tengas activado. Tu libro de viajeros queda al día.</p>
                            </div>
                        </li>
                    </ol>
                    <figure class="flex flex-col items-center">
                        <div class="w-[250px] sm:w-[270px]">
                            <MontarAlVerse proporcion="288 / 602.64" descripcion="El auto check-in de ejemplo en un móvil: el huésped hace una foto de su documento, revisa sus datos y firma.">
                                <MockCheckinPhone />
                            </MontarAlVerse>
                        </div>
                        <figcaption class="mt-5 max-w-[300px] text-center text-gray-600">
                            Pruébalo: es el auto check-in que recibe el huésped. Escanea su documento y sus datos se rellenan solos; al marcar su llegada, queda registrado y su parte sale.
                        </figcaption>
                    </figure>
                </div>
            </div>

            <!-- Benefits -->
            <div class="bg-gray-50 py-16 mt-20">
                <div class="max-w-5xl mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-12">Por qué automatizar los partes</h2>
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div class="group bg-white p-6 rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="0">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center">
                                    <IconoPartes nombre="cronometro" :retraso="0" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Menos tiempo en recepción</h3>
                                    <p class="text-gray-600">Sin teclear los datos del huésped: escaneas el documento y el formulario se rellena solo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="group bg-white p-6 rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="100">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center">
                                    <IconoPartes nombre="formulario" :retraso="100" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Menos errores al teclear</h3>
                                    <p class="text-gray-600">Los datos se leen del documento, así que te ahorras las erratas de copiarlos a mano.</p>
                                </div>
                            </div>
                        </div>
                        <div class="group bg-white p-6 rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="200">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center">
                                    <IconoPartes nombre="multa" :retraso="200" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">Evita multas</h3>
                                    <p class="text-gray-600">No comunicar a tus viajeros es una infracción grave: multas de 601 a 30.000&nbsp;€ (Ley Orgánica 4/2015). Con el envío automático, cada parte sale solo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="group bg-white p-6 rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="300">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center">
                                    <IconoPartes nombre="envio" :retraso="300" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
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
                        <div class="group bg-white rounded-xl p-6 text-center shadow-sm" data-aos="fade-up" data-aos-delay="0">
                            <div class="w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center mx-auto mb-3">
                                <IconoPartes nombre="registro" :retraso="0" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                            </div>
                            <h3 class="font-semibold mb-1">SES Hospedajes</h3>
                            <p class="text-lg text-gray-500">Policía Nacional y Guardia Civil</p>
                        </div>
                        <div class="group bg-white rounded-xl p-6 text-center shadow-sm" data-aos="fade-up" data-aos-delay="100">
                            <div class="w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center mx-auto mb-3">
                                <IconoPartes nombre="registro" :retraso="100" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                            </div>
                            <h3 class="font-semibold mb-1">Ertzaintza</h3>
                            <p class="text-lg text-gray-500">País Vasco</p>
                        </div>
                        <div class="group bg-white rounded-xl p-6 text-center shadow-sm" data-aos="fade-up" data-aos-delay="200">
                            <div class="w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center mx-auto mb-3">
                                <IconoPartes nombre="registro" :retraso="200" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
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
