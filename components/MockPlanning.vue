<!--
  Maqueta del planning de Hospedy dentro de un portatil dibujado en CSS.
  Datos de ejemplo, fijos: NO habla con ninguna API. Un alojamiento de ejemplo por perfil
  (prop "perfil": hotel, rural o apartamentos).

  La piel (colores, alturas, tipografias) esta copiada del planning real para que
  la web ensene el producto y no una ilustracion. Todas las medidas del producto van en
  --hm-u, que vale "1 px del planning real" a la escala del portatil:
    - interactivo: --hm-u sale de --hm-k, un factor que JS calcula a partir del ancho de
      la pantalla (entre 0,55 y 0,9, para que el texto se lea en cualquier hueco). Ese
      numero vive en JS a proposito, porque getPropertyValue devuelve los calc() sin
      resolver y parsearlos da NaN.
    - "estatico": es una foto. La pantalla ensenna siempre 1000 px del planning real y
      --hm-u sale del ancho del portatil con container queries, sin JavaScript: escala
      como una imagen en cualquier hueco y no se toca.

  La rueda vertical NO se captura: quien esta leyendo la pagina sigue bajando.
  Los dias se recorren arrastrando (tambien si se empieza encima de una reserva), con
  Mayus+rueda, con rueda horizontal o con
  las flechas que hay junto al mes, encima de las habitaciones (como en el panel). La barra
  de arriba lleva el logo.

  Como en el panel, el boton redondo de abajo a la derecha activa el modo mover reservas: con
  el raton la reserva se arrastra y con el dedo se mantiene pulsada antes de arrastrarla
  (deslizar antes es desplazar la pagina). Si no cabe donde se suelta, vuelve a su sitio. Solo
  se comprueba que las casillas esten libres en los datos de ejemplo.

  Con "demo" se reproduce sola y en bucle: pasa dias, mueve una reserva y abre su ficha
  (cuando se mueve y como se para: composables/useDemo).
