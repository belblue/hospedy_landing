<template>
  <!-- Las ilustraciones de la portada que quedaban de la web anterior. Las facturas, sobre el degradado de su tarjeta de
       «Gestiona»: la reserva y la factura que sale de ella, con sus líneas, el total, el QR de Verifactu y el sello. El
       motor de reservas: tu web con el botón de reservar y la reserva que cae en el planning. La pasarela de cobros: el
       móvil con el pago, la tarjeta y la moneda que entra en el banco, que es tu cuenta. Se dibujan una vez, cuando AOS
       enseña su tarjeta, con el retraso de la tarjeta (retraso, en ms), y al pasar el ratón por la tarjeta hacen su gesto:
       la factura planea y el sello sella; el botón se pulsa con su onda, la ruta fluye y la reserva brinca; la tarjeta se
       desliza, la ruta fluye y la moneda brinca. Las clases son las de assets/css/figuras.css. -->
  <svg class="hm-fig" :viewBox="`0 0 ${caja[0]} ${caja[1]}`" :width="caja[0]" :height="caja[1]" aria-hidden="true">
    <template v-if="pieza === 'facturas'">
      <ellipse cx="128" cy="184" rx="100" ry="6" fill="#042F2E" opacity=".22" />
      <!-- la reserva, en su planning -->
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="20" y="105" width="84" height="64" rx="8" fill="#042F2E" opacity=".18" />
        <rect x="18" y="102" width="84" height="64" rx="8" fill="#FFFFFF" />
        <path d="M26 102h68a8 8 0 0 1 8 8v6H18v-6a8 8 0 0 1 8-8z" fill="#CCFBF1" />
        <circle v-for="x in [27, 33, 39]" :key="x" :cx="x" cy="109" r="1.8" fill="#5EEAD4" />
        <path d="M38 122v38M54 122v38M70 122v38M86 122v38" fill="none" stroke="#CCFBF1" stroke-width="1.2" />
        <rect x="26" y="128" width="56" height="12" rx="6" fill="#2DD4BF" />
        <circle cx="33" cy="134" r="3.4" fill="#FFFFFF" />
        <rect x="50" y="146" width="44" height="10" rx="5" fill="#99F6E4" />
      </g>
      <!-- el rastro de puntos de la reserva a la factura -->
      <g class="hm-fig__aparece" :style="retrasar(1000)">
        <path d="M98 100C108 88 116 80 128 74" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-dasharray=".1 8" opacity=".65" />
      </g>
      <g class="hm-gesto-planear">
        <g transform="rotate(6 176 86)">
          <g class="hm-fig__sale" :style="retrasar(400)">
            <rect x="134" y="27" width="88" height="124" rx="8" fill="#042F2E" opacity=".18" />
            <rect x="132" y="24" width="88" height="124" rx="8" fill="#FFFFFF" />
            <path d="M142 38h30" fill="none" stroke="#99F6E4" stroke-width="4.5" stroke-linecap="round" />
            <path d="M142 47h20" fill="none" stroke="#CCFBF1" stroke-width="3" stroke-linecap="round" />
            <rect x="194" y="32" width="16" height="13" rx="3" fill="#CCFBF1" />
            <!-- cada línea, con su concepto y su importe -->
            <path v-for="(linea, i) in LINEAS_FACTURA" :key="i" class="hm-fig__linea" pathLength="1" :d="linea" fill="none" stroke="#99F6E4" stroke-width="3" stroke-linecap="round" :style="retrasar(750 + i * 80)" />
            <path d="M142 110h68" fill="none" stroke="#CCFBF1" stroke-width="1.6" />
            <path d="M142 123h22" fill="none" stroke="#99F6E4" stroke-width="4" stroke-linecap="round" />
            <path class="hm-fig__linea" pathLength="1" d="M182 123h28" fill="none" stroke="#0D9488" stroke-width="5.5" stroke-linecap="round" :style="retrasar(1150)" />
            <!-- el QR de Verifactu -->
            <g class="hm-fig__asoma" :style="retrasar(1300)">
              <rect x="142" y="131" width="13" height="13" rx="2" fill="#115E59" />
              <rect x="144" y="133" width="3.5" height="3.5" fill="#FFFFFF" />
              <rect x="149.5" y="133" width="3.5" height="3.5" fill="#FFFFFF" />
              <rect x="144" y="138.5" width="3.5" height="3.5" fill="#FFFFFF" />
              <rect x="150" y="139" width="2" height="2" fill="#FFFFFF" />
            </g>
            <path d="M161 137.5h22" fill="none" stroke="#CCFBF1" stroke-width="2.4" stroke-linecap="round" />
            <g class="hm-gesto-sellar" style="animation-delay: 150ms">
              <g class="hm-fig__asoma" :style="retrasar(1450)">
                <circle cx="219" cy="28" r="11.5" fill="#F59E0B" />
                <path d="M213.6 28.3l3.6 3.6 6.4-6.9" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </template>

    <template v-else-if="pieza === 'motor'">
      <ellipse cx="164" cy="226" rx="128" ry="7" fill="#0F766E" opacity=".1" />
      <!-- tu web: la foto del alojamiento y el cuadro de las fechas -->
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="24" y="33" width="196" height="162" rx="12" fill="#0F766E" opacity=".14" />
        <rect x="20" y="28" width="196" height="162" rx="12" fill="#FFFFFF" stroke="#CCFBF1" stroke-width="1.5" />
        <path d="M32 28h172a12 12 0 0 1 12 12v8H20v-8a12 12 0 0 1 12-12z" fill="#0D9488" />
        <circle v-for="x in [33, 42, 51]" :key="x" :cx="x" cy="38" r="2.5" fill="#CCFBF1" />
        <rect x="64" y="33.5" width="112" height="9" rx="4.5" fill="#0F766E" />
        <rect x="32" y="58" width="172" height="58" rx="8" fill="#CCFBF1" />
        <path d="M32 102Q66 88 98 98T164 94Q186 90 204 98V108a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8z" fill="#99F6E4" />
        <rect x="106" y="82" width="30" height="20" fill="#0D9488" />
        <path d="M101 84L121 68l20 16z" fill="#115E59" stroke="#115E59" stroke-width="1.5" stroke-linejoin="round" />
        <rect x="117" y="90" width="8" height="12" rx="1" fill="#CCFBF1" />
        <rect x="127.5" y="87" width="6" height="6" rx="1" fill="#CCFBF1" />
        <circle cx="180" cy="74" r="7" fill="#FFFFFF" />
        <path d="M32 128h76" fill="none" stroke="#CCFBF1" stroke-width="5" stroke-linecap="round" />
        <path d="M32 140h52" fill="none" stroke="#CCFBF1" stroke-width="4" stroke-linecap="round" />
      </g>
      <g class="hm-fig__asoma" :style="retrasar(450)">
        <rect x="32" y="152" width="172" height="28" rx="8" fill="#F0FDFA" stroke="#99F6E4" stroke-width="1.4" />
        <rect x="38" y="158" width="44" height="16" rx="4" fill="#FFFFFF" />
        <path d="M44 166h14" fill="none" stroke="#5EEAD4" stroke-width="2.4" stroke-linecap="round" />
        <rect x="88" y="158" width="44" height="16" rx="4" fill="#FFFFFF" />
        <path d="M94 166h14" fill="none" stroke="#5EEAD4" stroke-width="2.4" stroke-linecap="round" />
      </g>
      <!-- el botón de reservar, que se pulsa con su onda -->
      <rect class="hm-gesto-onda" x="136" y="153" width="66" height="26" rx="13" fill="none" stroke="#2DD4BF" stroke-width="1.6" style="animation-delay: 150ms" />
      <g class="hm-gesto-pulsar">
        <g class="hm-fig__asoma" :style="retrasar(650)">
          <rect x="140" y="157" width="58" height="18" rx="9" fill="#F59E0B" />
          <path d="M157 166h24" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" />
        </g>
      </g>
      <!-- el planning, con el hueco de la reserva que llega -->
      <g class="hm-fig__entra-der" :style="retrasar(500)">
        <rect x="206" y="93" width="100" height="94" rx="10" fill="#0F766E" opacity=".14" />
        <rect x="202" y="88" width="100" height="94" rx="10" fill="#FFFFFF" stroke="#CCFBF1" stroke-width="1.5" />
        <path d="M212 88h80a10 10 0 0 1 10 10v6H202v-6a10 10 0 0 1 10-10z" fill="#0F766E" />
        <path d="M232 96h0M248 96h0M264 96h0M280 96h0" fill="none" stroke="#5EEAD4" stroke-width="2.4" stroke-linecap="round" />
        <circle v-for="y in [118, 136, 154]" :key="y" cx="212" :cy="y" r="3" fill="#99F6E4" />
        <rect x="222" y="113" width="44" height="10" rx="5" fill="#99F6E4" />
        <rect x="230" y="131" width="60" height="10" rx="5" fill="none" stroke="#99F6E4" stroke-width="1.4" stroke-dasharray="3 2.4" />
        <rect x="240" y="149" width="52" height="10" rx="5" fill="#5EEAD4" />
      </g>
      <g class="hm-fig__aparece" :style="retrasar(850)">
        <path class="hm-gesto-fluir" d="M200 162C214 154 222 146 229 140" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-dasharray="2.6 2.8" />
      </g>
      <!-- la reserva: brota del botón y cae en su hueco -->
      <g class="hm-gesto-brincar" style="animation-delay: 200ms">
        <g class="hm-fig__brota" :style="{ '--hm-desde-x': '-86px', '--hm-desde-y': '30px', ...retrasar(1000) }">
          <rect x="230" y="131" width="60" height="10" rx="5" fill="#0D9488" />
          <path d="M236 136.2l2.3 2.3 4.4-4.6" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </g>
    </template>

    <template v-else-if="pieza === 'pasarela'">
      <ellipse cx="164" cy="226" rx="128" ry="7" fill="#0F766E" opacity=".1" />
      <!-- el móvil, con el pago -->
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="118" y="24" width="92" height="184" rx="16" fill="#0D9488" />
        <path d="M192 24h2a16 16 0 0 1 16 16v152a16 16 0 0 1-16 16h-2z" fill="#0F766E" />
        <rect x="126" y="38" width="76" height="156" rx="8" fill="#F0FDFA" />
        <path d="M154 31h20" fill="none" stroke="#115E59" stroke-width="2.4" stroke-linecap="round" />
        <rect x="134" y="48" width="60" height="28" rx="6" fill="#FFFFFF" />
        <path d="M142 56h16" fill="none" stroke="#99F6E4" stroke-width="2.4" stroke-linecap="round" />
        <path d="M142 66h30" fill="none" stroke="#0F766E" stroke-width="5.5" stroke-linecap="round" />
        <rect x="134" y="84" width="60" height="13" rx="3" fill="#FFFFFF" stroke="#CCFBF1" stroke-width="1.2" />
        <path d="M140 90.5h26" fill="none" stroke="#CCFBF1" stroke-width="2.4" stroke-linecap="round" />
        <rect x="134" y="101" width="28" height="13" rx="3" fill="#FFFFFF" stroke="#CCFBF1" stroke-width="1.2" />
        <rect x="166" y="101" width="28" height="13" rx="3" fill="#FFFFFF" stroke="#CCFBF1" stroke-width="1.2" />
        <rect x="134" y="120" width="60" height="16" rx="8" fill="#0D9488" />
        <path d="M154 128h20" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" />
      </g>
      <!-- el pago hecho -->
      <g class="hm-fig__asoma" :style="retrasar(1100)">
        <circle cx="164" cy="164" r="17" fill="#0D9488" />
        <path d="M173.93 150.21A17 17 0 1 1 150.21 173.93A17 17 0 0 0 173.93 150.21z" fill="#0F766E" />
      </g>
      <path class="hm-fig__linea" pathLength="1" d="M156.2 164.7l5.3 5.3 10.4-11" fill="none" stroke="#FFFFFF" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(1300)" />
      <!-- la tarjeta, que se desliza -->
      <g class="hm-gesto-deslizar">
        <g class="hm-fig__entra" :style="retrasar(300)">
          <g transform="rotate(-8 74 168)">
            <rect x="29" y="142" width="96" height="60" rx="9" fill="#0F766E" opacity=".18" />
            <rect x="26" y="138" width="96" height="60" rx="9" fill="#0F766E" />
            <rect x="26" y="148" width="96" height="10" fill="#115E59" />
            <rect x="36" y="166" width="16" height="12" rx="2.5" fill="#CCFBF1" />
            <path d="M60 172h8M74 172h8M88 172h8M102 172h8" fill="none" stroke="#5EEAD4" stroke-width="2.4" stroke-linecap="round" />
          </g>
        </g>
      </g>
      <g class="hm-fig__aparece" :style="retrasar(900)">
        <path class="hm-gesto-fluir" d="M212 120C230 108 244 110 256 122" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-dasharray="2.6 2.8" />
      </g>
      <!-- el banco, que es tu cuenta, y la moneda que entra -->
      <g class="hm-fig__sube" :style="retrasar(600)">
        <rect x="236" y="192" width="72" height="8" rx="2" fill="#0F766E" />
        <rect x="240" y="186" width="64" height="6" fill="#0D9488" />
        <rect v-for="x in [246, 267.5, 289]" :key="x" :x="x" y="152" width="9" height="34" fill="#2DD4BF" />
        <rect x="240" y="146" width="64" height="6" fill="#115E59" />
        <path d="M236 146L272 124l36 22z" fill="#0D9488" stroke="#0D9488" stroke-width="2" stroke-linejoin="round" />
      </g>
      <g class="hm-gesto-brincar" style="animation-delay: 200ms">
        <g class="hm-fig__cae" :style="retrasar(1350)">
          <circle cx="272" cy="104" r="11" fill="#F59E0B" />
          <path d="M275.6 99.6A5.7 5.7 0 1 0 275.6 108.4M266.4 102.7h7.2M266.4 105.8h7.2" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" />
        </g>
      </g>
    </template>
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ pieza: 'facturas' | 'motor' | 'pasarela'; retraso?: number }>(), { retraso: 0 })

// ancho y alto de cada ilustración, en unidades del dibujo
const caja = computed(() => (props.pieza === 'facturas' ? [256, 200] : [320, 240]))

// las líneas de la factura: el concepto a la izquierda y el importe a la derecha
const LINEAS_FACTURA = ['M142 64h38M194 64h16', 'M142 76h30M196 76h14', 'M142 88h34M198 88h12', 'M142 100h26M194 100h16']

// el retraso de cada pieza, más el de su tarjeta
const retrasar = (ms: number) => ({ transitionDelay: `${ms + props.retraso}ms` })
</script>
