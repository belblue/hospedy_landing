<!--
  El channel manager en una ilustracion hecha con CSS: el planning de Hospedy en el portatil (la
  maqueta en foto, con los colores del panel y los logos de agencia en las reservas) sobre un disco
  menta, y alrededor los logos de las agencias con las que se sincroniza. Sustituye a
  /channel_manager.svg (1,6 MB, con una captura antigua del planning dentro). No se mueve.

  Escala sola con el ancho, sin JavaScript: las posiciones van en % de la composicion (la del
  dibujo original, 500,92 x 417,85) y el canto del disco en cqw. Los logos son imagenes
  pequennas en public/agencias (unos 26 KB entre todos); el de Booking es vectorial.
-->
<template>
  <div
    class="hm-can"
    role="img"
    aria-label="El planning de Hospedy sincronizado con Booking, Airbnb, Expedia, lastminute.com y otras agencias."
  >
    <div class="hm-can__disco" aria-hidden="true" />
    <div class="hm-can__lap" aria-hidden="true"><MockPlanning estatico /></div>
    <span
      v-for="l in LOGOS"
      :key="l.src"
      class="hm-can__logo"
      :class="'hm-can__logo--' + l.forma"
      :style="{ left: l.x + '%', top: l.y + '%', width: l.w + '%' }"
      aria-hidden="true"
    >
      <img :src="'/agencias/' + l.src" alt="" width="160" height="160" loading="lazy" decoding="async" />
    </span>
  </div>
</template>

<script setup>
/* posicion (x, y) y ancho en % de la composicion, como en el dibujo original */
const LOGOS = [
  { src: "booking.svg", x: 0, y: 20.9, w: 14, forma: "vector" },
  { src: "agencia-esqui.webp", x: 16.6, y: 0, w: 13.9, forma: "cuadro" },
  { src: "airbnb.webp", x: 39.3, y: 16.5, w: 14.4, forma: "circulo" },
  { src: "agencia-cuadrados.webp", x: 60.4, y: 1.8, w: 14, forma: "cuadro-redondo" },
  { src: "lastminute.webp", x: 85.4, y: 21, w: 14.6, forma: "circulo-blanco" },
  { src: "expedia.webp", x: 80.7, y: 50.7, w: 14, forma: "cuadro" },
  { src: "agencia-h.webp", x: 4.8, y: 50.6, w: 13.5, forma: "cuadro-borde" },
];
</script>

<style scoped>
.hm-can {
  position: relative;
  width: 100%;
  aspect-ratio: 500.92 / 417.85;
  container-type: inline-size;
}

/* el disco: la cara de arriba en la menta de la marca y el canto en teal */
.hm-can__disco {
  position: absolute;
  left: 7.56%;
  width: 83.76%;
  top: 71%;
  height: 19.45%;
  border-radius: 50%;
  background: linear-gradient(180deg, #effefb 0%, #ccfbf1 100%);
  box-shadow:
    0 1.1cqw 0 0 rgba(13, 148, 136, 0.62),
    0 3cqw 4cqw -2cqw rgba(15, 118, 110, 0.35);
}

/* el portatil, apoyado en el centro del disco; la base de la maqueta es un 12 % mas ancha que
   la tapa, asi que con este ancho mide lo mismo que la del dibujo original y los logos de los
   lados solo lo rozan */
.hm-can__lap {
  position: absolute;
  left: 21.44%;
  width: 56%;
  bottom: 16.25%;
}

.hm-can__logo {
  position: absolute;
  aspect-ratio: 1;
  display: block;
  filter: drop-shadow(0 0.8cqw 1.4cqw rgba(15, 60, 55, 0.18));
}
.hm-can__logo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* cada logo con su forma, como en el dibujo original */
.hm-can__logo--cuadro img {
  border-radius: 19%;
}
.hm-can__logo--cuadro-redondo img {
  border-radius: 29%;
}
/* el de fondo blanco lleva un borde fino (un outline hacia dentro se pinta encima de la imagen) */
.hm-can__logo--cuadro-borde img {
  border-radius: 19%;
  outline: 0.25cqw solid rgba(23, 23, 23, 0.55);
  outline-offset: -0.25cqw;
}
.hm-can__logo--circulo img {
  border-radius: 50%;
}
.hm-can__logo--circulo-blanco {
  border-radius: 50%;
  background: #fff;
  box-shadow: inset 0 0 0 0.22cqw rgba(23, 23, 23, 0.55);
}
.hm-can__logo--circulo-blanco img {
  padding: 6%;
  box-sizing: border-box;
}
</style>
