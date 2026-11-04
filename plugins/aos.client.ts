import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    // Volver atrás (o adelante) a una página ya vista no la vuelve a animar (Arturo, 04-11-2026, en el móvil): sin la
    // transición de página y con todo lo de AOS ya en su sitio, para que al devolver el scroll se vea lo que había y no
    // parezca que la página se recoloca. Mientras dura la vuelta, la marca sin-entradas en <html> quita las transiciones
    // de lo que anima AOS (main.css). También al recargar desde el historial, si el navegador no guardó la página.
    const raiz = document.documentElement
    const router = useRouter()
    const navegacion = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    let vuelta = navegacion?.type === 'back_forward'
    let desdeHistorial = false
    if (vuelta) raiz.classList.add('sin-entradas')

    // el historial del router solo avisa de los popstate: atrás y adelante, nunca de push ni replace
    router.options.history.listen(() => {
      desdeHistorial = true
    })
    router.beforeEach((to, from) => {
      // un ancla de la misma página (#...) no cambia de página: nada que enseñar de golpe
      if (desdeHistorial && to.path !== from.path) {
        to.meta.pageTransition = false
        vuelta = true
        raiz.classList.add('sin-entradas')
      }
      desdeHistorial = false
    })
    nuxtApp.hook('page:finish', () => {
      if (!vuelta) return
      vuelta = false
      document.querySelectorAll('[data-aos]').forEach(el => el.classList.add('aos-init', 'aos-animate'))
      // Nuxt devuelve el scroll justo después y AOS lo mira cada 99 ms: pasado eso, vuelven las transiciones
      setTimeout(() => raiz.classList.remove('sin-entradas'), 500)
    })

    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 0,
    })
  }
})
