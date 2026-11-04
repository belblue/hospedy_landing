<template>
  <!-- Hugo, el asistente, como se ve en el panel: la ventana del chat abierta sobre su botón. Copia la piel del panel
       (cabecera teal, burbujas, la propuesta con «Sí, aplicar») con una conversación de ejemplo. Es una foto: sin
       JavaScript, inert y con su texto alternativo.

       - pasos: las líneas de una propuesta de varios pasos, como las escribe el programa; sin ellas, los cambios de
         precio de «cambios»; sin ninguno de los dos, la respuesta va sin tarjeta
       - alto: el alto fijo de la ventana, como la del panel, que mide lo mismo tenga lo que tenga. Hace falta dentro de
         MontarAlVerse: la maqueta mide entonces alto + 76 a cualquier ancho y su hueco se reserva con ese alto exacto
         (con una proporción, el texto parte distinto en el móvil y la página salta al montarla o al volver atrás)
       - movil: dentro de MockPhoneFrame, como en el panel en un móvil de 375 px: la ventana de 343 × 568 sobre el botón
         y, detrás, la barra de la app. Todas las medidas van en --k, que vale 1 px en el ordenador y 1 px del móvil
         de referencia (--p del marco) dentro del móvil. -->
  <div
    class="hm-hugo"
    :class="{ 'hm-hugo--movil': movil, 'hm-hugo--fijo': alto && !movil }"
    :style="alto && !movil ? { '--hm-hugo-alto': alto } : undefined"
    role="img"
    :aria-label="descripcion"
    inert
  >
    <div v-if="movil" class="hm-hugo-app" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      <span class="hm-hugo-app-marca">Hospedy</span>
    </div>

    <div class="hm-hugo-panel">
      <div class="hm-hugo-cab">
        <span class="hm-hugo-nombre">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5z" fill="currentColor" /><circle cx="8.5" cy="9.5" r="1.2" fill="#0f766e" /><circle cx="12" cy="9.5" r="1.2" fill="#0f766e" /><circle cx="15.5" cy="9.5" r="1.2" fill="#0f766e" /></svg>
          Hugo
        </span>
        <span class="hm-hugo-acciones" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>
          <svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4M12 8v4l3 2" /></svg>
          <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </span>
      </div>

      <div class="hm-hugo-cuerpo">
        <div v-if="saludo" class="hm-hugo-msg hm-hugo-de-hugo">
          <div class="hm-hugo-burbuja">Hola, soy <b>Hugo</b>. Pídeme cambios como si hablaras con una persona. Antes de aplicar nada, te lo mostraré para que lo confirmes.</div>
        </div>
        <div class="hm-hugo-msg hm-hugo-tuyo">
          <div class="hm-hugo-burbuja">{{ peticion }}</div>
        </div>
        <div class="hm-hugo-msg hm-hugo-de-hugo">
          <div class="hm-hugo-burbuja">{{ respuesta }}</div>
          <div v-if="pasos.length || cambios.length" class="hm-hugo-propuesta">
            <div class="hm-hugo-propuesta-titulo">Cambios propuestos</div>
            <ul class="hm-hugo-cambios">
              <template v-if="pasos.length">
                <li v-for="paso in pasos" :key="paso"><b>{{ paso }}</b></li>
              </template>
              <template v-else>
                <li v-for="cambio in cambios" :key="cambio.fechas">
                  <b>{{ cambio.habitacion }}</b> · {{ cambio.fechas }} · Precio: {{ cambio.antes }} € → <b>{{ cambio.despues }} €</b>
                </li>
              </template>
            </ul>
            <div class="hm-hugo-botones">
              <span class="hm-hugo-boton hm-hugo-si">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                Sí, aplicar
              </span>
              <span class="hm-hugo-boton hm-hugo-no">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                No
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="hm-hugo-entrada">
        <span class="hm-hugo-caja">Escribe o pulsa el micro…</span>
        <span class="hm-hugo-micro" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM6 11a6 6 0 0 0 12 0M12 17v4" /></svg>
        </span>
        <span class="hm-hugo-enviar" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M21 3L10 14M21 3l-7 18-4-7-7-4z" /></svg>
        </span>
      </div>
    </div>

    <!-- el botón flotante del panel, abierto (con la X) -->
    <span class="hm-hugo-fab" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
    </span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  peticion?: string
  respuesta?: string
  cambios?: { habitacion: string, fechas: string, antes: number, despues: number }[]
  pasos?: string[]
  descripcion?: string
  saludo?: boolean
  alto?: number
  movil?: boolean
}>(), {
  peticion: 'Baja la Doble a 90 € del 1 al 7 de julio',
  respuesta: 'Te preparo el cambio en la Doble. Revísalo y dime si lo aplico.',
  cambios: () => [{ habitacion: 'Doble', fechas: '1 jul – 7 jul', antes: 110, despues: 90 }],
  pasos: () => [],
  descripcion: 'Ejemplo del chat de Hugo, el asistente de Hospedy: le pides bajar la habitación Doble a 90 € del 1 al 7 de julio y Hugo te enseña el cambio, de 110 € a 90 €, para que lo confirmes con «Sí, aplicar».',
  saludo: true,
  alto: 0,
  movil: false,
})
</script>

