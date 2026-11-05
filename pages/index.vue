<template>
  <div>
    <!-- Pestaña flotante «Prueba gratis 30 días», o «Pide una demo» sin el registro en la web: solo pasada la cabecera,
         para no tapar la maqueta del portátil -->
    <a
      v-if="registroOfrecido"
      v-show="pestanaVisible"
      :href="appUrl('/register')"
      :class="CLASE_PESTANA"
      title="Crea tu cuenta de Hospedy y empieza la prueba gratis"
    >
      <svg class="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
      Prueba gratis 30 días
    </a>
    <PruebaHospedyButton v-else v-show="pestanaVisible" :class="CLASE_PESTANA">
      <svg class="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
      Pide una demo
    </PruebaHospedyButton>

    <!-- Cabecera. El padding de arriba deja sitio a la barra fija -->
    <section ref="cabecera" class="min-h-screen hero-gradient flex flex-col overflow-hidden relative pt-24 lg:pt-16">
      <div class="flex-1 flex items-center">
        <div class="w-full">
          <div class="grid lg:grid-cols-[45%_55%]">
            <div class="mx-6 sm:mx-10 mt-8 lg:mt-12 order-2 lg:order-1 flex flex-col justify-center">
              <!-- Lo que más busca quien llega: cada píldora lleva a su página -->
              <ul class="flex flex-wrap gap-2 mb-8" data-aos="fade-up" data-aos-delay="100">
                <li v-for="pildora in PILDORAS" :key="pildora.ruta">
                  <NuxtLink
                    :to="pildora.ruta"
                    class="flex items-center gap-1.5 px-3 py-1 rounded-full shadow-sm text-sm transition-colors"
                    :class="pildora.destacada ? 'bg-green-100 text-green-800 font-medium hover:bg-green-200' : 'bg-white/90 text-gray-700 hover:bg-white hover:text-secondary'"
                  >
                    <svg class="w-4 h-4" :class="pildora.destacada ? 'text-green-700' : 'text-primary'" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="pildora.icono"></path>
                    </svg>
                    {{ pildora.texto }}
                  </NuxtLink>
                </li>
              </ul>
              <h1 class="mb-5 font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200">
                <span class="block text-lg lg:text-xl font-semibold text-secondary mb-3">Programa de gestión para alojamientos turísticos<span class="sr-only">. </span></span>
                <span class="block text-4xl lg:text-5xl leading-tight">Díselo a Hugo: él prepara el trabajo y tú confirmas</span>
              </h1>
              <!-- La definición de Hospedy: la misma que la meta description, los datos estructurados y llms.txt -->
              <p class="mb-8 text-lg text-gray-700" data-aos="fade-up" data-aos-delay="300">{{ DEFINICION }}</p>
              <div data-aos="fade-up" data-aos-delay="400">
                <BotonesPrueba />
              </div>
              <p class="mt-5 text-lg text-gray-600">
                <template v-for="(tipo, i) in PARA_QUIEN" :key="tipo.ruta">
                  <NuxtLink :to="tipo.ruta" class="hover:text-secondary underline decoration-gray-300 underline-offset-4">{{ nombreCorto(tipo.nombre) }}</NuxtLink>
                  <span v-if="i < PARA_QUIEN.length - 1" aria-hidden="true"> · </span>
                </template>
                <span aria-hidden="true"> · </span>Soporte en español
              </p>
            </div>
            <div class="flex items-center justify-center lg:justify-end order-1 lg:order-2 mr-2" data-nosnippet>
              <!-- Maquetas en CSS del planning y, en el móvil, del chat de Hugo con un parte rechazado que prepara
                   para corregir y reenviar; datos de ejemplo. Es la primera pantalla: va en el HTML del servidor -->
              <MockDevices movil="hugo" />
            </div>
          </div>

          <!-- Cifras, con su valor ya en el HTML del servidor -->
          <div class="max-w-6xl mx-auto px-6 mt-12">
            <ul class="grid grid-cols-3 gap-6">
              <li class="text-center" data-aos="fade-up" data-aos-delay="100">
                <p class="text-3xl lg:text-4xl font-bold text-primary">0&nbsp;%</p>
                <p class="text-gray-600 text-lg lg:text-base mt-4">Comisión por reserva</p>
              </li>
              <li class="text-center" data-aos="fade-up" data-aos-delay="200">
                <p class="text-3xl lg:text-4xl font-bold text-primary">{{ totalAgencias }}</p>
                <p class="text-gray-600 text-lg lg:text-base mt-4">Agencias que puedes conectar</p>
              </li>
              <li class="text-center relative" data-aos="fade-up" data-aos-delay="300">
                <StarAccent class="-top-2 -right-1 lg:right-6" size="sm" animation="float" :opacity="0.7" :delay="0" />
                <p class="text-3xl lg:text-4xl font-bold text-primary">{{ TODAS_LAS_FUNCIONES.length }}</p>
                <p class="text-gray-600 text-lg lg:text-base mt-4">Funciones, en todos los planes</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Flecha para seguir bajando. Al bajar se desvanece sin dejar su hueco: con display: none la cabecera encogía
           88 px, y al volver atrás lo hacía justo al devolver el scroll, que se quedaba 88 px más arriba -->
      <div class="pb-6 flex justify-center transition-[opacity,visibility] duration-300" :class="{ 'opacity-0 invisible': !mostrarFlecha }">
        <a href="#hugo" class="animate-bounce" aria-label="Bajar a la siguiente sección">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Clientes y lo esencial -->
    <SocialProof />

    <!-- HUGO, justo después de los clientes: es lo que más nos diferencia -->
    <section id="hugo" class="hugo-banda py-16 mb-16" aria-labelledby="titulo-hugo">
      <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <p class="text-secondary font-semibold text-lg mb-3">Asistente con IA, incluido en todos los planes</p>
          <h2 id="titulo-hugo" class="text-4xl font-bold text-gray-900 mb-5">Hugo: se lo pides y lo prepara él</h2>
          <p class="text-xl text-gray-700 mb-8">
            Pídeselo como a una persona, escribiendo o con la voz. Hugo mira tus datos, te prepara el trabajo y no cambia
            nada hasta que tú lo confirmas.
          </p>
          <ul class="space-y-6 mb-8">
            <li v-for="(bloque, i) in BLOQUES_HUGO" :key="bloque.titulo" class="flex items-start gap-4 group" data-aos="fade-up" :data-aos-delay="i * 100">
              <span class="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-tertiary flex items-center justify-center">
                <IconoHugo :nombre="bloque.icono" :retraso="i * 100" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
              </span>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">{{ bloque.titulo }}</h3>
                <p class="text-lg text-gray-700 mt-1">{{ bloque.texto }}</p>
              </div>
            </li>
          </ul>
          <NuxtLink to="/funciones/hugo" class="btn btn-principal sm:flex-none inline-block px-6 py-3 font-semibold">Conoce a Hugo</NuxtLink>
        </div>
        <div class="flex justify-center" data-aos="fade-left">
          <!-- alto fijo: el hueco reservado mide lo mismo que la maqueta a cualquier ancho -->
          <MontarAlVerse class="w-full max-w-[380px] h-[520px]" descripcion="Ejemplo del chat de Hugo: le pides bajar la habitación Doble a 90 € del 1 al 7 de julio y te enseña el cambio para que lo confirmes.">
            <MockChatHugo :alto="444" />
          </MontarAlVerse>
        </div>
      </div>
    </section>

    <!-- ¿Qué alojamiento tienes? -->
    <section id="tu-alojamiento" class="max-w-6xl mx-auto px-6 mb-20" aria-labelledby="titulo-alojamiento">
      <h2 id="titulo-alojamiento" class="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-3" data-aos="fade-up">¿Qué alojamiento tienes?</h2>
      <p class="text-xl text-gray-600 text-center mb-10" data-aos="fade-up">Mira lo que Hospedy hace por el tuyo.</p>
      <ul class="grid md:grid-cols-3 gap-6">
        <li v-for="(tipo, i) in PARA_QUIEN" :key="tipo.ruta" data-aos="fade-up" :data-aos-delay="i * 100">
          <!-- en el móvil, en filas: el icono a la izquierda -->
          <NuxtLink :to="tipo.ruta" class="group flex md:flex-col gap-4 md:gap-0 h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6 hover:shadow-md hover:border-primary/30 transition">
            <span class="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-tertiary flex items-center justify-center md:mb-4">
              <!-- entra con su tarjeta, que AOS retrasa i * 100 ms -->
              <IconoAlojamiento :tipo="TIPOS_ALOJAMIENTO[i]" :retraso="i * 100" class="block w-[34px] h-[34px] md:w-10 md:h-10" />
            </span>
            <div class="flex flex-col flex-1">
              <h3 class="text-2xl font-bold text-gray-900 group-hover:text-secondary mb-2">{{ tipo.nombre }}</h3>
              <p class="text-lg text-gray-600 flex-1">{{ tipo.descripcion }}</p>
              <span class="mt-3 md:mt-4 font-semibold text-secondary">Ver Hospedy para {{ nombreCorto(tipo.nombre).toLowerCase() }} →</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <!-- Lo que nos hace diferentes: el texto siempre a la vista (antes solo salía al pasar el ratón y en el móvil no
         se veía) -->
    <section class="mb-8 relative" aria-labelledby="titulo-diferentes">
      <h2 id="titulo-diferentes" class="text-4xl text-primary text-center mb-6 lg:mb-10 px-6" data-aos="fade-up">Lo que nos hace diferentes</h2>
      <StarAccent class="top-4 left-[5%] hidden lg:block" size="sm" animation="twinkle" :opacity="0.5" :delay="0.2" />
      <StarAccent class="bottom-8 right-[8%] hidden lg:block" size="xs" animation="float" :opacity="0.4" :delay="0.9" />
      <ul class="grid lg:grid-cols-3 gap-2 lg:gap-8 mx-6 sm:mx-10">
        <li v-for="(diferencia, i) in DIFERENCIAS" :key="diferencia.titulo" class="flex justify-center" data-aos="fade-up" :data-aos-delay="i * 150">
          <div class="feature-card lift-hover group w-full max-w-sm flex lg:block items-start gap-4 text-left lg:text-center">
            <FiguraDiferencia :figura="diferencia.figura" class="block h-14 w-14 lg:h-20 lg:w-20 lg:mx-auto shrink-0" />
            <div>
              <h3 class="text-2xl text-secondary lg:mt-4">{{ diferencia.titulo }}</h3>
              <p class="text-gray-600 text-lg mt-2 lg:mt-4 lg:px-4">{{ diferencia.texto }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- GESTIONA -->
    <section id="gestiona" aria-labelledby="titulo-gestiona">
      <div class="m-10 text-center relative" data-aos="fade-up">
        <StarAccent class="-top-6 right-1/4 hidden lg:block" size="md" animation="float" :opacity="0.5" :delay="0.3" />
        <h2 id="titulo-gestiona" class="text-4xl sm:text-5xl lg:text-6xl text-gray-900">Gestiona tu alojamiento</h2>
        <p class="text-xl mt-8">Todo en una sola aplicación.</p>
      </div>

      <div class="grid lg:grid-cols-2 mx-6 lg:mx-16 mb-16 gap-4 relative">
        <StarAccent class="bottom-40 right-[3%] hidden lg:block" size="sm" animation="twinkle" :opacity="0.4" :delay="1.3" />

        <!-- 1. Check-in. data-demo-zona: con ratón, su demo solo se mueve con el ratón encima (composables/useDemo) -->
        <div class="gestiona-card-gradient rounded-2xl p-8 glow-hover" data-aos="fade-right" data-aos-delay="0" data-demo-zona>
          <!-- desde 1024px el móvil va a la derecha de todo el contenido -->
          <div class="flex flex-col lg:flex-row gap-6 xl:gap-8">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-4 mb-6">
                <span class="step-number-light" aria-hidden="true">1</span>
                <h3 class="text-3xl lg:text-2xl xl:text-3xl text-white font-semibold whitespace-nowrap">Check-in</h3>
              </div>
              <div class="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Formas de hacer el check-in">
                <button
                  v-for="(pestana, i) in PESTANAS_CHECKIN"
                  :key="pestana.titulo"
                  type="button"
                  role="tab"
                  :aria-selected="pestanaCheckin === i"
                  :class="[
                    'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300',
                    pestanaCheckin === i ? 'bg-white text-primary shadow-md' : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105',
                  ]"
                  @click="pestanaCheckin = i"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="pestana.icono"></path>
                  </svg>
                  {{ pestana.titulo }}
                </button>
              </div>
              <div v-for="(pestana, i) in PESTANAS_CHECKIN" v-show="pestanaCheckin === i" :key="pestana.titulo" role="tabpanel">
                <p class="text-xl mb-2 text-white font-semibold">{{ pestana.titular }}</p>
                <p class="text-white">{{ pestana.texto }}</p>
              </div>
              <NuxtLink to="/funciones/check-in" class="inline-block mt-4 text-gold font-semibold hover:underline underline-offset-4">Saber más del check-in →</NuxtLink>
            </div>
            <!-- Un solo hueco para las tres pestañas, con el alto del móvil (2,09 veces su ancho): la tarjeta no salta al
                 cambiar de pestaña -->
            <div class="flex justify-center items-center shrink-0 self-center w-[240px] h-[503px] lg:w-[160px] lg:h-[335px] xl:w-[220px] xl:h-[461px]">
              <MontarAlVerse class="w-full h-full" descripcion="El auto check-in de ejemplo en un móvil: el huésped hace una foto de su documento, revisa sus datos y firma.">
                <div class="w-full h-full flex items-center">
                  <!-- el auto check-in en demostración; es del visitante en cuanto lo toca -->
                  <div v-show="pestanaCheckin === 0" class="w-full">
                    <MockCheckinPhone demo />
                  </div>
                  <!-- lo primero que ve el huésped al abrir el enlace, para usarlo -->
                  <div v-show="pestanaCheckin === 1" class="w-full">
                    <MockCheckinPhone inicio="lista" />
                  </div>
                  <!-- el escáner en funcionamiento (solo CSS; se para fuera de la vista y con movimiento reducido) -->
                  <div v-show="pestanaCheckin === 2" class="w-full">
                    <MockEscaner />
                  </div>
                </div>
              </MontarAlVerse>
            </div>
          </div>
        </div>

        <!-- 2. Facturas -->
        <div class="gestiona-card-gradient group rounded-2xl p-8 glow-hover" data-aos="fade-left" data-aos-delay="100">
          <div class="flex items-center gap-4 mb-6">
            <span class="step-number-light" aria-hidden="true">2</span>
            <h3 class="text-3xl text-white font-semibold">Facturas</h3>
          </div>
          <p class="text-xl mb-2 text-white font-semibold">Facturas sin teclear</p>
          <p class="text-white">
            La factura sale de la reserva <span class="font-semibold text-gold">con un clic, con todos los datos</span>:
            depósitos, tasa turística, extras... todo calculado. Y Zenfisk, el programa de facturación y gastos con
            Verifactu, incluido en tu suscripción.
          </p>
          <NuxtLink to="/funciones/facturacion" class="inline-block mt-4 text-gold font-semibold hover:underline underline-offset-4">Saber más de la facturación →</NuxtLink>
          <div class="hidden sm:flex justify-center mt-6">
            <IlustracionPortada pieza="facturas" :retraso="100" class="block w-48 h-[150px] lg:w-64 lg:h-[200px]" />
          </div>
        </div>

        <!-- 3. Reservas, con la zona de su demo como la del check-in -->
        <div class="gestiona-card-gradient rounded-2xl p-8 glow-hover" data-aos="fade-right" data-aos-delay="200" data-demo-zona>
          <div class="flex items-center gap-4 mb-6">
            <span class="step-number-light" aria-hidden="true">3</span>
            <h3 class="text-3xl text-white font-semibold">Reservas</h3>
          </div>
          <p class="text-xl mb-2 text-white font-semibold">Todas tus reservas de un vistazo</p>
          <p class="text-white">
            Un calendario visual donde <span class="font-semibold text-gold">todo está bajo control</span>. Arrastra para
            mover reservas, haz clic para ver detalles. Como el planning de toda la vida, pero sin papeles.
          </p>
          <NuxtLink to="/funciones/planning-reservas" class="inline-block mt-4 text-gold font-semibold hover:underline underline-offset-4">Saber más del planning →</NuxtLink>
          <div class="flex justify-center mt-6">
            <!-- el planning en demostración: pasa días, mueve una reserva y abre su ficha -->
            <div class="w-full max-w-[480px]">
              <MontarAlVerse proporcion="1.52" descripcion="El planning de reservas de ejemplo en un portátil: las habitaciones en filas, los días en columnas y cada reserva como una barra.">
                <MockPlanning demo />
              </MontarAlVerse>
            </div>
          </div>
        </div>

        <!-- 4. Comunicaciones -->
        <div class="gestiona-card-gradient rounded-2xl p-8 glow-hover" data-aos="fade-left" data-aos-delay="300">
          <div class="flex items-center gap-4 mb-6">
            <span class="step-number-light" aria-hidden="true">4</span>
            <h3 class="text-3xl text-white font-semibold">Comunicaciones</h3>
          </div>
          <p class="text-xl mb-2 text-white font-semibold">Emails a tus huéspedes, cuando tú decidas</p>
          <p class="text-white">
            Confirmación, recordatorio de llegada, invitación al auto check-in, solicitud de pago o agradecimiento:
            <span class="font-semibold text-gold">empiezas con una plantilla</span>, eliges cuándo sale y Hospedy la envía
            con los datos de cada reserva.
          </p>
          <NuxtLink to="/funciones/comunicaciones" class="inline-block mt-4 text-gold font-semibold hover:underline underline-offset-4">Saber más de las comunicaciones →</NuxtLink>
          <ul class="mt-6 space-y-3" aria-label="Ejemplos de emails automáticos">
            <li v-for="email in EMAILS_EJEMPLO" :key="email.nombre" class="flex items-center gap-3 bg-white/95 rounded-xl px-4 py-3 shadow-sm">
              <span class="w-9 h-9 rounded-full bg-tertiary text-secondary flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </span>
              <span class="min-w-0">
                <span class="block font-semibold text-gray-900">{{ email.nombre }}</span>
                <span class="block text-sm text-gray-600">{{ email.cuando }}</span>
              </span>
            </li>
          </ul>
          <!-- y lo que contesta el huésped, de vuelta: en ámbar, como lo pendiente en Mensajes -->
          <NuxtLink to="/funciones/mensajes" class="group mt-3 flex items-center gap-3 bg-amber-50 rounded-xl px-4 py-3 shadow-sm hover:bg-white transition-colors">
            <span class="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="ICONO.responder"></path>
              </svg>
            </span>
            <span class="min-w-0">
              <span class="block font-semibold text-gray-900 group-hover:underline underline-offset-4">Si el huésped contesta, lo ves en Mensajes →</span>
              <span class="block text-sm text-gray-600">En la conversación de su reserva, y le respondes desde Hospedy</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CUMPLE -->
    <section id="cumple" aria-labelledby="titulo-cumple">
      <div class="m-10 text-center" data-aos="fade-up">
        <h2 id="titulo-cumple" class="text-4xl sm:text-5xl lg:text-6xl text-gray-900">Cumple la normativa</h2>
        <p class="text-xl mt-8">Los partes, la encuesta del INE y los documentos de tu comunidad, sin perder la mañana.</p>
      </div>
      <!-- las tarjetas, en columna y con la ilustración al pie: las dos ilustraciones quedan a la misma altura aunque la
           del INE lleve más texto. En el móvil más pequeño no salen -->
      <div class="grid lg:grid-cols-2 gap-4 mx-6 lg:mx-16">
        <div class="gestiona-card-gradient group flex flex-col rounded-2xl p-8 glow-hover" data-aos="fade-right">
          <h3 class="text-3xl text-white font-semibold mb-4">Partes de viajeros</h3>
          <p class="text-white">
            Se generan en el check-in y <span class="font-semibold text-gold">se envían solos</span> a SES Hospedajes o a
            la Ertzaintza, según lo que tengas activado, sin entrar en ningún portal. Tu libro de viajeros, siempre al día.
          </p>
          <NuxtLink to="/funciones/partes-viajeros" class="self-start inline-block mt-4 text-gold font-semibold hover:underline underline-offset-4">Saber más de los partes →</NuxtLink>
          <div class="hidden sm:flex justify-center mt-auto pt-6">
            <IlustracionNormativa pieza="partes" class="block w-48 h-[150px] lg:w-64 lg:h-[200px]" />
          </div>
        </div>
        <div class="gestiona-card-gradient group flex flex-col rounded-2xl p-8 glow-hover" data-aos="fade-left">
          <h3 class="text-3xl text-white font-semibold mb-4">Encuestas INE y documentos autonómicos</h3>
          <p class="text-white">
            La encuesta de ocupación de hoteles y de apartamentos <span class="font-semibold text-gold">se envía al INE con
            un clic</span>, sin entrar en el portal del INE. La de turismo rural sale rellena, lista para presentar.
          </p>
          <p class="text-white mt-4">
            Y el documento de admisión que piden once comunidades autónomas, desde la ficha de la reserva.
          </p>
          <NuxtLink to="/funciones/encuestas-ine" class="self-start inline-block mt-4 text-gold font-semibold hover:underline underline-offset-4">Ver cómo funciona →</NuxtLink>
          <div class="hidden sm:flex justify-center mt-auto pt-6">
            <IlustracionNormativa pieza="ine" class="block w-48 h-[150px] lg:w-64 lg:h-[200px]" />
          </div>
        </div>
      </div>

      <!-- Hugo también con la normativa: un parte rechazado se arregla pidiéndoselo -->
      <div class="mx-6 lg:mx-16 mb-16 mt-8 relative" data-aos="fade-up">
        <StarAccent class="-top-4 right-12 hidden lg:block" size="xs" animation="twinkle" :opacity="0.5" :delay="0.4" />
        <div class="group bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/30">
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center flex-shrink-0 sm:ml-8 lg:ml-16" aria-hidden="true">
              <IconoHugo nombre="rechazado" class="block w-10 h-10" />
            </div>
            <div class="flex-1 flex flex-col items-center text-center gap-4">
              <div>
                <p class="text-2xl font-bold text-gray-900 mb-2">¿Un parte rechazado? Díselo a Hugo</p>
                <p class="text-gray-700">
                  Muchos programas usan la IA para contestar a los huéspedes.
                  <span class="font-semibold text-gray-900">Hugo trabaja contigo</span>: si el registro rechaza un parte,
                  te dice por qué, corrige el dato y lo vuelve a enviar cuando le das el sí.
                </p>
              </div>
              <NuxtLink to="/funciones/hugo" class="btn btn-outline sm:flex-none px-6 whitespace-nowrap">Ver qué más hace Hugo</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VENDE -->
    <section id="crece" class="bg-gradient-to-b from-white via-tertiary/30 to-white py-16" aria-labelledby="titulo-crece">
      <div class="m-10 lg:mt-12 text-center relative" data-aos="fade-up">
        <StarAccent class="-top-4 left-1/4 hidden lg:block" size="sm" animation="twinkle" :opacity="0.5" :delay="0.7" />
        <h2 id="titulo-crece" class="text-4xl sm:text-5xl lg:text-6xl text-gray-900">Vende sin intermediarios</h2>
        <StarAccent class="top-2 right-1/4 hidden lg:block" size="lg" animation="float" :opacity="0.4" :delay="1.2" />
      </div>

      <div class="grid lg:grid-cols-2 mb-12 lg:mb-20 relative group">
        <div class="mx-6 sm:mx-10" data-aos="fade-right">
          <h3 class="text-4xl mb-4 text-secondary">Reservas directas, sin comisión por reserva</h3>
          <p class="text-xl mt-8">
            Con el motor de reservas de Hospedy los huéspedes reservan
            <span class="font-semibold text-black">directamente desde tu página web</span>, sin intermediarios ni
            comisión por reserva. Va incluido, con su calendario de precios y disponibilidad por días, conectes o no
            agencias.
          </p>
          <p class="text-xl mt-4">
            Las reservas aparecen solas en tu planning y, si conectas agencias, la disponibilidad se actualiza en todas.
          </p>
          <NuxtLink to="/funciones/motor-reservas" class="inline-block mt-4 text-xl text-secondary font-semibold hover:underline underline-offset-4">Calcula cuánto te ahorras →</NuxtLink>
        </div>
        <div class="hidden sm:flex justify-center items-center mt-8 lg:mt-0" data-aos="fade-left">
          <IlustracionPortada pieza="motor" class="block w-80 h-60" />
        </div>
      </div>

      <div class="grid lg:grid-cols-2 mb-12 lg:mb-20 relative">
        <!-- el planning de Hospedy rodeado de agencias, en CSS. En el móvil va debajo del texto -->
        <div class="order-2 lg:order-1 flex justify-center items-center mt-8 lg:mt-0" data-aos="fade-right">
          <MontarAlVerse class="w-3/4 max-w-[440px]" proporcion="500.92 / 417.85" descripcion="El planning de Hospedy rodeado de los logos de las agencias con las que conecta: Booking, Airbnb, Expedia y otras.">
            <MockCanales />
          </MontarAlVerse>
        </div>
        <div class="order-1 lg:order-2 mx-6 sm:mx-10" data-aos="fade-left">
          <h3 class="text-4xl mb-4 text-secondary">Channel Manager: todo sincronizado</h3>
          <p class="text-xl mt-8">
            Conecta con {{ totalAgencias }} agencias y <span class="font-semibold text-black">olvídate de los
            overbookings</span>: Booking, Expedia, Airbnb... con sus precios y su disponibilidad en un solo calendario.
          </p>
          <p class="text-xl mt-4">
            Cambias precios y disponibilidad desde Hospedy y salen hacia todas tus agencias, sin entrar en cada una.
          </p>
          <NuxtLink to="/funciones/channel-manager" class="inline-block mt-4 text-xl text-secondary font-semibold hover:underline underline-offset-4">Ver las agencias →</NuxtLink>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 lg:mb-8 relative group">
        <div class="mx-6 sm:mx-10" data-aos="fade-right">
          <h3 class="text-4xl mb-4 text-secondary">Cobra por adelantado, evita problemas</h3>
          <p class="text-xl mt-8">
            El TPV no funciona, los huéspedes no se presentan, han fumado en la habitación...
            <span class="font-semibold text-black">Cobra la reserva completa o un depósito</span> al reservar, o envía un
            enlace de pago, con la pasarela de Stripe.
          </p>
          <p class="text-xl mt-4">
            {{ comision }} por cobro, IVA incluido, más las tarifas de Stripe, solo si lo usas. El dinero va a tu propia cuenta.
          </p>
          <NuxtLink to="/funciones/cobros" class="inline-block mt-4 text-xl text-secondary font-semibold hover:underline underline-offset-4">Saber más de los cobros →</NuxtLink>
        </div>
        <div class="hidden sm:flex flex-col justify-center items-center mt-8 lg:mt-0" data-aos="fade-left">
          <IlustracionPortada pieza="pasarela" class="block w-80 h-60" />
        </div>
      </div>
    </section>

    <!-- OPINIONES -->
    <section id="testimonios" aria-label="Opiniones de clientes">
      <Testimonials />
    </section>

    <!-- PRECIOS EN RESUMEN -->
    <section id="precios" class="max-w-5xl mx-auto px-6 mt-20" aria-labelledby="titulo-precios">
      <div class="text-center relative mb-10" data-aos="fade-up">
        <StarAccent class="-top-2 right-1/3 hidden lg:block" size="md" animation="pulse" :opacity="0.6" :delay="0.4" />
        <h2 id="titulo-precios" class="text-4xl sm:text-5xl lg:text-6xl text-gray-900">Precios claros</h2>
        <p class="text-2xl font-semibold text-secondary mt-6">{{ MENSAJE_PLANES.titulo }}</p>
        <p class="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">{{ MENSAJE_PLANES.texto }}</p>
      </div>
      <ul class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" data-aos="fade-up">
        <li
          v-for="plan in PLANES"
          :key="plan.nombre"
          class="bg-white rounded-2xl border p-4 sm:p-5 text-center"
          :class="plan.recomendado ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'"
        >
          <p class="font-bold text-lg text-gray-900">{{ plan.nombre }}</p>
          <p class="text-gray-500">{{ plan.unidades }}</p>
          <p class="text-3xl font-bold text-primary mt-3">{{ plan.mensual }}&nbsp;€<span class="text-base font-normal text-gray-500">/mes</span></p>
          <p class="text-sm text-gray-500">o {{ miles(plan.anual) }}&nbsp;€ al año</p>
        </li>
      </ul>
      <p class="text-center text-gray-600 mt-4">Precios sin IVA · 30 días gratis · Sin permanencia</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <NuxtLink to="/precios" class="btn btn-principal sm:flex-none px-8 py-3 font-semibold">Ver precios</NuxtLink>
        <NuxtLink to="/comparar" class="btn btn-outline sm:flex-none px-8 py-3">Comparar con otros PMS</NuxtLink>
      </div>
    </section>

    <!-- CIERRE -->
    <CtaFinal />

    <!-- Volver arriba -->
    <button
      v-show="mostrarVolverArriba"
      type="button"
      class="fixed bottom-6 right-6 w-12 h-12 bg-gold rounded-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 shadow-lg z-40"
      title="Volver arriba"
      @click="volverArriba"
    >
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
      </svg>
      <span class="sr-only">Volver arriba</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { DEFINICION } from '~/utils/sitio'
