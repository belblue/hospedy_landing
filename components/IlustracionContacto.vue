<template>
  <!-- La ilustración de /contacto: el sobre, la carta que sale de él y el bocadillo de la respuesta, con el punto ámbar
       del mensaje nuevo. Se dibuja una vez, cuando AOS la enseña, y al pasar el ratón por encima (group) la carta planea,
       el bocadillo brinca y el punto late. Las clases son las de assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 256 200" width="256" height="200" aria-hidden="true">
    <ellipse cx="124" cy="186" rx="92" ry="6" fill="#0F766E" opacity=".1" />
    <!-- el fondo del sobre, con la solapa abierta -->
    <g class="hm-fig__crece" style="transition-delay: 100ms">
      <rect x="61" y="100" width="124" height="80" rx="8" fill="#0F766E" opacity=".14" />
      <rect x="58" y="96" width="124" height="80" rx="8" fill="#99F6E4" />
      <path d="M58 104L120 66l62 38z" fill="#5EEAD4" stroke="#5EEAD4" stroke-width="2" stroke-linejoin="round" />
    </g>
    <!-- la carta, que sale del sobre y se escribe -->
    <g class="hm-gesto-planear">
      <g class="hm-fig__brota" style="--hm-desde-x: 0px; --hm-desde-y: 34px; transition-delay: 350ms">
        <rect x="78" y="52" width="84" height="80" rx="6" fill="#FFFFFF" />
        <path d="M90 66h40" fill="none" stroke="#99F6E4" stroke-width="4" stroke-linecap="round" />
        <path class="hm-fig__linea" pathLength="1" d="M90 80h60" fill="none" stroke="#CCFBF1" stroke-width="3.5" stroke-linecap="round" style="transition-delay: 700ms" />
        <path class="hm-fig__linea" pathLength="1" d="M90 92h52" fill="none" stroke="#CCFBF1" stroke-width="3.5" stroke-linecap="round" style="transition-delay: 780ms" />
        <path class="hm-fig__linea" pathLength="1" d="M90 104h56" fill="none" stroke="#CCFBF1" stroke-width="3.5" stroke-linecap="round" style="transition-delay: 860ms" />
      </g>
    </g>
    <!-- el frente del sobre -->
    <g class="hm-fig__crece" style="transition-delay: 100ms">
      <path d="M58 106l62 40 62-40v62a8 8 0 0 1-8 8H66a8 8 0 0 1-8-8z" fill="#2DD4BF" />
      <path d="M64 171l40-30M176 171l-40-30" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" opacity=".35" />
    </g>
    <!-- el bocadillo de la respuesta y el punto del mensaje nuevo -->
    <g class="hm-gesto-brincar" style="animation-delay: 150ms">
      <g class="hm-fig__asoma" style="transition-delay: 900ms">
        <path d="M180 34h44a12 12 0 0 1 12 12v18a12 12 0 0 1-12 12h-28l-10 9v-9h-6a12 12 0 0 1-12-12V46a12 12 0 0 1 12-12z" fill="#0D9488" />
        <circle v-for="x in [190, 202, 214]" :key="x" :cx="x" cy="55" r="3.6" fill="#FFFFFF" />
      </g>
    </g>
    <g class="hm-gesto-latir" style="animation-delay: 100ms">
      <circle class="hm-fig__asoma" cx="232" cy="36" r="7" fill="#F59E0B" style="transition-delay: 1150ms" />
    </g>
  </svg>
</template>