<style scoped>
/* Medidas y colores del chat del panel (AssistantChatDrawer): ventana de 380 px, cabecera en el teal primario,
   fondo gris claro, burbuja del hotelero en teal y la de Hugo en blanco con borde. */
.hm-hugo {
  --k: 1px;
  position: relative;
  width: min(100%, calc(380 * var(--k)));
  padding-bottom: calc(76 * var(--k));
  font-family: "Nunito Variable", "Nunito", sans-serif;
  color: #1a202c;
  user-select: none;
}

.hm-hugo-panel {
  background: #ffffff;
  border-radius: calc(12 * var(--k));
  box-shadow: 0 calc(10 * var(--k)) calc(40 * var(--k)) rgba(0, 0, 0, 0.28);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.hm-hugo :where(svg) {
  width: calc(16 * var(--k));
  height: calc(16 * var(--k));
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hm-hugo-cab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(12 * var(--k)) calc(14 * var(--k));
  background: #0f766e;
  color: #ffffff;
  font-weight: 600;
  font-size: calc(15 * var(--k));
}

.hm-hugo-nombre {
  display: inline-flex;
  align-items: center;
  gap: calc(6 * var(--k));
}

.hm-hugo-nombre svg {
  stroke: none;
}

.hm-hugo-acciones {
  display: inline-flex;
  gap: calc(12 * var(--k));
}

.hm-hugo-cuerpo {
  padding: calc(12 * var(--k));
  background: #f7fafc;
}

.hm-hugo-msg {
  display: flex;
  flex-direction: column;
  margin-bottom: calc(10 * var(--k));
}

.hm-hugo-msg:last-child {
  margin-bottom: 0;
}

.hm-hugo-tuyo {
  align-items: flex-end;
}

.hm-hugo-burbuja {
  max-width: 90%;
  padding: calc(8 * var(--k)) calc(11 * var(--k));
  border-radius: calc(10 * var(--k));
  font-size: calc(13.5 * var(--k));
  line-height: 1.45;
  white-space: pre-line;
}

.hm-hugo-tuyo .hm-hugo-burbuja {
  background: #0f766e;
  color: #ffffff;
}

.hm-hugo-de-hugo .hm-hugo-burbuja {
  background: #ffffff;
  border: calc(1 * var(--k)) solid #e2e8f0;
}

.hm-hugo-propuesta {
  margin-top: calc(6 * var(--k));
  padding: calc(10 * var(--k));
  background: #ffffff;
  border: calc(1 * var(--k)) solid #e2e8f0;
  border-radius: calc(10 * var(--k));
}

.hm-hugo-propuesta-titulo {
  margin-bottom: calc(6 * var(--k));
  font-size: calc(12.5 * var(--k));
  font-weight: 600;
  color: #2d3748;
}

/* la viñeta del panel, dibujada en --k: el marcador de la lista no encoge con el móvil y caía sobre el borde */
.hm-hugo-cambios {
  margin: 0 0 calc(8 * var(--k));
  padding-left: calc(16 * var(--k));
  list-style: none;
  font-size: calc(12.5 * var(--k));
  color: #2d3748;
}

.hm-hugo-cambios li {
  position: relative;
}

.hm-hugo-cambios li::before {
  content: "•";
  position: absolute;
  left: calc(-12 * var(--k));
}

.hm-hugo-cambios li + li {
  margin-top: calc(3 * var(--k));
}

.hm-hugo-botones {
  display: flex;
  gap: calc(8 * var(--k));
}

.hm-hugo-boton {
  display: inline-flex;
  align-items: center;
  gap: calc(5 * var(--k));
  padding: calc(6 * var(--k)) calc(12 * var(--k));
  border-radius: calc(8 * var(--k));
  font-size: calc(13 * var(--k));
  color: #ffffff;
}

.hm-hugo-boton svg {
  width: calc(13 * var(--k));
  height: calc(13 * var(--k));
  stroke-width: 2.6;
}

.hm-hugo-si {
  background: #2f855a;
}

.hm-hugo-no {
  background: #c53030;
}

.hm-hugo-entrada {
  display: flex;
  gap: calc(8 * var(--k));
  padding: calc(10 * var(--k));
  border-top: calc(1 * var(--k)) solid #e2e8f0;
  background: #ffffff;
}

.hm-hugo-caja {
  flex: 1;
  min-height: calc(46 * var(--k));
  padding: calc(7 * var(--k)) calc(9 * var(--k));
  border: calc(1 * var(--k)) solid #cbd5e0;
  border-radius: calc(8 * var(--k));
  font-size: calc(13.5 * var(--k));
  color: #a0aec0;
}

.hm-hugo-micro,
.hm-hugo-enviar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(42 * var(--k));
  border-radius: calc(8 * var(--k));
}

