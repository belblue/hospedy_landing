<!--
  Composicion de las dos maquetas: el planning en el portatil y el auto check-in
  en el movil, que sale abajo a la derecha, desplazado hacia fuera y solapando
  solo la base del portatil. La pantalla del portatil NUNCA queda tapada: el
  borde izquierdo del movil (83,5% del ancho) cae por fuera del borde derecho de
  la pantalla (83% menos el marco del portatil).

  Por debajo de 768px el movil se retira: a ese ancho el portatil ya se queda
  pequenno y las dos cosas juntas no se leerian.
-->
<template>
  <div class="hm-duo">
    <div class="hm-duo__lap"><MockPlanning /></div>
    <div class="hm-duo__ph"><MockCheckin /></div>
  </div>
</template>

<style scoped>
.hm-duo {
  position: relative;
  width: 100%;
  /* el alto sale del ancho: nada se mueve al cargar */
  aspect-ratio: 100 / 63;
  /* 112vh es el ancho que hace que el alto quede en 70vh, como la imagen que sustituye */
  max-width: min(980px, 112vh);
  margin-left: auto;
}
.hm-duo__lap {
  position: absolute;
  left: 0;
  top: 0;
  width: 83%;
  z-index: 1;
}
.hm-duo__ph {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 16.5%;
  z-index: 2;
}

@media (max-width: 767px) {
  .hm-duo {
    aspect-ratio: auto;
    max-width: none;
    margin-left: 0;
  }
  .hm-duo__lap {
    position: static;
    width: 100%;
  }
  .hm-duo__ph {
    display: none;
  }
}
</style>
