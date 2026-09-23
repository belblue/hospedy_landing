<!--
  Maqueta del planning de Hospedy dentro de un portatil dibujado en CSS.
  Datos de ejemplo, fijos: NO habla con ninguna API.

  La piel (colores, alturas, tipografias) esta copiada del planning real para que
  la web ensene el producto y no una ilustracion. Todas las medidas del producto
  se multiplican por --hm-k, que se calcula en JavaScript a partir del ancho real
  de la pantalla del portatil: asi el componente conserva las proporciones en
  cualquier hueco. Ese numero vive en JS a proposito, porque getPropertyValue
  devuelve los calc() sin resolver y parsearlos da NaN.

  La rueda vertical NO se captura: quien esta leyendo la pagina sigue bajando.
  Los dias se recorren arrastrando, con Mayus+rueda, con rueda horizontal o con
  las flechas de la cabecera.
-->
<template>
  <div ref="macEl" class="hm-mac" :style="{ '--hm-k': k }">
    <div class="hm-mac__lid">
      <span class="hm-mac__cam" aria-hidden="true" />

      <div ref="screenEl" class="hm-mac__screen">
        <div class="hm-plan">
          <div class="hm-plan__bar">
            <p class="hm-plan__month">Octubre <span>2026</span></p>
            <div class="hm-plan__navs">
              <button type="button" class="hm-nav" aria-label="Días anteriores" @click="paso(-3)">&lsaquo;</button>
              <button type="button" class="hm-nav" aria-label="Días siguientes" @click="paso(3)">&rsaquo;</button>
            </div>
          </div>

          <div ref="bodyEl" class="hm-plan__body">
            <!-- columna fija de habitaciones -->
            <div class="hm-rooms">
              <div class="hm-rooms__head" />
              <div v-for="h in habsVisibles" :key="h.n" class="hm-room">
                <b>{{ h.n }}</b><span>{{ h.t }}</span>
              </div>
            </div>

            <!-- pista desplazable -->
            <div
              ref="trackEl"
              class="hm-track"
              :class="{ 'is-drag': arrastrando }"
              @wheel="alRodar"
              @pointerdown="alPulsar"
              @pointermove="alMover"
              @pointerup="alSoltar"
              @pointercancel="alSoltar"
            >
              <div class="hm-strip" :style="estiloStrip">
                <div v-for="d in dias" :key="'d' + d.i" class="hm-dayhead" :style="{ left: d.x + 'px' }">
                  <div class="hm-date" :class="{ 'hm-date--we': d.finde, 'hm-date--hoy': d.hoy }">
                    <b>{{ d.n }}</b><span>{{ d.sem }}</span>
                  </div>
                </div>

                <div
                  v-for="c in celdas"
                  :key="c.k"
                  class="hm-cell"
                  :class="{ 'hm-cell--hoy': c.hoy }"
                  :style="{ left: c.x + 'px', top: c.y + 'px' }"
                />

                <button
                  v-for="b in barras"
                  :key="b.id"
                  type="button"
                  class="hm-bar"
                  :class="['hm-bar--' + b.e, { 'is-sib': b.g && b.g === grupoActivo }]"
                  :style="b.css"
                  :aria-label="b.aria"
                  :aria-expanded="abierta === b.id ? 'true' : 'false'"
                  @click.stop="abrir(b)"
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
              </div>
            </div>

            <!-- ficha reducida de la reserva: misma anatomia que la del panel -->
            <div
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
                  <button type="button" class="hm-sheet__x" aria-label="Cerrar" @click.stop="cerrar()">&#10005;</button>
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

            <span class="hm-tag">Datos de ejemplo</span>
          </div>
        </div>
      </div>

      <p class="hm-mac__chin">Hospedy</p>
    </div>
    <div class="hm-mac__base"><span class="hm-mac__notch" /></div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";

/* ---- Medidas reales del planning (src/views/Calendar.vue del panel) ---- */
const M_ROW = 70;   /* alto de fila */
const M_HEAD = 58;  /* alto de la cabecera de dia */
const M_COL = 78;   /* ancho de columna de dia */
const M_ROOMW = 150; /* ancho de la columna de habitaciones */

