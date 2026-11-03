<!--
  Grafico de barras y lineas de las maquetas de las pantallas del panel, en SVG y sin librerias,
  con el aspecto de los del panel: ejes con su rejilla, barras agrupadas por categoria, lineas
  con sus puntos, la leyenda debajo y, al pasar el raton por una categoria o tocarla, su sombra
  y el recuadro con las cifras exactas. Con el teclado, las flechas recorren las categorias.

  Dibuja "ancho" x "alto" px del panel y ocupa el ancho de su caja, que en la maqueta mide eso
  mismo en --hm-u: el texto sale a su tamanno.
-->
<template>
  <div
    class="hm-gb"
    tabindex="0"
    role="group"
    aria-roledescription="gráfico"
    :aria-label="modelo.descripcion + '. Con las flechas, la cifra exacta de cada uno.'"
    @keydown="teclear"
    @blur="activo = null"
  >
    <svg
      ref="svgEl"
      class="hm-gb__svg"
      :viewBox="`0 0 ${modelo.ancho} ${modelo.alto}`"
      aria-hidden="true"
      @pointerdown="alPulsar"
      @pointermove="alMover"
      @pointerleave="alSalir"
      @click="alTocar"
    >
      <line v-for="t in geo.ejes[0].ticks" :key="'r' + t.v" class="hm-gb__rejilla" :x1="geo.x0" :x2="geo.x1" :y1="t.y" :y2="t.y" />
      <rect
        v-if="activo !== null"
        class="hm-gb__sombra"
        :x="geo.cats[activo].x - geo.cw / 2"
        :y="geo.y0"
        :width="geo.cw"
        :height="geo.y1 - geo.y0"
      />
      <line class="hm-gb__eje" :x1="geo.x0" :x2="geo.x1" :y1="geo.y1" :y2="geo.y1" />
      <text v-for="t in geo.ejes[0].ticks" :key="'a' + t.v" class="hm-gb__texto" :x="geo.x0 - 8" :y="t.y + 4" text-anchor="end">{{ t.texto }}</text>
      <template v-if="geo.ejes[1]">
        <text v-for="t in geo.ejes[1].ticks" :key="'b' + t.v" class="hm-gb__texto" :x="geo.x1 + 8" :y="t.y + 4">{{ t.texto }}</text>
      </template>
      <template v-for="(c, i) in geo.cats" :key="'c' + i">
        <text v-if="i % geo.cada === 0" class="hm-gb__texto" :x="c.x" :y="geo.y1 + 20" text-anchor="middle">{{ c.texto }}</text>
      </template>
      <rect v-for="b in geo.barras" :key="b.k" :x="b.x" :y="b.y" :width="b.w" :height="b.h" :fill="b.color" />
      <path
        v-for="l in geo.lineas"
        :key="l.k"
        :d="l.d"
        fill="none"
        :stroke="l.color"
        :stroke-width="l.grosor"
        :stroke-dasharray="l.discontinua ? '5 4' : undefined"
        stroke-linejoin="round"
      />
      <circle v-for="p in geo.puntos" :key="p.k" :cx="p.x" :cy="p.y" :r="p.r" fill="#fff" :stroke="p.color" stroke-width="2" />
    </svg>

    <div v-if="modelo.leyenda" class="hm-gb__leyenda" aria-hidden="true">
      <span v-for="s in modelo.series" :key="s.nombre" class="hm-gb__ley">
        <span v-if="s.tipo === 'linea'" class="hm-gb__ley-linea" :class="{ 'is-discontinua': s.discontinua }" :style="{ color: s.color }" />
        <span v-else class="hm-gb__ley-barra" :style="{ background: s.color }" />
        {{ s.nombre }}
      </span>
    </div>

    <div v-if="caja" class="hm-gb__tip" :style="caja.estilo" aria-hidden="true">
      <div class="hm-gb__tip-titulo" :class="{ 'is-fuerte': caja.tituloFuerte }">{{ caja.titulo }}</div>
      <div v-for="(l, i) in caja.lineas" :key="i" class="hm-gb__tip-linea" :class="{ 'is-columnas': l.derecha }">
        <span v-if="l.color" class="hm-gb__tip-marca" :style="{ background: l.color }" />
        <span>{{ l.texto }}</span><strong v-if="l.fuerte">{{ l.fuerte }}</strong><span v-if="l.sufijo">{{ l.sufijo }}</span>
      </div>
    </div>
    <p class="hm-gb__lector" aria-live="polite">{{ textoLector }}</p>
  </div>
