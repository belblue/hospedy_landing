<template>
  <!-- Los iconos de /funciones/partes-viajeros, en la baldosa verde agua de las funcionalidades. «Por qué automatizar los
       partes»: el cronómetro (menos tiempo en recepción), el formulario que se rellena solo (menos errores al teclear),
       la multa con el escudo (evita multas) y el parte que sale volando (envío automático). Y uno solo para los tres
       registros, SES Hospedajes, Ertzaintza y Mossos d'Esquadra: el escudo con el parte y el visto. Se dibujan una vez,
       cuando AOS enseña su tarjeta, con el retraso de la tarjeta (retraso, en ms), y al pasar el ratón por la tarjeta
       hacen su gesto. Las clases son las de assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 48 48" aria-hidden="true">
    <!-- el cronómetro: las líneas de la prisa, el botón que se pulsa y la manecilla que da la vuelta -->
    <template v-if="nombre === 'cronometro'">
      <g class="hm-fig__entra" :style="retrasar(550)">
        <path d="M2 21h6M1 27h7M2 33h6" fill="none" stroke="#5EEAD4" stroke-width="2.2" stroke-linecap="round" />
      </g>
      <g class="hm-fig__crece" :style="retrasar(100)">
        <circle cx="28" cy="29" r="16" fill="#0F766E" opacity=".2" />
        <circle cx="26" cy="27" r="16" fill="#FFFFFF" />
        <circle cx="26" cy="27" r="16" fill="none" stroke="#0D9488" stroke-width="3" />
        <path d="M26 15v2.4M38 27h-2.4M26 39v-2.4M14 27h2.4" fill="none" stroke="#99F6E4" stroke-width="2" stroke-linecap="round" />
      </g>
      <g class="hm-gesto-pulsar">
        <g class="hm-fig__cae" :style="retrasar(300)">
          <path d="M26 11V7.5" fill="none" stroke="#0F766E" stroke-width="3" stroke-linecap="round" />
          <rect x="21" y="3" width="10" height="5" rx="2" fill="#0F766E" />
        </g>
      </g>
      <path class="hm-fig__asoma" d="M26 27V15.5A11.5 11.5 0 0 1 35.96 21.25z" fill="#F59E0B" :style="retrasar(450)" />
      <g class="hm-gesto-orbitar" style="--hm-duracion: 0.9s; transform-box: view-box; transform-origin: 26px 27px">
        <path class="hm-fig__linea" pathLength="1" d="M26 27l7.5-4.3" fill="none" stroke="#115E59" stroke-width="2.4" stroke-linecap="round" :style="retrasar(700)" />
      </g>
      <circle class="hm-fig__asoma" cx="26" cy="27" r="2.2" fill="#115E59" :style="retrasar(600)" />
    </template>

    <!-- el formulario: los campos se escriben solos, con su visto, y el cursor parpadea en el último -->
    <template v-else-if="nombre === 'formulario'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="9" y="7" width="32" height="37" rx="4" fill="#0F766E" opacity=".2" />
        <rect x="7" y="5" width="32" height="37" rx="4" fill="#FFFFFF" />
        <rect v-for="y in [11, 22, 33]" :key="y" x="11" :y="y" width="18" height="7" rx="2" fill="#CCFBF1" />
      </g>
      <path class="hm-fig__linea" pathLength="1" d="M13.5 14.5h12" fill="none" stroke="#2DD4BF" stroke-width="2" stroke-linecap="round" :style="retrasar(300)" />
      <path class="hm-fig__linea" pathLength="1" d="M13.5 25.5h10" fill="none" stroke="#2DD4BF" stroke-width="2" stroke-linecap="round" :style="retrasar(450)" />
      <path class="hm-fig__linea" pathLength="1" d="M13.5 36.5h6" fill="none" stroke="#2DD4BF" stroke-width="2" stroke-linecap="round" :style="retrasar(600)" />
      <path class="hm-fig__linea" pathLength="1" d="M31 14.6l1.8 1.8 3.4-3.6" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(500)" />
      <path class="hm-fig__linea" pathLength="1" d="M31 25.6l1.8 1.8 3.4-3.6" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(650)" />
      <g class="hm-gesto-fantasma">
        <rect class="hm-fig__asoma" x="21" y="33.6" width="1.8" height="5.8" rx=".9" fill="#F59E0B" :style="retrasar(800)" />
      </g>
    </template>

    <!-- la multa, que se tambalea, y el escudo con el visto, que titila -->
    <template v-else-if="nombre === 'multa'">
      <g class="hm-gesto-tambalear" style="transform-box: view-box; transform-origin: 18px 41px">
        <g class="hm-fig__crece" :style="retrasar(100)">
          <path d="M8 5h20a3 3 0 0 1 3 3v31l-3.75-2.5-3.75 2.5-3.75-2.5-3.75 2.5-3.75-2.5-3.75 2.5L5 36.7V8a3 3 0 0 1 3-3z" fill="#0F766E" opacity=".2" transform="translate(2 2)" />
          <path d="M8 5h20a3 3 0 0 1 3 3v31l-3.75-2.5-3.75 2.5-3.75-2.5-3.75 2.5-3.75-2.5-3.75 2.5L5 36.7V8a3 3 0 0 1 3-3z" fill="#FFFFFF" />
          <path d="M10 12h14M10 17h10" fill="none" stroke="#CCFBF1" stroke-width="2.4" stroke-linecap="round" />
        </g>
        <g class="hm-fig__asoma" :style="retrasar(350)">
          <circle cx="16" cy="27" r="6" fill="#F59E0B" />
          <path d="M18 24.6A3.1 3.1 0 1 0 18 29.4M13 26.3h3.9M13 28h3.9" fill="none" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" />
        </g>
      </g>
      <g class="hm-gesto-titilar" style="animation-delay: 150ms">
        <g class="hm-fig__asoma" :style="retrasar(550)">
          <path d="M36 17l9 3.4V27c0 6-3.9 10.3-9 12.4-5.1-2.1-9-6.4-9-12.4v-6.6z" fill="#0D9488" />
          <path d="M36 17l9 3.4V27c0 6-3.9 10.3-9 12.4z" fill="#0F766E" />
        </g>
        <path class="hm-fig__linea" pathLength="1" d="M32.3 28.2l2.6 2.6 4.8-5.2" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(800)" />
      </g>
    </template>

    <!-- el envío: el parte, la ruta que fluye y el avión de papel que planea -->
    <template v-else-if="nombre === 'envio'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="7" y="18" width="22" height="27" rx="3" fill="#0F766E" opacity=".2" />
        <rect x="5" y="16" width="22" height="27" rx="3" fill="#FFFFFF" />
        <path d="M8 16h16a3 3 0 0 1 3 3v3H5v-3a3 3 0 0 1 3-3z" fill="#99F6E4" />
        <circle cx="10.5" cy="28" r="2.8" fill="#5EEAD4" />
        <path d="M15.5 27h8M15.5 31h6M8.5 37h15" fill="none" stroke="#CCFBF1" stroke-width="2" stroke-linecap="round" />
      </g>
      <g class="hm-fig__aparece" :style="retrasar(500)">
        <path class="hm-gesto-fluir" d="M22 15C25 9 29 7 33 8" fill="none" stroke="#0D9488" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2.6 2.8" />
      </g>
      <g class="hm-gesto-planear">
        <g class="hm-fig__brota" :style="{ '--hm-desde-x': '-14px', '--hm-desde-y': '10px', ...retrasar(700) }">
          <path d="M46 3L29 10.4l7 2.6 2.6 7z" fill="#F59E0B" stroke="#F59E0B" stroke-width="1" stroke-linejoin="round" />
          <path d="M36 13l10-10" fill="none" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" opacity=".8" />
        </g>
      </g>
    </template>

    <!-- los registros: el escudo con el parte y el visto, que late -->
    <template v-else-if="nombre === 'registro'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <path d="M26 6l16 6v12c0 10.5-6.8 18-16 22-9.2-4-16-11.5-16-22V12z" fill="#0F766E" opacity=".2" />
        <path d="M24 4l16 6v12c0 10.5-6.8 18-16 22-9.2-4-16-11.5-16-22V10z" fill="#0D9488" />
        <path d="M24 4l16 6v12c0 10.5-6.8 18-16 22z" fill="#0F766E" />
      </g>
      <g class="hm-fig__asoma" :style="retrasar(350)">
        <rect x="17" y="13" width="14" height="18" rx="2" fill="#FFFFFF" />
        <path d="M19.5 18h9M19.5 22h7M19.5 26h8" fill="none" stroke="#99F6E4" stroke-width="1.6" stroke-linecap="round" />
      </g>
      <g class="hm-gesto-latir" style="animation-delay: 100ms">
        <circle class="hm-fig__asoma" cx="35" cy="35" r="7" fill="#F59E0B" :style="retrasar(600)" />
        <path class="hm-fig__linea" pathLength="1" d="M31.8 35.2l2.2 2.2 4-4.3" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(800)" />
      </g>
    </template>
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ nombre: 'cronometro' | 'formulario' | 'multa' | 'envio' | 'registro'; retraso?: number }>(),
  { retraso: 0 },
)

// el retraso de cada pieza, más el de su tarjeta
const retrasar = (ms: number) => ({ transitionDelay: `${ms + props.retraso}ms` })
</script>