const DIAS_TOTAL = 21;
const DIA_INI = 5;
const HOY = 9;
const SEM = ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"];

const HABS = [
  { n: "101", t: "Doble" },
  { n: "102", t: "Doble" },
  { n: "103", t: "Familiar" },
  { n: "104", t: "Doble" },
  { n: "201", t: "Suite" },
  { n: "202", t: "Individual" },
  { n: "203", t: "Familiar" },
];

/* g = grupo: dos barras con el mismo grupo son LA MISMA reserva repartida en dos
   habitaciones, que es como las pinta el planning real (una barra por habitacion) */
const RESERVAS = [
  { f: 0, c: 1, s: 4, q: "A. Ferrer", r: "AD", e: "past", ota: "bk", fact: true },
  { f: 0, c: 6, s: 3, q: "Grupo Solana", r: "MP", e: "in", g: "sol", fact: true },
  { f: 1, c: 6, s: 3, q: "Grupo Solana", r: "MP", e: "in", g: "sol", fact: true },
  { f: 1, c: 2, s: 3, q: "L. Prieto", r: "AD", e: "past", ota: "ex" },
  { f: 2, c: 1, s: 3, q: "Fam. Olmedo", r: "PC", e: "past", fact: true },
  { f: 2, c: 7, s: 2, q: "N. Barreiro", r: "AD", e: "in", ota: "bk" },
  { f: 2, c: 14, s: 4, q: "D. Santos", r: "AD", e: "future", ota: "ex" },
  { f: 3, c: 2, s: 3, q: "C. Vilalta", r: "MP", e: "past" },
  { f: 3, c: 8, s: 4, q: "M. Aguirre", r: "AD", e: "future", ota: "bk" },
  { f: 4, c: 4, s: 5, q: "Fam. Requena", r: "PC", e: "pre" },
  { f: 4, c: 13, s: 3, q: "O. Lamas", r: "AD", e: "future", ota: "ex" },
  { f: 5, c: 3, s: 2, q: "J. Mendoza", r: "AD", e: "past", fact: true },
  { f: 5, c: 9, s: 6, q: "S. Arenas", r: "AD", e: "in" },
  { f: 5, c: 17, s: 3, q: "T. Navarro", r: "MP", e: "future", ota: "bk" },
  { f: 6, c: 1, s: 4, q: "P. Cuesta", r: "AD", e: "past", ota: "ex", fact: true },
  { f: 6, c: 10, s: 5, q: "Grupo Bilbao", r: "MP", e: "future", ota: "bk" },
];

const ET = { past: "Salió", future: "Confirmada", pre: "Auto check-in enviado", in: "En casa" };

const macEl = ref(null);
const screenEl = ref(null);
const bodyEl = ref(null);
const trackEl = ref(null);
const sheetEl = ref(null);

const k = ref(0.66);
const filas = ref(HABS.length);
const off = ref(0);
const maxOff = ref(0);
const arrastrando = ref(false);
const grupoActivo = ref(null);
const abierta = ref(null);
const ficha = ref(null);
const pos = ref({ left: "0px", top: "0px" });

const COL = computed(() => M_COL * k.value);
const ROW = computed(() => M_ROW * k.value);
const HEAD = computed(() => M_HEAD * k.value);
const ROOMW = computed(() => M_ROOMW * k.value);

const habsVisibles = computed(() => HABS.slice(0, filas.value));
const estiloStrip = computed(() => ({
  width: DIAS_TOTAL * COL.value + "px",
  transform: "translateX(" + -off.value + "px)",
}));

const dias = computed(() => {
  const out = [];
  for (let i = 0; i < DIAS_TOTAL; i++) {
    const n = DIA_INI + i;
    const dow = (n + 2) % 7;
    out.push({ i, n, x: i * COL.value, sem: SEM[i % 7], finde: dow === 5 || dow === 6, hoy: n === HOY });
  }
  return out;
});

