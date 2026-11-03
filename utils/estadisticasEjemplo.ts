// Datos de ejemplo de la maqueta de Estadísticas (components/MockEstadisticas.vue): el Hotel Alameda, con las 30
// habitaciones del planning de ejemplo, mes a mes de enero de 2024 a septiembre de 2028. Los meses pasados llevan lo
// que acabaron vendiendo y los que vienen, lo que llevan vendido a su «hoy», el 9 de octubre de 2026, como el resto de
// maquetas.
//
// Sale de una semilla fija, así que las cifras son siempre las mismas, y cuadran entre sí: los ingresos son las noches
// por su precio, la ocupación va sobre las 30 habitaciones y cada desglose (días, tipos, canales, días del mapa de
// calor) suma el total. Sin clases de Tailwind: utils/ no está en el content de Tailwind.

export const HOY_ESTADISTICAS = '2026-10-09'

const TIPOS_ALAMEDA = [
  { tipo: 'Doble', habitaciones: 15 },
  { tipo: 'Familiar', habitaciones: 6 },
  { tipo: 'Suite', habitaciones: 6 },
  { tipo: 'Individual', habitaciones: 3 },
] as const

const HABITACIONES = 30
const PRIMER_ANIO = 2024
const MESES_DE_DATOS = 57 // de enero de 2024 a septiembre de 2028

// ---- el año del hotel, de enero a diciembre (2025; los demás años se mueven sobre él) ----
const OCUPACION = [0.47, 0.53, 0.6, 0.68, 0.73, 0.82, 0.9, 0.94, 0.83, 0.75, 0.57, 0.6]
const DESPLAZAMIENTO: Record<number, number> = { 2024: -0.035, 2025: 0, 2026: 0.025, 2027: 0.035, 2028: 0.04 }
const PRECIO = [71, 73, 78, 86, 90, 99, 119, 127, 100, 89, 74, 83]
const SUBIDA: Record<number, number> = { 2024: 0.955, 2025: 1, 2026: 1.058, 2027: 1.1, 2028: 1.13 }
const ESTANCIA_MEDIA = [2.4, 2.3, 2.5, 2.6, 2.7, 2.9, 3.4, 3.6, 2.8, 2.5, 2.3, 2.6]
const PERSONAS = [1.7, 1.7, 1.8, 1.9, 1.9, 2, 2.3, 2.4, 1.9, 1.8, 1.7, 1.9]
const EXTRAS = [0.055, 0.055, 0.06, 0.065, 0.065, 0.07, 0.078, 0.08, 0.068, 0.062, 0.055, 0.06]
const POR_AGENCIA = [0.55, 0.56, 0.58, 0.6, 0.62, 0.65, 0.68, 0.69, 0.64, 0.6, 0.56, 0.57]
// noches por día de la semana, de lunes a domingo: el viernes y el sábado llenan más
const SEMANA = [0.86, 0.84, 0.88, 0.96, 1.2, 1.24, 0.78]

// la parte de cada mes que ya está vendida a «hoy», según los meses que faltan (0: el mes en curso)
const VENDIDO = [0.94, 0.68, 0.46, 0.31, 0.25, 0.24, 0.22, 0.21, 0.23, 0.27, 0.29, 0.16, 0.09, 0.07, 0.06, 0.05, 0.05, 0.05, 0.05, 0.06, 0.07, 0.08, 0.06, 0.04]

const AGENCIAS = [
  { nombre: 'Booking.com', parte: 0.63, precio: 1 },
  { nombre: 'Expedia', parte: 0.16, precio: 1.05 },
  { nombre: 'Airbnb', parte: 0.12, precio: 1.12 },
  { nombre: 'Hotelbeds', parte: 0.09, precio: 0.85 },
]

const TRAMOS_ANTELACION = ['0-7', '8-30', '31-90', '91+']
const DIAS_ANTELACION = [4, 18, 55, 128]
const TRAMOS_ESTANCIA = ['1', '2', '3-6', '7+']

