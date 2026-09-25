// "¡Prueba Hospedy en 5 minutos!": un único modal con las tres formas de probar Hospedy (demo
// asistida, cuenta de demo con datos ficticios o cuenta propia). Cualquier botón de la web lo
// abre; el modal vive una sola vez en el layout y comparte este estado.
export function usePruebaHospedy() {
  const abierto = useState('prueba-hospedy-abierto', () => false)
  const config = useRuntimeConfig()

  return {
    abierto,
    // La cuenta de demo solo funciona con el orquestador del admin panel configurado
    // (NUXT_PUBLIC_DEMO_API_BASE); mientras tanto la opción se enseña como "Muy pronto".
    demoLista: computed(() => Boolean(config.public.demoApiBase)),
    abrir: () => {
      abierto.value = true
    },
    cerrar: () => {
      abierto.value = false
    },
  }
}
