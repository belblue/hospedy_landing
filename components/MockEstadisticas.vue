<!--
  Maqueta de la pantalla "Estadisticas" del panel, con datos de ejemplo del Hotel Alameda
  (utils/estadisticasEjemplo). NO habla con ninguna API.

  Copia la pantalla del panel: la banda con el periodo, la tarjeta de los filtros, "Mis cuadros",
  las cuatro cifras con su diferencia y su "antes", la franja, la evolucion por mes, los tres
  desgloses, "Mas graficos" y "Como se calcula". Y se usa como el panel: el periodo cambia las
  cifras y los graficos, "Comparar con el anno anterior" pone y quita las diferencias, los cuadros
  se guardan, se abren, se renombran, se marcan de inicio y se borran, los seis graficos de "Mas
  graficos" se encienden y se apagan, y al pasar el raton por una barra (o tocarla) sale su cifra
  exacta. Las cifras cuadran entre si: cada desglose suma lo de las cifras de arriba.

  Desde 1024 px va en un portatil (MockPortatilFrame); por debajo, en el movil (MockPhoneFrame),
  en una columna, como el panel en un movil. Todas las medidas van en --hm-u, 1 px del panel real.

  La pantalla es mas larga que la del portatil y la del movil, y la rueda no se captura: se
  recorre arrastrando con el raton, con el teclado o tocando lo que asoma por arriba o por abajo,
  que se desplaza hasta verse entero. Se mueve con scrollTop sobre overflow:hidden, como el auto
  check-in (composables/useRecorrido). La primera vez que se ve baja hasta la evolucion por mes y vuelve, salvo con
  movimiento reducido.
