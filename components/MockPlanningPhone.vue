<!--
  Maqueta del planning de Hospedy en la vista de movil, dentro de un movil dibujado en CSS
  (MockPhoneFrame). Datos de ejemplo fijos y deterministas (mismo resultado en servidor y en
  cliente), comunes con el portatil (utils/planningEjemplo): diez semanas de reservas alrededor
  de hoy y algun cierre. NO habla con ninguna API.

  Tres alojamientos de ejemplo, uno por perfil (prop "perfil"):
    hotel         30 habitaciones numeradas: las filas no caben y el planning se recorre
                  tambien en vertical
    rural         casa rural de 6 habitaciones con nombre, con el puente del Pilar lleno
    apartamentos  12 apartamentos en dos edificios: como en el panel, cada fila lleva
                  encima el nombre de su alojamiento

  Piel y medidas copiadas del planning real en movil (Calendar.vue del panel, bloques
  max-width:767px): cabecera de dias de 40 px, columna de habitaciones de 80 px con 2 px de
  hueco, dias de 47 px, filas de 38 px + 1 de separacion, barras de 37 px con radio de 10 px,
  titular a 10 px; habitacion a 28 px (a 24 px con el alojamiento encima, a 10 px).

  Todas las medidas se expresan en --p, que vale "1 px del movil" (el movil de referencia
  mide 375 px de ancho). JS solo mide al arrastrar, para pasar pixeles del raton a pixeles
  del movil.

  La rueda vertical NO se captura: quien esta leyendo la pagina sigue bajando. El planning
  se recorre arrastrando en los dos ejes (con el dedo, solo en horizontal: el gesto vertical
  es de la pagina), con rueda horizontal o Mayus+rueda y con las flechas del teclado. Tocar
  una reserva abre su ficha a pantalla completa, como en el movil real.

  Con "estatico" es una foto: sin eventos, sin animacion y sin ficha, para huecos pequennos.
