<template>
  <!-- Los iconos de los chips de debajo de los clientes, en la portada, a 26 px en su baldosa de 32. Son los de las
       funcionalidades (IconoFuncion) sin sus detalles más finos: el motor, la factura, los varios alojamientos y los
       cobros. «Sin instalación» es una nube con el visto y una chispa ámbar. Se dibujan una vez, cuando AOS enseña la
       fila de los chips, con su retraso (retraso, en ms), y al pasar el ratón por el chip hacen su gesto. Las clases son
       las de assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 48 48" aria-hidden="true">
    <!-- reservas directas: la web con el botón de reservar, que se pulsa -->
    <template v-if="nombre === 'motor'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="6" y="10" width="40" height="32" rx="4" fill="#0F766E" opacity=".2" />
        <rect x="4" y="8" width="40" height="32" rx="4" fill="#FFFFFF" />
        <path d="M8 8h32a4 4 0 0 1 4 4v3H4v-3a4 4 0 0 1 4-4z" fill="#0D9488" />
        <rect x="20" y="10.2" width="19.5" height="2.6" rx="1.3" fill="#0F766E" />
      </g>
      <g class="hm-fig__asoma" :style="retrasar(400)">
        <rect x="8" y="19" width="14.5" height="6.5" rx="2" fill="#CCFBF1" />
        <rect x="25.5" y="19" width="14.5" height="6.5" rx="2" fill="#CCFBF1" />
      </g>
      <ellipse class="hm-gesto-onda" cx="24" cy="32.5" rx="17" ry="5" fill="none" stroke="#2DD4BF" stroke-width="1.6" style="animation-delay: 150ms" />
      <g class="hm-gesto-pulsar" style="--hm-recorrido: 1.6px">
        <g class="hm-fig__asoma" :style="retrasar(650)">
          <rect x="8" y="29" width="32" height="7" rx="3.5" fill="#F59E0B" />
          <path d="M19 32.5h10" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" />
        </g>
      </g>
    </template>

    <!-- facturación: dos líneas y el total, y la moneda que da la vuelta -->
    <template v-else-if="nombre === 'factura'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="9" y="6" width="27" height="36" rx="3.5" fill="#0F766E" opacity=".2" />
        <rect x="7" y="4" width="27" height="36" rx="3.5" fill="#FFFFFF" />
        <rect x="11" y="8.5" width="7" height="5" rx="1.2" fill="#99F6E4" />
      </g>
      <path class="hm-fig__linea" pathLength="1" d="M11 19.5h19" fill="none" stroke="#2DD4BF" stroke-width="2.4" stroke-linecap="round" :style="retrasar(350)" />
      <path class="hm-fig__linea" pathLength="1" d="M11 25h19" fill="none" stroke="#2DD4BF" stroke-width="2.4" stroke-linecap="round" :style="retrasar(450)" />
      <path class="hm-fig__linea" pathLength="1" d="M15 33h11" fill="none" stroke="#0D9488" stroke-width="3" stroke-linecap="round" :style="retrasar(600)" />
      <g class="hm-gesto-voltear">
        <g class="hm-fig__cae" :style="retrasar(800)">
          <circle cx="36.5" cy="36" r="8.5" fill="#F59E0B" />
          <path d="M39.3 32.6A4.4 4.4 0 1 0 39.3 39.4M32.2 35h5.6M32.2 37.4h5.6" fill="none" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" />
        </g>
      </g>
    </template>

    <!-- varios alojamientos: los tres bloques, que saltan uno detrás de otro, con una ventana encendida -->
    <template v-else-if="nombre === 'varios'">
      <path class="hm-fig__linea" pathLength="1" d="M3 41.5h42" fill="none" stroke="#0F766E" stroke-width="2.4" stroke-linecap="round" :style="retrasar(50)" />
      <g class="hm-gesto-saltar">
        <path class="hm-fig__sube" d="M6.5 27h8a1.5 1.5 0 0 1 1.5 1.5v13H5v-13A1.5 1.5 0 0 1 6.5 27z" fill="#2DD4BF" :style="retrasar(200)" />
      </g>
      <g class="hm-gesto-saltar" style="animation-delay: 80ms">
        <g class="hm-fig__sube" :style="retrasar(300)">
          <path d="M19 9h10a1.5 1.5 0 0 1 1.5 1.5v31h-13v-31A1.5 1.5 0 0 1 19 9z" fill="#0D9488" />
          <path d="M27 9h2a1.5 1.5 0 0 1 1.5 1.5v31H27z" fill="#0F766E" />
          <rect v-for="y in [13, 19, 25]" :key="y" x="20.5" :y="y" width="3" height="3" rx=".5" fill="#CCFBF1" />
        </g>
        <rect class="hm-fig__asoma" x="24.2" y="19" width="3" height="3" rx=".5" fill="#F59E0B" :style="retrasar(750)" />
      </g>
      <g class="hm-gesto-saltar" style="animation-delay: 160ms">
        <path class="hm-fig__sube" d="M33.5 19h8a1.5 1.5 0 0 1 1.5 1.5v21H32v-21a1.5 1.5 0 0 1 1.5-1.5z" fill="#0F766E" :style="retrasar(400)" />
      </g>
    </template>

    <!-- sin instalación: la nube con el visto, que planea, y la chispa, que titila -->
    <template v-else-if="nombre === 'nube'">
      <g class="hm-gesto-planear">
        <g class="hm-fig__crece" :style="retrasar(100)">
          <path d="M14 38h22a9 9 0 0 0 1.4-17.9A12 12 0 0 0 14.6 17 10.5 10.5 0 0 0 14 38z" fill="#0F766E" opacity=".2" transform="translate(2 2)" />
          <path d="M14 38h22a9 9 0 0 0 1.4-17.9A12 12 0 0 0 14.6 17 10.5 10.5 0 0 0 14 38z" fill="#FFFFFF" />
        </g>
        <path class="hm-fig__linea" pathLength="1" d="M18 28.5l4.5 4.5 8.5-9" fill="none" stroke="#0D9488" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(400)" />
      </g>
      <g class="hm-gesto-titilar" style="animation-delay: 200ms">
        <path class="hm-fig__asoma" d="M40 3c.6 3 1.8 4.2 4.8 4.8-3 .6-4.2 1.8-4.8 4.8-.6-3-1.8-4.2-4.8-4.8 3-.6 4.2-1.8 4.8-4.8z" fill="#F59E0B" :style="retrasar(650)" />
      </g>
    </template>

    <!-- cobros online: la tarjeta, que se desliza, y el escudo con el visto -->
    <template v-else-if="nombre === 'cobros'">
      <g class="hm-gesto-deslizar">
        <g class="hm-fig__entra" :style="retrasar(100)">
          <g transform="rotate(-8 20 23)">
            <rect x="6" y="15" width="32" height="21" rx="3.5" fill="#0F766E" opacity=".2" />
            <rect x="4" y="13" width="32" height="21" rx="3.5" fill="#0D9488" />
            <path d="M4 28h32v2.5a3.5 3.5 0 0 1-3.5 3.5h-25A3.5 3.5 0 0 1 4 30.5z" fill="#0F766E" />
            <rect x="4" y="17.5" width="32" height="4" fill="#115E59" />
            <rect x="8" y="23.5" width="6" height="4.6" rx="1" fill="#CCFBF1" />
          </g>
        </g>
      </g>
      <g class="hm-gesto-titilar" style="animation-delay: 300ms">
        <path class="hm-fig__asoma" d="M37.5 26l7 2.6V34c0 4.6-3 7.8-7 9.4-4-1.6-7-4.8-7-9.4v-5.4z" fill="#F59E0B" :style="retrasar(550)" />
        <path class="hm-fig__linea" pathLength="1" d="M34.3 34.6l2.2 2.2 4.1-4.5" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(850)" />
      </g>
    </template>
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ nombre: 'motor' | 'factura' | 'varios' | 'nube' | 'cobros'; retraso?: number }>(),
  { retraso: 0 },
)

// el retraso de cada pieza, más el de la fila de los chips
const retrasar = (ms: number) => ({ transitionDelay: `${ms + props.retraso}ms` })
</script>