const celdas = computed(() => {
  const out = [];
  for (let i = 0; i < DIAS_TOTAL; i++) {
    for (let f = 0; f < filas.value; f++) {
      out.push({ k: i + "-" + f, x: i * COL.value, y: HEAD.value + f * ROW.value, hoy: DIA_INI + i === HOY });
    }
  }
  return out;
});

const barras = computed(() =>
  RESERVAS.filter((r) => r.f < filas.value).map((r, i) => ({
    ...r,
    id: r.f + "-" + r.c,
    idx: i,
    ancho: r.s * COL.value - 5,
    css: {
      left: (r.c - 1) * COL.value + 2 + "px",
      top: HEAD.value + r.f * ROW.value + 3 + "px",
      width: r.s * COL.value - 5 + "px",
      height: ROW.value - 7 + "px",
    },
    aria: r.q + ", habitación " + HABS[r.f].n + ", " + r.s + " noches, " + ET[r.e],
  }))
);

const barraAbierta = computed(() => barras.value.find((b) => b.id === abierta.value) || null);

/* --- medida: JS es el duenno del factor de escala y el CSS lo lee --- */
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
  const caben = Math.floor((body.clientHeight - HEAD.value) / ROW.value);
  filas.value = Math.max(3, Math.min(HABS.length, caben));
  await nextTick();

  const track = trackEl.value;
  if (!track) return;
  maxOff.value = Math.max(0, DIAS_TOTAL * COL.value - track.clientWidth);
  if (off.value > maxOff.value) off.value = maxOff.value;
}

function desplazar(dx) {
  off.value = Math.max(0, Math.min(maxOff.value, off.value + dx));
}

function paso(n) {
  cerrar();
  desplazar(COL.value * n);
}

/* la rueda vertical se deja a la pagina; solo horizontal o con Mayus */
function alRodar(e) {
  const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
  if (!dx) return;
  e.preventDefault();
  cerrar();
  desplazar(dx);
}

let pulsado = false;
let x0 = 0;
let off0 = 0;

function alPulsar(e) {
  if (e.target.closest(".hm-bar")) return;
  e.preventDefault(); /* sin esto, arrastrar selecciona los dias de la cabecera */
  pulsado = true;
  arrastrando.value = true;
  x0 = e.clientX;
  off0 = off.value;
  trackEl.value.setPointerCapture(e.pointerId);
}

function alMover(e) {
  if (!pulsado) return;
  const d = e.clientX - x0;
  if (Math.abs(d) > 3) cerrar();
  off.value = Math.max(0, Math.min(maxOff.value, off0 - d));
}

function alSoltar() {
  pulsado = false;
  arrastrando.value = false;
}

function cerrar() {
  abierta.value = null;
  ficha.value = null;
}

function dd(d) {
  return (d < 10 ? "0" : "") + d + "/10/2026";
}

function abrir(b) {
  if (abierta.value === b.id) {
    cerrar();
    return;
  }
  const hermanas = b.g ? RESERVAS.filter((x) => x.g === b.g) : [b];
  const ini = DIA_INI + b.c - 1;
  abierta.value = b.id;
  ficha.value = {
    num: 4100 + b.c * 7 + b.f,
    noches: b.s,
    entrada: dd(ini),
    salida: dd(ini + b.s),
    etiqHab: hermanas.length > 1 ? "Habitaciones" : "Habitación",
    hab:
      hermanas.length > 1
        ? hermanas.map((x) => HABS[x.f].n).join(" + ") + " · " + hermanas.length + " unidades"
        : HABS[b.f].n + " · " + HABS[b.f].t,
    titular: b.q,
    ses: "SES-2026-" + (4000 + b.c * 13 + b.f * 7),
  };
  nextTick(situar);
}

/* La ficha se coloca con los numeros del modelo, no con getBoundingClientRect:
   asi es inmune a cualquier transform de los ancestros (AOS, hover, zoom). */