-->
<template>
  <MockPhoneFrame ref="marcoEl" :role="estatico ? 'img' : null" :aria-label="estatico ? descripcion : null">
    <div ref="appEl" class="hm-app" :class="{ 'is-foto': estatico }">
      <div class="hm-app__nav" aria-hidden="true">
        <svg class="hm-app__logo" viewBox="0 0 260 70">
          <g transform="translate(5, 3) scale(1.6)"> <g transform="translate(-45.053681,-99.309918)"> <path fill="#0d9488" d="m 45.148833,121.47429 c 5.64e-4,-2.83541 0.07781,-5.22613 0.180269,-5.57893 0.360693,-1.24204 1.135154,-2.00215 5.113081,-5.01835 5.893415,-4.4686 10.41632,-7.55818 11.080034,-7.9014 0.747892,-0.38675 2.187605,-0.40916 3.151078,-0.14847 0.673851,0.18233 1.63612,0.82421 5.989411,3.99522 0.79077,0.57602 3.10609,2.25817 5.14516,3.73811 3.88641,2.82074 4.95286,3.81488 5.286,4.92757 0.2121,0.70842 0.35122,2.79804 0.19658,2.95268 -0.0499,0.05 -1.67388,0.45369 -3.60872,0.8972 -1.93485,0.44351 -4.32245,1.00131 -5.30578,1.23955 -2.43943,0.59102 -2.35726,0.60697 -2.35726,-0.45754 0,-1.37332 -0.68037,-2.37351 -1.889349,-2.77747 -0.596475,-0.1993 -2.116878,0.0154 -6.577321,0.9289 -1.11566,0.22848 -2.345972,0.46593 -2.734028,0.52766 -2.767535,0.44025 -4.321528,2.11474 -4.321528,4.65661 v 0.67531 0.16985 l -0.160051,0.0323 -1.647935,0.3328 c -0.994392,0.20082 -2.522361,0.54093 -3.395486,0.7558 -0.873125,0.21488 -2.162969,0.53097 -2.86632,0.70242 l -1.278819,0.31174 9.88e-4,-4.96158 z" /> <path fill="#0f766e" d="m 45.148831,130.87964 -9.84e-4,-3.80114 1.278819,-0.30707 c 3.51441,-0.84388 7.41812,-1.641 7.721677,-1.70385 0.122739,-0.0254 0.323083,-0.10914 0.324739,0.0607 0.0043,0.44413 -0.02832,1.50183 0.02338,6.64212 l 0.07237,7.19576 c -1.83558,0.12649 -5.417276,0.0966 -7.662009,0.0831 -0.672714,-0.0531 -1.125354,-0.67035 -1.395617,-1.16882 -0.736383,-2.13633 -0.362845,-4.82516 -0.362375,-7.0008 z m 25.046245,0.12765 v -8.02532 l 3.1309,-0.73844 c 1.72199,-0.40614 4.0834,-0.9685 5.24757,-1.24969 1.16416,-0.28119 2.45029,-0.43857 2.57156,-0.43888 0.17298,-3.5e-4 0.22277,1.4983 0.21973,7.34501 -0.004,6.83135 -0.26823,7.54516 -0.56303,8.19191 -0.47914,1.05108 -1.19686,1.81314 -2.20714,2.34352 -0.8841,0.46413 -0.98178,0.47538 -4.65133,0.53565 l -3.74826,0.0616 z" /> <g fill="#f59e0b"> <path d="m 78.960337,105.05075 c -0.15088,0.0251 -0.22423,0.43692 -0.28799,0.70383 -0.0782,0.32717 -0.3262,0.5858 -0.76125,0.79375 -0.88127,0.42125 -0.90271,0.66893 -0.0936,1.08169 0.49504,0.25255 0.73538,0.51499 0.85564,0.93431 0.23934,0.83451 0.68871,0.84488 1.07485,0.0248 0.21085,-0.44779 0.53694,-0.77593 0.977,-0.98314 0.82806,-0.3899 0.84192,-0.75017 0.0391,-1.01514 -0.44282,-0.14614 -0.72094,-0.40013 -0.96762,-0.88365 -0.40874,-0.80121 -0.46346,-0.71856 -0.83607,-0.65646 z m -4.83946,0.28365 c -0.15154,-0.17337 -0.36557,-0.59613 -0.47562,-0.93947 -0.19531,-0.60935 -0.95375,-1.10191 -1.47598,-1.22782 -0.27887,-0.0672 -0.86406,-0.60873 -0.74754,-0.91237 0.0544,-0.1418 0.49041,-0.42322 0.96887,-0.62536 0.77247,-0.32636 0.91951,-0.47963 1.31238,-1.36798 0.37183,-0.840769 0.50644,-0.991368 0.84337,-0.943554 0.28837,0.04092 0.52073,0.316532 0.82771,0.981774 0.38028,0.82407 0.52446,0.96125 1.32292,1.25869 0.51766,0.19284 0.92127,0.4596 0.95568,0.63165 0.0827,0.4136 -0.41841,0.91662 -1.03624,1.04019 -0.64095,0.12819 -1.05951,0.59316 -1.40973,1.56604 -0.29937,0.8316 -0.66914,1.01489 -1.08582,0.53821 z" /> <path d="m 65.766821,139.59097 c -0.436561,-0.0328 -2.103436,-0.17778 -3.704165,-0.32227 -1.60073,-0.14449 -3.448447,-0.31054 -4.106037,-0.369 l -1.195622,-0.10629 -0.0405,-9.15289 -0.01638,-3.70262 c -0.0261,-5.25515 -0.839499,-4.40523 4.407607,-5.52553 2.573249,-0.56623 4.748327,-0.83765 5.749901,-0.68608 1.110927,0.21914 0.925883,1.73868 0.948195,2.35691 0.0504,1.44744 0.06989,4.00615 0.07106,8.2363 l 0.0026,9.39271 -0.661458,-0.0308 c -0.363802,-0.017 -1.018646,-0.0576 -1.455209,-0.0904 z m 0.399112,-8.18603 c 0.483388,-0.59148 0.561617,-1.18959 0.242986,-1.85776 -0.729033,-1.5288 -3.111541,-0.98307 -3.111541,0.71271 0,0.64295 0.403735,1.29431 0.944915,1.52446 0.575471,0.24474 1.574609,0.0477 1.92364,-0.37941 z" /> </g> </g> </g>
          <text x="75" y="47" font-size="34" font-weight="700" fill="#0D9488">Hospedy</text>
        </svg>
        <span class="hm-app__burger"><i /><i /><i /></span>
      </div>

      <div
        ref="calEl"
        class="hm-cal"
        :class="{ 'is-drag': arrastrando }"
        :tabindex="estatico ? null : 0"
        :role="estatico ? null : 'group'"
        :aria-roledescription="estatico ? null : 'planning de ejemplo'"
        :aria-label="estatico ? null : descripcion + ' Se recorre arrastrando o con las flechas; Intro abre la ficha de una reserva.'"
        v-on="estatico ? {} : manejadores"
      >
        <div class="hm-cal__month" aria-hidden="true"><b>{{ mesVisible.mes }}</b><span>{{ mesVisible.anyo }}</span></div>

        <div class="hm-cal__head" aria-hidden="true">
          <div class="hm-cal__strip" :style="estiloX">
            <div
              v-for="d in dias"
              :key="'d' + d.i"
              class="hm-date"
              :class="{ 'hm-date--we': d.finde, 'hm-date--hoy': d.hoy }"
              :style="{ left: px(d.i * COL) }"
            >
              <b>{{ d.n }}</b><span>{{ d.sem }}</span>
            </div>
          </div>
        </div>

        <div class="hm-cal__rooms" aria-hidden="true">
          <div class="hm-cal__strip" :style="estiloY">
            <div
              v-for="(h, f) in HABS"
              :key="h.id"
              class="hm-room"
              :class="['hm-room--' + h.limpieza, { 'hm-room--first': f === 0, 'hm-room--multi': !!h.acc }]"
            >
              <span v-if="h.acc" class="hm-room__acc">{{ h.acc }}</span>
              <span class="hm-room__n">{{ h.n }}</span>
            </div>
          </div>
        </div>

        <div class="hm-cal__grid" aria-hidden="true">
          <div class="hm-cal__strip hm-cal__plane" :style="[estiloXY, { width: px(DIAS * COL), height: px(HABS.length * FILA) }]">
            <div class="hm-cal__hoy" :style="{ left: px(H * COL) }" />
            <div class="hm-cal__lines" />
            <div
              v-for="b in barrasVisibles"
              :key="b.id"
              class="hm-bar"
              :class="[
                'hm-bar--' + b.e,
                { 'hm-bar--izq': b.cortaIzq, 'hm-bar--der': b.cortaDer, 'is-sib': b.g && b.g === grupoActivo, 'is-open': abierta === b.id },
              ]"
              :style="{ left: px(b.x), top: px(b.y), width: px(b.w) }"
              :data-bar="b.id"
              @mouseenter="grupoActivo = b.g || null"
              @mouseleave="grupoActivo = null"
            >
              <div class="hm-bar__c">
                <span class="hm-bar__owner">{{ b.q }}</span>
                <span v-if="b.r" class="hm-bar__reg">{{ b.r }}</span>
              </div>
              <!-- iconos de la barra: el cierre solo lleva el candado; el resto, el logo de la
                   agencia, pendiente de facturar y cobro, en la tinta de la barra -->
              <span v-if="b.e === 'cierre' || b.ota || b.fact || b.cobro" class="hm-bar__ic">
                <svg v-if="b.e === 'cierre'" viewBox="0 0 448 512"><path :d="CANDADO" /></svg>
                <template v-else>
                  <MockLogoAgencia v-if="b.ota" :agencia="b.ota" class="hm-ota" />
                  <svg v-if="b.fact" viewBox="0 0 24 24"><path :d="FACTURA[0]" /><path :d="FACTURA[1]" /></svg>
                  <svg v-if="b.cobro" class="hm-cobro" viewBox="0 0 24 24">
                    <path v-if="b.cobro === 'parcial'" d="M12,2.5 A9.5,9.5 0 0,0 12,21.5 Z" />
                    <circle cx="12" cy="12" r="9.5" />
                    <text x="12" y="16.5" text-anchor="middle">&euro;</text>
                  </svg>
                </template>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- botones flotantes del planning: buscar, mover reservas y el chat de Hugo -->
      <div class="hm-fabs" aria-hidden="true">
        <span class="hm-fab hm-fab--find">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 21 21" /></svg>
        </span>
        <span class="hm-fab hm-fab--move">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5 15.6 5.3h-2.4v5.5h5.5V8.4L22.5 12l-3.8 3.6v-2.4h-5.5v5.5h2.4L12 22.5l-3.6-3.8h2.4v-5.5H5.3v2.4L1.5 12l3.8-3.6v2.4h5.5V5.3H8.4z" /></svg>
        </span>
        <span class="hm-fab hm-fab--chat">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.2 1.1 4.2 2.9 5.6-.2 1.6-1 3.1-2.2 4.1 2.2-.1 4.2-.9 5.6-2.1 1.2.4 2.4.5 3.7.5 5.5 0 10-3.6 10-8S17.5 3 12 3Z" /><circle cx="7.8" cy="11" r="1.4" fill="#f59e0b" /><circle cx="12" cy="11" r="1.4" fill="#f59e0b" /><circle cx="16.2" cy="11" r="1.4" fill="#f59e0b" /></svg>
        </span>
      </div>

      <span class="hm-tag" aria-hidden="true">Datos de ejemplo</span>

      <!-- ficha de la reserva a pantalla completa, como en el movil real -->
      <div
        v-if="!estatico"
        class="hm-modal"
        :data-open="ficha ? 'true' : 'false'"
        :inert="!ficha"
        role="dialog"
        aria-modal="true"
        aria-label="Ficha de la reserva"
        @click.self="cerrar()"
        @keydown.esc.stop="cerrar()"
      >
        <div ref="cardEl" class="hm-card" tabindex="-1">
          <template v-if="ficha">
            <!-- un cierre abre su propia ficha, como en el panel: que esta cerrado, cuando y por que -->
            <template v-if="ficha.cierre">
              <div class="hm-card__head">
                <button ref="xEl" type="button" class="hm-card__x" aria-label="Cerrar la ficha" @click="cerrar()">&#10005;</button>
                <p class="hm-card__title">
                  <svg class="hm-card__lock" viewBox="0 0 448 512" aria-hidden="true"><path :d="CANDADO" /></svg>Cierre de habitación
                </p>
              </div>
              <div class="hm-card__body">
                <div class="hm-rayas" aria-hidden="true" />
                <div class="hm-pair">
                  <div>
                    <p class="hm-lbl">{{ ficha.etiqHab }}</p>
                    <p class="hm-val">{{ ficha.hab }}</p>
                  </div>
                  <div>
                    <p class="hm-lbl">Noches cerradas</p>
                    <p class="hm-val">{{ ficha.noches }}</p>
                  </div>
                </div>
                <div class="hm-pair">
                  <div>
                    <p class="hm-lbl">Desde (primera noche)</p>
                    <p class="hm-val">{{ ficha.entrada }}</p>
                  </div>
                  <div>
                    <p class="hm-lbl">Hasta (última noche)</p>
                    <p class="hm-val">{{ ficha.ultima }}</p>
                  </div>
                </div>
                <p class="hm-lbl">Motivo / notas</p>
                <p class="hm-motivo">{{ ficha.motivo }}</p>
                <span class="hm-wbtn" aria-hidden="true">Reabrir habitación</span>
                <span class="hm-wbtn hm-wbtn--gris" aria-hidden="true">Convertir en reserva normal</span>

                <div class="hm-cta">
                  <p>&iquest;Te gusta este calendario? <b>El que usarás es mucho mejor.</b> &iquest;Te animas a probarlo?</p>
                  <span class="hm-btn" aria-hidden="true">Probar gratis</span>
                </div>
              </div>
            </template>

            <template v-else>
              <div class="hm-card__head">
                <button ref="xEl" type="button" class="hm-card__x" aria-label="Cerrar la ficha" @click="cerrar()">&#10005;</button>
                <p class="hm-card__title">Reserva {{ ficha.num }}</p>
                <div class="hm-card__btns" aria-hidden="true">
                  <span class="hm-mb hm-mb--del">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 2.5h6l1 1.5h4.5v2.5h-17V4H8zM5 8h14l-1.1 12.3A2 2 0 0 1 15.9 22H8.1a2 2 0 0 1-2-1.7z" /></svg>
                    Eliminar
                  </span>
                  <span class="hm-mb hm-mb--save">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h13l4 4v12.5A1.5 1.5 0 0 1 19.5 21h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3zm2 2v5h10V5zm6 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></svg>
                    Guardar
                  </span>
                </div>
              </div>

              <div class="hm-card__body">
                <p class="hm-lbl">Noches</p>
                <div class="hm-step" aria-hidden="true"><i>&minus;</i><b>{{ ficha.noches }}</b><i>+</i></div>

                <p class="hm-lbl">Check-In</p>
                <div class="hm-dt"><span>{{ ficha.entrada }}</span><i aria-hidden="true" /></div>

                <p class="hm-lbl">Check-Out</p>
                <div class="hm-dt"><span>{{ ficha.salida }}</span><i aria-hidden="true" /></div>

                <div class="hm-pair">
                  <div>
                    <p class="hm-lbl">{{ ficha.etiqHab }}</p>
                    <p class="hm-val">{{ ficha.hab }}</p>
                  </div>
                  <div>
                    <p class="hm-lbl">Titular</p>
                    <p class="hm-val">{{ ficha.titular }}</p>
                  </div>
                </div>

                <hr class="hm-sep" />
                <p class="hm-h">Gestionar reserva</p>

                <p class="hm-lbl">Auto check-in</p>
                <span class="hm-wbtn hm-wbtn--light" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 2.5 2.8 10.2c-.8.3-.7 1.4.1 1.6l6.3 1.8 1.9 6.4c.2.8 1.3.9 1.6.1z" /></svg>
                  Gestionar {{ ficha.pre }}
                </span>

                <p class="hm-lbl">Resumen de la reserva</p>
                <span class="hm-wbtn" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.6 2 7.4 5.4L19.4 7zm15.4 1.6-7.4 5.4a1 1 0 0 1-1.2 0L4 8.6V17h16z" /></svg>
                  Enviar
                </span>

                <div class="hm-ses" :class="{ 'hm-ses--pend': !ficha.parteHecho }">
                  <i v-if="ficha.parteHecho" aria-hidden="true">&#10003;</i>
                  <i v-else aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
                  </i>
                  <span>{{ ficha.parte }}</span>
                </div>

                <div class="hm-cta">
                  <p>&iquest;Te gusta este calendario? <b>El que usarás es mucho mejor.</b> &iquest;Te animas a probarlo?</p>
                  <!-- Decorativo a proposito, igual que en la maqueta del portatil: el destino
                       esta sin decidir. Cuando se decida, pasa a <NuxtLink> sin aria-hidden. -->
                  <span class="hm-btn" aria-hidden="true">Probar gratis</span>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </MockPhoneFrame>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { DIAS, DIAS_PLANNING, HOY, fecha, mesDe, planningEjemplo } from "~/utils/planningEjemplo";

