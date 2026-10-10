<template>
    <!-- overflow-x-clip: las animaciones de entrada (AOS fade-left/right) sacan los bloques
         100px de lado antes de aparecer y, sin esto, en movil la pagina se desplaza en
         horizontal. clip recorta sin crear un contenedor de scroll, y la barra fija no se ve
         afectada -->
    <div class="overflow-x-clip">
      <a href="#contenido" class="saltar-al-contenido">Saltar al contenido</a>
      <!-- la barra y el pie viven aqui, fuera de la transicion de pagina: no se mueven al navegar -->
      <Navbar />
      <main id="contenido" tabindex="-1" class="outline-none">
        <slot />
      </main>
      <Footer />
      <!-- Programa Amigos: barra "Te ha invitado un amigo" cuando se llega con un código -->
      <ReferralBanner />
      <!-- "¡Prueba Hospedy en 5 minutos!": el modal que abren todos los PruebaHospedyButton -->
      <PruebaHospedyModal />
    </div>
</template>

<script setup lang="ts">
// quién es Hospedy y qué web es esta, en todas las páginas
useEsquema('organizacion', esquemaOrganizacion())
useEsquema('web', esquemaWeb())
</script>