import { PARA_QUIEN, TODAS_LAS_FUNCIONES } from '~/utils/navegacion'
import { MENSAJE_PLANES, PLANES, TEXTO_COMISION_COBROS } from '~/utils/precios'

// la definición entera (más de 300 caracteres) no cabe en el resultado de un buscador: esta, en unos 155
useSeoPagina({
  titulo: 'PMS con asistente de IA para alojamientos turísticos',
  descripcion: 'PMS para hoteles, casas rurales y apartamentos con Hugo, un asistente de IA que te prepara el trabajo. Partes de viajeros, INE y channel. Desde 35 €/mes.',
})
useEsquema('software', esquemaSoftware())

// enlaces a la app (registro) con el código de amigo si se llegó con uno
const { appUrl } = useReferral()
const { registroOfrecido } = usePruebaHospedy()
const CLASE_PESTANA = 'fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-b from-primary to-secondary text-white font-semibold py-3 px-4 rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 writing-vertical hidden lg:flex items-center gap-2 animate-bounce-subtle'

// las agencias, la cifra real: las del channel manager (server/api/agencias.get.ts)
const { data: agenciasDelChannel } = await useFetch('/api/agencias', { key: 'agencias-total', pick: ['total'] })
const totalAgencias = computed(() => agenciasDelChannel.value?.total || 150)