const props = defineProps({
  /* hotel, rural o apartamentos: cambia el alojamiento de ejemplo */
  perfil: {
    type: String,
    default: "hotel",
    validator: (v) => ["hotel", "rural", "apartamentos"].includes(v),
  },
  /* foto sin interaccion ni animacion */
  estatico: { type: Boolean, default: false },
});

/* ---- Medidas del planning real en movil, en px del movil de 375 ---- */
const ANCHO = 375; /* ancho del movil de referencia */
const ALTO_APP = 782; /* alto de la app bajo la barra de estado (pantalla de 812) */
const NAV = 52; /* barra superior del panel */
const CAB = 40; /* cabecera de dias */
const COL_HAB = 80; /* columna de habitaciones */
const HUECO = 2; /* margen a la derecha de la columna */
const COL = 47; /* ancho de un dia */
const FILA = 39; /* 38 de habitacion + 1 de separacion */

/* los datos de ejemplo (utils/planningEjemplo), comunes con el portatil: diez semanas
   alrededor de hoy, con reservas pasadas, en curso, proximas y lejanas y algun cierre */
const H = HOY;
const VISIBLE_X = ANCHO - COL_HAB - HUECO;
const VISIBLE_Y = ALTO_APP - NAV - CAB;
const MAX_X = DIAS * COL - VISIBLE_X;

