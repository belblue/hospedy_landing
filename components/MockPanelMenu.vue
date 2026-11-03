<!--
  El menu del panel en las maquetas de sus pantallas (Mensajes, Estadisticas). En el portatil,
  el menu lateral, con la entrada de la pantalla marcada y el numero ambar de los mensajes
  pendientes, que el panel lleva en todas las pantallas. En el movil, la barra de arriba, con el
  logo y el boton del menu.

  Es decorativo: no se pulsa y el lector de pantalla no lo lee. Mide en --hm-u, que pone la
  maqueta (1 px del panel real).
-->
<template>
  <div v-if="!movil" class="hm-menu" aria-hidden="true">
    <span class="hm-menu__logo"><MockLogoHospedy /></span>
    <span
      v-for="entrada in MENU"
      :key="entrada.nombre"
      class="hm-menu__item"
      :class="{ 'is-marcado': entrada.nombre === marcado }"
    >
      <svg viewBox="0 0 24 24"><path :d="ICONOS_PANEL[entrada.icono]" /></svg>
      <span>{{ entrada.nombre }}</span>
      <b v-if="entrada.nombre === 'Mensajes' && mensajes" class="hm-menu__num">{{ mensajes }}</b>
    </span>
  </div>
  <div v-else class="hm-menu-barra" aria-hidden="true">
    <span class="hm-menu-barra__logo"><MockLogoHospedy /></span>
    <svg viewBox="0 0 24 24"><path :d="ICONOS_PANEL.barras" /></svg>
  </div>
</template>

<script setup lang="ts">
import { ICONOS_PANEL } from '~/utils/iconosPanel'

defineProps<{
  /* el menu lateral o, en el movil, la barra de arriba */
  movil: boolean
  /* el nombre de la entrada de la pantalla que se ensenna */
  marcado: string
  /* los mensajes pendientes: el numero de "Mensajes" (sin el, no sale) */
  mensajes?: number
}>()

/* el menu lateral del panel, en su orden */
const MENU = [
  { nombre: 'Nuevo huésped', icono: 'mas' },
  { nombre: 'Planning', icono: 'calendario' },
  { nombre: 'Huéspedes', icono: 'personas' },
  { nombre: 'Pre Check-ins', icono: 'avion' },
  { nombre: 'Mensajes', icono: 'sobre' },
  { nombre: 'Facturación', icono: 'euro' },
  { nombre: 'Channel Manager', icono: 'red' },
  { nombre: 'Estadísticas', icono: 'grafica' },
  { nombre: 'Encuestas', icono: 'tarta' },
  { nombre: 'Cartas', icono: 'cubiertos' },
  { nombre: 'Limpieza', icono: 'escoba' },
  { nombre: 'Panel usuario', icono: 'ajustes' },
  { nombre: 'Ayuda', icono: 'ayuda' },
] as const
</script>

<style scoped>
/* los iconos de trazo; el logo de Hospedy lleva sus colores */
:where(.hm-menu, .hm-menu-barra) :where(svg:not(.hm-logo-hospedy)) {
  flex: none;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ===== Menu lateral (210 px, entradas de 45 px) ===== */
.hm-menu {
  position: relative;
  z-index: 2;
  flex: 0 0 calc(210 * var(--hm-u));
  display: flex;
  flex-direction: column;
  gap: calc(4 * var(--hm-u));
  padding: 0 calc(10 * var(--hm-u));
  background: #fff;
  box-shadow: 0 0 calc(10 * var(--hm-u)) calc(2 * var(--hm-u)) rgba(0, 0, 0, 0.1);
  font-size: calc(16 * var(--hm-u));
  line-height: 1.5;
  pointer-events: none;
}
.hm-menu__logo {
  display: block;
  width: calc(150 * var(--hm-u));
  margin: calc(20 * var(--hm-u)) auto calc(16 * var(--hm-u));
}
.hm-menu__item {
  position: relative;
  display: flex;
  align-items: center;
  gap: calc(18 * var(--hm-u));
  height: calc(45 * var(--hm-u));
  padding: 0 calc(10 * var(--hm-u)) 0 calc(14 * var(--hm-u));
  border-radius: calc(7 * var(--hm-u));
  color: #585b54;
  white-space: nowrap;
}
.hm-menu__item svg {
  width: calc(18 * var(--hm-u));
  height: calc(18 * var(--hm-u));
}
/* la entrada de la pantalla: el teal primario (#0f766e) al 20 % */
.hm-menu__item.is-marcado {
  background: rgba(15, 118, 110, 0.2);
  color: #0f766e;
}
.hm-menu__num {
  position: absolute;
  right: calc(10 * var(--hm-u));
  top: calc(12 * var(--hm-u));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: calc(22 * var(--hm-u));
  height: calc(22 * var(--hm-u));
  padding: 0 calc(7 * var(--hm-u));
  border-radius: 999px;
  background: #f59e0b;
  color: #26323f;
  font-size: calc(12 * var(--hm-u));
  font-weight: 800;
  line-height: 1;
}

/* ===== Barra de arriba en el movil ===== */
.hm-menu-barra {
  position: relative;
  z-index: 2;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(56 * var(--hm-u));
  padding: 0 calc(16 * var(--hm-u));
  background: #fff;
  box-shadow: 0 0 calc(10 * var(--hm-u)) calc(2 * var(--hm-u)) rgba(0, 0, 0, 0.1);
  color: #585b54;
  pointer-events: none;
}
.hm-menu-barra__logo {
  display: block;
  width: calc(148 * var(--hm-u));
}
.hm-menu-barra > svg {
  width: calc(24 * var(--hm-u));
  height: calc(24 * var(--hm-u));
}
</style>