-->
<template>
  <component :is="movil ? MockPhoneFrame : MockPortatilFrame" v-bind="movil ? {} : { alto: ALTO_PANTALLA }">
    <div
      ref="raizEl"
      class="hm-est"
      :class="{ 'hm-est--movil': movil }"
      role="region"
      aria-label="Maqueta de la pantalla Estadísticas de Hospedy, con datos de ejemplo"
      @keydown.esc="cuadroABorrar = null"
    >
      <!-- el menu lateral del panel en el portatil y su barra de arriba en el movil -->
      <MockPanelMenu :movil="movil" marcado="Estadísticas" :mensajes="MENSAJES_PENDIENTES" />

      <div class="hm-est__main">
        <div
          ref="vistaEl"
          class="hm-est__vista"
          :class="{ 'is-drag': arrastrando }"
          tabindex="0"
          role="group"
          aria-roledescription="pantalla de ejemplo"
          aria-label="Pantalla Estadísticas. Se recorre arrastrando, con las flechas o tocando lo que asoma."
          v-on="manejadores"
        >
          <div ref="docEl" class="hm-est__doc">
            <!-- la banda de cabecera, con el periodo del cuadro de subtitulo -->
            <div class="hm-est__banda" data-bloque>
              <svg class="hm-est__banda-icono" viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.grafica" /></svg>
              <p class="hm-est__titulo">Estadísticas</p>
              <p class="hm-est__subtitulo">
                <strong>{{ fechaCorta(actual.desde) }} – {{ fechaCorta(actual.hasta) }}</strong>
                · {{ num(actual.nochesPeriodo) }} noches
                <template v-if="comparado"> · frente a <strong>{{ fechaCorta(comparado.desde) }} – {{ fechaCorta(comparado.hasta) }}</strong></template>
                · {{ ALOJAMIENTO_EJEMPLO }}
              </p>
            </div>

            <div class="hm-est__entry">
              <!-- los filtros -->
              <div class="hm-tarjeta hm-filtros" data-bloque>
                <div class="hm-filtros__fila">
                  <div class="hm-campo">
                    <label class="hm-campo__etiqueta" for="hm-est-periodo">Periodo</label>
                    <MockPanelSelect id="hm-est-periodo" class="hm-campo__desplegable" :opciones="OPCIONES_PERIODO" :model-value="preset" @update:model-value="cambiarPreset" />
                  </div>
                  <template v-if="preset === 'personalizado'">
                    <div class="hm-campo">
                      <label class="hm-campo__etiqueta" for="hm-est-desde">Desde</label>
                      <input id="hm-est-desde" class="hm-fecha" :value="fechaCampo(spec.desde)" readonly @click="avisar(AVISO_FECHA)">
                    </div>
                    <div class="hm-campo">
                      <label class="hm-campo__etiqueta" for="hm-est-hasta">Hasta</label>
                      <input id="hm-est-hasta" class="hm-fecha" :value="fechaCampo(spec.hasta)" readonly @click="avisar(AVISO_FECHA)">
                    </div>
                  </template>
                  <div class="hm-campo">
                    <label class="hm-campo__etiqueta" for="hm-est-alojamiento">Alojamiento</label>
                    <MockPanelSelect
                      id="hm-est-alojamiento"
                      class="hm-campo__desplegable"
                      :opciones="OPCIONES_ALOJAMIENTO"
                      :model-value="spec.alojamiento"
                      @update:model-value="(v) => cambiar({ alojamiento: String(v) })"
                    />
                  </div>
                  <label class="hm-casilla">
                    <input type="checkbox" :checked="spec.comparar" @change="alComparar">
                    <span class="hm-casilla__caja" aria-hidden="true"><svg viewBox="0 0 24 24"><path :d="ICONOS.check" /></svg></span>
                    Comparar con el año anterior
                  </label>
                </div>
                <details class="hm-filtros__mas">
                  <summary>Más opciones</summary>
                  <div class="hm-filtros__fila">
                    <div class="hm-campo">
                      <label class="hm-campo__etiqueta" for="hm-est-criterio">Criterio</label>
                      <MockPanelSelect id="hm-est-criterio" class="hm-campo__desplegable" :opciones="OPCIONES_CRITERIO" model-value="noches" @update:model-value="avisar(AVISO_CRITERIO)" />
                    </div>
                    <label class="hm-casilla">
                      <input type="checkbox" @change="alSinCheckin">
                      <span class="hm-casilla__caja" aria-hidden="true"><svg viewBox="0 0 24 24"><path :d="ICONOS.check" /></svg></span>
                      Contar también las reservas sin check-in
                    </label>
                  </div>
                </details>
              </div>

              <!-- Mis cuadros -->
              <div class="hm-cuadros" data-bloque>
                <div class="hm-cuadros__fila">
                  <span class="hm-rotulo">Mis cuadros</span>
                  <span v-for="c in cuadrosOrdenados" :key="c.id" class="hm-cuadro" :class="{ 'is-activo': cuadroActivo && cuadroActivo.id === c.id }">
                    <button type="button" class="hm-cuadro__nombre" :title="'Abrir ' + c.nombre" @click="abrirCuadro(c)">{{ c.nombre }}</button>
                    <button
                      type="button"
                      class="hm-cuadro__accion"
                      :class="{ 'is-inicio': c.inicio }"
                      :title="c.inicio ? 'Quitar inicio' : 'Inicio'"
                      :aria-label="(c.inicio ? 'Quitar inicio: ' : 'Inicio: ') + c.nombre"
                      @click="marcarInicio(c)"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.estrella" /></svg>
                    </button>
                    <button type="button" class="hm-cuadro__accion" title="Renombrar" :aria-label="'Renombrar ' + c.nombre" @click="empezarRenombrar(c)">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.lapiz" /></svg>
                    </button>
                    <button type="button" class="hm-cuadro__accion" title="Borrar" :aria-label="'Borrar ' + c.nombre" @click="cuadroABorrar = c">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.papelera" /></svg>
                    </button>
                  </span>
                  <span v-if="!cuadros.length" class="hm-cuadros__vacio">Todavía no has guardado ningún cuadro.</span>
                  <button
                    v-if="!guardando"
                    type="button"
                    class="hm-boton hm-boton--teal hm-cuadros__guardar"
                    :disabled="cuadros.length >= MAXIMO_CUADROS"
                    @click="empezarGuardar"
                  >
                    Guardar este cuadro
                  </button>
                </div>
                <form v-if="guardando" class="hm-cuadros__form" @submit.prevent="confirmarGuardar">
                  <label for="hm-est-nombre">Nombre del cuadro</label>
                  <input id="hm-est-nombre" ref="nombreEl" v-model="nombreNuevo" class="hm-entrada" maxlength="80" placeholder="Agosto frente al año pasado" required>
                  <button type="submit" class="hm-boton hm-boton--teal">Guardar</button>
                  <button type="button" class="hm-boton hm-boton--gris" @click="guardando = false">Cancelar</button>
                </form>
                <form v-if="renombrando" class="hm-cuadros__form" @submit.prevent="confirmarRenombrar">
                  <label for="hm-est-renombrar">Nuevo nombre</label>
                  <input id="hm-est-renombrar" ref="renombrarEl" v-model="nombreRenombrar" class="hm-entrada" maxlength="80" required>
                  <button type="submit" class="hm-boton hm-boton--teal">Guardar</button>
                  <button type="button" class="hm-boton hm-boton--gris" @click="renombrando = null">Cancelar</button>
                </form>
                <p v-if="cuadrosMensaje" class="hm-cuadros__aviso is-ok">{{ cuadrosMensaje }}</p>
                <p v-if="cuadros.length >= MAXIMO_CUADROS" class="hm-cuadros__aviso">
                  Ya tienes {{ MAXIMO_CUADROS }} cuadros guardados: borra alguno para guardar otro.
                </p>
              </div>

              <div class="hm-est__contenido" :class="{ 'is-actualizando': actualizando }">
                <!-- las cuatro cifras -->
                <div class="hm-kpis">
                  <div v-for="k in kpis" :key="k.titulo" class="hm-kpi" :title="k.ayuda" data-bloque>
                    <div class="hm-kpi__titulo">{{ k.titulo }}</div>
                    <div class="hm-kpi__linea">
                      <span class="hm-kpi__valor">{{ k.valor }}</span>
                      <span v-if="k.diferencia" class="hm-chip" :class="'hm-chip--' + k.diferencia.signo">{{ k.diferencia.texto }}</span>
                    </div>
                    <div v-if="k.antes !== null" class="hm-kpi__antes">antes {{ k.antes }}<span v-if="k.nota"> · {{ k.nota }}</span></div>
                    <div v-else-if="k.nota" class="hm-kpi__antes">{{ k.nota }}</div>
                    <svg v-if="k.puntos" class="hm-kpi__tendencia" viewBox="0 0 120 36" preserveAspectRatio="none" role="img" :aria-label="k.titulo + ' por tramo, este periodo frente al comparado'">
                      <polyline v-if="k.puntosAntes" :points="k.puntosAntes" fill="none" :stroke="C.muted" stroke-width="1.5" stroke-dasharray="3 2" vector-effect="non-scaling-stroke" />
                      <polyline :points="k.puntos" fill="none" :stroke="C.primary" stroke-width="2" vector-effect="non-scaling-stroke" />
                    </svg>
                    <div v-else-if="k.pie" class="hm-kpi__pie">{{ k.pie }}</div>
                  </div>
                </div>

                <!-- la franja -->
                <div class="hm-tarjeta hm-franja" data-bloque>
                  <div v-for="k in franja" :key="k.titulo" class="hm-franja__dato">
                    <span class="hm-franja__titulo">{{ k.titulo }}</span>
                    <span class="hm-franja__valor">{{ k.valor }}</span>
                    <span v-if="k.diferencia" class="hm-franja__dif" :class="'hm-chip--' + k.diferencia.signo">{{ k.diferencia.texto }}</span>
                    <span v-if="k.antes !== null" class="hm-franja__antes">antes {{ k.antes }}</span>
                  </div>
                  <div class="hm-franja__aparte">{{ textoAparte }}</div>
                </div>

                <!-- la evolucion por mes -->
                <div ref="evolucionEl" class="hm-tarjeta hm-tarjeta--cuerpo" data-bloque>
                  <div class="hm-grafico-cab">
                    <p class="hm-grafico-titulo">Evolución por mes: ingresos y ocupación</p>
                    <div class="hm-leyenda">
                      <span class="hm-leyenda__item"><span class="hm-leyenda__barra" :style="{ background: C.primary }" />Ingresos, este periodo</span>
                      <span v-if="comparado" class="hm-leyenda__item"><span class="hm-leyenda__barra" :style="{ background: C.muted }" />Ingresos, año anterior</span>
                      <span class="hm-leyenda__item"><span class="hm-leyenda__linea" :style="{ borderTopColor: C.accent }" />Ocupación, este periodo</span>
                      <span v-if="comparado" class="hm-leyenda__item"><span class="hm-leyenda__linea is-discontinua" :style="{ borderTopColor: C.muted }" />Ocupación, año anterior</span>
                    </div>
                  </div>
                  <MockGraficoBarras :modelo="graficoEvolucion" />
                </div>

                <!-- los tres desgloses -->
                <div class="hm-desgloses">
                  <div class="hm-tarjeta hm-tarjeta--cuerpo" data-bloque>
                    <p class="hm-grafico-titulo">Noches vendidas por día de la semana</p>
                    <MockGraficoBarras :modelo="graficoDias" />
                  </div>
                  <div class="hm-tarjeta hm-tarjeta--cuerpo" data-bloque>
                    <p class="hm-grafico-titulo">Canal de venta</p>
                    <p class="hm-grafico-sub">Estancias e ingresos por canal.</p>
                    <div class="hm-canal__barra" role="img" :aria-label="'Reparto: ' + canales.pctAg + ' % agencias, ' + canales.pctDi + ' % venta directa'">
                      <span class="hm-canal__agencias" :style="{ width: canales.pctAg + '%' }" />
                    </div>
                    <div class="hm-canal__filas">
                      <div class="hm-canal__fila">
                        <span class="hm-canal__nombre"><span class="hm-canal__punto" :style="{ background: C.primary }" />Agencias (channel)</span>
                        <span class="hm-canal__cifra"><strong>{{ num(canales.ag.estancias) }}</strong> estancias · {{ eur(canales.ag.importe) }}</span>
                      </div>
                      <div class="hm-canal__fila">
                        <span class="hm-canal__nombre"><span class="hm-canal__punto" :style="{ background: C.accent }" />Venta directa</span>
                        <span class="hm-canal__cifra"><strong>{{ num(canales.di.estancias) }}</strong> estancias · {{ eur(canales.di.importe) }}</span>
                      </div>
                      <div v-if="actual.porAgencia.length" class="hm-canal__agencias-lista">
                        <div v-for="a in actual.porAgencia" :key="a.nombre" class="hm-canal__agencia">
                          <span>{{ a.nombre }}</span>
                          <span class="hm-canal__agencia-cifra">{{ plural(a.estancias, 'estancia', 'estancias') }} · {{ eur(a.importe) }}</span>
                        </div>
                      </div>
                      <p v-if="canales.antes" class="hm-grafico-sub hm-sin-margen">
                        Año anterior: {{ num(canales.antes.ag.estancias) }} por agencias ({{ eur(canales.antes.ag.importe) }}),
                        {{ num(canales.antes.di.estancias) }} directas ({{ eur(canales.antes.di.importe) }}).
                      </p>
                    </div>
                  </div>
                  <div class="hm-tarjeta hm-tarjeta--cuerpo" data-bloque>
                    <p class="hm-grafico-titulo">Ocupación por tipo de habitación</p>
                    <p class="hm-grafico-sub">Por alojamiento: los tipos no se suman entre casas.</p>
                    <div class="hm-tipos__nombre">{{ ALOJAMIENTO_EJEMPLO }}</div>
                    <div class="hm-tipos">
                      <template v-for="f in tipos" :key="f.tipo">
                        <span class="hm-tipos__tipo" :title="f.etiqueta">{{ f.etiqueta }}</span>
                        <span class="hm-tipos__pista"><span class="hm-tipos__barra" :style="{ width: f.pct + '%', background: C.primary }" /></span>
                        <span class="hm-tipos__valor">{{ f.texto }}</span>
                        <template v-if="f.antes !== null">
                          <span class="hm-tipos__antes">año anterior</span>
                          <span class="hm-tipos__pista is-fina"><span class="hm-tipos__barra" :style="{ width: f.pctAntes + '%', background: C.muted }" /></span>
                          <span class="hm-tipos__antes is-derecha">{{ f.textoAntes }}</span>
                        </template>
                      </template>
                    </div>
                  </div>
                </div>

                <!-- Mas graficos: se encienden a demanda -->
                <div class="hm-mas" data-bloque>
                  <span class="hm-rotulo">Más gráficos</span>
                  <button
                    v-for="g in GRAFICOS_EXTRA"
                    :key="g.valor"
                    type="button"
                    class="hm-chip-grafico"
                    :class="{ 'is-activo': encendido(g.valor) }"
                    :aria-pressed="encendido(g.valor) ? 'true' : 'false'"
                    @click="alternarGrafico(g.valor)"
                  >
                    {{ g.texto }}
                  </button>
                  <span class="hm-mas__nota">Siguen el periodo y los filtros del cuadro, salvo el ritmo de venta, que mira hacia delante.</span>
                </div>

                <div v-if="pedido('pickup')" class="hm-tarjeta hm-tarjeta--cuerpo" data-bloque data-grafico="pickup">
                  <div class="hm-grafico-cab">
                    <p class="hm-grafico-titulo">Ritmo de venta</p>
                    <div class="hm-ritmo__controles">
                      <MockPanelSelect
                        id="hm-est-ritmo"
                        class="hm-ritmo__meses"
                        :opciones="OPCIONES_RITMO"
                        :model-value="spec.ritmoMeses"
                        @update:model-value="(v) => cambiar({ ritmoMeses: Number(v) })"
                      />
                      <span role="group" aria-label="Unidad del ritmo de venta">
                        <button type="button" class="hm-chip-grafico" :class="{ 'is-activo': !ritmoEnPct }" :aria-pressed="!ritmoEnPct ? 'true' : 'false'" @click="ritmoEnPct = false">Noches</button>
                        <button type="button" class="hm-chip-grafico" :class="{ 'is-activo': ritmoEnPct }" :aria-pressed="ritmoEnPct ? 'true' : 'false'" @click="ritmoEnPct = true">% de cómo acabó el año pasado</button>
                      </span>
                    </div>
                  </div>
                  <p class="hm-grafico-sub">{{ subtituloRitmo }}</p>
                  <MockGraficoBarras :modelo="graficoRitmo" />
                  <p class="hm-grafico-sub hm-sin-margen hm-arriba">{{ lecturaRitmo }}</p>
                </div>

                <div v-if="pedido('antelacion') || pedido('estancia') || pedido('cancelaciones')" class="hm-desgloses">
                  <div v-if="pedido('antelacion')" class="hm-tarjeta hm-tarjeta--cuerpo" data-bloque data-grafico="antelacion">
                    <p class="hm-grafico-titulo">Antelación de la reserva</p>
                    <p class="hm-grafico-sub">Días entre hacer la reserva y la llegada, en estancias contadas.</p>
                    <MockBarrasHorizontales :filas="filasAntelacion" :color="C.primary" :color-antes="C.muted" />
                    <p class="hm-grafico-sub hm-sin-margen hm-arriba">{{ textoAntelacion }}</p>
                  </div>
                  <div v-if="pedido('estancia')" class="hm-tarjeta hm-tarjeta--cuerpo" data-bloque data-grafico="estancia">
                    <p class="hm-grafico-titulo">Duración de la estancia</p>
                    <p class="hm-grafico-sub">Noches de cada estancia contada, entera.</p>
                    <MockBarrasHorizontales :filas="filasEstancia" :color="C.primary" :color-antes="C.muted" />
                    <p class="hm-grafico-sub hm-sin-margen hm-arriba">{{ textoEstancia }}</p>
                  </div>
                  <div v-if="pedido('cancelaciones')" class="hm-tarjeta hm-tarjeta--cuerpo" data-bloque data-grafico="cancelaciones">
                    <p class="hm-grafico-titulo">Cancelaciones</p>
                    <p class="hm-grafico-sub">{{ cancelaciones.resumen }}</p>
                    <MockGraficoBarras v-if="graficoCancelaciones" :modelo="graficoCancelaciones" />
                    <p v-else class="hm-sin-datos">Sin cancelaciones en el periodo.</p>
                    <p v-for="(linea, i) in cancelaciones.lineas" :key="i" class="hm-grafico-sub hm-sin-margen hm-arriba-poco">{{ linea }}</p>
                  </div>
                </div>

                <div v-if="pedido('procedencia')" class="hm-tarjeta hm-tarjeta--cuerpo" data-bloque data-grafico="procedencia">
                  <p class="hm-grafico-titulo">Procedencia</p>
                  <p class="hm-grafico-sub">{{ textoProcedencia }}</p>
                  <div v-if="actual.procedencia.paises.length && actual.procedencia.huespedes" class="hm-procedencia">
                    <div>
                      <div class="hm-tipos__nombre">Países de residencia</div>
                      <MockBarrasHorizontales :filas="filasPaises" :color="C.primary" />
                    </div>
                    <div v-if="filasProvincias.length">
                      <div class="hm-tipos__nombre">Provincias (España)</div>
                      <MockBarrasHorizontales :filas="filasProvincias" :color="C.accent" />
                    </div>
                  </div>
                  <p v-else class="hm-sin-datos">Sin huéspedes registrados en el periodo.</p>
                </div>

                <div v-if="pedido('mapa_calor')" class="hm-tarjeta hm-tarjeta--cuerpo" data-bloque data-grafico="mapa_calor">
                  <p class="hm-grafico-titulo">Mapa de calor</p>
                  <p class="hm-grafico-sub">
                    Ocupación de cada día del periodo, con las mismas estancias que las tarjetas (en el pasado, las que hicieron
                    el check-in): cuanto más oscuro, más lleno.
                  </p>
                  <MockMapaCalor :dias="actual.diario" :ancho="anchoGrande" :estrecho="movil" />
                </div>

                <p class="hm-como" data-bloque>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.info" /></svg>
                  <strong>Cómo se calcula:</strong> {{ COMO_SE_CALCULA }}
                  <button type="button" class="hm-como__enlace" @click="avisar(AVISO_AYUDA)">Más detalle en la Ayuda</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <span class="hm-est__indicador" :class="{ 'is-on': indicador.on }" :style="{ top: indicador.top + 'px', height: indicador.alto + 'px' }" aria-hidden="true" />
      </div>

      <!-- el boton de Hugo, que el panel lleva en todas las pantallas -->
      <span class="hm-est__hugo" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path :d="ICONOS.chat" /></svg>
      </span>

      <div v-if="toast" class="hm-est__toast" role="status">{{ toast }}</div>

      <!-- "Borrar cuadro", la ventana del panel -->
      <div v-if="cuadroABorrar" class="hm-modal" @click.self="cuadroABorrar = null">
        <div class="hm-modal__dialogo" role="dialog" aria-modal="true" aria-labelledby="hm-est-borrar-titulo">
          <div class="hm-modal__cab">
            <span id="hm-est-borrar-titulo" class="hm-modal__titulo">Borrar cuadro</span>
            <button type="button" class="hm-modal__cerrar" aria-label="Cerrar" @click="cuadroABorrar = null">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.cerrar" /></svg>
            </button>
          </div>
          <div class="hm-modal__cuerpo">
            <p>Vas a borrar el cuadro «{{ cuadroABorrar.nombre }}». Esta acción no se puede deshacer.</p>
          </div>
          <div class="hm-modal__pie">
            <button ref="cancelarBorrarEl" type="button" class="hm-boton-modal" @click="cuadroABorrar = null">Cancelar</button>
            <button type="button" class="hm-boton-modal hm-boton-modal--rojo" @click="confirmarBorrar">Borrar</button>
          </div>
        </div>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import MockPhoneFrame from '~/components/MockPhoneFrame.vue'
