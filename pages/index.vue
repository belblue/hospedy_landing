<template>
  <div class="overflow-x-hidden">
    <Navbar />
    <ExitIntentPopup />

    <!-- Floating Demo Button -->
    <NuxtLink
      to="/demo"
      class="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-b from-primary to-secondary text-white font-semibold py-3 px-4 rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 writing-vertical hidden lg:flex items-center gap-2 animate-bounce-subtle"
    >
      <svg
        class="w-5 h-5 rotate-90"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
      Solicitar demo
    </NuxtLink>
    <!-- Hero Section. El padding de arriba deja sitio a la barra fija: sin el, cuando el
         contenido no cabe en una pantalla (movil, tablet), empieza debajo de ella -->
    <div
      class="min-h-screen hero-gradient flex flex-col overflow-hidden relative pt-24 lg:pt-16"
    >
      <div class="flex-1 flex items-center">
        <div class="w-full">
          <div class="grid lg:grid-cols-[45%_55%]">
            <div
              class="mx-10 mt-8 lg:mt-12 order-2 lg:order-1 flex flex-col justify-center"
            >
              <!-- Trust Badges -->
              <div
                class="flex flex-wrap gap-2 mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  class="flex items-center gap-1.5 bg-white/80 px-3 py-1 rounded-full shadow-sm"
                >
                  <svg
                    class="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span class="text-sm text-gray-700">SES Hospedajes</span>
                </div>
                <div
                  class="flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full shadow-sm"
                >
                  <svg
                    class="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                  <span class="text-sm text-gray-700">Pagos</span>
                </div>
                <div
                  class="flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full shadow-sm"
                >
                  <svg
                    class="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span class="text-sm text-gray-700">Ertzaintza</span>
                </div>
                <div
                  class="flex items-center gap-1.5 bg-green-100 px-3 py-1 rounded-full shadow-sm"
                >
                  <svg
                    class="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <span class="text-sm text-green-700 font-medium"
                    >INE automático</span
                  >
                </div>
                <div
                  class="flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full shadow-sm"
                >
                  <svg
                    class="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    ></path>
                  </svg>
                  <span class="text-sm text-gray-700">Channel Manager</span>
                </div>
              </div>
              <h1
                class="mb-4 text-4xl lg:text-5xl font-bold text-gray-900"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Más tiempo para lo que importa, menos para el ordenador
              </h1>
              <h2
                class="mb-8 text-xl lg:text-2xl text-gray-600"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Para todo tipo de alojamientos turísticos, todos gestionados
                bajo un mismo perfil.
              </h2>
              <div
                class="flex flex-col sm:flex-row gap-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <NuxtLink
                  class="btn btn-grad-wave btn-shimmer px-5 py-2"
                  to="/#contacto"
                  title="Accede a la página de registro de Hospedy para iniciar la prueba gratis"
                  >Prueba gratis 30 días</NuxtLink
                >
                <NuxtLink
                  class="btn btn-outline-gradient btn-wiggle px-5 py-2"
                  to="/demo"
                  title="Solicita una demostración personalizada de Hospedy"
                  ><span>Solicitar demo</span></NuxtLink
                >
              </div>
              <p class="mt-4 text-lg text-gray-500">
                Hoteles · Casas rurales · Apartamentos · Soporte en español
              </p>
            </div>
            <div
              class="flex items-center justify-center lg:justify-end order-1 lg:order-2 mr-2"
            >
              <!-- Maquetas en CSS del planning y del auto check-in: sustituyen a
                   la captura /laptop_and_phone.webp, que ensenaba la version
                   antigua del producto. Datos de ejemplo, sin API. -->
              <MockDevices />
            </div>
          </div>
          <!-- Stats Row -->
          <div ref="statsRef" class="max-w-6xl mx-auto px-6 mt-12">
            <div class="grid grid-cols-3 gap-6">
              <div class="text-center" data-aos="fade-up" data-aos-delay="100">
                <p class="text-3xl lg:text-4xl font-bold text-primary">
                  {{ statCommissions }}%
                </p>
                <p class="text-gray-600 text-lg lg:text-base mt-4">
                  Comisiones en reservas
                </p>
              </div>
              <div class="text-center" data-aos="fade-up" data-aos-delay="200">
                <p class="text-3xl lg:text-4xl font-bold text-primary">
                  {{ statOtas }}+
                </p>
                <p class="text-gray-600 text-lg lg:text-base mt-4">
                  OTAs conectadas
                </p>
              </div>
              <div
                class="text-center relative"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <!-- Decorative Star next to 14h stat -->
                <StarAccent
                  class="-top-2 -right-1 lg:right-6"
                  size="sm"
                  animation="float"
                  :opacity="0.7"
                  :delay="0"
                />
                <p class="text-3xl lg:text-4xl font-bold text-primary">
                  {{ statHours }}h
                </p>
                <p class="text-gray-600 text-lg lg:text-base mt-4">
                  Ahorro semanal en papeleo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Scroll Indicator -->
      <div
        v-show="showScrollIndicator"
        class="pb-6 flex justify-center transition-opacity duration-300"
      >
        <a href="#gestiona" class="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-primary opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
    <!-- Social Proof Strip -->
    <SocialProof />

    <!-- Section Intro -->
    <div class="text-center my-12" data-aos="fade-up">
      <p class="text-4xl text-primary">Lo que nos hace diferentes</p>
    </div>

    <!-- Hover-expand feature cards -->
    <div class="grid lg:grid-cols-3 mx-10 lg:gap-8 mb-8 relative">
      <StarAccent
        class="top-4 left-[5%] hidden lg:block"
        size="sm"
        animation="twinkle"
        :opacity="0.5"
        :delay="0.2"
      />
      <StarAccent
        class="bottom-8 right-[8%] hidden lg:block"
        size="xs"
        animation="float"
        :opacity="0.4"
        :delay="0.9"
      />
      <!-- 1. Todo en uno -->
      <div
        class="flex justify-center mb-8"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <div class="feature-card group cursor-pointer lift-hover">
          <img
            class="mx-auto h-20 group-hover:h-16 transition-all duration-300 float-1"
            src="/completo.svg"
            alt="Todo en uno"
          />
          <div
            class="text-center text-2xl text-secondary group-hover:text-primary mt-4 transition-colors duration-300"
          >
            Todo en uno
          </div>
          <div
            class="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out"
          >
            <p class="text-gray-600 text-lg mt-4 px-4">
              Reservas, partes, facturas, INE y channel manager en una sola app.
            </p>
          </div>
        </div>
      </div>
      <!-- 2. Fácil de usar -->
      <div
        class="flex justify-center mb-8"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div class="feature-card group cursor-pointer lift-hover">
          <img
            class="mx-auto h-20 group-hover:h-16 transition-all duration-300 float-2"
            src="/intuitivo.svg"
            alt="Fácil de usar"
          />
          <div
            class="text-center text-2xl text-secondary group-hover:text-primary mt-4 transition-colors duration-300"
          >
            Tan fácil que sorprende
          </div>
          <div
            class="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out"
          >
            <p class="text-gray-600 text-lg mt-4 px-4">
              Si sabes usar WhatsApp, sabes usar Hospedy. En minutos, no en
              días.
            </p>
          </div>
        </div>
      </div>
      <!-- 3. Desde cualquier lugar -->
      <div
        class="flex justify-center mb-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="feature-card group cursor-pointer lift-hover">
          <img
            class="mx-auto h-20 group-hover:h-16 transition-all duration-300 float-3"
            src="/accesible.svg"
            alt="Gestiona desde cualquier lugar"
          />
          <div
            class="text-center text-2xl text-secondary group-hover:text-primary mt-4 transition-colors duration-300"
          >
            Gestiona desde la playa
          </div>
          <div
            class="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out"
          >
            <p class="text-gray-600 text-lg mt-4 px-4">
              Móvil, tablet u ordenador. Estés donde estés, todo bajo control.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION: GESTIONA -->
    <div id="gestiona"></div>
    <div class="m-10 text-center relative" data-aos="fade-up">
      <StarAccent
        class="-top-6 right-1/4 hidden lg:block"
        size="md"
        animation="float"
        :opacity="0.5"
        :delay="0.3"
      />
      <p class="text-6xl text-gray-900">Gestiona tu alojamiento</p>
      <p class="text-xl mt-8">Todo en una sola aplicación.</p>
    </div>

    <!-- 2x2 Grid Layout -->
    <div class="grid lg:grid-cols-2 mx-6 lg:mx-16 mb-16 gap-4 relative">
      <StarAccent
        class="bottom-40 right-[3%] hidden lg:block"
        size="sm"
        animation="twinkle"
        :opacity="0.4"
        :delay="1.3"
      />
      <!-- 1. Check-in (Top Left). data-demo-zona: con raton, su demo solo se mueve con el
           raton encima de la tarjeta (composables/useDemo) -->
      <div
        class="gestiona-card-gradient rounded-2xl p-8 glow-hover"
        data-aos="fade-right"
        data-aos-delay="0"
        data-demo-zona
      >
        <!-- desde 1024px el movil va a la derecha de todo el contenido: la tarjeta crece lo
             justo y la de Facturas, que comparte fila, no se queda medio vacia -->
        <div class="flex flex-col lg:flex-row gap-6 xl:gap-8">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-4 mb-6">
              <span class="step-number-light">1</span>
              <p class="text-3xl lg:text-2xl xl:text-3xl text-white font-semibold whitespace-nowrap">Check-in</p>
            </div>

            <!-- Tab Buttons -->
            <div class="flex flex-wrap gap-2 mb-6">
              <button
                @click="activeCheckInTab = 0"
                :class="[
                  'checkin-tab-sm flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300',
                  activeCheckInTab === 0
                    ? 'bg-white text-primary shadow-md'
                    : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105',
                ]"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
                Check-in en 30 seg
              </button>
              <button
                @click="activeCheckInTab = 1"
                :class="[
                  'checkin-tab-sm flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300',
                  activeCheckInTab === 1
                    ? 'bg-white text-primary shadow-md'
                    : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105',
                ]"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Auto check-in
              </button>
              <button
                @click="activeCheckInTab = 2"
                :class="[
                  'checkin-tab-sm flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300',
                  activeCheckInTab === 2
                    ? 'bg-white text-primary shadow-md'
                    : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105',
                ]"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Escáner de escritorio
              </button>
            </div>

            <!-- Tab Content -->
            <div v-show="activeCheckInTab === 0">
              <p class="text-xl mb-2 text-white font-semibold">
                Check-in en 30 segundos
              </p>
              <p class="text-white">
                Escanea el DNI desde tu móvil o tablet y
                <span class="font-semibold text-gold"
                  >los datos se rellenan solos</span
                >.
              </p>
            </div>
            <div v-show="activeCheckInTab === 1">
              <p class="text-xl mb-2 text-white font-semibold">Auto check-in</p>
              <p class="text-white">
                El huésped recibe un formulario por
                <span class="font-semibold text-gold"
                  >email, WhatsApp o SMS</span
                >
                antes de llegar.
              </p>
            </div>
            <div v-show="activeCheckInTab === 2">
              <p class="text-xl mb-2 text-white font-semibold">
                Escáner de escritorio
              </p>
              <p class="text-white">
                Escanea
                <span class="font-semibold text-gold"
                  >DNI, NIE, pasaportes</span
                >
                y documentos con código MRZ.
              </p>
            </div>
          </div>
          <!-- Un solo hueco para las tres pestañas, con el alto del movil (2,09 veces su
               ancho): la tarjeta no salta al cambiar de pestaña -->
          <div
            class="flex justify-center items-center shrink-0 self-center w-[240px] h-[503px] lg:w-[160px] lg:h-[335px] xl:w-[220px] xl:h-[461px]"
          >
            <!-- el auto check-in real, completo y en demostracion: se reproduce solo (con raton,
                 al pasarlo por la tarjeta) y es del visitante en cuanto lo toca -->
            <div v-show="activeCheckInTab === 0" class="w-full">
              <MockCheckinPhone demo />
            </div>
            <!-- lo primero que ve el huesped al abrir el enlace: la lista de la reserva -->
            <div v-show="activeCheckInTab === 1" class="w-full">
              <MockCheckinPhone estatico inicio="lista" />
            </div>
            <img
              v-show="activeCheckInTab === 2"
              src="/scaner.png"
              class="max-w-full max-h-full object-contain"
              alt="Escáner de documentos"
            />
          </div>
        </div>
      </div>

      <!-- 2. Facturas (Top Right) -->
      <div
        class="gestiona-card-gradient rounded-2xl p-8 glow-hover"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <div class="flex items-center gap-4 mb-6">
          <span class="step-number-light">2</span>
          <p class="text-3xl text-white font-semibold">Facturas</p>
        </div>
        <div>
          <p class="text-xl mb-2 text-white font-semibold">
            Facturas que se hacen solas
          </p>
          <p class="text-white">
            Cierras la reserva y
            <span class="font-semibold text-gold"
              >la factura aparece generada</span
            >. Con todos los datos correctos, lista para enviar. Depósitos, tasa
            turística, extras... todo calculado. Y Zenfisk, el programa de
            facturación y gastos con Verifactu, incluido en tu suscripción.
          </p>
        </div>
        <div class="flex justify-center mt-6">
          <img
            src="/invoices_1.svg"
            class="w-40 lg:w-52"
            alt="Facturación automática con Hospedy"
          />
        </div>
      </div>

      <!-- 3. Reservas (Bottom Left), zona de su demo como la de Check-in -->
      <div
        class="gestiona-card-gradient rounded-2xl p-8 glow-hover"
        data-aos="fade-right"
        data-aos-delay="200"
        data-demo-zona
      >
        <div class="flex items-center gap-4 mb-6">
          <span class="step-number-light">3</span>
          <p class="text-3xl text-white font-semibold">Reservas</p>
        </div>
        <div>
          <p class="text-xl mb-2 text-white font-semibold">
            Ve todas tus reservas de un vistazo
          </p>
          <p class="text-white">
            Un calendario visual donde
            <span class="font-semibold text-gold">todo está bajo control</span>.
            Arrastra para mover reservas, haz clic para ver detalles. Como el
            planning de toda la vida, pero sin papeles.
          </p>
        </div>
        <div class="flex justify-center mt-6">
          <!-- el planning en demostracion: pasa dias, mueve una reserva y abre su ficha, y es
               del visitante en cuanto lo toca. Hasta 480 px: la fila con Partes e INE apenas
               crece -->
          <div class="w-full max-w-[480px]"><MockPlanning demo /></div>
        </div>
      </div>

      <!-- 4. Partes e INE (Bottom Right) -->
      <div
        id="cumple"
        class="gestiona-card-gradient rounded-2xl p-8 glow-hover"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div class="flex items-center gap-4 mb-6">
          <span class="step-number-light">4</span>
          <p class="text-3xl text-white font-semibold">Partes e INE</p>
        </div>
        <p class="text-xl mb-4 text-white font-semibold">
          En piloto automático
        </p>
        <div class="space-y-4">
          <!-- Partes de viajeros -->
          <div>
            <p class="text-white">
              <span class="font-semibold text-white">Partes de viajeros</span>:
              Se generan en el check-in y se envían solos a SES Hospedajes y
              Ertzaintza. Tu libro de viajeros siempre actualizado.
            </p>
            <NuxtLink
              to="/funciones/partes-viajeros"
              class="inline-block mt-2 text-gold font-semibold hover:underline"
              >Saber más →</NuxtLink
            >
          </div>

          <!-- Encuestas INE -->
          <div>
            <p class="text-white">
              <span class="font-semibold text-gold">Encuestas INE</span>: La
              encuesta de ocupación se envía al INE con un clic, sin entrar en ARCE.
              La de turismo rural sale rellena, lista para presentar.
            </p>
            <NuxtLink
              to="/funciones/encuestas-ine"
              class="inline-block mt-2 text-gold font-semibold hover:underline"
              >Ver cómo funciona →</NuxtLink
            >
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <img
            src="/partes.svg"
            class="w-48 lg:w-64"
            alt="Partes de viajeros automáticos"
          />
        </div>
      </div>
    </div>

    <!-- INE Differentiator Banner -->
    <div class="mx-6 lg:mx-16 mb-16 mt-8 relative" data-aos="fade-up">
      <StarAccent
        class="-top-4 right-12 hidden lg:block"
        size="xs"
        animation="twinkle"
        :opacity="0.5"
        :delay="0.4"
      />
      <div
        class="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/30"
      >
        <div class="flex items-center gap-6">
          <div
            class="w-16 h-16 bg-gold rounded-full flex items-center justify-center flex-shrink-0 ml-8 lg:ml-16"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <div class="flex-1 flex flex-col items-center text-center gap-4">
            <div>
              <p class="text-2xl font-bold text-gray-900 mb-2">
                Envío INE automático con un clic
              </p>
              <p class="text-gray-700">
                Muchos PMS generan un archivo XML que tú debes subir
                manualmente.
                <span class="font-semibold text-gray-900"
                  >Hospedy envía la encuesta de ocupación directamente al INE</span
                >
                sin descargas ni ARCE.
              </p>
            </div>
            <NuxtLink
              to="/funciones/encuestas-ine"
              class="btn btn-outline whitespace-nowrap"
              >Ver cómo funciona</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION: CRECE -->
    <div class="bg-gradient-to-b from-white via-tertiary/30 to-white py-16">
      <div id="crece"></div>

      <div class="m-10 lg:mt-20 text-center relative" data-aos="fade-up">
        <StarAccent
          class="-top-4 left-1/4 hidden lg:block"
          size="sm"
          animation="twinkle"
          :opacity="0.5"
          :delay="0.7"
        />
        <p class="text-6xl text-gray-900">Vende sin intermediarios</p>
        <StarAccent
          class="top-2 right-1/4 hidden lg:block"
          size="lg"
          animation="float"
          :opacity="0.4"
          :delay="1.2"
        />
      </div>

      <div class="grid lg:grid-cols-2 lg:mb-20 relative">
        <div class="mx-10" data-aos="fade-right">
          <p class="text-4xl mb-4 text-secondary">
            Reservas directas, sin comisiones
          </p>
          <p class="text-xl mt-8">
            Con el motor de reservas de Hospedy los huéspedes reservan
            <span class="font-semibold text-black"
              >directamente desde tu página web</span
            >, sin intermediarios ni comisiones por reserva . Ofrece el mejor
            precio a tus clientes y ahorra en comisiones a Booking.
          </p>
          <p class="text-xl mt-4">
            Las reservas aparecen automáticamente en tu calendario. Si tienes
            channel manager, la disponibilidad se actualiza en todas las OTAs al
            instante.
          </p>
          <NuxtLink
            to="/funciones/motor-reservas"
            class="inline-block mt-4 text-xl text-primary font-semibold hover:underline"
            >Calcula cuánto te ahorras →</NuxtLink
          >
        </div>
        <div class="flex justify-center items-center" data-aos="fade-left">
          <img src="/motor.svg" class="w-1/2" alt="Motor de reservas Hospedy" />
        </div>
      </div>

      <div class="grid lg:grid-cols-2 lg:mb-20 relative">
        <div
          class="hidden lg:flex justify-center items-center"
          data-aos="fade-right"
        >
          <img
            src="/channel_manager.svg"
            class="w-1/2"
            alt="Channel manager Hospedy"
          />
        </div>
        <div class="mx-10" data-aos="fade-left">
          <p class="text-4xl mb-4 text-secondary">
            Channel Manager: todo sincronizado
          </p>
          <p class="text-xl mt-8">
            Conecta con más de 50 OTAs y
            <span class="font-semibold text-black"
              >olvídate de los overbookings</span
            >. Booking, Expedia, Airbnb... todas sincronizadas con tu calendario
            en tiempo real.
          </p>
          <p class="text-xl mt-4">
            Cambia precios y disponibilidad desde Hospedy y se actualiza en
            todas las agencias al instante.
          </p>
          <NuxtLink
            to="/funciones/channel-manager"
            class="inline-block mt-4 text-xl text-primary font-semibold hover:underline"
            >Ver agencias disponibles →</NuxtLink
          >
        </div>
        <div class="lg:hidden flex justify-center">
          <img
            src="/channel_manager.svg"
            class="w-1/2"
            alt="Channel manager Hospedy"
          />
        </div>
      </div>

      <div class="grid lg:grid-cols-2 lg:mb-20 relative">
        <div class="mx-10" data-aos="fade-right">
          <p class="text-4xl mb-4 text-secondary">
            Cobra por adelantado, evita problemas
          </p>
          <p class="text-xl mt-8">
            El TPV no funciona, los huéspedes no se presentan, han fumado en la
            habitación...
            <span class="font-semibold text-black"
              >Cobra reservas completas o pide depósitos</span
            >
            a través de nuestra pasarela de pago integrada con Stripe.
          </p>
          <p class="text-xl mt-4">
            Tranquilidad para ti y para tus huéspedes bajo la protección de una
            empresa de renombre mundial.
          </p>
        </div>
        <div
          class="flex flex-col justify-center items-center"
          data-aos="fade-left"
        >
          <img
            src="/pasarela.svg"
            class="w-2/3"
            alt="Pagos seguros con Stripe"
          />
        </div>
      </div>
    </div>

    <!-- TESTIMONIALS SECTION -->
    <div id="testimonios"></div>
    <Testimonials />

    <!-- PRICING SECTION -->
    <div id="precios"></div>

    <div class="m-10 text-center relative" data-aos="fade-up">
      <StarAccent
        class="-top-2 right-1/3 hidden lg:block"
        size="md"
        animation="pulse"
        :opacity="0.6"
        :delay="0.4"
      />
      <h1 class="text-6xl text-gray-900">Precios claros</h1>
      <p class="text-xl mt-4 text-gray-600">
        Elige el plan que se adapta a tu alojamiento. Sin permanencia, sin letra
        pequeña.
      </p>
      <StarAccent
        class="bottom-0 left-1/4 hidden lg:block"
        size="sm"
        animation="twinkle"
        :opacity="0.4"
        :delay="1.5"
      />
    </div>

    <div class="max-w-5xl mx-auto px-6 mb-16 relative">
      <!-- Main pricing card -->
      <div
        class="pricing-card-gradient rounded-3xl p-8 lg:p-12 text-center"
        data-aos="zoom-in"
      >
        <div class="max-w-2xl mx-auto">
          <p class="text-gold text-lg font-semibold mb-2">Todo incluido</p>
          <p class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Desde 35€/mes
          </p>
          <p class="text-gray-700 text-lg mb-8">
            Sin comisiones por reserva, sin costes ocultos, sin sorpresas.
          </p>

          <!-- Features grid -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div class="bg-gold/15 rounded-xl p-4">
              <p class="text-gray-900 font-bold">Partes</p>
              <p class="text-gray-700 text-sm">SES y Ertzaintza</p>
            </div>
            <div class="bg-gold/15 rounded-xl p-4">
              <p class="text-gray-900 font-bold">Reservas</p>
              <p class="text-gray-700 text-sm">Calendario PMS</p>
            </div>
            <div class="bg-gold/15 rounded-xl p-4">
              <p class="text-gray-900 font-bold">Facturas</p>
              <p class="text-gray-700 text-sm">Automáticas</p>
            </div>
            <div class="bg-gold/15 rounded-xl p-4">
              <p class="text-gray-900 font-bold">INE</p>
              <p class="text-gray-700 text-sm">Encuestas</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/precios"
              class="btn bg-gold text-white hover:bg-amber-600 text-lg px-8 py-3 font-semibold"
            >
              Ver precios
            </NuxtLink>
            <NuxtLink
              to="/demo"
              class="btn border-2 border-gold text-gold hover:bg-gold/10 text-lg px-8 py-3 font-semibold"
            >
              Solicitar demo
            </NuxtLink>
          </div>
          <p class="text-gray-700 mt-4 text-sm">
            30 días gratis · Sin compromiso
          </p>
        </div>
      </div>

      <!-- Extra info -->
      <div
        class="flex flex-col sm:flex-row justify-center gap-6 mt-8 text-center"
      >
        <div class="flex items-center justify-center gap-2 text-gray-600">
          <span class="text-primary font-semibold">+</span>
          <span>OTAs incluidas según plan (1-3 o ilimitadas)</span>
        </div>
        <NuxtLink
          to="/comparar"
          class="text-primary font-semibold hover:underline"
        >
          Comparar con otros PMS →
        </NuxtLink>
      </div>
    </div>

    <!-- COMMENTED OUT: PMS and Channel Manager price calculators
        <div class="grid lg:grid-cols-2">
            <div class="m-10">
                <h2 class="text-4xl mb-4 text-secondary">Todo incluido por un precio fijo</h2>
                <p class="text-xl mt-8">Introduce el numero de unidades de alojamiento y calcula tu precio anual.</p>
                <p class="text-xl my-4 font-bold text-primary">El precio incluye:</p>
                <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xl"><span class="text-green-500">✓</span> Partes de viajeros automaticos</li>
                    <li class="flex items-center gap-2 text-xl"><span class="text-green-500">✓</span> Calendario y gestor de reservas (PMS)</li>
                    <li class="flex items-center gap-2 text-xl"><span class="text-green-500">✓</span> Auto check-in para huespedes</li>
                    <li class="flex items-center gap-2 text-xl"><span class="text-green-500">✓</span> Motor de reservas sin comisiones</li>
                    <li class="flex items-center gap-2 text-xl"><span class="text-green-500">✓</span> Encuestas INE automaticas</li>
                    <li class="flex items-center gap-2 text-xl"><span class="text-green-500">✓</span> Facturacion completa</li>
                    <li class="flex items-center gap-2 text-xl"><span class="text-green-500">✓</span> Depositos, tasa turistica, limpieza...</li>
                </ul>
                <div class="mt-8 p-4 bg-gray-50 rounded-lg">
                    <p class="text-lg">¿Tienes un camping, albergue o villa con disposición especial? <a href="#contacto" class="text-primary font-semibold hover:underline">Contáctanos</a> para un presupuesto personalizado.</p>
                </div>
            </div>
            <div class="text-center m-10 ">

                <div class="flex justify-center">
                    <div class="card card-blue w-full lg:w-2/3 h-fit p-6" >
                        <div class="text-center">
                                <p class="text-3xl mb-4 ">Suscripción anual</p>
                                <p class="text-primary text-xl mb-4" for="rooms-number">Introduce el nº de unidades de alojamiento:</p>
                               <input class="form-input text-center lg:w-1/3  mb-4"  id="rooms-number" v-model="rooms" @keyup="calculatePrice"  onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57">
                                <p class="text-primary text-4xl my-2"> {{price.toFixed(2)}} <span >€/año</span> </p>
                                <p class="text-gray-500"> {{vat_price.toFixed(2)}} €/año con IVA</p>
                                <div class="mt-6">
                                    <NuxtLink class="btn btn-grad p-3" to="/demo" title="Solicita una demo de Hospedy">Solicitar demo</NuxtLink>
                                </div>
                                <p class="text-xl mt-4 text-secondary"> Disfruta de 30 días gratis sin compromiso.</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="m-10 mt-16">
            <div class="max-w-4xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl p-8">
                    <div>
                        <h2 class="text-3xl mb-4 text-secondary">Channel Manager (opcional)</h2>
                        <p class="text-xl">Conecta con Booking, Expedia, Airbnb y mas de 50 OTAs. Servicio ofrecido por Wubook.</p>
                        <p class="text-lg mt-4 text-gray-600">Precio: <span class="font-semibold">8€/mes por agencia</span> (+ IVA)</p>
                        <a class="inline-block mt-4 text-xl text-primary font-semibold hover:underline" target="_blank" href="https://es.wubook.net/s-pgs/partners-ota/Canales-con-conexin-XML-4.html">Ver agencias disponibles →</a>
                    </div>
                    <div class="text-center">
                        <div class="card card-blue bg-white p-6">
                            <p class="text-xl mb-4">Calcula el precio del Channel Manager:</p>
                            <p class="text-primary mb-2">Numero de agencias:</p>
                            <input class="form-input text-center w-24 mb-4" v-model="otas" @keyup="calculatePriceChannel" onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57">
                            <p class="text-primary text-3xl my-2">{{price_channel.toFixed(2)}} €/mes</p>
                            <p class="text-gray-500 text-lg">{{ vat_price_channel.toFixed(2) }} €/mes con IVA</p>
                            <p class="text-secondary mt-2 text-lg">15 dias gratis de prueba</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        -->

    <div id="contacto"></div>

    <div class="m-10 text-center relative" data-aos="fade-up">
      <StarAccent
        class="-top-4 left-1/3 hidden lg:block"
        size="sm"
        animation="float"
        :opacity="0.5"
        :delay="0.8"
      />
      <h1 class="text-6xl text-gray-900">Contacto</h1>
      <StarAccent
        class="top-6 right-1/3 hidden lg:block"
        size="xs"
        animation="twinkle"
        :opacity="0.4"
        :delay="1.3"
      />
    </div>
    <div class="text-left m-10">
      <ContactForm />
    </div>
    <Footer />

    <!-- Scroll to Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 w-12 h-12 bg-gold rounded-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 shadow-lg z-50"
      title="Volver arriba"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </div>
