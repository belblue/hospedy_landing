<!--
  El escaner de documentos de escritorio en funcionamiento: sobre el render del aparato
  (/scaner.png), un DNI entra por la ranura pequenna y un pasaporte, abierto por la pagina de
  datos, por la grande; la ranura se ilumina al leerlo y sale la marca de leido. En bucle.

  Parece tridimensional sin serlo: los documentos son dibujos planos puestos en la perspectiva
  del render con una transformacion afin (la direccion de cada ranura y la vertical del aparato,
  que converge abajo), y un recorte por el borde de cada ranura esconde lo que entra. Solo se
  animan translate, scale y opacidad con CSS: nada de JavaScript en cada fotograma. El render va
  en un <img> aparte, asi que al moverse los documentos no se vuelve a pintar.

  Coordenadas: las del render (2000 x 1646), con 220 de aire encima para los documentos.
  Con movimiento reducido se queda quieto, con el DNI metido en su ranura.
-->
<template>
  <div
    ref="raizEl"
    class="hm-esc"
    :class="{ 'is-parado': parado }"
    role="img"
    aria-label="Escáner de documentos de escritorio: el DNI entra por la ranura pequeña y el pasaporte por la grande, y el lector los lee al momento."
  >
    <img class="hm-esc__aparato" src="/scaner.png" alt="" width="2000" height="1646" />
    <svg class="hm-esc__capa" viewBox="0 -220 2000 1866" aria-hidden="true">
      <defs>
        <!-- lo que queda por encima del borde de cada ranura: lo de debajo ya esta dentro -->
        <clipPath id="hm-esc-corte-peq" clipPathUnits="userSpaceOnUse">
          <polygon points="-200,263 2200,1901 2200,-600 -200,-600" />
        </clipPath>
        <clipPath id="hm-esc-corte-grande" clipPathUnits="userSpaceOnUse">
          <polygon points="-200,219.9 2200,1819.3 2200,-600 -200,-600" />
        </clipPath>
        <linearGradient id="hm-esc-dni" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f0fdfa" />
          <stop offset="1" stop-color="#d7f3ee" />
        </linearGradient>
        <linearGradient id="hm-esc-hoja" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fdfaf3" />
          <stop offset="1" stop-color="#f1e9d8" />
        </linearGradient>
        <linearGradient id="hm-esc-tapa" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#8c2a40" />
          <stop offset="1" stop-color="#5e1828" />
        </linearGradient>
      </defs>

      <!-- la luz del lector, dentro de cada ranura -->
      <g class="hm-esc__luz hm-esc__luz--grande">
        <line x1="75" y1="392.4" x2="1062" y2="1050.2" stroke="#5eead4" stroke-width="24" stroke-opacity=".35" />
        <line x1="75" y1="392.4" x2="1062" y2="1050.2" stroke="#ccfbf1" stroke-width="7" />
      </g>
      <g class="hm-esc__luz hm-esc__luz--peq">
        <line x1="340" y1="624.5" x2="815" y2="948.7" stroke="#5eead4" stroke-width="22" stroke-opacity=".35" />
        <line x1="340" y1="624.5" x2="815" y2="948.7" stroke="#ccfbf1" stroke-width="6" />
      </g>

      <!-- el pasaporte, abierto por la pagina de datos: la zona de lectura mecanica (MRZ) abajo,
           que es la que entra -->
      <g clip-path="url(#hm-esc-corte-grande)">
        <g class="hm-esc__doc hm-esc__doc--pas">
          <g transform="matrix(0.8322 0.5546 0.09683 0.9953 168.2 -93.2)">
            <rect x="-18" y="-18" width="856" height="620" rx="26" fill="url(#hm-esc-tapa)" />
            <rect x="0" y="0" width="820" height="600" rx="14" fill="url(#hm-esc-hoja)" stroke="#e2d6bf" stroke-width="3" />
            <path d="M0 150c140-40 270 40 410 0s270-40 410 0M0 190c140-40 270 40 410 0s270-40 410 0" fill="none" stroke="#e8dcc3" stroke-width="4" />
            <text x="40" y="74" font-size="46" font-weight="800" letter-spacing="3" fill="#7a2135">PASAPORTE</text>
            <rect x="40" y="110" width="190" height="240" rx="14" fill="#e6dccb" />
            <circle cx="135" cy="198" r="46" fill="#bfae8f" />
            <path d="M62 350c8-62 40-94 73-94s65 32 73 94z" fill="#bfae8f" />
            <g fill="#d3c4a4">
              <rect x="270" y="122" width="300" height="20" rx="10" />
              <rect x="270" y="166" width="400" height="20" rx="10" />
              <rect x="270" y="210" width="250" height="20" rx="10" />
              <rect x="270" y="270" width="340" height="20" rx="10" />
              <rect x="270" y="314" width="280" height="20" rx="10" />
            </g>
            <g fill="#6b5a3e" font-family="ui-monospace, 'SF Mono', Menlo, Consolas, monospace" font-size="38" letter-spacing="4">
              <text x="40" y="470">P&lt;ESPGARCIA&lt;LOPEZ&lt;&lt;LUCIA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</text>
              <text x="40" y="530">X1234567&lt;8ESP9001015F3101017&lt;&lt;&lt;&lt;</text>
            </g>
          </g>
        </g>
      </g>

      <!-- el DNI, de frente -->
      <g clip-path="url(#hm-esc-corte-peq)">
        <g class="hm-esc__doc hm-esc__doc--dni">
          <g transform="matrix(0.8260 0.5637 0.09594 0.99539 328.0 314.6)">
            <rect x="0" y="0" width="527" height="332" rx="30" fill="url(#hm-esc-dni)" stroke="#9ccfc6" stroke-width="3" />
            <path d="M30 0h467a30 30 0 0 1 30 30v36H0V30A30 30 0 0 1 30 0z" fill="#0f766e" />
            <text x="32" y="48" font-size="38" font-weight="800" letter-spacing="3" fill="#fff">DNI</text>
            <rect x="120" y="29" width="170" height="12" rx="6" fill="#5eead4" opacity=".7" />
            <rect x="36" y="100" width="72" height="56" rx="10" fill="#f5c26b" />
            <path d="M36 128h72M60 100v56M84 100v56" stroke="#d9a44e" stroke-width="4" />
            <rect x="382" y="92" width="112" height="140" rx="12" fill="#cde6e1" />
            <circle cx="438" cy="146" r="28" fill="#8fbdb5" />
            <path d="M392 232c6-38 24-58 46-58s40 20 46 58z" fill="#8fbdb5" />
            <g fill="#a8ccc5">
              <rect x="36" y="184" width="290" height="16" rx="8" />
              <rect x="36" y="214" width="220" height="16" rx="8" />
              <rect x="36" y="244" width="260" height="16" rx="8" />
              <rect x="36" y="284" width="170" height="16" rx="8" />
            </g>
          </g>
        </g>
      </g>

      <!-- leido -->
      <g class="hm-esc__ok hm-esc__ok--peq">
        <circle cx="1500" cy="196" r="96" fill="#000" opacity=".16" />
        <circle cx="1500" cy="180" r="96" fill="#fff" />
        <circle cx="1500" cy="180" r="74" fill="#ccfbf1" />
        <path d="M1464 182l26 26 48-50" fill="none" stroke="#0f766e" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <g class="hm-esc__ok hm-esc__ok--grande">
        <circle cx="1500" cy="196" r="96" fill="#000" opacity=".16" />
        <circle cx="1500" cy="180" r="96" fill="#fff" />
        <circle cx="1500" cy="180" r="74" fill="#ccfbf1" />
        <path d="M1464 182l26 26 48-50" fill="none" stroke="#0f766e" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

