<template>
  <!-- Los iconos de las funcionalidades de hoteles, casas rurales y apartamentos, en su baldosa verde agua. Los que se
       repiten entre páginas son de la misma familia: las tres encuestas del INE son la misma hoja con el emblema de su
       alojamiento, el check-in con escáner y el auto check-in llevan el mismo móvil, varias casas es el mapa con la ruta
       entre ellas y varios apartamentos, tres bloques. El ámbar marca el detalle de cada uno. Se dibujan una vez, cuando
       AOS enseña su tarjeta, con el retraso de la tarjeta (retraso, en ms), y al pasar el ratón por la tarjeta hacen su
       gesto. En el móvil salen más pequeños, y los de casas rurales, sin los detalles más finos y con algún trazo más
       grueso. Las clases son las de assets/css/figuras.css. -->
  <svg class="hm-fig" viewBox="0 0 48 48" aria-hidden="true">
    <!-- la hoja de la encuesta, con las casillas de la ocupación: el hotel y los apartamentos la envían, y la casa rural
         la hace saltar -->
    <g v-if="ENCUESTAS.includes(nombre)" :class="nombre === 'encuesta-rural' ? 'hm-gesto-saltar' : 'hm-gesto-enviar'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="7" y="6" width="26" height="34" rx="3.5" fill="#0F766E" opacity=".2" />
        <rect x="5" y="4" width="26" height="34" rx="3.5" fill="#FFFFFF" />
        <path d="M8.5 4h19A3.5 3.5 0 0 1 31 7.5V11H5V7.5A3.5 3.5 0 0 1 8.5 4z" fill="#0D9488" />
      </g>
      <template v-for="(fila, f) in OCUPACION" :key="f">
        <rect v-for="(ocupada, c) in fila" :key="c" class="hm-fig__asoma" :x="9 + c * 6.5" :y="15 + f * 6.5" width="5" height="5" rx="1" :fill="ocupada ? '#2DD4BF' : '#CCFBF1'" :style="retrasar(300 + (f * 3 + c) * 50)" />
      </template>
    </g>

    <!-- el emblema de la encuesta hotelera: la campanilla de recepción, que suena -->
    <template v-if="nombre === 'encuesta-hotel'">
      <g class="hm-fig__sube" :style="retrasar(750)">
        <rect x="27.5" y="41.5" width="19" height="3.6" rx="1.8" fill="#0F766E" />
        <path d="M29.5 41.5a7.5 7.5 0 0 1 15 0z" fill="#0D9488" />
        <path d="M32.2 39.4a5 5 0 0 1 2.8-3.4" fill="none" stroke="#99F6E4" stroke-width="1.5" stroke-linecap="round" />
      </g>
      <g class="hm-gesto-pulsar" style="--hm-recorrido: 1.6px">
        <g class="hm-fig__cae" :style="retrasar(950)">
          <path d="M37 31.6v2.6" fill="none" stroke="#115E59" stroke-width="2" stroke-linecap="round" />
          <ellipse cx="37" cy="31" rx="3.2" ry="1.7" fill="#F59E0B" />
        </g>
      </g>
    </template>
    <!-- el de turismo rural: la casa, con humo en la chimenea -->
    <template v-else-if="nombre === 'encuesta-rural'">
      <g class="hm-fig__sube" :style="retrasar(750)">
        <rect x="40.5" y="29.5" width="2.8" height="5.5" fill="#115E59" />
        <rect x="29.5" y="36" width="15" height="9.5" fill="#0D9488" />
        <path d="M27.5 37L37 29l9.5 8z" fill="#115E59" stroke="#115E59" stroke-width="1.5" stroke-linejoin="round" />
        <path d="M35.5 45.5v-4.5a1.5 1.5 0 0 1 3 0v4.5z" fill="#CCFBF1" />
        <rect x="31.5" y="38.8" width="2.8" height="2.8" rx=".5" fill="#F59E0B" />
      </g>
      <g class="hm-gesto-humo">
        <circle class="hm-fig__asoma" cx="42" cy="26.5" r="1.4" fill="#5EEAD4" :style="retrasar(950)" />
        <circle class="hm-fig__asoma" cx="43.8" cy="23.4" r="1.9" fill="#5EEAD4" :style="retrasar(1050)" />
      </g>
    </template>
    <!-- el de apartamentos: el bloque, con la maleta que rueda -->
    <template v-else-if="nombre === 'encuesta-apartamento'">
      <g class="hm-fig__sube" :style="retrasar(750)">
        <path d="M30 29h8.5a1.5 1.5 0 0 1 1.5 1.5V45.5H28.5V30.5A1.5 1.5 0 0 1 30 29z" fill="#0D9488" />
        <path d="M37 29h1.5a1.5 1.5 0 0 1 1.5 1.5V45.5h-3z" fill="#0F766E" />
        <rect v-for="([x, y], i) in VENTANAS_EMBLEMA" :key="i" :x="x" :y="y" width="2.4" height="2.4" rx=".4" fill="#CCFBF1" />
        <path d="M32.2 45.5v-3.3h2.6v3.3z" fill="#115E59" />
      </g>
      <g class="hm-gesto-rodar">
        <g class="hm-fig__entra-der" :style="retrasar(950)">
          <path d="M42.6 38v-1.6h2.8V38" fill="none" stroke="#115E59" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          <rect x="41" y="38" width="6" height="6.5" rx="1.2" fill="#F59E0B" />
        </g>
      </g>
    </template>

    <!-- el check-in: el mismo móvil para el escáner y para el auto check-in -->
    <template v-else-if="nombre === 'checkin' || nombre === 'auto-checkin'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="24" y="4" width="18" height="37" rx="4" fill="#0D9488" />
        <path d="M37 4h1a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-1z" fill="#0F766E" />
        <rect x="26.5" y="8.5" width="11" height="27" rx="2" fill="#CCFBF1" />
        <path d="M29.5 6.3h5" fill="none" stroke="#115E59" stroke-width="1.4" stroke-linecap="round" />
        <path v-if="nombre === 'checkin'" d="M28.5 14v-2.5H31M35.5 14v-2.5H33M28.5 19v2.5H31M35.5 19v2.5H33" fill="none" stroke="#0D9488" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <!-- con escáner: el documento delante del móvil y la línea que lo lee -->
      <template v-if="nombre === 'checkin'">
        <g class="hm-fig__entra" :style="retrasar(300)">
          <rect x="6" y="24" width="27" height="17" rx="3" fill="#0F766E" opacity=".2" />
          <rect x="4" y="22" width="27" height="17" rx="3" fill="#FFFFFF" />
          <rect x="7" y="25.5" width="7.5" height="10" rx="1.5" fill="#5EEAD4" />
          <circle cx="10.75" cy="29" r="1.9" fill="#FFFFFF" />
          <path d="M8.2 34.8c.4-2 1.3-3 2.55-3s2.15 1 2.55 3z" fill="#FFFFFF" />
          <path d="M18 27.5h9M18 31h7M18 34.5h8" fill="none" stroke="#2DD4BF" stroke-width="2" stroke-linecap="round" />
        </g>
        <g class="hm-gesto-barrer">
          <path class="hm-fig__linea" pathLength="1" d="M2.5 30.5h31" fill="none" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round" :style="retrasar(650)" />
        </g>
      </template>
      <!-- auto check-in: el documento ya en la pantalla, el visto y la llave colgada -->
      <template v-else>
        <g class="hm-fig__asoma" :style="retrasar(350)">
          <rect x="28" y="11" width="8" height="10" rx="1.5" fill="#FFFFFF" />
          <rect x="29.2" y="12.4" width="3" height="3.8" rx=".6" fill="#5EEAD4" />
          <path d="M33.4 13.4h1.3M29.3 18.6h5.4" fill="none" stroke="#2DD4BF" stroke-width="1.2" stroke-linecap="round" />
        </g>
        <circle class="hm-fig__asoma" cx="32" cy="28" r="4.6" fill="#0D9488" :style="retrasar(500)" />
        <path class="hm-fig__linea" pathLength="1" d="M29.9 28.1l1.5 1.5 2.9-3.1" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(700)" />
        <path class="hm-fig__aparece" d="M8 7.5h10" fill="none" stroke="#115E59" stroke-width="2" stroke-linecap="round" :style="retrasar(500)" />
        <g class="hm-gesto-balancear" style="transform-box: view-box; transform-origin: 13px 7.5px">
          <g class="hm-fig__cae" :style="retrasar(600)">
            <path d="M13 7.5v5" fill="none" stroke="#115E59" stroke-width="1.6" stroke-linecap="round" />
            <circle cx="13" cy="17" r="4.5" fill="none" stroke="#F59E0B" stroke-width="3" />
            <path d="M13 21.5v15M13 29.5h3.6M13 34h4.6" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
          </g>
        </g>
      </template>
    </template>

    <!-- varias casas: el mapa, la ruta entre ellas y las tres casas, que saltan una detrás de otra -->
    <template v-else-if="nombre === 'varias-casas'">
      <g class="hm-fig__crece" :style="retrasar(50)">
        <path d="M4 11L17.3 8V39L4 42z" fill="#FFFFFF" />
        <path d="M17.3 8L30.7 11V42L17.3 39z" fill="#99F6E4" />
        <path d="M30.7 11L44 8V39L30.7 42z" fill="#FFFFFF" />
        <path class="md:[stroke-width:1.6px]" d="M4 11L17.3 8L30.7 11L44 8V39L30.7 42L17.3 39L4 42z" fill="none" stroke="#0F766E" stroke-width="1.8" stroke-linejoin="round" />
      </g>
      <g class="hm-fig__aparece" :style="retrasar(600)">
        <path class="hm-gesto-fluir md:[stroke-width:2px]" d="M13.6 33.2C16 27.5 18.6 22.4 24 22.2C29.4 22 31 28.6 32.6 30.6" fill="none" stroke="#0F766E" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="2.6 2.8" />
      </g>
      <g class="hm-gesto-latir" style="animation-delay: 500ms">
        <path class="hm-fig__asoma" d="M35.1 33.72L34.63 28.98L30.57 32.23z" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.2" stroke-linejoin="round" :style="retrasar(850)" />
      </g>
      <g v-for="(casa, i) in CASAS" :key="i" class="hm-gesto-saltar" :style="{ animationDelay: `${i * 150}ms` }">
        <g class="hm-fig__sube" :style="retrasar(250 + i * 100)">
          <rect :x="casa.x - 3.2" :y="casa.y + 3.8" width="6.4" height="5" :fill="casa.pared" />
          <path :d="`M${casa.x - 4.4} ${casa.y + 4.2}L${casa.x} ${casa.y}l4.4 4.2z`" :fill="casa.tejado" :stroke="casa.tejado" stroke-width="1" stroke-linejoin="round" />
          <rect :x="casa.x - 0.9" :y="casa.y + 6" width="1.8" height="2.8" fill="#FFFFFF" />
        </g>
      </g>
    </template>

    <!-- varios apartamentos: tres bloques que saltan uno detrás de otro, con una ventana encendida -->
    <template v-else-if="nombre === 'varios-apartamentos'">
      <path class="hm-fig__linea" pathLength="1" d="M3 41.5h42" fill="none" stroke="#0F766E" stroke-width="2.4" stroke-linecap="round" :style="retrasar(50)" />
      <g class="hm-gesto-saltar">
        <g class="hm-fig__sube" :style="retrasar(200)">
          <path d="M6.5 27h8a1.5 1.5 0 0 1 1.5 1.5v13H5v-13A1.5 1.5 0 0 1 6.5 27z" fill="#2DD4BF" />
          <rect v-for="([x, y], i) in VENTANAS_BAJO" :key="i" :x="x" :y="y" width="2.6" height="2.6" rx=".5" fill="#FFFFFF" />
        </g>
      </g>
      <g class="hm-gesto-saltar" style="animation-delay: 80ms">
        <g class="hm-fig__sube" :style="retrasar(300)">
          <path d="M19 9h10a1.5 1.5 0 0 1 1.5 1.5v31h-13v-31A1.5 1.5 0 0 1 19 9z" fill="#0D9488" />
          <path d="M27 9h2a1.5 1.5 0 0 1 1.5 1.5v31H27z" fill="#0F766E" />
          <rect v-for="([x, y], i) in VENTANAS_ALTO" :key="i" :x="x" :y="y" width="2.8" height="2.8" rx=".5" fill="#CCFBF1" />
          <path d="M23.5 41.5V37h3v4.5z" fill="#115E59" />
        </g>
        <rect class="hm-fig__asoma" x="24" y="22" width="2.8" height="2.8" rx=".5" fill="#F59E0B" :style="retrasar(750)" />
      </g>
      <g class="hm-gesto-saltar" style="animation-delay: 160ms">
        <g class="hm-fig__sube" :style="retrasar(400)">
          <path d="M33.5 19h8a1.5 1.5 0 0 1 1.5 1.5v21H32v-21a1.5 1.5 0 0 1 1.5-1.5z" fill="#0F766E" />
          <rect v-for="([x, y], i) in VENTANAS_MEDIO" :key="i" :x="x" :y="y" width="2.6" height="2.6" rx=".5" fill="#99F6E4" />
        </g>
      </g>
    </template>

    <!-- el planning: las reservas entran en sus filas y la ámbar se arrastra a otra -->
    <template v-else-if="nombre === 'planning'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="7" y="10" width="38" height="32" rx="4" fill="#0F766E" opacity=".2" />
        <rect x="5" y="8" width="38" height="32" rx="4" fill="#FFFFFF" />
        <path d="M9 8h30a4 4 0 0 1 4 4v3H5v-3a4 4 0 0 1 4-4z" fill="#0D9488" />
        <path d="M21 11.5h0M27 11.5h0M33 11.5h0" fill="none" stroke="#CCFBF1" stroke-width="2" stroke-linecap="round" />
        <circle cx="9.5" cy="22.2" r="1.6" fill="#99F6E4" />
        <circle cx="9.5" cy="28.5" r="1.6" fill="#99F6E4" />
        <circle cx="9.5" cy="34.8" r="1.6" fill="#99F6E4" />
      </g>
      <rect class="hm-fig__entra" x="14" y="20" width="13" height="4.4" rx="2.2" fill="#0D9488" :style="retrasar(350)" />
      <rect class="hm-fig__entra" x="14" y="26.3" width="25" height="4.4" rx="2.2" fill="#2DD4BF" :style="retrasar(450)" />
      <rect class="hm-fig__entra" x="14" y="32.6" width="9" height="4.4" rx="2.2" fill="#0F766E" :style="retrasar(550)" />
      <g class="hm-gesto-arrastrar">
        <g class="hm-fig__cae" :style="retrasar(700)">
          <rect x="27" y="33.4" width="13" height="4.4" rx="2.2" fill="#0F766E" opacity=".25" />
          <rect x="26" y="31.6" width="13" height="4.4" rx="2.2" fill="#F59E0B" />
        </g>
      </g>
    </template>

    <!-- la factura: se escriben sus líneas y cae la moneda, que da la vuelta -->
    <template v-else-if="nombre === 'factura'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="9" y="6" width="27" height="36" rx="3.5" fill="#0F766E" opacity=".2" />
        <rect x="7" y="4" width="27" height="36" rx="3.5" fill="#FFFFFF" />
        <rect x="11" y="8.5" width="7" height="5" rx="1.2" fill="#99F6E4" />
        <path d="M24 9.5h6M26 12.5h4" fill="none" stroke="#CCFBF1" stroke-width="1.8" stroke-linecap="round" />
      </g>
      <path class="hm-fig__linea" pathLength="1" d="M11 19.5h19" fill="none" stroke="#2DD4BF" stroke-width="2" stroke-linecap="round" :style="retrasar(350)" />
      <path class="hm-fig__linea" pathLength="1" d="M11 24h19" fill="none" stroke="#2DD4BF" stroke-width="2" stroke-linecap="round" :style="retrasar(450)" />
      <path class="hm-fig__linea" pathLength="1" d="M11 28.5h12" fill="none" stroke="#2DD4BF" stroke-width="2" stroke-linecap="round" :style="retrasar(550)" />
      <path class="hm-fig__linea" pathLength="1" d="M15 34.5h11" fill="none" stroke="#0D9488" stroke-width="3" stroke-linecap="round" :style="retrasar(650)" />
      <g class="hm-gesto-voltear">
        <g class="hm-fig__cae" :style="retrasar(800)">
          <circle cx="36.5" cy="36" r="8.5" fill="#F59E0B" />
          <path d="M39.3 32.6A4.4 4.4 0 1 0 39.3 39.4M32.2 35h5.6M32.2 37.4h5.6" fill="none" stroke="#FFFFFF" stroke-width="1.7" stroke-linecap="round" />
        </g>
      </g>
    </template>

    <!-- la recepción en el bolsillo: el móvil, con la campanilla en la pantalla, vibra -->
    <template v-else-if="nombre === 'movil'">
      <g class="hm-gesto-vibrar">
        <g class="hm-fig__crece" :style="retrasar(100)">
          <rect x="14" y="3" width="20" height="42" rx="4.5" fill="#0D9488" />
          <path d="M29 3h.5A4.5 4.5 0 0 1 34 7.5v33a4.5 4.5 0 0 1-4.5 4.5H29z" fill="#0F766E" />
          <rect x="16.5" y="8" width="15" height="31" rx="2" fill="#CCFBF1" />
          <path class="md:[stroke-width:1.4px]" d="M21.5 5.5h5" fill="none" stroke="#115E59" stroke-width="1.6" stroke-linecap="round" />
          <path class="hidden md:inline" d="M22 42h4" fill="none" stroke="#99F6E4" stroke-width="1.4" stroke-linecap="round" />
        </g>
        <g class="hm-fig__asoma" :style="retrasar(450)">
          <rect x="18.5" y="11" width="11" height="7" rx="2" fill="#FFFFFF" />
          <path class="hidden md:inline" d="M20.5 13.6h5M20.5 15.8h3.4" fill="none" stroke="#2DD4BF" stroke-width="1.2" stroke-linecap="round" />
        </g>
        <g class="hm-fig__asoma" :style="retrasar(600)">
          <rect x="18" y="31.5" width="12" height="2.6" rx="1.3" fill="#0F766E" />
          <path d="M19.5 31.5a4.5 4.5 0 0 1 9 0z" fill="#0D9488" />
        </g>
        <g class="hm-gesto-pulsar" style="--hm-recorrido: 1.6px">
          <g class="hm-fig__cae" :style="retrasar(800)">
            <path class="md:[stroke-width:1.4px]" d="M24 25.6v1.6" fill="none" stroke="#115E59" stroke-width="1.6" stroke-linecap="round" />
            <ellipse cx="24" cy="25.2" rx="2.4" ry="1.3" fill="#F59E0B" />
          </g>
        </g>
      </g>
    </template>

    <!-- los precios por temporada: la franja de la temporada y la etiqueta del precio, que se balancea -->
    <template v-else-if="nombre === 'temporada'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="6" y="11" width="30" height="31" rx="3.5" fill="#0F766E" opacity=".2" />
        <rect x="4" y="9" width="30" height="31" rx="3.5" fill="#FFFFFF" />
        <path d="M7.5 9h23A3.5 3.5 0 0 1 34 12.5V16H4v-3.5A3.5 3.5 0 0 1 7.5 9z" fill="#0D9488" />
        <path class="md:[stroke-width:2.4px]" d="M11 6.5v5M27 6.5v5" fill="none" stroke="#115E59" stroke-width="2.6" stroke-linecap="round" />
        <rect v-for="([x, y], i) in DIAS_TEMPORADA" :key="i" :x="x" :y="y" width="4.4" height="3.6" rx="1" fill="#CCFBF1" />
      </g>
      <rect class="hm-fig__entra" x="7.5" y="25.8" width="23.5" height="4.4" rx="2.2" fill="#2DD4BF" :style="retrasar(400)" />
      <g class="hm-gesto-balancear" style="transform-box: view-box; transform-origin: 34px 11.5px">
        <g class="hm-fig__cae" :style="retrasar(650)">
          <path class="md:[stroke-width:1.4px]" d="M34 11.5L39.6 19.4" fill="none" stroke="#115E59" stroke-width="1.6" stroke-linecap="round" />
          <path d="M37.5 17h5a2 2 0 0 1 2 2v8.2L40 31.8l-4.5-4.6V19a2 2 0 0 1 2-2z" fill="#F59E0B" />
          <circle cx="40" cy="20.6" r="1.3" fill="#FFFFFF" />
          <path class="hidden md:inline" d="M38 25.4h4" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
        </g>
      </g>
    </template>

    <!-- el motor de reservas: la web con el botón de reservar, que se pulsa -->
    <template v-else-if="nombre === 'motor'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="6" y="10" width="40" height="32" rx="4" fill="#0F766E" opacity=".2" />
        <rect x="4" y="8" width="40" height="32" rx="4" fill="#FFFFFF" />
        <path d="M8 8h32a4 4 0 0 1 4 4v3H4v-3a4 4 0 0 1 4-4z" fill="#0D9488" />
        <circle cx="8.5" cy="11.5" r="1.2" fill="#CCFBF1" />
        <circle cx="12.3" cy="11.5" r="1.2" fill="#CCFBF1" />
        <circle cx="16.1" cy="11.5" r="1.2" fill="#CCFBF1" />
        <rect x="20" y="10.2" width="19.5" height="2.6" rx="1.3" fill="#0F766E" />
      </g>
      <g class="hm-fig__asoma" :style="retrasar(400)">
        <rect x="8" y="19" width="14.5" height="6.5" rx="2" fill="#CCFBF1" />
        <path d="M10.5 22.25h3" fill="none" stroke="#0D9488" stroke-width="1.6" stroke-linecap="round" />
      </g>
      <g class="hm-fig__asoma" :style="retrasar(480)">
        <rect x="25.5" y="19" width="14.5" height="6.5" rx="2" fill="#CCFBF1" />
        <path d="M28 22.25h3" fill="none" stroke="#0D9488" stroke-width="1.6" stroke-linecap="round" />
      </g>
      <ellipse class="hm-gesto-onda" cx="24" cy="32.5" rx="17" ry="5" fill="none" stroke="#2DD4BF" stroke-width="1.6" style="animation-delay: 150ms" />
      <g class="hm-gesto-pulsar" style="--hm-recorrido: 1.6px">
        <g class="hm-fig__asoma" :style="retrasar(650)">
          <rect x="8" y="29" width="32" height="7" rx="3.5" fill="#F59E0B" />
          <path d="M19 32.5h10" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" />
        </g>
      </g>
    </template>

    <!-- el Channel Manager: el calendario entre dos flechas que se dan media vuelta -->
    <template v-else-if="nombre === 'channel'">
      <g class="hm-fig__crece" :style="retrasar(100)">
        <rect x="15" y="16" width="22" height="20" rx="3" fill="#0F766E" opacity=".2" />
        <rect x="13" y="14" width="22" height="20" rx="3" fill="#FFFFFF" />
        <path d="M16 14h16a3 3 0 0 1 3 3v2.5H13V17a3 3 0 0 1 3-3z" fill="#0D9488" />
        <rect v-for="([x, y], i) in DIAS_CHANNEL" :key="i" :x="x" :y="y" width="4.4" height="3.6" rx="1" fill="#CCFBF1" />
      </g>
      <rect class="hm-fig__asoma" x="21.5" y="22.3" width="11" height="4" rx="2" fill="#F59E0B" :style="retrasar(900)" />
      <g class="hm-gesto-media-vuelta" style="transform-box: view-box; transform-origin: 24px 24px">
        <path class="hm-fig__linea" pathLength="1" d="M6.15 17.5A19 19 0 0 1 41.85 17.5" fill="none" stroke="#0F766E" stroke-width="2.6" stroke-linecap="round" :style="retrasar(300)" />
        <path class="hm-fig__asoma" d="M42.6 19.6L39.1 16.9L43.6 15.3z" fill="#0F766E" :style="retrasar(800)" />
        <path class="hm-fig__linea" pathLength="1" d="M41.85 30.5A19 19 0 0 1 6.15 30.5" fill="none" stroke="#0F766E" stroke-width="2.6" stroke-linecap="round" :style="retrasar(400)" />
        <path class="hm-fig__asoma" d="M5.4 28.4L8.9 31.1L4.4 32.7z" fill="#0F766E" :style="retrasar(850)" />
      </g>
    </template>

    <!-- el cobro de depósitos: la tarjeta y el escudo con el visto -->
    <template v-else-if="nombre === 'deposito'">
      <g class="hm-gesto-deslizar">
        <g class="hm-fig__entra" :style="retrasar(100)">
          <g transform="rotate(-8 20 23)">
            <rect x="6" y="15" width="32" height="21" rx="3.5" fill="#0F766E" opacity=".2" />
            <rect x="4" y="13" width="32" height="21" rx="3.5" fill="#0D9488" />
            <path d="M4 28h32v2.5a3.5 3.5 0 0 1-3.5 3.5h-25A3.5 3.5 0 0 1 4 30.5z" fill="#0F766E" />
            <rect x="4" y="17.5" width="32" height="4" fill="#115E59" />
            <rect x="8" y="23.5" width="6" height="4.6" rx="1" fill="#CCFBF1" />
            <path d="M17.5 25.8h3M23 25.8h3M28.5 25.8h3" fill="none" stroke="#99F6E4" stroke-width="1.6" stroke-linecap="round" />
          </g>
        </g>
      </g>
      <g class="hm-gesto-titilar" style="animation-delay: 300ms">
        <path class="hm-fig__asoma" d="M37.5 26l7 2.6V34c0 4.6-3 7.8-7 9.4-4-1.6-7-4.8-7-9.4v-5.4z" fill="#F59E0B" :style="retrasar(550)" />
        <path class="hm-fig__linea" pathLength="1" d="M34.3 34.6l2.2 2.2 4.1-4.5" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="retrasar(850)" />
      </g>
    </template>
  </svg>