const PERFILES = {
  hotel: {
    descripcion: "Planning de ejemplo de un hotel de 30 habitaciones en la vista de móvil.",
    unidad: ["Habitación", "Habitaciones"],
  },
  rural: {
    descripcion: "Planning de ejemplo de una casa rural de 6 habitaciones en la vista de móvil, con la casa entera reservada para el puente.",
    unidad: ["Habitación", "Habitaciones"],
  },
  apartamentos: {
    descripcion: "Planning de ejemplo de 12 apartamentos turísticos en dos edificios, en la vista de móvil.",
    unidad: ["Apartamento", "Apartamentos"],
  },
};

const PERFIL = PERFILES[props.perfil] || PERFILES.hotel;
const descripcion = PERFIL.descripcion;
const { habs: HABS_BASE, reservas: RESERVAS } = planningEjemplo(props.perfil);
const HABS = HABS_BASE.map((h) => ({ ...h, id: (h.acc || "") + "-" + h.n }));
const MAX_Y = Math.max(0, HABS.length * FILA - VISIBLE_Y + 8);

/* iconos del panel: candado del cierre y documento de "pendiente de facturar" (los logos de
   agencia van en MockLogoAgencia) */
const CANDADO =
  "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z";
const FACTURA = [
  "M19.07,7,15.18,3A3.08,3.08,0,0,0,13,2H7.15A3.22,3.22,0,0,0,4,5.28V18.72A3.22,3.22,0,0,0,7.15,22h9.7A3.22,3.22,0,0,0,20,18.72V9.34A3.33,3.33,0,0,0,19.07,7ZM5.54,18.72V5.28A1.65,1.65,0,0,1,7.15,3.6H13a1.56,1.56,0,0,1,1.13.5L18,8.15a1.68,1.68,0,0,1,.48,1.19v9.38a1.66,1.66,0,0,1-1.61,1.68H7.15A1.65,1.65,0,0,1,5.54,18.72Z",
  "M12.81,4.86V8.64a.83.83,0,0,0,.81.84h3.63Z",
];

/* c = dia de entrada (negativo si empezo antes del primer dia), s = noches */
const barras = RESERVAS.map((r, i) => {
  const a = Math.max(0, r.c);
  const b = Math.min(DIAS, r.c + r.s);
  return {
    ...r,
    id: i,
    x: a * COL + 1,
    y: r.f * FILA + 1,
    w: (b - a) * COL - 1,
    cortaIzq: r.c < 0,
    cortaDer: r.c + r.s > DIAS,
  };
}).filter((b) => b.w > 0);

const dias = DIAS_PLANNING;

function px(n) {
  return "calc(var(--p) * " + n + ")";
}

const marcoEl = ref(null);
const appEl = ref(null);
const calEl = ref(null);
const xEl = ref(null);
const cardEl = ref(null);

/* al abrir, hoy queda en la cuarta columna, como en el movil real */
const offX = ref((H - 3) * COL);
const offY = ref(0);
const arrastrando = ref(false);
const grupoActivo = ref(null);
const abierta = ref(null);
const ficha = ref(null);

const estiloX = computed(() => ({ transform: "translate3d(" + px(-offX.value) + ",0,0)" }));
const estiloY = computed(() => ({ transform: "translate3d(0," + px(-offY.value) + ",0)" }));
const estiloXY = computed(() => ({ transform: "translate3d(" + px(-offX.value) + "," + px(-offY.value) + ",0)" }));

/* solo se pintan las barras que caen cerca de la vista: el hotel tiene cientos */
const barrasVisibles = computed(() => {
  const x0 = offX.value - 3 * COL;
  const x1 = offX.value + VISIBLE_X + 3 * COL;
  const y0 = offY.value - 4 * FILA;
  const y1 = offY.value + VISIBLE_Y + 4 * FILA;
  return barras.filter((b) => b.x + b.w > x0 && b.x < x1 && b.y + FILA > y0 && b.y < y1);
});

/* el mes del rotulo: el del dia que se ve en el centro, como en el panel */
const mesVisible = computed(() => mesDe(Math.floor((offX.value + VISIBLE_X / 2) / COL)));

function limitar(v, max) {
  return Math.max(0, Math.min(max, v));
}

function escala() {
  const w = appEl.value ? appEl.value.clientWidth : 0;
  return w > 0 ? w / ANCHO : 1;
}

/* --- vistazo inicial: al aparecer, el planning baja unas filas y vuelve, para que se
   vea que hay mas habitaciones que pantalla; si todas caben, avanza unos dias y vuelve.
   Una sola vez y nunca con movimiento reducido --- */
let tocado = false;
let animacion = 0;

function parar() {
  tocado = true;
  if (animacion) cancelAnimationFrame(animacion);
  animacion = 0;
}

function animar(eje, hasta, ms, luego) {
  const valor = eje === "x" ? offX : offY;
  const desde = valor.value;
  const t0 = performance.now();
  const paso = (t) => {
    if (tocado) return;
    const k = Math.min(1, (t - t0) / ms);
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    valor.value = desde + (hasta - desde) * e;
    if (k < 1) animacion = requestAnimationFrame(paso);
    else if (luego) luego();
  };
  animacion = requestAnimationFrame(paso);
}

