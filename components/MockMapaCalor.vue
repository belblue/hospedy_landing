<!--
  Mapa de calor de la maqueta de Estadisticas: la ocupacion de cada dia del periodo (hasta un
  anno) en un calendario de semanas, de lunes a domingo, como el del panel: los meses arriba,
  la linea de cada mes, mas oscuro cuanto mas lleno y la escala debajo. Al pasar el raton por un
  dia, o tocarlo, sus noches ocupadas; con el teclado, las flechas recorren los dias.

  Dibuja "ancho" px del panel a lo ancho y ocupa el ancho de su caja (--hm-u).
-->
<template>
  <div
    class="hm-mc"
    tabindex="0"
    role="group"
    aria-roledescription="gráfico"
    :aria-label="'Ocupación de cada día del periodo en un calendario. Con las flechas, la de cada día.'"
    @keydown="teclear"
    @blur="activo = null"
  >
    <svg
      ref="svgEl"
      class="hm-mc__svg"
      :viewBox="`0 0 ${ancho} ${ALTO}`"
      aria-hidden="true"
      @pointerdown="marcarTipo"
      @pointermove="alMover"
      @pointerleave="alSalir"
      @click="alTocar"
    >
      <defs>
        <linearGradient :id="idGradiente" x1="0" x2="1" y1="0" y2="0">
          <stop v-for="(c, i) in ESCALA" :key="c" :offset="i / (ESCALA.length - 1)" :stop-color="c" />
        </linearGradient>
      </defs>
      <rect
        v-for="c in geo.celdas"
        :key="c.fecha"
        :x="c.x"
        :y="c.y"
        :width="geo.cw"
        :height="ALTO_CELDA"
        :fill="c.color"
        stroke="#fff"
        stroke-width="1"
      />
      <path v-for="m in geo.meses" :key="'l' + m.n" class="hm-mc__mes" :d="m.d" />
      <template v-for="m in geo.meses" :key="'t' + m.n">
        <text v-if="m.etiqueta" class="hm-mc__texto" :x="m.x" :y="ARRIBA - 8">{{ m.etiqueta }}</text>
      </template>
      <text v-for="(d, r) in DIAS" :key="'d' + r" class="hm-mc__texto" :x="IZQUIERDA - 8" :y="ARRIBA + (r + 0.5) * ALTO_CELDA + 4" text-anchor="end">{{ d }}</text>
      <rect
        v-if="celdaActiva"
        class="hm-mc__activa"
        :x="celdaActiva.x"
        :y="celdaActiva.y"
        :width="geo.cw"
        :height="ALTO_CELDA"
      />
      <g :transform="`translate(${ancho / 2} ${ALTO - 18})`">
        <text class="hm-mc__texto" :x="-62" y="10" text-anchor="end">0 %</text>
        <rect x="-55" y="0" width="110" height="12" :fill="`url(#${idGradiente})`" />
        <text class="hm-mc__texto" :x="62" y="10">{{ geo.maximo }} %</text>
      </g>
    </svg>
    <div v-if="celdaActiva" class="hm-mc__tip" :style="estiloTip" aria-hidden="true">
      {{ fechaCorta(celdaActiva.fecha) }}: <strong>{{ plural(celdaActiva.noches) }}</strong> · {{ pct(celdaActiva.ocupacion) }}
    </div>
    <p class="hm-mc__lector" aria-live="polite">
      <template v-if="celdaActiva">{{ fechaCorta(celdaActiva.fecha) }}: {{ plural(celdaActiva.noches) }}, {{ pct(celdaActiva.ocupacion) }}</template>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Dia {
  fecha: string
  noches: number
  ocupacion: number
}

const props = defineProps<{
  dias: Dia[]
  ancho: number
  // en el movil, solo uno de cada dos meses arriba: no caben
  estrecho?: boolean
}>()

