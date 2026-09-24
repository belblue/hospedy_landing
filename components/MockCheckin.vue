<!--
  Maqueta del auto check-in del huesped dentro de un movil dibujado en CSS.
  Es una muestra: no se interactua con ella (pointer-events:none en la pantalla).

  Escala sin JavaScript: el contenedor declara container-type:inline-size y todas
  las medidas se expresan como multiplos de --u, que vale 1px cuando el movil
  mide sus 288px de referencia. Asi el dibujo conserva sus proporciones en
  cualquier hueco sin medir nada.
-->
<template>
  <div class="hm-ph" role="img" :aria-label="etiqueta">
    <div class="hm-ph__in">
      <div class="hm-ph__body">
        <span class="hm-ph__speaker" />
        <div class="hm-ph__screen">
          <div class="hm-ph__head">
            <span class="hm-ph__burger"><i /><i /><i /></span>
            <span class="hm-ph__logo">hospedy</span>
            <span class="hm-ph__x">&#10005;</span>
          </div>

          <div class="hm-fi hm-fi--split">
            <div><label>Nombre</label><span>Samuel</span></div>
            <div><label>Apellidos</label><span>Clavero Solanas</span></div>
          </div>

          <div class="hm-ph__row">
            <div class="hm-seg"><b class="on">M</b><b>F</b></div>
            <div class="hm-fi"><label>Nacimiento</label><span>12/04/1995</span></div>
            <div class="hm-fi"><label>Expiración</label><span>23/06/2032</span></div>
          </div>

          <div class="hm-ph__row">
            <div class="hm-seg hm-seg--doc"><b class="on">DNI</b><b>NIE</b><b>P</b><b>ID</b><b>C</b><b>X</b></div>
            <div class="hm-fi"><label>Número ID</label><span>49703622R</span></div>
          </div>

          <div class="hm-fi"><label>Dirección</label><span>Calle de Alcalá 122, Madrid</span></div>

          <div class="hm-ph__row">
            <div class="hm-fi"><label>Provincia</label><span>Madrid</span></div>
            <div class="hm-fi"><label>País</label><span>España</span></div>
            <span class="hm-ph__refresh">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <path d="M20 12a8 8 0 1 1-2.6-5.9" /><path d="M20 4v5h-5" />
              </svg>
            </span>
          </div>

          <div class="hm-ph__row">
            <div class="hm-fi"><label>Entrada</label><span>24/10/2026</span></div>
            <div class="hm-nm"><label>Noches</label><i>&minus;</i><b>3</b><i>+</i></div>
            <div class="hm-fi"><label>Hab</label><span>225</span></div>
          </div>

          <div class="hm-ph__row">
            <div class="hm-fi"><label>Teléfono</label><span>974 55 00 22</span></div>
            <div class="hm-fi"><label>Correo</label><span>correo@ejemplo.es</span></div>
          </div>

          <div class="hm-ph__terms">
            <span class="hm-ph__check">&#10003;</span>
            <p>Acepto los <span class="hm-ph__link">términos y condiciones</span></p>
          </div>

          <div class="hm-sign">
            <label>Firma</label>
            <span class="hm-sign__clear">&#10005;</span>
            <span class="hm-sign__exp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round">
                <path d="M3 8V3h5M21 8V3h-5M3 16v5h5M21 16v5h-5" />
              </svg>
            </span>
            <svg class="hm-sign__rub" viewBox="0 0 240 78" fill="none" stroke="#1f2c2a" stroke-width="1.6" stroke-linecap="round">
              <path d="M78 62c14-6 24-20 27-34 2-9-1-14-5-13-5 1-7 10-6 20 2 14 9 26 19 30 8 3 15-1 18-7" />
              <path d="M66 52c22 4 48 2 78-6" />
            </svg>
          </div>

          <div class="hm-ph__send">Enviar</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  etiqueta: {
    type: String,
    default:
      "Formulario de auto check-in en un móvil: nombre y apellidos, sexo, fecha de nacimiento y caducidad, tipo y número de documento, dirección, provincia y país, entrada, noches y habitación, teléfono y correo, aceptación de condiciones, firma y botón de enviar.",
  },
});
</script>

