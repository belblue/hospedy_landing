// Agencias del Channel Manager, pedidas al PMS desde el servidor de la web (el navegador nunca lo llama).
//
// Se guardan 24 horas. Pasado ese tiempo, la siguiente visita recibe la copia que había y, a la vez, se
// pide la nueva: el PMS recibe una petición al día. Si entonces no responde, se sigue con la copia
// anterior. Solo cuando la web arranca y no consigue la lista, las rutas tiran de la copia del repo
// (server/data/agencias-respaldo.json).

export interface AgenciaDelPms {
  id: number
  canal: number
  nombre: string
  svg?: boolean
}

const UN_DIA = 60 * 60 * 24
// sin ninguna copia y con el PMS sin responder, no se vuelve a probar hasta pasado este rato: cada
// visita esperaría el timeout
const PAUSA_TRAS_FALLO_MS = 5 * 60 * 1000

function apiDelPms(): string {
  return String(useRuntimeConfig().rididApiBase || '').trim().replace(/\/+$/, '')
}

const listaCacheada = defineCachedFunction(async (): Promise<AgenciaDelPms[]> => {
  const base = apiDelPms()
  if (!base) throw new Error('Sin NUXT_RIDID_API_BASE')
  const respuesta = await $fetch<{ agencias?: AgenciaDelPms[] }>(`${base}/api/public/agencias`, { timeout: 5000 })
  const agencias = (respuesta?.agencias || []).filter(a => Number.isInteger(a.canal) && a.canal > 0 && a.nombre)
  if (!agencias.length) throw new Error('El PMS ha devuelto la lista vacía')
  return agencias
}, { name: 'agencias', getKey: () => 'lista', maxAge: UN_DIA, swr: true })

let ultimoFalloSinCopia = 0

// Con una copia guardada, aunque haya caducado, nunca falla: la devuelve y refresca por detrás.
export async function agenciasDelPms(): Promise<AgenciaDelPms[]> {
  if (Date.now() - ultimoFalloSinCopia < PAUSA_TRAS_FALLO_MS) throw new Error('El PMS no respondía hace un momento')
  try {
    return await listaCacheada()
  } catch (error) {
    ultimoFalloSinCopia = Date.now()
    throw error
  }
}

// El icono cuadrado de la agencia, solo si es un SVG nuestro (el de 22 px de WuBook no se lee a su tamaño).
export const iconoDeAgencia = defineCachedFunction(async (canal: number): Promise<string> => {
  const agencia = (await agenciasDelPms()).find(a => a.canal === canal && a.svg)
  if (!agencia) throw createError({ statusCode: 404 })
  const svg = await $fetch<string>(`${apiDelPms()}/api/public/agencias/${agencia.id}/icono`,
    { responseType: 'text', timeout: 5000 })
  if (typeof svg !== 'string' || !svg.trimStart().startsWith('<svg') || /<script|\son[a-z]+\s*=/i.test(svg)) {
    throw new Error('Icono no válido')
  }
  return svg
}, { name: 'icono-agencia', getKey: (canal: number) => String(canal), maxAge: UN_DIA, swr: true })