-->
<template>
  <div
    ref="macEl"
    class="hm-mac"
    :class="{ 'hm-mac--foto': estatico }"
    :style="estatico ? null : { '--hm-k': k }"
    :role="estatico ? 'img' : null"
    :aria-label="estatico ? P.descripcion : null"
    v-on="estatico ? {} : raizManejadores"
  >
    <div class="hm-mac__lid">
      <span class="hm-mac__cam" aria-hidden="true" />

      <div ref="screenEl" class="hm-mac__screen">
        <div
          ref="planEl"
          class="hm-plan"
          :class="{ 'is-mover': modoMover, 'is-despierta': despierta, 'is-duerme': duerme }"
          :inert="estatico"
        >
          <div class="hm-plan__bar">
            <svg class="hm-plan__logo" viewBox="0 0 260 70" aria-hidden="true">
          <g transform="translate(5, 3) scale(1.6)"> <g transform="translate(-45.053681,-99.309918)"> <path fill="#0d9488" d="m 45.148833,121.47429 c 5.64e-4,-2.83541 0.07781,-5.22613 0.180269,-5.57893 0.360693,-1.24204 1.135154,-2.00215 5.113081,-5.01835 5.893415,-4.4686 10.41632,-7.55818 11.080034,-7.9014 0.747892,-0.38675 2.187605,-0.40916 3.151078,-0.14847 0.673851,0.18233 1.63612,0.82421 5.989411,3.99522 0.79077,0.57602 3.10609,2.25817 5.14516,3.73811 3.88641,2.82074 4.95286,3.81488 5.286,4.92757 0.2121,0.70842 0.35122,2.79804 0.19658,2.95268 -0.0499,0.05 -1.67388,0.45369 -3.60872,0.8972 -1.93485,0.44351 -4.32245,1.00131 -5.30578,1.23955 -2.43943,0.59102 -2.35726,0.60697 -2.35726,-0.45754 0,-1.37332 -0.68037,-2.37351 -1.889349,-2.77747 -0.596475,-0.1993 -2.116878,0.0154 -6.577321,0.9289 -1.11566,0.22848 -2.345972,0.46593 -2.734028,0.52766 -2.767535,0.44025 -4.321528,2.11474 -4.321528,4.65661 v 0.67531 0.16985 l -0.160051,0.0323 -1.647935,0.3328 c -0.994392,0.20082 -2.522361,0.54093 -3.395486,0.7558 -0.873125,0.21488 -2.162969,0.53097 -2.86632,0.70242 l -1.278819,0.31174 9.88e-4,-4.96158 z" /> <path fill="#0f766e" d="m 45.148831,130.87964 -9.84e-4,-3.80114 1.278819,-0.30707 c 3.51441,-0.84388 7.41812,-1.641 7.721677,-1.70385 0.122739,-0.0254 0.323083,-0.10914 0.324739,0.0607 0.0043,0.44413 -0.02832,1.50183 0.02338,6.64212 l 0.07237,7.19576 c -1.83558,0.12649 -5.417276,0.0966 -7.662009,0.0831 -0.672714,-0.0531 -1.125354,-0.67035 -1.395617,-1.16882 -0.736383,-2.13633 -0.362845,-4.82516 -0.362375,-7.0008 z m 25.046245,0.12765 v -8.02532 l 3.1309,-0.73844 c 1.72199,-0.40614 4.0834,-0.9685 5.24757,-1.24969 1.16416,-0.28119 2.45029,-0.43857 2.57156,-0.43888 0.17298,-3.5e-4 0.22277,1.4983 0.21973,7.34501 -0.004,6.83135 -0.26823,7.54516 -0.56303,8.19191 -0.47914,1.05108 -1.19686,1.81314 -2.20714,2.34352 -0.8841,0.46413 -0.98178,0.47538 -4.65133,0.53565 l -3.74826,0.0616 z" /> <g fill="#f59e0b"> <path d="m 78.960337,105.05075 c -0.15088,0.0251 -0.22423,0.43692 -0.28799,0.70383 -0.0782,0.32717 -0.3262,0.5858 -0.76125,0.79375 -0.88127,0.42125 -0.90271,0.66893 -0.0936,1.08169 0.49504,0.25255 0.73538,0.51499 0.85564,0.93431 0.23934,0.83451 0.68871,0.84488 1.07485,0.0248 0.21085,-0.44779 0.53694,-0.77593 0.977,-0.98314 0.82806,-0.3899 0.84192,-0.75017 0.0391,-1.01514 -0.44282,-0.14614 -0.72094,-0.40013 -0.96762,-0.88365 -0.40874,-0.80121 -0.46346,-0.71856 -0.83607,-0.65646 z m -4.83946,0.28365 c -0.15154,-0.17337 -0.36557,-0.59613 -0.47562,-0.93947 -0.19531,-0.60935 -0.95375,-1.10191 -1.47598,-1.22782 -0.27887,-0.0672 -0.86406,-0.60873 -0.74754,-0.91237 0.0544,-0.1418 0.49041,-0.42322 0.96887,-0.62536 0.77247,-0.32636 0.91951,-0.47963 1.31238,-1.36798 0.37183,-0.840769 0.50644,-0.991368 0.84337,-0.943554 0.28837,0.04092 0.52073,0.316532 0.82771,0.981774 0.38028,0.82407 0.52446,0.96125 1.32292,1.25869 0.51766,0.19284 0.92127,0.4596 0.95568,0.63165 0.0827,0.4136 -0.41841,0.91662 -1.03624,1.04019 -0.64095,0.12819 -1.05951,0.59316 -1.40973,1.56604 -0.29937,0.8316 -0.66914,1.01489 -1.08582,0.53821 z" /> <path d="m 65.766821,139.59097 c -0.436561,-0.0328 -2.103436,-0.17778 -3.704165,-0.32227 -1.60073,-0.14449 -3.448447,-0.31054 -4.106037,-0.369 l -1.195622,-0.10629 -0.0405,-9.15289 -0.01638,-3.70262 c -0.0261,-5.25515 -0.839499,-4.40523 4.407607,-5.52553 2.573249,-0.56623 4.748327,-0.83765 5.749901,-0.68608 1.110927,0.21914 0.925883,1.73868 0.948195,2.35691 0.0504,1.44744 0.06989,4.00615 0.07106,8.2363 l 0.0026,9.39271 -0.661458,-0.0308 c -0.363802,-0.017 -1.018646,-0.0576 -1.455209,-0.0904 z m 0.399112,-8.18603 c 0.483388,-0.59148 0.561617,-1.18959 0.242986,-1.85776 -0.729033,-1.5288 -3.111541,-0.98307 -3.111541,0.71271 0,0.64295 0.403735,1.29431 0.944915,1.52446 0.575471,0.24474 1.574609,0.0477 1.92364,-0.37941 z" /> </g> </g> </g>
          <text x="75" y="47" font-size="34" font-weight="700" fill="#0D9488">Hospedy</text>
            </svg>
            <span class="hm-tag">Datos de ejemplo</span>
          </div>

          <!-- banda del modo mover, como la del panel (alli va fija arriba de la pagina) -->
          <div v-if="modoMover" class="hm-banda">
            <svg class="hm-banda__ic" viewBox="0 0 24 24" aria-hidden="true"><path :d="FLECHAS" /></svg>
            <span>Modo mover reservas: arrastra para cambiarlas de habitación o fecha</span>
            <button ref="salirEl" type="button" class="hm-banda__salir" @click.stop="salirModo()">Salir</button>
          </div>

          <div ref="bodyEl" class="hm-plan__body">
            <!-- columna fija de habitaciones -->
            <div class="hm-rooms">
              <!-- el mes y sus flechas encima de las habitaciones, como .month-row del panel -->
              <div class="hm-month">
                <button ref="izqEl" type="button" class="hm-nav hm-nav--izq" aria-label="Días anteriores" @click="paso(-3)">
                  <svg viewBox="0 0 10 16" aria-hidden="true"><path d="M7.5 2 2 8l5.5 6" /></svg>
                </button>
                <p class="hm-month__txt">Oct 2026</p>
                <button ref="derEl" type="button" class="hm-nav hm-nav--der" aria-label="Días siguientes" @click="paso(3)">
                  <svg viewBox="0 0 10 16" aria-hidden="true"><path d="M2.5 2 8 8l-5.5 6" /></svg>
                </button>
              </div>
              <div v-for="h in habsVisibles" :key="h.n" class="hm-room">
                <b>{{ h.n }}</b><span>{{ h.t }}</span>
              </div>
            </div>

            <!-- pista desplazable -->
            <div
              ref="trackEl"
              class="hm-track"
              :class="{ 'is-drag': arrastrando }"
              v-on="estatico ? {} : manejadores"
            >
              <div class="hm-strip" :class="{ 'is-anim': deslizando }" :style="estiloStrip">
                <div v-for="d in dias" :key="'d' + d.i" class="hm-dayhead" :style="{ left: u(d.x) }">
                  <div class="hm-date" :class="{ 'hm-date--we': d.finde, 'hm-date--hoy': d.hoy }">
                    <b>{{ d.n }}</b><span>{{ d.sem }}</span>
                  </div>
                </div>

                <div
                  v-for="c in celdas"
                  :key="c.k"
                  class="hm-cell"
                  :class="{ 'hm-cell--hoy': c.hoy }"
                  :style="{ left: c.x, top: c.y }"
                />

                <button
                  v-for="b in barras"
                  :key="b.id"
                  type="button"
                  class="hm-bar"
                  :class="['hm-bar--' + b.e, { 'is-sib': b.g && b.g === grupoActivo, 'is-origen': arrastre && arrastre.i === b.i }]"
                  :style="b.css"
                  :data-r="b.i"
                  :aria-label="b.aria"
                  :aria-expanded="abierta === b.id ? 'true' : 'false'"
                  @click.stop="alClicBarra(b)"
                  @pointerdown="barraPulsar($event, b)"
                  @contextmenu="alMenu"
                  @mouseenter="grupoActivo = b.g || null"
                  @mouseleave="grupoActivo = null"
                >
                  <span class="hm-bar__top">
                    <span class="hm-bar__owner">{{ b.q }}</span>
                    <span v-if="b.r" class="hm-bar__reg">{{ b.r }}</span>
                  </span>

                  <span v-if="b.ota || b.fact" class="hm-bar__ic">
                    <!--
                      Logos de agencia tal y como los pinta el panel: salen de la
                      columna Agencias.LogoSVG de la base de datos.
                      PENDIENTE antes de publicar en gethospedy.com: confirmar las
                      normas de uso de marca de Booking y Expedia. Dentro del panel
                      el logo es funcional (identifica el origen de la reserva); en
                      una web comercial el uso es otro.
                    -->
                    <svg v-if="b.ota === 'bk'" class="hm-ota" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#FFFFFF" d="M18.7,2H5.3C3.5,2,2,3.5,2,5.3v12.3v1V22h3.3h1.2h12.1c1.8,0,3.3-1.5,3.3-3.3V5.3C22,3.5,20.5,2,18.7,2z" />
                      <path fill="#0C3B7C" d="M18.2,3.5H5.8c-1.3,0-2.3,1-2.3,2.3v11.7v0.6v2.3h2.3h0.6h11.7c1.3,0,2.3-1,2.3-2.3V5.8C20.5,4.5,19.5,3.5,18.2,3.5z" />
                      <path fill="#FFFFFF" d="M10.1,16.1H7.9v-2.5c0-0.6,0.2-0.8,0.7-0.9h1.5c1.1,0,1.7,0.6,1.7,1.7C11.8,15.5,11.1,16.1,10.1,16.1L10.1,16.1z M7.9,9.3V8.7c0-0.6,0.2-0.9,0.8-0.9h1.1c0.9,0,1.5,0.6,1.5,1.5c0,0.7-0.4,1.5-1.5,1.5H7.9V9.3z M12.7,11.8l-0.4-0.2l0.3-0.3c0.4-0.3,1.1-1.1,1.1-2.4c0-2-1.5-3.2-3.9-3.2H7.1l0,0H6.8C6.1,5.7,5.5,6.3,5.5,7v11.3h4.4c2.7,0,4.4-1.5,4.4-3.7C14.3,13.4,13.7,12.4,12.7,11.8" />
                      <circle fill="#00BAFC" cx="16.9" cy="16.7" r="1.5" />
                    </svg>
                    <svg v-else-if="b.ota === 'ex'" class="hm-ota" viewBox="0 0 24 24" aria-hidden="true">
                      <circle fill="#FFFFFF" cx="12" cy="12" r="10" />
                      <circle fill="#072F54" cx="12" cy="12" r="8.5" />
                      <path fill="#FBC108" d="M13.8,11.2l0.2,1L13.6,17l0.5-0.2l2-6.3l3-0.8c0.4-0.1,0.8-0.3,1-0.5c-0.1-0.3-0.2-0.5-0.3-0.8c-0.3,0-0.7,0-1,0.1l-2.9,0.8l-5-4.3l-0.5,0.1L13.1,9l0.3,1l-2.8,0.8l-7.1,2.5c0,0.1,0.1,0.3,0.1,0.4L11,12L13.8,11.2L13.8,11.2z" />
                    </svg>
                    <!-- pendiente de facturar: hereda el color de la barra -->
                    <svg v-if="b.fact" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M19.07,7,15.18,3A3.08,3.08,0,0,0,13,2H7.15A3.22,3.22,0,0,0,4,5.28V18.72A3.22,3.22,0,0,0,7.15,22h9.7A3.22,3.22,0,0,0,20,18.72V9.34A3.33,3.33,0,0,0,19.07,7ZM5.54,18.72V5.28A1.65,1.65,0,0,1,7.15,3.6H13a1.56,1.56,0,0,1,1.13.5L18,8.15a1.68,1.68,0,0,1,.48,1.19v9.38a1.66,1.66,0,0,1-1.61,1.68H7.15A1.65,1.65,0,0,1,5.54,18.72Z" />
                      <path fill="currentColor" d="M12.81,4.86V8.64a.83.83,0,0,0,.81.84h3.63Z" />
                    </svg>
                  </span>
                </button>

                <!-- la silueta del arrastre, como la del panel: encaja en la rejilla y sale en
                     rojo si la reserva no cabe -->
                <div
                  v-if="fantasma"
                  class="hm-bar hm-ghost"
                  :class="fantasma.valido ? 'is-ok' : 'is-ko'"
                  :style="fantasma.css"
                  aria-hidden="true"
                >
                  <span v-if="fantasma.etiqueta" class="hm-ghost__lbl">{{ fantasma.etiqueta }}</span>
                </div>
              </div>
            </div>

            <!-- el boton del modo mover reservas, abajo a la derecha como en el panel -->
            <button
              ref="moverEl"
              type="button"
              class="hm-mover"
              :class="{ 'is-on': modoMover }"
              :aria-pressed="modoMover ? 'true' : 'false'"
              aria-label="Modo mover reservas"
              @click.stop="alternarModo()"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="FLECHAS" /></svg>
            </button>

            <p v-if="aviso" :key="aviso.n" class="hm-aviso" role="status">{{ aviso.texto }}</p>

            <!-- ficha reducida de la reserva: misma anatomia que la del panel -->
            <div
              v-if="!estatico"
              ref="sheetEl"
              class="hm-sheet"
              :data-open="ficha ? 'true' : 'false'"
              :inert="!ficha"
              :style="pos"
              role="dialog"
              aria-label="Resumen de la reserva"
            >
              <template v-if="ficha">
                <div class="hm-sheet__head">
                  <button ref="cerrarEl" type="button" class="hm-sheet__x" aria-label="Cerrar" @click.stop="cerrar()">&#10005;</button>
                  <p class="hm-sheet__title">Reserva {{ ficha.num }}</p>
                  <span class="hm-minibtn hm-minibtn--del" aria-hidden="true">Eliminar</span>
                  <span class="hm-minibtn hm-minibtn--save" aria-hidden="true">Guardar</span>
                </div>

                <div class="hm-sheet__grid">
                  <div class="hm-fld">
                    <label>Noches</label>
                    <div class="hm-nights"><i aria-hidden="true">&minus;</i><b>{{ ficha.noches }}</b><i aria-hidden="true">+</i></div>
                  </div>
                  <div class="hm-fld">
                    <label>Entrada</label>
                    <div class="hm-inp">{{ ficha.entrada }}</div>
                  </div>
                  <div class="hm-fld">
                    <label>Salida</label>
                    <div class="hm-inp">{{ ficha.salida }}</div>
                  </div>
                  <div class="hm-fld">
                    <label>{{ ficha.etiqHab }}</label>
                    <div class="hm-inp">{{ ficha.hab }}</div>
                  </div>
                  <div class="hm-fld hm-fld--wide">
                    <label>Titular</label>
                    <div class="hm-inp">{{ ficha.titular }}</div>
                  </div>
                  <!-- campos que no se ensenan: barra gris del ancho del dato -->
                  <div class="hm-fld">
                    <label>Régimen</label>
                    <div class="hm-inp hm-inp--ph" aria-hidden="true"><span style="width: 58%" /></div>
                  </div>
                  <div class="hm-fld">
                    <label>Agencia</label>
                    <div class="hm-inp hm-inp--ph" aria-hidden="true"><span style="width: 72%" /></div>
                  </div>
                  <div class="hm-fld">
                    <label>Total</label>
                    <div class="hm-inp hm-inp--ph" aria-hidden="true"><span style="width: 46%" /></div>
                  </div>
                </div>

                <div class="hm-acts">
                  <span class="hm-chip">Enviar pre check-in</span>
                  <span class="hm-chip">Resumen al huésped</span>
                  <span class="hm-chip hm-chip--wa">WhatsApp</span>
                  <span class="hm-chip">Extras</span>
                  <span class="hm-chip">Factura</span>
                </div>

                <div class="hm-ses">
                  <i aria-hidden="true">&#10003;</i>
                  <span>Parte de viajeros enviado &middot; SES Hospedajes</span>
                  <b>{{ ficha.ses }}</b>
                </div>

                <div class="hm-sheet__cta">
                  <p>&iquest;Te gusta este calendario? <b>El que usarás es mucho mejor.</b> &iquest;Te animas a probarlo?</p>
                  <!-- Decorativo a proposito: el destino esta sin decidir. Cuando
                       se decida, esto pasa a <NuxtLink to="..."> y se le quita el
                       aria-hidden. -->
                  <span class="hm-btn" aria-hidden="true">Probar gratis</span>
                </div>
              </template>
            </div>
          </div>

          <!-- el "dedo" de la demo -->
          <span
            v-if="dedo"
            :key="dedo.n"
            class="hm-dedo"
            :class="{ 'is-apretado': dedo.apretado, 'is-suelta': dedo.suelta }"
            :style="{ left: dedo.x + 'px', top: dedo.y + 'px' }"
            aria-hidden="true"
          />
        </div>
      </div>

      <p class="hm-mac__chin">Hospedy</p>
    </div>
    <div class="hm-mac__base"><span class="hm-mac__notch" /></div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  /* hotel, rural o apartamentos: cambia el alojamiento de ejemplo */
  perfil: {
    type: String,
    default: "hotel",
    validator: (v) => ["hotel", "rural", "apartamentos"].includes(v),
  },
  /* foto sin interaccion, que escala como una imagen */
  estatico: { type: Boolean, default: false },
  /* se reproduce sola, en bucle (solo los perfiles con guion de demo); el primer gesto del
     visitante la para */
  demo: { type: Boolean, default: false },
});