import MockPortatilFrame from '~/components/MockPortatilFrame.vue'
import MockPanelMenu from '~/components/MockPanelMenu.vue'
import MockPanelSelect from '~/components/MockPanelSelect.vue'
import MockGraficoBarras from '~/components/MockGraficoBarras.vue'
import MockBarrasHorizontales from '~/components/MockBarrasHorizontales.vue'
import MockMapaCalor from '~/components/MockMapaCalor.vue'
import { ICONOS_PANEL as ICONOS } from '~/utils/iconosPanel'
import { ALOJAMIENTO_EJEMPLO } from '~/utils/mensajesEjemplo'
import {
  HOY_ESTADISTICAS,
  estadisticasDelPeriodo,
  ritmoDeVenta,
  unAnioAntes,
  type FilaReparto,
  type PeriodoEstadisticas,
} from '~/utils/estadisticasEjemplo'

/* los colores de los graficos del panel */
const C = { primary: '#0f766e', muted: '#9ba0aa', accent: '#f59e0b', danger: '#bc475e' }

/* el portatil desde 1024 px; por debajo, el movil. Va dentro de MontarAlVerse, que solo la monta
   en el navegador: aqui ya se sabe el ancho */
const ANCHO_PORTATIL = '(min-width: 1024px)'
/* la pantalla del portatil, la misma que la de Mensajes */
const ALTO_PANTALLA = 832
/* las conversaciones pendientes del Hotel Alameda, las de la maqueta de Mensajes */
const MENSAJES_PENDIENTES = 3
const MAXIMO_CUADROS = 20

const AVISO_FECHA = 'En el panel, la fecha se elige en un calendario'
const AVISO_CRITERIO = 'En la maqueta, las cifras van siempre por noches del periodo'
const AVISO_SIN_CHECKIN = 'En la maqueta, las reservas sin check-in se quedan siempre aparte'
const AVISO_AYUDA = 'En el panel, la Ayuda cuenta cómo sale cada cifra'
const COMO_SE_CALCULA = 'noches del periodo · en el pasado solo cuentan las estancias con check-in o huéspedes registrados'
  + ' · canceladas aparte · los cierres de habitación no cuentan · la ocupación es sobre las habitaciones de hoy,'
  + ' también en el pasado.'

const OPCIONES_PERIODO = [
  { valor: 'este_mes', texto: 'Este mes' },
  { valor: 'mes_pasado', texto: 'Mes pasado' },
  { valor: 'ultimos_12', texto: 'Últimos 12 meses' },
  { valor: 'este_anio', texto: 'Este año' },
  { valor: 'anio_pasado', texto: 'Año pasado' },
  { valor: 'proximos_12', texto: 'Próximos 12 meses' },
  { valor: 'personalizado', texto: 'Personalizado' },
]
const OPCIONES_ALOJAMIENTO = [
  { valor: '', texto: 'Todos' },
  { valor: 'alameda', texto: ALOJAMIENTO_EJEMPLO },
]
const OPCIONES_CRITERIO = [
  { valor: 'noches', texto: 'Noches del periodo' },
  { valor: 'entrada', texto: 'Reservas que llegan' },
  { valor: 'creacion', texto: 'Reservas hechas' },
]
const OPCIONES_RITMO = [
  { valor: 6, texto: 'Próximos 6 meses' },
  { valor: 12, texto: 'Próximos 12 meses' },
  { valor: 24, texto: 'Próximos 24 meses' },
]
const GRAFICOS_EXTRA = [
  { valor: 'pickup', texto: 'Ritmo de venta' },
  { valor: 'antelacion', texto: 'Antelación de la reserva' },
  { valor: 'estancia', texto: 'Duración de la estancia' },
  { valor: 'cancelaciones', texto: 'Cancelaciones' },
  { valor: 'procedencia', texto: 'Procedencia' },
  { valor: 'mapa_calor', texto: 'Mapa de calor' },
]
const DIAS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
const MESES_CORTOS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
const ETIQUETAS_ANTELACION: Record<string, string> = { '0-7': '0-7 días', '8-30': '8-30 días', '31-90': '31-90 días', '91+': 'Más de 90 días' }
const ETIQUETAS_ESTANCIA: Record<string, string> = { 1: '1 noche', 2: '2 noches', '3-6': '3-6 noches', '7+': '7 noches o más' }

const movil = ref(typeof window !== 'undefined' && !window.matchMedia(ANCHO_PORTATIL).matches)
/* el ancho de la pagina en px del panel (la del portatil, sin el menu lateral) y el de los graficos, al
   de su tarjeta: los de una fila entera y los de tres por fila; en el movil, todos enteros */
const anchoVista = computed(() => (movil.value ? 375 : 990))
const anchoGrande = computed(() => (movil.value ? 305 : 920))
const anchoTercio = computed(() => (movil.value ? 305 : 260))

// ---- formato, el del panel (es-ES; millares tambien con cuatro cifras) ----
const fmtEntero = new Intl.NumberFormat('es-ES', { useGrouping: 'always' } as Intl.NumberFormatOptions)
const fmtUno = new Intl.NumberFormat('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: 'always' } as Intl.NumberFormatOptions)
const fmtEur = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: 'always' } as Intl.NumberFormatOptions)
const vacio = (v: number | null | undefined): v is null | undefined => v === null || v === undefined
const num = (v: number | null) => (vacio(v) ? '—' : fmtEntero.format(v))
const dec1 = (v: number | null) => (vacio(v) ? '—' : fmtUno.format(v))
const pct = (v: number | null) => (vacio(v) ? '—' : dec1(v) + ' %')
const eur = (v: number | null) => (vacio(v) ? '—' : fmtEur.format(v))
const plural = (n: number, uno: string, varios: string) => num(n) + ' ' + (n === 1 ? uno : varios)
const flecha = (v: number) => (v > 0 ? '▲ ' : '▼ ')
const capitalizar = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
function fechaCorta(iso: string) {
  const [a, m, d] = iso.split('-').map(Number)
  return d + ' ' + MESES_CORTOS[m - 1] + ' ' + a
}
const fechaCampo = (iso: string) => iso.split('-').reverse().join('/')
function etiquetaTramo(clave: string) {
  const [a, m] = clave.split('-').map(Number)
  return MESES_CORTOS[m - 1] + ' ' + String(a).slice(2)
}

interface Diferencia { texto: string, signo: 'mas' | 'menos' | 'igual' }
function difPct(a: number | null, b: number | null): Diferencia | null {
  if (vacio(a) || vacio(b)) return null
  const d = a - b
  if (Math.abs(d) < 1e-9) return { texto: 'igual que antes', signo: 'igual' }
  const texto = b ? dec1(Math.abs((100 * d) / b)) + ' %' : dec1(Math.abs(d))
  return { texto: flecha(d) + texto, signo: d > 0 ? 'mas' : 'menos' }
}
/* la diferencia de ocupacion, sobre las cifras exactas y no sobre las ya redondeadas, como el panel */
function difPuntos(a: PeriodoEstadisticas, b: PeriodoEstadisticas): Diferencia {
  const exacta = (x: PeriodoEstadisticas) => (100 * x.noches) / (x.habitaciones * x.nochesPeriodo || 1)
  const p = Math.round((exacta(a) - exacta(b)) * 10) / 10
  if (!p) return { texto: 'igual que antes', signo: 'igual' }
  return { texto: flecha(p) + dec1(Math.abs(p)) + ' puntos', signo: p > 0 ? 'mas' : 'menos' }
}

// ---- el periodo ----
const [HOY_A, HOY_M] = HOY_ESTADISTICAS.split('-').map(Number)
const iso = (d: Date) => d.toISOString().slice(0, 10)
const primerDia = (a: number, m: number) => iso(new Date(Date.UTC(a, m, 1)))
const ultimoDia = (a: number, m: number) => iso(new Date(Date.UTC(a, m + 1, 0)))
function rango(preset: string): [string, string] {
  const m = HOY_M - 1
  switch (preset) {
    case 'este_mes': return [primerDia(HOY_A, m), ultimoDia(HOY_A, m)]
    case 'mes_pasado': return [primerDia(HOY_A, m - 1), ultimoDia(HOY_A, m - 1)]
    case 'este_anio': return [HOY_A + '-01-01', HOY_A + '-12-31']
    case 'anio_pasado': return [HOY_A - 1 + '-01-01', HOY_A - 1 + '-12-31']
    case 'proximos_12': return [primerDia(HOY_A, m), ultimoDia(HOY_A, m + 11)]
    default: return [primerDia(HOY_A, m - 11), ultimoDia(HOY_A, m)]
  }
}
function presetDe(desde: string, hasta: string) {
  const p = OPCIONES_PERIODO.find(o => o.valor !== 'personalizado' && rango(o.valor).join() === desde + ',' + hasta)
  return p ? p.valor : 'personalizado'
}