</template>

<script setup lang="ts">
interface Serie {
  nombre: string
  tipo: 'barra' | 'linea'
  valores: (number | null)[]
  color: string
  // 0: el eje de la izquierda; 1: el de la derecha
  eje?: 0 | 1
  discontinua?: boolean
  grosor?: number
  // el diametro del punto de la linea
  punto?: number
  suave?: boolean
}
interface LineaTip {
  color?: string
  texto: string
  fuerte?: string
  sufijo?: string
  // el valor a la derecha, como el recuadro por defecto del panel
  derecha?: boolean
}
interface Modelo {
  descripcion: string
  ancho: number
  alto: number
  margen: { izq: number, der: number, arr: number, aba: number }
  categorias: string[]
  series: Serie[]
  // [izquierda, derecha]; la de la derecha, si la hay, sin rejilla
  ejes: ({ formato: (v: number) => string, entero?: boolean } | null)[]
  anchoBarra?: number
  leyenda?: boolean
  tooltip: (i: number) => { titulo: string, tituloFuerte?: boolean, lineas: LineaTip[] }
}

const props = defineProps<{ modelo: Modelo }>()

const svgEl = ref<SVGSVGElement | null>(null)
const activo = ref<number | null>(null)

// la escala de un eje como la de los graficos del panel: cinco tramos de 1, 2, 3 o 5 por una potencia de 10
function escala(maximo: number, entero?: boolean) {
  if (!(maximo > 0)) return { max: entero ? 5 : 1, paso: entero ? 1 : 0.2 }
  const bruto = maximo / 5
  const e = Math.pow(10, Math.floor(Math.log10(bruto)))
  const f = bruto / e
  let paso = (f < 1.5 ? 1 : f < 2.5 ? 2 : f < 4 ? 3 : f < 7 ? 5 : 10) * e
  if (entero) paso = Math.max(1, Math.round(paso))
  return { max: Math.ceil(maximo / paso - 1e-9) * paso, paso }
}

const f1 = (p: number[]) => p[0].toFixed(1) + ',' + p[1].toFixed(1)
// el trazo de una linea; sin dato, se corta. Suave: curva que pasa por todos los puntos
function trazo(puntos: (number[] | null)[], suave?: boolean) {
  let d = ''
  let tramo: number[][] = []
  const volcar = () => {
    if (!tramo.length) return
    d += 'M' + f1(tramo[0])
    for (let i = 1; i < tramo.length; i++) {
      if (!suave) {
        d += 'L' + f1(tramo[i])
        continue
      }
      const p0 = tramo[i - 2] || tramo[i - 1]
      const p1 = tramo[i - 1]
      const p2 = tramo[i]
      const p3 = tramo[i + 1] || p2
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
      d += 'C' + f1(c1) + ' ' + f1(c2) + ' ' + f1(p2)
    }
    tramo = []
  }
  puntos.forEach(p => (p ? tramo.push(p) : volcar()))
  volcar()
  return d
}

