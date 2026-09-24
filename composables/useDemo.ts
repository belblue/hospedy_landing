// Demostraciones de las maquetas (prop "demo"): la maqueta se reproduce sola y en bucle, y en
// cuanto el visitante la toca se para para siempre y queda en sus manos. Se mueve:
//   - con raton, solo mientras el raton esta encima de su tarjeta (el ancestro con el atributo
//     data-demo-zona; si no lo hay, la propia maqueta) y la maqueta se ve;
//   - sin raton (tactil), mientras se ve; si se ven varias, solo la mas visible;
//   - nunca con movimiento reducido.
// En toda la pagina solo hay una demo en marcha a la vez.
//
// El guion lo escribe cada maqueta (correr) con las esperas de aqui: al pararse la demo, las
// esperas pendientes fallan con PARADA y el guion termina.
import { onBeforeUnmount, onMounted } from 'vue'

interface Demo {
  ratio: number
  dentro: boolean
  puede: () => boolean
  arrancar: () => void
  parar: (delVisitante?: boolean) => void
}

interface Pendiente {
  reject: (e: unknown) => void
  t?: ReturnType<typeof setTimeout>
  raf?: number
}

interface Opciones {
  activa: () => boolean
  raiz: () => HTMLElement | null | undefined
  correr: () => Promise<void>
  alParar?: (delVisitante: boolean) => void
}

const PARADA = { parada: true }
const demos = new Set<Demo>()

// de las que pueden moverse, la mas visible; las demas, quietas
function elegir() {
  let mejor: Demo | null = null
  demos.forEach((d) => {
    if (d.puede() && (!mejor || d.ratio > mejor.ratio)) mejor = d
  })
  demos.forEach((d) => {
    if (d !== mejor) d.parar(false)
  })
  if (mejor) (mejor as Demo).arrancar()
}

export function useDemo({ activa, raiz, correr, alParar }: Opciones) {
  let viva = false
  let gen = 0
  let delVisitante = false
  let conRaton = false
  let pendientes: Pendiente[] = []
  let io: IntersectionObserver | null = null
  let zona: HTMLElement | null = null

  const yo: Demo = {
    ratio: 0,
    dentro: false,
    puede() {
      return !delVisitante && yo.ratio >= 0.5 && (!conRaton || yo.dentro)
    },
    arrancar,
    parar,
  }

  function arrancar() {
    if (viva || delVisitante) return
    viva = true
    gen += 1
    const g = gen
    Promise.resolve()
      .then(correr)
      .catch((e) => {
        // PARADA: la ha cortado el visitante, el raton ha salido o ya no se ve
        if (e !== PARADA) console.error(e)
      })
      .then(() => {
        if (g === gen) viva = false
      })
  }

  function parar(visitante = false) {
    if (visitante) delVisitante = true
    if (!viva) return
    viva = false
    gen += 1
    const ps = pendientes
    pendientes = []
    ps.forEach((p) => {
      if (p.t) clearTimeout(p.t)
      if (p.raf) cancelAnimationFrame(p.raf)
      p.reject(PARADA)
    })
    if (alParar) alParar(visitante)
  }

  function espera(ms: number): Promise<void> {
    const g = gen
    return new Promise((resolve, reject) => {
      const p: Pendiente = { reject }
      p.t = setTimeout(() => {
        pendientes = pendientes.filter((x) => x !== p)
        if (viva && g === gen) resolve()
        else reject(PARADA)
      }, ms)
      pendientes.push(p)
    })
  }

  // reparte "ms" en cuadros de animacion: paso(k), con k de 0 a 1
  function animar(ms: number, paso: (k: number) => void): Promise<void> {
    const g = gen
    return new Promise((resolve, reject) => {
      const p: Pendiente = { reject }
      const t0 = performance.now()
      const cuadro = (t: number) => {
        if (!viva || g !== gen) return
        const k = Math.max(0, Math.min(1, (t - t0) / ms))
        paso(k)
        if (k < 1) {
          p.raf = requestAnimationFrame(cuadro)
          return
        }
        pendientes = pendientes.filter((x) => x !== p)
        resolve()
      }
      p.raf = requestAnimationFrame(cuadro)
      pendientes.push(p)
    })
  }

  async function hasta(cond: () => boolean, max: number) {
    const t0 = performance.now()
    while (!cond()) {
      if (performance.now() - t0 > max) throw PARADA
      await espera(120)
    }
  }

  function entrar(e: PointerEvent) {
    if (e.pointerType !== 'mouse') return
    yo.dentro = true
    elegir()
  }
  function salir(e: PointerEvent) {
    if (e.pointerType !== 'mouse') return
    yo.dentro = false
    elegir()
  }

  onMounted(() => {
    if (!activa()) return
    if (!('IntersectionObserver' in window) || !window.matchMedia) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = raiz()
    if (!el) return
    conRaton = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    demos.add(yo)
    if (conRaton) {
      zona = (el.closest('[data-demo-zona]') as HTMLElement | null) || el
      zona.addEventListener('pointerenter', entrar)
      zona.addEventListener('pointerleave', salir)
    }
    // tambien se para cuando una pestanna la oculta (v-show)
    io = new IntersectionObserver(
      (entradas) => {
        const e = entradas[entradas.length - 1]
        yo.ratio = e.isIntersecting ? e.intersectionRatio : 0
        elegir()
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    io.observe(el)
  })

  onBeforeUnmount(() => {
    parar(false)
    demos.delete(yo)
    if (io) io.disconnect()
    if (zona) {
      zona.removeEventListener('pointerenter', entrar)
      zona.removeEventListener('pointerleave', salir)
    }
  })

  return { espera, animar, hasta, parar, PARADA }
}
