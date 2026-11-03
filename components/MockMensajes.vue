<!--
  Maqueta de la pantalla "Mensajes" del panel: las conversaciones con los huespedes y la que esta
  abierta, con datos de ejemplo del Hotel Alameda (utils/mensajesEjemplo). NO habla con ninguna
  API.

  Copia la piel del panel: el menu lateral con el numero ambar, la banda de cabecera, el
  segmentado "Pendientes / Todos", los chips, lo que escribe el huesped en ambar claro y lo que
  sale de Hospedy en blanco. Y se puede usar como el panel: abrir conversaciones (abrirla la deja
  atendida), responder (la respuesta pasa por "Enviando", "Enviado" y "Entregado" y el huesped
  contesta al rato), corregir el email de un correo que no llego y reenviarlo, zanjar y reabrir,
  y ver un correo tal como le llego al huesped.

  Desde 1024 px va en un portatil (MockPortatilFrame), con la lista y la conversacion una al lado
  de la otra; por debajo, en el movil (MockPhoneFrame), como el panel en un movil: la lista o la
  conversacion. Todas las medidas van en --hm-u, 1 px del panel real: en el portatil la pone el
  marco y en el movil vale lo mismo que --p.

  La rueda no se captura: ni la lista ni la conversacion tienen scroll propio. Lo que no cabe en
  la conversacion queda arriba y, al llegar un mensaje, baja hasta el desde JS (scrollTop sobre
  overflow:hidden), como el auto check-in.