interface Spec { desde: string, hasta: string, comparar: boolean, alojamiento: string, graficos: string[], ritmoMeses: number }
function inicial(): Spec {
  const [desde, hasta] = rango('ultimos_12')
  return { desde, hasta, comparar: true, alojamiento: '', graficos: [], ritmoMeses: 12 }
}
const copia = (s: Spec): Spec => ({ ...s, graficos: [...s.graficos] })

/* lo que dicen los filtros (cambia al momento) y lo que ensenna la pantalla (cambia al "cargar") */
const spec = reactive<Spec>(inicial())
const datos = ref<Spec>(copia(spec))
const forzarPersonalizado = ref(false)
const actualizando = ref(false)
const ritmoEnPct = ref(false)

const preset = computed(() => (forzarPersonalizado.value ? 'personalizado' : presetDe(spec.desde, spec.hasta)))
const actual = computed(() => estadisticasDelPeriodo(datos.value.desde, datos.value.hasta))
const comparado = computed(() => (datos.value.comparar ? estadisticasDelPeriodo(unAnioAntes(datos.value.desde), unAnioAntes(datos.value.hasta)) : null))
const ritmo = computed(() => ritmoDeVenta(datos.value.ritmoMeses))

const temporizadores = new Set<ReturnType<typeof setTimeout>>()
function luego(ms: number, fn: () => void) {
  const t = setTimeout(() => {
    temporizadores.delete(t)
    fn()
  }, ms)
  temporizadores.add(t)
  return t
}

/* como en el panel, cada cambio de filtro "recarga": el contenido se atenua un momento y llegan
   las cifras nuevas */
let tCarga: ReturnType<typeof setTimeout> | undefined
let alCargar: (() => void) | null = null
function cargar(despues?: () => void) {
  actualizando.value = true
  if (despues) alCargar = despues
  if (tCarga) {
    clearTimeout(tCarga)
    temporizadores.delete(tCarga)
  }
  tCarga = luego(450, () => {
    datos.value = copia(spec)
    actualizando.value = false
    const fin = alCargar
    alCargar = null
    if (fin) nextTick(fin)
  })
}
function cambiar(parcial: Partial<Spec>, despues?: () => void) {
  Object.assign(spec, parcial)
  cargar(despues)
}
function cambiarPreset(valor: string | number) {
  if (valor === 'personalizado') {
    forzarPersonalizado.value = true
    return
  }
  forzarPersonalizado.value = false
  const [desde, hasta] = rango(String(valor))
  cambiar({ desde, hasta })
}
function alComparar(e: Event) {
  cambiar({ comparar: (e.target as HTMLInputElement).checked })
}
function alSinCheckin(e: Event) {
  (e.target as HTMLInputElement).checked = false
  avisar(AVISO_SIN_CHECKIN)
}

// ---- las cifras ----
function trazar(lista: number[], maximo: number) {
  if (lista.length < 2) return ''
  const paso = 112 / (lista.length - 1)
  return lista.map((v, i) => (4 + i * paso).toFixed(1) + ',' + (32 - (v / maximo) * 28).toFixed(1)).join(' ')
}
function tendencia(serie: number[] | null, antes: number[]) {
  if (!serie) return { puntos: '', puntosAntes: '' }
  const maximo = Math.max(0.0001, ...serie, ...antes)
  return { puntos: trazar(serie, maximo), puntosAntes: trazar(antes, maximo) }
}

const kpis = computed(() => {
  const a = actual.value
  const c = comparado.value
  const hayTramos = a.tramos.length > 1
  const ocupacion = tendencia(hayTramos ? a.tramos.map(t => t.ocupacion) : null, c ? c.tramos.map(t => t.ocupacion) : [])
  const ingresos = tendencia(hayTramos ? a.tramos.map(t => t.importe) : null, c ? c.tramos.map(t => t.importe) : [])
  return [
    {
      titulo: 'Ocupación',
      ayuda: undefined,
      valor: pct(a.ocupacion),
      antes: c ? pct(c.ocupacion) : null,
      diferencia: c ? difPuntos(a, c) : null,
      nota: plural(a.habitaciones, 'habitación', 'habitaciones') + ' × ' + plural(a.nochesPeriodo, 'noche', 'noches'),
      ...ocupacion,
      pie: '',
    },
    {
      titulo: 'Ingresos',
      ayuda: undefined,
      valor: eur(a.importe),
      antes: c ? eur(c.importe) : null,
      diferencia: c ? difPct(a.importe, c.importe) : null,
      nota: 'alojamiento ' + eur(a.alojamiento) + ' + extras ' + eur(a.extras),
      ...ingresos,
      pie: '',
    },
    {
      titulo: 'Precio medio por noche',
      ayuda: 'ADR: ingresos de alojamiento entre noches vendidas',
      valor: eur(a.adr),
      antes: c ? eur(c.adr) : null,
      diferencia: c ? difPct(a.adr, c.adr) : null,
      nota: '',
      puntos: '',
      puntosAntes: '',
      pie: 'Ingresos de alojamiento entre noches vendidas (ADR).',
    },
    {
      titulo: 'Ingreso por habitación disponible',
      ayuda: 'RevPAR: ingresos de alojamiento entre noches disponibles',
      valor: eur(a.revpar),
      antes: c ? eur(c.revpar) : null,
      diferencia: c ? difPct(a.revpar, c.revpar) : null,
      nota: '',
      puntos: '',
      puntosAntes: '',
      pie: 'Ingresos de alojamiento entre noches disponibles (RevPAR).',
    },
  ]
})

const franja = computed(() => {
  const a = actual.value
  const c = comparado.value
  const noches = (v: number | null) => (vacio(v) ? '—' : dec1(v) + ' noches')
  return [
    { titulo: 'Estancias', valor: num(a.estancias), antes: c ? num(c.estancias) : null, diferencia: c ? difPct(a.estancias, c.estancias) : null },
    { titulo: 'Noches vendidas', valor: num(a.noches), antes: c ? num(c.noches) : null, diferencia: c ? difPct(a.noches, c.noches) : null },
    { titulo: 'Estancia media', valor: noches(a.estanciaMedia), antes: c ? noches(c.estanciaMedia) : null, diferencia: c ? difPct(a.estanciaMedia, c.estanciaMedia) : null },
    { titulo: 'Huéspedes registrados', valor: num(a.huespedes), antes: c ? num(c.huespedes) : null, diferencia: c ? difPct(a.huespedes, c.huespedes) : null },
  ]
})

const textoAparte = computed(() => {
  const a = actual.value
  const c = comparado.value
  const antes = (v: number) => (c ? ' (antes ' + num(v) + ')' : '')
  return 'Aparte: ' + plural(a.canceladas, 'cancelada', 'canceladas') + (c ? antes(c.canceladas) : '')
    + ' · ' + num(a.sinCheckin) + ' sin check-in ' + (a.sinCheckin === 1 ? 'no contada' : 'no contadas') + (c ? antes(c.sinCheckin) : '')
})

// ---- los graficos ----
const graficoEvolucion = computed(() => {
  const a = actual.value
  const c = comparado.value
  const categorias = a.tramos.map(t => etiquetaTramo(t.clave))
  const series = [{ nombre: 'Ingresos, este periodo', tipo: 'barra' as const, valores: a.tramos.map(t => t.importe), color: C.primary }]
  if (c) series.push({ nombre: 'Ingresos, año anterior', tipo: 'barra', valores: c.tramos.map(t => t.importe), color: C.muted })
  const lineas = [{ nombre: 'Ocupación, este periodo', tipo: 'linea' as const, eje: 1 as const, valores: a.tramos.map(t => t.ocupacion), color: C.accent, grosor: 3, punto: 7, suave: true, discontinua: false }]
  if (c) lineas.push({ nombre: 'Ocupación, año anterior', tipo: 'linea', eje: 1, valores: c.tramos.map(t => t.ocupacion), color: C.muted, grosor: 2, punto: 5, suave: true, discontinua: true })
  return {
    descripcion: 'Ingresos por mes en barras y ocupación en líneas, este periodo frente al año anterior',
    ancho: anchoGrande.value,
    alto: 340,
    margen: { izq: 64, der: 52, arr: 16, aba: 36 },
    categorias,
    series: [...series, ...lineas],
    ejes: [{ formato: (v: number) => fmtEntero.format(v) + ' €' }, { formato: (v: number) => v + ' %' }],
    anchoBarra: 28,
    tooltip: (i: number) => {
      const antes = c && c.tramos[i] ? ' (' + etiquetaTramo(c.tramos[i].clave) + ')' : ''
      const lineasTip = [{ color: C.primary, texto: 'Ingresos, este periodo: ', fuerte: eur(a.tramos[i].importe) }]
      if (c && c.tramos[i]) lineasTip.push({ color: C.muted, texto: 'Ingresos, año anterior' + antes + ': ', fuerte: eur(c.tramos[i].importe) })
      lineasTip.push({ color: C.accent, texto: 'Ocupación, este periodo: ', fuerte: pct(a.tramos[i].ocupacion) })
      if (c && c.tramos[i]) lineasTip.push({ color: C.muted, texto: 'Ocupación, año anterior' + antes + ': ', fuerte: pct(c.tramos[i].ocupacion) })
      return { titulo: categorias[i], lineas: lineasTip }
    },
  }
})

const graficoDias = computed(() => {
  const a = actual.value
  const c = comparado.value
  const series = [{ nombre: 'Este periodo', tipo: 'barra' as const, valores: a.dias, color: C.primary }]
  if (c) series.push({ nombre: 'Año anterior', tipo: 'barra', valores: c.dias, color: C.muted })
  return {
    descripcion: 'Noches vendidas por día de la semana, este periodo frente al año anterior',
    ancho: anchoTercio.value,
    alto: 260,
    margen: { izq: 40, der: 8, arr: 12, aba: 44 },
    categorias: DIAS,
    series,
    ejes: [{ formato: (v: number) => fmtEntero.format(v), entero: true }],
    anchoBarra: 24,
    leyenda: true,
    tooltip: (i: number) => ({
      titulo: DIAS[i],
      lineas: series.map(s => ({ color: s.color, texto: s.nombre, fuerte: num(s.valores[i]) + ' noches', derecha: true })),
    }),
  }
})

const canales = computed(() => {
  const a = actual.value
  const c = comparado.value
  const estancias = a.agencias.estancias + a.directa.estancias
  const pctAg = estancias ? Math.round((100 * a.agencias.estancias) / estancias) : 0
  return { ag: a.agencias, di: a.directa, pctAg, pctDi: 100 - pctAg, antes: c ? { ag: c.agencias, di: c.directa } : null }
})

const tipos = computed(() => {
  const a = actual.value
  const c = comparado.value
  const maximo = Math.max(1, ...a.tipos.map(t => t.ocupacion), ...(c ? c.tipos.map(t => t.ocupacion) : []))
  return a.tipos.map((t, i) => {
    const antes = c ? c.tipos[i].ocupacion : null
    return {
      tipo: t.tipo,
      etiqueta: t.tipo + ' (' + num(t.habitaciones) + ')',
      pct: Math.round((100 * t.ocupacion) / maximo),
      texto: pct(t.ocupacion),
      antes,
      pctAntes: antes === null ? 0 : Math.round((100 * antes) / maximo),
      textoAntes: antes === null ? '' : pct(antes),
    }
  })
})

