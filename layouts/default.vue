<template>
    <!-- overflow-x-clip: las animaciones de entrada (AOS fade-left/right) sacan los bloques
         100px de lado antes de aparecer y, sin esto, en movil la pagina se desplaza en
         horizontal. clip recorta sin crear un contenedor de scroll, y la barra fija no se ve
         afectada -->
    <div class="overflow-x-clip">
      <NuxtPage />
    </div>
</template>
<script lang="ts" >

</script>