const comision = TEXTO_COMISION_COBROS

// Iconos de 24 × 24 con trazo (como los de Heroicons)
const ICONO = {
  escudo: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  sincronizar: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  tarjeta: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  chispas: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  movil: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  sobre: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  pantalla: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  responder: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6',
}

const PILDORAS = [
  { texto: 'Asistente con IA', ruta: '/funciones/hugo', icono: ICONO.chispas, destacada: true },
  { texto: 'SES Hospedajes y Ertzaintza', ruta: '/funciones/partes-viajeros', icono: ICONO.escudo },
  { texto: 'Channel Manager', ruta: '/funciones/channel-manager', icono: ICONO.sincronizar },
  { texto: 'Cobros online', ruta: '/funciones/cobros', icono: ICONO.tarjeta },
]

// los iconos de cada tipo (IconoAlojamiento), en el orden de PARA_QUIEN
const TIPOS_ALOJAMIENTO = ['hotel', 'rural', 'apartamento'] as const

const DIFERENCIAS = [
  { titulo: 'Todo en uno', texto: 'Reservas, partes, facturas, channel manager y Hugo, tu asistente con IA, en una sola aplicación.', figura: 'esfera' },
  { titulo: 'Tan fácil que sorprende', texto: 'Si sabes usar WhatsApp, sabes usar Hospedy. Y si dudas de algo, se lo preguntas a Hugo.', figura: 'cuadrado' },
  { titulo: 'Gestiona desde la playa', texto: 'Móvil, tablet u ordenador, sin instalar nada. Estés donde estés, todo bajo control.', figura: 'velero' },
] as const

