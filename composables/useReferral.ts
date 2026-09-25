// Programa Amigos: el código de un enlace de invitación (gethospedy.com/r/CODIGO o cualquier
// página con ?ref=CODIGO) se recuerda 30 días en una cookie de esta web. La app de Hospedy vive en
// otro dominio, así que el código le llega en la URL de cada enlace que lleva a ella (appUrl). La
// app lo vuelve a recordar y lo pone en el registro, donde se puede corregir o quitar.
const COOKIE = 'hospedy_ref'
const MAX_AGE = 60 * 60 * 24 * 30
const APP_POR_DEFECTO = 'https://app.ridid.me'

export function normalizarCodigo (raw: unknown): string {
  const texto = Array.isArray(raw) ? raw[0] : raw
  if (typeof texto !== 'string') return ''
  return texto.trim().replace(/[^A-Za-z0-9\s-]/g, '').replace(/\s+/g, '-').toUpperCase().slice(0, 60)
}

export function useReferral () {
  const config = useRuntimeConfig()
  const cookie = useCookie<string | null>(COOKIE, { maxAge: MAX_AGE, sameSite: 'lax', path: '/' })
  const codigo = computed(() => cookie.value || '')

  function guardar (raw: unknown) {
    const limpio = normalizarCodigo(raw)
    if (limpio) cookie.value = limpio
  }

  // Enlace a la app de Hospedy (inicio de sesión, registro) llevando el código si lo hay
  function appUrl (path = '/') {
    const base = String(config.public.clientAppUrl || APP_POR_DEFECTO).replace(/\/+$/, '')
    const url = new URL(base + (path.startsWith('/') ? path : `/${path}`))
    if (codigo.value) url.searchParams.set('ref', codigo.value)
    return url.toString()
  }

  return { codigo, guardar, appUrl }
}
