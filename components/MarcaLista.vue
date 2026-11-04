<template>
  <!-- La marca de la lista de la cabecera de hoteles, casas rurales y apartamentos: un disco teal con el visto en blanco.
       Asoma cuando AOS enseña su fila, con el retraso de la fila (retraso, en ms), y late al pasar el ratón por ella. Las
       clases son las de assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 24 24" aria-hidden="true">
    <g class="hm-gesto-latir">
      <g class="hm-fig__asoma" :style="retrasar(100)">
        <circle cx="12" cy="12" r="10" fill="#0D9488" />
        <path d="M17.84 3.89A10 10 0 1 1 3.89 17.84A10 10 0 0 0 17.84 3.89z" fill="#0F766E" />
      </g>
      <path class="hm-fig__linea" pathLength="1" d="M7.4 12.4l3.1 3.1 6.1-6.5" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(350)" />
    </g>
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ retraso?: number }>(), { retraso: 0 })

// el retraso de cada pieza, más el de su fila
const retrasar = (ms: number) => ({ transitionDelay: `${ms + props.retraso}ms` })
</script>