/* la leyenda, justo debajo de la semana: el panel deja 60 px en blanco entre las dos */
const ALTO = 172
const ARRIBA = 28
const IZQUIERDA = 44
const DERECHA = 12
const ALTO_CELDA = 15
const DIAS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
/* del tinte casi blanco al teal oscuro del panel */
const ESCALA = ['#f0fdfa', '#2dd4bf', '#0f766e', '#115e59']

const idGradiente = 'hm-mc-escala-' + Math.random().toString(36).slice(2, 8)
const svgEl = ref<SVGSVGElement | null>(null)
const activo = ref<number | null>(null)
let tipo = 'mouse'
function marcarTipo(e: PointerEvent) {
  tipo = e.pointerType
}

const fmtUno = new Intl.NumberFormat('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
const pct = (v: number) => fmtUno.format(v) + ' %'
const plural = (n: number) => n + (n === 1 ? ' noche' : ' noches')
function fechaCorta(iso: string) {
  const [a, m, d] = iso.split('-').map(Number)
  return d + ' ' + MESES[m - 1] + ' ' + a
}
const lunesA0 = (iso: string) => (new Date(iso + 'T00:00:00Z').getUTCDay() + 6) % 7

function mezclar(t: number) {
  const x = Math.max(0, Math.min(1, t)) * (ESCALA.length - 1)
  const i = Math.min(ESCALA.length - 2, Math.floor(x))
  const k = x - i
  const a = ESCALA[i].slice(1).match(/../g)!.map(h => parseInt(h, 16))
  const b = ESCALA[i + 1].slice(1).match(/../g)!.map(h => parseInt(h, 16))
  return 'rgb(' + a.map((v, j) => Math.round(v + (b[j] - v) * k)).join(',') + ')'
}

const geo = computed(() => {
  const dias = props.dias
  const inicio = dias.length ? lunesA0(dias[0].fecha) : 0
  const semanas = Math.max(1, Math.ceil((inicio + dias.length) / 7))
  const cw = (props.ancho - IZQUIERDA - DERECHA) / semanas
  /* la escala va del dia mas lleno, redondeado a decenas: una casa que nunca pasa del 40 % no se ve palida */
  const maximo = Math.max(10, Math.ceil(Math.max(0, ...dias.map(d => d.ocupacion)) / 10) * 10)
  const celdas = dias.map((d, i) => {
    const k = inicio + i
    return { ...d, x: IZQUIERDA + Math.floor(k / 7) * cw, y: ARRIBA + (k % 7) * ALTO_CELDA, color: mezclar(d.ocupacion / maximo) }
  })
  /* cada mes, con su contorno por las semanas */
  const meses: { n: number, d: string, x: number, etiqueta: string }[] = []
  let desde = 0
  for (let i = 1; i <= dias.length; i++) {
    if (i < dias.length && dias[i].fecha.slice(8) !== '01') continue
    const k0 = inicio + desde
    const k1 = inicio + i - 1
    const c0 = Math.floor(k0 / 7)
    const r0 = k0 % 7
    const c1 = Math.floor(k1 / 7)
    const r1 = k1 % 7
    const X = (c: number) => (IZQUIERDA + c * cw).toFixed(1)
    const Y = (r: number) => (ARRIBA + r * ALTO_CELDA).toFixed(1)
    const d = 'M' + X(c0) + ',' + Y(r0) + 'H' + X(c0 + 1) + 'V' + Y(0) + 'H' + X(c1 + 1) + 'V' + Y(r1 + 1)
      + 'H' + X(c1) + 'V' + Y(7) + 'H' + X(c0) + 'Z'
    const mes = Number(dias[desde].fecha.slice(5, 7))
    meses.push({ n: meses.length, d, x: IZQUIERDA + (r0 ? c0 + 1 : c0) * cw, etiqueta: props.estrecho && mes % 2 === 0 ? '' : MESES[mes - 1] })
    desde = i
  }
  return { cw, celdas, meses, maximo, inicio }
})

const celdaActiva = computed(() => (activo.value === null ? null : geo.value.celdas[activo.value] || null))
const estiloTip = computed(() => {
  const c = celdaActiva.value
  if (!c) return {}
  const izquierda = c.x < props.ancho / 2
  const arriba = ((c.y + ALTO_CELDA + 6) / ALTO) * 100 + '%'
  return izquierda
    ? { left: (c.x / props.ancho) * 100 + '%', top: arriba }
    : { right: ((props.ancho - c.x - geo.value.cw) / props.ancho) * 100 + '%', top: arriba }
})

function indiceDe(e: { clientX: number, clientY: number }) {
  const svg = svgEl.value
  if (!svg) return null
  const r = svg.getBoundingClientRect()
  if (!r.width) return null
  const k = props.ancho / r.width
  const x = (e.clientX - r.left) * k - IZQUIERDA
  const y = (e.clientY - r.top) * k - ARRIBA
  if (x < 0 || y < 0 || y >= 7 * ALTO_CELDA) return null
  const i = Math.floor(x / geo.value.cw) * 7 + Math.floor(y / ALTO_CELDA) - geo.value.inicio
  return i >= 0 && i < props.dias.length ? i : null
}
function alMover(e: PointerEvent) {
  if (e.pointerType === 'mouse') activo.value = e.buttons ? null : indiceDe(e)
}
function alSalir(e: PointerEvent) {
  if (e.pointerType === 'mouse') activo.value = null
}
function alTocar(e: MouseEvent) {
  if (tipo === 'mouse') return
  const i = indiceDe(e)
  activo.value = i === activo.value ? null : i
}
function alTocarFuera(e: PointerEvent) {
  if (svgEl.value && !svgEl.value.contains(e.target as Node)) activo.value = null
}
watch(activo, (i) => {
  if (i !== null && tipo !== 'mouse') document.addEventListener('pointerdown', alTocarFuera, true)
  else document.removeEventListener('pointerdown', alTocarFuera, true)
})
onBeforeUnmount(() => document.removeEventListener('pointerdown', alTocarFuera, true))

function teclear(e: KeyboardEvent) {
  const n = props.dias.length
  if (!n) return
  const a = activo.value
  if (e.key === 'ArrowRight') activo.value = a === null ? 0 : Math.min(n - 1, a + 1)
  else if (e.key === 'ArrowLeft') activo.value = a === null ? n - 1 : Math.max(0, a - 1)
  else if (e.key === 'ArrowDown') activo.value = a === null ? 0 : Math.min(n - 1, a + 7)
  else if (e.key === 'ArrowUp') activo.value = a === null ? 0 : Math.max(0, a - 7)
  else if (e.key === 'Escape' && a !== null) activo.value = null
  else return
  tipo = 'teclado'
  e.preventDefault()
  e.stopPropagation()
}
</script>

<style scoped>
.hm-mc {
  position: relative;
  outline: none;
}
.hm-mc:focus-visible {
  box-shadow: 0 0 0 2px #0f766e;
  border-radius: calc(4 * var(--hm-u));
}
.hm-mc__svg {
  display: block;
  width: 100%;
  height: auto;
}
.hm-mc__mes {
  fill: none;
  stroke: #e2dfdd;
  stroke-width: 1;
}
.hm-mc__activa {
  pointer-events: none;
  fill: none;
  stroke: #26323f;
  stroke-width: 1.5;
}
.hm-mc__texto {
  fill: #5e6a67;
  font-size: 12px;
}
.hm-mc__tip {
  position: absolute;
  z-index: 4;
  padding: calc(8 * var(--hm-u)) calc(10 * var(--hm-u));
  border-radius: calc(4 * var(--hm-u));
  background: #fff;
  box-shadow: calc(1 * var(--hm-u)) calc(2 * var(--hm-u)) calc(10 * var(--hm-u)) rgba(0, 0, 0, 0.2);
  color: #666;
  font-size: calc(14 * var(--hm-u));
  line-height: 1.5;
  white-space: nowrap;
  pointer-events: none;
}
.hm-mc__tip strong {
  color: #464646;
  font-weight: 800;
}
.hm-mc__lector {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
</style>
