<!--
  Portatil dibujado en CSS para las pantallas del panel que se ensennan enteras (Mensajes,
  Estadisticas): tapa, camara, pantalla, el borde de abajo con la marca y la base. Es el mismo
  portatil que el del planning (MockPlanning), con la pantalla algo mas alta.

  La pantalla ensenna siempre "ancho" x "alto" px del panel real (1200 x 780 por defecto, la
  proporcion de un portatil de 14") y el contenido del slot mide en --hm-u, que vale 1 px del
  panel a la escala del portatil. Escala sin JavaScript, con unidades de contenedor, como la
  foto del planning: el alto sale del ancho y nada se mueve al cargar.

  La base sobresale de la tapa lo mismo que la del planning, pero aqui cabe dentro del hueco:
  el portatil, base incluida, ocupa el ancho de su contenedor.
-->
<template>
  <div class="hm-lap" :style="{ '--hm-ancho': ancho, '--hm-alto': alto }">
    <div class="hm-lap__in">
      <div class="hm-lap__lid">
        <span class="hm-lap__cam" aria-hidden="true" />
        <div class="hm-lap__screen">
          <slot />
        </div>
        <p class="hm-lap__chin" aria-hidden="true">Hospedy</p>
      </div>
      <div class="hm-lap__base" aria-hidden="true"><span class="hm-lap__notch" /></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  /* los px del panel real que caben a lo ancho y a lo alto de la pantalla */
  ancho: { type: Number, default: 1200 },
  alto: { type: Number, default: 780 },
});
</script>

<style scoped>
.hm-lap {
  container-type: inline-size;
  width: 100%;
}
.hm-lap__in {
  /* la base mide el 112 % de la tapa: asi el conjunto cabe en el hueco */
  width: calc(100% / 1.12);
  margin: 0 auto;
  /* 1 px del panel real: la pantalla mide el 96,6 % de la tapa */
  --hm-u: calc(100cqw / 1.12 * 0.966 / var(--hm-ancho));
  font-family: "Nunito Variable", Nunito, system-ui, -apple-system, sans-serif;
  line-height: 1.5;
}
.hm-lap__lid {
  position: relative;
  background: linear-gradient(160deg, #4a5057, #2c3136 42%, #23272b);
  border-radius: 1.9% 1.9% 0.8% 0.8% / 2.8% 2.8% 1.2% 1.2%;
  padding: 1.7% 1.7% 2.3%;
  box-shadow: 0 22px 40px -26px rgba(6, 30, 28, 0.7), inset 0 0 0 1px rgba(255, 255, 255, 0.09);
}
.hm-lap__cam {
  position: absolute;
  top: 0.7%;
  left: 50%;
  transform: translateX(-50%);
  width: 0.7%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #14171a;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);
}
.hm-lap__screen {
  position: relative;
  background: #fff;
  border-radius: 0.5%;
  overflow: hidden;
  aspect-ratio: var(--hm-ancho) / var(--hm-alto);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35);
  isolation: isolate;
}
/* el borde de abajo y la base van en proporcion al ancho, como en el planning */
.hm-lap__chin {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 46.08 / 1;
  overflow: hidden;
  color: #9aa2a9;
  font-size: calc(100cqw / 1.12 * 0.0135);
  line-height: 1;
  letter-spacing: 0.18em;
  font-weight: 800;
  margin: 0.9% 0 0;
  text-transform: uppercase;
  user-select: none;
}
.hm-lap__base {
  aspect-ratio: 68.2 / 1;
  margin: 0 auto;
  width: 112%;
  transform: translateX(-5.3%);
  background: linear-gradient(180deg, #b9bfc6, #8d949c 45%, #6d747b);
  border-radius: 0 0 9px 9px;
  position: relative;
  box-shadow: 0 10px 16px -10px rgba(6, 30, 28, 0.55);
}
.hm-lap__notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 14%;
  height: 45%;
  background: #7a8189;
  border-radius: 0 0 6px 6px;
}
</style>
