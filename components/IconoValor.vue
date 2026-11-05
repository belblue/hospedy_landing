<template>
  <!-- Los iconos de los valores de las opiniones (portada), a 20 px en su píldora: sin permanencia (el candado abierto),
       sin letra pequeña (la hoja con la letra grande), asumimos errores (el corazón con su tirita), igualdad (el signo
       igual) y flexibilidad (dos deslizadores). Se dibujan una vez, cuando AOS enseña la fila de las píldoras, con su
       retraso (retraso, en ms), y al pasar el ratón por la píldora hacen su gesto. Las clases son las de
       assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 20 20" aria-hidden="true">
    <!-- el candado, con el arco abierto que se balancea -->
    <template v-if="nombre === 'permanencia'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="3.5" y="9" width="13" height="9" rx="2" fill="#0D9488" />
        <circle cx="10" cy="13.5" r="1.4" fill="#CCFBF1" />
      </g>
      <g class="hm-gesto-balancear" style="transform-box: view-box; transform-origin: 13.5px 9px">
        <path class="hm-fig__linea" pathLength="1" d="M13.5 9V6.4a3.4 3.4 0 0 0-6.8 0" fill="none" stroke="#0F766E" stroke-width="2" stroke-linecap="round" :style="retrasar(350)" />
      </g>
    </template>

    <!-- la hoja: dos líneas de letra grande y una de letra normal, que late -->
    <template v-else-if="nombre === 'letra'">
      <g class="hm-gesto-latir">
        <rect class="hm-fig__crece" x="4" y="2.5" width="12" height="15" rx="2" fill="#CCFBF1" :style="retrasar(100)" />
        <path class="hm-fig__linea" pathLength="1" d="M6.8 7h6.4" fill="none" stroke="#0D9488" stroke-width="2.4" stroke-linecap="round" :style="retrasar(300)" />
        <path class="hm-fig__linea" pathLength="1" d="M6.8 11.5h4.6" fill="none" stroke="#0D9488" stroke-width="2.4" stroke-linecap="round" :style="retrasar(400)" />
        <path class="hm-fig__linea" pathLength="1" d="M6.8 15h5.4" fill="none" stroke="#2DD4BF" stroke-width="1.6" stroke-linecap="round" :style="retrasar(500)" />
      </g>
    </template>

    <!-- el corazón con su tirita, que late -->
    <template v-else-if="nombre === 'errores'">
      <g class="hm-gesto-latir">
        <path class="hm-fig__crece" d="M10 17.2s-7-4.4-7-9.2a3.9 3.9 0 0 1 7-2.4 3.9 3.9 0 0 1 7 2.4c0 4.8-7 9.2-7 9.2z" fill="#0D9488" :style="retrasar(100)" />
        <g transform="rotate(-38 10 9.6)">
          <rect class="hm-fig__asoma" x="5.6" y="8.2" width="8.8" height="2.8" rx="1.4" fill="#F59E0B" :style="retrasar(400)" />
        </g>
      </g>
    </template>

    <!-- el igual: sus dos rayas se mueven cada una hacia un lado -->
    <template v-else-if="nombre === 'igualdad'">
      <circle class="hm-fig__crece" cx="10" cy="10" r="8" fill="#CCFBF1" :style="retrasar(100)" />
      <g class="hm-gesto-deslizar">
        <path class="hm-fig__linea" pathLength="1" d="M6 8h8" fill="none" stroke="#0D9488" stroke-width="2.2" stroke-linecap="round" :style="retrasar(300)" />
      </g>
      <g class="hm-gesto-rodar">
        <path class="hm-fig__linea" pathLength="1" d="M6 12.4h8" fill="none" stroke="#0D9488" stroke-width="2.2" stroke-linecap="round" :style="retrasar(400)" />
      </g>
    </template>

    <!-- los deslizadores: cada mando va hacia un lado -->
    <template v-else-if="nombre === 'flexibilidad'">
      <path class="hm-fig__crece" d="M3 6.5h14M3 13.5h14" fill="none" stroke="#99F6E4" stroke-width="2" stroke-linecap="round" :style="retrasar(100)" />
      <g class="hm-gesto-deslizar">
        <circle class="hm-fig__asoma" cx="7" cy="6.5" r="2.6" fill="#0D9488" :style="retrasar(350)" />
      </g>
      <g class="hm-gesto-rodar">
        <circle class="hm-fig__asoma" cx="13" cy="13.5" r="2.6" fill="#0F766E" :style="retrasar(450)" />
      </g>
    </template>
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ nombre: 'permanencia' | 'letra' | 'errores' | 'igualdad' | 'flexibilidad'; retraso?: number }>(),
  { retraso: 0 },
)

// el retraso de cada pieza, más el de la fila de las píldoras
const retrasar = (ms: number) => ({ transitionDelay: `${ms + props.retraso}ms` })
</script>