.hm-hugo-micro {
  background: #e2e8f0;
  color: #2d3748;
}

.hm-hugo-enviar {
  background: #0f766e;
  color: #ffffff;
}

.hm-hugo-fab {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(56 * var(--k));
  height: calc(56 * var(--k));
  border-radius: 50%;
  background: #4a5568;
  color: #ffffff;
  box-shadow: 0 calc(4 * var(--k)) calc(14 * var(--k)) rgba(0, 0, 0, 0.25);
}

.hm-hugo-fab svg {
  width: calc(20 * var(--k));
  height: calc(20 * var(--k));
}

/* Con alto fijo, y en el móvil, los mensajes se pegan abajo, como una conversación que ha bajado sola: lo que no cabe
   se corta por arriba. */
.hm-hugo--fijo .hm-hugo-panel {
  height: calc(var(--hm-hugo-alto) * var(--k));
}

.hm-hugo--fijo .hm-hugo-cuerpo,
.hm-hugo--movil .hm-hugo-cuerpo {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hm-hugo--fijo .hm-hugo-msg,
.hm-hugo--movil .hm-hugo-msg {
  flex: 0 0 auto;
}

/* En el móvil (dentro de MockPhoneFrame): la pantalla entera, con la barra de la app detrás. El panel, como en el
   panel real a 375 px: a 22 px de la derecha, 90 px por encima del borde, 343 px de ancho y el 70 % del alto. */
.hm-hugo--movil {
  --k: var(--p);
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  padding-bottom: 0;
  overflow: hidden;
  background: #eef3f2;
}

.hm-hugo-app {
  display: flex;
  align-items: center;
  gap: calc(12 * var(--k));
  height: calc(52 * var(--k));
  padding: 0 calc(16 * var(--k));
  background: #ffffff;
  border-bottom: calc(1 * var(--k)) solid #e2e8f0;
  color: #4a5568;
}

.hm-hugo-app svg {
  width: calc(20 * var(--k));
  height: calc(20 * var(--k));
}

.hm-hugo-app-marca {
  font-size: calc(16 * var(--k));
  font-weight: 800;
  color: #0f766e;
}

.hm-hugo--movil .hm-hugo-panel {
  position: absolute;
  right: calc(22 * var(--k));
  bottom: calc(90 * var(--k));
  width: calc(343 * var(--k));
  height: calc(568 * var(--k));
}

.hm-hugo--movil .hm-hugo-fab {
  right: calc(22 * var(--k));
  bottom: calc(22 * var(--k));
}
</style>