// ---- Mas graficos ----
const encendido = (id: string) => spec.graficos.includes(id)
const pedido = (id: string) => datos.value.graficos.includes(id)
function alternarGrafico(id: string) {
  const enciende = !encendido(id)
  const graficos = spec.graficos.filter(x => x !== id)
  if (enciende) graficos.push(id)
  /* como tras cada paso del auto check-in, la maqueta baja sola hasta el grafico nuevo */
  cambiar({ graficos }, enciende ? () => mostrarEntero(docEl.value?.querySelector('[data-grafico="' + id + '"]') as HTMLElement | null) : undefined)
}

const graficoRitmo = computed(() => {
  const r = ritmo.value
  const enPct = ritmoEnPct.value
  const finales = r.finalComparado
  const valor = (n: number, i: number) => (!enPct ? n : finales[i].noches ? Math.round((1000 * n) / finales[i].noches) / 10 : null)
  const categorias = r.tramos.map(t => etiquetaTramo(t.clave))
  return {
    descripcion: 'Noches ya vendidas para cada uno de los próximos meses, frente a las que llevabas el año pasado a estas alturas y a cómo acabó',
    ancho: anchoGrande.value,
    alto: 320,
    margen: { izq: 48, der: 16, arr: 16, aba: movil.value ? 88 : 56 },
    categorias,
    series: [
      { nombre: 'Ya vendido para ese mes', tipo: 'barra' as const, valores: r.tramos.map((t, i) => valor(t.noches, i)), color: C.primary },
      { nombre: 'El año pasado a estas alturas', tipo: 'barra' as const, valores: r.tramosComparado.map((t, i) => valor(t.noches, i)), color: C.muted },
      { nombre: 'El año pasado al final', tipo: 'linea' as const, valores: finales.map(f => (enPct ? (f.noches ? 100 : null) : f.noches)), color: C.accent, discontinua: true, punto: 7 },
    ],
    ejes: [{ formato: enPct ? (v: number) => v + ' %' : (v: number) => fmtEntero.format(v), entero: !enPct }],
    anchoBarra: 28,
    leyenda: true,
    tooltip: (i: number) => {
      const a = r.tramos[i]
      const b = r.tramosComparado[i]
      const f = finales[i]
      return {
        titulo: capitalizar(categorias[i]),
        tituloFuerte: true,
        lineas: [
          { texto: 'Ya vendido: ', fuerte: plural(a.noches, 'noche', 'noches'), sufijo: ' (' + pct(a.ocupacion) + ' de ocupación) · ' + plural(a.estancias, 'reserva', 'reservas') },
          { texto: 'El año pasado a estas alturas (' + etiquetaTramo(b.clave) + '): ', fuerte: plural(b.noches, 'noche', 'noches') },
          { texto: 'Y acabó en ', fuerte: plural(f.noches, 'noche', 'noches'), sufijo: f.noches ? ' · llevas el ' + pct((100 * a.noches) / f.noches) : '' },
        ],
      }
    },
  }
})
const subtituloRitmo = computed(() => {
  const r = ritmo.value
  const primero = etiquetaTramo(r.tramos[0].clave)
  const ultimo = etiquetaTramo(r.tramos[r.tramos.length - 1].clave)
  return 'Para cada mes de ' + primero + ' a ' + ultimo + ': las noches que ya tienes vendidas (en cartera a ' + fechaCorta(r.aFecha)
    + '), las que llevabas el ' + fechaCorta(r.aFechaComparado) + ' para el mismo mes del año pasado, y con las que acabó ese mes.'
    + ' Cuenta todas las reservas no canceladas, con o sin check-in. Mira siempre hacia delante: elige arriba cuántos meses, no'
    + ' depende del periodo del cuadro.'
})
const lecturaRitmo = computed(() => {
  const r = ritmo.value
  let delante = 0
  let detras = 0
  let iguales = 0
  let vacios = 0
  r.tramos.forEach((t, i) => {
    const b = r.tramosComparado[i]
    if (!t.noches && !b.noches) vacios++
    else if (t.noches > b.noches) delante++
    else if (t.noches < b.noches) detras++
    else iguales++
  })
  const n = delante + detras + iguales + vacios
  const partes = []
  if (delante) partes.push('por delante del año pasado en ' + num(delante) + ' de los ' + num(n) + ' meses')
  if (detras) partes.push('por detrás en ' + num(detras) + (delante ? '' : ' de los ' + num(n) + ' meses'))
  if (iguales) partes.push('igual en ' + num(iguales))
  const texto = partes.length ? 'Vas ' + partes.join(', ') : 'Todavía no hay reservas ni las había el año pasado a estas alturas'
  return texto + (vacios && partes.length ? '; aún sin reservas en ' + num(vacios) + '.' : '.')
})

function filasReparto(d: FilaReparto[], dc: FilaReparto[] | null, etiquetas: Record<string, string>) {
  return d.map((f, i) => {
    const fa = dc ? dc[i] : null
    return {
      clave: f.tramo,
      etiqueta: etiquetas[f.tramo] || f.tramo,
      valor: f.pct,
      texto: pct(f.pct) + ' · ' + num(f.estancias),
      valorAntes: fa ? fa.pct : 0,
      textoAntes: fa ? pct(fa.pct) : null,
    }
  })
}
function textoMedia(media: number | null, antes: number | null | undefined, unidad: string) {
  const partes = []
  if (!vacio(media)) partes.push('Media: ' + dec1(media) + ' ' + unidad)
  if (!vacio(antes)) partes.push('antes ' + dec1(antes) + ' ' + unidad)
  return partes.join(' · ')
}
const filasAntelacion = computed(() => filasReparto(actual.value.antelacion.filas, comparado.value ? comparado.value.antelacion.filas : null, ETIQUETAS_ANTELACION))
const textoAntelacion = computed(() => textoMedia(actual.value.antelacion.media, comparado.value?.antelacion.media, 'días'))
const filasEstancia = computed(() => filasReparto(actual.value.duracion.filas, comparado.value ? comparado.value.duracion.filas : null, ETIQUETAS_ESTANCIA))
const textoEstancia = computed(() => textoMedia(actual.value.duracion.media, comparado.value?.duracion.media, 'noches'))

const deCon = (x: { canceladas: number, reservas: number, tasa: number | null }) =>
  num(x.canceladas) + ' de ' + num(x.reservas) + (vacio(x.tasa) ? '' : ' (' + pct(x.tasa) + ')')
const cancelaciones = computed(() => {
  const ca = actual.value.cancelaciones
  const cc = comparado.value ? comparado.value.cancelaciones : null
  let resumen = plural(ca.canceladas, 'cancelada', 'canceladas') + ' de ' + plural(ca.reservas, 'reserva', 'reservas') + (vacio(ca.tasa) ? '' : ' (' + pct(ca.tasa) + ')')
  if (cc) resumen += ' · antes ' + deCon(cc)
  const lineas = ['Agencias: ' + deCon(ca.agencias) + ' · Venta directa: ' + deCon(ca.directa) + '.']
  if (ca.canceladas) {
    lineas.push('Se cancelan de media ' + dec1(ca.antelacionMedia) + ' días antes de la llegada ('
      + plural(ca.canceladas, 'cancelación con fecha', 'cancelaciones con fecha') + ').')
  }
  return { resumen: resumen + '.', lineas }
})
const graficoCancelaciones = computed(() => {
  const ca = actual.value.cancelaciones
  const cc = comparado.value ? comparado.value.cancelaciones : null
  if (!ca.porTramo.length || (!ca.canceladas && !(cc && cc.canceladas))) return null
  const categorias = ca.porTramo.map(t => etiquetaTramo(t.clave))
  const series = [{ nombre: 'Este periodo', tipo: 'barra' as const, valores: ca.porTramo.map(t => t.canceladas), color: C.danger }]
  if (cc) series.push({ nombre: 'Año anterior', tipo: 'barra', valores: cc.porTramo.map(t => t.canceladas), color: C.muted })
  return {
    descripcion: 'Reservas canceladas por mes, este periodo frente al año anterior',
    ancho: anchoTercio.value,
    alto: 200,
    margen: { izq: 36, der: 8, arr: 12, aba: 44 },
    categorias,
    series,
    ejes: [{ formato: (v: number) => fmtEntero.format(v), entero: true }],
    anchoBarra: 22,
    leyenda: true,
    tooltip: (i: number) => {
      const lineas = [{ color: C.danger, texto: 'Este periodo: ', fuerte: deCon(ca.porTramo[i]) }]
      if (cc && cc.porTramo[i]) lineas.push({ color: C.muted, texto: 'Año anterior: ', fuerte: deCon(cc.porTramo[i]) })
      return { titulo: categorias[i], lineas }
    },
  }
})

const filaProcedencia = (x: { nombre: string, huespedes: number, pct: number }) =>
  ({ clave: x.nombre, etiqueta: x.nombre, valor: x.huespedes, texto: num(x.huespedes) + ' · ' + pct(x.pct) })
const filasPaises = computed(() => actual.value.procedencia.paises.map(filaProcedencia))
const filasProvincias = computed(() => actual.value.procedencia.provincias.map(filaProcedencia))
const textoProcedencia = computed(() => {
  const p = actual.value.procedencia
  return plural(p.huespedes, 'huésped registrado', 'huéspedes registrados') + ' en las estancias contadas'
    + (p.sinDato ? ', ' + num(p.sinDato) + ' sin país' : '') + '.'
})

// ---- Mis cuadros ----
interface Cuadro { id: number, nombre: string, inicio: boolean, spec: Spec }
const cuadros = ref<Cuadro[]>([
  { id: 1, nombre: 'Últimos 12 meses', inicio: true, spec: inicial() },
  { id: 2, nombre: 'Verano frente al año pasado', inicio: false, spec: { ...inicial(), desde: '2026-06-01', hasta: '2026-09-30', graficos: ['procedencia'] } },
])
let siguienteCuadro = 3
const cuadrosOrdenados = computed(() => [...cuadros.value.filter(c => c.inicio), ...cuadros.value.filter(c => !c.inicio)])
const firma = (s: Spec) => [s.desde, s.hasta, s.comparar, s.alojamiento, [...s.graficos].sort().join(','), s.ritmoMeses].join('|')
const cuadroActivo = computed(() => cuadros.value.find(c => firma(c.spec) === firma(spec)) || null)

const guardando = ref(false)
const nombreNuevo = ref('')
const renombrando = ref<Cuadro | null>(null)
const nombreRenombrar = ref('')
const cuadroABorrar = ref<Cuadro | null>(null)
const cuadrosMensaje = ref('')
const nombreEl = ref<HTMLInputElement | null>(null)
const renombrarEl = ref<HTMLInputElement | null>(null)
const cancelarBorrarEl = ref<HTMLElement | null>(null)

