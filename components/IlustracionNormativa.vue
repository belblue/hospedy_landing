<template>
  <!-- Las ilustraciones de «Cumple la normativa» (portada), sobre el degradado de su tarjeta. Los partes de viajeros: un
       libro abierto del que salen tres fichas, la última con el visto en ámbar. La encuesta del INE: un timbre de
       recepción que, al sonar, suelta las tres hojas de la encuesta (la del alojamiento, la tabla de ocupación y la de la
       firma). Se dibujan una vez, cuando AOS enseña su tarjeta, y al pasar el ratón por la tarjeta hacen su gesto: las
       fichas planean y el visto titila; el timbre se tambalea, su botón se aprieta, las ondas resuenan y las hojas
       brincan. Las clases son las de assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 256 200" width="256" height="200" aria-hidden="true">
    <template v-if="pieza === 'partes'">
      <ellipse cx="104" cy="182" rx="76" ry="6" fill="#042F2E" opacity=".22" />
      <!-- el rastro de puntos de las fichas -->
      <g class="hm-fig__aparece" style="transition-delay: 1000ms">
        <path d="M114 126C130 100 160 78 190 62" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-dasharray=".1 8" opacity=".65" />
      </g>
      <g class="hm-fig__crece" style="transition-delay: 100ms">
        <path d="M38 138Q71 128 104 136Q137 128 170 138V176Q137 167 104 175Q71 167 38 176Z" fill="#99F6E4" />
        <path d="M42 134Q73 125 104 132V170Q73 163 42 172Z" fill="#FFFFFF" />
        <path d="M166 134Q135 125 104 132V170Q135 163 166 172Z" fill="#F0FDFA" />
        <path d="M104 132V170" fill="none" stroke="#CCFBF1" stroke-width="2" />
        <path d="M52 143Q72 137 94 140M52 152Q72 146 94 149M52 161Q66 157 80 158M114 140Q136 137 156 143M114 149Q136 146 156 152M128 158Q142 157 156 161" fill="none" stroke="#99F6E4" stroke-width="3" stroke-linecap="round" />
      </g>
      <g class="hm-gesto-planear">
        <g v-for="(ficha, i) in FICHAS" :key="i" :transform="ficha.transform">
          <g class="hm-fig__sale" :style="{ transitionDelay: `${ficha.retraso}ms` }">
            <rect x="2" y="3" width="40" height="52" rx="5" fill="#042F2E" opacity=".18" />
            <rect width="40" height="52" rx="5" fill="#FFFFFF" />
            <path d="M5 0h30a5 5 0 0 1 5 5v7H0V5a5 5 0 0 1 5-5z" fill="#CCFBF1" />
            <circle cx="11" cy="22" r="5" fill="#99F6E4" />
            <path d="M20 20h13M20 26h9M7 35h26M7 42h19" fill="none" stroke="#CCFBF1" stroke-width="3" stroke-linecap="round" />
            <g v-if="i === FICHAS.length - 1" class="hm-gesto-titilar" style="animation-delay: 150ms">
              <g class="hm-fig__asoma" style="transition-delay: 1150ms">
                <circle cx="38" cy="2" r="8.5" fill="#F59E0B" />
                <path d="M34.2 2.2l2.6 2.6 4.6-5" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </template>
    <template v-else>
      <ellipse cx="128" cy="184" rx="88" ry="6" fill="#042F2E" opacity=".22" />
      <g class="hm-fig__crece" style="transition-delay: 100ms">
        <rect x="63" y="165" width="136" height="16" rx="7" fill="#042F2E" opacity=".18" />
        <rect x="60" y="161" width="136" height="16" rx="7" fill="#99F6E4" />
        <path d="M67 161h122a7 7 0 0 1 7 7v1H60v-1a7 7 0 0 1 7-7z" fill="#CCFBF1" />
        <g class="hm-gesto-tambalear" style="transform-box: view-box; transform-origin: 128px 164px; animation-delay: 100ms">
          <!-- el botón, que se aprieta al entrar -->
          <g class="hm-gesto-pulsar" style="--hm-recorrido: 4px">
            <g class="hm-fig__pulsa" style="transition-delay: 600ms">
              <g class="hm-fig__suelta" style="transition-delay: 740ms">
                <g class="hm-fig__asoma" style="transition-delay: 350ms">
                  <rect x="124" y="106" width="8" height="18" rx="2" fill="#CCFBF1" />
                  <path d="M116.5 110a11.5 9 0 0 1 23 0z" fill="#F59E0B" />
                  <path d="M121 107.5a7 5.5 0 0 1 5-3.8" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity=".8" />
                </g>
              </g>
            </g>
          </g>
          <path d="M76 164A52 44 0 0 1 180 164Z" fill="#FFFFFF" />
          <path d="M128 120A52 44 0 0 1 180 164H154C154 142 145 127 128 120Z" fill="#CCFBF1" />
          <path d="M94 146.6A40 33 0 0 1 108 135.4" fill="none" stroke="#CCFBF1" stroke-width="4" stroke-linecap="round" />
          <rect x="70" y="159" width="116" height="7" rx="3.5" fill="#99F6E4" />
        </g>
      </g>
      <!-- las ondas del sonido, de dentro afuera -->
      <g class="hm-gesto-resonar" style="transform-box: view-box; transform-origin: 128px 104px; animation-delay: 120ms" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round">
        <path class="hm-fig__linea" pathLength="1" d="M110.9 98.4A18 18 0 0 1 117.9 89.1" opacity=".85" style="transition-delay: 700ms" />
        <path class="hm-fig__linea" pathLength="1" d="M138.1 89.1A18 18 0 0 1 145.1 98.4" opacity=".85" style="transition-delay: 700ms" />
        <path class="hm-fig__linea" pathLength="1" d="M101.4 95.3A28 28 0 0 1 112.3 80.8" opacity=".85" style="transition-delay: 800ms" />
        <path class="hm-fig__linea" pathLength="1" d="M143.7 80.8A28 28 0 0 1 154.6 95.3" opacity=".85" style="transition-delay: 800ms" />
      </g>
      <!-- la hoja del alojamiento: una casa, sus datos y dos casillas marcadas -->
      <g transform="translate(22 48) rotate(-14 22 28)">
        <g class="hm-gesto-brincar" style="animation-delay: 200ms">
          <g class="hm-fig__brota" style="--hm-desde-x: 75px; --hm-desde-y: 45px; transition-delay: 750ms">
            <rect x="2.5" y="3.5" width="44" height="56" rx="5" fill="#042F2E" opacity=".18" />
            <rect width="44" height="56" rx="5" fill="#FFFFFF" />
            <path d="M5 0h34a5 5 0 0 1 5 5v6H0V5a5 5 0 0 1 5-5z" fill="#CCFBF1" />
            <rect x="19" y="17" width="3.5" height="7" fill="#2DD4BF" />
            <rect x="8" y="25" width="14" height="10" fill="#99F6E4" />
            <path d="M6 26L15 18L24 26Z" fill="#2DD4BF" stroke="#2DD4BF" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M13 35v-4.5a2 2 0 0 1 4 0V35z" fill="#FFFFFF" />
            <path d="M28 22h10M28 29h7M18 42.5h19M18 50.5h14" fill="none" stroke="#CCFBF1" stroke-width="3" stroke-linecap="round" />
            <path d="M6.5 42l2.4 2.4 4.4-4.8M6.5 50l2.4 2.4 4.4-4.8" fill="none" stroke="#2DD4BF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </g>
      </g>
      <!-- la tabla de ocupación -->
      <g transform="translate(103 6) rotate(-4 25 31)">
        <g class="hm-gesto-brincar" style="animation-delay: 280ms">
          <g class="hm-fig__brota" style="--hm-desde-x: -4px; --hm-desde-y: 64px; transition-delay: 850ms">
            <rect x="3" y="4" width="50" height="62" rx="6" fill="#042F2E" opacity=".18" />
            <rect width="50" height="62" rx="6" fill="#FFFFFF" />
            <path d="M6 0h38a6 6 0 0 1 6 6v8H0V6a6 6 0 0 1 6-6z" fill="#CCFBF1" />
            <template v-for="(fila, f) in OCUPACION" :key="f">
              <rect v-for="(ocupada, c) in fila" :key="c" :x="4.5 + c * 11" :y="20 + f * 11" width="8" height="8" rx="1.5" :fill="ocupada ? '#2DD4BF' : '#CCFBF1'" />
            </template>
            <path d="M5 56h22" fill="none" stroke="#CCFBF1" stroke-width="3.5" stroke-linecap="round" />
          </g>
        </g>
      </g>
      <!-- la hoja de la firma, que se firma al llegar -->
      <g transform="translate(190 48) rotate(14 22 28)">
        <g class="hm-gesto-brincar" style="animation-delay: 360ms">
          <g class="hm-fig__brota" style="--hm-desde-x: -75px; --hm-desde-y: 45px; transition-delay: 950ms">
            <rect x="2.5" y="3.5" width="44" height="56" rx="5" fill="#042F2E" opacity=".18" />
            <rect width="44" height="56" rx="5" fill="#FFFFFF" />
            <path d="M5 0h34a5 5 0 0 1 5 5v6H0V5a5 5 0 0 1 5-5z" fill="#CCFBF1" />
            <path d="M7 19h30M7 26h24M7 33h28" fill="none" stroke="#CCFBF1" stroke-width="3" stroke-linecap="round" />
            <path d="M7 50.5h30" fill="none" stroke="#CCFBF1" stroke-width="2" stroke-linecap="round" />
            <path class="hm-fig__linea" pathLength="1" d="M8 47c2.5-5 4.5-8 6-6s-2 7 .5 6.5 3.5-6.5 5.5-5.5-.5 5 1.5 5 2.5-3 4.5-3 3 1.5 6.5 1" fill="none" stroke="#2DD4BF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="transition-delay: 1400ms" />
          </g>
        </g>
      </g>
    </template>
  </svg>
</template>

<script setup lang="ts">
defineProps<{ pieza: 'partes' | 'ine' }>()

// las fichas de los viajeros, del libro hacia arriba, cada una más girada que la anterior
const FICHAS = [
  { transform: 'translate(98 84) rotate(-10 20 26)', retraso: 400 },
  { transform: 'translate(138 52) rotate(4 20 26)', retraso: 550 },
  { transform: 'translate(180 18) rotate(14 20 26)', retraso: 700 },
]
// las casillas de la tabla de ocupación, por filas: ocupadas (1) y libres (0)
const OCUPACION = [
  [1, 1, 0, 1],
  [1, 1, 1, 0],
  [0, 1, 1, 1],
]
</script>
