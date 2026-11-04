<template>
  <!-- Los iconos de las tarjetas de problemas de hoteles, casas rurales y apartamentos, en su baldosa menta, centrada en
       la tarjeta: figuras planas en los teales de la web con un solo detalle en ámbar. Se dibujan una vez, cuando AOS
       enseña su tarjeta, con el retraso de la tarjeta (retraso, en ms), y al pasar el ratón por la tarjeta hacen su
       gesto. Son decorativos: el texto de la tarjeta dice lo mismo. Las clases de las figuras son las de
       assets/css/figuras.css.

       - nombre: checkin, parte, overbooking, comisiones, noshow, calendarios, desplazamiento, papeleo o disponibilidad -->
  <span class="hm-reto" aria-hidden="true">
    <svg class="hm-fig" viewBox="0 0 48 48">
      <!-- "El check-in es eterno": el documento del huésped y el reloj, cuya manecilla da una vuelta -->
      <template v-if="nombre === 'checkin'">
        <g class="hm-fig__entra" :style="retrasar(100)">
          <rect x="6" y="12" width="30" height="21" rx="3.5" fill="#0F766E" opacity=".2" />
          <rect x="4" y="10" width="30" height="21" rx="3.5" fill="#FFFFFF" />
          <rect x="8" y="14.5" width="9" height="11.5" rx="2" fill="#5EEAD4" />
          <circle cx="12.5" cy="18.6" r="2.1" fill="#FFFFFF" />
          <path d="M9.4 25c.5-2.4 1.7-3.6 3.1-3.6s2.6 1.2 3.1 3.6z" fill="#FFFFFF" />
          <path d="M21 16.5h9M21 20.5h7M21 24.5h4.5" fill="none" stroke="#2DD4BF" stroke-width="2.2" stroke-linecap="round" />
        </g>
        <g class="hm-fig__asoma" :style="retrasar(400)">
          <circle cx="35" cy="33" r="10" fill="#F59E0B" />
          <circle cx="35" cy="33" r="10" fill="none" stroke="#FFFFFF" stroke-width="2.4" />
          <path d="M35 33v-5.4" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" />
          <circle cx="35" cy="33" r="1.4" fill="#FFFFFF" />
        </g>
        <g class="hm-gesto-orbitar" style="--hm-duracion: 0.9s; transform-box: view-box; transform-origin: 35px 33px">
          <path class="hm-fig__linea" pathLength="1" d="M35 33l3.6 2.3" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" :style="retrasar(750)" />
        </g>
      </template>

      <!-- "Se me olvidó enviar el parte": el parte con el aviso, que tiembla -->
      <template v-else-if="nombre === 'parte'">
        <g class="hm-fig__crece" :style="retrasar(100)">
          <path d="M13 6.5h15.5l9 9V41a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V10.5a4 4 0 0 1 4-4z" fill="#0F766E" opacity=".2" />
          <path d="M11 4.5h15.5l9 9V39a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V8.5a4 4 0 0 1 4-4z" fill="#FFFFFF" />
          <path d="M26.5 4.5V10a3.5 3.5 0 0 0 3.5 3.5h5.5z" fill="#99F6E4" />
        </g>
        <path class="hm-fig__linea" pathLength="1" d="M12.5 20.5h13" fill="none" stroke="#2DD4BF" stroke-width="2.2" stroke-linecap="round" :style="retrasar(300)" />
        <path class="hm-fig__linea" pathLength="1" d="M12.5 25.5h10" fill="none" stroke="#2DD4BF" stroke-width="2.2" stroke-linecap="round" :style="retrasar(380)" />
        <path class="hm-fig__linea" pathLength="1" d="M12.5 30.5h6.5" fill="none" stroke="#2DD4BF" stroke-width="2.2" stroke-linecap="round" :style="retrasar(460)" />
        <g class="hm-gesto-temblar">
          <g class="hm-fig__asoma" :style="retrasar(700)">
            <circle cx="35.5" cy="35" r="9.5" fill="#F59E0B" />
            <circle cx="35.5" cy="35" r="9.5" fill="none" stroke="#FFFFFF" stroke-width="2.4" />
            <path d="M35.5 30v5.6" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" />
            <circle cx="35.5" cy="39.6" r="1.5" fill="#FFFFFF" />
          </g>
        </g>
      </template>

      <!-- "Tengo overbooking otra vez": dos reservas que chocan en las mismas casillas del planning -->
      <template v-else-if="nombre === 'overbooking'">
        <g class="hm-fig__crece" :style="retrasar(100)">
          <rect x="6" y="9" width="40" height="34" rx="5" fill="#0F766E" opacity=".2" />
          <rect x="4" y="7" width="40" height="34" rx="5" fill="#FFFFFF" />
          <path d="M9 7h30a5 5 0 0 1 5 5v3.5H4V12a5 5 0 0 1 5-5z" fill="#0D9488" />
          <path d="M11 11.3h0M21 11.3h0M31 11.3h0" fill="none" stroke="#CCFBF1" stroke-width="2.2" stroke-linecap="round" />
          <path d="M14 15.5V41M24 15.5V41M34 15.5V41" fill="none" stroke="#CCFBF1" stroke-width="1.4" />
        </g>
        <g class="hm-gesto-chocar">
          <rect class="hm-fig__entra" x="8" y="21" width="22" height="7.5" rx="3.75" fill="#0D9488" :style="retrasar(350)" />
        </g>
        <g class="hm-gesto-deslizar">
          <rect class="hm-fig__entra-der" x="18" y="27" width="22.5" height="7.5" rx="3.75" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.8" :style="retrasar(550)" />
        </g>
      </template>

      <!-- "Las comisiones me comen": la moneda mordida con el porcentaje, que llega rodando, y sus migas -->
      <template v-else-if="nombre === 'comisiones'">
        <g class="hm-gesto-tambalear" style="transform-box: view-box; transform-origin: 24px 26px">
          <g class="hm-fig__rueda" :style="retrasar(100)">
            <path d="M39.9 22.36A15 15 0 1 1 31.64 14.1A7 7 0 0 0 39.9 22.36Z" fill="#0F766E" opacity=".2" />
            <path d="M37.9 20.36A15 15 0 1 1 29.64 12.1A7 7 0 0 0 37.9 20.36Z" fill="#FFFFFF" stroke="#5EEAD4" stroke-width="1.4" />
            <circle cx="24" cy="26" r="9.6" fill="none" stroke="#99F6E4" stroke-width="1.6" />
            <circle cx="20.4" cy="22.6" r="2.1" fill="none" stroke="#F59E0B" stroke-width="2.2" />
            <circle cx="27.6" cy="29.4" r="2.1" fill="none" stroke="#F59E0B" stroke-width="2.2" />
            <path d="M28.2 21.6L19.8 30.4" fill="none" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round" />
          </g>
        </g>
        <g class="hm-gesto-migas">
          <circle class="hm-fig__asoma" cx="41.6" cy="11.4" r="1.4" fill="#0D9488" :style="retrasar(700)" />
          <circle class="hm-fig__asoma" cx="44" cy="16.6" r="1" fill="#0D9488" :style="retrasar(780)" />
          <circle class="hm-fig__asoma" cx="38.8" cy="7.6" r=".9" fill="#0D9488" :style="retrasar(860)" />
        </g>
      </template>

      <!-- "Otro no-show más": la puerta y el huésped que no ha venido, que se desvanece -->
      <template v-else-if="nombre === 'noshow'">
        <path class="hm-fig__linea" pathLength="1" d="M3.5 42h41" fill="none" stroke="#0F766E" stroke-width="2.2" stroke-linecap="round" :style="retrasar(50)" />
        <g class="hm-fig__sube" :style="retrasar(150)">
          <path d="M6.5 42V9.5A3.5 3.5 0 0 1 10 6h13a3.5 3.5 0 0 1 3.5 3.5V42z" fill="#0D9488" />
          <path d="M22 6h1a3.5 3.5 0 0 1 3.5 3.5V42H22z" fill="#0F766E" />
          <rect x="10.5" y="10" width="9" height="11" rx="1.6" fill="#0F766E" />
          <rect x="10.5" y="28" width="9" height="10" rx="1.6" fill="#0F766E" />
        </g>
        <g class="hm-gesto-titilar" style="animation-delay: 300ms">
          <circle class="hm-fig__asoma" cx="20.5" cy="25" r="1.9" fill="#F59E0B" :style="retrasar(500)" />
        </g>
        <g class="hm-gesto-fantasma">
          <g class="hm-fig__aparece" :style="retrasar(600)">
            <circle cx="36" cy="18" r="4.8" fill="none" stroke="#0F766E" stroke-width="2.2" stroke-dasharray="2.4 2.6" />
            <path d="M28.3 37c0-5.4 3.4-8.8 7.7-8.8s7.7 3.4 7.7 8.8" fill="none" stroke="#0F766E" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="2.4 2.6" />
          </g>
        </g>
      </template>

      <!-- "Actualizo 5 calendarios": los calendarios apilados y el lápiz que escribe en el de delante -->
      <template v-else-if="nombre === 'calendarios'">
        <rect class="hm-fig__asoma" x="16" y="4" width="27" height="21" rx="3.5" fill="#99F6E4" :style="retrasar(100)" />
        <rect class="hm-fig__asoma" x="11" y="9" width="27" height="22" rx="3.5" fill="#CCFBF1" :style="retrasar(200)" />
        <g class="hm-fig__crece" :style="retrasar(300)">
          <rect x="7" y="18" width="27" height="25" rx="3.5" fill="#0F766E" opacity=".2" />
          <rect x="5" y="16" width="27" height="25" rx="3.5" fill="#FFFFFF" />
          <path d="M8.5 16h20a3.5 3.5 0 0 1 3.5 3.5v3H5v-3A3.5 3.5 0 0 1 8.5 16z" fill="#0D9488" />
          <path d="M11 13.5v5M26 13.5v5" fill="none" stroke="#115E59" stroke-width="2.2" stroke-linecap="round" />
          <path d="M9.5 27h3M16.5 27h3M23.5 27h2M9.5 33h3M16.5 33h3" fill="none" stroke="#2DD4BF" stroke-width="2.4" stroke-linecap="round" />
        </g>
        <g class="hm-gesto-garabato">
          <g class="hm-fig__entra-der" :style="retrasar(700)">
            <path d="M44.28 18.04L47.96 21.72L45.84 23.84L42.16 20.16z" fill="#2DD4BF" />
            <path d="M42.16 20.16L45.84 23.84L31.84 37.84L28.16 34.16z" fill="#F59E0B" />
            <path d="M28.16 34.16L31.84 37.84L27.53 38.47z" fill="#99F6E4" />
            <path d="M27.78 36.75L29.25 38.22L27.53 38.47z" fill="#115E59" />
          </g>
        </g>
      </template>

      <!-- "Tengo que ir a recibir a todos": la ruta por el campo hasta la casa -->
      <template v-else-if="nombre === 'desplazamiento'">
        <g class="hm-fig__sube" :style="retrasar(100)">
          <path d="M11.5 13.5L6.4 21.6h2.9L5 29.2h13l-4.3-7.6h2.9z" fill="#2DD4BF" stroke="#2DD4BF" stroke-width="1.2" stroke-linejoin="round" />
          <path d="M11.5 29.2v4.3" fill="none" stroke="#115E59" stroke-width="2" stroke-linecap="round" />
        </g>
        <g class="hm-fig__aparece" :style="retrasar(300)">
          <path class="hm-gesto-fluir" d="M7.5 41.5c4 0 6-3.8 10-3.8s5.8 3.3 9.8 3.3c2.6 0 3.7-2 3.7-5" fill="none" stroke="#0F766E" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="2.6 2.8" />
        </g>
        <g class="hm-gesto-saltar">
          <g class="hm-fig__cae" :style="retrasar(450)">
            <path d="M31 36S19.5 26.7 19.5 17.5a11.5 11.5 0 0 1 23 0C42.5 26.7 31 36 31 36z" fill="#0D9488" />
            <path d="M27.2 17.6h7.6v5.6h-7.6z" fill="#FFFFFF" />
            <path d="M25.6 18.6L31 13.8l5.4 4.8z" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.2" stroke-linejoin="round" />
            <path d="M30 23.2v-2.6h2v2.6z" fill="#0D9488" />
          </g>
        </g>
        <g class="hm-gesto-deslizar">
          <circle class="hm-fig__asoma" cx="5.2" cy="41.5" r="2.4" fill="#F59E0B" :style="retrasar(750)" />
        </g>
      </template>

      <!-- "El papeleo me quita tiempo": la pila de papeles con el clip, que se tambalea -->
      <template v-else-if="nombre === 'papeleo'">
        <g class="hm-gesto-tambalear" style="transform-box: view-box; transform-origin: 21px 42px">
          <g class="hm-fig__cae" :style="retrasar(100)">
            <rect x="12.5" y="5.5" width="26" height="33" rx="3.5" fill="#99F6E4" transform="rotate(7 25.5 22)" />
          </g>
          <g class="hm-fig__cae" :style="retrasar(200)">
            <rect x="9.5" y="7" width="26" height="33" rx="3.5" fill="#CCFBF1" transform="rotate(-4 22.5 23.5)" />
          </g>
          <g class="hm-fig__cae" :style="retrasar(300)">
            <rect x="10" y="11" width="26" height="33" rx="3.5" fill="#0F766E" opacity=".2" />
            <rect x="8" y="9" width="26" height="33" rx="3.5" fill="#FFFFFF" />
            <path d="M13.5 25h15M13.5 29.5h15M13.5 34h11M13.5 38.5h7" fill="none" stroke="#2DD4BF" stroke-width="2.2" stroke-linecap="round" />
          </g>
          <path class="hm-fig__asoma" d="M20.5 15.5V6.8a2.8 2.8 0 0 1 5.6 0v10.4a4.6 4.6 0 0 1-9.2 0V9.5" fill="none" stroke="#F59E0B" stroke-width="2.4" stroke-linecap="round" :style="retrasar(650)" />
        </g>
      </template>

      <!-- "No sé cuándo tengo libre": el calendario y la lupa buscando un hueco -->
      <template v-else-if="nombre === 'disponibilidad'">
        <g class="hm-fig__crece" :style="retrasar(100)">
          <rect x="6" y="10" width="32" height="31" rx="4" fill="#0F766E" opacity=".2" />
          <rect x="4" y="8" width="32" height="31" rx="4" fill="#FFFFFF" />
          <path d="M8 8h24a4 4 0 0 1 4 4v4H4v-4a4 4 0 0 1 4-4z" fill="#0D9488" />
          <path d="M11 5v6M29 5v6" fill="none" stroke="#115E59" stroke-width="2.4" stroke-linecap="round" />
          <rect v-for="([x, y], i) in DIAS_LIBRES" :key="i" :x="x" :y="y" width="4.4" height="3.6" rx="1" fill="#CCFBF1" />
        </g>
        <g class="hm-fig__aparece" :style="retrasar(350)">
          <rect v-for="([x, y], i) in DIAS_OCUPADOS" :key="i" :x="x" :y="y" width="4.4" height="3.6" rx="1" fill="#2DD4BF" />
        </g>
        <g class="hm-gesto-buscar">
          <g class="hm-fig__entra-der" :style="retrasar(600)">
            <circle cx="31" cy="31" r="7.2" fill="#FFFFFF" fill-opacity=".94" stroke="#F59E0B" stroke-width="2.6" />
            <rect x="28.8" y="29.2" width="4.4" height="3.6" rx="1" fill="#CCFBF1" stroke="#0D9488" stroke-width="1.4" />
            <path d="M36.3 36.3L42 42" fill="none" stroke="#F59E0B" stroke-width="3.2" stroke-linecap="round" />
          </g>
        </g>
      </template>
    </svg>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  nombre: 'checkin' | 'parte' | 'overbooking' | 'comisiones' | 'noshow' | 'calendarios' | 'desplazamiento' | 'papeleo' | 'disponibilidad'
  retraso?: number
}>(), { retraso: 0 })

// los días del calendario de disponibilidad: los libres y los ocupados
const DIAS_LIBRES = [[20, 20], [14, 26], [20, 32]]
const DIAS_OCUPADOS = [[8, 20], [14, 20], [26, 20], [8, 26], [20, 26], [8, 32], [14, 32]]

// el retraso de cada pieza, más el de su tarjeta
const retrasar = (ms: number) => ({ transitionDelay: `${ms + props.retraso}ms` })
</script>

<style scoped>
.hm-reto {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: linear-gradient(150deg, #f0fdfa 0%, #ccfbf1 100%);
  box-shadow: inset 0 0 0 1px rgba(15, 118, 110, 0.14), 0 8px 18px -12px rgba(15, 118, 110, 0.55);
}
.hm-reto svg {
  width: 2.625rem;
  height: 2.625rem;
  display: block;
}
</style>