const PESTANAS_CHECKIN = [
  {
    titulo: 'En el mostrador',
    icono: ICONO.movil,
    titular: 'Escanea y listo',
    texto: 'Escanea el DNI o el pasaporte desde tu móvil o tablet y los datos se rellenan solos. El huésped firma en la pantalla.',
  },
  {
    titulo: 'Auto check-in',
    icono: ICONO.sobre,
    titular: 'El huésped lo hace antes de llegar',
    texto: 'El huésped recibe el enlace por email, o se lo envías tú por donde quieras, y rellena sus datos antes de llegar.',
  },
  {
    titulo: 'Escáner de escritorio',
    icono: ICONO.pantalla,
    titular: 'Con un escáner en recepción',
    texto: 'Lee el DNI, el pasaporte y los demás documentos con su banda de caracteres (MRZ).',
  },
]

const EMAILS_EJEMPLO = [
  { nombre: 'Invitación al auto check-in', cuando: 'Al recibir la reserva' },
  { nombre: 'Recordatorio de llegada', cuando: '2 días antes de la entrada, a las 10:00' },
  { nombre: 'Agradecimiento', cuando: 'El día de la salida, solo si hizo el check-in' },
]

// Los tres trabajos de Hugo que más tiempo quitan (manual: hugo-usar-asistente, hugo-arreglos y hugo-pendientes), con su
// icono (IconoHugo)
const BLOQUES_HUGO = [
  {
    titulo: 'Precios y cierres en una frase',
    texto: '«Baja la Doble a 90 € del 1 al 7 de julio»: cambia los de muchos días de una vez y te enseña cada noche con el precio de antes y el nuevo.',
    icono: 'precios',
  },
  {
    titulo: 'Arregla lo que no cuadra',
    texto: '«Pasa a los Wilson a la 102» o «el registro ha rechazado el parte de Luis Gómez, corrígelo y reenvíalo»: te lo prepara en una tarjeta y se aplica cuando pulsas «Sí, aplicar».',
    icono: 'arregla',
  },
  {
    titulo: 'Te dice qué tienes pendiente',
    texto: 'Reservas sin habitación, partes rechazados, cobros de las salidas y mensajes sin contestar, y lo que conviene revisar, como dos reservas que parecen la misma.',
    icono: 'pendiente',
  },
] as const

