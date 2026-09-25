// Programa Amigos: cualquier página abierta con ?ref=CODIGO recuerda el código (ver useReferral).
// Corre también en el servidor: así la página ya sale renderizada con la barra "Te ha invitado un
// amigo" y los enlaces al registro con el código, y el navegador hidrata lo mismo (si solo corriera
// en el navegador, la primera visita con ?ref= daría "Hydration completed but contains mismatches").
export default defineNuxtPlugin(() => {
  const { guardar } = useReferral()
  const capturar = (query: Record<string, unknown>) => {
    if (query && query.ref) guardar(query.ref)
  }
  capturar(useRoute().query)
  useRouter().afterEach((to) => capturar(to.query))
})
