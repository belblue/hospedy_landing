// Eventos de la medición de audiencia (Umami, que carga plugins/metricas.ts). Sin Umami (en dev sin
// configurar, o con un bloqueador) no hacen nada. Nunca llevan datos personales: solo el nombre del
// evento y, como mucho, a qué parte de la app lleva un enlace.
type Umami = { track: (nombre: string, datos?: Record<string, string>) => void }

export function useMetricas() {
  function evento(nombre: string, datos?: Record<string, string>) {
    if (import.meta.server) return
    ;(window as { umami?: Umami }).umami?.track(nombre, datos)
  }

  return { evento }
}