// «Hoteles y hostales» se queda en «Hoteles», y «Apartamentos turísticos» en «Apartamentos»
function nombreCorto(nombre: string) {
  return nombre.replace(' y hostales', '').replace(' turísticos', '')
}

// 1290 → «1.290», como el resto de la web
function miles(numero: number) {
  return String(numero).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const pestanaCheckin = ref(0)
const cabecera = ref<HTMLElement | null>(null)
const pestanaVisible = ref(false)
const mostrarVolverArriba = ref(false)
const mostrarFlecha = ref(true)

function alHacerScroll() {
  const y = window.scrollY
  const altoCabecera = cabecera.value?.offsetHeight || window.innerHeight
  pestanaVisible.value = y > altoCabecera - 120
  mostrarVolverArriba.value = y > window.innerHeight
  mostrarFlecha.value = y < 50
}

function volverArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  alHacerScroll()
  window.addEventListener('scroll', alHacerScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', alHacerScroll)
})
</script>

<style scoped>
.hero-gradient {
  background:
    radial-gradient(ellipse at 20% 0%, rgba(245, 158, 11, 0.25) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, rgba(13, 148, 136, 0.15) 0%, transparent 50%),
    linear-gradient(to bottom right, rgba(255, 180, 0, 0.35) 0%, rgba(255, 255, 255, 1) 60%);
}

