<!--
  Movil dibujado en CSS: cuerpo, altavoz, botones laterales, pantalla de 375 x 812 y barra de
  estado. Lo comparten las maquetas que se ven en un movil (planning y auto check-in); el
  contenido de la app va en el slot, debajo de la barra de estado.

  Escala sin JavaScript: el contenedor declara container-type:inline-size y todas las medidas
  son multiplos de dos unidades que el slot hereda:
    --u = 1px cuando el movil mide 288px de ancho (el cuerpo)
    --p = 1px del movil de referencia de 375px (la pantalla mide 270u)
-->
<template>
  <div class="hm-pf">
    <div class="hm-pf__in">
      <div class="hm-pf__body">
        <span class="hm-pf__speaker" aria-hidden="true" />
        <div class="hm-pf__screen">
          <div class="hm-pf__status" aria-hidden="true">
            <b>9:41</b>
            <span class="hm-pf__sys"><i /><i /><i /><i /><em /></span>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hm-pf {
  container-type: inline-size;
  width: 100%;
}
.hm-pf__in {
  --u: calc(100cqw / 288);
  --p: calc(var(--u) * 0.72);
  font-family: "Nunito Variable", Nunito, system-ui, -apple-system, sans-serif;
  line-height: 1.5;
}
.hm-pf__body {
  background: linear-gradient(150deg, #2b3036, #181c20 55%, #0f1316);
  border-radius: calc(34 * var(--u));
  padding: calc(9 * var(--u));
  position: relative;
  box-shadow: 0 24px 40px -26px rgba(6, 30, 28, 0.7), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.hm-pf__body::before,
.hm-pf__body::after {
  content: "";
  position: absolute;
  right: calc(-2 * var(--u));
  width: calc(2 * var(--u));
  border-radius: calc(2 * var(--u));
  background: #3a4047;
}
.hm-pf__body::before {
  top: calc(98 * var(--u));
  height: calc(26 * var(--u));
}
.hm-pf__body::after {
  top: calc(136 * var(--u));
  height: calc(44 * var(--u));
}
.hm-pf__speaker {
  position: absolute;
  top: calc(13 * var(--u));
  left: 50%;
  transform: translateX(-50%);
  width: calc(58 * var(--u));
  height: calc(4 * var(--u));
  border-radius: 99px;
  background: #0b0e11;
  z-index: 2;
}
.hm-pf__screen {
  position: relative;
  background: #fff;
  border-radius: calc(27 * var(--u));
  overflow: hidden;
  aspect-ratio: 375 / 812;
  display: flex;
  flex-direction: column;
  isolation: isolate;
}
.hm-pf__status {
  flex: 0 0 auto;
  height: calc(30 * var(--p));
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(4 * var(--p)) calc(24 * var(--p)) 0;
  color: #1f2c2a;
  background: #fff;
}
.hm-pf__status b {
  font-size: calc(12 * var(--p));
  font-weight: 800;
  letter-spacing: 0.01em;
}
.hm-pf__sys {
  display: flex;
  align-items: flex-end;
  gap: calc(1.5 * var(--p));
}
.hm-pf__sys i {
  width: calc(3 * var(--p));
  background: #1f2c2a;
  border-radius: calc(1 * var(--p));
}
.hm-pf__sys i:nth-child(1) { height: calc(4 * var(--p)); }
.hm-pf__sys i:nth-child(2) { height: calc(6 * var(--p)); }
.hm-pf__sys i:nth-child(3) { height: calc(8 * var(--p)); }
.hm-pf__sys i:nth-child(4) { height: calc(10 * var(--p)); }
.hm-pf__sys em {
  width: calc(20 * var(--p));
  height: calc(10 * var(--p));
  margin-left: calc(5 * var(--p));
  border: calc(1.2 * var(--p)) solid #1f2c2a;
  border-radius: calc(3 * var(--p));
  background: linear-gradient(90deg, #1f2c2a 70%, transparent 70%);
  background-clip: content-box;
  padding: calc(1 * var(--p));
}
</style>