</template>
<script setup lang="ts">
const showScrollTop = ref(false);
const showScrollIndicator = ref(true);
const activeCheckInTab = ref(0);

// Animated counters
const statsRef = ref<HTMLElement | null>(null);
const statCommissions = ref(0);
const statOtas = ref(0);
const statHours = ref(0);
const statsAnimated = ref(false);

function animateStats() {
  if (statsAnimated.value) return;
  statsAnimated.value = true;

  const duration = 2000;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);

    statCommissions.value = Math.round(0 * easeOutCubic); // stays 0
    statOtas.value = Math.round(50 * easeOutCubic);
    statHours.value = Math.round(14 * easeOutCubic);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}

const principles = [
  {
    title: "Sin permanencia",
    description:
      "Si no estás satisfecho con nuestro servicio puedes darte de baja de forma sencilla en cualquier momento.",
    icon: "/permanencia.svg",
  },
  {
    title: "Sin letra pequeña",
    description:
      "Ni subidas de precio sin aviso, ni cargos extras. El precio contratado se respeta siempre.",
    icon: "/letra.svg",
  },
  {
    title: "Asumimos errores",
    description:
      "Podemos equivocarnos, pero tan pronto nos notifiques tu incidencia nos pondremos a trabajar para solucionarla.",
    icon: "/humanos.svg",
  },
  {
    title: "Igualdad",
    description:
      "Da igual si tienes un establecimiento grande o pequeño, siempre tendrás el mejor servicio.",
    icon: "/igualdad.svg",
  },
  {
    title: "Flexibilidad",
    description:
      "Si tienes una sugerencia o propuesta que crees que podría mejorar el servicio, háznosla llegar.",
    icon: "/flexibilidad.svg",
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
  showScrollTop.value = window.scrollY > window.innerHeight;
  showScrollIndicator.value = window.scrollY < 50;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Intersection Observer for stats counter
  if (statsRef.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(statsRef.value);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const rooms = ref(6);
const price = ref(120);
const vat_price = ref(145.2);
const otas = ref(1);
const price_channel = ref(8);
const vat_price_channel = ref(9.68);

async function calculatePrice() {
  if (rooms.value === undefined || rooms.value === 0) {
    price.value = 0;
    //this.monthly_price = '';
  } else if (rooms.value <= 6) {
    price.value = 120;
    //this.monthly_price=14;
  } else if (rooms.value > 6 && rooms.value <= 10) {
    price.value = rooms.value * 25;
    //price.value=rooms.value*36
    //this.monthly_price=(price.value*1.2/12).toFixed(2);
  } else if (rooms.value > 10 && rooms.value <= 20) {
    price.value = 250 + (rooms.value - 10) * 23;
    //price.value= (360+(rooms.value-10)*26)
    // this.monthly_price=(price.value*1.2/12).toFixed(2);
  } else if (rooms.value > 20 && rooms.value <= 30) {
    price.value = 480 + (rooms.value - 20) * 21;
    //price.value= (620+(rooms.value-20)*24)
    //this.monthly_price=(price.value*1.2/12).toFixed(2);
  } else if (rooms.value > 30 && rooms.value <= 40) {
    price.value = 690 + (rooms.value - 30) * 18;
    //price.value=(860+(rooms.value-30)*16);
    //this.monthly_price=(price.value*1.2/12).toFixed(2);
  } else if (rooms.value > 40 && rooms.value <= 50) {
    price.value = 870 + (rooms.value - 40) * 15;
    //this.monthly_price=(price.value*1.2/12).toFixed(2);
  } else {
    price.value = 1020 + (rooms.value - 50) * 12;
    //this.monthly_price=(price.value*1.2/12).toFixed(2);
  }
  vat_price.value = price.value * 1.21;
  //this.vat_monthly_price = (this.monthly_price * 1.21).toFixed(2)
}

async function calculatePriceChannel() {
  if (otas.value === undefined || otas.value === 0) {
    price_channel.value = 0;
    //this.monthly_price = '';
  } else {
    price_channel.value = otas.value * 8;
    vat_price_channel.value = price_channel.value * 1.21;
    //this.monthly_price=14;
  }
}
</script>

<style scoped>
.hero-gradient {
  background:
    radial-gradient(
      ellipse at 20% 0%,
      rgba(245, 158, 11, 0.25) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 80% 100%,
      rgba(13, 148, 136, 0.15) 0%,
      transparent 50%
    ),
    linear-gradient(
      to bottom right,
      rgba(255, 180, 0, 0.35) 0%,
      rgba(255, 255, 255, 1) 60%
    );
}

@media (min-width: 1024px) {
  .hero-gradient {
    background:
      radial-gradient(
        ellipse at 10% 0%,
        rgba(245, 158, 11, 0.4) 0%,
        transparent 40%
      ),
      radial-gradient(
        ellipse at 90% 80%,
        rgba(13, 148, 136, 0.2) 0%,
        transparent 40%
      ),
      linear-gradient(
        to bottom right,
        rgba(255, 180, 0, 0.65) 0%,
        rgba(255, 255, 255, 1) 55%
      );
  }
}

.feature-card {
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  min-height: 280px;
}

.feature-card:hover {
  background-color: rgba(204, 251, 241, 0.5);
  box-shadow: 0 4px 20px rgba(13, 148, 136, 0.15);
}

.float-1 {
  animation: float 2s ease-in-out infinite;
}

.float-2 {
  animation: float 2s ease-in-out infinite;
  animation-delay: 0.5s;
}

.float-3 {
  animation: float 2s ease-in-out infinite;
  animation-delay: 1s;
}

.feature-card:hover img {
  animation-play-state: paused;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.btn-grad-wave {
  background: linear-gradient(
    to top right,
    #0d9488 0%,
    #14b8a6 25%,
    #0d9488 50%,
    #14b8a6 75%,
    #0d9488 100%
  );
  background-size: 200% 200%;
  animation: wave 6s ease-in-out infinite;
  color: white;
}

@keyframes wave {
  0% {
    background-position: 0% 100%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}

.btn-wiggle:hover {
  animation: wiggle 0.5s ease-in-out;
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(-3deg);
  }
}

/* Step Numbers */
.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
  color: white;
  font-size: 2rem;
  font-weight: bold;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(13, 148, 136, 0.4);
}

/* Step Numbers Light (for gradient cards) */
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

/* Gestiona Grid Cards with Gradient */
.gestiona-card-gradient {
  background: linear-gradient(135deg, #0f766e 0%, #24c9bb 100%);
  transition: all 0.3s ease;
}

.gestiona-card-gradient:hover {
  box-shadow: 0 8px 30px rgba(13, 148, 136, 0.4);
  transform: translateY(-2px);
}

/* Gestiona Grid Cards */
.gestiona-card {
  transition: all 0.3s ease;
}

.gestiona-card:hover {
  box-shadow: 0 4px 20px rgba(13, 148, 136, 0.15);
}

/* Check-in Tab Gradients */
.checkin-tab-active {
  background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
  box-shadow: 0 4px 15px rgba(13, 148, 136, 0.5);
}

.checkin-tab-inactive {
  background: linear-gradient(135deg, #f8fafc 0%, #ccfbf1 100%);
  border: 2px solid #ccfbf1;
}

.checkin-tab-inactive:hover {
  background: linear-gradient(135deg, #ccfbf1 0%, #d4e4fc 100%);
  border-color: #0d9488;
}

/* Pricing Card Gradient */
.pricing-card-gradient {
  background: linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05));
  border: 1px solid rgba(245, 158, 11, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.pricing-card-gradient:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(245, 158, 11, 0.15);
}

/* Flip Cards for Principles */
.principle-flip-card {
  width: 180px;
  height: 180px;
  perspective: 1000px;
  cursor: pointer;
}

.principle-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.principle-flip-card:hover .principle-flip-inner {
  transform: rotateY(180deg);
}

.principle-flip-front,
.principle-flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.principle-flip-front {
  background: linear-gradient(135deg, #d4a853 0%, #ffffff 100%);
  box-shadow: 0 4px 15px rgba(212, 168, 83, 0.3);
}

.principle-flip-back {
  background: white;
  border: 3px solid #0d9488;
  transform: rotateY(180deg);
  box-shadow: 0 4px 15px rgba(13, 148, 136, 0.2);
}

/* Floating Demo Button - Vertical Text */
.writing-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* Subtle bounce animation for floating button */
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
</style>
