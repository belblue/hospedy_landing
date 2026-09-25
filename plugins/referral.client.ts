// Programa Amigos: cualquier página abierta con ?ref=CODIGO recuerda el código (ver useReferral).
export default defineNuxtPlugin(() => {
  const { guardar } = useReferral()
  const capturar = (query: Record<string, unknown>) => {
    if (query && query.ref) guardar(query.ref)
  }
  capturar(useRoute().query)
  useRouter().afterEach((to) => capturar(to.query))
})
