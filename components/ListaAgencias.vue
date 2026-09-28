<template>
  <!-- La lista real de agencias del channel manager. Se genera en el servidor: el HTML ya trae todos los
       nombres (los que no se ven, dentro de «Ver las N agencias»), y el buscador filtra entre todas. -->
  <section class="max-w-5xl mx-auto px-6 mt-16" aria-labelledby="agencias-titulo">
    <h2 id="agencias-titulo" class="text-3xl font-bold text-center mb-4">
      Conecta con {{ total }} agencias
    </h2>
    <p class="text-center text-gray-600 mb-8">
      Estas son las más habituales en España. Busca cualquier otra por su nombre.
    </p>
    <div class="max-w-md mx-auto mb-8">
      <label for="buscar-agencia" class="sr-only">Buscar una agencia</label>
      <input
        id="buscar-agencia"
        v-model="busqueda"
        type="search"
        class="form-input w-full"
        placeholder="Busca una agencia"
        autocomplete="off"
      />
    </div>
    <ul class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
      <li
        v-for="agencia in visibles"
        :key="agencia.canal"
        class="flex items-center gap-2 sm:gap-3 bg-gray-100 rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-0"
      >
        <img
          v-if="agencia.icono"
          :src="agencia.icono"
          alt=""
          width="32"
          height="32"
          loading="lazy"
          decoding="async"
          class="w-6 h-6 sm:w-8 sm:h-8 shrink-0"
        />
        <span
          v-else
          class="w-5 h-5 m-0.5 sm:w-7 sm:h-7 shrink-0 rounded bg-white border border-gray-200 text-gray-500 text-xs sm:text-sm font-bold flex items-center justify-center"
          aria-hidden="true"
          >{{ inicial(agencia.nombre) }}</span
        >
        <span class="text-sm sm:text-base font-semibold text-gray-700 leading-snug min-w-0 break-words"
          ><template v-for="(trozo, i) in trozos(agencia.nombre)" :key="i"><wbr v-if="i" />{{ trozo }}</template></span
        >
      </li>
    </ul>
    <p v-if="buscando && !visibles.length" class="text-center text-gray-600 mt-6">
      Ninguna agencia coincide con «{{ busqueda.trim() }}».
    </p>
    <details class="mt-10 text-gray-600">
      <summary class="cursor-pointer text-primary font-semibold text-center">
        Ver las {{ total }} agencias
      </summary>
      <ul class="columns-2 sm:columns-3 lg:columns-4 gap-6 mt-6 text-sm">
        <li v-for="agencia in todas" :key="agencia.canal" class="py-1 break-inside-avoid">
          {{ agencia.nombre }}
        </li>
      </ul>
    </details>
  </section>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/agencias', { key: 'agencias' })

const busqueda = ref('')

const todas = computed(() =>
  (data.value?.agencias || [])
    .map(agencia => ({ ...agencia, nombre: nombreDeAgencia(agencia.canal, agencia.nombre) }))
    .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es')),
)
const total = computed(() => todas.value.length)

const destacadas = computed(() => {
  const porCanal = new Map(todas.value.map(agencia => [agencia.canal, agencia]))
  return AGENCIAS_DESTACADAS.map(canal => porCanal.get(canal)).filter(agencia => agencia !== undefined)
})

const buscando = computed(() => normalizarAgencia(busqueda.value).length >= 2)

const visibles = computed(() => {
  if (!buscando.value) return destacadas.value
  const texto = normalizarAgencia(busqueda.value)
  return todas.value.filter(agencia => normalizarAgencia(agencia.nombre).includes(texto))
})

// en un móvil estrecho, «CasasRurales.net» solo cabe partiéndolo después del punto
function trozos(nombre: string): string[] {
  return nombre.split('.').map((trozo, i, todos) => (i < todos.length - 1 ? trozo + '.' : trozo)).filter(Boolean)
}

function inicial(nombre: string): string {
  return nombre.replace(/[^\p{L}\p{N}]/gu, '').charAt(0).toUpperCase()
}
</script>