const geo = computed(() => {
  const m = props.modelo
  const x0 = m.margen.izq
  const x1 = m.ancho - m.margen.der
  const y0 = m.margen.arr
  const y1 = m.alto - m.margen.aba
  const n = Math.max(1, m.categorias.length)
  const cw = (x1 - x0) / n
  const cats = m.categorias.map((texto, i) => ({ texto, x: x0 + cw * (i + 0.5) }))
  const ejes = m.ejes.map((e, j) => {
    if (!e) return null
    const valores = m.series.filter(s => (s.eje || 0) === j).flatMap(s => s.valores).filter((v): v is number => v !== null)
    const { max, paso } = escala(Math.max(0, ...valores), e.entero)
    const ticks: { v: number, y: number, texto: string }[] = []
    for (let i = 0; i * paso <= max + 1e-9; i++) {
      const v = Math.round(i * paso * 1e6) / 1e6
      ticks.push({ v, y: y1 - (v / max) * (y1 - y0), texto: e.formato(v) })
    }
    return { max, ticks }
  })
  const y = (v: number, j: number) => y1 - (v / (ejes[j]?.max || 1)) * (y1 - y0)

  const deBarras = m.series.filter(s => s.tipo === 'barra')
  const k = deBarras.length
  const bw = k ? Math.min((cw * 0.8) / (k + (k - 1) * 0.3), m.anchoBarra || Infinity) : 0
  const hueco = bw * 0.3
  const grupo = k * bw + (k - 1) * hueco
  const barras: { k: string, x: number, y: number, w: number, h: number, color: string }[] = []
  deBarras.forEach((s, si) => s.valores.forEach((v, i) => {
    if (v === null || !cats[i]) return
    const yv = y(v, s.eje || 0)
    barras.push({ k: si + '-' + i, x: cats[i].x - grupo / 2 + si * (bw + hueco), y: yv, w: bw, h: Math.max(0, y1 - yv), color: s.color })
  }))

  const lineas: { k: string, d: string, color: string, grosor: number, discontinua?: boolean }[] = []
  const puntos: { k: string, x: number, y: number, r: number, color: string }[] = []
  m.series.filter(s => s.tipo === 'linea').forEach((s, si) => {
    const pts = s.valores.map((v, i) => (v === null || !cats[i] ? null : [cats[i].x, y(v, s.eje || 0)]))
    lineas.push({ k: 'l' + si, d: trazo(pts, s.suave), color: s.color, grosor: s.grosor || 2, discontinua: s.discontinua })
    pts.forEach((p, i) => {
      if (p) puntos.push({ k: 'p' + si + '-' + i, x: p[0], y: p[1], r: (s.punto || 6) / 2, color: s.color })
    })
  })
  // las etiquetas de abajo que caben: una de cada "cada"
  const cada = Math.max(1, Math.ceil(46 / cw))
  return { x0, x1, y0, y1, cw, cats, ejes, barras, lineas, puntos, cada }
})

const caja = computed(() => {
  const i = activo.value
  const m = props.modelo
  if (i === null || !geo.value.cats[i]) return null
  const t = m.tooltip(i)
  const x = geo.value.cats[i].x
  const arriba = ((geo.value.y0 + 4) / m.alto) * 100 + '%'
  const estilo = x < m.ancho / 2
    ? { left: ((x + geo.value.cw / 2 + 6) / m.ancho) * 100 + '%', top: arriba }
    : { right: ((m.ancho - x + geo.value.cw / 2 + 6) / m.ancho) * 100 + '%', top: arriba }
  return { ...t, estilo }
})

const textoLector = computed(() => {
  const c = caja.value
  if (!c) return ''
  return [c.titulo, ...c.lineas.map(l => l.texto + (l.fuerte ? ' ' + l.fuerte : '') + (l.sufijo || ''))].join('. ')
})

function indiceDe(e: { clientX: number, clientY: number }) {
  const svg = svgEl.value
  if (!svg) return null
  const r = svg.getBoundingClientRect()
  if (!r.width) return null
  const k = props.modelo.ancho / r.width
  const x = (e.clientX - r.left) * k
  const yy = (e.clientY - r.top) * k
  const g = geo.value
  if (x < g.x0 || x > g.x1 || yy < g.y0 - 4 || yy > g.y1 + 4) return null
  return Math.min(g.cats.length - 1, Math.max(0, Math.floor((x - g.x0) / g.cw)))
}