@media (min-width: 1024px) {
  .hero-gradient {
    background:
      radial-gradient(ellipse at 10% 0%, rgba(245, 158, 11, 0.4) 0%, transparent 40%),
      radial-gradient(ellipse at 90% 80%, rgba(13, 148, 136, 0.2) 0%, transparent 40%),
      linear-gradient(to bottom right, rgba(255, 180, 0, 0.65) 0%, rgba(255, 255, 255, 1) 55%);
  }
}

.feature-card {
  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
}

@media (min-width: 1024px) {
  .feature-card {
    padding: 2rem 1.5rem;
  }
}

.feature-card:hover {
  background-color: rgba(204, 251, 241, 0.5);
  box-shadow: 0 4px 20px rgba(13, 148, 136, 0.15);
}

/* Números de las tarjetas de «Gestiona» */
.step-number-light {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  color: #0d9488;
  font-size: 2rem;
  font-weight: bold;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

.gestiona-card-gradient {
  background: linear-gradient(135deg, #0f766e 0%, #24c9bb 100%);
  transition: all 0.3s ease;
}

.gestiona-card-gradient:hover {
  box-shadow: 0 8px 30px rgba(13, 148, 136, 0.4);
  transform: translateY(-2px);
}

.hugo-banda {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(13, 148, 136, 0.1) 100%);
}

/* Pestaña flotante: el texto en vertical */
.writing-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

@keyframes bounce-subtle {
  0%,
  100% {
    transform: translateY(-50%) translateX(0);
  }
  50% {
    transform: translateY(-50%) translateX(-4px);
  }
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

.animate-bounce-subtle:hover {
  animation: none;
  transform: translateY(-50%) translateX(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .animate-bounce-subtle {
    animation: none;
  }
}
</style>
