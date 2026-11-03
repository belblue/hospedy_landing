// El recorrido de lo que no cabe en una maqueta (la pagina de Estadisticas, la lista y la conversacion de Mensajes)
// sin capturar la rueda: la parte tiene overflow:hidden y se mueve con scrollTop desde JS. Se recorre:
//   - arrastrando con el raton o el lapiz, a partir de 5 px: sin moverse, el clic sigue siendo un clic, y un
//     arrastre que acaba encima de un boton no lo pulsa;
//   - con el teclado, cuando la parte tiene el foco (flechas, Av Pag, Re Pag, espacio, Inicio y Fin);
//   - tocando lo que asoma (lo marcado con data-bloque): se trae entero, con lo de al lado asomando para seguir hacia
//     arriba o hacia abajo. Lo que no cabe entero se recorre a trozos: tocado en la mitad de arriba sube y en la de
//     abajo baja. Con "porZonas" (una parte baja, como la conversacion en el movil, donde lo siguiente apenas asoma),
//     cualquier toque fuera de un control sube o baja un trozo segun la mitad que se toque.
// El dedo es de la pagina: deslizarlo sobre la maqueta mueve la pagina, no la parte.
//
// Las medidas van en px del panel (escala: px de pantalla por px del panel), asi que, si la maqueta cambia de tamanno,
// el mismo punto sigue arriba. La parte lleva los "manejadores" con v-on y, al lado, su indicador de desplazamiento,
// en el mismo contenedor posicionado: "indicador.top" cuenta desde ese contenedor.
import { onBeforeUnmount, onMounted, ref, watch, type Ref } from 'vue'

interface Opciones {
  // px de pantalla por px del panel; por defecto, 1
  escala?: () => number
  // lo que queda asomando de lo de al lado al traer algo entero, en px del panel
  asoma?: number
  // con el dedo, tocar algo que asoma solo lo trae, y el toque siguiente ya lo pulsa: las filas de una lista, que al
  // pulsarlas se abren
  traerAntesDePulsar?: boolean
  // tocar en la mitad de arriba sube un trozo y en la de abajo baja, sin mirar data-bloque
  porZonas?: boolean
  // cualquier gesto del visitante sobre la parte (para cortar un vistazo)
  alTocar?: () => void
}