/* ---- Medidas reales del planning (src/views/Calendar.vue del panel) ---- */
const M_ROW = 70;   /* alto de fila */
const M_HEAD = 58;  /* alto de la cabecera de dia */
const M_COL = 78;   /* ancho de columna de dia */
const M_ROOMW = 150; /* ancho de la columna de habitaciones */

const DIAS_TOTAL = 21;
const DIA_INI = 5; /* lunes 5 de octubre de 2026; hoy es el viernes 9 (columna 5) */
const HOY = 9;
const SEM = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

/* g = grupo: barras con el mismo grupo son LA MISMA reserva repartida en varias
   habitaciones, que es como las pinta el planning real (una barra por habitacion).
   c = columna del dia de entrada (1 = lunes 5), s = noches.
   demo = la reserva que mueve la demo (i, su posicion en "reservas") y la fila a la que va */
const PERFILES = {
  hotel: {
    descripcion: "Planning de ejemplo de un hotel en un portátil: habitaciones en filas, días en columnas y las reservas como barras de colores según su estado.",
    unidad: ["Habitación", "Habitaciones", "unidades"],
    habs: [
      { n: "101", t: "Doble" },
      { n: "102", t: "Doble" },
      { n: "103", t: "Familiar" },
      { n: "104", t: "Doble" },
      { n: "201", t: "Suite" },
      { n: "202", t: "Individual" },
      { n: "203", t: "Familiar" },
    ],
    reservas: [
      { f: 0, c: 1, s: 4, q: "A. Ferrer", r: "AD", e: "past", ota: "bk", fact: true },
      { f: 0, c: 6, s: 3, q: "Grupo Solana", r: "MP", e: "in", g: "sol", fact: true },
      { f: 1, c: 6, s: 3, q: "Grupo Solana", r: "MP", e: "in", g: "sol", fact: true },
      { f: 1, c: 2, s: 3, q: "L. Prieto", r: "AD", e: "past", ota: "ex" },
      { f: 2, c: 1, s: 3, q: "Fam. Olmedo", r: "PC", e: "past", fact: true },
      { f: 2, c: 7, s: 2, q: "N. Barreiro", r: "AD", e: "in", ota: "bk" },
      { f: 2, c: 14, s: 4, q: "D. Santos", r: "AD", e: "future" },
      { f: 3, c: 2, s: 3, q: "C. Vilalta", r: "MP", e: "past" },
      { f: 3, c: 8, s: 4, q: "M. Aguirre", r: "AD", e: "future", ota: "bk" },
      { f: 4, c: 4, s: 5, q: "Fam. Requena", r: "PC", e: "pre" },
      { f: 4, c: 13, s: 3, q: "O. Lamas", r: "AD", e: "future", ota: "ex" },
      { f: 5, c: 3, s: 2, q: "J. Mendoza", r: "AD", e: "past", fact: true },
      { f: 5, c: 9, s: 6, q: "S. Arenas", r: "AD", e: "in" },
      { f: 5, c: 17, s: 3, q: "T. Navarro", r: "MP", e: "future", ota: "bk" },
      { f: 6, c: 1, s: 4, q: "P. Cuesta", r: "AD", e: "past", ota: "ex", fact: true },
      { f: 6, c: 10, s: 5, q: "Grupo Bilbao", r: "MP", e: "future", ota: "bk" },
    ],
    /* la que mueve la demo: una reserva directa y futura */
    demo: { i: 6, f: 0 },
  },
  /* casa rural de seis habitaciones con nombre; el puente del Pilar, la casa entera */
  rural: {
    descripcion: "Planning de ejemplo de una casa rural de seis habitaciones en un portátil, con la casa entera reservada para el puente.",
    unidad: ["Habitación", "Habitaciones", "habitaciones"],
    habs: [
      { n: "Olmo", t: "Doble" },
      { n: "Tejo", t: "Doble" },
      { n: "Haya", t: "Familiar" },
      { n: "Pino", t: "Doble" },
      { n: "Arce", t: "Triple" },
      { n: "Tilo", t: "Individual" },
    ],
    reservas: [
      { f: 0, c: 1, s: 2, q: "M. Iglesias", r: "AD", e: "past", fact: true },
      { f: 0, c: 9, s: 2, q: "A. Serrano", r: "AD", e: "pre" },
      { f: 0, c: 12, s: 2, q: "P. Gil", e: "future", ota: "bk" },
      { f: 1, c: 2, s: 2, q: "R. Campos", e: "past", ota: "bk", fact: true },
      { f: 1, c: 12, s: 2, q: "I. Soler", r: "AD", e: "future" },
      { f: 1, c: 16, s: 2, q: "H. Lamas", e: "future" },
      { f: 2, c: 2, s: 2, q: "D. Nieto", r: "AD", e: "past", fact: true },
      { f: 2, c: 10, s: 2, q: "J. Aguirre", e: "future", ota: "bk" },
      { f: 2, c: 12, s: 2, q: "L. Rubio", r: "AD", e: "future" },
      { f: 3, c: 3, s: 2, q: "C. Vidal", r: "MP", e: "past" },
      { f: 3, c: 12, s: 2, q: "C. Marín", e: "future", ota: "ex" },
      { f: 3, c: 15, s: 3, q: "A. Soto", r: "AD", e: "future" },
      { f: 4, c: 1, s: 2, q: "Ó. Prieto", e: "past", fact: true },
      { f: 4, c: 13, s: 1, q: "T. Rey", r: "AD", e: "future" },
      { f: 5, c: 2, s: 1, q: "N. Cuesta", e: "past", fact: true },
      { f: 5, c: 9, s: 1, q: "E. Montes", e: "future" },
      { f: 5, c: 12, s: 3, q: "R. Vidal", e: "future", ota: "bk" },
      ...[0, 1, 2, 3, 4, 5].map((f) => ({ f, c: 5, s: 3, q: "Fam. Lozano", r: "MP", e: "pre", g: "loz" })),
    ],
  },
  /* apartamentos turisticos en dos edificios: estancias largas y mucha agencia */
  apartamentos: {
    descripcion: "Planning de ejemplo de apartamentos turísticos en un portátil: cada apartamento en una fila, con estancias largas y reservas de agencia.",
    unidad: ["Apartamento", "Apartamentos", "apartamentos"],
    habs: [
      { n: "1A", t: "Marina · 2 dorm." },
      { n: "1B", t: "Marina · estudio" },
      { n: "2A", t: "Marina · 2 dorm." },
      { n: "2B", t: "Marina · 1 dorm." },
      { n: "3A", t: "Marina · ático" },
      { n: "1", t: "Mirador · 3 dorm." },
      { n: "2", t: "Mirador · 2 dorm." },
    ],
    reservas: [
      { f: 0, c: 1, s: 4, q: "E. Müller", e: "past", ota: "bk", fact: true },
      { f: 0, c: 5, s: 7, q: "T. Jansen", e: "pre", ota: "bk" },
      { f: 0, c: 13, s: 5, q: "C. Marín", e: "future" },
      { f: 1, c: 2, s: 5, q: "L. Dubois", e: "in", ota: "ex", fact: true },
      { f: 1, c: 8, s: 3, q: "R. Campos", e: "future" },
      { f: 1, c: 13, s: 4, q: "O. Smith", e: "future", ota: "bk" },
      { f: 2, c: 1, s: 3, q: "A. Nieto", e: "past", fact: true },
      { f: 2, c: 6, s: 7, q: "S. Larsson", e: "pre", ota: "bk" },
      { f: 2, c: 15, s: 5, q: "G. Bianchi", e: "future", ota: "ex" },
      { f: 3, c: 3, s: 4, q: "M. Aguirre", e: "in", fact: true },
      { f: 3, c: 9, s: 5, q: "J. Walker", e: "future", ota: "bk" },
      { f: 3, c: 16, s: 3, q: "I. Rey", e: "future" },
      { f: 4, c: 1, s: 10, q: "Fam. Kowalska", e: "in", ota: "bk" },
      { f: 4, c: 13, s: 4, q: "D. Luna", e: "future" },
      { f: 5, c: 2, s: 3, q: "P. Vidal", e: "past", fact: true },
      { f: 5, c: 5, s: 4, q: "N. Peeters", e: "pre", ota: "ex" },
      { f: 5, c: 11, s: 7, q: "Fam. Schmidt", e: "future", ota: "bk" },
      { f: 6, c: 4, s: 7, q: "H. Soler", e: "in" },
      { f: 6, c: 12, s: 5, q: "C. Martin", e: "future", ota: "bk" },
    ],
  },
};