-->
<template>
  <component :is="movil ? MockPhoneFrame : MockPortatilFrame" v-bind="movil ? {} : { alto: ALTO_PANTALLA }">
    <div
      class="hm-msj"
      :class="{ 'hm-msj--movil': movil, 'is-conversacion': movil && abierto }"
      role="region"
      aria-label="Maqueta de la pantalla Mensajes de Hospedy, con conversaciones de ejemplo"
      @keydown.esc="cerrarCorreo"
    >
      <!-- el menu lateral del panel en el portatil y su barra de arriba en el movil -->
      <MockPanelMenu :movil="movil" marcado="Mensajes" :mensajes="pendientes" />

      <div class="hm-msj__main">
        <div class="hm-msj__banda">
          <svg class="hm-msj__banda-icono" viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.sobre" /></svg>
          <p class="hm-msj__titulo">Mensajes</p>
          <p class="hm-msj__subtitulo">
            Lo que contestan tus huéspedes a los correos de Hospedy, reserva por reserva. Responde desde aquí: lo reciben
            desde la dirección de tu alojamiento.
          </p>
        </div>

        <div class="hm-msj__tarjeta">
          <div class="hm-msj__filtros">
            <div class="hm-seg" role="tablist" aria-label="Qué mensajes ver">
              <button
                type="button"
                role="tab"
                class="hm-seg__op"
                :class="{ 'is-activo': estado === 'pendientes' }"
                :aria-selected="estado === 'pendientes' ? 'true' : 'false'"
                @click="cambiarEstado('pendientes')"
              >
                Pendientes<span v-if="pendientes" class="hm-seg__num">{{ pendientes }}</span>
              </button>
              <button
                type="button"
                role="tab"
                class="hm-seg__op"
                :class="{ 'is-activo': estado === 'todos' }"
                :aria-selected="estado === 'todos' ? 'true' : 'false'"
                @click="cambiarEstado('todos')"
              >
                Todos
              </button>
            </div>
            <label class="hm-interruptor">
              <input type="checkbox" :checked="aviso" @change="cambiarAviso">
              <span class="hm-interruptor__pista" aria-hidden="true" />
              Avisarme por correo cuando llegue un mensaje
            </label>
          </div>

          <div class="hm-msj__cuerpo">
            <div v-show="!movil || !abierto" class="hm-msj__lista">
              <div class="hm-msj__lista-titulo">{{ tituloLista }}</div>
              <div v-if="!lista.length" class="hm-msj__vacio">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.bandeja" /></svg>
                <span class="hm-msj__vacio-titulo">No tienes mensajes pendientes.</span>
                <span>Las conversaciones ya atendidas están en «Todos».</span>
              </div>
              <div
                v-for="h in lista"
                :key="h.id"
                class="hm-hilo"
                :class="{ 'is-sel': h.id === seleccionado, 'is-leido': !h.noLeidos && !h.entregaFallida }"
                role="button"
                tabindex="0"
                :aria-current="h.id === seleccionado ? 'true' : null"
                @click="abrir(h.id)"
                @keydown.enter.prevent="abrir(h.id)"
                @keydown.space.prevent="abrir(h.id)"
              >
                <span
                  class="hm-hilo__punto"
                  :class="{ 'is-activo': h.noLeidos > 0, 'is-fallo': !h.noLeidos && h.entregaFallida }"
                  :aria-label="h.noLeidos > 0 ? 'Sin leer' : (h.entregaFallida ? 'Correo no entregado' : null)"
                />
                <div class="hm-hilo__cuerpo">
                  <div class="hm-hilo__linea">
                    <span class="hm-hilo__titular">{{ h.titular }}</span>
                    <span class="hm-hilo__cuando">{{ h.cuando }}</span>
                  </div>
                  <div class="hm-hilo__meta">
                    <span class="hm-chip hm-chip--loc">{{ h.localizador }}</span>
                    <span v-if="noEntregado(h)" class="hm-chip hm-chip--fallo">no entregado</span>
                    <span>{{ ALOJAMIENTO_EJEMPLO }} · {{ h.fechas }}</span>
                    <span v-if="respondida(h)" class="hm-chip hm-chip--ok">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.check" /></svg>respondida
                    </span>
                    <span v-if="h.zanjada" class="hm-chip hm-chip--gris">zanjada</span>
                  </div>
                  <div class="hm-hilo__extracto">{{ extracto(h) }}</div>
                </div>
                <svg v-if="movil" class="hm-hilo__flecha" viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.derecha" /></svg>
              </div>
            </div>

            <div v-show="!movil || abierto" class="hm-msj__panel">
              <div v-if="abierto" class="hm-conv">
                <div class="hm-conv__cab">
                  <button v-if="movil" type="button" class="hm-conv__volver" aria-label="Volver a la lista" @click="volver">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.izquierda" /></svg>
                  </button>
                  <div class="hm-conv__quien">
                    <div class="hm-conv__titular">
                      {{ abierto.titular }}<span class="hm-conv__email"> ·&nbsp;{{ abierto.email }}</span>
                    </div>
                    <div class="hm-conv__meta">
                      <span class="hm-chip hm-chip--loc">{{ abierto.localizador }}</span>
                      <span>{{ ALOJAMIENTO_EJEMPLO }} · {{ abierto.fechas }}</span>
                      <span v-if="abierto.zanjada" class="hm-chip hm-chip--gris">Zanjada</span>
                    </div>
                  </div>
                  <div class="hm-conv__acciones">
                    <button type="button" class="hm-btn hm-btn--borde" @click="avisar('La reserva se abre en el planning, con su ficha')">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.calendario" /></svg>Abrir reserva
                    </button>
                    <button v-if="!abierto.zanjada" type="button" class="hm-btn hm-btn--gris" @click="zanjar">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.check" /></svg>Zanjar
                    </button>
                    <button v-else type="button" class="hm-btn hm-btn--azul" @click="reabrir">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.sobreAbierto" /></svg>Reabrir
                    </button>
                  </div>
                </div>

                <div ref="hiloEl" class="hm-conv__hilo">
                  <div v-for="m in abierto.mensajes" :key="m.id" class="hm-m" :class="m.dir === 'in' ? 'hm-m--in' : 'hm-m--out'">
                    <div class="hm-m__cab">
                      <template v-if="m.dir === 'in'">
                        <span class="hm-chip hm-chip--ambar">Huésped</span>
                        <b>{{ abierto.titular }}</b>
                        <span>· {{ m.cuando }}</span>
                        <span v-if="m.nuevo" class="hm-chip hm-chip--nuevo">Nuevo</span>
                      </template>
                      <template v-else>
                        <span class="hm-chip hm-chip--env">{{ m.respuesta ? ALOJAMIENTO_EJEMPLO : 'Hospedy' }}</span>
                        <b>{{ m.titulo }}</b>
                        <span>· {{ m.cuando }}</span>
                        <span
                          :class="{ 'is-fallido': m.entrega === 'no_entregado', 'is-ayuda': m.entrega === 'entregado' }"
                          :title="m.entrega === 'entregado' ? AYUDA_ENTREGADO : undefined"
                        >· {{ estadoEnvio(m) }}</span>
                        <a v-if="m.correo" href="#" class="hm-m__ver" @click.prevent="verCorreo(m)">Ver el correo</a>
                      </template>
                    </div>
                    <p v-if="m.texto" class="hm-m__texto">{{ m.texto }}</p>
                    <p v-else-if="m.dir === 'out'" class="hm-m__texto hm-m__resumen">Enviado a {{ m.para }}.</p>
                    <template v-if="m.dir === 'out'">
                      <p v-if="m.reenvioDe" class="hm-m__nota">{{ m.reenvioDe }}</p>
                      <p v-if="m.reenviado" class="hm-m__nota">{{ m.reenviado }}</p>
                      <div v-if="m.puedeReenviar" class="hm-m__reenviar">
                        <label :for="'hm-msj-email-' + m.id" class="hm-m__reenviar-texto">Corrige el email si está mal y vuelve a enviárselo.</label>
                        <div class="hm-m__reenviar-form">
                          <input
                            :id="'hm-msj-email-' + m.id"
                            v-model="correcciones[m.id]"
                            type="email"
                            maxlength="100"
                            autocomplete="off"
                            spellcheck="false"
                            class="hm-campo"
                            @keydown.enter.prevent="reenviar(m)"
                          >
                          <button type="button" class="hm-btn hm-btn--azul" :disabled="!emailNuevo(m)" @click="reenviar(m)">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.avion" /></svg>{{ botonReenviar(m) }}
                          </button>
                        </div>
                        <span class="hm-m__nota">Si no tienes otro email, avísale por teléfono o WhatsApp.</span>
                      </div>
                    </template>
                    <template v-if="m.adjunto">
                      <span class="hm-m__adjunto">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.documento" /></svg>
                        {{ m.adjunto.nombre }}<small> · {{ m.adjunto.tamano }} · descargar</small>
                      </span>
                      <p class="hm-m__aviso">Lo ha escrito el huésped: los enlaces de su texto no se abren desde aquí y los archivos bloqueados no se guardan.</p>
                    </template>
                  </div>
                </div>

                <div class="hm-conv__resp">
                  <label for="hm-msj-respuesta" class="hm-conv__label">Responder a {{ abierto.titular }}</label>
                  <textarea
                    id="hm-msj-respuesta"
                    v-model="texto"
                    class="hm-conv__texto"
                    :rows="movil ? 2 : 3"
                    maxlength="600"
                    placeholder="Escribe tu respuesta…"
                  />
                  <div class="hm-conv__pie">
                    <span class="hm-conv__desde">Saldrá desde <b>{{ DIRECCION_ALOJAMIENTO }}</b> en el mismo hilo. {{ abierto.titular }} nunca ve tu correo personal.</span>
                    <button type="button" class="hm-btn hm-btn--azul" :disabled="!texto.trim()" @click="enviar">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.avion" /></svg>Enviar respuesta
                    </button>
                  </div>
                </div>
              </div>
              <div v-else class="hm-msj__panel-vacio">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.sobreAbierto" /></svg>
                <span>Elige una conversación de la lista para leerla y responder.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- el boton de Hugo, que el panel lleva en todas las pantallas -->
      <span class="hm-msj__hugo" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path :d="ICONOS.chat" /></svg>
      </span>

      <div v-if="toast" class="hm-msj__toast" role="status">{{ toast }}</div>

      <!-- "Ver el correo": el correo tal como le llego al huesped -->
      <div v-if="correo" class="hm-modal" @click.self="cerrarCorreo">
        <div class="hm-modal__dialogo" role="dialog" aria-modal="true" :aria-label="correo.asunto">
          <div class="hm-modal__cab">
            <span class="hm-modal__titulo">{{ correo.asunto }}</span>
            <button ref="cerrarEl" type="button" class="hm-modal__cerrar" aria-label="Cerrar" @click="cerrarCorreo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.cerrar" /></svg>
            </button>
          </div>
          <div class="hm-modal__cuerpo">
            <div class="hm-email">
              <div class="hm-email__caja">
                <div class="hm-email__logo">
                  <svg viewBox="0 0 44 50" aria-hidden="true">
                    <circle cx="22" cy="19" r="17" fill="#1e3a5f" />
                    <text x="22" y="26.5" text-anchor="middle" font-size="21" font-family="Georgia, 'Times New Roman', serif" font-weight="700" fill="#f2c96d">A</text>
                    <text x="22" y="46.5" text-anchor="middle" font-size="6.4" font-weight="800" letter-spacing="0.3" fill="#1e3a5f">ALAMEDA</text>
                  </svg>
                </div>
                <template v-if="correo.tipo === 'respuesta'">
                  <p class="hm-email__texto">{{ correo.texto }}</p>
                </template>
                <template v-else>
                  <p class="hm-email__titulo">{{ correo.titulo }}</p>
                  <p class="hm-email__texto">{{ correo.texto }}</p>
                  <span v-if="correo.tipo === 'checkin'" class="hm-email__boton">{{ correo.boton }}</span>
                  <div class="hm-email__datos">
                    <div v-for="d in correo.datos" :key="d[0]" class="hm-email__dato">
                      <span class="hm-email__rotulo">{{ d[0] }}</span>
                      <b>{{ d[1] }}</b>
                      <span v-if="d[2]">{{ d[2] }}</span>
                      <span v-if="d[3]">{{ d[3] }}</span>
                    </div>
                  </div>
                </template>
                <p class="hm-email__pie">{{ correo.pie }}</p>
                <p class="hm-email__marca">{{ correo.marca }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import MockPhoneFrame from '~/components/MockPhoneFrame.vue'
import MockPortatilFrame from '~/components/MockPortatilFrame.vue'
import MockPanelMenu from '~/components/MockPanelMenu.vue'
import { ICONOS_PANEL as ICONOS } from '~/utils/iconosPanel'
import {
  ALOJAMIENTO_EJEMPLO,
  DIRECCION_ALOJAMIENTO,
  RELOJ_MENSAJES,
  conversacionesDeEjemplo,
  type HiloEjemplo,
  type MensajeEjemplo,
} from '~/utils/mensajesEjemplo'

const AYUDA_ENTREGADO = 'El servidor de correo del huésped lo ha aceptado. No quiere decir que esté en su bandeja de entrada: Gmail u Outlook no avisan si lo dejan en correo no deseado.'

/* el portatil desde 1024 px; por debajo, el movil. Va dentro de MontarAlVerse, que solo la monta
   en el navegador: aqui ya se sabe el ancho y no hay que cambiar de marco despues de pintar */
const ANCHO_PORTATIL = '(min-width: 1024px)'
/* la pantalla del portatil, algo mas alta que la del marco por defecto: cabe la conversacion */
const ALTO_PANTALLA = 832
const movil = ref(typeof window !== 'undefined' && !window.matchMedia(ANCHO_PORTATIL).matches)
const hilos = ref<HiloEjemplo[]>(conversacionesDeEjemplo())
const estado = ref<'pendientes' | 'todos'>('pendientes')
/* la lista que se ve: como en el panel, se rehace al cambiar de pestaña o tras responder,
   reenviar, zanjar o reabrir; abrir una conversacion no la saca de "Pendientes" hasta entonces */
const idsLista = ref<number[]>([])
const seleccionado = ref<number | null>(null)
const texto = ref('')
/* el email de cada correo que no llego, para corregirlo: empieza con la direccion a la que fue */
const correcciones = reactive<Record<number, string>>({})
hilos.value.forEach(h => h.mensajes.forEach((m) => {
  if (m.puedeReenviar && m.para) correcciones[m.id] = m.para
}))
const aviso = ref(true)
const toast = ref('')
const correoAbierto = ref<{ hilo: HiloEjemplo, mensaje: MensajeEjemplo } | null>(null)
const hiloEl = ref<HTMLElement | null>(null)
const cerrarEl = ref<HTMLElement | null>(null)

const pendientes = computed(() => hilos.value.filter(h => h.esperando && !h.zanjada).length)
const lista = computed(() => idsLista.value
  .map(id => hilos.value.find(h => h.id === id))
  .filter((h): h is HiloEjemplo => !!h))
const abierto = computed(() => hilos.value.find(h => h.id === seleccionado.value) || null)

const tituloLista = computed(() => {
  const n = idsLista.value.length
  if (estado.value === 'pendientes') return n === 1 ? '1 conversación pendiente' : n + ' conversaciones pendientes'
  return n === 1 ? '1 conversación' : n + ' conversaciones'
})

/* el reloj de la maqueta: las 11:00 de su "hoy" mas lo que lleve abierta la pagina */
let inicio = 0
function ahora() {
  const minutos = RELOJ_MENSAJES.h * 60 + RELOJ_MENSAJES.m + Math.floor((Date.now() - inicio) / 60000)
  const dos = (n: number) => (n < 10 ? '0' : '') + n
  return RELOJ_MENSAJES.dia + ', ' + dos(Math.floor(minutos / 60) % 24) + ':' + dos(minutos % 60)
}

const temporizadores = new Set<ReturnType<typeof setTimeout>>()
function luego(ms: number, fn: () => void) {
  const t = setTimeout(() => {
    temporizadores.delete(t)
    fn()
  }, ms)
  temporizadores.add(t)
}

let tToast: ReturnType<typeof setTimeout> | undefined
function avisar(mensaje: string) {
  toast.value = mensaje
  clearTimeout(tToast)
  tToast = setTimeout(() => {
    toast.value = ''
  }, 2800)
}

function cargarLista() {
  idsLista.value = hilos.value
    .filter(h => estado.value === 'todos' || (h.esperando && !h.zanjada))
    .map(h => h.id)
}

function cambiarEstado(nuevo: 'pendientes' | 'todos') {
  if (nuevo === estado.value) return
  estado.value = nuevo
  cargarLista()
}

function cambiarAviso(e: Event) {
  aviso.value = (e.target as HTMLInputElement).checked
  avisar('Ajustes guardados')
}

/* el ultimo mensaje es nuestro y no espera nada del hotel (si no llego, no cuenta como respondida) */
function respondida(h: HiloEjemplo) {
  const u = h.mensajes[h.mensajes.length - 1]
  return !!u && u.dir === 'out' && !!u.respuesta && !h.esperando && !h.zanjada && !noEntregado(h)
}
function noEntregado(h: HiloEjemplo) {
  if (h.entregaFallida) return true
  const u = h.mensajes[h.mensajes.length - 1]
  return !!u && u.dir === 'out' && u.entrega === 'no_entregado'
}
function extracto(h: HiloEjemplo) {
  const u = h.mensajes[h.mensajes.length - 1]
  return (u && u.texto) || ''
}

function estadoEnvio(m: MensajeEjemplo) {
  if (m.entrega === 'no_entregado') return 'No entregado: ' + (m.motivo || 'el servidor del huésped no lo ha aceptado')
  if (m.entrega === 'entregado') return 'Entregado'
  if (m.entrega === 'enviado') return 'Enviado'
  return 'Enviando'
}

/* la conversacion con actividad nueva sube la primera, como en el panel */
function subir(h: HiloEjemplo) {
  const i = hilos.value.indexOf(h)
  if (i > 0) {
    hilos.value.splice(i, 1)
    hilos.value.unshift(h)
  }
}

function bajarHilo() {
  nextTick(() => {
    const el = hiloEl.value
    if (!el) return
    const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({ top: el.scrollHeight, behavior: suave ? 'smooth' : 'auto' })
  })
}

/* abrirla la deja leida y atendida; sus mensajes nuevos llevan "Nuevo" mientras se ve */
function abrir(id: number) {
  if (id === seleccionado.value) return
  const anterior = abierto.value
  if (anterior) anterior.mensajes.forEach((m) => { m.nuevo = false })
  seleccionado.value = id
  texto.value = ''
  const h = abierto.value
  if (h) {
    h.noLeidos = 0
    h.entregaFallida = false
    h.esperando = false
  }
  bajarHilo()
}

function volver() {
  const h = abierto.value
  if (h) h.mensajes.forEach((m) => { m.nuevo = false })
  seleccionado.value = null
}

function anadir(h: HiloEjemplo, mensaje: MensajeEjemplo): MensajeEjemplo {
  h.mensajes.push(mensaje)
  h.cuando = 'ahora'
  subir(h)
  if (h.id === seleccionado.value) bajarHilo()
  /* el que se ha anadido, ya reactivo: los cambios de estado de despues se tienen que ver */
  return h.mensajes[h.mensajes.length - 1]
}

let siguiente = 1000

function enviar() {
  const h = abierto.value
  const t = texto.value.trim()
  if (!h || !t) return
  /* sale en el hilo del ultimo correo, en el idioma del huesped */
  const previo = [...h.mensajes].reverse().find(x => x.correo)?.correo
  const m = anadir(h, {
    id: siguiente++,
    dir: 'out',
    respuesta: true,
    titulo: 'Respuesta',
    cuando: ahora(),
    entrega: 'enviando',
    para: h.email,
    texto: t,
    correo: {
      asunto: 'Re: ' + (previo ? previo.asunto.replace(/^Re: /, '') : h.localizador),
      idioma: previo ? previo.idioma : 'es',
      tipo: 'respuesta',
    },
  })
  texto.value = ''
  h.esperando = false
  avisar('Respuesta enviada')
  cargarLista()
  luego(900, () => { m.entrega = 'enviado' })
  luego(2200, () => {
    m.entrega = 'entregado'
    const contesta = h.contesta
    if (!contesta) return
    h.contesta = undefined
    /* el huesped contesta al rato: si la conversacion esta abierta se lee al momento */
    luego(4500, () => {
      anadir(h, { id: siguiente++, dir: 'in', cuando: ahora(), texto: contesta, nuevo: true })
      if (h.id !== seleccionado.value) {
        h.noLeidos = 1
        h.esperando = true
      }
    })
  })
}

/* el email del campo, si sirve para reenviar */
function emailNuevo(m: MensajeEjemplo) {
  const email = String(correcciones[m.id] ?? m.para ?? '').trim()
  return email.indexOf('@') > 0 ? email : ''
}
/* "Guardar y reenviar" si es una correccion, que se guarda en la reserva; "Reenviar" si no */
function botonReenviar(m: MensajeEjemplo) {
  const nuevo = emailNuevo(m).toLowerCase()
  const h = abierto.value
  const seGuarda = !!h && !!nuevo && nuevo !== h.email.toLowerCase() && nuevo !== String(m.para).toLowerCase()
  return seGuarda ? 'Guardar y reenviar' : 'Reenviar'
}

function reenviar(m: MensajeEjemplo) {
  const h = abierto.value
  const nuevo = emailNuevo(m)
  if (!h || !nuevo) return
  const guarda = botonReenviar(m) === 'Guardar y reenviar'
  m.puedeReenviar = false
  m.reenviado = 'Reenviado el ' + ahora() + '.'
  if (guarda) h.email = nuevo
  const r = anadir(h, {
    id: siguiente++,
    dir: 'out',
    titulo: m.titulo,
    cuando: ahora(),
    entrega: 'enviando',
    para: nuevo,
    correo: m.correo,
    reenvioDe: 'Reenvío del correo del ' + m.cuando + '.',
  })
  avisar('Correo reenviado' + (guarda ? ' y email guardado en la reserva' : ''))
  cargarLista()
  luego(900, () => { r.entrega = 'enviado' })
  luego(2400, () => {
    /* con la misma errata, el servidor del huesped lo vuelve a rechazar */
    if (/@(gmial|gmal|hotmial|outlok)\./i.test(nuevo) || !/\.[a-z]{2,}$/i.test(nuevo)) {
      r.entrega = 'no_entregado'
      r.motivo = 'la dirección no existe'
      r.puedeReenviar = true
      correcciones[r.id] = nuevo
    } else {
      r.entrega = 'entregado'
    }
  })
}

function zanjar() {
  const h = abierto.value
  if (!h) return
  h.zanjada = true
  h.esperando = false
  avisar('Conversación zanjada')
  cargarLista()
}

function reabrir() {
  const h = abierto.value
  if (!h) return
  h.zanjada = false
  avisar('Conversación reabierta')
  cargarLista()
}

/* "Ver el correo": lo que le llego al huesped, con los datos de su reserva */
const correo = computed(() => {
  const sel = correoAbierto.value
  if (!sel) return null
  const { hilo: h, mensaje: m } = sel
  const c = m.correo!
  const en = c.idioma === 'en'
  const base = {
    asunto: c.asunto,
    tipo: c.tipo,
    pie: en ? 'You can reply to this email: your message will reach ' + ALOJAMIENTO_EJEMPLO + '.' : 'Puede responder a este correo: su mensaje llegará a ' + ALOJAMIENTO_EJEMPLO + '.',
    marca: ALOJAMIENTO_EJEMPLO + (en ? ' manages its bookings with Hospedy.' : ' gestiona sus reservas con Hospedy.'),
  }
  if (c.tipo === 'respuesta') return { ...base, texto: m.texto || '', titulo: '', boton: '', datos: [] as string[][] }
  const datos = [
    [en ? 'CHECK-IN' : 'LLEGADA', ...(c.llegada || [])],
    [en ? 'CHECK-OUT' : 'SALIDA', ...(c.salida || [])],
    [en ? 'BOOKING REF.' : 'LOCALIZADOR', h.localizador],
  ]
  if (c.tipo === 'checkin') {
    return {
      ...base,
      titulo: 'Check-in online',
      texto: 'Gracias por reservar en ' + ALOJAMIENTO_EJEMPLO + '. Para agilizar su llegada, haga el check-in online con sus datos y comparta el enlace con sus acompañantes mayores de 16 años para que hagan lo mismo.',
      boton: 'Hacer el check-in',
      datos,
    }
  }
  return {
    ...base,
    titulo: en ? 'Your booking summary' : 'Resumen de su reserva',
    texto: en
      ? 'Hello ' + h.titular + ', here is the summary of your booking at ' + ALOJAMIENTO_EJEMPLO + '.'
      : 'Hola, ' + h.titular + ': le enviamos el resumen de su reserva en ' + ALOJAMIENTO_EJEMPLO + '.',
    boton: '',
    datos,
  }
})

function verCorreo(m: MensajeEjemplo) {
  const h = abierto.value
  if (!h || !m.correo) return
  correoAbierto.value = { hilo: h, mensaje: m }
  nextTick(() => cerrarEl.value?.focus())
}
function cerrarCorreo() {
  correoAbierto.value = null
}

let mq: MediaQueryList | null = null
function alCambiarAncho() {
  movil.value = !!mq && !mq.matches
}

onMounted(() => {
  inicio = Date.now()
  mq = window.matchMedia(ANCHO_PORTATIL)
  alCambiarAncho()
  mq.addEventListener('change', alCambiarAncho)
  cargarLista()
  /* en el portatil, como al llegar desde el aviso por correo: con la conversacion nueva abierta */
  if (!movil.value) abrir(1)
})

onBeforeUnmount(() => {
  mq?.removeEventListener('change', alCambiarAncho)
  temporizadores.forEach(t => clearTimeout(t))
  clearTimeout(tToast)
})
</script>

<style scoped>
/* Colores del panel (src/App.vue): tinta, ambar del acento, teal primario y el rojo de marca */
.hm-msj {
  --hm-ink: #26323f;
  --hm-ink-muted: #5e6a67;
  --hm-muted: #9ba0aa;
  --hm-accent: #f59e0b;
  --hm-accent-surface: #fcebc8;
  --hm-accent-ink: #7c4a02;
  --hm-primary: #0f766e;
  --hm-primary-tint: #f0fdfa;
  --hm-primary-border: #99f6e4;
  --hm-primary-surface: #e4ecea;
  --hm-danger: #bc475e;
  --hm-borde: #e2dfdd;
  --hm-raya: #eeeeee;

  position: absolute;
  inset: 0;
  display: flex;
  background: #eef6f4;
  color: var(--hm-ink);
  font-size: calc(16 * var(--hm-u));
  line-height: 1.5;
  overflow: hidden;
  text-align: left;
}
/* en el movil va debajo de la barra de estado del telefono, que no es del panel */
.hm-msj--movil {
  --hm-u: var(--p);
  position: relative;
  inset: auto;
  flex: 1 1 auto;
  min-height: 0;
  flex-direction: column;
}
:where(.hm-msj) :where(p) {
  margin: 0;
}
:where(.hm-msj) :where(button, input, textarea) {
  font: inherit;
  color: inherit;
}
/* los iconos de trazo; el logo de Hospedy lleva sus colores */
.hm-msj :where(svg:not(.hm-logo-hospedy)) {
  flex: none;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ===== La pagina: banda de cabecera y la tarjeta que la solapa ===== */
.hm-msj__main {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.hm-msj__banda {
  position: relative;
  flex: 0 0 auto;
  height: calc(152 * var(--hm-u));
  padding: calc(26 * var(--hm-u)) calc(30 * var(--hm-u)) 0;
  overflow: hidden;
  background-color: var(--hm-accent-surface);
  background-image: linear-gradient(to top right, rgba(255, 255, 255, 0) 15%, rgba(255, 255, 255, 0.7) 50%, #fff 85%);
  transition: height 0.35s ease, padding 0.35s ease;
}
.hm-msj__banda-icono {
  position: absolute;
  top: calc(-14 * var(--hm-u));
  right: calc(20 * var(--hm-u));
  width: calc(180 * var(--hm-u));
  height: calc(180 * var(--hm-u));
  color: var(--hm-accent);
  opacity: 0.25;
  stroke-width: 1.4;
}
.hm-msj__titulo {
  position: relative;
  font-size: calc(34 * var(--hm-u));
  font-weight: 600;
  line-height: 1.2;
}
.hm-msj__subtitulo {
  position: relative;
  max-width: calc(760 * var(--hm-u));
  margin-top: calc(6 * var(--hm-u)) !important;
  font-size: calc(16 * var(--hm-u));
  line-height: 1.4;
}
.hm-msj__tarjeta {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin: calc(-28 * var(--hm-u)) calc(15 * var(--hm-u)) calc(15 * var(--hm-u));
  background: #fff;
  border-radius: calc(7 * var(--hm-u));
  box-shadow: 0 0 calc(8 * var(--hm-u)) calc(2 * var(--hm-u)) rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.hm-msj__filtros {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: calc(16 * var(--hm-u));
  padding: calc(16 * var(--hm-u)) calc(20 * var(--hm-u));
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 calc(32 * var(--hm-u)) 0 rgba(136, 152, 170, 0.15);
}

/* el segmentado del panel (.h-segmentado de App.vue) */
.hm-seg {
  display: inline-flex;
  gap: calc(4 * var(--hm-u));
  padding: calc(4 * var(--hm-u));
  border-radius: calc(12 * var(--hm-u));
  background: var(--hm-primary-surface);
}
.hm-seg__op {
  display: inline-flex;
  align-items: center;
  gap: calc(8 * var(--hm-u));
  height: calc(40 * var(--hm-u));
  padding: 0 calc(14 * var(--hm-u));
  border: 0;
  border-radius: calc(9 * var(--hm-u));
  background: transparent;
  font-size: calc(16 * var(--hm-u)) !important;
  font-weight: 700 !important;
  white-space: nowrap;
  cursor: pointer;
}
.hm-seg__op.is-activo {
  background: #fff;
  color: var(--hm-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);
}
.hm-seg__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: calc(24 * var(--hm-u));
  height: calc(24 * var(--hm-u));
  padding: 0 calc(7 * var(--hm-u));
  border-radius: 999px;
  background: #fff;
  color: var(--hm-ink);
  font-size: calc(13 * var(--hm-u));
  font-weight: 800;
}
.hm-seg__op.is-activo .hm-seg__num {
  background: var(--hm-primary-surface);
}

/* el interruptor de Bootstrap (custom-switch) */
.hm-interruptor {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: calc(10 * var(--hm-u));
  font-weight: 600;
  cursor: pointer;
  user-select: none;
}
.hm-interruptor input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}
.hm-interruptor__pista {
  position: relative;
  width: calc(32 * var(--hm-u));
  height: calc(18 * var(--hm-u));
  border-radius: 999px;
  border: 1px solid #adb5bd;
  background: #fff;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}
.hm-interruptor__pista::after {
  content: "";
  position: absolute;
  top: calc(2 * var(--hm-u));
  left: calc(2 * var(--hm-u));
  width: calc(12 * var(--hm-u));
  height: calc(12 * var(--hm-u));
  border-radius: 50%;
  background: #adb5bd;
  transition: transform 0.15s ease, background-color 0.15s ease;
}
.hm-interruptor input:checked + .hm-interruptor__pista {
  background: var(--hm-primary);
  border-color: var(--hm-primary);
}
.hm-interruptor input:checked + .hm-interruptor__pista::after {
  background: #fff;
  transform: translateX(calc(14 * var(--hm-u)));
}
.hm-interruptor input:focus-visible + .hm-interruptor__pista {
  outline: 2px solid var(--hm-primary);
  outline-offset: 2px;
}

/* ===== Cuerpo: la lista a la izquierda y la conversacion a la derecha ===== */
.hm-msj__cuerpo {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
}
.hm-msj__lista {
  flex: 0 0 calc(380 * var(--hm-u));
  min-height: 0;
  overflow: hidden;
  border-right: 1px solid var(--hm-raya);
}
.hm-msj__lista-titulo {
  padding: calc(10 * var(--hm-u)) calc(16 * var(--hm-u));
  border-bottom: 1px solid var(--hm-raya);
  font-size: calc(12 * var(--hm-u));
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--hm-ink-muted);
}
.hm-msj__vacio,
.hm-msj__panel-vacio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(10 * var(--hm-u));
  padding: calc(48 * var(--hm-u)) calc(24 * var(--hm-u));
  text-align: center;
  color: grey;
  font-size: calc(15 * var(--hm-u));
}
.hm-msj__vacio svg,
.hm-msj__panel-vacio svg {
  width: calc(44 * var(--hm-u));
  height: calc(44 * var(--hm-u));
}
.hm-msj__vacio-titulo {
  font-size: calc(18 * var(--hm-u));
  font-weight: 600;
}
.hm-msj__panel-vacio {
  height: 100%;
}

.hm-hilo {
  display: flex;
  gap: calc(12 * var(--hm-u));
  align-items: flex-start;
  padding: calc(14 * var(--hm-u)) calc(16 * var(--hm-u));
  border-bottom: 1px solid var(--hm-raya);
  cursor: pointer;
  user-select: none;
}
.hm-hilo:hover {
  background: rgba(15, 118, 110, 0.06);
}
.hm-hilo.is-sel {
  background: var(--hm-primary-tint);
}
.hm-hilo:focus {
  outline: none;
}
.hm-hilo:focus-visible {
  outline: 2px solid var(--hm-primary);
  outline-offset: -2px;
}
.hm-hilo__punto {
  flex: none;
  width: calc(10 * var(--hm-u));
  height: calc(10 * var(--hm-u));
  margin-top: calc(6 * var(--hm-u));
  border-radius: 50%;
}
.hm-hilo__punto.is-activo {
  background: var(--hm-accent);
}
.hm-hilo__punto.is-fallo {
  background: var(--hm-danger);
}
.hm-hilo__cuerpo {
  flex: 1;
  min-width: 0;
}
.hm-hilo__linea {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: calc(8 * var(--hm-u));
}
.hm-hilo__titular {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: calc(15 * var(--hm-u));
  font-weight: 700;
}
.hm-hilo__cuando {
  white-space: nowrap;
  font-size: calc(12 * var(--hm-u));
  color: var(--hm-ink-muted);
}
.hm-hilo__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(6 * var(--hm-u));
  margin-top: calc(3 * var(--hm-u));
  font-size: calc(12.5 * var(--hm-u));
  color: var(--hm-ink-muted);
}
.hm-hilo__extracto {
  margin-top: calc(6 * var(--hm-u));
  min-height: calc(20 * var(--hm-u));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: calc(13.5 * var(--hm-u));
}
.hm-hilo.is-leido .hm-hilo__titular,
.hm-hilo.is-leido .hm-hilo__extracto {
  font-weight: 400;
  color: var(--hm-ink-muted);
}
.hm-hilo__flecha {
  align-self: center;
  width: calc(16 * var(--hm-u));
  height: calc(16 * var(--hm-u));
  color: var(--hm-muted);
}

/* los chips del panel */
.hm-chip {
  display: inline-flex;
  align-items: center;
  gap: calc(5 * var(--hm-u));
  height: calc(22 * var(--hm-u));
  padding: 0 calc(8 * var(--hm-u));
  border-radius: 999px;
  font-size: calc(11.5 * var(--hm-u));
  font-weight: 700;
  white-space: nowrap;
}
.hm-chip svg {
  width: calc(11 * var(--hm-u));
  height: calc(11 * var(--hm-u));
  stroke-width: 3;
}
.hm-chip--loc {
  background: var(--hm-primary-tint);
  color: var(--hm-primary);
  box-shadow: inset 0 0 0 1px var(--hm-primary-border);
}
.hm-chip--env {
  background: var(--hm-primary-tint);
  color: var(--hm-primary);
}
.hm-chip--ambar {
  background: var(--hm-accent-surface);
  color: var(--hm-accent-ink);
}
.hm-chip--nuevo {
  background: var(--hm-accent);
  color: var(--hm-ink);
}
.hm-chip--ok {
  background: rgba(32, 203, 118, 0.14);
  color: #0f7a47;
}
.hm-chip--gris {
  background: #f3f4f6;
  color: var(--hm-ink-muted);
}
.hm-chip--fallo {
  background: rgba(188, 71, 94, 0.12);
  color: var(--hm-danger);
}

/* ===== La conversacion (MensajesReserva.vue) ===== */
.hm-msj__panel {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.hm-conv {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.hm-conv__cab {
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: calc(16 * var(--hm-u));
  padding: calc(16 * var(--hm-u)) calc(22 * var(--hm-u));
  border-bottom: 1px solid var(--hm-raya);
}
.hm-conv__volver {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: calc(44 * var(--hm-u));
  height: calc(44 * var(--hm-u));
  margin-right: calc(-8 * var(--hm-u));
  border: 0;
  border-radius: calc(8 * var(--hm-u));
  background: transparent;
  color: var(--hm-primary) !important;
  cursor: pointer;
}
.hm-conv__volver svg {
  width: calc(20 * var(--hm-u));
  height: calc(20 * var(--hm-u));
  stroke-width: 2.6;
}
.hm-conv__quien {
  flex: 1 1 calc(260 * var(--hm-u));
  min-width: 0;
}
.hm-conv__titular {
  font-size: calc(19 * var(--hm-u));
  font-weight: 700;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.hm-conv__email {
  font-size: calc(15 * var(--hm-u));
  font-weight: 400;
  color: var(--hm-ink-muted);
}
.hm-conv__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(6 * var(--hm-u));
  margin-top: calc(4 * var(--hm-u));
  font-size: calc(13.5 * var(--hm-u));
  color: var(--hm-ink-muted);
}
.hm-conv__acciones {
  display: flex;
  flex-wrap: wrap;
  gap: calc(10 * var(--hm-u));
}

/* los botones del panel (.bttn de App.vue) */
.hm-btn {
  display: inline-flex;
  align-items: center;
  gap: calc(6 * var(--hm-u));
  height: calc(43 * var(--hm-u));
  padding: 0 calc(12 * var(--hm-u));
  border-radius: calc(6 * var(--hm-u));
  font-size: calc(16 * var(--hm-u)) !important;
  font-weight: 600 !important;
  white-space: nowrap;
  cursor: pointer;
}
.hm-btn svg {
  width: calc(15 * var(--hm-u));
  height: calc(15 * var(--hm-u));
  stroke-width: 2.4;
}
.hm-btn--azul {
  border: 1px solid var(--hm-primary);
  background: var(--hm-primary);
  color: #fff !important;
}
.hm-btn--azul:hover {
  background: #0b5a54;
}
.hm-btn--azul:disabled {
  opacity: 0.65;
  cursor: default;
  background: var(--hm-primary);
}
.hm-btn--gris {
  border: 1px solid #9ba0aa;
  background: #9ba0aa;
  color: #fff !important;
}
.hm-btn--borde {
  border: 1px solid var(--hm-primary);
  background: #fff;
  color: var(--hm-primary) !important;
}
.hm-btn:focus-visible {
  outline: 2px solid var(--hm-primary);
  outline-offset: 2px;
}

.hm-conv__hilo {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: calc(14 * var(--hm-u));
  padding: calc(14 * var(--hm-u)) calc(22 * var(--hm-u));
  overflow: hidden;
}
.hm-m {
  flex: none;
  align-self: flex-end;
  max-width: calc(720 * var(--hm-u));
  padding: calc(14 * var(--hm-u)) calc(16 * var(--hm-u));
  border-radius: calc(10 * var(--hm-u));
  background: #fff;
  box-shadow: inset 0 0 0 1px var(--hm-borde);
}
/* lo del huesped, a la izquierda y en el ambar muy claro de las bandas; lo nuestro, a la derecha y en blanco */
.hm-m--in {
  align-self: flex-start;
  background: #fff8ea;
  box-shadow: inset 0 0 0 1px #f6dfae;
}
.hm-m__cab {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(8 * var(--hm-u));
  margin-bottom: calc(8 * var(--hm-u));
  font-size: calc(12.5 * var(--hm-u));
  color: var(--hm-ink-muted);
}
.hm-m__cab b {
  color: var(--hm-ink);
}
.hm-m__cab .is-fallido {
  color: var(--hm-danger);
  font-weight: 700;
}
.hm-m__cab .is-ayuda {
  cursor: help;
  text-decoration: underline dotted;
  text-underline-offset: calc(3 * var(--hm-u));
}
.hm-m__ver {
  margin-left: auto;
  font-weight: 700;
  color: var(--hm-primary);
}
.hm-m__ver:hover {
  text-decoration: underline;
}
.hm-m__texto {
  font-size: calc(14.5 * var(--hm-u));
  line-height: 1.5;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.hm-m__resumen {
  font-style: italic;
  color: var(--hm-ink-muted);
}
.hm-m__nota {
  display: block;
  margin-top: calc(6 * var(--hm-u)) !important;
  font-size: calc(12.5 * var(--hm-u));
  color: var(--hm-ink-muted);
}
.hm-m__reenviar {
  display: flex;
  flex-direction: column;
  gap: calc(8 * var(--hm-u));
  margin-top: calc(12 * var(--hm-u));
  padding: calc(12 * var(--hm-u)) calc(14 * var(--hm-u));
  border-radius: calc(8 * var(--hm-u));
  background: rgba(188, 71, 94, 0.07);
}
.hm-m__reenviar .hm-m__nota {
  margin-top: 0 !important;
}
.hm-m__reenviar-texto {
  font-size: calc(13.5 * var(--hm-u));
  font-weight: 700;
}
.hm-m__reenviar-form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(10 * var(--hm-u));
}
.hm-campo {
  flex: 1 1 calc(240 * var(--hm-u));
  min-width: 0;
  height: calc(43 * var(--hm-u));
  padding: 0 calc(12 * var(--hm-u));
  border: 1px solid #cad1d7;
  border-radius: calc(6 * var(--hm-u));
  background: #fff;
  font-size: calc(16 * var(--hm-u)) !important;
}
.hm-campo:focus {
  outline: 2px solid var(--hm-primary);
  outline-offset: 1px;
}
.hm-m__adjunto {
  display: inline-flex;
  align-items: center;
  gap: calc(8 * var(--hm-u));
  margin-top: calc(12 * var(--hm-u));
  min-height: calc(40 * var(--hm-u));
  padding: calc(6 * var(--hm-u)) calc(12 * var(--hm-u));
  border-radius: calc(8 * var(--hm-u));
  background: #fff;
  box-shadow: inset 0 0 0 1px var(--hm-borde);
  font-size: calc(13 * var(--hm-u));
  font-weight: 600;
}
.hm-m__adjunto svg {
  width: calc(16 * var(--hm-u));
  height: calc(16 * var(--hm-u));
  color: var(--hm-primary);
}
.hm-m__adjunto small {
  font-size: inherit;
  font-weight: 400;
  color: var(--hm-ink-muted);
}
.hm-m__aviso {
  margin-top: calc(10 * var(--hm-u)) !important;
  font-size: calc(12 * var(--hm-u));
  color: var(--hm-ink-muted);
}

.hm-conv__resp {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: calc(10 * var(--hm-u));
  padding: calc(16 * var(--hm-u)) calc(22 * var(--hm-u));
  border-top: 1px solid var(--hm-raya);
  background: #fff;
  box-shadow: 0 calc(-8 * var(--hm-u)) calc(14 * var(--hm-u)) calc(-12 * var(--hm-u)) rgba(0, 0, 0, 0.18);
}
.hm-conv__label {
  font-size: calc(14 * var(--hm-u));
  font-weight: 700;
  color: var(--hm-primary);
}
.hm-conv__texto {
  width: 100%;
  box-sizing: border-box;
  padding: calc(10 * var(--hm-u)) calc(12 * var(--hm-u));
  border: 1px solid var(--hm-primary);
  border-radius: calc(7 * var(--hm-u));
  background: #fff;
  font-size: calc(16 * var(--hm-u)) !important;
  line-height: 1.5;
  resize: none;
  box-shadow: 0 calc(10 * var(--hm-u)) calc(10 * var(--hm-u)) calc(-8 * var(--hm-u)) rgba(0, 0, 0, 0.1);
}
.hm-conv__texto:focus {
  outline: 2px solid var(--hm-primary);
  outline-offset: 1px;
}
.hm-conv__texto::placeholder {
  color: #8898aa;
}
.hm-conv__pie {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: calc(12 * var(--hm-u));
  /* el boton de Hugo, abajo a la derecha, caeria sobre "Enviar respuesta" */
  padding-right: calc(72 * var(--hm-u));
}
.hm-conv__desde {
  flex: 1 1 calc(240 * var(--hm-u));
  font-size: calc(12.5 * var(--hm-u));
  color: var(--hm-ink-muted);
  overflow-wrap: anywhere;
}

/* el boton de Hugo, en ambar con tinta oscura */
.hm-msj__hugo {
  position: absolute;
  z-index: 3;
  right: calc(20 * var(--hm-u));
  bottom: calc(20 * var(--hm-u));
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(56 * var(--hm-u));
  height: calc(56 * var(--hm-u));
  border-radius: 50%;
  background: var(--hm-accent);
  color: #1a1a2e;
  box-shadow: 0 calc(4 * var(--hm-u)) calc(14 * var(--hm-u)) rgba(0, 0, 0, 0.25);
  pointer-events: none;
}
.hm-msj__hugo svg {
  width: calc(24 * var(--hm-u));
  height: calc(24 * var(--hm-u));
  fill: currentColor;
  stroke: none;
}

/* el aviso de arriba a la derecha (b-toaster-top-right) */
.hm-msj__toast {
  position: absolute;
  z-index: 5;
  top: calc(16 * var(--hm-u));
  right: calc(16 * var(--hm-u));
  max-width: calc(320 * var(--hm-u));
  padding: calc(10 * var(--hm-u)) calc(16 * var(--hm-u));
  border-radius: calc(6 * var(--hm-u));
  background: #15803d;
  color: #fff;
  font-size: calc(14.5 * var(--hm-u));
  font-weight: 600;
  box-shadow: 0 calc(4 * var(--hm-u)) calc(16 * var(--hm-u)) rgba(0, 0, 0, 0.18);
  animation: hm-msj-toast 0.25s ease;
}
@keyframes hm-msj-toast {
  from {
    opacity: 0;
    transform: translateY(calc(-8 * var(--hm-u)));
  }
}

/* ===== "Ver el correo" ===== */
.hm-modal {
  position: absolute;
  z-index: 6;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: calc(28 * var(--hm-u)) calc(16 * var(--hm-u));
  background: rgba(0, 0, 0, 0.5);
}
.hm-modal__dialogo {
  display: flex;
  flex-direction: column;
  width: calc(640 * var(--hm-u));
  max-width: 100%;
  max-height: 100%;
  border-radius: calc(7 * var(--hm-u));
  background: #fff;
  overflow: hidden;
  box-shadow: 0 calc(10 * var(--hm-u)) calc(40 * var(--hm-u)) rgba(0, 0, 0, 0.3);
}
.hm-modal__cab {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(12 * var(--hm-u));
  padding: calc(14 * var(--hm-u)) calc(18 * var(--hm-u));
  border-bottom: 1px solid var(--hm-raya);
}
.hm-modal__titulo {
  font-size: calc(17 * var(--hm-u));
  font-weight: 700;
  line-height: 1.3;
}
.hm-modal__cerrar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: calc(32 * var(--hm-u));
  height: calc(32 * var(--hm-u));
  border: 0;
  border-radius: calc(6 * var(--hm-u));
  background: transparent;
  color: var(--hm-ink-muted) !important;
  cursor: pointer;
}
.hm-modal__cerrar svg {
  width: calc(18 * var(--hm-u));
  height: calc(18 * var(--hm-u));
}
.hm-modal__cerrar:focus-visible {
  outline: 2px solid var(--hm-primary);
}
.hm-modal__cuerpo {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
}

/* el correo, con el diseño de los correos al huesped */
.hm-email {
  padding: calc(18 * var(--hm-u));
  background: #eef2f1;
}
.hm-email__caja {
  max-width: calc(520 * var(--hm-u));
  margin: 0 auto;
  padding: calc(22 * var(--hm-u)) calc(26 * var(--hm-u));
  border-radius: calc(12 * var(--hm-u));
  background: #fff;
  text-align: center;
}
.hm-email__logo svg {
  width: calc(44 * var(--hm-u));
  height: calc(50 * var(--hm-u));
  margin: 0 auto calc(10 * var(--hm-u));
  display: block;
  stroke: none;
}
.hm-email__titulo {
  font-size: calc(22 * var(--hm-u));
  font-weight: 800;
  line-height: 1.25;
}
.hm-email__texto {
  margin-top: calc(10 * var(--hm-u)) !important;
  font-size: calc(14.5 * var(--hm-u));
  line-height: 1.5;
  color: #3d4a48;
  white-space: pre-wrap;
}
.hm-email__boton {
  display: inline-block;
  margin-top: calc(14 * var(--hm-u));
  padding: calc(10 * var(--hm-u)) calc(22 * var(--hm-u));
  border-radius: calc(8 * var(--hm-u));
  background: var(--hm-primary);
  color: #fff;
  font-size: calc(15 * var(--hm-u));
  font-weight: 700;
}
.hm-email__datos {
  display: flex;
  gap: calc(8 * var(--hm-u));
  margin-top: calc(16 * var(--hm-u));
}
.hm-email__dato {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  padding: calc(10 * var(--hm-u)) calc(8 * var(--hm-u));
  border-radius: calc(8 * var(--hm-u));
  background: var(--hm-primary-tint);
  font-size: calc(12.5 * var(--hm-u));
  color: var(--hm-ink-muted);
  line-height: 1.35;
}
.hm-email__dato b {
  font-size: calc(14.5 * var(--hm-u));
  color: var(--hm-ink);
  overflow-wrap: anywhere;
}
.hm-email__rotulo {
  font-size: calc(10.5 * var(--hm-u));
  font-weight: 800;
  letter-spacing: 0.08em;
}
.hm-email__pie {
  margin-top: calc(16 * var(--hm-u)) !important;
  font-size: calc(12.5 * var(--hm-u));
  color: var(--hm-ink-muted);
}
.hm-email__marca {
  margin-top: calc(4 * var(--hm-u)) !important;
  font-size: calc(11.5 * var(--hm-u));
  color: var(--hm-muted);
}

/* ===== En el movil: la lista o la conversacion, como el panel por debajo de 768 px ===== */
.hm-msj--movil .hm-msj__banda {
  height: calc(160 * var(--hm-u));
  padding: calc(20 * var(--hm-u)) calc(15 * var(--hm-u)) 0;
}
.hm-msj--movil .hm-msj__banda-icono {
  display: none;
}
.hm-msj--movil .hm-msj__titulo {
  font-size: calc(28 * var(--hm-u));
}
.hm-msj--movil .hm-msj__subtitulo {
  font-size: calc(14.5 * var(--hm-u));
}
/* con una conversacion abierta la pagina ha bajado: la banda queda arriba, fuera de la vista */
.hm-msj--movil.is-conversacion .hm-msj__banda {
  height: 0;
  padding-top: 0;
}
.hm-msj--movil.is-conversacion .hm-msj__tarjeta {
  margin-top: calc(12 * var(--hm-u));
}
.hm-msj--movil .hm-msj__tarjeta {
  margin: calc(-14 * var(--hm-u)) calc(12 * var(--hm-u)) calc(12 * var(--hm-u));
}
.hm-msj--movil .hm-msj__filtros {
  padding: calc(12 * var(--hm-u));
  gap: calc(12 * var(--hm-u));
}
.hm-msj--movil .hm-msj__lista {
  flex: 1 1 auto;
  border-right: 0;
}
.hm-msj--movil .hm-conv__cab {
  gap: calc(10 * var(--hm-u));
  padding: calc(12 * var(--hm-u));
}
.hm-msj--movil .hm-conv__hilo,
.hm-msj--movil .hm-conv__resp {
  padding-left: calc(12 * var(--hm-u));
  padding-right: calc(12 * var(--hm-u));
}
.hm-msj--movil .hm-conv__resp {
  padding-top: calc(12 * var(--hm-u));
  padding-bottom: calc(12 * var(--hm-u));
}
.hm-msj--movil .hm-conv__pie {
  padding-right: 0;
}
.hm-msj--movil .hm-conv__acciones {
  width: 100%;
}
.hm-msj--movil .hm-msj__hugo {
  bottom: calc(12 * var(--hm-u));
  right: calc(12 * var(--hm-u));
  width: calc(48 * var(--hm-u));
  height: calc(48 * var(--hm-u));
}
.hm-msj--movil.is-conversacion .hm-msj__hugo {
  display: none;
}
.hm-msj--movil .hm-msj__toast {
  top: calc(64 * var(--hm-u));
  left: calc(12 * var(--hm-u));
  right: calc(12 * var(--hm-u));
  max-width: none;
}
.hm-msj--movil .hm-email {
  padding: calc(10 * var(--hm-u));
}
.hm-msj--movil .hm-email__caja {
  padding: calc(16 * var(--hm-u)) calc(14 * var(--hm-u));
}
.hm-msj--movil .hm-email__datos {
  flex-wrap: wrap;
}
.hm-msj--movil .hm-email__dato {
  flex: 1 1 40%;
}

@media (prefers-reduced-motion: reduce) {
  .hm-msj__banda,
  .hm-interruptor__pista,
  .hm-interruptor__pista::after {
    transition: none;
  }
  .hm-msj__toast {
    animation: none;
  }
}
</style>