let tMensaje: ReturnType<typeof setTimeout> | undefined
function mensajeCuadros(texto: string) {
  cuadrosMensaje.value = texto
  clearTimeout(tMensaje)
  tMensaje = setTimeout(() => {
    if (cuadrosMensaje.value === texto) cuadrosMensaje.value = ''
  }, 6000)
}
function abrirCuadro(c: Cuadro) {
  forzarPersonalizado.value = false
  Object.assign(spec, copia(c.spec))
  cargar()
}
function enfocar(el: HTMLElement | null) {
  el?.focus({ preventScroll: true })
}
function empezarGuardar() {
  renombrando.value = null
  guardando.value = true
  nextTick(() => enfocar(nombreEl.value))
}
function confirmarGuardar() {
  const nombre = nombreNuevo.value.trim()
  if (!nombre || cuadros.value.length >= MAXIMO_CUADROS) return
  cuadros.value.push({ id: siguienteCuadro++, nombre, inicio: false, spec: copia(spec) })
  guardando.value = false
  nombreNuevo.value = ''
  mensajeCuadros('Cuadro guardado')
}
function empezarRenombrar(c: Cuadro) {
  guardando.value = false
  renombrando.value = c
  nombreRenombrar.value = c.nombre
  nextTick(() => enfocar(renombrarEl.value))
}
function confirmarRenombrar() {
  const nombre = nombreRenombrar.value.trim()
  if (!nombre || !renombrando.value) return
  renombrando.value.nombre = nombre
  renombrando.value = null
  mensajeCuadros('Cuadro renombrado')
}
function marcarInicio(c: Cuadro) {
  const si = !c.inicio
  cuadros.value.forEach((x) => {
    x.inicio = false
  })
  c.inicio = si
  mensajeCuadros(si ? 'Cuadro de inicio actualizado' : 'Ya no es el cuadro de inicio')
}
function confirmarBorrar() {
  const c = cuadroABorrar.value
  if (!c) return
  cuadros.value = cuadros.value.filter(x => x.id !== c.id)
  if (renombrando.value && renombrando.value.id === c.id) renombrando.value = null
  cuadroABorrar.value = null
  mensajeCuadros('Cuadro borrado')
}
watch(cuadroABorrar, (c) => {
  if (c) nextTick(() => enfocar(cancelarBorrarEl.value))
})

// ---- el aviso de arriba a la derecha ----
const toast = ref('')
let tToast: ReturnType<typeof setTimeout> | undefined
function avisar(texto: string) {
  toast.value = texto
  clearTimeout(tToast)
  tToast = setTimeout(() => {
    toast.value = ''
  }, 2800)
}

// ---- desplazamiento: la pagina tiene overflow:hidden (ni la rueda ni el dedo la mueven) y se recorre
//      con composables/useRecorrido, en px del panel ----
const raizEl = ref<HTMLElement | null>(null)
const vistaEl = ref<HTMLElement | null>(null)
const docEl = ref<HTMLElement | null>(null)
const evolucionEl = ref<HTMLElement | null>(null)
function escala() {
  const v = vistaEl.value
  return v && v.clientWidth > 0 ? v.clientWidth / anchoVista.value : 1
}
const { arrastrando, indicador, altoVista, irA, cancelar, posDe, mostrarEntero, manejadores } = useRecorrido(vistaEl, {
  escala,
  alTocar: tomarControl,
})

/* ---- vistazo: la primera vez que se ve, baja hasta la evolucion por mes y vuelve. Nunca con
   movimiento reducido; lo corta cualquier gesto ---- */
let tocado = false
function tomarControl() {
  tocado = true
  cancelar()
}
function vistazo() {
  if (tocado || !evolucionEl.value) return
  irA(posDe(evolucionEl.value, true) + 16 - altoVista(), 1700, () =>
    luego(700, () => {
      if (!tocado) irA(0, 1200)
    }),
  )
}

let mq: MediaQueryList | null = null
let io: IntersectionObserver | null = null
function alCambiarAncho() {
  movil.value = !!mq && !mq.matches
}

onMounted(() => {
  mq = window.matchMedia(ANCHO_PORTATIL)
  movil.value = !mq.matches
  mq.addEventListener('change', alCambiarAncho)
  const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducido || !('IntersectionObserver' in window) || !raizEl.value) return
  io = new IntersectionObserver((entradas) => {
    if (entradas.some(x => x.isIntersecting)) {
      io?.disconnect()
      luego(500, vistazo)
    }
  }, { threshold: 0.6 })
  io.observe(raizEl.value)
})

onBeforeUnmount(() => {
  mq?.removeEventListener('change', alCambiarAncho)
  io?.disconnect()
  temporizadores.forEach(t => clearTimeout(t))
  clearTimeout(tToast)
  clearTimeout(tMensaje)
})
</script>