export function useRecorrido(el: Ref<HTMLElement | null>, opciones: Opciones = {}) {
  const asoma = opciones.asoma ?? 40
  const off = ref(0)
  const arrastrando = ref(false)
  const indicador = ref({ on: false, top: 0, alto: 0 })
  let animacion = 0
  let reducido = false

  function escala() {
    const k = opciones.escala ? opciones.escala() : 1
    return k > 0 ? k : 1
  }
  function altoVista() {
    return el.value ? el.value.clientHeight / escala() : 0
  }
  function maxOff() {
    const v = el.value
    return v ? Math.max(0, (v.scrollHeight - v.clientHeight) / escala()) : 0
  }
  const limitar = (x: number) => Math.max(0, Math.min(maxOff(), x))

  let tIndicador: ReturnType<typeof setTimeout> | undefined
  function mostrarIndicador() {
    const v = el.value
    if (!v) return
    const total = v.scrollHeight
    const vis = v.clientHeight
    if (total <= vis + 1) {
      indicador.value = { on: false, top: 0, alto: 0 }
      return
    }
    const pista = vis - 8
    const alto = Math.max(22, (pista * vis) / total)
    const top = v.offsetTop + 4 + (pista - alto) * (v.scrollTop / (total - vis))
    indicador.value = { on: true, top, alto }
    clearTimeout(tIndicador)
    tIndicador = setTimeout(() => {
      indicador.value = { ...indicador.value, on: false }
    }, 900)
  }

  function fijar(x: number) {
    off.value = limitar(x)
    if (el.value) el.value.scrollTop = off.value * escala()
    mostrarIndicador()
  }
  /* lo que mueve el propio navegador (el foco que pasa a algo que no se ve) */
  function alScroll() {
    if (!el.value) return
    off.value = el.value.scrollTop / escala()
    mostrarIndicador()
  }
  function cancelar() {
    if (animacion) cancelAnimationFrame(animacion)
    animacion = 0
  }
  function irA(destino: number, ms: number, fin?: () => void) {
    cancelar()
    const hasta = limitar(destino)
    if (reducido || !ms) {
      fijar(hasta)
      if (fin) fin()
      return
    }
    const desde = off.value
    const t0 = performance.now()
    const paso = (t: number) => {
      const k = Math.min(1, (t - t0) / ms)
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2
      fijar(desde + (hasta - desde) * e)
      if (k < 1) animacion = requestAnimationFrame(paso)
      else {
        animacion = 0
        if (fin) fin()
      }
    }
    animacion = requestAnimationFrame(paso)
  }

  /* la posicion de un elemento en lo que se recorre, en px del panel; con "abajo", la de su borde inferior */
  function posDe(x: HTMLElement, abajo?: boolean) {
    const v = el.value
    if (!v) return 0
    const r = x.getBoundingClientRect()
    return ((abajo ? r.bottom : r.top) - v.getBoundingClientRect().top - v.clientTop + v.scrollTop) / escala()
  }

  /* lo que asoma, entero: con su principio arriba y lo anterior asomando, y lo siguiente asoma debajo. Lo que no cabe
     se recorre a trozos hacia donde se ha tocado ("yToque", en px del panel desde arriba de la vista). Devuelve si se
     ha movido */
  function mostrarEntero(x: HTMLElement | null, yToque?: number) {
    if (!x) return false
    const arriba = posDe(x)
    const abajo = posDe(x, true)
    const vista = altoVista()
    const o = off.value
    if (arriba >= o - 1 && abajo <= o + vista + 1) return false
    if (abajo - arriba + asoma <= vista) irA(arriba - asoma, 450)
    else {
      /* un trozo, o hasta su principio (o su final) si queda poco mas: no se queda a unos px */
      const sube = yToque === undefined ? arriba < o - 1 : yToque < vista / 2
      const trozo = vista - asoma
      if (sube) {
        const hasta = arriba - asoma
        irA(Math.min(o, o - hasta <= trozo + asoma ? hasta : o - trozo), 450)
      }
      else {
        const hasta = abajo + asoma - vista
        irA(Math.max(o, hasta - o <= trozo + asoma ? hasta : o + trozo), 450)
      }
    }
    return true
  }

  /* ---- arrastre con raton o lapiz ---- */
  let pulsado: { id: number, y: number, o: number, k: number, movido: boolean } | null = null
  let recienArrastrado = false
  let tipo = 'mouse'

  function alPulsar(e: PointerEvent) {
    opciones.alTocar?.()
    tipo = e.pointerType
    if (e.pointerType === 'touch') return
    if (e.button !== undefined && e.button !== 0) return
    const t = e.target as Element | null
    if (t && t.closest && t.closest('input, textarea, .hm-sel__lista')) return
    e.preventDefault() /* sin esto, arrastrar selecciona texto */
    pulsado = { id: e.pointerId, y: e.clientY, o: off.value, k: escala(), movido: false }
  }
  function alMover(e: PointerEvent) {
    if (!pulsado || e.pointerId !== pulsado.id) return
    const dy = e.clientY - pulsado.y
    if (!pulsado.movido) {
      if (Math.abs(dy) < 5) return
      pulsado.movido = true
      arrastrando.value = true
      try {
        el.value?.setPointerCapture(e.pointerId)
      }
      catch {
        /* sin captura el arrastre sigue funcionando dentro de la parte */
      }
    }
    fijar(pulsado.o - dy / pulsado.k)
  }
  function alSoltar(e: PointerEvent) {
    if (!pulsado || e.pointerId !== pulsado.id) return
    if (pulsado.movido) {
      recienArrastrado = true
      setTimeout(() => {
        recienArrastrado = false
      }, 0)
    }
    pulsado = null
    arrastrando.value = false
  }
  /* un arrastre que acaba encima de un boton no lo pulsa; un toque en lo que asoma lo trae entero */
  function alClic(e: MouseEvent) {
    if (recienArrastrado) {
      e.stopPropagation()
      e.preventDefault()
      return
    }
    const v = el.value
    const t = e.target as Element | null
    if (opciones.porZonas) {
      /* un control hace lo suyo, y un clic del teclado (detail 0) no tiene sitio */
      if (!v || !e.detail || (t && t.closest && t.closest('a, button, input, textarea, select, label'))) return
      const trozo = altoVista() - asoma
      irA(off.value + ((e.clientY - v.getBoundingClientRect().top) / escala() < altoVista() / 2 ? -trozo : trozo), 450)
      return
    }
    const bloque = t && t.closest ? (t.closest('[data-bloque]') as HTMLElement | null) : null
    if (!v || !bloque || !v.contains(bloque)) return
    /* un clic del teclado (detail 0) no tiene sitio: se trae hacia donde este */
    const y = e.detail ? (e.clientY - v.getBoundingClientRect().top) / escala() : undefined
    const movido = mostrarEntero(bloque, y)
    if (movido && opciones.traerAntesDePulsar && e.detail && tipo !== 'mouse') {
      e.stopPropagation()
      e.preventDefault()
    }
  }
  function alTeclear(e: KeyboardEvent) {
    opciones.alTocar?.()
    if (e.target !== el.value) return
    const pagina = Math.max(40, altoVista() - 2 * asoma)
    let d: number | null = null
    if (e.key === 'ArrowDown') d = 40
    else if (e.key === 'ArrowUp') d = -40
    else if (e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) d = pagina
    else if (e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) d = -pagina
    else if (e.key === 'Home') d = -off.value
    else if (e.key === 'End') d = maxOff()
    if (d === null) return
    e.preventDefault()
    cancelar()
    fijar(off.value + d)
  }

  const manejadores = {
    pointerdown: alPulsar,
    pointermove: alMover,
    pointerup: alSoltar,
    pointercancel: alSoltar,
    clickCapture: alClic,
    keydown: alTeclear,
    scroll: alScroll,
  }

  /* al cambiar de tamanno, el mismo punto sigue arriba; escondida (display:none) guarda donde estaba. Si la parte se
     vuelve a crear (otro marco, otra conversacion), empieza arriba */
  let ro: ResizeObserver | null = null
  function observar(v: HTMLElement | null) {
    if (!v || typeof window === 'undefined' || !('ResizeObserver' in window)) return
    if (!ro) {
      ro = new ResizeObserver(() => {
        if (el.value && el.value.clientHeight) fijar(off.value)
      })
    }
    ro.observe(v)
  }
  watch(el, (nueva, vieja) => {
    if (vieja) ro?.unobserve(vieja)
    off.value = 0
    observar(nueva)
  }, { flush: 'post' })

  onMounted(() => {
    reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    observar(el.value)
  })
  onBeforeUnmount(() => {
    cancelar()
    ro?.disconnect()
    clearTimeout(tIndicador)
  })

  return { off, arrastrando, indicador, altoVista, maxOff, fijar, irA, cancelar, posDe, mostrarEntero, manejadores }
}
