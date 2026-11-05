<template>
    <div>
        <div class="pt-24">
            <div class="max-w-6xl mx-auto px-6">
                <MigasDePan :migas="[{ nombre: 'Funciones', ruta: '/funciones' }, { nombre: 'Encuestas INE', ruta: '/funciones/encuestas-ine' }]" />
            </div>
            <!-- Hero -->
            <div class="text-center max-w-4xl mx-auto px-6 mt-8">
                <div class="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Envío al INE con un clic, incluido
                </div>
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Encuestas INE enviadas con un clic
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Otros sistemas solo generan un archivo XML que tú debes subir manualmente. Hospedy envía la encuesta directamente al INE con un solo clic.
                </p>
                <BotonesPrueba centrados />
            </div>

            <!-- Why different -->
            <div class="max-w-4xl mx-auto px-6 mt-16">
                <div class="bg-gradient-to-r from-green-50 to-primary/5 border border-green-200 rounded-2xl p-8">
                    <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">¿Por qué somos diferentes?</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-red-50 p-6 rounded-xl border border-red-100">
                            <p class="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <IconoMarca tipo="no" class="text-lg" />
                                Otros PMS
                            </p>
                            <ol class="text-red-700 space-y-2">
                                <li class="flex items-start gap-2">
                                    <span class="bg-red-200 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                                    <span>Generan archivo XML</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="bg-red-200 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                                    <span>Tú descargas el archivo</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="bg-red-200 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                                    <span>Entras en el portal del INE</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="bg-red-200 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
                                    <span>Subes el archivo manualmente</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="bg-red-200 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">5</span>
                                    <span>Verificas que no hay errores</span>
                                </li>
                            </ol>
                        </div>
                        <div class="bg-green-50 p-6 rounded-xl border border-green-200">
                            <p class="font-bold text-green-800 mb-4 flex items-center gap-2">
                                <IconoMarca tipo="si" class="text-lg" />
                                Hospedy
                            </p>
                            <ol class="text-green-700 space-y-2">
                                <li class="flex items-start gap-2">
                                    <span class="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                                    <span>Haces clic en "Enviar al INE"</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                                    <span class="font-semibold">¡Listo! Nosotros nos encargamos</span>
                                </li>
                            </ol>
                            <p class="mt-4 text-green-800 font-medium text-sm">Sin descargas y sin entrar en el portal del INE.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Survey types -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-4">Las tres encuestas del INE</h2>
                <p class="text-center text-gray-600 mb-12">La de ocupación hotelera y la de apartamentos se envían al INE desde Hospedy; la de turismo rural se descarga rellena, lista para presentar.</p>
                <div class="grid lg:grid-cols-3 gap-8">
                    <div class="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="0">
                        <div class="w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center mb-4">
                            <IconoFuncion nombre="encuesta-hotel" :retraso="0" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Encuesta de Ocupación Hotelera</h3>
                        <p class="text-gray-600">Para hoteles y establecimientos similares. Datos de ocupación, pernoctaciones y procedencia. Se envía al INE con un clic.</p>
                    </div>
                    <div class="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="100">
                        <div class="w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center mb-4">
                            <IconoFuncion nombre="encuesta-apartamento" :retraso="100" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Encuesta de Apartamentos Turísticos</h3>
                        <p class="text-gray-600">Para apartamentos, villas y alojamientos de alquiler completo. Se envía al INE con un clic.</p>
                    </div>
                    <div class="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="200">
                        <div class="w-12 h-12 md:w-14 md:h-14 bg-tertiary rounded-xl flex items-center justify-center mb-4">
                            <IconoFuncion nombre="encuesta-rural" :retraso="200" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Encuesta de Turismo Rural</h3>
                        <p class="text-gray-600">Para casas rurales, albergues y establecimientos de turismo rural. Hospedy te la deja rellena con los datos del mes para que la descargues y la presentes tú.</p>
                    </div>
                </div>
            </div>

            <!-- Regional documents -->
            <div class="bg-gray-50 py-16 mt-20">
                <div class="max-w-5xl mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-8">También documentos autonómicos</h2>
                    <p class="text-center text-gray-600 text-lg mb-12">Algunas comunidades autónomas exigen documentos propios. Hospedy los genera rellenos con tus datos; presentarlos sigue siendo cosa tuya.</p>
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div class="bg-white p-6 rounded-xl">
                            <h3 class="font-semibold text-lg mb-2">Castilla y León</h3>
                            <p class="text-gray-600">Encuesta de Ocupación en Alojamientos de Turismo Rural de Castilla y León, lista para descargar cada mes.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl">
                            <h3 class="font-semibold text-lg mb-2">Documento de admisión en once comunidades</h3>
                            <p class="text-gray-600">Documento de admisión y parte de entrada del viajero para Andalucía, Aragón, Canarias, Cantabria, Castilla-La Mancha, Ceuta, Comunitat Valenciana, La Rioja, Navarra, País Vasco y Región de Murcia. Se genera desde la ficha de la reserva y desde el listado de huéspedes.</p>
                        </div>
                    </div>
                    <p class="text-center text-gray-500 mt-8">¿Tu comunidad pide algo más? <NuxtLink to="/contacto" class="text-secondary font-semibold hover:underline">Escríbenos</NuxtLink> y lo vemos contigo.</p>
                </div>
            </div>

            <!-- How it works -->
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Así de fácil</h2>
                <div class="space-y-8">
                    <div class="flex gap-6 items-start" data-aos="fade-up">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                        <div>
                            <h3 class="text-xl font-semibold mb-2">Gestiona tus reservas como siempre</h3>
                            <p class="text-gray-600">Hospedy va recopilando los datos de ocupación automáticamente mientras trabajas.</p>
                        </div>
                    </div>
                    <div class="flex gap-6 items-start" data-aos="fade-up">
                        <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                        <div>
                            <h3 class="text-xl font-semibold mb-2">Al final del mes, haz clic en "Enviar"</h3>
                            <p class="text-gray-600">Un clic y Hospedy envía la encuesta de ocupación al INE por su servicio web. Sin entrar en el portal del INE ni subir archivos.</p>
                        </div>
                    </div>
                    <div class="flex gap-6 items-start group" data-aos="fade-up">
                        <!-- a 48 px y con -m-1, para que su disco mida 40 como los de los otros pasos sin mover el texto -->
                        <MarcaLista class="flex-shrink-0 w-12 h-12 -m-1" />
                        <div>
                            <h3 class="text-xl font-semibold mb-2">¡Listo! Nosotros nos encargamos</h3>
                            <p class="text-gray-600">El INE responde en el momento y Hospedy guarda la fecha y el resultado de cada envío.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Benefits -->
            <div class="max-w-5xl mx-auto px-6 mt-20">
                <div class="grid lg:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="text-4xl font-bold text-primary mb-2">1 clic</div>
                        <p class="text-gray-600">Para enviar la encuesta de hoteles o de apartamentos</p>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-primary mb-2">0</div>
                        <p class="text-gray-600">Archivos que subir al portal del INE</p>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-primary mb-2">11</div>
                        <p class="text-gray-600">Comunidades con su documento de admisión</p>
                    </div>
                </div>
            </div>

            <!-- El paso siguiente: funciones, guías y tipos de alojamiento relacionados -->
            <RelacionesPagina clave="encuestas-ine" />

            <CtaFinal />
        </div>
    </div>
</template>

<script setup lang="ts">
const DESCRIPCION = 'La encuesta de ocupación hotelera o de apartamentos, al INE con un clic y sin entrar en su portal; la de turismo rural y los documentos autonómicos, rellenos.'

useSeoPagina({
    titulo: 'Encuesta de ocupación del INE con un clic',
    descripcion: DESCRIPCION,
})
useEsquema('pagina', esquemaPagina('WebPage', { nombre: 'Encuestas INE enviadas con un clic', descripcion: DESCRIPCION, ruta: '/funciones/encuestas-ine', sobreHospedy: true }))
</script>