// con el raton, el recuadro sigue al raton (y se va al arrastrar la pantalla); con el dedo, se abre al tocar y
// se cierra al tocar fuera. Al pulsar no se quita nada: si se quita lo que hay debajo del raton, no llega el clic
let tipo = 'mouse'
function alPulsar(e: PointerEvent) {
  tipo = e.pointerType
}
function alMover(e: PointerEvent) {
  if (e.pointerType !== 'mouse') return
  activo.value = e.buttons ? null : indiceDe(e)
}
function alSalir(e: PointerEvent) {
  if (e.pointerType === 'mouse') activo.value = null
}
function alTocar(e: MouseEvent) {
  const i = indiceDe(e)
  if (tipo === 'mouse') {
    activo.value = i
    return
  }
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
  const n = geo.value.cats.length
  if (!n) return
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') activo.value = activo.value === null ? 0 : Math.min(n - 1, activo.value + 1)
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') activo.value = activo.value === null ? n - 1 : Math.max(0, activo.value - 1)
  else if (e.key === 'Escape' && activo.value !== null) activo.value = null
  else return
  tipo = 'teclado'
  e.preventDefault()
  e.stopPropagation()
}
</script>

<style scoped>
.hm-gb {
  position: relative;
  outline: none;
}
.hm-gb:focus-visible {
  box-shadow: 0 0 0 2px #0f766e;
  border-radius: calc(4 * var(--hm-u));
}
.hm-gb__svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}
.hm-gb__rejilla,
.hm-gb__eje {
  stroke: #e2dfdd;
  stroke-width: 1;
  shape-rendering: crispEdges;
}
.hm-gb__sombra {
  fill: rgba(150, 150, 150, 0.1);
  pointer-events: none;
}
.hm-gb__texto {
  fill: #5e6a67;
  font-size: 12px;
}
.hm-gb__leyenda {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: calc(4 * var(--hm-u)) calc(10 * var(--hm-u));
  font-size: calc(12 * var(--hm-u));
  line-height: 1.4;
  color: #26323f;
  pointer-events: none;
}
.hm-gb__ley {
  display: inline-flex;
  align-items: center;
  gap: calc(5 * var(--hm-u));
}
.hm-gb__ley-barra {
  width: calc(25 * var(--hm-u));
  height: calc(14 * var(--hm-u));
  border-radius: calc(3 * var(--hm-u));
}
.hm-gb__ley-linea {
  position: relative;
  width: calc(25 * var(--hm-u));
  height: 0;
  border-top: calc(2 * var(--hm-u)) solid currentColor;
}
.hm-gb__ley-linea.is-discontinua {
  border-top-style: dashed;
}
.hm-gb__ley-linea::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(8 * var(--hm-u));
  height: calc(8 * var(--hm-u));
  margin: calc(-5 * var(--hm-u)) 0 0 calc(-4 * var(--hm-u));
  border: calc(2 * var(--hm-u)) solid currentColor;
  border-radius: 50%;
  background: #fff;
  box-sizing: border-box;
}
/* el recuadro de las cifras, como el de los graficos del panel */
.hm-gb__tip {
  position: absolute;
  z-index: 4;
  min-width: calc(120 * var(--hm-u));
  max-width: calc(330 * var(--hm-u));
  padding: calc(10 * var(--hm-u));
  border-radius: calc(4 * var(--hm-u));
  background: #fff;
  box-shadow: calc(1 * var(--hm-u)) calc(2 * var(--hm-u)) calc(10 * var(--hm-u)) rgba(0, 0, 0, 0.2);
  color: #666;
  font-size: calc(14 * var(--hm-u));
  line-height: 1.5;
  white-space: normal;
  pointer-events: none;
}
.hm-gb__tip-titulo.is-fuerte {
  font-weight: 700;
}
.hm-gb__tip-linea strong {
  color: #464646;
  font-weight: 800;
}
.hm-gb__tip-linea.is-columnas {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.hm-gb__tip-linea.is-columnas strong {
  margin-left: auto;
  padding-left: calc(20 * var(--hm-u));
}
.hm-gb__tip-marca {
  display: inline-block;
  width: calc(10 * var(--hm-u));
  height: calc(10 * var(--hm-u));
  margin-right: calc(5 * var(--hm-u));
  border-radius: 50%;
  vertical-align: 0;
}
.hm-gb__lector {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
</style>
