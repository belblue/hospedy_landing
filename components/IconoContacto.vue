<template>
  <!-- El sobre del correo de /contacto, junto al de WhatsApp, en su círculo verde agua: el sobre con su solapa y el punto
       ámbar del mensaje nuevo, que late al pasar el ratón por el enlace (group). Fuera de AOS se ve entero. Las clases son
       las de assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 48 48" aria-hidden="true">
    <g class="hm-fig__crece" style="transition-delay: 100ms">
      <rect x="7" y="13" width="36" height="26" rx="4" fill="#0F766E" opacity=".2" />
      <rect x="5" y="11" width="36" height="26" rx="4" fill="#FFFFFF" />
      <path d="M6 13l17 12.5L40 13" fill="none" stroke="#0D9488" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <path class="hm-fig__linea" pathLength="1" d="M9 33l9-7M37 33l-9-7" fill="none" stroke="#CCFBF1" stroke-width="1.6" stroke-linecap="round" style="transition-delay: 300ms" />
    <g class="hm-gesto-latir" style="animation-delay: 100ms">
      <circle class="hm-fig__asoma" cx="40" cy="12" r="5.5" fill="#F59E0B" style="transition-delay: 450ms" />
    </g>
  </svg>
</template>