function vistazo() {
  if (tocado) return;
  const eje = MAX_Y > 0 ? "y" : "x";
  const ida = eje === "y" ? Math.min(MAX_Y, 7 * FILA) : Math.min(MAX_X, offX.value + 5 * COL);
  const vuelta = eje === "y" ? 0 : offX.value;
  animar(eje, ida, 1700, () => {
    setTimeout(() => {
      if (!tocado) animar(eje, vuelta, 1200);
    }, 500);
  });
}

/* --- arrastre --- */
let pulsado = null;

function alPulsar(e) {
  if (e.button !== undefined && e.button !== 0) return;
  if (ficha.value) return;
  parar();
  if (e.pointerType === "mouse") e.preventDefault(); /* sin esto, arrastrar selecciona texto */
  pulsado = { id: e.pointerId, x: e.clientX, y: e.clientY, ox: offX.value, oy: offY.value, k: escala(), tipo: e.pointerType, movido: false };
}

function alMover(e) {
  if (!pulsado || e.pointerId !== pulsado.id) return;
  const dx = e.clientX - pulsado.x;
  const dy = e.clientY - pulsado.y;
  if (!pulsado.movido) {
    if (Math.hypot(dx, dy) < 5) return;
    pulsado.movido = true;
    arrastrando.value = true;
    try {
      calEl.value.setPointerCapture(e.pointerId);
    } catch (err) {
      /* sin captura el arrastre sigue funcionando dentro del movil */
    }
  }
  offX.value = limitar(pulsado.ox - dx / pulsado.k, MAX_X);
  /* con el dedo, el gesto vertical es de la pagina: aqui solo se mueven los dias */
  if (pulsado.tipo !== "touch") offY.value = limitar(pulsado.oy - dy / pulsado.k, MAX_Y);
}

function alSoltar(e) {
  if (!pulsado || e.pointerId !== pulsado.id) return;
  const movido = pulsado.movido;
  pulsado = null;
  arrastrando.value = false;
  if (movido) return;
  const el = e.target && e.target.closest ? e.target.closest("[data-bar]") : null;
  if (el) abrir(Number(el.dataset.bar));
}

function alCancelar() {
  pulsado = null;
  arrastrando.value = false;
}

/* la rueda vertical se deja a la pagina; solo horizontal o con Mayus */
function alRodar(e) {
  const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
  if (!dx || ficha.value) return;
  e.preventDefault();
  parar();
  offX.value = limitar(offX.value + dx / escala(), MAX_X);
}

const TECLAS = {
  ArrowLeft: [-COL, 0],
  ArrowRight: [COL, 0],
  ArrowUp: [0, -FILA],
  ArrowDown: [0, FILA],
  PageUp: [0, -8 * FILA],
  PageDown: [0, 8 * FILA],
  Home: [-MAX_X, 0],
  End: [MAX_X, 0],
};

function alTeclear(e) {
  if (ficha.value) return;
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    abrirVisible(true);
    return;
  }
  const p = TECLAS[e.key];
  if (!p) return;
  e.preventDefault();
  parar();
  offX.value = limitar(offX.value + p[0], MAX_X);
  offY.value = limitar(offY.value + p[1], MAX_Y);
}

const manejadores = {
  pointerdown: alPulsar,
  pointermove: alMover,
  pointerup: alSoltar,
  pointercancel: alCancelar,
  wheel: alRodar,
  keydown: alTeclear,
};

/* con el teclado se abre la primera reserva "en casa" que se vea entera */
function abrirVisible(teclado) {
  const vista = (b) => b.x >= offX.value && b.x + b.w <= offX.value + VISIBLE_X && b.y >= offY.value && b.y + FILA <= offY.value + VISIBLE_Y;
  const b = barras.find((x) => x.e === "in" && vista(x)) || barras.find(vista);
  if (b) abrir(b.id, teclado);
}

/* --- ficha --- */
function nombreHab(f) {
  const h = HABS[f];
  return h.acc ? h.acc + " " + h.n : h.n;
}

function abrir(id, teclado) {
  const b = barras.find((x) => x.id === id);
  if (!b) return;
  parar();
  const hermanas = b.g ? barras.filter((x) => x.g === b.g) : [b];
  const hechos =
    b.hechos !== undefined ? b.hechos : b.e === "in" || b.e === "past" ? b.pax : b.e === "pre" ? Math.max(0, b.pax - 1) : 0;
  const hecho = b.e === "in" || b.e === "past";
  abierta.value = b.id;
  ficha.value = {
    cierre: b.e === "cierre",
    num: 4100 + b.id * 7,
    noches: b.s,
    entrada: fecha(b.c),
    salida: fecha(b.c + b.s),
    ultima: fecha(b.c + b.s - 1),
    etiqHab: PERFIL.unidad[hermanas.length > 1 ? 1 : 0],
    hab: hermanas.map((x) => nombreHab(x.f)).join(" + "),
    titular: b.q,
    motivo: b.motivo || "",
    pre: hechos + "/" + b.pax,
    parteHecho: hecho,
    parte: hecho ? "Parte de viajeros enviado · SES Hospedajes" : "El parte sale solo al hacer el check-in",
  };
  nextTick(() => {
    const destino = teclado ? xEl.value : cardEl.value;
    if (destino) destino.focus({ preventScroll: true });
  });
}

function cerrar() {
  if (!ficha.value) return;
  ficha.value = null;
  abierta.value = null;
  if (calEl.value) calEl.value.focus({ preventScroll: true });
}

let io = null;

onMounted(() => {
  if (props.estatico) return;
  const reducido = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducido || !("IntersectionObserver" in window)) return;
  const raiz = marcoEl.value && marcoEl.value.$el;
  if (!raiz) return;
  io = new IntersectionObserver(
    (entradas) => {
      if (entradas.some((x) => x.isIntersecting)) {
        io.disconnect();
        io = null;
        setTimeout(vistazo, 350);
      }
    },
    { threshold: 0.6 }
  );
  io.observe(raiz);
});

onBeforeUnmount(() => {
  if (io) io.disconnect();
  parar();
});
</script>

