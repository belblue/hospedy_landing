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
        <!-- en el móvil, una tira que se desliza con los logos a su tamaño (hm-tira); en el escritorio, centrados y,
             si no caben, un poco más pequeños -->
        <div
          class="hm-tira flex flex-nowrap lg:justify-center items-center gap-7 lg:gap-12 overflow-x-auto -mx-6 px-6 py-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <a
            href="https://www.solardequintano.es"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center h-16 lg:px-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/solar-de-quintano.webp"
              width="330"
              height="174"
              loading="lazy"
              alt="Solar de Quintano"
              class="h-14 lg:h-16 w-auto object-contain"
            />
          </a>
          <a
            href="https://pradomayor.es"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center h-16 lg:px-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/posada-prado-mayor.webp"
              width="400"
              height="117"
              loading="lazy"
              alt="Posada El Prado Mayor"
              class="h-10 lg:h-12 w-auto object-contain"
            />
          </a>
          <a
            href="https://www.hostaljoseluis.com"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center h-16 lg:px-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/hostal-jose-luis.webp"
              width="243"
              height="58"
              loading="lazy"
              alt="Hostal José Luis"
              class="h-10 lg:h-12 w-auto object-contain"
            />
          </a>
          <a
            href="https://booking.hospedy.app/TJQLCgP1HIa7-09lomFVt02w"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center h-16 lg:px-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/hotel-los-nogales.webp"
              width="1864"
              height="463"
              loading="lazy"
              alt="Hotel Los Nogales"
              class="h-10 lg:h-12 w-auto object-contain"
            />
          </a>
          <a
            href="https://www.casazalama.es"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center h-16 lg:px-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/casa-zalama.webp"
              width="720"
              height="280"
              loading="lazy"
              alt="Casa Zalama"
              class="h-10 lg:h-12 w-auto object-contain"
            />
          </a>
        </div>
        <p class="text-center text-gray-600 text-base mt-6">
          Hoteles, casas rurales, apartamentos, campings, villas, albergues...
        </p>
      </div>

      <!-- Lo esencial: cada chip lleva a su función o a su pregunta. En el móvil, una tira que se desliza (hm-tira); en el
           escritorio, centrados y, si no caben en una línea, en dos -->
      <div class="border-t border-[#7f591736] pt-8 mt-8">
        <div
          class="hm-tira flex flex-nowrap lg:flex-wrap lg:justify-center items-center gap-3 lg:gap-5 overflow-x-auto lg:overflow-visible -mx-6 px-6 pt-1 pb-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <NuxtLink
            to="/funciones/motor-reservas"
            class="group flex items-center gap-2.5 bg-white/55 pl-1.5 pr-3.5 py-1.5 rounded-[10px] shadow-sm whitespace-nowrap shrink-0 hover:bg-white/80 transition-colors"
          >
            <span class="flex w-8 h-8 rounded-lg bg-tertiary items-center justify-center shrink-0">
              <IconoChip nombre="motor" :retraso="200" class="block w-[26px] h-[26px]" />
            </span>
            <span class="text-lg font-medium text-gray-700">Reservas directas</span>
          </NuxtLink>
          <NuxtLink
            to="/funciones/facturacion"
            class="group flex items-center gap-2.5 bg-white/55 pl-1.5 pr-3.5 py-1.5 rounded-[10px] shadow-sm whitespace-nowrap shrink-0 hover:bg-white/80 transition-colors"
          >
            <span class="flex w-8 h-8 rounded-lg bg-tertiary items-center justify-center shrink-0">
              <IconoChip nombre="factura" :retraso="200" class="block w-[26px] h-[26px]" />
            </span>
            <span class="text-lg font-medium text-gray-700">Facturación con un clic</span>
          </NuxtLink>
          <NuxtLink
            to="/faq#varios-alojamientos"
            class="group flex items-center gap-2.5 bg-white/55 pl-1.5 pr-3.5 py-1.5 rounded-[10px] shadow-sm whitespace-nowrap shrink-0 hover:bg-white/80 transition-colors"
          >
            <span class="flex w-8 h-8 rounded-lg bg-tertiary items-center justify-center shrink-0">
              <IconoChip nombre="varios" :retraso="200" class="block w-[26px] h-[26px]" />
            </span>
            <span class="text-lg font-medium text-gray-700">Varios alojamientos</span>
          </NuxtLink>
          <NuxtLink
            to="/faq#instalar"
            class="group flex items-center gap-2.5 bg-white/55 pl-1.5 pr-3.5 py-1.5 rounded-[10px] shadow-sm whitespace-nowrap shrink-0 hover:bg-white/80 transition-colors"
          >
            <span class="flex w-8 h-8 rounded-lg bg-tertiary items-center justify-center shrink-0">
              <IconoChip nombre="nube" :retraso="200" class="block w-[26px] h-[26px]" />
            </span>
            <span class="text-lg font-medium text-gray-700">Sin instalación</span>
          </NuxtLink>
          <NuxtLink
            to="/funciones/cobros"
            class="group flex items-center gap-2.5 bg-white/55 pl-1.5 pr-3.5 py-1.5 rounded-[10px] shadow-sm whitespace-nowrap shrink-0 hover:bg-white/80 transition-colors"
          >
            <span class="flex w-8 h-8 rounded-lg bg-tertiary items-center justify-center shrink-0">
              <IconoChip nombre="cobros" :retraso="200" class="block w-[26px] h-[26px]" />
            </span>
            <span class="text-lg font-medium text-gray-700">Cobros online</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
