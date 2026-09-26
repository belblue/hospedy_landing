// Formularios de contacto y de demo asistida: van al admin panel (POST /api/public/solicitudes),
// que guarda cada solicitud, la abre en su Bandeja y manda el acuse al visitante y el aviso al
// equipo. La dirección del panel sale de NUXT_PUBLIC_PANEL_API_BASE; sin ella, los formularios no
// se pueden enviar e invitan a escribir a hola@hospedy.app (disponible = false).
//
// Respuestas del panel: 200 {resultado: "Ok", mensaje} con el texto de éxito; 400 (validación o
// captcha), 429 (demasiadas solicitudes seguidas) y 503 (Cloudflare caído o captcha sin
// configurar) con `detail` en español, listo para enseñar. Cualquier otro fallo, o sin red, da un
// texto propio que invita a escribir a hola@hospedy.app.

export type SolicitudWeb = {
  tipo: 'contacto' | 'demo'
  nombre: string
  email: string
  telefono?: string
  alojamiento?: string
  unidades?: string
  mensaje?: string
  novedades: boolean
  pagina: string
  captcha_token: string
  // Trampa antispam: el campo oculto que una persona deja vacío. Si llega relleno, el panel
  // responde que todo ha ido bien y no hace nada.
  web: string
}

type RespuestaPanel = { resultado?: string; mensaje?: string }

const CORREO = 'hola@hospedy.app'
// Solo estos códigos traen en `detail` un texto pensado para el visitante
const CON_DETALLE = [400, 429, 503]
// La misma comprobación del correo que hace el panel: así un correo mal escrito no gasta el token
const EMAIL_RE = /^[^@\s,;<>"']+@[^@\s,;<>"']+\.[^@\s,;<>"']{2,}$/

// Dirección del admin panel sin la barra final ('' si no está configurada). También la usa el
// cuestionario de la cuenta de demo (/api/demo/request).
export function usePanelApiBase(): string {
  return String(useRuntimeConfig().public.panelApiBase || '').trim().replace(/\/+$/, '')
}

export function useSolicitudWeb() {
  const base = usePanelApiBase()

  function emailValido(email: string): boolean {
    const limpio = email.trim()
    return limpio.length <= 254 && EMAIL_RE.test(limpio)
  }

  // Devuelve el texto de éxito del panel. Si algo falla, lanza un Error con el texto que se enseña.
  async function enviarSolicitud(datos: SolicitudWeb): Promise<string> {
    const que = datos.tipo === 'demo' ? 'tu solicitud' : 'tu mensaje'
    const fallo = `No hemos podido enviar ${que}. Inténtalo de nuevo en unos minutos o escríbenos a ${CORREO}.`
    if (!base) throw new Error(fallo)

    let respuesta: RespuestaPanel | undefined
    try {
      respuesta = await $fetch<RespuestaPanel>(`${base}/api/public/solicitudes`, {
        method: 'POST',
        body: datos,
        timeout: 20000,
      })
    } catch (e: any) {
      const estado = e?.status ?? e?.response?.status
      const detalle = e?.data?.detail
      if (CON_DETALLE.includes(estado) && typeof detalle === 'string' && detalle.trim()) {
        throw new Error(detalle.trim())
      }
      console.error('[formulario] el panel no ha recibido la solicitud:', e)
      throw new Error(fallo)
    }

    // Un 200 que no es la respuesta del panel (una página HTML por una dirección mal puesta, por
    // ejemplo) no se da por bueno: la solicitud se perdería sin que nadie se enterase.
    if (!respuesta || respuesta.resultado !== 'Ok') {
      console.error('[formulario] respuesta inesperada del panel:', respuesta)
      throw new Error(fallo)
    }
    const mensaje = typeof respuesta.mensaje === 'string' ? respuesta.mensaje.trim() : ''
    return mensaje || `¡Gracias! Hemos recibido ${que}.`
  }

  return { disponible: Boolean(base), emailValido, enviarSolicitud }
}