<style scoped>
/* ============ App (el movil lo pone MockPhoneFrame) ============ */
.hm-app {
  /* tokens del planning real (src/App.vue del panel), renombrados */
  --hm-day: #14716a;
  --hm-day-we: #164b47;
  --hm-today-bg: #e4ecea;
  --hm-today-fg: #164b47;
  --hm-today-cell: #edf3f1;
  --hm-line: rgba(216, 216, 216, 0.32);
  --hm-navy: #1a1a2e;
  position: relative;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  color: #212529;
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
.hm-app__nav {
  flex: 0 0 auto;
  height: calc(52 * var(--p));
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 calc(16 * var(--p));
  background: #fff;
}
.hm-app__logo {
  height: calc(40 * var(--p));
  width: calc(149 * var(--p));
  display: block;
  font-family: "Nunito Variable", Nunito, system-ui, sans-serif;
}
.hm-app__burger {
  display: flex;
  flex-direction: column;
  gap: calc(5 * var(--p));
  margin-right: calc(4 * var(--p));
}
.hm-app__burger i {
  display: block;
  width: calc(22 * var(--p));
  height: calc(3 * var(--p));
  border-radius: calc(2 * var(--p));
  background: var(--hm-day);
}

/* ============ Planning ============ */
.hm-cal {
  position: relative;
  flex: 1 1 auto;
  overflow: hidden;
  cursor: grab;
  touch-action: pan-y;
  outline: none;
}
.hm-cal.is-drag {
  cursor: grabbing;
}
/* version foto: sin interaccion */
.hm-app.is-foto,
.hm-app.is-foto .hm-cal,
.hm-app.is-foto .hm-bar {
  cursor: default;
  pointer-events: none;
}
.hm-cal:focus-visible {
  box-shadow: inset 0 0 0 2px var(--hm-day);
}
.hm-cal__strip {
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
}

.hm-cal__month {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  width: calc(80 * var(--p));
  height: calc(40 * var(--p));
  background: var(--hm-day);
  color: #fff;
  font-weight: 600;
  border-radius: 0 0 calc(10 * var(--p)) 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.hm-cal__month b {
  font-size: calc(16 * var(--p));
  font-weight: 600;
  line-height: 1;
}
.hm-cal__month span {
  font-size: calc(11 * var(--p));
  margin-top: calc(-1 * var(--p));
  line-height: 1.5;
}

.hm-cal__head {
  position: absolute;
  left: calc(82 * var(--p));
  right: 0;
  top: 0;
  height: calc(40 * var(--p));
  overflow: hidden;
  z-index: 4;
  background: #fff;
}
.hm-date {
  position: absolute;
  top: 0;
  width: calc(47 * var(--p));
  height: calc(40 * var(--p));
  background: var(--hm-day);
  color: #fff;
  border-radius: 0 0 calc(6 * var(--p)) calc(6 * var(--p));
  text-align: center;
  box-sizing: border-box;
}
.hm-date b {
  display: block;
  font-size: calc(20 * var(--p));
  font-weight: 400;
  line-height: calc(30 * var(--p));
  font-variant-numeric: tabular-nums;
}
.hm-date span {
  display: block;
  font-size: calc(12 * var(--p));
  line-height: calc(18 * var(--p));
  margin-top: calc(-8 * var(--p));
}
.hm-date--we {
  background: var(--hm-day-we);
}
.hm-date--hoy {
  background: var(--hm-today-bg);
  color: var(--hm-today-fg);
  border: 1px solid var(--hm-day);
  border-top: 0;
}

.hm-cal__rooms {
  position: absolute;
  left: 0;
  top: calc(40 * var(--p));
  bottom: 0;
  width: calc(80 * var(--p));
  overflow: hidden;
  z-index: 4;
  background: #fff;
}
.hm-cal__rooms .hm-cal__strip {
  right: 0;
}
.hm-room {
  height: calc(38 * var(--p));
  margin-bottom: calc(1 * var(--p));
  padding: calc(2 * var(--p)) calc(5 * var(--p));
  border: 1px solid currentColor;
  border-radius: 0 calc(10 * var(--p)) calc(10 * var(--p)) 0;
  box-sizing: border-box;
  overflow: hidden;
  text-align: right;
}
.hm-room--first {
  border-top-left-radius: calc(10 * var(--p));
}
/* un solo alojamiento: el numero solo, a 28px (.room-number-only del panel) */
.hm-room__n {
  display: block;
  font-size: calc(28 * var(--p));
  font-weight: 400;
  line-height: 1.5;
  margin-top: calc(-8 * var(--p));
  white-space: nowrap;
}
/* varios alojamientos: el nombre del alojamiento encima, a 10px, y el numero a 24px
   (.accomodation y .room-number del panel) */
.hm-room__acc {
  display: block;
  font-size: calc(10 * var(--p));
  font-weight: 600;
  line-height: 1.5;
  padding-right: calc(5 * var(--p));
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hm-room--multi .hm-room__n {
  font-size: calc(24 * var(--p));
}
.hm-room--limpia {
  background: #e4ecea;
  color: #164b47;
}
.hm-room--media {
  background: #f2e3bf;
  color: #7c4a02;
}
.hm-room--sucia {
  background: #f3d6d4;
  color: #8c1515;
}

.hm-cal__grid {
  position: absolute;
  left: calc(82 * var(--p));
  right: 0;
  top: calc(40 * var(--p));
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}
/* el ancho y el alto del plano van en linea: dependen de los dias y de las habitaciones */
.hm-cal__hoy {
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc(47 * var(--p));
  background: var(--hm-today-cell);
}
/* cada celda del panel lleva su borde de 1px por los cuatro lados: entre dos celdas
   quedan dos lineas juntas */
.hm-cal__lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, var(--hm-line) 1px, transparent 1px, transparent calc(100% - 1px), var(--hm-line) calc(100% - 1px)),
    linear-gradient(to bottom, var(--hm-line) 1px, transparent 1px, transparent calc(100% - 1px), var(--hm-line) calc(100% - 1px));
  background-size: calc(47 * var(--p)) calc(39 * var(--p));
}

/* barras absolutas sobre la rejilla, como en el producto */
.hm-bar {
  position: absolute;
  height: calc(37 * var(--p));
  border-radius: calc(10 * var(--p));
  padding: 0 calc(2 * var(--p));
  box-sizing: border-box;
  overflow: hidden;
  font-size: calc(14 * var(--p));
  line-height: calc(21 * var(--p));
  text-transform: capitalize;
  cursor: pointer;
  /* la futura, en azul acero: la que aun no ha llegado */
  background: #2f5d8c;
  color: #fff;
  transition: filter 0.12s ease, box-shadow 0.12s ease;
}
.hm-cal.is-drag .hm-bar {
  cursor: grabbing;
}
/* los brillos siguen a la claridad de la barra, como en el panel */
.hm-bar:hover,
.hm-bar.is-sib {
  filter: brightness(1.15);
}
.hm-bar--future:hover,
.hm-bar--future.is-sib {
  filter: brightness(1.25);
}
.hm-bar.is-open {
  box-shadow: 0 0 0 2px var(--hm-day);
}
.hm-bar--izq {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.hm-bar--der {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.hm-bar--past {
  background: #b5bfce;
  color: #0b0e12;
}
.hm-bar--pre {
  background: #ebb04e;
  color: #1a1a2e;
}
/* "en casa", en Bright Teal: el huesped que esta dentro se lleva el color vivo */
.hm-bar--in {
  background: #14b8a6;
  color: #042b26;
}
.hm-bar--in:hover,
.hm-bar--in.is-sib {
  filter: brightness(1.1);
}
/* cierre de habitacion: gris azulado con rayas blancas, texto y candado en negro */
.hm-bar--cierre {
  background:
    repeating-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.65) 0,
      rgba(255, 255, 255, 0.65) calc(4 * var(--p)),
      rgba(255, 255, 255, 0) calc(4 * var(--p)),
      rgba(255, 255, 255, 0) calc(10 * var(--p))
    ),
    #a0a9bc;
  color: #000;
}
/* el titular se recorta en seco, sin puntos suspensivos, como en el movil real */
.hm-bar__c {
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
}
.hm-bar__owner {
  font-size: calc(10 * var(--p));
  font-weight: 600;
  line-height: 1.2;
}
.hm-bar__reg {
  font-size: calc(8 * var(--p));
  margin-left: calc(2 * var(--p));
}
/* iconos abajo a la derecha, como .bar-icons del panel */
.hm-bar__ic {
  position: absolute;
  bottom: calc(2 * var(--p));
  right: calc(4 * var(--p));
  display: flex;
  gap: calc(2 * var(--p));
  opacity: 0.85;
}
/* tinta de los iconos: navy sobre las barras claras, blanco sobre la futura, negro en el cierre */
.hm-bar__ic {
  color: var(--hm-navy);
}
.hm-bar--future .hm-bar__ic {
  color: #fff;
}
.hm-bar--cierre .hm-bar__ic {
  color: #000;
}
.hm-bar__ic svg {
  width: calc(10 * var(--p));
  height: calc(10 * var(--p));
  display: block;
  fill: currentColor;
}
.hm-bar__ic .hm-ota {
  border-radius: calc(2 * var(--p));
}
.hm-cobro circle {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
}
.hm-cobro text {
  font-size: 12px;
  font-weight: 700;
  fill: none;
  stroke: currentColor;
  stroke-width: 1;
  paint-order: stroke;
}

/* ============ Flotantes ============ */
.hm-fabs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 6;
}
.hm-fab {
  position: absolute;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 calc(3 * var(--p)) calc(8 * var(--p)) rgba(6, 30, 28, 0.28);
}
/* buscar y mover, en el teal primario; Hugo, en el ambar de marca con tinta navy */
.hm-fab--find,
.hm-fab--move {
  width: calc(40 * var(--p));
  height: calc(40 * var(--p));
  bottom: calc(25 * var(--p));
  background: #0f766e;
}
.hm-fab--find {
  right: calc(154 * var(--p));
}
.hm-fab--move {
  right: calc(96 * var(--p));
}
.hm-fab--chat {
  width: calc(56 * var(--p));
  height: calc(56 * var(--p));
  right: calc(22 * var(--p));
  bottom: calc(22 * var(--p));
  background: #f59e0b;
  color: var(--hm-navy);
}
.hm-fab svg {
  width: 46%;
  height: 46%;
  display: block;
}
.hm-fab--chat svg {
  width: 44%;
  height: 44%;
}

