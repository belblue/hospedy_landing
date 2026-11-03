<!--
  Lista de barras horizontales de las maquetas de las pantallas del panel (antelacion, duracion,
  procedencia): cada fila con su etiqueta, su barra y su cifra y, mas fina debajo, la del anno
  anterior si la hay. Las barras se escalan al mayor valor, tambien el de antes. Mide en --hm-u.
-->
<template>
  <div class="hm-bh">
    <template v-for="f in filas" :key="f.clave">
      <span class="hm-bh__etiqueta">{{ f.etiqueta }}</span>
      <span class="hm-bh__pista"><span class="hm-bh__barra" :style="{ width: ancho(f.valor) + '%', background: color }" /></span>
      <span class="hm-bh__valor">{{ f.texto }}</span>
      <template v-if="f.textoAntes !== undefined && f.textoAntes !== null">
        <span class="hm-bh__antes">año anterior</span>
        <span class="hm-bh__pista is-fina"><span class="hm-bh__barra" :style="{ width: ancho(f.valorAntes || 0) + '%', background: colorAntes }" /></span>
        <span class="hm-bh__antes is-derecha">{{ f.textoAntes }}</span>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Fila {
  clave: string
  etiqueta: string
  valor: number
  texto: string
  valorAntes?: number
  textoAntes?: string | null
}

const props = defineProps<{
  filas: Fila[]
  color: string
  colorAntes?: string
}>()

const maximo = computed(() => Math.max(1, ...props.filas.map(f => f.valor || 0), ...props.filas.map(f => f.valorAntes || 0)))
const ancho = (v: number) => (v ? Math.round((100 * v) / maximo.value) : 0)
</script>

<style scoped>
.hm-bh {
  display: grid;
  grid-template-columns: minmax(calc(80 * var(--hm-u)), auto) minmax(0, 1fr) auto;
  align-items: center;
  gap: calc(5 * var(--hm-u)) calc(10 * var(--hm-u));
  font-size: calc(13.6 * var(--hm-u));
  line-height: 1.5;
}
.hm-bh__etiqueta {
  color: #26323f;
}
.hm-bh__pista {
  display: block;
  height: calc(10 * var(--hm-u));
  border-radius: 999px;
  background: #e4ecea;
  overflow: hidden;
}
.hm-bh__pista.is-fina {
  height: calc(6 * var(--hm-u));
}
.hm-bh__barra {
  display: block;
  height: 100%;
}
.hm-bh__valor {
  text-align: right;
  font-weight: 700;
  color: #1a1a2e;
  white-space: nowrap;
}
.hm-bh__antes {
  font-size: calc(11.5 * var(--hm-u));
  color: #5e6a67;
}
.hm-bh__antes.is-derecha {
  text-align: right;
  white-space: nowrap;
}
</style>