</template>

<script setup lang="ts">
type Funcion =
  | 'encuesta-hotel' | 'encuesta-rural' | 'encuesta-apartamento' | 'checkin' | 'auto-checkin' | 'varias-casas'
  | 'varios-apartamentos' | 'planning' | 'factura' | 'movil' | 'temporada' | 'motor' | 'channel' | 'deposito'

const props = withDefaults(defineProps<{ nombre: Funcion; retraso?: number }>(), { retraso: 0 })

const ENCUESTAS: Funcion[] = ['encuesta-hotel', 'encuesta-rural', 'encuesta-apartamento']

// las casillas de la hoja de la encuesta, de tres en tres: ocupadas (1) y libres (0)
const OCUPACION = [[1, 1, 0], [1, 1, 1], [0, 1, 1]]

// las ventanas del bloque del emblema de apartamentos y de los tres bloques de varios apartamentos
const VENTANAS_EMBLEMA = [[30.4, 31.5], [34, 31.5], [30.4, 35.5], [34, 35.5]]
const VENTANAS_BAJO = [[7.3, 30], [11.1, 30], [7.3, 35], [11.1, 35]]
const VENTANAS_ALTO = [[20, 12], [24, 12], [20, 17], [24, 17], [20, 22], [24, 22], [20, 27], [24, 27], [20, 32]]
const VENTANAS_MEDIO = [[34.3, 22], [38.1, 22], [34.3, 27], [38.1, 27], [34.3, 32], [38.1, 32]]

// las tres casas del mapa, por la punta del tejado
const CASAS = [
  { x: 10, y: 28.2, pared: '#2DD4BF', tejado: '#0F766E' },
  { x: 24, y: 12.2, pared: '#0D9488', tejado: '#115E59' },
  { x: 38, y: 24.2, pared: '#0D9488', tejado: '#115E59' },
]

// los días de los calendarios de temporada y del Channel Manager
const DIAS_TEMPORADA = [[8, 19.5], [14, 19.5], [20, 19.5], [26, 19.5], [8, 32.5], [14, 32.5], [20, 32.5]]
const DIAS_CHANNEL = [[16, 22.5], [22, 22.5], [28, 22.5], [16, 28], [22, 28], [28, 28]]

// el retraso de cada pieza, más el de su tarjeta
const retrasar = (ms: number) => ({ transitionDelay: `${ms + props.retraso}ms` })
</script>