const P = PERFILES[props.perfil] || PERFILES.hotel;
const HABS = P.habs;
const RESERVAS = P.reservas;

const ET = { past: "Salió", future: "Confirmada", pre: "Auto check-in enviado", in: "En casa" };

/* flechas en cruz del boton de mover reservas (el icono del panel) */
const FLECHAS =
  "M12 2l3.5 3.5H13V11h5.5V8.5L22 12l-3.5 3.5V13H13v5.5h2.5L12 22l-3.5-3.5H11V13H5.5v2.5L2 12l3.5-3.5V11H11V5.5H8.5z";

const macEl = ref(null);
const screenEl = ref(null);
const planEl = ref(null);
const bodyEl = ref(null);
const trackEl = ref(null);
const sheetEl = ref(null);
const izqEl = ref(null);
const derEl = ref(null);
const moverEl = ref(null);
const salirEl = ref(null);
const cerrarEl = ref(null);

const k = ref(0.66);
const filas = ref(HABS.length);
const off = ref(0); /* en px del planning real */
const maxOff = ref(0);
const arrastrando = ref(false);
const deslizando = ref(false);
const grupoActivo = ref(null);
const abierta = ref(null);
const ficha = ref(null);
const pos = ref({ left: "0px", top: "0px" });

/* las reservas se pueden mover: cambian su fila (f) y su dia de entrada (c); "i" no cambia */
function reservasIniciales() {
  return RESERVAS.map((r, i) => ({ ...r, i }));
}
const reservas = ref(reservasIniciales());

const modoMover = ref(false);
const despierta = ref(false);
const duerme = ref(false);
const arrastre = ref(null); /* { i, f0, c0, f, c, valido } mientras se arrastra una reserva */
const aviso = ref(null);
const dedo = ref(null);

/* una medida del planning real, a la escala del portatil */
function u(n) {
  return "calc(var(--hm-u) * " + n + ")";
}

const habsVisibles = computed(() => HABS.slice(0, filas.value));
const estiloStrip = computed(() => ({
  width: u(DIAS_TOTAL * M_COL),
  transform: "translateX(" + u(-off.value) + ")",
}));

const dias = [];
for (let i = 0; i < DIAS_TOTAL; i++) {
  const n = DIA_INI + i;
  const dow = (n + 2) % 7; /* 0 = lunes */
  dias.push({ i, n, x: i * M_COL, sem: SEM[dow], finde: dow === 5 || dow === 6, hoy: n === HOY });
}

const celdas = computed(() => {
  const out = [];
  for (let i = 0; i < DIAS_TOTAL; i++) {
    for (let f = 0; f < filas.value; f++) {
      out.push({ k: i + "-" + f, x: u(i * M_COL), y: u(M_HEAD + f * M_ROW), hoy: DIA_INI + i === HOY });
    }
  }
  return out;
});

function posBarra(f, c, s) {
  return {
    left: u((c - 1) * M_COL + 2),
    top: u(M_HEAD + f * M_ROW + 3),
    width: u(s * M_COL - 5),
    height: u(M_ROW - 7),
  };
}

const barras = computed(() =>
  reservas.value
    .filter((r) => r.f < filas.value)
    .map((r) => ({
      ...r,
      id: "r" + r.i,
      css: posBarra(r.f, r.c, r.s),
      aria: r.q + ", " + P.unidad[0].toLowerCase() + " " + HABS[r.f].n + ", " + r.s + " noches, " + ET[r.e],
    }))
);

const barraAbierta = computed(() => barras.value.find((b) => b.id === abierta.value) || null);

/* la silueta del arrastre, con los dias que se desplaza la reserva */
const fantasma = computed(() => {
  const a = arrastre.value;
  if (!a) return null;
  const r = reservas.value[a.i];
  const dc = a.c - r.c;
  return {
    valido: a.valido,
    css: posBarra(a.f, a.c, r.s),
    etiqueta: a.valido && dc ? (dc > 0 ? "+" : "") + dc + (Math.abs(dc) === 1 ? " día" : " días") : "",
  };
});

/* --- medida (solo la version interactiva): JS es el duenno del factor de escala y el
   CSS lo lee --- */
async function medir() {
  const sc = screenEl.value;
  if (!sc) return;
  const ancho = sc.clientWidth;
  if (!ancho) return;

  const nk = Math.min(0.9, Math.max(0.55, ancho / 1000));
  if (Math.abs(nk - k.value) > 0.002) {
    k.value = nk;
    await nextTick();
  }

  const body = bodyEl.value;
  if (!body) return;
  const caben = Math.floor((body.clientHeight / k.value - M_HEAD) / M_ROW);
  filas.value = Math.max(3, Math.min(HABS.length, caben));
  await nextTick();

  const track = trackEl.value;
  if (!track) return;
  maxOff.value = Math.max(0, DIAS_TOTAL * M_COL - track.clientWidth / k.value);
  if (off.value > maxOff.value) off.value = maxOff.value;
}

function desplazar(dx) {
  off.value = Math.max(0, Math.min(maxOff.value, off.value + dx));
}

/* las flechas del mes: el salto de dias se ve deslizar */
let tDesliz = 0;
function deslizar() {
  deslizando.value = true;
  clearTimeout(tDesliz);
  tDesliz = setTimeout(() => {
    deslizando.value = false;
  }, 420);
}
function paso(n) {
  cerrar();
  deslizar();
  desplazar(M_COL * n);
}

/* px de pantalla por px del planning real (con cualquier transform de los ancestros) */
function escalaVisual() {
  const sc = screenEl.value;
  if (!sc || !sc.offsetWidth) return k.value;
  return (sc.getBoundingClientRect().width / sc.offsetWidth) * k.value;
}

/* la rueda vertical se deja a la pagina; solo horizontal o con Mayus */
function alRodar(e) {
  const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
  if (!dx) return;
  e.preventDefault();
  pararDemo(true);
  cerrar();
  desplazar(dx / k.value);
}

/* arrastrar para recorrer los dias: empieza en cualquier punto de la pista, tambien encima de
   una reserva, cuando el puntero se ha movido 5 px; sin moverse, el toque es un clic y abre la
   ficha. En modo mover, el raton sobre una reserva la arrastra a ella (barraPulsar); el dedo
   recorre los dias hasta que la pulsacion larga levanta la reserva */
let pulsado = null;

function alPulsar(e) {
  if (e.button !== undefined && e.button !== 0) return;
  const tactil = e.pointerType === "touch";
  const enBarra = !!(e.target.closest && e.target.closest(".hm-bar"));
  if (enBarra && modoMover.value && !tactil) return;
  if (!tactil) e.preventDefault(); /* sin esto, arrastrar selecciona los dias de la cabecera */
  pulsado = { id: e.pointerId, x0: e.clientX, off0: off.value, movido: false };
}

function alMover(e) {
  if (!pulsado || e.pointerId !== pulsado.id) return;
  if (e.pointerType === "mouse" && !(e.buttons & 1)) {
    /* el boton se solto fuera de la pista antes de arrastrar */
    alSoltar(e);
    return;
  }
  if (gesto && gesto.activo) return; /* la reserva esta levantada: el dedo la lleva a ella */
  const d = e.clientX - pulsado.x0;
  if (!pulsado.movido) {
    if (Math.abs(d) < 5) return;
    pulsado.movido = true;
    arrastrando.value = true;
    /* si se desliza antes de la pulsacion larga, gana recorrer los dias */
    if (gesto) gestoCancelar();
    cerrar();
    pararDemo(true);
    try {
      trackEl.value.setPointerCapture(e.pointerId);
    } catch (err) {
      /* sin captura el arrastre sigue funcionando dentro de la pista */
    }
  }
  off.value = Math.max(0, Math.min(maxOff.value, pulsado.off0 - d / k.value));
}

function alSoltar(e) {
  if (!pulsado || (e && e.pointerId !== pulsado.id)) return;
  const movido = pulsado.movido;
  pulsado = null;
  arrastrando.value = false;
  if (!movido) return;
  /* el clic que llega al soltar tras recorrer los dias no abre la ficha */
  sinClic = true;
  setTimeout(() => {
    sinClic = false;
  }, 0);
}

const manejadores = {
  wheel: alRodar,
  pointerdown: alPulsar,
  pointermove: alMover,
  pointerup: alSoltar,
  pointercancel: alSoltar,
};

/* cualquier gesto del visitante dentro del portatil para la demo para siempre; con el dedo,
   solo cuando toca algo (deslizar para leer la pagina no cuenta) */
