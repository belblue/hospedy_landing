<template>
  <!-- Las figuras de «Lo que nos hace diferentes» (portada), con las formas de la web anterior y la paleta de esta
       (decisión de Arturo del 04-11-2026): la esfera de «Todo en uno», con su órbita y tres satélites; el cuadrado con
       flechas alrededor de «Tan fácil que sorprende», con una chispa dentro, y el velero de «Gestiona desde la playa»,
       cuya vela es el triángulo de antes. Un solo detalle en ámbar por figura. Se dibujan una vez, cuando AOS enseña su
       tarjeta, y al pasar el ratón por la tarjeta hacen su gesto: los satélites dan una vuelta, las flechas giran un
       cuarto, la chispa titila y el barco se mece. Las clases son las de assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 80 80" aria-hidden="true">
    <template v-if="figura === 'esfera'">
      <path class="hm-fig__linea" pathLength="1" d="M40 9a31 31 0 1 1 0 62a31 31 0 1 1 0-62" fill="none" stroke="#5EEAD4" stroke-width="2.2" style="transition-delay: 350ms" />
      <g class="hm-fig__crece" style="transition-delay: 100ms">
        <circle cx="40" cy="40" r="22" fill="#0D9488" />
        <path d="M52.85 22.15A22 22 0 1 1 22.15 52.85A22 22 0 0 0 52.85 22.15z" fill="#0F766E" />
        <path d="M25.9 34.87A15 15 0 0 1 33.66 26.4" fill="none" stroke="#CCFBF1" stroke-width="3.5" stroke-linecap="round" />
        <circle cx="37.9" cy="25.15" r="1.8" fill="#CCFBF1" />
      </g>
      <g class="hm-gesto-orbitar" style="transform-box: view-box; transform-origin: 40px 40px">
        <circle class="hm-fig__asoma" cx="63.75" cy="20.07" r="5" fill="#F59E0B" style="transition-delay: 800ms" />
        <circle class="hm-fig__asoma" cx="13.15" cy="55.5" r="3.2" fill="#0F766E" style="transition-delay: 900ms" />
        <circle class="hm-fig__asoma" cx="50.6" cy="69.13" r="3.2" fill="#2DD4BF" style="transition-delay: 1s" />
      </g>
    </template>
    <template v-else-if="figura === 'cuadrado'">
      <g class="hm-fig__crece" style="transition-delay: 250ms">
        <path :d="CUADRADO" fill="#0F766E" />
        <path :d="CUADRADO" transform="translate(38.2 38.2) scale(0.9) translate(-40 -40)" fill="#0D9488" />
        <path d="M27 33a7 7 0 0 1 6-6" fill="none" stroke="#99F6E4" stroke-width="3" stroke-linecap="round" />
      </g>
      <g class="hm-gesto-girar" style="transform-box: view-box; transform-origin: 40px 40px" fill="none" stroke="#0F766E" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
        <path v-for="(flecha, i) in FLECHAS" :key="i" class="hm-fig__linea" pathLength="1" :d="flecha" :style="{ transitionDelay: `${500 + i * 150}ms` }" />
      </g>
      <g class="hm-gesto-titilar" style="animation-delay: 200ms">
        <path class="hm-fig__asoma" d="M38.5 30.5c.9 4.6 2.9 6.6 7.5 7.5-4.6.9-6.6 2.9-7.5 7.5-.9-4.6-2.9-6.6-7.5-7.5 4.6-.9 6.6-2.9 7.5-7.5z" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.2" stroke-linejoin="round" style="transition-delay: 1250ms" />
      </g>
    </template>
    <template v-else>
      <circle class="hm-fig__asoma" cx="60" cy="20" r="8" fill="#F59E0B" style="transition-delay: 1050ms" />
      <path class="hm-fig__linea" pathLength="1" :d="OLA" fill="none" stroke="#2DD4BF" stroke-width="3" stroke-linecap="round" style="transition-delay: 400ms" />
      <g class="hm-gesto-mecer" style="transform-box: view-box; transform-origin: 41px 62px">
        <g class="hm-fig__entra" style="transition-delay: 500ms">
          <path d="M33 12C44 22 54 36 60 51H33z" fill="#0D9488" stroke="#0D9488" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M33 16c2.6 9.6 3.9 21 4 35h-4z" fill="#99F6E4" />
          <path d="M33 10v44" stroke="#115E59" stroke-width="2.6" stroke-linecap="round" />
          <path d="M18 54h46a2 2 0 0 1 1.6 3.2l-3.4 4.4A6 6 0 0 1 57.4 64H24.6a6 6 0 0 1-4.8-2.4l-3.4-4.4A2 2 0 0 1 18 54z" fill="#0F766E" />
        </g>
      </g>
    </template>
  </svg>
</template>

<script setup lang="ts">
defineProps<{ figura: 'esfera' | 'cuadrado' | 'velero' }>()

// el cuadrado de lados un poco hundidos, como el de antes; la copia clara, más pequeña y hacia arriba a la izquierda,
// deja la sombra abajo a la derecha, como en la esfera
const CUADRADO = 'M31 22Q40 24 49 22A9 9 0 0 1 58 31Q56 40 58 49A9 9 0 0 1 49 58Q40 56 31 58A9 9 0 0 1 22 49Q24 40 22 31A9 9 0 0 1 31 22z'
// las cuatro flechas que lo rodean, en el sentido de las agujas del reloj
const FLECHAS = [
  'M24 15Q40 9 56 15M52.6 10.1L56 15l-5.8 1.5',
  'M65 24Q71 40 65 56M69.9 52.6L65 56l-1.5-5.8',
  'M56 65Q40 71 24 65M27.4 69.9L24 65l5.8-1.5',
  'M15 56Q9 40 15 24M10.1 27.4L15 24l1.5 5.8',
]
const OLA = 'M8 70c3.2 0 4.8-2.2 8-2.2s4.8 2.2 8 2.2 4.8-2.2 8-2.2 4.8 2.2 8 2.2 4.8-2.2 8-2.2 4.8 2.2 8 2.2 4.8-2.2 8-2.2 4.8 2.2 8 2.2'
</script>
