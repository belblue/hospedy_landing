<template>
  <!-- Hugo, el asistente, como se ve en el panel: la ventana del chat abierta sobre su botón ámbar. Copia la piel
       del panel (cabecera teal, burbujas, la propuesta con «Sí, aplicar») con una conversación de ejemplo. Es una
       foto: sin JavaScript, inert y con su texto alternativo. -->
  <div class="hm-hugo" role="img" :aria-label="descripcion" inert>
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
        <div class="hm-hugo-msg hm-hugo-de-hugo">
          <div class="hm-hugo-burbuja">Hola, soy <b>Hugo</b>. Pídeme cambios como si hablaras con una persona. Antes de aplicar nada, te lo mostraré para que lo confirmes.</div>
        </div>
        <div class="hm-hugo-msg hm-hugo-tuyo">
          <div class="hm-hugo-burbuja">{{ peticion }}</div>
        </div>
        <div class="hm-hugo-msg hm-hugo-de-hugo">
          <div class="hm-hugo-burbuja">{{ respuesta }}</div>
          <div class="hm-hugo-propuesta">
            <div class="hm-hugo-propuesta-titulo">Cambios propuestos</div>
            <ul class="hm-hugo-cambios">
              <li v-for="cambio in cambios" :key="cambio.fechas">
                <b>{{ cambio.habitacion }}</b> · {{ cambio.fechas }} · Precio: {{ cambio.antes }} € → <b>{{ cambio.despues }} €</b>
              </li>
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
  descripcion?: string
}>(), {
  peticion: 'Baja la Doble a 90 € del 1 al 7 de julio',
  respuesta: 'Te preparo el cambio en la Doble. Revísalo y dime si lo aplico.',
  cambios: () => [{ habitacion: 'Doble', fechas: '1 jul – 7 jul', antes: 110, despues: 90 }],
  descripcion: 'Ejemplo del chat de Hugo, el asistente de Hospedy: le pides bajar la habitación Doble a 90 € del 1 al 7 de julio y Hugo te enseña el cambio, de 110 € a 90 €, para que lo confirmes con «Sí, aplicar».',
})
</script>

<style scoped>
/* Medidas y colores del chat del panel (AssistantChatDrawer): ventana de 380 px, cabecera en el teal primario,
   fondo gris claro, burbuja del hotelero en teal y la de Hugo en blanco con borde. */
.hm-hugo {
  position: relative;
  width: min(100%, 380px);
  padding-bottom: 76px;
  font-family: "Nunito Variable", "Nunito", sans-serif;
  color: #1a202c;
  user-select: none;
}

.hm-hugo-panel {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.28);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.hm-hugo :where(svg) {
  width: 16px;
  height: 16px;
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
  padding: 12px 14px;
  background: #0f766e;
  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
}

.hm-hugo-nombre {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.hm-hugo-nombre svg {
  stroke: none;
}

.hm-hugo-acciones {
  display: inline-flex;
  gap: 12px;
}

.hm-hugo-cuerpo {
  padding: 12px;
  background: #f7fafc;
}

.hm-hugo-msg {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.hm-hugo-msg:last-child {
  margin-bottom: 0;
}

.hm-hugo-tuyo {
  align-items: flex-end;
}

.hm-hugo-burbuja {
  max-width: 90%;
  padding: 8px 11px;
  border-radius: 10px;
  font-size: 13.5px;
  line-height: 1.45;
}

.hm-hugo-tuyo .hm-hugo-burbuja {
  background: #0f766e;
  color: #ffffff;
}

.hm-hugo-de-hugo .hm-hugo-burbuja {
  background: #ffffff;
  border: 1px solid #e2e8f0;
}

.hm-hugo-propuesta {
  margin-top: 6px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
}

.hm-hugo-propuesta-titulo {
  margin-bottom: 6px;
  font-size: 12.5px;
  font-weight: 600;
  color: #2d3748;
}

.hm-hugo-cambios {
  margin: 0 0 8px;
  padding-left: 16px;
  list-style: disc;
  font-size: 12.5px;
  color: #2d3748;
}

.hm-hugo-botones {
  display: flex;
  gap: 8px;
}

.hm-hugo-boton {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  color: #ffffff;
}

.hm-hugo-boton svg {
  width: 13px;
  height: 13px;
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
  gap: 8px;
  padding: 10px;
  border-top: 1px solid #e2e8f0;
  background: #ffffff;
}

.hm-hugo-caja {
  flex: 1;
  min-height: 46px;
  padding: 7px 9px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 13.5px;
  color: #a0aec0;
}

.hm-hugo-micro,
.hm-hugo-enviar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  border-radius: 8px;
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
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #4a5568;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

.hm-hugo-fab svg {
  width: 20px;
  height: 20px;
}
</style>