function alApretar(e) {
  if (e.pointerType !== "touch") pararDemo(true);
}
function alClicar() {
  pararDemo(true);
}
const raizManejadores = { pointerdownCapture: alApretar, clickCapture: alClicar };

function cerrar() {
  abierta.value = null;
  ficha.value = null;
}

function dd(d) {
  return (d < 10 ? "0" : "") + d + "/10/2026";
}

function abrir(b) {
  if (props.estatico) return;
  if (abierta.value === b.id) {
    cerrar();
    return;
  }
  const hermanas = b.g ? reservas.value.filter((x) => x.g === b.g) : [b];
  /* el numero de reserva y el del parte no cambian aunque la reserva se mueva */
  const o = RESERVAS[b.i];
  const ini = DIA_INI + b.c - 1;
  abierta.value = b.id;
  ficha.value = {
    num: 4100 + o.c * 7 + o.f,
    noches: b.s,
    entrada: dd(ini),
    salida: dd(ini + b.s),
    etiqHab: P.unidad[hermanas.length > 1 ? 1 : 0],
    hab:
      hermanas.length > 1
        ? hermanas.map((x) => HABS[x.f].n).join(" + ") + " · " + hermanas.length + " " + P.unidad[2]
        : HABS[b.f].n + " · " + HABS[b.f].t,
    titular: b.q,
    ses: "SES-2026-" + (4000 + o.c * 13 + o.f * 7),
  };
  nextTick(situar);
}

/* La ficha se coloca con los numeros del modelo, no con getBoundingClientRect:
   asi es inmune a cualquier transform de los ancestros (AOS, hover, zoom). Si no cabe
   entera (portatil pequenno), se encoge hasta caber. */
function situar() {
  const body = bodyEl.value;
  const sheet = sheetEl.value;
  const b = barraAbierta.value;
  if (!body || !sheet || !b) return;

  const kk = k.value;
  const w = sheet.offsetWidth;
  const h = sheet.offsetHeight;
  const s = Math.min(1, (body.clientHeight - 8) / (h || 1));
  const wv = w * s;
  const hv = h * s;
  const ancho = (b.s * M_COL - 5) * kk;
  const bx = (M_ROOMW + (b.c - 1) * M_COL + 2 - off.value) * kk;
  const by = (M_HEAD + b.f * M_ROW + 3) * kk;

  let cx = bx + ancho / 2;
  cx = Math.max(6 + wv / 2, Math.min(cx, body.clientWidth - wv / 2 - 6));

  let y = by - hv - 6;
  if (y < 4) y = by + (M_ROW - 7) * kk + 6;
  y = Math.max(4, Math.min(y, body.clientHeight - hv - 4));

  pos.value = { left: Math.round(cx - w / 2) + "px", top: Math.round(y) + "px", "--hm-fit": s.toFixed(3) };
}

function fueraDe(e) {
  if (!abierta.value) return;
  if (sheetEl.value && sheetEl.value.contains(e.target)) return;
  if (e.target.closest && e.target.closest(".hm-bar")) return;
  cerrar();
}

function alTeclear(e) {
  if (e.key !== "Escape") return;
  if (gesto) gestoCancelar();
  else if (abierta.value) cerrar();
}

/* ---- modo mover reservas, como el del panel: al entrar las barras se sacuden y al salir se
   asientan ---- */
let tModo = 0;
function alternarModo() {
  cerrar();
  cancelarArrastre();
  modoMover.value = !modoMover.value;
  despierta.value = modoMover.value;
  duerme.value = !modoMover.value;
  clearTimeout(tModo);
  tModo = setTimeout(() => {
    despierta.value = false;
    duerme.value = false;
  }, 700);
}
function salirModo() {
  if (modoMover.value) alternarModo();
}

/* el gesto del visitante: con raton, la reserva se levanta al moverla 5 px; con el dedo, al
   mantenerla pulsada 350 ms (si antes se desliza, gana desplazar: los dias en horizontal y la
   pagina en vertical) */
let gesto = null;
let sinClic = false;

function barraPulsar(e, b) {
  if (props.estatico || !modoMover.value || gesto) return;
  if (e.button !== undefined && e.button !== 0) return;
  const tactil = e.pointerType === "touch";
  if (!tactil) e.preventDefault(); /* sin esto, el raton selecciona o arrastra el boton */
  gesto = { id: e.pointerId, tactil, x0: e.clientX, y0: e.clientY, i: b.i, activo: false, t: 0 };
  document.addEventListener("pointermove", gestoMover);
  document.addEventListener("pointerup", gestoSoltar);
  document.addEventListener("pointercancel", gestoCancelar);
  if (tactil) gesto.t = setTimeout(levantar, 350);
}
function levantar() {
  if (!gesto || gesto.activo) return;
  gesto.t = 0;
  gesto.activo = true;
  pararDemo(true);
  if (gesto.tactil && navigator.vibrate) {
    try {
      navigator.vibrate(30);
    } catch (err) {
      /* la vibracion es opcional */
    }
  }
  empezarArrastre(gesto.i);
}
function gestoMover(e) {
  if (!gesto || e.pointerId !== gesto.id) return;
  const dx = e.clientX - gesto.x0;
  const dy = e.clientY - gesto.y0;
  if (!gesto.activo) {
    if (gesto.tactil) {
      if (Math.abs(dx) > 10 || Math.abs(dy) > 10) gestoCancelar();
      return;
    }
    if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
    levantar();
  }
  const s = escalaVisual();
  moverArrastre(dx / s, dy / s);
}
function gestoSoltar(e) {
  if (!gesto || e.pointerId !== gesto.id) return;
  const activo = gesto.activo;
  quitarGesto();
  if (!activo) return;
  soltarArrastre();
  /* el clic que llega al soltar no abre la ficha */
  sinClic = true;
  setTimeout(() => {
    sinClic = false;
  }, 0);
}
function gestoCancelar() {
  quitarGesto();
  cancelarArrastre();
}
function quitarGesto() {
  if (gesto && gesto.t) clearTimeout(gesto.t);
  gesto = null;
  document.removeEventListener("pointermove", gestoMover);
  document.removeEventListener("pointerup", gestoSoltar);
  document.removeEventListener("pointercancel", gestoCancelar);
}
/* con la reserva levantada, el dedo no desplaza la pagina. El escuchador (NO pasivo) va
   puesto desde el principio en la pista: el navegador solo lo respeta si ya estaba al tocar */
function bloquearScroll(e) {
  if (gesto && gesto.activo) e.preventDefault();
}
/* sin el menu del navegador al mantener pulsada una reserva */
function alMenu(e) {
  if (modoMover.value) e.preventDefault();
}
function alClicBarra(b) {
  if (sinClic) return;
  abrir(b);
}

function empezarArrastre(i) {
  cerrar();
  const r = reservas.value[i];
  arrastre.value = { i, f0: r.f, c0: r.c, f: r.f, c: r.c, valido: true };
}
/* dx y dy en px del planning real desde donde se agarro: la casilla cambia al pasar media */
function moverArrastre(dx, dy) {
  const a = arrastre.value;
  if (!a) return;
  const r = reservas.value[a.i];
  const f = Math.max(0, Math.min(filas.value - 1, a.f0 + Math.round(dy / M_ROW)));
  const c = Math.max(1, Math.min(DIAS_TOTAL - r.s + 1, a.c0 + Math.round(dx / M_COL)));
  if (f === a.f && c === a.c) return;
  arrastre.value = { ...a, f, c, valido: libre(a.i, f, c, r.s) };
}
/* la unica regla de la maqueta: que las noches no pisen otra reserva de esa fila */
function libre(i, f, c, s) {
  return reservas.value.every((o) => o.i === i || o.f !== f || o.c + o.s <= c || o.c >= c + s);
}
function soltarArrastre() {
  const a = arrastre.value;
  arrastre.value = null;
  if (!a || !a.valido) return false;
  const r = reservas.value[a.i];
  if (a.f === r.f && a.c === r.c) return false;
  reservas.value = reservas.value.map((x) => (x.i === a.i ? { ...x, f: a.f, c: a.c } : x));
  avisar("Reserva movida correctamente");
  return true;
}
function cancelarArrastre() {
  arrastre.value = null;
}

/* ---- avisos como los del panel ---- */
let nAviso = 0;
let tAviso = 0;
function avisar(texto) {
  nAviso += 1;
  aviso.value = { texto, n: nAviso };
  clearTimeout(tAviso);
  tAviso = setTimeout(() => {
    aviso.value = null;
  }, 2600);
}

/* ---- demo: pasa dias, mueve una reserva y abre su ficha, sola y en bucle. Cuando se mueve
   y como se para lo decide useDemo ---- */
let nDedo = 0;
const demo = useDemo({
  activa: () => props.demo && !props.estatico && !!P.demo,
  raiz: () => macEl.value,
  correr: correrDemo,
  alParar: limpiarDemo,
});
const { espera, animar } = demo;

function pararDemo(delVisitante) {
  demo.parar(delVisitante);
}
/* al pararse se recoge lo que la demo deja a medias; si la ha parado el visitante, lo demas
   se queda como esta: lo que ve es lo que toca */
function limpiarDemo(delVisitante) {
  dedo.value = null;
  if (!gesto) arrastre.value = null;
  if (delVisitante) return;
  cerrar();
  salirModo();
}

/* centro de un elemento dentro de la pantalla del portatil, en px de la pantalla */
function centroDe(el) {
  const plan = planEl.value;
  if (!el || !plan) return null;
  const rp = plan.getBoundingClientRect();
  const re = el.getBoundingClientRect();
  if (!re.width || !rp.width) return null;
  const s = plan.offsetWidth / rp.width;
  return { x: (re.left + re.width / 2 - rp.left) * s, y: (re.top + re.height / 2 - rp.top) * s, w: re.width * s };
}
/* el "dedo" pulsa un elemento y, a mitad del toque, hace lo que haria el clic. Si el
   elemento ya no esta (la ficha la ha cerrado el scroll de la pagina), sigue sin el */