<style scoped>
.hm-ph {
  container-type: inline-size;
  width: 100%;
}
.hm-ph__in {
  /* 1 unidad = 1px cuando el movil mide sus 288px de referencia */
  --u: calc(100cqw / 288);
  --hm-teal: #0f766e;
  font-family: "Nunito Variable", Nunito, system-ui, -apple-system, sans-serif;
  line-height: 1.55;
}

.hm-ph__body {
  background: linear-gradient(150deg, #2b3036, #181c20 55%, #0f1316);
  border-radius: calc(34 * var(--u));
  padding: calc(9 * var(--u));
  position: relative;
  box-shadow: 0 24px 40px -26px rgba(6, 30, 28, 0.7), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.hm-ph__body::before,
.hm-ph__body::after {
  content: "";
  position: absolute;
  right: calc(-2 * var(--u));
  width: calc(2 * var(--u));
  border-radius: calc(2 * var(--u));
  background: #3a4047;
}
.hm-ph__body::before {
  top: calc(98 * var(--u));
  height: calc(26 * var(--u));
}
.hm-ph__body::after {
  top: calc(136 * var(--u));
  height: calc(44 * var(--u));
}
.hm-ph__speaker {
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
.hm-ph__screen {
  background: #fff;
  border-radius: calc(27 * var(--u));
  overflow: hidden;
  padding: calc(22 * var(--u)) calc(11 * var(--u)) calc(12 * var(--u));
  display: flex;
  flex-direction: column;
  gap: calc(9 * var(--u));
  /* es una muestra: no se toca */
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}

.hm-ph__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(2 * var(--u)) calc(2 * var(--u)) calc(8 * var(--u));
  border-bottom: calc(1 * var(--u)) solid #eef3f2;
}
.hm-ph__burger {
  display: flex;
  flex-direction: column;
  gap: calc(3 * var(--u));
}
.hm-ph__burger i {
  display: block;
  width: calc(17 * var(--u));
  height: calc(2.4 * var(--u));
  border-radius: calc(2 * var(--u));
  background: var(--hm-teal);
}
.hm-ph__logo {
  font-size: calc(19 * var(--u));
  font-weight: 800;
  color: var(--hm-teal);
  letter-spacing: -0.02em;
}
.hm-ph__x {
  color: var(--hm-teal);
  font-size: calc(17 * var(--u));
  font-weight: 700;
  line-height: 1;
}

.hm-ph__row {
  display: flex;
  gap: calc(7 * var(--u));
  align-items: flex-end;
}

.hm-fi {
  position: relative;
  border: calc(1.5 * var(--u)) solid var(--hm-teal);
  border-radius: calc(7 * var(--u));
  padding: calc(8 * var(--u)) calc(8 * var(--u)) calc(6 * var(--u));
  min-width: 0;
  flex: 1 1 auto;
  background: #fff;
}
/* el selector tiene que alcanzar tambien al nieto del campo doble */
.hm-fi > label,
.hm-fi--split > div > label {
  position: absolute;
  top: calc(-7 * var(--u));
  left: calc(8 * var(--u));
  background: #fff;
  padding: 0 calc(4 * var(--u));
  font-size: calc(9.5 * var(--u));
  font-weight: 600;
  color: var(--hm-teal);
  line-height: 1;
  white-space: nowrap;
}
.hm-fi > span,
.hm-fi--split > div > span {
  display: block;
  font-size: calc(12.5 * var(--u));
  color: #1f2c2a;
  font-weight: 600;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* sin overflow:hidden, que recortaba la etiqueta flotante */
.hm-fi--split {
  display: flex;
  padding: 0;
}
.hm-fi--split > div {
  flex: 1 1 0;
  padding: calc(8 * var(--u)) calc(8 * var(--u)) calc(6 * var(--u));
  position: relative;
  min-width: 0;
}
.hm-fi--split > div + div {
  border-left: calc(1.5 * var(--u)) solid var(--hm-teal);
}

.hm-seg {
  display: flex;
  border: calc(1.5 * var(--u)) solid var(--hm-teal);
  border-radius: calc(7 * var(--u));
  overflow: hidden;
  flex: 0 0 auto;
}
.hm-seg b {
  font-size: calc(11.5 * var(--u));
  font-weight: 700;
  color: var(--hm-teal);
  padding: calc(9 * var(--u)) calc(7 * var(--u));
  line-height: 1;
  border-right: calc(1.5 * var(--u)) solid var(--hm-teal);
}
.hm-seg b:last-child {
  border-right: 0;
}
.hm-seg b.on {
  background: var(--hm-teal);
  color: #fff;
}
.hm-seg--doc b {
  padding: calc(9 * var(--u)) calc(5.5 * var(--u));
  font-size: calc(11 * var(--u));
}

/* sin overflow:hidden: recortaba la etiqueta. El radio lo ponen los botones */
.hm-nm {
  display: flex;
  border: calc(1.5 * var(--u)) solid var(--hm-teal);
  border-radius: calc(7 * var(--u));
  position: relative;
  flex: 0 0 auto;
  background: #fff;
}
.hm-nm > label {
  position: absolute;
  top: calc(-7 * var(--u));
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 0 calc(4 * var(--u));
  font-size: calc(9.5 * var(--u));
  font-weight: 600;
  color: var(--hm-teal);
  line-height: 1;
}
.hm-nm i {
  background: var(--hm-teal);
  color: #fff;
  font-style: normal;
  font-weight: 800;
  font-size: calc(14 * var(--u));
  width: calc(26 * var(--u));
  display: flex;
  align-items: center;
  justify-content: center;
}
.hm-nm b {
  font-size: calc(13 * var(--u));
  font-weight: 700;
  color: #1f2c2a;
  padding: calc(8 * var(--u)) calc(11 * var(--u));
}
.hm-nm i:first-of-type {
  border-radius: calc(5.5 * var(--u)) 0 0 calc(5.5 * var(--u));
}
.hm-nm i:last-of-type {
  border-radius: 0 calc(5.5 * var(--u)) calc(5.5 * var(--u)) 0;
}

.hm-ph__refresh {
  flex: 0 0 auto;
  color: var(--hm-teal);
  padding-bottom: calc(6 * var(--u));
}
.hm-ph__refresh svg {
  width: calc(22 * var(--u));
  height: calc(22 * var(--u));
  display: block;
}

.hm-ph__terms {
  display: flex;
  align-items: center;
  gap: calc(8 * var(--u));
  padding: calc(2 * var(--u)) 0;
}
.hm-ph__check {
  width: calc(19 * var(--u));
  height: calc(19 * var(--u));
  border-radius: calc(5 * var(--u));
  background: var(--hm-teal);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(12 * var(--u));
  font-weight: 800;
  flex: 0 0 auto;
}
.hm-ph__terms p {
  margin: 0;
  font-size: calc(12 * var(--u));
  color: #1f2c2a;
  font-weight: 600;
}
.hm-ph__link {
  color: var(--hm-teal);
  font-weight: 700;
}

.hm-sign {
  position: relative;
  border: calc(1.5 * var(--u)) solid var(--hm-teal);
  border-radius: calc(7 * var(--u));
  height: calc(78 * var(--u));
  padding: calc(6 * var(--u));
}
.hm-sign > label {
  position: absolute;
  top: calc(-7 * var(--u));
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 0 calc(5 * var(--u));
  font-size: calc(9.5 * var(--u));
  font-weight: 600;
  color: var(--hm-teal);
  line-height: 1;
}
.hm-sign__clear {
  position: absolute;
  top: calc(6 * var(--u));
  left: calc(6 * var(--u));
  width: calc(26 * var(--u));
  height: calc(16 * var(--u));
  border-radius: 99px;
  background: var(--hm-teal);
  color: #fff;
  font-size: calc(10 * var(--u));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}
.hm-sign__exp {
  position: absolute;
  top: calc(6 * var(--u));
  right: calc(7 * var(--u));
  width: calc(14 * var(--u));
  height: calc(14 * var(--u));
  color: var(--hm-teal);
}
.hm-sign__exp svg {
  width: 100%;
  height: 100%;
  display: block;
}
.hm-sign__rub {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hm-ph__send {
  background: var(--hm-teal);
  color: #fff;
  border-radius: calc(7 * var(--u));
  text-align: center;
  padding: calc(11 * var(--u));
  font-size: calc(14 * var(--u));
  font-weight: 700;
  letter-spacing: 0.01em;
}
</style>