/* fuera de la vista, la animacion se detiene */
const raizEl = ref(null);
const parado = ref(false);
let io = null;

onMounted(() => {
  if (!("IntersectionObserver" in window) || !raizEl.value) return;
  io = new IntersectionObserver((entradas) => {
    parado.value = !entradas.some((x) => x.isIntersecting);
  });
  io.observe(raizEl.value);
});

onBeforeUnmount(() => {
  if (io) io.disconnect();
});
</script>

<style scoped>
.hm-esc {
  position: relative;
  width: 100%;
  aspect-ratio: 2000 / 1866;
}
.hm-esc__aparato {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
}
.hm-esc__capa {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  font-family: "Nunito Variable", Nunito, system-ui, sans-serif;
}

/* ---- el bucle: el DNI (0-42 %) y luego el pasaporte (46-88 %) ---- */
.hm-esc__doc,
.hm-esc__luz,
.hm-esc__ok {
  animation-duration: 11s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
.hm-esc.is-parado .hm-esc__doc,
.hm-esc.is-parado .hm-esc__luz,
.hm-esc.is-parado .hm-esc__ok {
  animation-play-state: paused;
}
.hm-esc__doc--dni {
  animation-name: hm-esc-dni;
}
.hm-esc__doc--pas {
  animation-name: hm-esc-pas;
}
.hm-esc__luz {
  opacity: 0;
}
.hm-esc__luz--peq {
  animation-name: hm-esc-luz-peq;
}
.hm-esc__luz--grande {
  animation-name: hm-esc-luz-grande;
}
.hm-esc__ok {
  opacity: 0;
  transform-box: fill-box;
  transform-origin: 50% 50%;
}
.hm-esc__ok--peq {
  animation-name: hm-esc-ok-peq;
}
.hm-esc__ok--grande {
  animation-name: hm-esc-ok-grande;
}

/* el documento aparece sobre su ranura, baja hasta meterse (el borde de la ranura esconde lo
   que entra), espera la lectura y sale. Los desplazamientos siguen la vertical del aparato */
@keyframes hm-esc-dni {
  0% {
    opacity: 0;
    translate: -8.6px -89.6px;
  }
  5% {
    opacity: 1;
    translate: -4.8px -49.8px;
  }
  15%,
  30% {
    opacity: 1;
    translate: 14.3px 148.7px;
  }
  38% {
    opacity: 1;
    translate: -4.8px -49.8px;
  }
  42%,
  100% {
    opacity: 0;
    translate: -8.6px -89.6px;
  }
}
@keyframes hm-esc-pas {
  0%,
  46% {
    opacity: 0;
    translate: -9.7px -99.5px;
  }
  51% {
    opacity: 1;
    translate: -5.8px -59.7px;
  }
  61%,
  76% {
    opacity: 1;
    translate: 26.1px 268.7px;
  }
  84% {
    opacity: 1;
    translate: -5.8px -59.7px;
  }
  88%,
  100% {
    opacity: 0;
    translate: -9.7px -99.5px;
  }
}
@keyframes hm-esc-luz-peq {
  0%,
  15% {
    opacity: 0;
  }
  18%,
  28% {
    opacity: 1;
  }
  31%,
  100% {
    opacity: 0;
  }
}
@keyframes hm-esc-luz-grande {
  0%,
  61% {
    opacity: 0;
  }
  64%,
  74% {
    opacity: 1;
  }
  77%,
  100% {
    opacity: 0;
  }
}
@keyframes hm-esc-ok-peq {
  0%,
  19% {
    opacity: 0;
    scale: 0.6;
  }
  22% {
    opacity: 1;
    scale: 1.08;
  }
  24%,
  30% {
    opacity: 1;
    scale: 1;
  }
  33%,
  100% {
    opacity: 0;
    scale: 0.9;
  }
}
@keyframes hm-esc-ok-grande {
  0%,
  65% {
    opacity: 0;
    scale: 0.6;
  }
  68% {
    opacity: 1;
    scale: 1.08;
  }
  70%,
  76% {
    opacity: 1;
    scale: 1;
  }
  79%,
  100% {
    opacity: 0;
    scale: 0.9;
  }
}

/* movimiento reducido: una foto fija, con el DNI metido en su ranura */
@media (prefers-reduced-motion: reduce) {
  .hm-esc__doc,
  .hm-esc__luz,
  .hm-esc__ok {
    animation: none;
  }
  .hm-esc__doc--dni {
    opacity: 1;
    translate: 14.3px 148.7px;
  }
  .hm-esc__doc--pas {
    opacity: 0;
  }
}
</style>