async function tocar(el, accion) {
  const c = centroDe(el);
  if (!c) return;
  nDedo += 1;
  dedo.value = { x: c.x, y: c.y, n: nDedo };
  await espera(200);
  accion();
  await espera(260);
  dedo.value = null;
}
/* el dedo mantiene pulsada la reserva, la lleva df filas y dc dias y la suelta */
async function arrastrarDemo(i, df, dc) {
  const el = trackEl.value && trackEl.value.querySelector('[data-r="' + i + '"]');
  const c = centroDe(el);
  if (!c) return;
  const kk = k.value;
  const xa = c.x - c.w / 2 + Math.min(c.w * 0.3, 60 * kk);
  const ya = c.y;
  nDedo += 1;
  dedo.value = { x: xa, y: ya, n: nDedo, apretado: true };
  await espera(380);
  empezarArrastre(i);
  await espera(160);
  const dx = dc * M_COL;
  const dy = df * M_ROW;
  await animar(1100, (t) => {
    const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    dedo.value = { ...dedo.value, x: xa + dx * kk * e, y: ya + dy * kk * e };
    moverArrastre(dx * e, dy * e);
  });
  await espera(350);
  soltarArrastre();
  dedo.value = { ...dedo.value, apretado: false, suelta: true };
  await espera(260);
  dedo.value = null;
}
/* cada vuelta empieza con todo en su sitio; si hay dias pasados, antes se vuelve a hoy, para
   que la reserva movida regrese sin verse */
async function alInicio() {
  cerrar();
  arrastre.value = null;
  salirModo();
  if (off.value > 0) {
    deslizar();
    off.value = 0;
    await espera(450);
  }
  reservas.value = reservasIniciales();
}
async function correrDemo() {
  const D = P.demo;
  for (;;) {
    await alInicio();
    await espera(900);
    /* 1. unos dias hacia delante con la flecha del mes, hasta la reserva */
    for (let n = 0; n < 4; n++) {
      await tocar(derEl.value, () => paso(3));
      await espera(120);
    }
    await espera(500);
    /* 2. el modo mover reservas */
    await tocar(moverEl.value, alternarModo);
    await espera(1100);
    /* 3. la reserva, a otra habitacion y, si se ven dias de sobra, un par de dias despues */
    const visibles = trackEl.value.clientWidth / k.value / M_COL;
    const dc = visibles >= 7 ? 2 : visibles >= 5.5 ? 1 : 0;
    await arrastrarDemo(D.i, D.f - reservas.value[D.i].f, dc);
    await espera(1300);
    /* 4. fuera del modo y a ver la ficha de la reserva movida */
    await tocar(salirEl.value, salirModo);
    await espera(700);
    await tocar(trackEl.value.querySelector('[data-r="' + D.i + '"]'), () => {
      const b = barras.value.find((x) => x.i === D.i);
      if (b) abrir(b);
    });
    await espera(2800);
    await tocar(cerrarEl.value, cerrar);
    await espera(600);
    /* 5. de vuelta a hoy */
    for (let n = 0; n < 4; n++) {
      await tocar(izqEl.value, () => paso(-3));
      await espera(120);
    }
    await espera(900);
  }
}

let ro = null;

onMounted(() => {
  if (props.estatico) return;
  medir();
  ro = new ResizeObserver(() => medir());
  ro.observe(macEl.value);
  document.addEventListener("click", fueraDe);
  document.addEventListener("keydown", alTeclear);
  window.addEventListener("scroll", cerrar, { passive: true });
  if (trackEl.value) trackEl.value.addEventListener("touchmove", bloquearScroll, { passive: false });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
});

onBeforeUnmount(() => {
  if (props.estatico) return;
  if (ro) ro.disconnect();
  document.removeEventListener("click", fueraDe);
  document.removeEventListener("keydown", alTeclear);
  window.removeEventListener("scroll", cerrar);
  if (trackEl.value) trackEl.value.removeEventListener("touchmove", bloquearScroll);
  quitarGesto();
  clearTimeout(tDesliz);
  clearTimeout(tModo);
  clearTimeout(tAviso);
});
</script>

<style scoped>
.hm-mac {
  /* tokens del planning real (src/App.vue del panel), renombrados */
  --hm-past-bg: #b5bfce;
  --hm-past-fg: #0b0e12;
  --hm-future-bg: #14b8a6;
  --hm-future-fg: #042b26; /* tinta oscura: con blanco se queda en 2,49:1 */
  --hm-pre-bg: #ebb04e;
  --hm-pre-fg: #1a1a2e;
  --hm-house-bg: #273141;
  --hm-house-fg: #ffffff;
  --hm-line: #d8d8d852;
  --hm-today: #edf3f1; /* columna de hoy en la rejilla */
  --hm-today-edge: #14716a;
  --hm-today-head: #e4ecea; /* cabecera de hoy */
  --hm-today-head-fg: #164b47;
  --hm-room-bg: #e4ecea;
  --hm-day-bg: #14716a;
  --hm-day-fg: #ffffff;
  --hm-we-bg: #164b47;
  --hm-we-fg: #ffffff;
  /* marca de la landing (tailwind.config.js) */
  --hm-teal: #0f766e;
  --hm-teal-deep: #0b5a54;
  --hm-mint: #ccfbf1;

  /* 1 px del planning real a la escala de este portatil. En la version interactiva el factor
     (--hm-k) lo pone JS; en la foto sale del ancho del propio portatil */
  --hm-u: calc(var(--hm-k, 0.66) * 1px);

  width: 100%;
  font-family: "Nunito Variable", Nunito, system-ui, -apple-system, sans-serif;
  line-height: 1.55;
}
/* foto: la pantalla (96,6 % del portatil) muestra 1000 px del planning real, a cualquier
   tamanno y sin JavaScript */
.hm-mac.hm-mac--foto {
  container-type: inline-size;
  --hm-u: calc(100cqw * 0.966 / 1000);
}
.hm-mac--foto .hm-plan {
  pointer-events: none;
}
.hm-mac--foto .hm-mac__lid {
  box-shadow: 0 calc(22 * var(--hm-u)) calc(40 * var(--hm-u)) calc(-26 * var(--hm-u)) rgba(6, 30, 28, 0.7),
    inset 0 0 0 1px rgba(255, 255, 255, 0.09);
}
.hm-mac--foto .hm-mac__base {
  border-radius: 0 0 calc(9 * var(--hm-u)) calc(9 * var(--hm-u));
  box-shadow: 0 calc(10 * var(--hm-u)) calc(16 * var(--hm-u)) calc(-10 * var(--hm-u)) rgba(6, 30, 28, 0.55);
}

/* ============ Portatil en CSS ============ */
.hm-mac__lid {
  position: relative;
  background: linear-gradient(160deg, #4a5057, #2c3136 42%, #23272b);
  border-radius: 1.9% 1.9% 0.8% 0.8%;
  padding: 1.7% 1.7% 2.3%;
  box-shadow: 0 22px 40px -26px rgba(6, 30, 28, 0.7), inset 0 0 0 1px rgba(255, 255, 255, 0.09);
}
.hm-mac__cam {
  position: absolute;
  top: 0.7%;
  left: 50%;
  transform: translateX(-50%);
  width: 0.7%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #14171a;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);
}
.hm-mac__screen {
  position: relative;
  background: #fff;
  border-radius: 0.5%;
  overflow: hidden;
  aspect-ratio: 16 / 9.4;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35);
}
.hm-mac__chin {
  text-align: center;
  color: #9aa2a9;
  font-size: calc(14 * var(--hm-u));
  letter-spacing: 0.18em;
  font-weight: 800;
  margin: 0.9% 0 0;
  text-transform: uppercase;
  user-select: none;
}
.hm-mac__base {
  height: calc(17 * var(--hm-u));
  margin: 0 auto;
  width: 112%;
  transform: translateX(-5.3%);
  background: linear-gradient(180deg, #b9bfc6, #8d949c 45%, #6d747b);
  border-radius: 0 0 9px 9px;
  position: relative;
  box-shadow: 0 10px 16px -10px rgba(6, 30, 28, 0.55);
}
.hm-mac__notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 14%;
  height: 45%;
  background: #7a8189;
  border-radius: 0 0 6px 6px;
}

/* ============ Planning ============ */
.hm-plan {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #33343d;
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
.hm-plan__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(8 * var(--hm-u));
  padding: calc(7 * var(--hm-u)) calc(12 * var(--hm-u));
  border-bottom: 1px solid var(--hm-line);
  flex: 0 0 auto;
}
.hm-plan__logo {
  display: block;
  height: calc(30 * var(--hm-u));
  width: calc(111 * var(--hm-u));
  font-family: "Nunito Variable", Nunito, system-ui, sans-serif;
}

/* el mes entre sus flechas, encima de las habitaciones (.month-row del panel: 58 px, fondo
   de la cabecera de dias y las esquinas de abajo redondeadas como las filas) */
