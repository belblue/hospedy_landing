<template>
  <!-- Los iconos de «¿Qué alojamiento tienes?» (portada), uno por tipo: una campanilla de recepción para los hoteles y
       hostales, una casa de campo con su chimenea y un árbol para las casas rurales, y un bloque de pisos con una maleta
       para los apartamentos turísticos. El ámbar marca el detalle de cada uno: el botón, la ventana encendida y la maleta.
       Se dibujan una vez, cuando AOS enseña su tarjeta, con el retraso de la tarjeta (retraso, en ms) para entrar con
       ella, y al pasar el ratón por la tarjeta hacen su gesto: la campanilla suena, el árbol se mece y sube el humo, y la
       maleta rueda. En el móvil salen más pequeños y sin los detalles más finos. Las clases son las de
       assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 48 48" aria-hidden="true">
    <template v-if="tipo === 'hotel'">
      <g class="hm-gesto-onda" style="animation-delay: 100ms">
        <path d="M17 11l-2.6-2.6M31 11l2.6-2.6M24 8.6V5.4" fill="none" stroke="#0F766E" stroke-width="2.4" stroke-linecap="round" />
      </g>
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="6" y="34" width="36" height="6.5" rx="3.25" fill="#0F766E" />
        <path d="M10 34a14 14 0 0 1 28 0z" fill="#0D9488" />
        <path d="M15.5 29.5a9.5 9.5 0 0 1 5.5-6.6" fill="none" stroke="#99F6E4" stroke-width="2.4" stroke-linecap="round" />
      </g>
      <g class="hm-gesto-pulsar">
        <g class="hm-fig__cae" :style="retrasar(450)">
          <path d="M24 15.5v5" fill="none" stroke="#115E59" stroke-width="3" stroke-linecap="round" />
          <ellipse cx="24" cy="14" rx="5" ry="2.6" fill="#F59E0B" />
        </g>
      </g>
    </template>
    <template v-else-if="tipo === 'rural'">
      <path class="hm-fig__linea" pathLength="1" d="M5 40.5h38" fill="none" stroke="#0F766E" stroke-width="2.4" stroke-linecap="round" :style="retrasar(50)" />
      <g class="hm-gesto-mecer">
        <g class="hm-fig__sube" :style="retrasar(200)">
          <path d="M11 40v-7" fill="none" stroke="#115E59" stroke-width="2.6" stroke-linecap="round" />
          <circle cx="11" cy="28" r="6.2" fill="#2DD4BF" />
          <path class="hidden md:inline" d="M8 26.6a3.4 3.4 0 0 1 2.8-2.8" fill="none" stroke="#CCFBF1" stroke-width="1.8" stroke-linecap="round" />
        </g>
      </g>
      <g class="hm-fig__sube" :style="retrasar(300)">
        <rect x="34" y="14.5" width="4" height="8" fill="#115E59" />
        <path d="M19 26h20v14H19z" fill="#0D9488" />
        <path d="M16 27.5L29 16l13 11.5z" fill="#115E59" stroke="#115E59" stroke-width="2" stroke-linejoin="round" />
        <path d="M25.5 40v-6.5a3 3 0 0 1 6 0V40z" fill="#CCFBF1" />
        <rect class="hidden md:inline" x="21" y="30" width="3.5" height="3.5" rx="0.8" fill="#CCFBF1" />
        <rect x="33.5" y="30" width="3.5" height="3.5" rx="0.8" fill="#F59E0B" />
      </g>
      <g class="hm-gesto-humo">
        <circle class="hm-fig__asoma" cx="37" cy="10.5" r="1.9" fill="#5EEAD4" :style="retrasar(700)" />
        <circle class="hm-fig__asoma" cx="39.5" cy="6.4" r="2.5" fill="#5EEAD4" :style="retrasar(850)" />
      </g>
    </template>
    <template v-else>
      <path class="hm-fig__linea" pathLength="1" d="M5 41.5h38" fill="none" stroke="#0F766E" stroke-width="2.4" stroke-linecap="round" :style="retrasar(50)" />
      <g class="hm-fig__sube" :style="retrasar(200)">
        <path d="M13.5 6h16a2 2 0 0 1 2 2v33h-20V8a2 2 0 0 1 2-2z" fill="#0D9488" />
        <path d="M26.5 6h3a2 2 0 0 1 2 2v33h-5z" fill="#0F766E" />
        <path d="M18.5 41v-6.5h6V41z" fill="#115E59" />
      </g>
      <rect v-for="([x, y], i) in VENTANAS" :key="i" class="hm-fig__asoma" :x="x" :y="y" width="4.5" height="4.5" rx="0.8" fill="#CCFBF1" :style="retrasar(450 + i * 50)" />
      <g class="hm-gesto-rodar">
        <g class="hm-fig__entra-der" :style="retrasar(750)">
          <path d="M35 30v-3h4.5v3" fill="none" stroke="#115E59" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          <rect x="32.5" y="30" width="9.5" height="10.5" rx="2" fill="#F59E0B" />
          <path class="hidden md:inline" d="M35.6 31v8.5M38.9 31v8.5" fill="none" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" opacity=".75" />
          <circle cx="34.6" cy="42" r="1.4" fill="#115E59" />
          <circle cx="39.9" cy="42" r="1.4" fill="#115E59" />
        </g>
      </g>
    </template>
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ tipo: 'hotel' | 'rural' | 'apartamento'; retraso?: number }>(), { retraso: 0 })

// las ventanas del bloque, de dos en dos y de arriba abajo
const VENTANAS = [[15, 10.5], [21.5, 10.5], [15, 18], [21.5, 18], [15, 25.5], [21.5, 25.5]]

// el retraso de cada pieza, más el de su tarjeta
const retrasar = (ms: number) => ({ transitionDelay: `${ms + props.retraso}ms` })
</script>
