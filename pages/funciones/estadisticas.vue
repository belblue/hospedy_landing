<template>
  <PaginaFuncion
    clave="estadisticas"
    nombre="Estadísticas"
    grupo="Gestiona tu alojamiento"
    h1="Las cifras de tu alojamiento, frente al año anterior"
    entradilla="Ocupación, ingresos, precio medio por noche e ingreso por habitación disponible de cualquier periodo, comparados con el año anterior y desglosados por mes, día de la semana, tipo de habitación y canal. Salen de tus reservas, sin hojas de cálculo."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  >
    <template #maqueta>
      <!-- la pantalla Estadísticas de ejemplo, para usarla: se monta al verse (las cifras ficticias no van en el HTML) -->
      <MontarAlVerse
        class="caja-estadisticas"
        descripcion="Ejemplo de la pantalla Estadísticas de Hospedy: arriba, el periodo y los filtros; debajo, la ocupación, los ingresos, el precio medio por noche y el ingreso por habitación disponible, cada uno con su diferencia frente al año anterior, y los gráficos de evolución por mes, día de la semana, canal de venta y tipo de habitación."
      >
        <MockEstadisticas />
      </MontarAlVerse>
      <p class="mt-4 text-center text-base text-gray-500">
        Datos de ejemplo. Cambia el periodo, quita la comparación con el año anterior, guarda un cuadro o enciende más gráficos.
        <span class="hidden lg:inline">Pasa el ratón por las barras para ver cada cifra y arrastra la pantalla para ver el resto.</span>
        <span class="lg:hidden">Toca una barra para ver su cifra y toca lo que asoma abajo para seguir bajando.</span>
      </p>
    </template>
  </PaginaFuncion>
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'

const DESCRIPCION = 'Ocupación, ingresos, ADR y RevPAR de tu alojamiento en cualquier periodo, frente al año anterior, por mes, día de la semana, tipo de habitación y canal.'

useSeoPagina({
  titulo: 'Estadísticas de ocupación, ADR y RevPAR de tu alojamiento',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'Las cifras de tu negocio, de un vistazo',
    texto: 'Al abrir «Estadísticas» ves las cuatro cifras que resumen cómo va tu alojamiento en el periodo que elijas y, debajo, una franja con la actividad.',
    puntos: [
      'Ocupación: las noches vendidas sobre las que tenías disponibles',
      'Ingresos: las noches más los extras, sin la tasa turística',
      'Precio medio por noche (ADR) e ingreso por habitación disponible (RevPAR)',
      'Estancias, noches vendidas, estancia media y huéspedes registrados',
    ],
  },
  {
    titulo: 'Frente al año anterior',
    texto: 'Con «Comparar con el año anterior», cada cifra lleva al lado la diferencia, en verde si sube y en rojo si baja, y el valor de antes.',
    puntos: [
      'Al abrirla ves los últimos doce meses frente al año anterior',
      'O el que quieras: este mes o el pasado, este año o el pasado, los próximos doce meses o las fechas que elijas en el calendario',
      'Todas tus casas juntas o cada una por separado',
    ],
  },
  {
    titulo: 'Desglosado para ver de dónde sale',
    texto: 'Debajo de las cifras, los gráficos las reparten. Pasa el ratón por una barra y te dice la cifra exacta.',
    puntos: [
      'Evolución por mes: ingresos y ocupación, con el año anterior al lado',
      'Noches vendidas por día de la semana',
      'Canal de venta: agencias frente a venta directa, con las estancias y los ingresos de cada agencia',
      'Ocupación por tipo de habitación',
    ],
  },
  {
    titulo: 'Más gráficos, cuando los quieras',
    texto: 'En «Más gráficos» enciendes seis más. Siguen el periodo y los filtros del cuadro, salvo el ritmo de venta, que mira hacia delante.',
    puntos: [
      'Ritmo de venta: lo que llevas vendido para los próximos meses frente a lo que llevabas el año pasado a estas alturas',
      'Antelación de la reserva y duración de la estancia',
      'Cancelaciones por mes y por canal, con su tasa',
      'Procedencia: los países y las provincias de tus huéspedes',
      'Mapa de calor: la ocupación de cada día en un calendario',
    ],
  },
  {
    titulo: 'Tus cuadros, a un clic',
    texto: 'Guarda con un nombre la combinación de periodo y filtros que más miras, como «Agosto frente al año pasado», y vuelve a ella desde «Mis cuadros».',
    puntos: [
      'Marca uno como cuadro de inicio y es el que se abre al entrar',
      'Hasta 20 cuadros, que ve todo tu equipo con la misma cuenta',
      'El periodo y los filtros van en la dirección de la página: cópiala para compartir lo que estás viendo',
    ],
  },
  {
    titulo: 'Cifras que cuadran',
    texto: 'Las estadísticas salen de tus reservas con unas reglas claras, y «Cómo se calcula», al pie de la pantalla, te las recuerda.',
    puntos: [
      'En el pasado cuentan las estancias que hicieron el check-in o tienen huéspedes registrados',
      'Las canceladas van aparte, y los cierres de habitación no cuentan nunca',
      'Si muchas reservas del periodo no tienen check-in, un aviso te lo dice y puedes contarlas también',
      'La ocupación se calcula sobre las habitaciones que tienes hoy, también en periodos pasados',
    ],
    nota: 'Son las mismas cifras que te da Hugo cuando le pides estadísticas.',
  },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿Qué son el ADR y el RevPAR?',
    respuesta: 'El ADR es el precio medio por noche: los ingresos de alojamiento entre las noches vendidas. El RevPAR es el ingreso por habitación disponible: los ingresos de alojamiento entre las noches disponibles, se vendan o no. Hospedy calcula los dos solos, para cualquier periodo.',
  },
  {
    pregunta: '¿Qué cuenta como ingresos?',
    respuesta: 'Las noches de alojamiento más los extras de las reservas, sin la tasa turística. No es la suma de las facturas emitidas.',
  },
  {
    pregunta: '¿Puedo pedirle las estadísticas a Hugo?',
    respuesta: 'Sí. Pídeselas con tus palabras, como «compara agosto de este año con el del año pasado», y te da las cifras de cada periodo y la diferencia. Su respuesta acaba con el enlace «Ver estos gráficos en Estadísticas», que abre esta pantalla con el mismo periodo y los mismos filtros.',
  },
  {
    pregunta: '¿Puedo ver cada alojamiento por separado?',
    respuesta: 'Sí. En «Alojamiento» eliges «Todos», el total de tus casas, o una de ellas. La ocupación por tipo de habitación va siempre casa por casa: los tipos no se suman entre casas.',
  },
  {
    pregunta: '¿Está incluido en mi plan?',
    respuesta: 'Sí. Las estadísticas van incluidas en todos los planes.',
  },
]
</script>

<style scoped>
/* el hueco de la maqueta, con su alto antes de montarse: el movil por debajo de 1024 px y el portatil desde ahi */
.caja-estadisticas {
  width: min(300px, 100%);
  margin: 0 auto;
  aspect-ratio: 288 / 602.64;
}
@media (min-width: 1024px) {
  .caja-estadisticas {
    width: 100%;
    aspect-ratio: 1000 / 674.9;
  }
}
</style>