.hm-month {
  display: flex;
  gap: calc(2 * var(--hm-u));
  height: calc(58 * var(--hm-u));
}
.hm-month__txt {
  flex: 1 1 auto;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--hm-day-bg);
  color: var(--hm-day-fg);
  font-size: calc(18 * var(--hm-u));
  font-weight: 600;
  white-space: nowrap;
}
.hm-nav {
  flex: 0 0 calc(30 * var(--hm-u));
  border: 0;
  border-radius: 0;
  background: var(--hm-day-bg);
  color: var(--hm-day-fg);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hm-nav--izq {
  border-radius: 0 0 0 calc(10 * var(--hm-u));
}
.hm-nav--der {
  border-radius: 0 0 calc(10 * var(--hm-u)) 0;
}
.hm-nav:hover {
  background: var(--hm-we-bg);
}
.hm-nav:focus-visible {
  outline: 2px solid #fff;
  outline-offset: -4px;
}
.hm-nav svg {
  width: calc(9 * var(--hm-u));
  height: calc(15 * var(--hm-u));
  fill: none;
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hm-plan__body {
  position: relative;
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
}

.hm-rooms {
  flex: 0 0 auto;
  width: calc(150 * var(--hm-u));
  border-right: 1px solid var(--hm-line);
  background: #fff;
  z-index: 3;
}
/* 68 + 2 de margen = 70, el paso de la rejilla, como .room del panel */
.hm-room {
  height: calc(68 * var(--hm-u));
  border-bottom: 1px solid var(--hm-line);
  background: var(--hm-room-bg);
  border-radius: 0 calc(10 * var(--hm-u)) calc(10 * var(--hm-u)) 0;
  margin-bottom: calc(2 * var(--hm-u));
  padding: calc(5 * var(--hm-u)) calc(8 * var(--hm-u));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  overflow: hidden;
}
.hm-room b {
  font-size: calc(35 * var(--hm-u));
  font-weight: 400;
  line-height: 0.92;
  color: #1f2c2a;
}
.hm-room span {
  font-size: calc(17 * var(--hm-u));
  font-weight: 400;
  color: #4a605d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.hm-track {
  flex: 1 1 auto;
  overflow: hidden;
  position: relative;
  cursor: grab;
  touch-action: pan-y;
}
.hm-track.is-drag {
  cursor: grabbing;
}
.hm-strip {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  will-change: transform;
}
.hm-strip.is-anim {
  transition: transform 0.35s ease;
}

.hm-dayhead {
  position: absolute;
  top: 0;
  width: calc(78 * var(--hm-u));
  text-align: center;
}
.hm-date {
  height: calc(58 * var(--hm-u));
  width: 100%;
  background: var(--hm-day-bg);
  color: var(--hm-day-fg);
  border-radius: 0 0 calc(10 * var(--hm-u)) calc(10 * var(--hm-u));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hm-date--we {
  background: var(--hm-we-bg);
  color: var(--hm-we-fg);
}
.hm-date--hoy {
  background: var(--hm-today-head);
  color: var(--hm-today-head-fg);
  border: 1px solid var(--hm-today-edge);
  border-top: none;
  box-sizing: border-box;
}
.hm-date b {
  font-size: calc(30 * var(--hm-u));
  font-weight: 400;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.hm-date span {
  font-size: calc(16 * var(--hm-u));
  font-weight: 400;
  margin-top: calc(-3 * var(--hm-u));
}

.hm-cell {
  position: absolute;
  width: calc(78 * var(--hm-u));
  height: calc(70 * var(--hm-u));
  border-right: 1px solid var(--hm-line);
  border-bottom: 1px solid var(--hm-line);
  background: #fff;
}
.hm-cell--hoy {
  background: var(--hm-today);
}

/* barras absolutas sobre la rejilla, como en el producto */
.hm-bar {
  position: absolute;
  border: 0;
  border-radius: calc(10 * var(--hm-u));
  padding: calc(2 * var(--hm-u)) calc(5 * var(--hm-u));
  font: inherit;
  font-size: calc(14 * var(--hm-u));
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  background: var(--hm-future-bg);
  color: var(--hm-future-fg);
  transition: filter 0.12s ease, box-shadow 0.12s ease;
}
.hm-bar:hover {
  filter: brightness(1.1);
}
.hm-bar:focus-visible {
  outline: 2px solid var(--hm-today-edge);
  outline-offset: 1px;
}
.hm-bar[aria-expanded="true"] {
  box-shadow: 0 0 0 2px var(--hm-today-edge);
}
.hm-bar__top {
  display: flex;
  align-items: baseline;
  gap: calc(5 * var(--hm-u));
  width: 100%;
}
.hm-bar__owner {
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hm-bar__reg {
  font-weight: 800;
  opacity: 0.72;
  font-size: calc(12 * var(--hm-u));
  flex: 0 0 auto;
}
.hm-bar--past {
  background: var(--hm-past-bg);
  color: var(--hm-past-fg);
}
.hm-bar--pre {
  background: var(--hm-pre-bg);
  color: var(--hm-pre-fg);
}
.hm-bar--in {
  background: var(--hm-house-bg);
  color: var(--hm-house-fg);
}
.hm-bar--in:hover {
  filter: brightness(1.65);
}
/* las barras de la MISMA reserva se aclaran juntas, como en el planning */
.hm-bar.is-sib {
  filter: brightness(1.1);
}
.hm-bar--in.is-sib {
  filter: brightness(1.65);
}
/* iconos abajo a la derecha de la barra, igual que .bar-icons del panel */
.hm-bar__ic {
  display: flex;
  gap: calc(2 * var(--hm-u));
  justify-content: flex-end;
  opacity: 0.85;
  position: absolute;
  bottom: calc(2 * var(--hm-u));
  right: calc(4 * var(--hm-u));
}
.hm-bar__ic svg {
  width: calc(15 * var(--hm-u));
  height: calc(15 * var(--hm-u));
  display: block;
}
.hm-bar__ic .hm-ota {
  width: calc(16 * var(--hm-u));
  height: calc(16 * var(--hm-u));
  border-radius: calc(3 * var(--hm-u));
}

/* ============ Modo mover reservas, como en el panel ============ */
.hm-plan.is-mover .hm-bar {
  cursor: grab;
}
.hm-bar.is-origen {
  opacity: 0.35;
}
/* al entrar, las barras "cobran vida" un instante; al salir, se asientan */
@keyframes hm-sacude {
  0% {
    transform: rotate(0deg) scale(1);
  }
  20% {
    transform: rotate(-1.1deg) scale(1.015);
  }
  45% {
    transform: rotate(1.1deg) scale(1.015);
  }
  70% {
    transform: rotate(-0.6deg) scale(1.008);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
.hm-plan.is-despierta .hm-bar {
  animation: hm-sacude 0.55s ease-in-out;
}
.hm-plan.is-despierta .hm-bar:nth-child(even) {
  animation-delay: 0.09s;
}
@keyframes hm-asienta {
  0% {
    transform: scale(1);
  }
  45% {
    transform: scale(0.965);
  }
  100% {
    transform: scale(1);
  }
}
.hm-plan.is-duerme .hm-bar {
  animation: hm-asienta 0.4s ease-out;
}

/* la silueta: verde si cabe, roja si no */
.hm-bar.hm-ghost {
  pointer-events: none;
  z-index: 5;
  box-sizing: border-box;
  align-items: center;
  font-size: calc(12 * var(--hm-u));
  font-weight: 700;
  animation: hm-pop 0.18s ease-out;
}
.hm-ghost.is-ok {
  background: rgba(20, 184, 166, 0.45);
  border: calc(2 * var(--hm-u)) dashed #14b8a6;
  color: #06413b;
}
.hm-ghost.is-ko {
  background: rgba(194, 85, 46, 0.35);
  border: calc(2 * var(--hm-u)) dashed #bb5835;
  color: #7a2407;
}
.hm-ghost__lbl {
  white-space: nowrap;
  overflow: hidden;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
}
@keyframes hm-pop {
  0% {
    transform: scale(0.94);
  }
  60% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1);
  }
}

/* el boton redondo */
.hm-mover {
  position: absolute;
  right: calc(16 * var(--hm-u));
  bottom: calc(14 * var(--hm-u));
  z-index: 6;
  width: calc(40 * var(--hm-u));
  height: calc(40 * var(--hm-u));
  border: 0;
  padding: 0;
  border-radius: 50%;
  background: var(--hm-we-bg);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 calc(8 * var(--hm-u)) calc(2 * var(--hm-u)) rgba(0, 0, 0, 0.12);
  transition: background 0.14s, color 0.14s;
}
.hm-mover svg {
  width: calc(18 * var(--hm-u));
  height: calc(18 * var(--hm-u));
  fill: currentColor;
}
.hm-mover:hover {
  background: #fff;
  color: var(--hm-we-bg);
}
.hm-mover.is-on {
  background: #14b8a6;
  color: #06413b;
}
.hm-mover:focus-visible {
  outline: 2px solid var(--hm-today-edge);
  outline-offset: 2px;
}

/* la banda: en el panel va fija arriba de la pagina; aqui, sobre la barra */
.hm-banda {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: calc(44 * var(--hm-u));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(12 * var(--hm-u));
  padding: 0 calc(14 * var(--hm-u));
  background: rgba(204, 251, 241, 0.85);
  color: #06413b;
  font-size: calc(13.5 * var(--hm-u));
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 1px calc(6 * var(--hm-u)) rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(94, 234, 212, 0.85);
  animation: hm-aparece 0.18s ease-out;
}
.hm-banda span {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hm-banda__ic {
  flex: 0 0 auto;
  width: calc(14 * var(--hm-u));
  height: calc(14 * var(--hm-u));
  fill: currentColor;
}
.hm-banda__salir {
  flex: 0 0 auto;
  font: inherit;
  font-size: calc(12.5 * var(--hm-u));
  font-weight: 700;
  line-height: 1.4;
  border: 1px solid #06413b;
  background: rgba(255, 255, 255, 0.9);
  color: #06413b;
  border-radius: calc(6 * var(--hm-u));
  padding: calc(2 * var(--hm-u)) calc(12 * var(--hm-u));
  cursor: pointer;
}
.hm-banda__salir:hover {
  background: #06413b;
  color: #fff;
}

/* el aviso de exito, como los toasts del panel */
.hm-aviso {
  position: absolute;
  top: calc(8 * var(--hm-u));
  right: calc(12 * var(--hm-u));
  z-index: 8;
  margin: 0;
  max-width: min(70%, calc(350 * var(--hm-u)));
  padding: calc(10 * var(--hm-u));
  border: 1px solid #e2dfdd;
  border-radius: calc(7 * var(--hm-u));
  background: #d4edda;
  color: #155724;
  font-size: calc(17 * var(--hm-u));
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  opacity: 0.94;
  box-shadow: 0 calc(4 * var(--hm-u)) calc(12 * var(--hm-u)) rgba(0, 0, 0, 0.1);
  pointer-events: none;
  animation: hm-aparece 0.2s ease-out;
}
@keyframes hm-aparece {
  from {
    opacity: 0;
    transform: translateY(calc(-6 * var(--hm-u)));
  }
}

/* el "dedo" de la demo: un toque, o apretado mientras arrastra */
.hm-dedo {
  position: absolute;
  z-index: 12;
  width: calc(44 * var(--hm-u));
  height: calc(44 * var(--hm-u));
  margin: calc(-22 * var(--hm-u)) 0 0 calc(-22 * var(--hm-u));
  border-radius: 50%;
  background: rgba(38, 50, 63, 0.28);
  box-shadow: 0 0 0 calc(2 * var(--hm-u)) rgba(255, 255, 255, 0.85), 0 calc(3 * var(--hm-u)) calc(10 * var(--hm-u)) rgba(0, 0, 0, 0.25);
  pointer-events: none;
  animation: hm-toque 0.46s ease-out forwards;
}
.hm-dedo.is-apretado {
  animation: hm-apreta 0.3s ease-out forwards;
}
.hm-dedo.is-suelta {
  animation: hm-suelta 0.26s ease-out forwards;
}
@keyframes hm-toque {
  0% {
    opacity: 0;
    transform: scale(1.35);
  }
  35% {
    opacity: 1;
    transform: scale(1);
  }
  60% {
    transform: scale(0.82);
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}
@keyframes hm-apreta {
  0% {
    opacity: 0;
    transform: scale(1.35);
  }
  100% {
    opacity: 1;
    transform: scale(0.86);
  }
}
@keyframes hm-suelta {
  0% {
    opacity: 1;
    transform: scale(0.86);
  }
  100% {
    opacity: 0;
    transform: scale(1.15);
  }
}

/* ============ Ficha de la reserva ============ */
.hm-sheet {
  position: absolute;
  z-index: 9;
  width: min(76%, calc(490 * var(--hm-u)));
  background: #fff;
  border-radius: calc(8 * var(--hm-u));
  box-shadow: 0 20px 38px -14px rgba(10, 30, 28, 0.55), 0 0 0 1px rgba(19, 37, 35, 0.12);
  opacity: 0;
  /* --hm-fit: la encoge si no cabe entera en la pantalla (portatil pequenno) */
  transform: scale(calc(var(--hm-fit, 1) * 0.97));
  transform-origin: 50% 0;
  pointer-events: none;
  transition: opacity 0.12s ease, transform 0.12s ease;
  overflow: hidden;
}
.hm-sheet[data-open="true"] {
  opacity: 1;
  transform: scale(var(--hm-fit, 1));
  pointer-events: auto;
}
.hm-sheet__head {
  display: flex;
  align-items: center;
  gap: calc(8 * var(--hm-u));
  padding: calc(9 * var(--hm-u)) calc(11 * var(--hm-u));
  border-bottom: 1px solid var(--hm-line);
}
.hm-sheet__x {
  font: inherit;
  border: 0;
  background: none;
  cursor: pointer;
  color: #8a9997;
  font-size: calc(17 * var(--hm-u));
  line-height: 1;
  padding: 0;
  flex: 0 0 auto;
}
.hm-sheet__x:hover {
  color: #1f2c2a;
}
.hm-sheet__title {
  flex: 1 1 auto;
  text-align: center;
  font-weight: 800;
  font-size: calc(17 * var(--hm-u));
  color: #1f2c2a;
  margin: 0;
  letter-spacing: -0.01em;
}
.hm-minibtn {
  font-weight: 700;
  font-size: calc(12 * var(--hm-u));
  line-height: 1;
  padding: calc(6 * var(--hm-u)) calc(8 * var(--hm-u));
  border-radius: calc(6 * var(--hm-u));
  color: #fff;
  flex: 0 0 auto;
  opacity: 0.92;
  white-space: nowrap;
}
.hm-minibtn--save {
  background: var(--hm-teal);
}
.hm-minibtn--del {
  background: #bc475e;
}

.hm-sheet__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(8 * var(--hm-u)) calc(9 * var(--hm-u));
  padding: calc(11 * var(--hm-u));
}
.hm-fld {
  display: flex;
  flex-direction: column;
  gap: calc(3 * var(--hm-u));
  min-width: 0;
}
.hm-fld--wide {
  grid-column: span 2;
}
.hm-fld label {
  font-size: calc(14 * var(--hm-u));
  color: var(--hm-teal);
  font-weight: 600;
  line-height: 1;
}
.hm-inp {
  border: 1px solid var(--hm-teal);
  background: #fff;
  border-radius: calc(4 * var(--hm-u));
  padding: calc(6 * var(--hm-u)) calc(7 * var(--hm-u));
  font-size: calc(14 * var(--hm-u));
  color: #1f2c2a;
  font-weight: 600;
  line-height: 1.15;
  box-shadow: 0 8px 8px -7px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hm-inp--ph {
  display: flex;
  align-items: center;
}
.hm-inp--ph span {
  display: block;
  height: calc(8 * var(--hm-u));
  border-radius: 99px;
  background: linear-gradient(90deg, #dee7e5, #eaf0ef);
}
.hm-nights {
  display: flex;
  align-items: center;
  gap: calc(5 * var(--hm-u));
}
.hm-nights i {
  width: calc(22 * var(--hm-u));
  height: calc(22 * var(--hm-u));
  border-radius: calc(4 * var(--hm-u));
  background: var(--hm-teal);
  color: #fff;
  font-style: normal;
  font-weight: 800;
  font-size: calc(13 * var(--hm-u));
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}
.hm-nights b {
  font-size: calc(17 * var(--hm-u));
  font-weight: 700;
  color: #1f2c2a;
  min-width: calc(16 * var(--hm-u));
  text-align: center;
}

.hm-acts {
  display: flex;
  flex-wrap: wrap;
  gap: calc(5 * var(--hm-u));
  padding: 0 calc(11 * var(--hm-u)) calc(9 * var(--hm-u));
}
.hm-chip {
  display: inline-flex;
  align-items: center;
  gap: calc(4 * var(--hm-u));
  border: 1px solid var(--hm-teal);
  color: var(--hm-teal);
  background: #fff;
  border-radius: 99px;
  padding: calc(4 * var(--hm-u)) calc(8 * var(--hm-u));
  font-size: calc(12 * var(--hm-u));
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}
.hm-chip--wa {
  border-color: #0ec043;
  color: #0b8a31;
}
.hm-ses {
  display: flex;
  align-items: center;
  gap: calc(6 * var(--hm-u));
  margin: 0 calc(11 * var(--hm-u)) calc(10 * var(--hm-u));
  padding: calc(6 * var(--hm-u)) calc(8 * var(--hm-u));
  border-radius: calc(5 * var(--hm-u));
  background: #edf3f1;
  font-size: calc(12 * var(--hm-u));
  color: #334744;
  font-weight: 600;
}
.hm-ses b {
  color: #1f2c2a;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
}
.hm-ses i {
  width: calc(13 * var(--hm-u));
  height: calc(13 * var(--hm-u));
  border-radius: 50%;
  background: #15803d;
  color: #fff;
  font-style: normal;
  font-size: calc(9 * var(--hm-u));
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  font-weight: 800;
}
.hm-sheet__cta {
  background: var(--hm-mint);
  padding: calc(10 * var(--hm-u)) calc(11 * var(--hm-u));
  display: flex;
  align-items: center;
  gap: calc(9 * var(--hm-u));
  flex-wrap: wrap;
}
.hm-sheet__cta p {
  margin: 0;
  flex: 1 1 150px;
  font-size: calc(13.5 * var(--hm-u));
  line-height: 1.35;
  color: var(--hm-teal-deep);
  font-weight: 600;
}
.hm-sheet__cta b {
  font-weight: 800;
}
.hm-btn {
  font-weight: 800;
  font-size: calc(13.5 * var(--hm-u));
  border-radius: calc(7 * var(--hm-u));
  padding: calc(8 * var(--hm-u)) calc(12 * var(--hm-u));
  background: var(--hm-teal);
  color: #fff;
  flex: 0 0 auto;
  white-space: nowrap;
}

/* en la barra de arriba, a la derecha: abajo esta el boton de mover reservas */
.hm-tag {
  flex: 0 0 auto;
  font-size: calc(11 * var(--hm-u));
  font-weight: 800;
  letter-spacing: 0.04em;
  white-space: nowrap;
  color: #8a9997;
  background: #f1f5f4;
  padding: calc(3 * var(--hm-u)) calc(8 * var(--hm-u));
  border-radius: calc(5 * var(--hm-u));
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .hm-bar,
  .hm-sheet,
  .hm-strip.is-anim {
    transition: none;
  }
  .hm-plan.is-despierta .hm-bar,
  .hm-plan.is-duerme .hm-bar,
  .hm-bar.hm-ghost,
  .hm-banda,
  .hm-aviso {
    animation: none;
  }
}
</style>