.hm-tag {
  position: absolute;
  left: calc(8 * var(--p));
  bottom: calc(10 * var(--p));
  z-index: 6;
  font-size: calc(11 * var(--p));
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #6b7876;
  background: rgba(255, 255, 255, 0.9);
  padding: calc(2 * var(--p)) calc(7 * var(--p));
  border-radius: calc(5 * var(--p));
  pointer-events: none;
}

/* ============ Ficha a pantalla completa ============ */
.hm-modal {
  position: absolute;
  inset: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.16s ease;
}
.hm-modal[data-open="true"] {
  opacity: 1;
  pointer-events: auto;
}
.hm-card {
  outline: none;
  position: absolute;
  left: calc(9 * var(--p));
  right: calc(9 * var(--p));
  top: calc(9 * var(--p));
  bottom: 0;
  background: #fff;
  border-radius: calc(6 * var(--p)) calc(6 * var(--p)) 0 0;
  overflow: hidden;
  transform: translateY(6%);
  transition: transform 0.2s ease;
}
.hm-modal[data-open="true"] .hm-card {
  transform: none;
}
.hm-card__head {
  position: relative;
  padding: calc(14 * var(--p)) calc(16 * var(--p)) calc(12 * var(--p));
  border-bottom: 1px solid #dee2e6;
  text-align: center;
}
.hm-card__x {
  position: absolute;
  top: calc(12 * var(--p));
  left: calc(14 * var(--p));
  font: inherit;
  font-size: calc(19 * var(--p));
  font-weight: 800;
  line-height: 1;
  color: #858c93;
  background: none;
  border: 0;
  padding: calc(4 * var(--p));
  cursor: pointer;
}
.hm-card__x:hover {
  color: #1f2c2a;
}
.hm-card__x:focus-visible {
  outline: 2px solid var(--hm-day);
  outline-offset: 1px;
}
.hm-card__title {
  margin: 0 0 calc(8 * var(--p));
  font-size: calc(24 * var(--p));
  font-weight: 500;
  line-height: 1.2;
  color: #1a1a2e;
}
.hm-card__btns {
  display: flex;
  justify-content: center;
  gap: calc(5 * var(--p));
}
.hm-mb {
  display: inline-flex;
  align-items: center;
  gap: calc(6 * var(--p));
  font-size: calc(15 * var(--p));
  font-weight: 600;
  line-height: 1;
  padding: calc(10 * var(--p)) calc(12 * var(--p));
  border-radius: calc(5 * var(--p));
  border: 1px solid transparent;
}
.hm-mb svg {
  width: calc(14 * var(--p));
  height: calc(14 * var(--p));
}
.hm-mb--del {
  background: #bc475e;
  color: #fff;
}
.hm-mb--save {
  background: #fff;
  color: var(--hm-day);
  border-color: var(--hm-day);
}
.hm-card__body {
  padding: calc(12 * var(--p)) calc(16 * var(--p));
}
.hm-lbl {
  margin: 0 0 calc(4 * var(--p));
  font-size: calc(15 * var(--p));
  line-height: 1.35;
  color: var(--hm-day);
}
.hm-val {
  margin: 0 0 calc(9 * var(--p));
  font-size: calc(15 * var(--p));
  line-height: 1.35;
  color: #212529;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hm-step {
  display: inline-flex;
  margin-bottom: calc(10 * var(--p));
}
.hm-step i,
.hm-dt i {
  background: var(--hm-day);
  color: #fff;
  font-style: normal;
  font-weight: 800;
  font-size: calc(18 * var(--p));
  width: calc(42 * var(--p));
  height: calc(38 * var(--p));
  display: flex;
  align-items: center;
  justify-content: center;
}
.hm-step i:first-child {
  border-radius: calc(6 * var(--p)) 0 0 calc(6 * var(--p));
}
.hm-step i:last-child {
  border-radius: 0 calc(6 * var(--p)) calc(6 * var(--p)) 0;
}
.hm-step b {
  width: calc(46 * var(--p));
  height: calc(38 * var(--p));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(16 * var(--p));
  font-weight: 400;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
}
.hm-dt {
  display: flex;
  width: 78%;
  margin-bottom: calc(10 * var(--p));
  box-shadow: 0 calc(6 * var(--p)) calc(8 * var(--p)) calc(-6 * var(--p)) rgba(0, 0, 0, 0.18);
  border-radius: calc(6 * var(--p));
}
.hm-dt span {
  flex: 1 1 auto;
  height: calc(38 * var(--p));
  display: flex;
  align-items: center;
  padding: 0 calc(9 * var(--p));
  font-size: calc(16 * var(--p));
  border: 1px solid var(--hm-day);
  border-right: 0;
  border-radius: calc(6 * var(--p)) 0 0 calc(6 * var(--p));
}
.hm-dt i {
  border-radius: 0 calc(6 * var(--p)) calc(6 * var(--p)) 0;
  position: relative;
}
.hm-dt i::after {
  content: "";
  width: calc(14 * var(--p));
  height: calc(14 * var(--p));
  border: calc(2 * var(--p)) solid #fff;
  border-radius: calc(2 * var(--p));
  box-sizing: border-box;
}
.hm-pair {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: calc(10 * var(--p));
}
.hm-pair > div {
  min-width: 0;
}
.hm-sep {
  border: 0;
  border-top: calc(2 * var(--p)) solid #dee2e6;
  margin: calc(4 * var(--p)) 0 calc(10 * var(--p));
}
.hm-h {
  margin: 0 0 calc(6 * var(--p));
  font-size: calc(17 * var(--p));
  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #1a1a2e;
}
.hm-wbtn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(7 * var(--p));
  height: calc(38 * var(--p));
  border-radius: calc(6 * var(--p));
  background: var(--hm-day);
  color: #fff;
  font-size: calc(15 * var(--p));
  font-weight: 700;
  margin-bottom: calc(10 * var(--p));
}
.hm-wbtn svg {
  width: calc(15 * var(--p));
  height: calc(15 * var(--p));
}
.hm-wbtn--light {
  background: #14b8a6;
  color: #042b26;
}
.hm-wbtn--gris {
  background: #e7ecec;
  color: #334744;
}
/* la ficha del cierre: candado en el titulo, franja rayada y el motivo */
.hm-card__lock {
  display: inline-block;
  width: calc(14 * var(--p));
  height: calc(16 * var(--p));
  margin-right: calc(6 * var(--p));
  vertical-align: calc(-2 * var(--p));
  fill: currentColor;
}
.hm-rayas {
  height: calc(10 * var(--p));
  border-radius: calc(5 * var(--p));
  margin-bottom: calc(14 * var(--p));
  background: repeating-linear-gradient(135deg, #0f766e 0, #0f766e calc(12 * var(--p)), #c0392b calc(12 * var(--p)), #c0392b calc(18 * var(--p)));
}
.hm-motivo {
  margin: 0 0 calc(14 * var(--p));
  padding: calc(8 * var(--p)) calc(10 * var(--p));
  border: 1px solid #e2e8f0;
  border-radius: calc(8 * var(--p));
  background: #f7fafc;
  font-size: calc(13.5 * var(--p));
  color: #2d3748;
}
.hm-ses {
  display: flex;
  align-items: center;
  gap: calc(7 * var(--p));
  padding: calc(7 * var(--p)) calc(9 * var(--p));
  border-radius: calc(6 * var(--p));
  background: var(--hm-today-cell);
  font-size: calc(13 * var(--p));
  font-weight: 600;
  color: #334744;
  margin-bottom: calc(10 * var(--p));
}
.hm-ses.hm-ses--pend i {
  background: #b7791f;
}
.hm-ses i svg {
  width: 80%;
  height: 80%;
  display: block;
}
.hm-ses i {
  width: calc(15 * var(--p));
  height: calc(15 * var(--p));
  border-radius: 50%;
  background: #15803d;
  color: #fff;
  font-style: normal;
  font-size: calc(10 * var(--p));
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}
.hm-cta {
  background: #ccfbf1;
  border-radius: calc(8 * var(--p));
  padding: calc(10 * var(--p)) calc(12 * var(--p));
  display: flex;
  align-items: center;
  gap: calc(10 * var(--p));
}
.hm-cta p {
  margin: 0;
  flex: 1 1 auto;
  font-size: calc(13.5 * var(--p));
  line-height: 1.35;
  color: #0b5a54;
  font-weight: 600;
}
.hm-cta b {
  font-weight: 800;
}
.hm-btn {
  flex: 0 0 auto;
  font-weight: 800;
  font-size: calc(13.5 * var(--p));
  border-radius: calc(7 * var(--p));
  padding: calc(9 * var(--p)) calc(11 * var(--p));
  background: #0f766e;
  color: #fff;
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .hm-bar,
  .hm-modal,
  .hm-card {
    transition: none;
  }
}
</style>
