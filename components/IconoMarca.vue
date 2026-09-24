<!--
  Marcas pequennas de las tablas y listas de la web (si, no, parcial y valoraciones con
  estrellas), dibujadas en los colores de la marca en lugar de emojis. Van en linea con el texto,
  a su tamanno, como iba el emoji.

  - tipo: si, no o parcial. Es decorativa: el texto de al lado dice lo mismo (si va sola en una
    celda, que la acompanne un texto con sr-only)
  - estrellas: de 0 a 5, en lugar de tipo; se pintan las cinco y se leen como "N de 5"
-->
<template>
  <span v-if="estrellas !== null" class="hm-estrellas" role="img" :aria-label="estrellas + ' de 5'">
    <svg v-for="n in 5" :key="n" viewBox="0 0 20 20" :class="n <= estrellas ? 'is-llena' : 'is-vacia'" aria-hidden="true">
      <path d="M10 1.8l2.47 5.2 5.7.72-4.18 3.95 1.05 5.65L10 14.56l-5.04 2.76 1.05-5.65L1.83 7.72l5.7-.72z" />
    </svg>
  </span>
  <span v-else class="hm-marca" :class="'hm-marca--' + tipo" aria-hidden="true">
    <svg viewBox="0 0 20 20" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="10" cy="10" r="9.2" class="hm-marca__fondo" />
      <path v-if="tipo === 'si'" d="M6 10.3 8.8 13l5.3-5.6" stroke-width="2.2" />
      <path v-else-if="tipo === 'no'" d="M7.1 7.1l5.8 5.8M12.9 7.1l-5.8 5.8" stroke-width="2.2" />
      <template v-else>
        <path d="M10 5.4v5.5" stroke-width="2.3" />
        <circle cx="10" cy="14.3" r="1.25" class="hm-marca__punto" stroke="none" />
      </template>
    </svg>
  </span>
</template>

<script setup>
defineProps({
  tipo: {
    type: String,
    default: "si",
    validator: (v) => ["si", "no", "parcial"].includes(v),
  },
  estrellas: { type: Number, default: null },
});
</script>

<style scoped>
.hm-marca,
.hm-estrellas {
  display: inline-flex;
  vertical-align: -0.17em;
  flex: 0 0 auto;
}
.hm-marca svg {
  width: 1.1em;
  height: 1.1em;
  display: block;
}
/* si: el teal de la marca sobre menta */
.hm-marca--si .hm-marca__fondo {
  fill: #ccfbf1;
}
.hm-marca--si path {
  stroke: #0f766e;
}
/* no: en el naranja del texto de esas celdas */
.hm-marca--no .hm-marca__fondo {
  fill: #ffedd5;
}
.hm-marca--no path {
  stroke: #c2410c;
}
/* parcial: ambar */
.hm-marca--parcial .hm-marca__fondo {
  fill: #fef3c7;
}
.hm-marca--parcial path {
  stroke: #b45309;
}
.hm-marca--parcial .hm-marca__punto {
  fill: #b45309;
}

.hm-estrellas {
  gap: 0.08em;
}
.hm-estrellas svg {
  width: 1.05em;
  height: 1.05em;
  display: block;
}
/* las estrellas del logo, en ambar; las que no se ganan, en gris */
.hm-estrellas .is-llena {
  fill: #f59e0b;
}
.hm-estrellas .is-vacia {
  fill: #e2e8f0;
}
</style>
