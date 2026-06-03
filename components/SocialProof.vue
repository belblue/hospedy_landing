<template>
  <div class="bg-tertiary/50 py-8 mb-12 shadow-[0_6px_20px_rgba(0,0,0,0.12)] relative overflow-hidden">
    <StarAccent class="top-4 left-[6%] hidden lg:block" size="sm" animation="float" :opacity="0.45" :delay="0.3" />
    <StarAccent class="bottom-6 right-[5%] hidden lg:block" size="xs" animation="twinkle" :opacity="0.4" :delay="1" />
    <div class="mx-auto px-6">
      <!-- Client Logos -->
      <div class="">
        <p class="text-center text-[#7F5917] text-lg mb-6" data-aos="fade-up">
          Alojamientos turísticos de toda España confían en Hospedy
        </p>
        <div
          class="flex flex-nowrap justify-center items-center gap-4 lg:gap-12 overflow-x-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <a
            href="https://www.solardequintano.es"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center h-16 px-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/solar-de-quintano.webp"
              alt="Solar de Quintano"
              class="h-16 w-auto object-contain"
            />
          </a>
          <a
            href="https://pradomayor.es"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center h-16 px-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/posada-prado-mayor.webp"
              alt="Posada El Prado Mayor"
              class="h-12 w-auto object-contain"
            />
          </a>
          <a
            href="https://www.hostaljoseluis.com"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center h-16 px-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/hostal-jose-luis.webp"
              alt="Hostal José Luis"
              class="h-12 w-auto object-contain"
            />
          </a>
          <a
            href="https://booking_engine.hospedy.us/TJQLCgP1HIa7-09lomFVt02w"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center h-16 px-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/hotel-los-nogales.webp"
              alt="Hotel Los Nogales"
              class="h-12 w-auto object-contain"
            />
          </a>
          <a
            href="https://www.casazalama.es"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center h-16 px-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/casa-zalama.webp"
              alt="Casa Zalama"
              class="h-12 w-auto object-contain"
            />
          </a>
        </div>
        <p class="text-center text-gray-600 text-base mt-6">
          Hoteles, casas rurales, apartamentos, campings, villas, albergues...
        </p>
      </div>

      <!-- Business Benefits -->
      <div class="border-t border-[#7f591736] pt-8 mt-8">
        <div
          class="flex flex-nowrap justify-center items-center gap-4 lg:gap-6 overflow-x-auto"
        >
          <!-- Reservas directas -->
          <div
            class="flex items-center gap-2 bg-white/45 px-4 py-2 rounded-lg shadow-sm whitespace-nowrap shrink-0"
          >
            <svg
              class="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span class="text-lg font-medium text-gray-700"
              >Reservas directas</span
            >
          </div>
          <!-- Facturación automática -->
          <div
            class="flex items-center gap-2 bg-white/45 px-4 py-2 rounded-lg shadow-sm whitespace-nowrap shrink-0"
          >
            <svg
              class="w-6 h-6 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <span class="text-lg font-medium text-gray-700"
              >Facturación automática</span
            >
          </div>
          <!-- Multi-alojamiento -->
          <div
            class="flex items-center gap-2 bg-white/45 px-4 py-2 rounded-lg shadow-sm whitespace-nowrap shrink-0"
          >
            <svg
              class="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              ></path>
            </svg>
            <span class="text-lg font-medium text-gray-700"
              >Multi-alojamiento</span
            >
          </div>
          <!-- Sin instalación -->
          <div
            class="flex items-center gap-2 bg-white/45 px-4 py-2 rounded-lg shadow-sm whitespace-nowrap shrink-0"
          >
            <svg
              class="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span class="text-lg font-medium text-gray-700">Sin instalación</span>
          </div>
          <!-- Pasarela de pago -->
          <div
            class="flex items-center gap-2 bg-white/45 px-4 py-2 rounded-lg shadow-sm whitespace-nowrap shrink-0"
          >
            <svg
              class="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
            <span class="text-lg font-medium text-gray-700">Pasarela de pago</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
