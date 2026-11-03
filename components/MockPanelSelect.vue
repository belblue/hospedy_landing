<!--
  Desplegable de las maquetas de las pantallas del panel, con la piel de los del panel: caja de
  43 px con borde teal y fondo claro, el valor en negro y la flecha teal. Al abrirlo, la lista va
  debajo, con la opcion resaltada en teal.

  Se maneja con el raton, con el dedo y con el teclado: flechas, Intro y Escape. Mide en --hm-u,
  que pone la maqueta (1 px del panel real).
-->
<template>
  <div ref="raiz" class="hm-sel" :class="{ 'is-abierto': abierto }" @focusout="alSalir">
    <button
      :id="id"
      type="button"
      class="hm-sel__caja"
      aria-haspopup="listbox"
      :aria-expanded="abierto ? 'true' : 'false'"
      @click="alternar"
      @keydown="teclear"
    >
      <span class="hm-sel__valor">{{ textoActual }}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
    </button>
    <ul v-if="abierto" class="hm-sel__lista" role="listbox" :aria-labelledby="id">
      <li
        v-for="(o, i) in opciones"
        :key="String(o.valor)"
        role="option"
        class="hm-sel__op"
        :class="{ 'is-resaltada': i === resaltada }"
        :aria-selected="o.valor === modelValue ? 'true' : 'false'"
        @pointerenter="resaltada = i"
        @pointerdown.prevent
        @click="elegir(o.valor)"
      >
        {{ o.texto }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface OpcionDesplegable {
  valor: string | number
  texto: string
}

const props = defineProps<{
  id: string
  opciones: OpcionDesplegable[]
  modelValue: string | number
}>()
const emit = defineEmits<{ 'update:modelValue': [valor: string | number] }>()

const raiz = ref<HTMLElement | null>(null)
const abierto = ref(false)
const resaltada = ref(0)

const textoActual = computed(() => props.opciones.find(o => o.valor === props.modelValue)?.texto || '')

function abrir() {
  resaltada.value = Math.max(0, props.opciones.findIndex(o => o.valor === props.modelValue))
  abierto.value = true
}
function alternar() {
  if (abierto.value) abierto.value = false
  else abrir()
}
function elegir(valor: string | number) {
  abierto.value = false
  if (valor !== props.modelValue) emit('update:modelValue', valor)
}
function teclear(e: KeyboardEvent) {
  if (!abierto.value) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      abrir()
    }
    return
  }
  const n = props.opciones.length
  if (e.key === 'ArrowDown') resaltada.value = (resaltada.value + 1) % n
  else if (e.key === 'ArrowUp') resaltada.value = (resaltada.value + n - 1) % n
  else if (e.key === 'Enter' || e.key === ' ') elegir(props.opciones[resaltada.value].valor)
  else if (e.key === 'Escape' || e.key === 'Tab') {
    abierto.value = false
    if (e.key === 'Tab') return
  }
  else return
  e.preventDefault()
  e.stopPropagation()
}
/* se cierra al pulsar fuera, como el del panel: al perder el foco y, como en Safari del iPhone un
   boton no se queda con el foco al tocarlo, tambien al tocar cualquier otro sitio */
function alSalir(e: FocusEvent) {
  const destino = e.relatedTarget as Node | null
  if (destino && raiz.value && !raiz.value.contains(destino)) abierto.value = false
}
function alPulsarFuera(e: PointerEvent) {
  if (raiz.value && !raiz.value.contains(e.target as Node)) abierto.value = false
}
watch(abierto, (si) => {
  if (si) document.addEventListener('pointerdown', alPulsarFuera, true)
  else document.removeEventListener('pointerdown', alPulsarFuera, true)
})
onBeforeUnmount(() => document.removeEventListener('pointerdown', alPulsarFuera, true))
</script>

<style scoped>
.hm-sel {
  position: relative;
  min-width: 0;
}
.hm-sel__caja {
  display: flex;
  align-items: center;
  gap: calc(8 * var(--hm-u));
  width: 100%;
  height: calc(43 * var(--hm-u));
  padding: 0 calc(10 * var(--hm-u)) 0 calc(8 * var(--hm-u));
  border: 1px solid #0f766e;
  border-radius: calc(7 * var(--hm-u));
  background: #e4ecea;
  box-shadow: 0 calc(10 * var(--hm-u)) calc(10 * var(--hm-u)) calc(-8 * var(--hm-u)) rgba(0, 0, 0, 0.1);
  color: #000;
  font: inherit;
  font-size: calc(17 * var(--hm-u));
  line-height: 1.4;
  text-align: left;
  cursor: pointer;
}
.hm-sel__caja:hover {
  box-shadow: inset 0 0 0 1px #0f766e, 0 calc(10 * var(--hm-u)) calc(10 * var(--hm-u)) calc(-8 * var(--hm-u)) rgba(0, 0, 0, 0.1);
}
.hm-sel__caja:focus-visible {
  outline: 2px solid #0f766e;
  outline-offset: 2px;
}
.hm-sel__valor {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hm-sel__caja svg {
  flex: none;
  width: calc(18 * var(--hm-u));
  height: calc(18 * var(--hm-u));
  fill: none;
  stroke: #0f766e;
  stroke-width: 2.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.15s ease;
}
.is-abierto .hm-sel__caja svg {
  transform: rotate(180deg);
}
.hm-sel__lista {
  position: absolute;
  z-index: 6;
  top: 100%;
  left: 0;
  min-width: 100%;
  margin: 0;
  padding: calc(5 * var(--hm-u)) 0;
  list-style: none;
  background: #fff;
  border: 1px solid rgba(60, 60, 60, 0.26);
  border-top: 0;
  border-radius: 0 0 calc(4 * var(--hm-u)) calc(4 * var(--hm-u));
  box-shadow: 0 calc(3 * var(--hm-u)) calc(6 * var(--hm-u)) 0 rgba(0, 0, 0, 0.15);
  font-size: calc(16 * var(--hm-u));
  text-align: left;
}
.hm-sel__op {
  padding: calc(3 * var(--hm-u)) calc(20 * var(--hm-u));
  line-height: 1.43;
  color: #333;
  white-space: nowrap;
  cursor: pointer;
}
.hm-sel__op.is-resaltada {
  background: #0f766e;
  color: #fff;
}
@media (prefers-reduced-motion: reduce) {
  .hm-sel__caja svg {
    transition: none;
  }
}
</style>
