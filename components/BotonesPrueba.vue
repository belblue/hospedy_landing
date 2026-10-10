<template>
  <!-- Los dos botones de siempre (decisión de Arturo del 10-10): «Prueba gratis 30 días», que lleva al registro,
       es el principal; «Ver una demo», el secundario. Sobre fondo oscuro (la banda de cierre), en blanco. -->
  <div class="flex flex-col sm:flex-row sm:flex-wrap gap-3" :class="{ 'justify-center': centrados }">
    <a
      :href="appUrl('/register')"
      class="btn sm:flex-none px-6 py-3 whitespace-nowrap font-semibold"
      :class="oscuro ? 'bg-white text-secondary hover:bg-tertiary' : 'btn-principal btn-shimmer'"
      title="Crea tu cuenta de Hospedy y empieza la prueba gratis"
    >Prueba gratis 30 días</a>
    <PruebaHospedyButton
      class="btn sm:flex-none px-6 py-3 whitespace-nowrap"
      :class="oscuro ? 'boton-demo-oscuro' : 'btn-outline'"
    >Ver una demo</PruebaHospedyButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{ centrados?: boolean, oscuro?: boolean }>()
const { appUrl } = useReferral()
</script>

<style scoped>
.boton-demo-oscuro {
  border: 2px solid rgba(255, 255, 255, 0.85);
  color: #ffffff;
  background: transparent;
  box-shadow: none;
}

.boton-demo-oscuro:hover {
  background: rgba(255, 255, 255, 0.12);
}
</style>