// por temporada: invierno (noviembre a marzo), media (abril, mayo y octubre) y verano (junio a septiembre)
const TEMPORADA = [0, 0, 0, 1, 1, 2, 2, 2, 2, 1, 0, 0]
const ANTELACION = [[0.3, 0.34, 0.26, 0.1], [0.2, 0.31, 0.32, 0.17], [0.11, 0.21, 0.38, 0.3]]
// cada año se reserva con algo más de antelación, y se cancela algo menos
const ANTELACION_ANIO: Record<number, number> = { 2024: -0.1, 2025: 0, 2026: 0.08, 2027: 0.1, 2028: 0.1 }
const CANCELACION_ANIO: Record<number, number> = { 2024: 1.08, 2025: 1, 2026: 0.93, 2027: 0.93, 2028: 0.93 }
// las estancias de 1, 2, 3 a 6 y 7 o más noches, con una estancia media de 2,4 y de 3,2 noches: cada mes, entre las dos
const DURACION_CORTA = [0.28, 0.4, 0.3, 0.02]
const DURACION_LARGA = [0.15, 0.31, 0.45, 0.09]
const TIPO_EN_TEMPORADA = [[1, 0.86, 0.84, 1], [1, 0.97, 0.86, 0.94], [1, 1.12, 0.95, 0.9]]

const PAISES: [string, number][] = [
  ['España', 0.52], ['Francia', 0.1], ['Reino Unido', 0.07], ['Alemania', 0.06], ['Estados Unidos', 0.04],
  ['Países Bajos', 0.035], ['Italia', 0.03], ['Portugal', 0.025], ['Bélgica', 0.02], ['México', 0.015],
]
const PROVINCIAS: [string, number][] = [
  ['Madrid', 0.26], ['Barcelona', 0.14], ['Valencia', 0.09], ['Bizkaia', 0.07], ['Zaragoza', 0.06],
  ['Sevilla', 0.05], ['Gipuzkoa', 0.045], ['Navarra', 0.04], ['Asturias', 0.035], ['Málaga', 0.03],
]

// ---- tipos ----
interface MesEjemplo {
  clave: string // 'AAAA-MM'
  dias: number
  noches: number
  final: number // las noches con las que acaba el mes (en los pasados, las mismas)
  diario: number[]
  porTipo: number[]
  alojamiento: number // céntimos
  extras: number // céntimos
  estancias: number
  huespedes: number
  canceladasAgencias: number
  canceladasDirecta: number
  sinCheckin: number
  agencias: { estancias: number, importe: number }
  directa: { estancias: number, importe: number }
  porAgencia: { estancias: number, importe: number }[]
  antelacion: number[]
  duracion: number[]
  // lo vendido para este mes a estas alturas del año pasado, para el ritmo de venta
  vaivenRitmo: number
}

export interface CifrasCanal { estancias: number, importe: number }
export interface FilaReparto { tramo: string, estancias: number, pct: number }
export interface FilaProcedencia { nombre: string, huespedes: number, pct: number }
export interface CifrasCancelacion { canceladas: number, reservas: number, tasa: number | null }

export interface PeriodoEstadisticas {
  desde: string // 'AAAA-MM-DD'
  hasta: string
  nochesPeriodo: number
  habitaciones: number
  noches: number
  ocupacion: number
  alojamiento: number // euros
  extras: number
  importe: number
  adr: number | null
  revpar: number
  estancias: number
  estanciaMedia: number | null
  huespedes: number
  canceladas: number
  sinCheckin: number
  agencias: CifrasCanal
  directa: CifrasCanal
  porAgencia: { nombre: string, estancias: number, importe: number }[]
  tramos: { clave: string, importe: number, ocupacion: number }[]
  dias: number[] // noches de lunes a domingo
  tipos: { tipo: string, habitaciones: number, ocupacion: number }[]
  antelacion: { filas: FilaReparto[], media: number | null }
  duracion: { filas: FilaReparto[], media: number | null }
  cancelaciones: CifrasCancelacion & {
    porTramo: (CifrasCancelacion & { clave: string })[]
    agencias: CifrasCancelacion
    directa: CifrasCancelacion
    antelacionMedia: number
  }
  procedencia: { huespedes: number, sinDato: number, paises: FilaProcedencia[], provincias: FilaProcedencia[] }
  diario: { fecha: string, noches: number, ocupacion: number }[]
}

