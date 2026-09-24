<!--
  Iconos de las tarjetas de problemas de las paginas por tipo de alojamiento (hoteles,
  apartamentos y casas rurales), dibujados para la web en lugar de emojis: trazo en el teal de
  la marca, rellenos blancos y menta y un solo detalle en ambar, como las estrellas del logo.
  Van sobre una baldosa menta. Son decorativos: el texto de la tarjeta dice lo mismo.

  - nombre: checkin, parte, overbooking, comisiones, noshow, calendarios, desplazamiento,
    papeleo o disponibilidad
-->
<template>
  <span class="hm-reto" aria-hidden="true">
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <!-- "El check-in es eterno": el documento del huesped y el reloj -->
      <g v-if="nombre === 'checkin'">
        <rect x="4" y="10" width="32" height="23" rx="4" fill="#fff" />
        <rect x="8.5" y="15" width="9.5" height="12.5" rx="2.2" fill="#5eead4" stroke="none" />
        <circle cx="13.25" cy="19.4" r="2.3" fill="#fff" stroke="none" />
        <path d="M9.9 26.3c.5-2.6 1.8-3.9 3.35-3.9s2.85 1.3 3.35 3.9" fill="#fff" stroke="none" />
        <path d="M22.5 17h9M22.5 21.5h7M22.5 26h4.5" />
        <circle cx="35" cy="33.5" r="9.5" fill="#f59e0b" stroke="#fff" stroke-width="2.8" />
        <path d="M35 28.6v5l3.3 2.2" stroke="#fff" stroke-width="2.3" />
      </g>

      <!-- "Se me olvido enviar el parte": el parte con el aviso -->
      <g v-else-if="nombre === 'parte'">
        <path d="M11 4.5h15.5l9 9V39a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V8.5a4 4 0 0 1 4-4z" fill="#fff" />
        <path d="M26.5 4.5V10a3.5 3.5 0 0 0 3.5 3.5h5.5" />
        <path d="M12.5 20.5h13M12.5 25.5h10M12.5 30.5h6.5" />
        <circle cx="35.5" cy="35" r="9.5" fill="#f59e0b" stroke="#fff" stroke-width="2.8" />
        <path d="M35.5 30v5.6" stroke="#fff" stroke-width="2.6" />
        <circle cx="35.5" cy="39.6" r="1.55" fill="#fff" stroke="none" />
      </g>

      <!-- "Tengo overbooking otra vez": dos reservas en las mismas casillas del planning -->
      <g v-else-if="nombre === 'overbooking'">
        <rect x="4" y="7" width="40" height="34" rx="5" fill="#fff" />
        <path d="M4 15.5h40" />
        <path d="M9.5 11.3h3M19.5 11.3h3M29.5 11.3h3" stroke-width="2" />
        <path d="M14 15.5V41M24 15.5V41M34 15.5V41" stroke-width="1.4" stroke-opacity=".28" />
        <rect x="8" y="22" width="22" height="7.5" rx="3.75" fill="#14b8a6" stroke="none" />
        <rect x="18" y="27" width="22.5" height="7.5" rx="3.75" fill="#f59e0b" stroke="#fff" stroke-width="1.8" />
      </g>

      <!-- "Las comisiones me comen": la moneda con un mordisco y el porcentaje -->
      <g v-else-if="nombre === 'comisiones'">
        <path d="M37.9 20.36A15 15 0 1 1 29.64 12.1A7 7 0 0 0 37.9 20.36Z" fill="#fff" />
        <circle cx="24" cy="26" r="9.6" stroke-width="1.4" stroke-opacity=".3" />
        <circle cx="20.4" cy="22.6" r="2.1" stroke="#f59e0b" />
        <circle cx="27.6" cy="29.4" r="2.1" stroke="#f59e0b" />
        <path d="M28.2 21.6 19.8 30.4" stroke="#f59e0b" />
        <circle cx="41.6" cy="11.4" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="44" cy="16.6" r="0.95" fill="currentColor" stroke="none" />
      </g>

      <!-- "Otro no-show mas": la puerta y el huesped que no ha venido -->
      <g v-else-if="nombre === 'noshow'">
        <path d="M6.5 42V9.5A3.5 3.5 0 0 1 10 6h13a3.5 3.5 0 0 1 3.5 3.5V42" fill="#fff" />
        <rect x="10.5" y="10" width="12" height="11" rx="1.6" stroke-width="1.4" stroke-opacity=".35" />
        <rect x="10.5" y="29" width="12" height="9" rx="1.6" stroke-width="1.4" stroke-opacity=".35" />
        <path d="M3.5 42h41" />
        <circle cx="21.2" cy="25" r="1.9" fill="#f59e0b" stroke="none" />
        <circle cx="36" cy="18" r="4.8" stroke-dasharray="2.4 2.6" />
        <path d="M28.3 37c0-5.4 3.4-8.8 7.7-8.8s7.7 3.4 7.7 8.8" stroke-dasharray="2.4 2.6" />
      </g>

      <!-- "Actualizo 5 calendarios": los calendarios apilados y la sincronizacion -->
      <g v-else-if="nombre === 'calendarios'">
        <rect x="14" y="4" width="28" height="22" rx="4" fill="#ccfbf1" stroke-opacity=".55" />
        <rect x="9" y="9" width="28" height="23" rx="4" fill="#f0fdfa" stroke-opacity=".8" />
        <rect x="4" y="14" width="28" height="26" rx="4" fill="#fff" />
        <path d="M4 21.5h28" />
        <path d="M10.5 11.5v5M25.5 11.5v5" />
        <path d="M9.5 27h3M16.5 27h3M23.5 27h2M9.5 33h3M16.5 33h3" stroke-width="2.4" />
        <circle cx="36" cy="34.5" r="9.5" fill="#f59e0b" stroke="#fff" stroke-width="2.8" />
        <path d="M31.8 33.2a4.4 4.4 0 0 1 7.6-2.4M39.9 28.4v2.8h-2.8M40.2 35.8a4.4 4.4 0 0 1-7.6 2.4M32.1 40.6v-2.8h2.8" stroke="#fff" stroke-width="2.1" />
      </g>

      <!-- "Tengo que ir a recibir a todos": la ruta por el campo hasta la casa -->
      <g v-else-if="nombre === 'desplazamiento'">
        <path d="M11.5 13.5 6.4 21.6h2.9L5 29.2h13l-4.3-7.6h2.9z" fill="#ccfbf1" stroke-width="2" />
        <path d="M11.5 29.2v4.3" stroke-width="2" />
        <path d="M7.5 41.5c4 0 6-3.8 10-3.8s5.8 3.3 9.8 3.3c2.6 0 3.7-2 3.7-5" stroke-width="2" stroke-dasharray="2.6 2.8" />
        <circle cx="5.2" cy="41.5" r="2.4" fill="#f59e0b" stroke="none" />
        <path d="M31 36C31 36 19.5 26.7 19.5 17.5a11.5 11.5 0 0 1 23 0C42.5 26.7 31 36 31 36z" fill="#fff" />
        <path d="M27.2 17.2v5.6h7.6v-5.6" fill="#ccfbf1" stroke-width="2" />
        <path d="M25.6 18.4 31 13.6l5.4 4.8" stroke-width="2" />
        <path d="M31 22.8v-2.7" stroke-width="1.8" />
      </g>

      <!-- "El papeleo me quita tiempo": la pila de papeles con el clip -->
      <g v-else-if="nombre === 'papeleo'">
        <rect x="12.5" y="5.5" width="26" height="33" rx="3.5" fill="#ccfbf1" transform="rotate(7 25.5 22)" />
        <rect x="8" y="9" width="26" height="33" rx="3.5" fill="#fff" />
        <path d="M13.5 25h15M13.5 29.5h15M13.5 34h11M13.5 38.5h7" />
        <path d="M20.5 15.5V6.8a2.8 2.8 0 0 1 5.6 0v10.4a4.6 4.6 0 0 1-9.2 0V9.5" stroke="#f59e0b" />
      </g>

      <!-- "No se cuando tengo libre": el calendario y la lupa buscando un hueco -->
      <g v-else-if="nombre === 'disponibilidad'">
        <rect x="4" y="8" width="32" height="31" rx="4" fill="#fff" />
        <path d="M4 16h32" />
        <path d="M11 5v6M29 5v6" />
        <g fill="#14b8a6" stroke="none">
          <rect x="8" y="20" width="4.4" height="3.6" rx="1" />
          <rect x="14" y="20" width="4.4" height="3.6" rx="1" />
          <rect x="26" y="20" width="4.4" height="3.6" rx="1" />
          <rect x="8" y="26" width="4.4" height="3.6" rx="1" />
          <rect x="20" y="26" width="4.4" height="3.6" rx="1" />
          <rect x="8" y="32" width="4.4" height="3.6" rx="1" />
          <rect x="14" y="32" width="4.4" height="3.6" rx="1" />
        </g>
        <g stroke-width="1.2" stroke-opacity=".35">
          <rect x="20" y="20" width="4.4" height="3.6" rx="1" />
          <rect x="14" y="26" width="4.4" height="3.6" rx="1" />
        </g>
        <circle cx="31" cy="31" r="7.2" fill="#fff" fill-opacity=".94" stroke="#f59e0b" stroke-width="2.6" />
        <rect x="28.8" y="29.2" width="4.4" height="3.6" rx="1" stroke-width="1.6" />
        <path d="M36.3 36.3 42 42" stroke="#f59e0b" stroke-width="3.2" />
      </g>
    </svg>
  </span>
</template>

<script setup>
defineProps({
  nombre: { type: String, required: true },
});
</script>

<style scoped>
.hm-reto {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  color: #0f766e;
  background: linear-gradient(150deg, #f0fdfa 0%, #ccfbf1 100%);
  box-shadow: inset 0 0 0 1px rgba(15, 118, 110, 0.14), 0 8px 18px -12px rgba(15, 118, 110, 0.55);
}
.hm-reto svg {
  width: 2.6rem;
  height: 2.6rem;
  display: block;
}
</style>
