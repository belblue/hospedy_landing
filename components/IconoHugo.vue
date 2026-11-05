<template>
  <!-- Los iconos de Hugo en la portada. Los tres bloques de su banda, en la baldosa verde agua: precios y cierres en una
       frase (el bocadillo con la etiqueta del precio), arregla lo que no cuadra (la reserva que se mueve de fila y el
       visto) y te dice qué tienes pendiente (el portapapeles con el punto ámbar). Y el destacado del parte rechazado, en
       su círculo ámbar: el parte, la flecha que lo reenvía y el visto. Se dibujan una vez, cuando AOS enseña su bloque,
       con su retraso (retraso, en ms), y al pasar el ratón por el bloque hacen su gesto. Las clases son las de
       assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 48 48" aria-hidden="true">
    <!-- precios: el bocadillo, con la etiqueta del precio que se balancea -->
    <template v-if="nombre === 'precios'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <path d="M9 8h26a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H19l-6 5v-5H9a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" fill="#0F766E" opacity=".2" />
        <path d="M7 6h26a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H17l-6 5v-5H7a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" fill="#FFFFFF" />
      </g>
      <path class="hm-fig__linea" pathLength="1" d="M9 13h18" fill="none" stroke="#2DD4BF" stroke-width="2.4" stroke-linecap="round" :style="retrasar(350)" />
      <path class="hm-fig__linea" pathLength="1" d="M9 19h12" fill="none" stroke="#99F6E4" stroke-width="2.4" stroke-linecap="round" :style="retrasar(450)" />
      <g class="hm-gesto-balancear" style="transform-box: view-box; transform-origin: 33px 25px">
        <g class="hm-fig__cae" :style="retrasar(600)">
          <path d="M33 25l4.6 6" fill="none" stroke="#115E59" stroke-width="1.4" stroke-linecap="round" />
          <path d="M35.5 29h5a2 2 0 0 1 2 2v8.2L38 43.8l-4.5-4.6V31a2 2 0 0 1 2-2z" fill="#F59E0B" />
          <circle cx="38" cy="32.6" r="1.3" fill="#FFFFFF" />
          <path d="M36 37.4h4" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
        </g>
      </g>
    </template>

    <!-- arregla: la reserva movida (el hueco que deja, la flecha y la ámbar en su fila nueva) y el visto -->
    <template v-else-if="nombre === 'arregla'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="7" y="9" width="36" height="31" rx="4" fill="#0F766E" opacity=".2" />
        <rect x="5" y="7" width="36" height="31" rx="4" fill="#FFFFFF" />
        <path d="M9 7h28a4 4 0 0 1 4 4v3H5v-3a4 4 0 0 1 4-4z" fill="#0D9488" />
        <path d="M5 26.5h36" fill="none" stroke="#CCFBF1" stroke-width="1.2" />
      </g>
      <rect class="hm-fig__entra" x="9" y="18" width="20" height="5" rx="2.5" fill="#2DD4BF" :style="retrasar(300)" />
      <rect class="hm-fig__aparece" x="22" y="18" width="16" height="5" rx="2.5" fill="none" stroke="#99F6E4" stroke-width="1.2" stroke-dasharray="2 1.6" :style="retrasar(500)" />
      <path class="hm-fig__linea" pathLength="1" d="M34 24.6c1.8 1.9 1.6 3.6-.2 4.8" fill="none" stroke="#115E59" stroke-width="1.4" stroke-linecap="round" :style="retrasar(600)" />
      <g class="hm-gesto-deslizar">
        <rect class="hm-fig__entra-der" x="16" y="29.5" width="18" height="5" rx="2.5" fill="#F59E0B" :style="retrasar(700)" />
      </g>
      <g class="hm-gesto-latir" style="animation-delay: 150ms">
        <circle class="hm-fig__asoma" cx="39" cy="38" r="6.5" fill="#0D9488" :style="retrasar(900)" />
        <path class="hm-fig__linea" pathLength="1" d="M36 38.2l2 2 3.8-4" fill="none" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(1050)" />
      </g>
    </template>

    <!-- pendiente: el portapapeles, que se tambalea, con dos vistos y el punto ámbar de lo que falta -->
    <template v-else-if="nombre === 'pendiente'">
      <g class="hm-gesto-tambalear" style="transform-box: view-box; transform-origin: 24px 44px">
        <g class="hm-fig__crece" :style="retrasar(100)">
          <rect x="11" y="9" width="30" height="35" rx="4" fill="#0F766E" opacity=".2" />
          <rect x="9" y="7" width="30" height="35" rx="4" fill="#FFFFFF" />
          <rect x="17" y="4" width="14" height="6" rx="2" fill="#0F766E" />
          <path d="M21 16h13M21 25h10M21 34h8" fill="none" stroke="#CCFBF1" stroke-width="2.4" stroke-linecap="round" />
        </g>
        <path class="hm-fig__linea" pathLength="1" d="M12.5 16.2l1.8 1.8 3.4-3.6" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(350)" />
        <path class="hm-fig__linea" pathLength="1" d="M12.5 25.2l1.8 1.8 3.4-3.6" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(450)" />
        <g class="hm-gesto-latir" style="animation-delay: 100ms">
          <circle class="hm-fig__asoma" cx="15" cy="34" r="2.8" fill="#F59E0B" :style="retrasar(600)" />
        </g>
      </g>
    </template>

    <!-- el parte rechazado: el parte, la flecha que da la vuelta para reenviarlo y el visto -->
    <template v-else-if="nombre === 'rechazado'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="13" y="8" width="22" height="30" rx="3" fill="#92400E" opacity=".25" />
        <rect x="11" y="6" width="22" height="30" rx="3" fill="#FFFFFF" />
        <path d="M14.5 13h15M14.5 18h11M14.5 23h13" fill="none" stroke="#99F6E4" stroke-width="2.2" stroke-linecap="round" />
      </g>
      <g class="hm-gesto-orbitar" style="--hm-duracion: 0.9s; transform-box: view-box; transform-origin: 33px 33px">
        <path class="hm-fig__linea" pathLength="1" d="M41.6 30.2A9 9 0 1 1 36.5 24.7" fill="none" stroke="#0F766E" stroke-width="2.4" stroke-linecap="round" :style="retrasar(400)" />
        <path class="hm-fig__asoma" d="M35 21.2l4.4 3-4.6 2.8z" fill="#0F766E" :style="retrasar(750)" />
      </g>
      <circle class="hm-fig__asoma" cx="33" cy="33" r="6" fill="#0D9488" :style="retrasar(600)" />
      <path class="hm-fig__linea" pathLength="1" d="M30.4 33.2l1.9 1.9 3.5-3.7" fill="none" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(900)" />
    </template>
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ nombre: 'precios' | 'arregla' | 'pendiente' | 'rechazado'; retraso?: number }>(),
  { retraso: 0 },
)

// el retraso de cada pieza, más el de su bloque
const retrasar = (ms: number) => ({ transitionDelay: `${ms + props.retraso}ms` })
</script>