export interface RitmoDeVenta {
  aFecha: string
  aFechaComparado: string
  tramos: { clave: string, noches: number, ocupacion: number, estancias: number }[]
  tramosComparado: { clave: string, noches: number }[]
  finalComparado: { clave: string, noches: number }[]
}

// ---- utilidades ----
function semilla(n: number) {
  let a = n >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const dos = (n: number) => (n < 10 ? '0' : '') + n
const claveMes = (anio: number, mes: number) => anio + '-' + dos(mes + 1)
const diasDelMes = (anio: number, mes: number) => new Date(Date.UTC(anio, mes + 1, 0)).getUTCDate()
// lunes 0 ... domingo 6
const diaSemana = (anio: number, mes: number, dia: number) => (new Date(Date.UTC(anio, mes, dia)).getUTCDay() + 6) % 7
const redondear1 = (x: number) => Math.round(x * 10) / 10

// Reparte un entero entre varios según sus pesos, sin pasar del tope de cada uno, y sin perder ninguno por el
// redondeo (el resto va a los de mayor parte decimal)
function repartir(total: number, pesos: number[], topes?: number[]): number[] {
  const n = pesos.length
  const out = new Array(n).fill(0)
  const libres = new Set(pesos.map((_, i) => i).filter(i => pesos[i] > 0))
  let resto = total
  for (;;) {
    const suma = [...libres].reduce((s, i) => s + pesos[i], 0)
    if (!suma || resto <= 0) break
    const llenos = topes ? [...libres].filter(i => (resto * pesos[i]) / suma >= topes[i]) : []
    if (!llenos.length) {
      const partes = [...libres].map(i => ({ i, x: (resto * pesos[i]) / suma }))
      partes.forEach(p => (out[p.i] = Math.floor(p.x)))
      let falta = resto - partes.reduce((s, p) => s + Math.floor(p.x), 0)
      partes.sort((a, b) => (b.x % 1) - (a.x % 1))
      for (const p of partes) {
        if (falta <= 0) break
        out[p.i] += 1
        falta -= 1
      }
      break
    }
    for (const i of llenos) {
      out[i] = topes![i]
      resto -= topes![i]
      libres.delete(i)
    }
  }
  return out
}

// ---- los meses ----
let meses: MesEjemplo[] | null = null

function mesesDeEjemplo(): MesEjemplo[] {
  if (meses) return meses
  const rnd = semilla(20261009)
  const [hoyA, hoyM] = HOY_ESTADISTICAS.split('-').map(Number)
  const indiceHoy = (hoyA - PRIMER_ANIO) * 12 + hoyM - 1
  meses = []
  for (let k = 0; k < MESES_DE_DATOS; k++) {
    const anio = PRIMER_ANIO + Math.floor(k / 12)
    const mes = k % 12
    const dias = diasDelMes(anio, mes)
    const t = TEMPORADA[mes]
    const ocupacion = Math.min(0.97, OCUPACION[mes] + DESPLAZAMIENTO[anio] + (rnd() - 0.5) * 0.03)
    const final = Math.round(HABITACIONES * dias * ocupacion)
    const faltan = k - indiceHoy
    const noches = faltan < 0 ? final : Math.round(final * VENDIDO[faltan])
    const precio = PRECIO[mes] * SUBIDA[anio] * (1 + (rnd() - 0.5) * 0.03)

    // las noches de cada día: más el fin de semana, y nunca más de 30
    const diario = repartir(
      noches,
      Array.from({ length: dias }, (_, d) => SEMANA[diaSemana(anio, mes, d + 1)] * (1 + (rnd() - 0.5) * 0.14)),
      new Array(dias).fill(HABITACIONES),
    )
    const porTipo = repartir(
      noches,
      TIPOS_ALAMEDA.map((x, i) => x.habitaciones * TIPO_EN_TEMPORADA[t][i]),
      TIPOS_ALAMEDA.map(x => x.habitaciones * dias),
    )

    const alojamiento = Math.round(noches * precio * 100)
    const extras = Math.round(alojamiento * EXTRAS[mes] * (1 + (rnd() - 0.5) * 0.1))
    const media = ESTANCIA_MEDIA[mes] + (rnd() - 0.5) * 0.2
    const estancias = Math.max(noches ? 1 : 0, Math.round(noches / media))
    // los huéspedes se registran al hacer el check-in: en el mes en curso, solo los de los días pasados
    const parteRegistrada = faltan < 0 ? 1 : faltan === 0 ? (hoyDia() - 1) / dias : 0
    const huespedes = Math.round(estancias * PERSONAS[mes] * parteRegistrada)
    const sinCheckin = faltan < 0 ? Math.floor(rnd() * 3) : faltan === 0 ? 2 : 0

    const parteAgencias = Math.min(0.9, POR_AGENCIA[mes] + (rnd() - 0.5) * 0.04)
    const estAgencias = Math.round(estancias * parteAgencias)
    const total = alojamiento + extras
    const impAgencias = Math.round(total * Math.min(0.95, (estAgencias / Math.max(1, estancias)) * 1.04))
    const estPorAgencia = repartir(estAgencias, AGENCIAS.map(a => a.parte))
    const impPorAgencia = repartir(impAgencias, AGENCIAS.map((a, i) => estPorAgencia[i] * a.precio))

    meses.push({
      clave: claveMes(anio, mes),
      dias,
      noches,
      final,
      diario,
      porTipo,
      alojamiento,
      extras,
      estancias,
      huespedes,
      canceladasAgencias: Math.round(estAgencias * (0.11 + rnd() * 0.03) * CANCELACION_ANIO[anio]),
      canceladasDirecta: Math.round((estancias - estAgencias) * (0.04 + rnd() * 0.02) * CANCELACION_ANIO[anio]),
      sinCheckin,
      agencias: { estancias: estAgencias, importe: impAgencias },
      directa: { estancias: estancias - estAgencias, importe: total - impAgencias },
      porAgencia: AGENCIAS.map((_, i) => ({ estancias: estPorAgencia[i], importe: impPorAgencia[i] })),
      antelacion: repartir(estancias, ANTELACION[t].map((x, i) => x * (1 + ANTELACION_ANIO[anio] * (i - 1.5) / 1.5) * (0.94 + rnd() * 0.12))),
      duracion: repartir(estancias, DURACION_CORTA.map((x, i) => {
        const k = Math.max(0, Math.min(1, (media - 2.4) / 0.8))
        return x + (DURACION_LARGA[i] - x) * k
      })),
      vaivenRitmo: 0.88 + rnd() * 0.24,
    })
  }
  return meses
}

function hoyDia() {
  return Number(HOY_ESTADISTICAS.slice(8, 10))
}

// los meses de un periodo de meses enteros, de 'AAAA-MM-DD' a 'AAAA-MM-DD'
function mesesDelPeriodo(desde: string, hasta: string): MesEjemplo[] {
  const todos = mesesDeEjemplo()
  return todos.filter(m => m.clave >= desde.slice(0, 7) && m.clave <= hasta.slice(0, 7))
}

// el mismo periodo, un año antes
export function unAnioAntes(fecha: string): string {
  const [a, m, d] = fecha.split('-').map(Number)
  const ultimo = diasDelMes(a - 1, m - 1)
  return (a - 1) + '-' + dos(m) + '-' + dos(Math.min(d, ultimo))
}

const sumar = (lista: MesEjemplo[], f: (m: MesEjemplo) => number) => lista.reduce((s, m) => s + f(m), 0)
const pctDe = (parte: number, total: number) => (total ? redondear1((100 * parte) / total) : 0)
const tasa = (canceladas: number, reservas: number): CifrasCancelacion =>
  ({ canceladas, reservas, tasa: reservas ? redondear1((100 * canceladas) / reservas) : null })

function reparto(lista: MesEjemplo[], campo: 'antelacion' | 'duracion', tramos: string[]): FilaReparto[] {
  const cuentas = tramos.map((_, i) => sumar(lista, m => m[campo][i]))
  const total = cuentas.reduce((s, x) => s + x, 0)
  return tramos.map((tramo, i) => ({ tramo, estancias: cuentas[i], pct: pctDe(cuentas[i], total) }))
}

function procedencia(huespedes: number) {
  const sinDato = Math.round(huespedes * 0.02)
  const conDato = huespedes - sinDato
  const pesos = PAISES.map(p => p[1])
  const paises = repartir(conDato, [...pesos, 1 - pesos.reduce((s, x) => s + x, 0)])
  const filas = (nombres: [string, number][], cuentas: number[], total: number) => [
    ...nombres.map(([nombre], i) => ({ nombre, huespedes: cuentas[i], pct: pctDe(cuentas[i], total) })),
    { nombre: 'Otros', huespedes: cuentas[nombres.length], pct: pctDe(cuentas[nombres.length], total) },
  ]
  const enEspania = paises[0]
  const pesosProv = PROVINCIAS.map(p => p[1])
  const provincias = repartir(enEspania, [...pesosProv, 1 - pesosProv.reduce((s, x) => s + x, 0)])
  return {
    huespedes,
    sinDato,
    paises: filas(PAISES, paises, conDato),
    provincias: enEspania ? filas(PROVINCIAS, provincias, enEspania) : [],
  }
}

// Las cifras de un periodo de meses enteros
export function estadisticasDelPeriodo(desde: string, hasta: string): PeriodoEstadisticas {
  const lista = mesesDelPeriodo(desde, hasta)
  const nochesPeriodo = sumar(lista, m => m.dias)
  const disponibles = HABITACIONES * nochesPeriodo
  const noches = sumar(lista, m => m.noches)
  const alojamiento = sumar(lista, m => m.alojamiento) / 100
  const extras = sumar(lista, m => m.extras) / 100
  const estancias = sumar(lista, m => m.estancias)
  const huespedes = sumar(lista, m => m.huespedes)
  const cAg = sumar(lista, m => m.canceladasAgencias)
  const cDi = sumar(lista, m => m.canceladasDirecta)
  const estAg = sumar(lista, m => m.agencias.estancias)
  const dias = [0, 0, 0, 0, 0, 0, 0]
  const diario: PeriodoEstadisticas['diario'] = []
  for (const m of lista) {
    const [a, mm] = m.clave.split('-').map(Number)
    m.diario.forEach((n, d) => {
      dias[diaSemana(a, mm - 1, d + 1)] += n
      diario.push({ fecha: m.clave + '-' + dos(d + 1), noches: n, ocupacion: pctDe(n, HABITACIONES) })
    })
  }
  const porAgencia = AGENCIAS.map((a, i) => ({
    nombre: a.nombre,
    estancias: sumar(lista, m => m.porAgencia[i].estancias),
    importe: sumar(lista, m => m.porAgencia[i].importe) / 100,
  })).filter(a => a.estancias).sort((x, y) => y.estancias - x.estancias)
  const antelacion = reparto(lista, 'antelacion', TRAMOS_ANTELACION)
  const conAntelacion = antelacion.reduce((s, f) => s + f.estancias, 0)
  const duracion = reparto(lista, 'duracion', TRAMOS_ESTANCIA)
  return {
    desde,
    hasta,
    nochesPeriodo,
    habitaciones: HABITACIONES,
    noches,
    ocupacion: pctDe(noches, disponibles),
    alojamiento,
    extras,
    importe: Math.round((alojamiento + extras) * 100) / 100,
    adr: noches ? alojamiento / noches : null,
    revpar: alojamiento / disponibles,
    estancias,
    estanciaMedia: estancias ? noches / estancias : null,
    huespedes,
    canceladas: cAg + cDi,
    sinCheckin: sumar(lista, m => m.sinCheckin),
    agencias: { estancias: estAg, importe: sumar(lista, m => m.agencias.importe) / 100 },
    directa: { estancias: estancias - estAg, importe: sumar(lista, m => m.directa.importe) / 100 },
    porAgencia,
    tramos: lista.map(m => ({
      clave: m.clave,
      importe: (m.alojamiento + m.extras) / 100,
      ocupacion: pctDe(m.noches, HABITACIONES * m.dias),
    })),
    dias,
    tipos: TIPOS_ALAMEDA.map((x, i) => ({
      tipo: x.tipo,
      habitaciones: x.habitaciones,
      ocupacion: pctDe(sumar(lista, m => m.porTipo[i]), x.habitaciones * nochesPeriodo),
    })),
    antelacion: {
      filas: antelacion,
      media: conAntelacion ? redondear1(antelacion.reduce((s, f, i) => s + f.estancias * DIAS_ANTELACION[i], 0) / conAntelacion) : null,
    },
    duracion: { filas: duracion, media: estancias ? redondear1(noches / estancias) : null },
    cancelaciones: {
      ...tasa(cAg + cDi, estancias + cAg + cDi),
      porTramo: lista.map(m => ({
        clave: m.clave,
        ...tasa(m.canceladasAgencias + m.canceladasDirecta, m.estancias + m.canceladasAgencias + m.canceladasDirecta),
      })),
      agencias: tasa(cAg, estAg + cAg),
      directa: tasa(cDi, estancias - estAg + cDi),
      antelacionMedia: redondear1(16 + (lista.length ? (sumar(lista, m => TEMPORADA[Number(m.clave.slice(5)) - 1]) / lista.length) * 6 : 0)),
    },
    procedencia: procedencia(huespedes),
    diario,
  }
}

// El ritmo de venta: los «meses» que vienen desde el mes en curso, con lo vendido a hoy, lo que llevaba vendido el
// año pasado a estas alturas para el mismo mes y con lo que acabó ese mes
export function ritmoDeVenta(cuantos: number): RitmoDeVenta {
  const todos = mesesDeEjemplo()
  const [hoyA, hoyM] = HOY_ESTADISTICAS.split('-').map(Number)
  const inicio = (hoyA - PRIMER_ANIO) * 12 + hoyM - 1
  const tramos: RitmoDeVenta['tramos'] = []
  const tramosComparado: RitmoDeVenta['tramosComparado'] = []
  const finalComparado: RitmoDeVenta['finalComparado'] = []
  for (let i = 0; i < cuantos && inicio + i < todos.length; i++) {
    const m = todos[inicio + i]
    const antes = todos[inicio + i - 12]
    tramos.push({ clave: m.clave, noches: m.noches, ocupacion: pctDe(m.noches, HABITACIONES * m.dias), estancias: m.estancias })
    // lo que tiene ahora el mismo mes del año pasado: si ya pasó, con lo que acabó
    finalComparado.push({ clave: antes.clave, noches: antes.noches })
    tramosComparado.push({ clave: antes.clave, noches: Math.min(antes.noches, Math.round(antes.final * VENDIDO[i] * m.vaivenRitmo)) })
  }
  return { aFecha: HOY_ESTADISTICAS, aFechaComparado: unAnioAntes(HOY_ESTADISTICAS), tramos, tramosComparado, finalComparado }
}