<style scoped>
/* Colores del panel (src/App.vue): tinta, ambar del acento, teal primario y el rojo de marca */
.hm-est {
  --hm-ink: #26323f;
  --hm-ink-muted: #5e6a67;
  --hm-navy: #1a1a2e;
  --hm-accent: #f59e0b;
  --hm-accent-surface: #fcebc8;
  --hm-primary: #0f766e;
  --hm-primary-tint: #f0fdfa;
  --hm-primary-surface: #e4ecea;
  --hm-danger: #bc475e;
  /* el verde de "sube", algo mas oscuro que el del panel para que se lea sobre su fondo */
  --hm-sube: #15803d;
  --hm-linea: #e2dfdd;

  position: absolute;
  inset: 0;
  display: flex;
  background: #eef6f4;
  color: var(--hm-ink);
  font-size: calc(16 * var(--hm-u));
  line-height: 1.5;
  overflow: hidden;
  text-align: left;
}
/* en el movil va debajo de la barra de estado del telefono, que no es del panel */
.hm-est--movil {
  --hm-u: var(--p);
  position: relative;
  inset: auto;
  flex: 1 1 auto;
  min-height: 0;
  flex-direction: column;
}
:where(.hm-est) :where(p) {
  margin: 0;
}
:where(.hm-est) :where(button, input) {
  font: inherit;
  color: inherit;
}
/* los iconos de trazo de esta pantalla (no los de los graficos, que llevan sus colores) */
:where(.hm-est svg) {
  flex: none;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ===== La pagina, que se mueve con scrollTop ===== */
.hm-est__main {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.hm-est__vista {
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  outline: none;
  cursor: grab;
}
.hm-est__vista:focus-visible {
  box-shadow: inset 0 0 0 2px var(--hm-primary);
}
.hm-est__vista.is-drag {
  cursor: grabbing;
  user-select: none;
}
.hm-est__vista :where(button, summary, label, input, [tabindex]) {
  cursor: pointer;
}
.hm-est__vista :where(input[type="text"], .hm-entrada) {
  cursor: text;
}
.hm-est__doc {
  position: relative;
  padding-bottom: calc(8 * var(--hm-u));
}
.hm-est__indicador {
  position: absolute;
  z-index: 3;
  right: calc(3 * var(--hm-u));
  width: calc(4 * var(--hm-u));
  border-radius: calc(4 * var(--hm-u));
  background: rgba(0, 0, 0, 0.35);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.hm-est__indicador.is-on {
  opacity: 1;
}

/* ===== La banda de cabecera ===== */
.hm-est__banda {
  position: relative;
  min-height: calc(152 * var(--hm-u));
  padding: calc(26 * var(--hm-u)) calc(30 * var(--hm-u)) calc(44 * var(--hm-u));
  overflow: hidden;
  background-color: var(--hm-accent-surface);
  background-image: linear-gradient(to top right, rgba(255, 255, 255, 0) 15%, rgba(255, 255, 255, 0.7) 50%, #fff 85%);
}
.hm-est__banda-icono {
  position: absolute;
  top: calc(-14 * var(--hm-u));
  right: calc(20 * var(--hm-u));
  width: calc(180 * var(--hm-u));
  height: calc(180 * var(--hm-u));
  color: var(--hm-accent);
  opacity: 0.25;
  stroke-width: 1.4;
}
.hm-est__titulo {
  position: relative;
  font-size: calc(34 * var(--hm-u));
  font-weight: 600;
  line-height: 1.2;
}
.hm-est__subtitulo {
  position: relative;
  max-width: calc(800 * var(--hm-u));
  margin-top: calc(6 * var(--hm-u)) !important;
  font-size: calc(17 * var(--hm-u));
  font-weight: 500;
  line-height: 1.45;
}

/* ===== El contenido, que solapa la banda ===== */
.hm-est__entry {
  position: relative;
  z-index: 1;
  margin-top: calc(-28 * var(--hm-u));
  padding: 0 calc(15 * var(--hm-u)) calc(15 * var(--hm-u));
}
.hm-tarjeta {
  position: relative;
  margin-bottom: calc(16 * var(--hm-u));
  border-radius: calc(7 * var(--hm-u));
  background: #fff;
  box-shadow: inset 0 0 0 calc(1 * var(--hm-u)) rgba(0, 0, 0, 0.125), 0 0 calc(8 * var(--hm-u)) calc(2 * var(--hm-u)) rgba(0, 0, 0, 0.08);
}
.hm-tarjeta--cuerpo {
  padding: calc(20 * var(--hm-u));
}
.hm-est__contenido {
  transition: opacity 0.2s;
}
.hm-est__contenido.is-actualizando {
  opacity: 0.6;
}

/* los filtros */
.hm-filtros {
  z-index: 2;
  padding: calc(12 * var(--hm-u)) calc(18 * var(--hm-u)) calc(2 * var(--hm-u));
}
.hm-filtros__fila {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 0 calc(10 * var(--hm-u));
}
.hm-campo {
  margin-bottom: calc(6 * var(--hm-u));
}
.hm-campo__etiqueta {
  display: block;
  margin-bottom: calc(2 * var(--hm-u));
  color: var(--hm-ink-muted);
  font-size: calc(12.8 * var(--hm-u));
}
.hm-campo__desplegable {
  min-width: calc(210 * var(--hm-u));
}
.hm-fecha {
  display: block;
  width: calc(160 * var(--hm-u));
  height: calc(43 * var(--hm-u));
  padding: 0 calc(7 * var(--hm-u));
  border: 1px solid var(--hm-primary);
  border-radius: calc(7 * var(--hm-u));
  background: #fff;
  box-shadow: 0 calc(10 * var(--hm-u)) calc(10 * var(--hm-u)) calc(-8 * var(--hm-u)) rgba(0, 0, 0, 0.1);
  color: #000;
  font-size: calc(17 * var(--hm-u));
}
.hm-casilla {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: calc(8 * var(--hm-u));
  padding-bottom: calc(14 * var(--hm-u));
  color: var(--hm-ink);
  white-space: nowrap;
}
.hm-casilla input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}
.hm-casilla__caja {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: calc(16 * var(--hm-u));
  height: calc(16 * var(--hm-u));
  border-radius: calc(4 * var(--hm-u));
  background: #fff;
  box-shadow: inset 0 0 0 calc(1 * var(--hm-u)) #adb5bd;
  color: transparent;
}
.hm-casilla__caja svg {
  width: calc(12 * var(--hm-u));
  height: calc(12 * var(--hm-u));
  stroke-width: 3.4;
}
.hm-casilla input:checked + .hm-casilla__caja {
  background: var(--hm-primary);
  box-shadow: none;
  color: #fff;
}
.hm-casilla input:focus-visible + .hm-casilla__caja {
  outline: 2px solid var(--hm-primary);
  outline-offset: 2px;
}
.hm-filtros__mas {
  margin-bottom: calc(8 * var(--hm-u));
}
.hm-filtros__mas summary {
  width: max-content;
  color: var(--hm-primary);
  font-size: calc(14.4 * var(--hm-u));
}
.hm-filtros__mas[open] summary {
  margin-bottom: calc(8 * var(--hm-u));
}

/* Mis cuadros */
.hm-cuadros {
  margin-bottom: calc(14 * var(--hm-u));
}
.hm-cuadros__fila {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.hm-rotulo {
  margin-right: calc(8 * var(--hm-u));
  color: var(--hm-ink-muted);
  font-size: calc(13.6 * var(--hm-u));
  font-weight: 700;
}
.hm-cuadro {
  display: inline-flex;
  align-items: center;
  margin: calc(3 * var(--hm-u)) calc(8 * var(--hm-u)) calc(3 * var(--hm-u)) 0;
  padding: calc(2 * var(--hm-u)) calc(6 * var(--hm-u)) calc(2 * var(--hm-u)) calc(10 * var(--hm-u));
  border-radius: 999px;
  background: #fff;
  box-shadow: inset 0 0 0 calc(1 * var(--hm-u)) var(--hm-linea);
}
.hm-cuadro.is-activo {
  background: var(--hm-primary-tint);
  box-shadow: inset 0 0 0 calc(1 * var(--hm-u)) var(--hm-primary);
}
.hm-cuadro__nombre {
  padding: calc(2 * var(--hm-u)) calc(4 * var(--hm-u));
  border: 0;
  background: none;
  color: var(--hm-ink);
  font-weight: 600;
}
.hm-cuadro__nombre:hover {
  color: var(--hm-primary);
  text-decoration: underline;
}
.hm-cuadro__accion {
  display: inline-flex;
  padding: calc(4 * var(--hm-u)) calc(5 * var(--hm-u));
  border: 0;
  background: none;
  color: var(--hm-ink-muted);
}
.hm-cuadro__accion:hover {
  color: var(--hm-primary);
}
.hm-cuadro__accion svg {
  width: calc(15 * var(--hm-u));
  height: calc(15 * var(--hm-u));
}
.hm-cuadro__accion.is-inicio {
  color: var(--hm-accent);
}
.hm-cuadro__accion.is-inicio svg {
  fill: currentColor;
}
.hm-cuadros__vacio {
  color: var(--hm-ink-muted);
  font-size: calc(14.4 * var(--hm-u));
}
.hm-cuadros__guardar {
  margin-left: auto;
}
.hm-cuadros__form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(8 * var(--hm-u));
  margin-top: calc(8 * var(--hm-u));
  color: var(--hm-ink-muted);
  font-size: calc(14.4 * var(--hm-u));
}
.hm-entrada {
  width: calc(260 * var(--hm-u));
  height: calc(38 * var(--hm-u));
  padding: 0 calc(12 * var(--hm-u));
  border: 1px solid #ced4da;
  border-radius: calc(4 * var(--hm-u));
  background: #fff;
  color: #495057 !important;
  font-size: calc(16 * var(--hm-u));
}
.hm-entrada:focus {
  border-color: #99f6e4;
  outline: none;
  box-shadow: 0 0 0 calc(3 * var(--hm-u)) rgba(15, 118, 110, 0.25);
}
.hm-cuadros__aviso {
  margin-top: calc(8 * var(--hm-u)) !important;
  color: var(--hm-ink-muted);
  font-size: calc(14.4 * var(--hm-u));
}
.hm-cuadros__aviso.is-ok {
  color: var(--hm-sube);
}

/* los botones del panel (.bttn con .btn-blue y .btn-grey) */
.hm-boton {
  height: calc(43 * var(--hm-u));
  padding: 0 calc(12 * var(--hm-u));
  border-radius: calc(6 * var(--hm-u));
  font-size: calc(16 * var(--hm-u));
  font-weight: 600;
  line-height: 1.5;
}
.hm-boton--teal {
  border: 1px solid var(--hm-primary);
  background: var(--hm-primary);
  color: #fff !important;
}
.hm-boton--teal:hover {
  background: #fff;
  color: var(--hm-primary) !important;
}
.hm-boton--gris {
  border: 1px solid #9ba0aa;
  background: #9ba0aa;
  color: #fff !important;
}
.hm-boton--gris:hover {
  background: #fff;
  color: #9ba0aa !important;
}
.hm-boton:disabled {
  opacity: 0.6;
  pointer-events: none;
}
.hm-boton:focus-visible,
.hm-cuadro__nombre:focus-visible,
.hm-cuadro__accion:focus-visible,
.hm-chip-grafico:focus-visible,
.hm-como__enlace:focus-visible,
.hm-filtros__mas summary:focus-visible {
  outline: 2px solid var(--hm-primary);
  outline-offset: 2px;
}

/* las cuatro cifras */
.hm-kpis {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: calc(30 * var(--hm-u));
}
.hm-kpi {
  display: flex;
  flex-direction: column;
  gap: calc(4 * var(--hm-u));
  margin-bottom: calc(16 * var(--hm-u));
  padding: calc(14 * var(--hm-u)) calc(16 * var(--hm-u));
  border-radius: calc(12 * var(--hm-u));
  background: #fff;
  box-shadow: inset 0 0 0 calc(1 * var(--hm-u)) var(--hm-linea);
}
.hm-kpi__titulo {
  display: flex;
  align-items: flex-end;
  min-height: 2.4em;
  color: var(--hm-ink-muted);
  font-size: calc(12 * var(--hm-u));
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.hm-kpi__linea {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: calc(8 * var(--hm-u));
}
.hm-kpi__valor {
  color: var(--hm-navy);
  font-size: calc(27.2 * var(--hm-u));
  font-weight: 800;
  line-height: 1.1;
  white-space: nowrap;
}
.hm-chip {
  padding: calc(2 * var(--hm-u)) calc(8 * var(--hm-u));
  border-radius: 999px;
  font-size: calc(12.8 * var(--hm-u));
  font-weight: 700;
  white-space: nowrap;
}
.hm-chip--mas {
  color: var(--hm-sube);
  background: var(--hm-primary-tint);
}
.hm-chip--menos {
  color: var(--hm-danger);
  background: var(--hm-primary-tint);
}
.hm-chip--igual {
  color: var(--hm-ink-muted);
  background: var(--hm-primary-surface);
}
.hm-kpi__antes,
.hm-kpi__pie {
  color: var(--hm-ink-muted);
  font-size: calc(13.1 * var(--hm-u));
}
.hm-kpi__pie {
  margin-top: auto;
}
.hm-kpi__tendencia {
  display: block;
  width: 100%;
  height: calc(36 * var(--hm-u));
  margin-top: calc(6 * var(--hm-u));
}

/* la franja */
.hm-franja {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: calc(8 * var(--hm-u)) calc(32 * var(--hm-u));
  padding: calc(10 * var(--hm-u)) calc(18 * var(--hm-u));
}
.hm-franja__dato {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: calc(6 * var(--hm-u));
}
.hm-franja__titulo {
  color: var(--hm-ink-muted);
  font-size: calc(13.1 * var(--hm-u));
}
.hm-franja__valor {
  color: var(--hm-navy);
  font-size: calc(19.2 * var(--hm-u));
  font-weight: 800;
}
.hm-franja__dif {
  padding: calc(1 * var(--hm-u)) calc(7 * var(--hm-u));
  border-radius: 999px;
  font-size: calc(12.8 * var(--hm-u));
  font-weight: 700;
}
.hm-franja__antes {
  color: var(--hm-ink-muted);
  font-size: calc(12.5 * var(--hm-u));
}
.hm-franja__aparte {
  margin-left: auto;
  color: var(--hm-ink-muted);
  font-size: calc(12.8 * var(--hm-u));
}

/* los graficos */
.hm-grafico-cab {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: calc(6 * var(--hm-u)) calc(16 * var(--hm-u));
  margin-bottom: calc(8 * var(--hm-u));
}
.hm-grafico-titulo {
  margin: 0 0 calc(6 * var(--hm-u)) !important;
  color: var(--hm-navy);
  font-size: calc(16 * var(--hm-u));
  font-weight: 800;
  line-height: 1.2;
}
.hm-grafico-cab .hm-grafico-titulo {
  margin: 0 !important;
}
.hm-grafico-sub {
  margin: 0 0 calc(10 * var(--hm-u)) !important;
  color: var(--hm-ink-muted);
  font-size: calc(13.1 * var(--hm-u));
}
.hm-sin-margen {
  margin-bottom: 0 !important;
}
.hm-arriba {
  margin-top: calc(8 * var(--hm-u)) !important;
}
.hm-arriba-poco {
  margin-top: calc(4 * var(--hm-u)) !important;
}
.hm-sin-datos {
  margin-top: calc(8 * var(--hm-u)) !important;
  color: var(--hm-ink-muted);
  font-size: calc(13.6 * var(--hm-u));
}
.hm-leyenda {
  display: flex;
  flex-wrap: wrap;
  gap: calc(12 * var(--hm-u));
  color: var(--hm-ink);
  font-size: calc(12.5 * var(--hm-u));
}
.hm-leyenda__item {
  display: inline-flex;
  align-items: center;
  gap: calc(6 * var(--hm-u));
}
.hm-leyenda__barra {
  display: inline-block;
  width: calc(14 * var(--hm-u));
  height: calc(10 * var(--hm-u));
  border-radius: calc(2 * var(--hm-u));
}
.hm-leyenda__linea {
  display: inline-block;
  width: calc(18 * var(--hm-u));
  height: 0;
  border-top: calc(3 * var(--hm-u)) solid;
}
.hm-leyenda__linea.is-discontinua {
  border-top-style: dashed;
  border-top-width: calc(2 * var(--hm-u));
}
.hm-desgloses {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: calc(30 * var(--hm-u));
  align-items: stretch;
}

/* canal de venta */
.hm-canal__barra {
  display: flex;
  height: calc(14 * var(--hm-u));
  margin: calc(6 * var(--hm-u)) 0 calc(12 * var(--hm-u));
  border-radius: 999px;
  overflow: hidden;
  background: var(--hm-accent);
}
.hm-canal__agencias {
  display: block;
  height: 100%;
  background: var(--hm-primary);
}
.hm-canal__filas {
  display: flex;
  flex-direction: column;
  gap: calc(10 * var(--hm-u));
}
.hm-canal__fila {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: calc(2 * var(--hm-u)) calc(8 * var(--hm-u));
  padding-bottom: calc(8 * var(--hm-u));
  box-shadow: inset 0 calc(-1 * var(--hm-u)) 0 var(--hm-linea);
  font-size: calc(14.4 * var(--hm-u));
}
.hm-canal__nombre {
  display: inline-flex;
  align-items: center;
  gap: calc(8 * var(--hm-u));
}
.hm-canal__punto {
  display: inline-block;
  width: calc(10 * var(--hm-u));
  height: calc(10 * var(--hm-u));
  border-radius: 50%;
}
.hm-canal__cifra {
  margin-left: auto;
  text-align: right;
}
.hm-canal__cifra strong {
  color: var(--hm-navy);
  font-size: calc(17.6 * var(--hm-u));
}
.hm-canal__agencias-lista {
  display: flex;
  flex-direction: column;
  gap: calc(4 * var(--hm-u));
  color: var(--hm-ink);
  font-size: calc(13.1 * var(--hm-u));
}
.hm-canal__agencia {
  display: flex;
  justify-content: space-between;
  gap: calc(8 * var(--hm-u));
}
.hm-canal__agencia-cifra {
  color: var(--hm-ink-muted);
  white-space: nowrap;
}

/* ocupacion por tipo de habitacion */
.hm-tipos__nombre {
  margin-bottom: calc(6 * var(--hm-u));
  color: var(--hm-ink-muted);
  font-size: calc(12 * var(--hm-u));
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.hm-tipos {
  display: grid;
  grid-template-columns: calc(110 * var(--hm-u)) minmax(0, 1fr) auto;
  align-items: center;
  gap: calc(5 * var(--hm-u)) calc(10 * var(--hm-u));
  font-size: calc(13.6 * var(--hm-u));
}
.hm-tipos__tipo {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hm-tipos__pista {
  display: block;
  height: calc(10 * var(--hm-u));
  border-radius: 999px;
  background: var(--hm-primary-surface);
  overflow: hidden;
}
.hm-tipos__pista.is-fina {
  height: calc(6 * var(--hm-u));
}
.hm-tipos__barra {
  display: block;
  height: 100%;
}
.hm-tipos__valor {
  text-align: right;
  font-weight: 700;
  white-space: nowrap;
}
.hm-tipos__antes {
  color: var(--hm-ink-muted);
  font-size: calc(11.5 * var(--hm-u));
}
.hm-tipos__antes.is-derecha {
  text-align: right;
}

/* Mas graficos */
.hm-mas,
.hm-ritmo__controles {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(6 * var(--hm-u)) calc(8 * var(--hm-u));
}
.hm-mas {
  margin-bottom: calc(16 * var(--hm-u));
}
.hm-chip-grafico {
  padding: calc(4 * var(--hm-u)) calc(12 * var(--hm-u));
  border: 0;
  border-radius: 999px;
  background: #fff;
  box-shadow: inset 0 0 0 calc(1 * var(--hm-u)) var(--hm-linea);
  color: var(--hm-ink) !important;
  font-size: calc(13.6 * var(--hm-u));
}
.hm-chip-grafico + .hm-chip-grafico {
  margin-left: calc(4 * var(--hm-u));
}
.hm-mas .hm-chip-grafico + .hm-chip-grafico {
  margin-left: 0;
}
.hm-chip-grafico:hover {
  box-shadow: inset 0 0 0 calc(1 * var(--hm-u)) var(--hm-primary);
  color: var(--hm-primary) !important;
}
.hm-chip-grafico.is-activo {
  background: var(--hm-primary);
  box-shadow: inset 0 0 0 calc(1 * var(--hm-u)) var(--hm-primary);
  color: #fff !important;
}
.hm-mas__nota {
  color: var(--hm-ink-muted);
  font-size: calc(12.8 * var(--hm-u));
}
.hm-ritmo__meses {
  min-width: calc(200 * var(--hm-u));
}
.hm-procedencia {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: calc(8 * var(--hm-u)) calc(30 * var(--hm-u));
}

/* Como se calcula */
.hm-como {
  margin: 0 0 calc(24 * var(--hm-u)) !important;
  color: var(--hm-ink-muted);
  font-size: calc(13.6 * var(--hm-u));
}
.hm-como svg {
  display: inline-block;
  width: calc(14 * var(--hm-u));
  height: calc(14 * var(--hm-u));
  margin-right: calc(5 * var(--hm-u));
  vertical-align: calc(-2 * var(--hm-u));
}
.hm-como__enlace {
  margin-left: calc(6 * var(--hm-u));
  padding: 0;
  border: 0;
  background: none;
  color: var(--hm-primary) !important;
  font-weight: 700;
  text-decoration: underline;
}

/* ===== Hugo, el aviso y la ventana ===== */
.hm-est__hugo {
  position: absolute;
  z-index: 3;
  right: calc(20 * var(--hm-u));
  bottom: calc(20 * var(--hm-u));
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(56 * var(--hm-u));
  height: calc(56 * var(--hm-u));
  border-radius: 50%;
  background: var(--hm-accent);
  color: #1a1a2e;
  box-shadow: 0 calc(4 * var(--hm-u)) calc(14 * var(--hm-u)) rgba(0, 0, 0, 0.25);
  pointer-events: none;
}
.hm-est__hugo svg {
  width: calc(24 * var(--hm-u));
  height: calc(24 * var(--hm-u));
  fill: currentColor;
  stroke: none;
}
/* el aviso de arriba a la derecha (b-toaster-top-right) */
.hm-est__toast {
  position: absolute;
  z-index: 7;
  top: calc(16 * var(--hm-u));
  right: calc(16 * var(--hm-u));
  max-width: calc(320 * var(--hm-u));
  padding: calc(10 * var(--hm-u)) calc(16 * var(--hm-u));
  border-radius: calc(6 * var(--hm-u));
  background: #15803d;
  color: #fff;
  font-size: calc(14.5 * var(--hm-u));
  font-weight: 600;
  box-shadow: 0 calc(4 * var(--hm-u)) calc(16 * var(--hm-u)) rgba(0, 0, 0, 0.18);
  animation: hm-est-toast 0.25s ease;
}
@keyframes hm-est-toast {
  from {
    opacity: 0;
    transform: translateY(calc(-8 * var(--hm-u)));
  }
}
.hm-modal {
  position: absolute;
  z-index: 6;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: calc(28 * var(--hm-u)) calc(16 * var(--hm-u));
  background: rgba(0, 0, 0, 0.5);
}
.hm-modal__dialogo {
  width: calc(500 * var(--hm-u));
  max-width: 100%;
  border-radius: calc(7 * var(--hm-u));
  background: #fff;
  overflow: hidden;
  box-shadow: 0 calc(10 * var(--hm-u)) calc(40 * var(--hm-u)) rgba(0, 0, 0, 0.3);
}
.hm-modal__cab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(12 * var(--hm-u));
  padding: calc(14 * var(--hm-u)) calc(18 * var(--hm-u));
  box-shadow: inset 0 calc(-1 * var(--hm-u)) 0 #dee2e6;
}
.hm-modal__titulo {
  font-size: calc(19 * var(--hm-u));
  font-weight: 500;
  line-height: 1.3;
}
.hm-modal__cerrar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: calc(32 * var(--hm-u));
  height: calc(32 * var(--hm-u));
  border: 0;
  border-radius: calc(6 * var(--hm-u));
  background: transparent;
  color: var(--hm-ink-muted) !important;
}
.hm-modal__cerrar svg {
  width: calc(18 * var(--hm-u));
  height: calc(18 * var(--hm-u));
}
.hm-modal__cuerpo {
  padding: calc(16 * var(--hm-u)) calc(18 * var(--hm-u));
}
.hm-modal__pie {
  display: flex;
  justify-content: flex-end;
  gap: calc(8 * var(--hm-u));
  padding: calc(12 * var(--hm-u)) calc(18 * var(--hm-u));
  box-shadow: inset 0 calc(1 * var(--hm-u)) 0 #dee2e6;
}
.hm-boton-modal {
  height: calc(38 * var(--hm-u));
  padding: 0 calc(12 * var(--hm-u));
  border: 0;
  border-radius: calc(4 * var(--hm-u));
  background: #6c757d;
  color: #fff !important;
  font-size: calc(16 * var(--hm-u));
}
.hm-boton-modal--rojo {
  background: var(--hm-danger);
}
.hm-modal__cerrar:focus-visible,
.hm-boton-modal:focus-visible {
  outline: 2px solid var(--hm-primary);
  outline-offset: 2px;
}

/* ===== En el movil: una columna, como el panel por debajo de 768 px ===== */
.hm-est--movil .hm-est__banda {
  min-height: 0;
  padding: calc(20 * var(--hm-u)) calc(15 * var(--hm-u)) calc(40 * var(--hm-u));
}
.hm-est--movil .hm-est__banda-icono {
  display: none;
}
.hm-est--movil .hm-est__titulo {
  font-size: calc(28 * var(--hm-u));
}
.hm-est--movil .hm-est__subtitulo {
  font-size: calc(14.5 * var(--hm-u));
}
.hm-est--movil .hm-est__entry {
  margin-top: calc(-24 * var(--hm-u));
}
.hm-est--movil .hm-filtros__fila > .hm-campo {
  flex: 1 1 100%;
}
.hm-est--movil .hm-campo__desplegable,
.hm-est--movil .hm-fecha {
  width: 100%;
  min-width: 0;
}
.hm-est--movil .hm-cuadros__guardar {
  margin-left: 0;
}
.hm-est--movil .hm-entrada {
  flex: 1 1 100%;
  width: 100%;
}
.hm-est--movil .hm-kpis,
.hm-est--movil .hm-desgloses,
.hm-est--movil .hm-procedencia {
  grid-template-columns: minmax(0, 1fr);
}
.hm-est--movil .hm-kpi__titulo {
  min-height: 0;
}
.hm-est--movil .hm-franja__aparte {
  flex-basis: 100%;
  margin-left: 0;
}
.hm-est--movil .hm-ritmo__meses {
  min-width: 0;
  width: 100%;
}
.hm-est--movil .hm-est__hugo {
  right: calc(12 * var(--hm-u));
  bottom: calc(12 * var(--hm-u));
  width: calc(48 * var(--hm-u));
  height: calc(48 * var(--hm-u));
}
.hm-est--movil .hm-est__toast {
  top: calc(64 * var(--hm-u));
  left: calc(12 * var(--hm-u));
  right: calc(12 * var(--hm-u));
  max-width: none;
}

@media (prefers-reduced-motion: reduce) {
  .hm-est__contenido,
  .hm-est__indicador {
    transition: none;
  }
  .hm-est__toast {
    animation: none;
  }
}
</style>