function situar() {
  const body = bodyEl.value;
  const sheet = sheetEl.value;
  const b = barraAbierta.value;
  if (!body || !sheet || !b) return;

  const w = sheet.offsetWidth;
  const h = sheet.offsetHeight;
  const bx = ROOMW.value + (b.c - 1) * COL.value + 2 - off.value;
  const by = HEAD.value + b.f * ROW.value + 3;

  let x = bx + b.ancho / 2 - w / 2;
  x = Math.max(6, Math.min(x, body.clientWidth - w - 6));

  let y = by - h - 6;
  if (y < 4) y = by + (ROW.value - 7) + 6;
  y = Math.max(4, Math.min(y, body.clientHeight - h - 4));

  pos.value = { left: Math.round(x) + "px", top: Math.round(y) + "px" };
}

function fueraDe(e) {
  if (!abierta.value) return;
  if (sheetEl.value && sheetEl.value.contains(e.target)) return;
  if (e.target.closest && e.target.closest(".hm-bar")) return;
  cerrar();
}

function alTeclear(e) {
  if (e.key === "Escape" && abierta.value) cerrar();
}

let ro = null;

onMounted(() => {
  medir();
  ro = new ResizeObserver(() => medir());
  ro.observe(macEl.value);
  document.addEventListener("click", fueraDe);
  document.addEventListener("keydown", alTeclear);
  window.addEventListener("scroll", cerrar, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
});

onBeforeUnmount(() => {
  if (ro) ro.disconnect();
  document.removeEventListener("click", fueraDe);
  document.removeEventListener("keydown", alTeclear);
  window.removeEventListener("scroll", cerrar);
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
  --hm-today: #edf3f1;
  --hm-today-edge: #14716a;
  --hm-room-bg: #e4ecea;
  --hm-day-bg: #f4f7f6;
  --hm-day-fg: #33343d;
  --hm-we-bg: #e8efee;
  --hm-we-fg: #14716a;
  /* marca de la landing (tailwind.config.js) */
  --hm-teal: #0f766e;
  --hm-teal-deep: #0b5a54;
  --hm-mint: #ccfbf1;

  width: 100%;
  font-family: Nunito, system-ui, -apple-system, sans-serif;
  line-height: 1.55;
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
  font-size: calc(14px * var(--hm-k));
  letter-spacing: 0.18em;
  font-weight: 800;
  margin: 0.9% 0 0;
  text-transform: uppercase;
  user-select: none;
}
.hm-mac__base {
  height: calc(17px * var(--hm-k));
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
  gap: 8px;
  padding: calc(7px * var(--hm-k)) calc(12px * var(--hm-k));
  border-bottom: 1px solid var(--hm-line);
  flex: 0 0 auto;
}
.hm-plan__month {
  font-size: calc(19px * var(--hm-k));
  font-weight: 800;
  color: #33343d;
  margin: 0;
  letter-spacing: -0.01em;
}
.hm-plan__month span {
  color: #8a9997;
  font-weight: 600;
}
.hm-plan__navs {
  display: flex;
  gap: 4px;
}
.hm-nav {
  width: calc(30px * var(--hm-k));
  height: calc(30px * var(--hm-k));
  border-radius: 50%;
  border: 1px solid var(--hm-line);
  background: #fff;
  color: #4a605d;
  cursor: pointer;
  font: inherit;
  font-size: calc(17px * var(--hm-k));
  font-weight: 800;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.hm-nav:hover {
  background: var(--hm-we-bg);
  color: var(--hm-we-fg);
}
.hm-nav:focus-visible {
  outline: 2px solid var(--hm-teal);
  outline-offset: 1px;
}

.hm-plan__body {
  position: relative;
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
}

.hm-rooms {
  flex: 0 0 auto;
  width: calc(150px * var(--hm-k));
  border-right: 1px solid var(--hm-line);
  background: #fff;
  z-index: 3;
}
.hm-rooms__head {
  height: calc(58px * var(--hm-k));
  border-bottom: 1px solid var(--hm-line);
}
.hm-room {
  height: calc(70px * var(--hm-k));
  border-bottom: 1px solid var(--hm-line);
  background: var(--hm-room-bg);
  border-radius: 0 calc(10px * var(--hm-k)) calc(10px * var(--hm-k)) 0;
  margin-bottom: 2px;
  padding: calc(5px * var(--hm-k)) calc(8px * var(--hm-k));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  overflow: hidden;
}
.hm-room b {
  font-size: calc(35px * var(--hm-k));
  font-weight: 400;
  line-height: 0.92;
  color: #1f2c2a;
}
.hm-room span {
  font-size: calc(17px * var(--hm-k));
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

.hm-dayhead {
  position: absolute;
  top: 0;
  width: calc(78px * var(--hm-k));
  text-align: center;
}
.hm-date {
  height: calc(58px * var(--hm-k));
  width: 100%;
  background: var(--hm-day-bg);
  color: var(--hm-day-fg);
  border-radius: 0 0 calc(10px * var(--hm-k)) calc(10px * var(--hm-k));
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
  background: var(--hm-today);
  border: 1px solid var(--hm-today-edge);
  border-top: none;
}
.hm-date b {
  font-size: calc(30px * var(--hm-k));
  font-weight: 400;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.hm-date span {
  font-size: calc(16px * var(--hm-k));
  font-weight: 400;
  margin-top: calc(-3px * var(--hm-k));
  text-transform: lowercase;
}

.hm-cell {
  position: absolute;
  width: calc(78px * var(--hm-k));
  height: calc(70px * var(--hm-k));
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
  border-radius: calc(10px * var(--hm-k));
  padding: calc(2px * var(--hm-k)) calc(5px * var(--hm-k));
  font: inherit;
  font-size: calc(14px * var(--hm-k));
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
  gap: calc(5px * var(--hm-k));
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
  font-size: calc(12px * var(--hm-k));
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
  gap: calc(2px * var(--hm-k));
  justify-content: flex-end;
  opacity: 0.85;
  position: absolute;
  bottom: calc(2px * var(--hm-k));
  right: calc(4px * var(--hm-k));
}
.hm-bar__ic svg {
  width: calc(15px * var(--hm-k));
  height: calc(15px * var(--hm-k));
  display: block;
}
.hm-bar__ic .hm-ota {
  width: calc(16px * var(--hm-k));
  height: calc(16px * var(--hm-k));
  border-radius: calc(3px * var(--hm-k));
}

/* ============ Ficha de la reserva ============ */
.hm-sheet {
  position: absolute;
  z-index: 9;
  width: min(76%, calc(490px * var(--hm-k)));
  background: #fff;
  border-radius: calc(8px * var(--hm-k));
  box-shadow: 0 20px 38px -14px rgba(10, 30, 28, 0.55), 0 0 0 1px rgba(19, 37, 35, 0.12);
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  transition: opacity 0.12s ease, transform 0.12s ease;
  overflow: hidden;
}
.hm-sheet[data-open="true"] {
  opacity: 1;
  transform: none;
  pointer-events: auto;
}
.hm-sheet__head {
  display: flex;
  align-items: center;
  gap: calc(8px * var(--hm-k));
  padding: calc(9px * var(--hm-k)) calc(11px * var(--hm-k));
  border-bottom: 1px solid var(--hm-line);
}
.hm-sheet__x {
  font: inherit;
  border: 0;
  background: none;
  cursor: pointer;
  color: #8a9997;
  font-size: calc(17px * var(--hm-k));
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
  font-size: calc(17px * var(--hm-k));
  color: #1f2c2a;
  margin: 0;
  letter-spacing: -0.01em;
}
.hm-minibtn {
  font-weight: 700;
  font-size: calc(12px * var(--hm-k));
  line-height: 1;
  padding: calc(6px * var(--hm-k)) calc(8px * var(--hm-k));
  border-radius: calc(6px * var(--hm-k));
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
  gap: calc(8px * var(--hm-k)) calc(9px * var(--hm-k));
  padding: calc(11px * var(--hm-k));
}
.hm-fld {
  display: flex;
  flex-direction: column;
  gap: calc(3px * var(--hm-k));
  min-width: 0;
}
.hm-fld--wide {
  grid-column: span 2;
}
.hm-fld label {
  font-size: calc(14px * var(--hm-k));
  color: var(--hm-teal);
  font-weight: 600;
  line-height: 1;
}
.hm-inp {
  border: 1px solid var(--hm-teal);
  background: #fff;
  border-radius: calc(4px * var(--hm-k));
  padding: calc(6px * var(--hm-k)) calc(7px * var(--hm-k));
  font-size: calc(14px * var(--hm-k));
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
  height: calc(8px * var(--hm-k));
  border-radius: 99px;
  background: linear-gradient(90deg, #dee7e5, #eaf0ef);
}
.hm-nights {
  display: flex;
  align-items: center;
  gap: calc(5px * var(--hm-k));
}
.hm-nights i {
  width: calc(22px * var(--hm-k));
  height: calc(22px * var(--hm-k));
  border-radius: calc(4px * var(--hm-k));
  background: var(--hm-teal);
  color: #fff;
  font-style: normal;
  font-weight: 800;
  font-size: calc(13px * var(--hm-k));
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}
.hm-nights b {
  font-size: calc(17px * var(--hm-k));
  font-weight: 700;
  color: #1f2c2a;
  min-width: calc(16px * var(--hm-k));
  text-align: center;
}

.hm-acts {
  display: flex;
  flex-wrap: wrap;
  gap: calc(5px * var(--hm-k));
  padding: 0 calc(11px * var(--hm-k)) calc(9px * var(--hm-k));
}
.hm-chip {
  display: inline-flex;
  align-items: center;
  gap: calc(4px * var(--hm-k));
  border: 1px solid var(--hm-teal);
  color: var(--hm-teal);
  background: #fff;
  border-radius: 99px;
  padding: calc(4px * var(--hm-k)) calc(8px * var(--hm-k));
  font-size: calc(12px * var(--hm-k));
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
  gap: calc(6px * var(--hm-k));
  margin: 0 calc(11px * var(--hm-k)) calc(10px * var(--hm-k));
  padding: calc(6px * var(--hm-k)) calc(8px * var(--hm-k));
  border-radius: calc(5px * var(--hm-k));
  background: #edf3f1;
  font-size: calc(12px * var(--hm-k));
  color: #334744;
  font-weight: 600;
}
.hm-ses b {
  color: #1f2c2a;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
}
.hm-ses i {
  width: calc(13px * var(--hm-k));
  height: calc(13px * var(--hm-k));
  border-radius: 50%;
  background: #15803d;
  color: #fff;
  font-style: normal;
  font-size: calc(9px * var(--hm-k));
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  font-weight: 800;
}
.hm-sheet__cta {
  background: var(--hm-mint);
  padding: calc(10px * var(--hm-k)) calc(11px * var(--hm-k));
  display: flex;
  align-items: center;
  gap: calc(9px * var(--hm-k));
  flex-wrap: wrap;
}
.hm-sheet__cta p {
  margin: 0;
  flex: 1 1 150px;
  font-size: calc(13.5px * var(--hm-k));
  line-height: 1.35;
  color: var(--hm-teal-deep);
  font-weight: 600;
}
.hm-sheet__cta b {
  font-weight: 800;
}
.hm-btn {
  font-weight: 800;
  font-size: calc(13.5px * var(--hm-k));
  border-radius: calc(7px * var(--hm-k));
  padding: calc(8px * var(--hm-k)) calc(12px * var(--hm-k));
  background: var(--hm-teal);
  color: #fff;
  flex: 0 0 auto;
  white-space: nowrap;
}

.hm-tag {
  position: absolute;
  right: calc(9px * var(--hm-k));
  bottom: calc(7px * var(--hm-k));
  z-index: 4;
  font-size: calc(11px * var(--hm-k));
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #8a9997;
  background: rgba(255, 255, 255, 0.86);
  padding: 2px 6px;
  border-radius: 5px;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .hm-bar,
  .hm-sheet {
    transition: none;
  }
}
</style>
