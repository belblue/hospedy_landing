<!--
  Maqueta del auto check-in del huesped (el formulario que recibe por email, WhatsApp o SMS)
  dentro de un movil dibujado en CSS (MockPhoneFrame). Datos de ejemplo fijos: NO habla con
  ninguna API.

  Replica la pagina real a 375 px de ancho (el formulario de un huesped y la lista de
  huespedes de la reserva), con las mismas cajas, textos y pasos, en los colores y la letra
  de Hospedy. Todas las medidas van en --p, que vale "1 px del movil" de 375.

  Se puede usar: "Hacer foto del documento" simula la lectura del documento y rellena los
  datos; en el recuadro de firma se firma con el dedo o el raton (un toque firma solo);
  "Guardar huesped" valida como la app real y, al guardar, vuelve a la lista de huespedes.
  El formulario se recorre arrastrando con el raton o con el teclado; la rueda y el gesto
  vertical del dedo siguen siendo de la pagina, y tras cada paso la maqueta baja sola al
  siguiente (mientras se rellenan los datos, va bajando con el campo que se rellena).

  Con "demo" se reproduce sola y en bucle mientras se ve (foto, datos, firma, aceptacion y
  guardado, con un circulo que marca cada toque); en cuanto el visitante toca algo se para y
  la maqueta queda en sus manos. Con "estatico" es una foto sin eventos ni animacion; "inicio"
  elige si empieza en el formulario o en la lista de huespedes.
-->
<template>
  <MockPhoneFrame ref="marcoEl" :role="estatico ? 'img' : null" :aria-label="estatico ? DESCRIPCION : null">
    <div ref="ckEl" class="hm-ck" :class="{ 'is-foto': estatico }">
      <div
        ref="vistaEl"
        class="hm-ck__vista"
        :class="{ 'is-drag': arrastrando }"
        :tabindex="estatico ? null : 0"
        :role="estatico ? null : 'group'"
        :aria-roledescription="estatico ? null : 'formulario de ejemplo'"
        :aria-label="estatico ? null : DESCRIPCION + ' Se recorre arrastrando o con las flechas.'"
        :inert="estatico"
        v-on="estatico ? {} : manejadores"
      >
        <div ref="docEl" class="hm-ck__doc">
          <div class="hm-nav" aria-hidden="true">
            <svg class="hm-nav__marca" viewBox="44.9 99.1 38.9 41">
              <path fill="#0d9488" d="m 45.148833,121.47429 c 5.64e-4,-2.83541 0.07781,-5.22613 0.180269,-5.57893 0.360693,-1.24204 1.135154,-2.00215 5.113081,-5.01835 5.893415,-4.4686 10.41632,-7.55818 11.080034,-7.9014 0.747892,-0.38675 2.187605,-0.40916 3.151078,-0.14847 0.673851,0.18233 1.63612,0.82421 5.989411,3.99522 0.79077,0.57602 3.10609,2.25817 5.14516,3.73811 3.88641,2.82074 4.95286,3.81488 5.286,4.92757 0.2121,0.70842 0.35122,2.79804 0.19658,2.95268 -0.0499,0.05 -1.67388,0.45369 -3.60872,0.8972 -1.93485,0.44351 -4.32245,1.00131 -5.30578,1.23955 -2.43943,0.59102 -2.35726,0.60697 -2.35726,-0.45754 0,-1.37332 -0.68037,-2.37351 -1.889349,-2.77747 -0.596475,-0.1993 -2.116878,0.0154 -6.577321,0.9289 -1.11566,0.22848 -2.345972,0.46593 -2.734028,0.52766 -2.767535,0.44025 -4.321528,2.11474 -4.321528,4.65661 v 0.67531 0.16985 l -0.160051,0.0323 -1.647935,0.3328 c -0.994392,0.20082 -2.522361,0.54093 -3.395486,0.7558 -0.873125,0.21488 -2.162969,0.53097 -2.86632,0.70242 l -1.278819,0.31174 9.88e-4,-4.96158 z" />
              <path fill="#0f766e" d="m 45.148831,130.87964 -9.84e-4,-3.80114 1.278819,-0.30707 c 3.51441,-0.84388 7.41812,-1.641 7.721677,-1.70385 0.122739,-0.0254 0.323083,-0.10914 0.324739,0.0607 0.0043,0.44413 -0.02832,1.50183 0.02338,6.64212 l 0.07237,7.19576 c -1.83558,0.12649 -5.417276,0.0966 -7.662009,0.0831 -0.672714,-0.0531 -1.125354,-0.67035 -1.395617,-1.16882 -0.736383,-2.13633 -0.362845,-4.82516 -0.362375,-7.0008 z m 25.046245,0.12765 v -8.02532 l 3.1309,-0.73844 c 1.72199,-0.40614 4.0834,-0.9685 5.24757,-1.24969 1.16416,-0.28119 2.45029,-0.43857 2.57156,-0.43888 0.17298,-3.5e-4 0.22277,1.4983 0.21973,7.34501 -0.004,6.83135 -0.26823,7.54516 -0.56303,8.19191 -0.47914,1.05108 -1.19686,1.81314 -2.20714,2.34352 -0.8841,0.46413 -0.98178,0.47538 -4.65133,0.53565 l -3.74826,0.0616 z" />
              <g fill="#f59e0b">
                <path d="m 78.960337,105.05075 c -0.15088,0.0251 -0.22423,0.43692 -0.28799,0.70383 -0.0782,0.32717 -0.3262,0.5858 -0.76125,0.79375 -0.88127,0.42125 -0.90271,0.66893 -0.0936,1.08169 0.49504,0.25255 0.73538,0.51499 0.85564,0.93431 0.23934,0.83451 0.68871,0.84488 1.07485,0.0248 0.21085,-0.44779 0.53694,-0.77593 0.977,-0.98314 0.82806,-0.3899 0.84192,-0.75017 0.0391,-1.01514 -0.44282,-0.14614 -0.72094,-0.40013 -0.96762,-0.88365 -0.40874,-0.80121 -0.46346,-0.71856 -0.83607,-0.65646 z m -4.83946,0.28365 c -0.15154,-0.17337 -0.36557,-0.59613 -0.47562,-0.93947 -0.19531,-0.60935 -0.95375,-1.10191 -1.47598,-1.22782 -0.27887,-0.0672 -0.86406,-0.60873 -0.74754,-0.91237 0.0544,-0.1418 0.49041,-0.42322 0.96887,-0.62536 0.77247,-0.32636 0.91951,-0.47963 1.31238,-1.36798 0.37183,-0.840769 0.50644,-0.991368 0.84337,-0.943554 0.28837,0.04092 0.52073,0.316532 0.82771,0.981774 0.38028,0.82407 0.52446,0.96125 1.32292,1.25869 0.51766,0.19284 0.92127,0.4596 0.95568,0.63165 0.0827,0.4136 -0.41841,0.91662 -1.03624,1.04019 -0.64095,0.12819 -1.05951,0.59316 -1.40973,1.56604 -0.29937,0.8316 -0.66914,1.01489 -1.08582,0.53821 z" />
                <path d="m 65.766821,139.59097 c -0.436561,-0.0328 -2.103436,-0.17778 -3.704165,-0.32227 -1.60073,-0.14449 -3.448447,-0.31054 -4.106037,-0.369 l -1.195622,-0.10629 -0.0405,-9.15289 -0.01638,-3.70262 c -0.0261,-5.25515 -0.839499,-4.40523 4.407607,-5.52553 2.573249,-0.56623 4.748327,-0.83765 5.749901,-0.68608 1.110927,0.21914 0.925883,1.73868 0.948195,2.35691 0.0504,1.44744 0.06989,4.00615 0.07106,8.2363 l 0.0026,9.39271 -0.661458,-0.0308 c -0.363802,-0.017 -1.018646,-0.0576 -1.455209,-0.0904 z m 0.399112,-8.18603 c 0.483388,-0.59148 0.561617,-1.18959 0.242986,-1.85776 -0.729033,-1.5288 -3.111541,-0.98307 -3.111541,0.71271 0,0.64295 0.403735,1.29431 0.944915,1.52446 0.575471,0.24474 1.574609,0.0477 1.92364,-0.37941 z" />
              </g>
            </svg>

            <!-- logo del alojamiento: en la app real es la imagen que sube el hotelero -->
            <svg class="hm-nav__logo" viewBox="0 0 44 50">
              <circle cx="22" cy="19" r="17" :fill="A.color" />
              <text v-if="A.logo === 'hotel'" x="22" y="26.5" text-anchor="middle" font-size="21" font-family="Georgia, 'Times New Roman', serif" font-weight="700" fill="#f2c96d">A</text>
              <g v-else-if="A.logo === 'rural'">
                <path d="M22 6.5 30.5 19h-4.2l5 7.5H12.7l5-7.5h-4.2z" fill="#cfe3a4" />
                <rect x="20.4" y="26.4" width="3.2" height="5" rx="0.8" fill="#e8d6a8" />
              </g>
              <g v-else fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round">
                <path d="M10 16.5c2.4-2.4 4.8-2.4 7.2 0s4.8 2.4 7.2 0 4.8-2.4 7.2 0" />
                <path d="M10 23c2.4-2.4 4.8-2.4 7.2 0s4.8 2.4 7.2 0 4.8-2.4 7.2 0" opacity="0.7" />
              </g>
              <text x="22" y="46.5" text-anchor="middle" :font-size="A.siglas.length > 8 ? 5.2 : 6.4" font-weight="800" letter-spacing="0.3" :fill="A.color">{{ A.siglas }}</text>
            </svg>

            <span class="hm-nav__lang">
              Español
              <svg viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" fill="none" stroke="#111" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </span>
          </div>

          <!-- ======================= Formulario de un huesped ======================= -->
          <div v-if="vista === 'form'" class="hm-page">
            <div class="hm-shell">
              <button type="button" class="hm-back" @click="usuario(aLista)">&larr; Volver a los huéspedes</button>

              <div class="hm-hero">
                <p class="hm-hero__t">Auto check-in en {{ A.nombre }}</p>
                <p class="hm-hero__p">{{ A.mensaje }}</p>
                <p class="hm-hero__p">Rellene los datos tal y como aparecen en el documento de identidad y firme al final.</p>
              </div>

              <div class="hm-stack">
                <!-- escaneo del documento -->
                <div class="hm-panel">
                  <div class="hm-scan">
                    <div class="hm-scan__info">
                      <p class="hm-panel__t">Escanee su documento</p>
                      <p class="hm-panel__d">Haga una foto del DNI o pasaporte por la cara del código MRZ, como en el ejemplo. Rellenaremos varios campos automáticamente.</p>
                      <div class="hm-scan__acts">
                        <button ref="fotoEl" type="button" class="hm-bp" :class="{ 'is-pulso': pulso }" @click="usuario(escanear)">Hacer foto del documento</button>
                        <span class="hm-scan__hint">JPG o PNG · máx. 10 MB</span>
                      </div>

                      <div v-if="fase !== 'inicio'" ref="prevEl" class="hm-prev">
                        <!-- la foto que ha hecho el huesped -->
                        <svg class="hm-prev__img" viewBox="0 0 266 200" aria-hidden="true">
                          <rect width="266" height="200" fill="#d8d2c8" />
                          <rect width="266" height="200" fill="#fff" opacity="0.18" />
                          <g transform="rotate(-2.5 133 100)">
                            <rect x="25" y="27" width="216" height="146" rx="10" fill="#2a2f2e" opacity="0.18" transform="translate(3 4)" />
                            <rect x="25" y="27" width="216" height="146" rx="10" fill="#f7faf9" stroke="#c9d8d4" />
                            <rect x="37" y="39" width="46" height="56" rx="4" fill="#cadcd7" />
                            <circle cx="60" cy="59" r="10" fill="#b5ccc6" />
                            <path d="M44 95c2-12 9-17 16-17s14 5 16 17z" fill="#b5ccc6" />
                            <rect x="93" y="42" width="70" height="7" rx="3.5" fill="#b9cfca" />
                            <rect x="93" y="56" width="120" height="7" rx="3.5" fill="#dae7e4" />
                            <rect x="93" y="70" width="96" height="7" rx="3.5" fill="#dae7e4" />
                            <rect x="93" y="84" width="108" height="7" rx="3.5" fill="#dae7e4" />
                            <text
                              v-for="(linea, i) in ficha.mrz"
                              :key="i"
                              x="36"
                              :y="(ficha.mrz.length === 2 ? 128 : 118) + i * 14"
                              font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
                              :font-size="ficha.mrz.length === 2 ? 6.3 : 8.6"
                              fill="#26323f"
                            >{{ linea }}</text>
                          </g>
                        </svg>
                        <button type="button" class="hm-bp" :disabled="fase === 'subiendo' || fase === 'leyendo'" @click="usuario(leer)">
                          <template v-if="fase === 'subiendo'"><i class="hm-spin" aria-hidden="true" />Subiendo...100%</template>
                          <template v-else-if="fase === 'leyendo'"><i class="hm-spin" aria-hidden="true" />Leyendo datos</template>
                          <template v-else>
                            <svg class="hm-ico" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>Leer datos
                          </template>
                        </button>
                      </div>
                    </div>

                    <!-- el ejemplo fijo de la app: donde esta el codigo MRZ -->
                    <figure class="hm-mrz" aria-hidden="true">
                      <svg viewBox="0 0 300 190">
                        <rect x="0" y="0" width="300" height="190" rx="12" fill="#eef5f3" />
                        <rect x="18" y="16" width="264" height="158" rx="9" fill="#fff" stroke="#d5e3e0" stroke-width="1.5" />
                        <rect x="32" y="30" width="62" height="74" rx="5" fill="#d3e5e1" />
                        <rect x="106" y="32" width="86" height="8" rx="4" fill="#bfd6d1" />
                        <rect x="106" y="50" width="140" height="8" rx="4" fill="#dce9e6" />
                        <rect x="106" y="68" width="112" height="8" rx="4" fill="#dce9e6" />
                        <rect x="106" y="86" width="128" height="8" rx="4" fill="#dce9e6" />
                        <rect x="30" y="114" width="240" height="48" rx="6" fill="none" stroke="#f59e0b" stroke-width="2.5" />
                        <text x="38" y="129" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="9.5" fill="#26323f">IDESPAAA02311216500420&lt;&lt;&lt;&lt;&lt;</text>
                        <text x="38" y="142" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="9.5" fill="#26323f">5001105M1804179ESP&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</text>
                        <text x="38" y="155" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="9.5" fill="#26323f">ESPANOL&lt;ESPANOL&lt;&lt;JUAN&lt;&lt;&lt;&lt;&lt;</text>
                      </svg>
                      <figcaption>ejemplo · encuadre las 3 líneas del código MRZ</figcaption>
                    </figure>
                  </div>
                </div>

                <!-- datos del huesped -->
                <div ref="datosEl" class="hm-panel">
                  <div class="hm-panel__h">
                    <p class="hm-panel__t">Datos del huésped</p>
                    <p class="hm-panel__d">Deben coincidir exactamente con el documento de identidad.</p>
                  </div>
                  <div class="hm-fields">
                    <div v-for="c in campos" :key="c.k" :data-campo="c.k" :data-err="errores[c.k] ? 'si' : null">
                      <p class="hm-lbl">
                        {{ c.l }}
                        <svg v-if="c.info" class="hm-lbl__i" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 8C119 8 8 119.1 8 256c0 137 111 248 248 248s248-111 248-248C504 119.1 393 8 256 8zm0 110c23.2 0 42 18.8 42 42s-18.8 42-42 42-42-18.8-42-42 18.8-42 42-42zm56 254c0 6.6-5.4 12-12 12h-88c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h12v-64h-12c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h64c6.6 0 12 5.4 12 12v100h12c6.6 0 12 5.4 12 12z" /></svg>
                      </p>

                      <div v-if="c.t === 'genero'" class="hm-gen" :class="{ 'is-nuevo': esNuevo(c.k) }">
                        <span :class="{ on: valor(c) === 'M' }">Masculino</span>
                        <span :class="{ on: valor(c) === 'F' }">Femenino</span>
                        <span :class="{ on: valor(c) === 'X' }">Otro</span>
                      </div>
                      <div
                        v-else
                        class="hm-in"
                        :class="['hm-in--' + c.t, { 'hm-in--ph': !valor(c), 'is-nuevo': esNuevo(c.k) }]"
                      >
                        <span class="hm-in__v">{{ valor(c) || textoVacio(c) }}</span>
                        <svg v-if="c.t === 'lista'" class="hm-in__vs" viewBox="0 0 14 10" aria-hidden="true"><path d="M9.21 7.6l4.48-4.87c.41-.44.41-1.16 0-1.6l-.74-.8a1.02 1.02 0 0 0-1.47 0L7 5.2 2.52.33a1.02 1.02 0 0 0-1.48 0l-.73.8c-.41.44-.41 1.16 0 1.6L4.79 7.6 7 10z" /></svg>
                        <svg v-else-if="c.t === 'select'" class="hm-in__sel" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      </div>

                      <p v-if="c.sinCad" class="hm-sincad"><i class="hm-cb" aria-hidden="true" />Documento sin caducidad</p>
                      <p v-if="errores[c.k]" class="hm-err">{{ errores[c.k] }}</p>
                    </div>
                  </div>
                </div>

                <!-- firma -->
                <div ref="firmaEl" class="hm-panel">
                  <div class="hm-panel__h">
                    <p class="hm-panel__t">Firmar aquí</p>
                    <p class="hm-panel__d">Use el dedo o el ratón para firmar dentro del recuadro.</p>
                  </div>
                  <div
                    ref="lienzoEl"
                    class="hm-sig"
                    :class="{ 'is-pulso': pulsoFirma }"
                    role="button"
                    tabindex="0"
                    aria-label="Panel de firma: firme aquí o pulse para firmar con una firma de ejemplo"
                    @pointerdown="firmaPulsar"
                    @pointermove="firmaMover"
                    @pointerup="firmaSoltar"
                    @pointercancel="firmaSoltar"
                    @keydown.enter.prevent="usuario(firmarSolo)"
                    @keydown.space.prevent="usuario(firmarSolo)"
                  >
                    <svg viewBox="0 0 343 190" aria-hidden="true">
                      <path v-for="(t, i) in trazos" :key="i" :d="t" />
                      <path v-if="trazoVivo" :d="trazoVivo" />
                      <path v-if="firmaAuto" class="hm-sig__auto" :d="FIRMA" pathLength="1" />
                      <path v-if="firmaAuto" class="hm-sig__auto hm-sig__auto--2" :d="FIRMA_RAYA" pathLength="1" />
                    </svg>
                  </div>
                  <div class="hm-sig__acts">
                    <button type="button" class="hm-bm" @click="usuario(deshacer)">Deshacer</button>
                    <button type="button" class="hm-bd" @click="usuario(borrar)">Borrar</button>
                  </div>
                </div>

                <!-- contacto y envio -->
                <div ref="contactoEl" class="hm-panel">
                  <p class="hm-panel__t">Contacto y envío</p>
                  <div class="hm-fields">
                    <div>
                      <p class="hm-lbl">Teléfono</p>
                      <div class="hm-in hm-in--tel">
                        <span class="hm-tel__pref" aria-hidden="true">
                          <svg viewBox="0 0 20 14"><rect width="20" height="14" rx="1.5" fill="#c60b1e" /><rect y="3.5" width="20" height="7" fill="#ffc400" /></svg>
                          <i />
                        </span>
                        <span class="hm-in__v">+34</span>
                      </div>
                    </div>
                    <div>
                      <p class="hm-lbl">Correo electrónico</p>
                      <div class="hm-in"><span class="hm-in__v" /></div>
                    </div>
                  </div>
                  <div :data-err="errores.consent ? 'si' : null">
                    <button ref="aceptoEl" type="button" class="hm-consent" role="checkbox" :aria-checked="acepto ? 'true' : 'false'" @click="usuario(alternarAcepto)">
                      <i class="hm-consent__box" :class="{ on: acepto }" aria-hidden="true">
                        <svg v-if="acepto" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                      </i>
                      <span>He leído la <u class="hm-link">información sobre protección de datos</u>, y acepto las condiciones del servicio.</span>
                    </button>
                    <p v-if="errores.consent" class="hm-err">{{ errores.consent }}</p>
                  </div>
                  <p class="hm-legal">
                    Responsable del tratamiento: {{ A.nombre }}; Finalidad: gestión de su reserva y estancia. Legitimación: ejecución del contrato y cumplimiento de obligaciones legales (registro de viajeros, Real Decreto 933/2021); sus datos se comunicarán al Ministerio del Interior conforme a dicha norma. Derechos: acceso, rectificación, supresión y otros, dirigiéndose al establecimiento. Más información en el enlace superior.
                  </p>
                  <button
                    type="button"
                    class="hm-bp hm-submit"
                    :class="{ 'is-ok': guardado }"
                    :aria-busy="guardando ? 'true' : 'false'"
                    ref="guardarEl"
                    @click="usuario(guardar)"
                  >
                    <template v-if="guardando"><i class="hm-spin" aria-hidden="true" />Guardar huésped</template>
                    <template v-else-if="guardado">
                      <svg class="hm-ico" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>Huésped guardado
                    </template>
                    <template v-else>
                      <svg class="hm-ico" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>Guardar huésped
                    </template>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- ======================= Lista de huespedes de la reserva ======================= -->
          <div v-else class="hm-lpage">
            <div class="hm-lshell">
              <div class="hm-lhero">
                <p class="hm-lhero__t">Auto check-in en {{ A.nombre }}</p>
                <p class="hm-lhero__w">Le esperamos el 9 de octubre de 2026</p>
                <p class="hm-lhero__p">Primero, registre a los huéspedes adultos. Después, registre a los menores de edad seleccionando en cada uno su adulto responsable y el grado de parentesco.</p>
              </div>
              <div class="hm-gstack">
                <template v-for="(g, i) in huespedes" :key="i">
                  <div v-if="g.hecho" class="hm-gcard hm-gcard--done">
                    <svg class="hm-tick" viewBox="0 0 24 24" aria-hidden="true"><path fill="#16a34a" d="M9 16.17 5.53 12.7a1 1 0 0 0-1.41 1.41l4.18 4.18a1 1 0 0 0 1.41 0L20.29 7.71a1 1 0 0 0-1.41-1.41z" /></svg>
                    <span>Huésped {{ i + 1 }}:&nbsp;{{ g.nombre }}</span>
                  </div>
                  <button v-else type="button" class="hm-gcard hm-gcard--pend" @click="usuario(aForm, i)">Introducir datos</button>
                </template>
              </div>
              <p class="hm-note">Abrir la página en un dispositivo táctil para poder firmar.</p>
            </div>
          </div>
        </div>
      </div>

      <span class="hm-ck__foco" aria-hidden="true" />
      <span
        class="hm-ck__ind"
        :class="{ 'is-on': indicador.on }"
        :style="{ top: indicador.top + 'px', height: indicador.alto + 'px' }"
        aria-hidden="true"
      />
      <p v-if="toast" :key="toast.n" class="hm-toast" :class="'hm-toast--' + toast.tipo" role="status">{{ toast.texto }}</p>
      <span v-if="toque" :key="toque.n" class="hm-toque" :style="{ left: toque.x + 'px', top: toque.y + 'px' }" aria-hidden="true" />
      <span class="hm-tag" aria-hidden="true">Datos de ejemplo</span>
    </div>
  </MockPhoneFrame>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  /* hotel, rural o apartamentos: cambia el alojamiento y los huespedes de ejemplo */
  perfil: {
    type: String,
    default: "hotel",
    validator: (v) => ["hotel", "rural", "apartamentos"].includes(v),
  },
  /* foto sin interaccion ni animacion */
  estatico: { type: Boolean, default: false },
  /* se reproduce sola, en bucle, mientras se ve; el primer toque del visitante la para */
  demo: { type: Boolean, default: false },
  /* pantalla con la que empieza: el formulario de un huesped o la lista de la reserva */
  inicio: {
    type: String,
    default: "form",
    validator: (v) => ["form", "lista"].includes(v),
  },
});

const ANCHO = 375; /* ancho del movil de referencia */
const OBLIGATORIO = "Este campo es obligatorio";

const DESCRIPCION =
  "Auto check-in de ejemplo en un móvil: el huésped hace una foto de su documento, revisa los datos que se rellenan solos, firma y guarda.";

/* Huespedes de ejemplo. "mrz" son las lineas de la foto que hace el huesped: tres de 30 en
   el DNI y dos de 44 en el pasaporte. Un pasaporte no trae domicilio: esos campos quedan
   para que los escriba el huesped, como en la app. */
const LUCIA = {
  nombre: "Lucía", ap1: "Ferrer", ap2: "Olmedo", genero: "F", nacimiento: "14/03/1990",
  nacionalidad: "España", residencia: "España", doc: "DNI", numero: "99999999R", soporte: "CAA123456",
  expiracion: "14/03/2031", municipio: "Zaragoza", direccion: "Calle Mayor 12, 3.º B",
  mrz: ["IDESPCAA123456599999999R<<<<<<", "9003141F3103145ESP<<<<<<<<<<<4", "FERRER<OLMEDO<<LUCIA<<<<<<<<<<"],
};
const MARTIN = {
  nombre: "Martín", ap1: "Soler", ap2: "Vidal", genero: "M", nacimiento: "02/11/1987",
  nacionalidad: "España", residencia: "España", doc: "DNI", numero: "71234567W", soporte: "BHK482913",
  expiracion: "02/11/2029", municipio: "Zaragoza", direccion: "Calle Mayor 12, 3.º B",
  mrz: ["IDESPBHK482913771234567W<<<<<<", "8711027M2911024ESP<<<<<<<<<<<2", "SOLER<VIDAL<<MARTIN<<<<<<<<<<<"],
};
const MARTA = {
  nombre: "Marta", ap1: "Lozano", ap2: "Gil", genero: "F", nacimiento: "11/06/1985",
  nacionalidad: "España", residencia: "España", doc: "DNI", numero: "12345678Z", soporte: "BAB654321",
  expiracion: "11/06/2029", municipio: "Logroño", direccion: "Avenida de la Paz 40, 2.º A",
  mrz: ["IDESPBAB654321312345678Z<<<<<<", "8506112F2906117ESP<<<<<<<<<<<6", "LOZANO<GIL<<MARTA<<<<<<<<<<<<<"],
};
const PABLO = {
  nombre: "Pablo", ap1: "Lozano", ap2: "Gil", genero: "M", nacimiento: "23/01/1982",
  nacionalidad: "España", residencia: "España", doc: "DNI", numero: "45678901G", soporte: "CFD310987",
  expiracion: "23/01/2032", municipio: "Logroño", direccion: "Avenida de la Paz 40, 2.º A",
  mrz: ["IDESPCFD310987445678901G<<<<<<", "8201239M3201233ESP<<<<<<<<<<<8", "LOZANO<GIL<<PABLO<<<<<<<<<<<<<"],
};
const EMMA = {
  nombre: "Emma", ap1: "Müller", ap2: "", genero: "F", nacimiento: "22/07/1988",
  nacionalidad: "Alemania", residencia: "Alemania", doc: "Pasaporte", numero: "C01X00T47",
  expiracion: "21/07/2033", municipio: "", cp: "", direccion: "",
  mrz: ["P<D<<MUELLER<<EMMA<<<<<<<<<<<<<<<<<<<<<<<<<<", "C01X00T478D<<8807221F3307212<<<<<<<<<<<<<<<4"],
};
const JONAS = {
  nombre: "Jonas", ap1: "Weber", ap2: "", genero: "M", nacimiento: "05/05/1986",
  nacionalidad: "Alemania", residencia: "Alemania", doc: "Pasaporte", numero: "C5J2K8L1V",
  expiracion: "12/04/2031", municipio: "", cp: "", direccion: "",
  mrz: ["P<D<<WEBER<<JONAS<<<<<<<<<<<<<<<<<<<<<<<<<<", "C5J2K8L1V3D<<8605054M3104127<<<<<<<<<<<<<<<6"],
};

const ALOJAMIENTOS = {
  hotel: {
    nombre: "Hotel Alameda",
    siglas: "ALAMEDA",
    color: "#1e3a5f",
    logo: "hotel",
    mensaje: "Gracias por su reserva. Rellene el formulario antes de llegar y en recepción solo tendrá que recoger la llave.",
    huespedes: [{ ficha: LUCIA }, { ficha: MARTIN }],
  },
  rural: {
    nombre: "Casa rural El Castañar",
    siglas: "EL CASTAÑAR",
    color: "#6b4a26",
    logo: "rural",
    mensaje: "¡Gracias por elegirnos para el puente! Rellenad los datos antes de venir y al llegar solo tendréis que recoger las llaves.",
    huespedes: [{ hecho: true, nombre: "Javier Lozano" }, { ficha: MARTA }, { ficha: PABLO }],
  },
  apartamentos: {
    nombre: "Apartamentos Marina",
    siglas: "MARINA",
    color: "#1d6fa5",
    logo: "mar",
    mensaje: "Gracias por su reserva. Complete el registro antes de llegar y tendremos el apartamento listo a su llegada.",
    huespedes: [{ ficha: EMMA }, { ficha: JONAS }],
  },
};

const A = ALOJAMIENTOS[props.perfil] || ALOJAMIENTOS.hotel;

/* firma de ejemplo, en las coordenadas del recuadro (343 x 190) */
const FIRMA =
  "M84 124C98 98 114 66 118 52C121 42 113 40 108 52C101 70 102 104 112 124C118 136 130 130 136 116C142 102 149 100 151 113C153 126 160 130 168 119C174 110 179 102 185 109C191 116 186 128 195 128C205 128 215 102 224 94C230 89 234 96 229 107C224 120 233 126 244 114C250 107 256 104 262 108";
const FIRMA_RAYA = "M78 146C136 139 196 137 268 128";

const marcoEl = ref(null);
const ckEl = ref(null);
const vistaEl = ref(null);
const fotoEl = ref(null);
const aceptoEl = ref(null);
const guardarEl = ref(null);
const docEl = ref(null);
const prevEl = ref(null);
const datosEl = ref(null);
const firmaEl = ref(null);
const lienzoEl = ref(null);
const contactoEl = ref(null);

/* ---- estado ---- */
function huespedesIniciales() {
  return A.huespedes.map((h) => ({ hecho: !!h.hecho, nombre: h.nombre || "", ficha: h.ficha || null }));
}
const huespedes = ref(huespedesIniciales());
const actual = ref(Math.max(0, huespedes.value.findIndex((h) => !h.hecho)));
const vista = ref(props.inicio === "lista" ? "lista" : "form");
const fase = ref("inicio"); /* inicio | foto | subiendo | leyendo | leido */
const datos = ref(null);
const revelados = ref([]);
const nuevos = ref([]);
const trazos = ref([]);
const trazoVivo = ref("");
const firmaAuto = ref(false);
const acepto = ref(false);
const errores = ref({});
const guardando = ref(false);
const guardado = ref(false);
const toast = ref(null);
const arrastrando = ref(false);
const pulso = ref(false);
const pulsoFirma = ref(false);
const indicador = ref({ on: false, top: 0, alto: 0 });

const ficha = computed(() => {
  const h = huespedes.value[actual.value];
  return (h && h.ficha) || LUCIA;
});
const hayFirma = computed(() => trazos.value.length > 0 || firmaAuto.value);

/* campos del formulario tal y como los pinta la app: sin residencia conocida pide
   municipio y codigo postal a mano; con residencia en Espanna, el municipio es una lista.
   El numero de soporte solo aparece con DNI o NIE */
const campos = computed(() => {
  const d = datos.value;
  const esp = !!d && d.residencia === "España";
  const L = [
    { k: "nombre", l: "Nombre", t: "texto", v: d && d.nombre },
    { k: "ap1", l: "Primer apellido", t: "texto", v: d && d.ap1 },
    { k: "ap2", l: "Segundo apellido", t: "texto", v: d && d.ap2 },
    { k: "genero", l: "Género", t: "genero", v: d && d.genero },
    { k: "nac", l: "Fecha de nacimiento", t: "fecha", v: d && d.nacimiento },
    { k: "nacionalidad", l: "Nacionalidad", t: "lista", v: d && d.nacionalidad },
    { k: "residencia", l: "País de residencia", t: "lista", info: true, v: d && d.residencia },
    { k: "doc", l: "Tipo de documento", t: "select", v: d && d.doc },
    { k: "numero", l: "Número ID", t: "texto", v: d && d.numero },
  ];
  if (d && d.soporte) L.push({ k: "soporte", l: "Número soporte", t: "texto", v: d.soporte });
  L.push({ k: "exp", l: "Fecha expiración", t: "fecha", v: d && d.expiracion, sinCad: true });
  if (esp) {
    L.push({ k: "muni", l: "Municipio", t: "lista", info: true, v: d.municipio });
  } else {
    L.push({ k: "muni", l: "Municipio", t: "texto", v: d && d.municipio });
    L.push({ k: "cp", l: "Código postal", t: "texto", v: d && d.cp });
  }
  L.push({ k: "dir", l: "Dirección", t: "texto", v: d && d.direccion });
  return L;
});

function valor(c) {
  return revelados.value.includes(c.k) ? c.v || "" : "";
}
function esNuevo(k) {
  return nuevos.value.includes(k);
}
function textoVacio(c) {
  if (c.t === "fecha") return "DD/MM/AAAA";
  if (c.t === "select") return "Seleccionar…";
  return "";
}

/* ---- temporizadores: todos pasan por aqui para poder cancelarlos ---- */
let temporizadores = [];
function luego(ms, fn) {
  const id = setTimeout(() => {
    temporizadores = temporizadores.filter((x) => x !== id);
    fn();
  }, ms);
  temporizadores.push(id);
  return id;
}
function cancelarTemporizadores() {
  temporizadores.forEach(clearTimeout);
  temporizadores = [];
}

let reducido = false;

/* ---- desplazamiento: "off" va en px del movil; el contenedor tiene overflow:hidden
   (ni la rueda ni el dedo lo mueven) y se desplaza con scrollTop ---- */
const off = ref(0);
let animacion = 0;

function escala() {
  const v = vistaEl.value;
  return v && v.clientWidth > 0 ? v.clientWidth / ANCHO : 1;
}
function maxOff() {
  const v = vistaEl.value;
  if (!v) return 0;
  return Math.max(0, (v.scrollHeight - v.clientHeight) / escala());
}
function limitar(x) {
  return Math.max(0, Math.min(maxOff(), x));
}
function fijar(x) {
  off.value = limitar(x);
  if (vistaEl.value) vistaEl.value.scrollTop = off.value * escala();
  mostrarIndicador();
}
function alScroll() {
  if (!vistaEl.value) return;
  off.value = vistaEl.value.scrollTop / escala();
  mostrarIndicador();
}
function cancelar() {
  if (animacion) cancelAnimationFrame(animacion);
  animacion = 0;
  siguiendo = false;
}
function irA(destino, ms, fin) {
  cancelar();
  const hasta = limitar(destino);
  if (reducido || !ms) {
    fijar(hasta);
    if (fin) fin();
    return;
  }
  const desde = off.value;
  const t0 = performance.now();
  const paso = (t) => {
    const k = Math.min(1, (t - t0) / ms);
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    fijar(desde + (hasta - desde) * e);
    if (k < 1) animacion = requestAnimationFrame(paso);
    else {
      animacion = 0;
      if (fin) fin();
    }
  };
  animacion = requestAnimationFrame(paso);
}
/* posicion de un elemento dentro de la pagina, en px del movil (inmune a transforms); con
   "abajo", la de su borde inferior */
function posDe(el, abajo) {
  if (!el || !docEl.value) return 0;
  const rd = docEl.value.getBoundingClientRect();
  const k = rd.width / ANCHO || 1;
  const re = el.getBoundingClientRect();
  return ((abajo ? re.bottom : re.top) - rd.top) / k;
}

/* ---- seguir: mientras se rellenan los datos, la vista baja con el campo que se esta
   rellenando. Persigue un destino que avanza a saltos con un muelle sin rebote, asi que
   baja de corrido, sin arrancar y frenar en cada campo. Lo corta cualquier gesto ---- */
let seguirActivo = false;
let siguiendo = false;
let destinoSeguir = 0;
const MUELLE = 14;

function seguirCampo(k) {
  /* con movimiento reducido los datos salen de golpe y no hay nada que seguir */
  if (!seguirActivo || reducido) return;
  const v = vistaEl.value;
  const el = docEl.value && docEl.value.querySelector('[data-campo="' + k + '"]');
  if (!v || !el) return;
  /* el campo queda por encima del borde, con aire para ver que vienen mas */
  const x = limitar(posDe(el, true) + 240 - v.clientHeight / escala());
  if (siguiendo) {
    destinoSeguir = Math.max(destinoSeguir, x);
    return;
  }
  if (x <= off.value + 0.5) return;
  cancelar();
  siguiendo = true;
  destinoSeguir = x;
  let vel = 0;
  let t0 = performance.now();
  const paso = (t) => {
    const dt = Math.max(0, Math.min(0.05, (t - t0) / 1000));
    t0 = t;
    const d = destinoSeguir - off.value;
    vel += (MUELLE * MUELLE * d - 2 * MUELLE * vel) * dt;
    if (Math.abs(d) < 0.5 && Math.abs(vel) < 6) {
      fijar(destinoSeguir);
      animacion = 0;
      siguiendo = false;
      return;
    }
    fijar(off.value + vel * dt);
    animacion = requestAnimationFrame(paso);
  };
  animacion = requestAnimationFrame(paso);
}

let tInd = 0;
function mostrarIndicador() {
  const v = vistaEl.value;
  if (!v) return;
  const total = v.scrollHeight;
  const vis = v.clientHeight;
  if (total <= vis + 1) {
    indicador.value = { on: false, top: 0, alto: 0 };
    return;
  }
  const pista = vis - 8;
  const alto = Math.max(22, (pista * vis) / total);
  const top = 4 + (pista - alto) * (v.scrollTop / (total - vis));
  indicador.value = { on: true, top, alto };
  clearTimeout(tInd);
  tInd = setTimeout(() => {
    indicador.value = { ...indicador.value, on: false };
  }, 900);
}

/* ---- vistazo: al aparecer baja hasta los datos y vuelve, una vez; luego el boton de
   la foto late dos veces. Nunca con movimiento reducido ---- */
let tocado = false;
function tomarControl() {
  tocado = true;
  seguirActivo = false;
  cancelar();
  pulso.value = false;
}
function vistazo() {
  if (tocado) return;
  irA(posDe(datosEl.value) - 8, 1700, () =>
    luego(600, () => {
      if (!tocado) irA(0, 1200, () => {
        if (!tocado) pulso.value = true;
      });
    })
  );
}

/* ---- arrastre con raton o lapiz; el dedo es de la pagina ---- */
let pulsado = null;
let recienArrastrado = false;

function alPulsar(e) {
  if (e.pointerType === "touch") return;
  if (e.button !== undefined && e.button !== 0) return;
  pararDemo(true);
  tomarControl();
  if (e.target && e.target.closest && e.target.closest(".hm-sig")) return;
  e.preventDefault(); /* sin esto, arrastrar selecciona texto */
  const r = vistaEl.value.getBoundingClientRect();
  pulsado = { id: e.pointerId, y: e.clientY, o: off.value, k: r.width / ANCHO || 1, movido: false };
}
function alMover(e) {
  if (!pulsado || e.pointerId !== pulsado.id) return;
  const dy = e.clientY - pulsado.y;
  if (!pulsado.movido) {
    if (Math.abs(dy) < 5) return;
    pulsado.movido = true;
    arrastrando.value = true;
    try {
      vistaEl.value.setPointerCapture(e.pointerId);
    } catch (err) {
      /* sin captura el arrastre sigue funcionando dentro del movil */
    }
  }
  fijar(pulsado.o - dy / pulsado.k);
}
function alSoltar(e) {
  if (!pulsado || e.pointerId !== pulsado.id) return;
  if (pulsado.movido) {
    recienArrastrado = true;
    setTimeout(() => {
      recienArrastrado = false;
    }, 0);
  }
  pulsado = null;
  arrastrando.value = false;
}
/* un arrastre que acaba encima de un boton no lo pulsa */
function alClic(e) {
  if (!recienArrastrado) return;
  e.stopPropagation();
  e.preventDefault();
}

function alTeclear(e) {
  if (e.target !== vistaEl.value) return;
  const vh = vistaEl.value.clientHeight / escala() - 80;
  let d = null;
  if (e.key === "ArrowDown") d = 40;
  else if (e.key === "ArrowUp") d = -40;
  else if (e.key === "PageDown" || (e.key === " " && !e.shiftKey)) d = vh;
  else if (e.key === "PageUp" || (e.key === " " && e.shiftKey)) d = -vh;
  if (e.key === "Home") d = -off.value;
  if (e.key === "End") d = maxOff();
  if (d === null) return;
  e.preventDefault();
  pararDemo(true);
  tomarControl();
  fijar(off.value + d);
}

const manejadores = {
  pointerdown: alPulsar,
  pointermove: alMover,
  pointerup: alSoltar,
  pointercancel: alSoltar,
  clickCapture: alClic,
  keydown: alTeclear,
  scroll: alScroll,
};

/* ---- toast, como los de la app (arriba a la derecha) ---- */
let tToast = 0;
let nToast = 0;
function mostrarToast(tipo, texto) {
  nToast += 1;
  toast.value = { tipo, texto, n: nToast };
  clearTimeout(tToast);
  tToast = setTimeout(() => {
    toast.value = null;
  }, 3200);
}

/* ---- foto del documento ---- */
function escanear() {
  tomarControl();
  if (fase.value === "foto" || fase.value === "subiendo" || fase.value === "leyendo") return;
  fase.value = "foto";
  datos.value = null;
  revelados.value = [];
  nuevos.value = [];
  quitarErrores(["nombre", "ap1", "numero", "doc", "nac", "nacionalidad"]);
  nextTick(() => {
    if (prevEl.value) irA(posDe(prevEl.value) - 150, 600);
  });
  luego(900, leer);
}
function leer() {
  if (fase.value !== "foto") return;
  fase.value = "subiendo";
  luego(600, () => {
    fase.value = "leyendo";
    luego(1000, rellenar);
  });
}
function rellenar() {
  fase.value = "leido";
  datos.value = ficha.value;
  mostrarToast("ok", "Documento leído correctamente");
  nextTick(() => {
    irA(posDe(datosEl.value) - 8, 900, () => {
      const llenos = campos.value.filter((c) => c.v).map((c) => c.k);
      const paso = reducido ? 0 : 150;
      seguirActivo = true;
      llenos.forEach((k, i) =>
        luego(paso * i, () => {
          revelados.value = [...revelados.value, k];
          if (!reducido) nuevos.value = [...nuevos.value, k];
          seguirCampo(k);
        })
      );
      /* con los datos a la vista, baja a la firma */
      luego(paso * llenos.length + 1400, () => {
        seguirActivo = false;
        nuevos.value = [];
        if (!hayFirma.value) irA(posDe(firmaEl.value) - 8, 1400, () => {
          if (!reducido) pulsoFirma.value = true;
        });
      });
    });
  });
}

/* ---- firma ---- */
let dibujando = null;
let tFirma = 0;

function punto(e) {
  const r = lienzoEl.value.getBoundingClientRect();
  return [((e.clientX - r.left) * 343) / r.width, ((e.clientY - r.top) * 190) / r.height];
}
function camino(pts) {
  return "M" + pts.map((p) => p[0].toFixed(1) + " " + p[1].toFixed(1)).join("L");
}
function firmaPulsar(e) {
  if (props.estatico) return;
  e.stopPropagation();
  if (e.button !== undefined && e.button !== 0) return;
  pararDemo(true);
  tomarControl();
  pulsoFirma.value = false;
  clearTimeout(tFirma);
  dibujando = { id: e.pointerId, pts: [punto(e)], movido: false };
  try {
    e.currentTarget.setPointerCapture(e.pointerId);
  } catch (err) {
    /* sin captura se sigue dibujando mientras el puntero este dentro */
  }
}
function firmaMover(e) {
  if (!dibujando || e.pointerId !== dibujando.id) return;
  e.stopPropagation();
  const p = punto(e);
  const u = dibujando.pts[dibujando.pts.length - 1];
  if (Math.hypot(p[0] - u[0], p[1] - u[1]) < 1.5) return;
  dibujando.pts.push(p);
  dibujando.movido = true;
  trazoVivo.value = camino(dibujando.pts);
}
function firmaSoltar(e) {
  if (!dibujando || e.pointerId !== dibujando.id) return;
  e.stopPropagation();
  const d = dibujando;
  dibujando = null;
  trazoVivo.value = "";
  if (d.movido && d.pts.length > 1) {
    trazos.value = [...trazos.value, camino(d.pts)];
    /* si deja de firmar un momento, baja al envio */
    tFirma = luego(1800, trasFirmar);
  } else if (!hayFirma.value) {
    firmarSolo();
  }
}
function firmarSolo() {
  if (hayFirma.value) return;
  tomarControl();
  pulsoFirma.value = false;
  firmaAuto.value = true;
  luego(reducido ? 0 : 1500, trasFirmar);
}
function trasFirmar() {
  if (vista.value === "form" && !guardado.value) irA(posDe(contactoEl.value) - 8, 1200);
}
function deshacer() {
  clearTimeout(tFirma);
  if (trazos.value.length) trazos.value = trazos.value.slice(0, -1);
  else firmaAuto.value = false;
}
function borrar() {
  clearTimeout(tFirma);
  trazos.value = [];
  firmaAuto.value = false;
}

/* ---- aceptacion y guardado: misma validacion que la app ---- */
function quitarErrores(claves) {
  const e = { ...errores.value };
  claves.forEach((k) => delete e[k]);
  errores.value = e;
}
function alternarAcepto() {
  acepto.value = !acepto.value;
  if (acepto.value) quitarErrores(["consent"]);
}
function guardar() {
  tomarControl();
  if (guardando.value || guardado.value) return;
  const e = {};
  if (!datos.value) {
    for (const k of ["nombre", "ap1", "numero", "doc", "nac", "nacionalidad"]) e[k] = OBLIGATORIO;
  }
  if (!acepto.value) e.consent = "Debe confirmar la lectura de la información de protección de datos y aceptar las condiciones";
  errores.value = e;
  if (Object.keys(e).length) {
    nextTick(() => {
      const primero = docEl.value && docEl.value.querySelector("[data-err]");
      if (primero) irA(posDe(primero) - 60, 800);
    });
    return;
  }
  if (!hayFirma.value) {
    mostrarToast("err", "Por favor, firme en el panel de firma");
    irA(posDe(firmaEl.value) - 8, 800);
    return;
  }
  guardando.value = true;
  luego(800, () => {
    guardando.value = false;
    guardado.value = true;
    mostrarToast("ok", "Datos actualizados, ¡gracias por su colaboración! Ya puede cerrar la página");
    const h = ficha.value;
    huespedes.value = huespedes.value.map((g, i) => (i === actual.value ? { ...g, hecho: true, nombre: h.nombre + " " + h.ap1 } : g));
    /* como la app: a los dos segundos vuelve a la lista */
    luego(2000, aLista);
  });
}

/* ---- navegacion entre la lista y el formulario ---- */
function reiniciar() {
  cancelarTemporizadores();
  clearTimeout(tFirma);
  seguirActivo = false;
  fase.value = "inicio";
  datos.value = null;
  revelados.value = [];
  nuevos.value = [];
  trazos.value = [];
  trazoVivo.value = "";
  firmaAuto.value = false;
  acepto.value = false;
  errores.value = {};
  guardando.value = false;
  guardado.value = false;
  pulsoFirma.value = false;
}
function aLista() {
  tomarControl();
  reiniciar();
  vista.value = "lista";
  nextTick(() => fijar(0));
}
function aForm(i) {
  tomarControl();
  reiniciar();
  actual.value = i;
  vista.value = "form";
  nextTick(() => fijar(0));
}

/* ---- lo que hace el visitante: para la demo para siempre y ejecuta la accion ---- */
function usuario(fn, ...args) {
  pararDemo(true);
  fn(...args);
}

/* ---- demo: el check-in completo, solo y en bucle, mientras se ve. Sus esperas van con
   temporizadores propios: reiniciar() cancela los del formulario y no debe cortarla ---- */
const toque = ref(null);
const PARADA = {};
let demoViva = false;
let demoGen = 0;
let demoUsuario = false;
let demoTimers = [];
let nToque = 0;

function pararDemo(delVisitante) {
  if (delVisitante) demoUsuario = true;
  if (!demoViva) return;
  demoViva = false;
  demoGen += 1;
  demoTimers.forEach(clearTimeout);
  demoTimers = [];
  toque.value = null;
}
function espera(ms) {
  const gen = demoGen;
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      demoTimers = demoTimers.filter((x) => x !== id);
      if (demoViva && gen === demoGen) resolve();
      else reject(PARADA);
    }, ms);
    demoTimers.push(id);
  });
}
async function hasta(cond, max) {
  const t0 = performance.now();
  while (!cond()) {
    if (performance.now() - t0 > max) throw PARADA;
    await espera(120);
  }
}
/* el "dedo": un circulo que pulsa en el centro del elemento */
async function pulsar(el) {
  const ck = ckEl.value;
  if (!el || !ck) throw PARADA;
  const rc = ck.getBoundingClientRect();
  const re = el.getBoundingClientRect();
  const k = ck.offsetWidth / (rc.width || 1);
  nToque += 1;
  toque.value = { x: (re.left + re.width / 2 - rc.left) * k, y: (re.top + re.height / 2 - rc.top) * k, n: nToque };
  await espera(520);
  toque.value = null;
}
function reiniciarTodo() {
  reiniciar();
  huespedes.value = huespedesIniciales();
  actual.value = Math.max(0, huespedes.value.findIndex((h) => !h.hecho));
  vista.value = "form";
  toast.value = null;
  nextTick(() => fijar(0));
}
async function correrDemo() {
  if (demoViva || demoUsuario) return;
  demoViva = true;
  demoGen += 1;
  try {
    for (;;) {
      reiniciarTodo();
      await espera(1100);
      await pulsar(fotoEl.value);
      escanear();
      /* foto, lectura, datos y bajada a la firma: el propio formulario avisa al llegar */
      await hasta(() => pulsoFirma.value, 16000);
      await espera(700);
      await pulsar(lienzoEl.value);
      firmarSolo();
      await espera(3000);
      await pulsar(aceptoEl.value);
      alternarAcepto();
      await espera(700);
      await pulsar(guardarEl.value);
      guardar();
      await hasta(() => vista.value === "lista", 8000);
      await espera(3800);
    }
  } catch (e) {
    /* parada: la ha cortado el visitante o el movil ha dejado de verse */
  }
}

let io = null;
let ro = null;

onMounted(() => {
  if (props.estatico) return;
  reducido = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  if ("ResizeObserver" in window) {
    /* al cambiar el tamanno del movil, el mismo punto de la pagina sigue arriba */
    ro = new ResizeObserver(() => {
      if (vistaEl.value) vistaEl.value.scrollTop = off.value * escala();
    });
    if (vistaEl.value) ro.observe(vistaEl.value);
    if (docEl.value) ro.observe(docEl.value);
  }
  if (reducido || !("IntersectionObserver" in window)) return;
  const raiz = marcoEl.value && marcoEl.value.$el;
  if (!raiz) return;
  if (props.demo) {
    /* en marcha solo mientras se ve (tambien se para si la pestanna la oculta) */
    io = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((x) => x.isIntersecting)) correrDemo();
        else pararDemo(false);
      },
      { threshold: 0.5 }
    );
    io.observe(raiz);
    return;
  }
  io = new IntersectionObserver(
    (entradas) => {
      if (entradas.some((x) => x.isIntersecting)) {
        io.disconnect();
        io = null;
        luego(350, vistazo);
      }
    },
    { threshold: 0.6 }
  );
  io.observe(raiz);
});

onBeforeUnmount(() => {
  pararDemo(false);
  if (io) io.disconnect();
  if (ro) ro.disconnect();
  cancelarTemporizadores();
  cancelar();
  clearTimeout(tInd);
  clearTimeout(tToast);
  clearTimeout(tFirma);
});
</script>

<style scoped>
/* ============ Pagina del auto check-in (el movil lo pone MockPhoneFrame) ============ */
.hm-ck {
  /* los colores de la app real, en la paleta de Hospedy (la misma que usa el panel) */
  --c-brand: #0f766e;
  --c-brand-hover: #0b5a54;
  --c-page: #e4ecea;
  --c-shell: #f3f7f6;
  --c-pending: #ccfbf1;
  --c-pending-hover: #99f6e4;
  --c-ink: #26323f;
  --c-muted: #4f5f5c;
  --c-border: #e3ecea;
  --c-border-strong: #d5e2df;
  --c-success: #16a34a;
  --c-danger: #bc475e;
  --c-input-border: #d5e3e0;
  --c-ring: rgba(15, 118, 110, 0.22);

  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  background: var(--c-page);
  color: var(--c-ink);
  font-size: calc(16 * var(--p));
  line-height: 1.5;
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
/* :where() deja la especificidad a cero: las clases de cada elemento mandan */
:where(.hm-ck) p {
  margin: 0;
}
:where(.hm-ck) button {
  font: inherit;
  -webkit-appearance: none;
  appearance: none;
}
.hm-ck.is-foto {
  pointer-events: none;
}

.hm-ck__vista {
  position: absolute;
  inset: 0;
  overflow: hidden;
  cursor: grab;
  touch-action: pan-y;
  outline: none;
}
.hm-ck__vista.is-drag {
  cursor: grabbing;
}
.hm-ck.is-foto .hm-ck__vista {
  cursor: default;
}
/* el anillo de foco va por encima del contenido, que lo taparia */
.hm-ck__foco {
  position: absolute;
  inset: 0;
  z-index: 7;
  pointer-events: none;
}
.hm-ck__vista:focus-visible ~ .hm-ck__foco {
  box-shadow: inset 0 0 0 2px var(--c-brand);
}
.hm-ck__doc {
  position: relative;
  background: var(--c-page);
}

/* indicador de desplazamiento, como el del movil */
.hm-ck__ind {
  position: absolute;
  right: calc(2.5 * var(--p));
  width: calc(3 * var(--p));
  border-radius: calc(3 * var(--p));
  background: rgba(0, 0, 0, 0.35);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 5;
  pointer-events: none;
}
.hm-ck__ind.is-on {
  opacity: 1;
}

/* ============ Barra de la app ============ */
.hm-nav {
  position: relative;
  z-index: 3;
  height: calc(66 * var(--p));
  background: #fff;
  box-shadow: 0 0 calc(8 * var(--p)) calc(2 * var(--p)) rgba(0, 0, 0, 0.08);
}
.hm-nav__marca {
  position: absolute;
  left: calc(21 * var(--p));
  top: calc(13 * var(--p));
  width: calc(38 * var(--p));
  height: calc(40 * var(--p));
}
.hm-nav__logo {
  position: absolute;
  left: calc(166 * var(--p));
  top: calc(8 * var(--p));
  width: calc(44 * var(--p));
  height: calc(50 * var(--p));
}
.hm-nav__lang {
  position: absolute;
  left: calc(231 * var(--p));
  top: calc(14 * var(--p));
  width: calc(120 * var(--p));
  height: calc(38 * var(--p));
  box-sizing: border-box;
  border: 1px solid var(--c-brand);
  border-radius: calc(7 * var(--p));
  background: #fff;
  padding: 0 calc(9 * var(--p)) 0 calc(8 * var(--p));
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(16 * var(--p));
  color: #000;
}
.hm-nav__lang svg {
  width: calc(10 * var(--p));
  height: calc(6 * var(--p));
}

/* ============ Formulario (bajo 640px la app va de borde a borde) ============ */
.hm-page {
  padding-bottom: calc(40 * var(--p));
}
.hm-shell {
  display: flex;
  flex-direction: column;
  gap: calc(16 * var(--p));
  background: var(--c-shell);
  border-top: 1px solid var(--c-border-strong);
  border-bottom: 1px solid var(--c-border-strong);
}
.hm-back {
  align-self: flex-start;
  font-size: calc(14 * var(--p));
  font-weight: 700;
  line-height: calc(21 * var(--p));
  color: var(--c-brand);
  background: none;
  border: 0;
  padding: calc(2 * var(--p)) 0;
  cursor: pointer;
}
.hm-back:hover {
  color: var(--c-brand-hover);
}
.hm-hero {
  background: var(--c-brand);
  padding: calc(20 * var(--p)) calc(18 * var(--p));
  display: flex;
  flex-direction: column;
  gap: calc(8 * var(--p));
}
.hm-hero__t {
  font-size: calc(21 * var(--p));
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: calc(-0.4 * var(--p));
  color: #fff;
}
.hm-hero__p {
  font-size: calc(14.5 * var(--p));
  line-height: 1.55;
  color: #fff;
}
.hm-stack {
  display: flex;
  flex-direction: column;
  gap: calc(16 * var(--p));
}
.hm-panel {
  background: #fff;
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: calc(18 * var(--p)) calc(16 * var(--p));
  display: flex;
  flex-direction: column;
  gap: calc(16 * var(--p));
}
.hm-panel__h {
  display: flex;
  flex-direction: column;
  gap: calc(4 * var(--p));
}
.hm-panel__t {
  font-size: calc(17 * var(--p));
  font-weight: 700;
  line-height: 1.2;
  color: var(--c-ink);
}
.hm-panel__d {
  font-size: calc(14.5 * var(--p));
  line-height: 1.6;
  color: var(--c-muted);
}

/* ---- escaneo ---- */
.hm-scan {
  display: flex;
  flex-direction: column;
  gap: calc(18 * var(--p));
}
.hm-scan__info {
  display: flex;
  flex-direction: column;
  gap: calc(10 * var(--p));
}
.hm-scan__acts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(12 * var(--p));
  margin-top: calc(4 * var(--p));
}
.hm-scan__hint {
  font-size: calc(13 * var(--p));
  line-height: 1.5;
  color: var(--c-muted);
}
.hm-bp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(7 * var(--p));
  font-weight: 700;
  font-size: calc(14.5 * var(--p));
  line-height: 1.5;
  color: #fff;
  background: var(--c-brand);
  border: 0;
  border-radius: calc(10 * var(--p));
  padding: calc(13 * var(--p)) calc(20 * var(--p));
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.hm-bp:hover {
  background: var(--c-brand-hover);
}
.hm-bp:disabled {
  opacity: 0.6;
  cursor: default;
}
.hm-bp:focus-visible,
.hm-bm:focus-visible,
.hm-bd:focus-visible,
.hm-back:focus-visible,
.hm-consent:focus-visible,
.hm-gcard--pend:focus-visible,
.hm-sig:focus-visible {
  outline: 2px solid #0b5a54;
  outline-offset: 2px;
}
.hm-bp.is-pulso {
  animation: hm-pulso 1.1s ease-out 2;
}
@keyframes hm-pulso {
  0% {
    box-shadow: 0 0 0 0 rgba(15, 118, 110, 0.5);
  }
  100% {
    box-shadow: 0 0 0 calc(12 * var(--p)) rgba(15, 118, 110, 0);
  }
}
.hm-ico {
  width: calc(15 * var(--p));
  height: calc(15 * var(--p));
  flex: 0 0 auto;
}
.hm-spin {
  width: calc(14 * var(--p));
  height: calc(14 * var(--p));
  border: calc(2 * var(--p)) solid rgba(255, 255, 255, 0.45);
  border-top-color: #fff;
  border-radius: 50%;
  box-sizing: border-box;
  animation: hm-giro 0.8s linear infinite;
  flex: 0 0 auto;
}
@keyframes hm-giro {
  to {
    transform: rotate(360deg);
  }
}
.hm-prev {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(10 * var(--p));
}
.hm-prev__img {
  display: block;
  width: calc(266 * var(--p));
  height: calc(200 * var(--p));
  border: calc(1.5 * var(--p)) solid var(--c-input-border);
  border-radius: calc(10 * var(--p));
  box-sizing: border-box;
  overflow: hidden;
}
.hm-mrz {
  margin: 0;
}
.hm-mrz svg {
  display: block;
  width: 100%;
  height: auto;
}
.hm-mrz figcaption {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: calc(11.5 * var(--p));
  line-height: 1.5;
  color: var(--c-muted);
  text-align: center;
  padding: calc(10 * var(--p)) calc(12 * var(--p)) 0;
}

/* ---- campos ---- */
.hm-fields {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: calc(21 * var(--p));
}
.hm-lbl {
  display: flex;
  align-items: center;
  font-size: calc(14 * var(--p));
  font-weight: 600;
  line-height: 1.5;
  color: var(--c-ink);
  margin: 0 0 calc(7 * var(--p));
}
.hm-lbl__i {
  width: calc(14 * var(--p));
  height: calc(14 * var(--p));
  margin-left: calc(7 * var(--p));
  color: #6c757d;
}
.hm-in {
  position: relative;
  height: calc(46 * var(--p));
  box-sizing: border-box;
  border: calc(1.5 * var(--p)) solid var(--c-input-border);
  border-radius: calc(10 * var(--p));
  background: #fff;
  padding: 0 calc(14 * var(--p));
  display: flex;
  align-items: center;
  font-size: calc(15 * var(--p));
  color: var(--c-ink);
}
.hm-in__v {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hm-in--ph {
  color: #8a9794;
}
.hm-in--lista {
  padding-right: calc(36 * var(--p));
}
.hm-in--select {
  padding-right: calc(30 * var(--p));
}
.hm-in__vs {
  position: absolute;
  right: calc(12 * var(--p));
  top: 50%;
  width: calc(14 * var(--p));
  height: calc(10 * var(--p));
  margin-top: calc(-5 * var(--p));
  fill: var(--c-brand);
}
.hm-in__sel {
  position: absolute;
  right: calc(10 * var(--p));
  top: 50%;
  width: calc(10 * var(--p));
  height: calc(6 * var(--p));
  margin-top: calc(-3 * var(--p));
  color: #111;
}
.hm-in--select.hm-in--ph {
  color: var(--c-ink);
}
.hm-in--tel {
  padding-left: 0;
}
.hm-tel__pref {
  display: flex;
  align-items: center;
  gap: calc(6 * var(--p));
  height: 100%;
  padding: 0 calc(10 * var(--p)) 0 calc(12 * var(--p));
}
.hm-tel__pref svg {
  width: calc(20 * var(--p));
  height: calc(14 * var(--p));
}
.hm-tel__pref i {
  width: 0;
  height: 0;
  border-left: calc(4 * var(--p)) solid transparent;
  border-right: calc(4 * var(--p)) solid transparent;
  border-top: calc(5 * var(--p)) solid #555;
}
.is-nuevo {
  animation: hm-nuevo 1.3s ease-out both;
}
@keyframes hm-nuevo {
  0% {
    border-color: var(--c-brand);
    box-shadow: 0 0 0 calc(4 * var(--p)) var(--c-ring);
    background-color: #f0fdfa;
  }
  100% {
    border-color: var(--c-input-border);
    box-shadow: 0 0 0 0 rgba(15, 118, 110, 0);
  }
}
.hm-gen {
  display: flex;
  height: calc(46 * var(--p));
  box-sizing: border-box;
  border: calc(1.5 * var(--p)) solid var(--c-input-border);
  border-radius: calc(10 * var(--p));
  overflow: hidden;
  background: #fff;
}
.hm-gen span {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(14 * var(--p));
  font-weight: 600;
  color: var(--c-ink);
}
.hm-gen span + span {
  border-left: calc(1.5 * var(--p)) solid var(--c-input-border);
}
.hm-gen span.on {
  background: var(--c-brand);
  color: #fff;
}
.hm-sincad {
  display: flex;
  align-items: center;
  gap: calc(4 * var(--p));
  margin: calc(4 * var(--p)) 0 0;
  font-size: calc(13.6 * var(--p));
  line-height: 1.5;
  color: var(--c-ink);
}
.hm-cb {
  width: calc(20 * var(--p));
  height: calc(20 * var(--p));
  box-sizing: border-box;
  border: 1px solid #767676;
  border-radius: calc(3 * var(--p));
  background: #fff;
  flex: 0 0 auto;
}
.hm-err {
  margin: calc(4 * var(--p)) 0 0;
  font-size: calc(13.5 * var(--p));
  line-height: 1.4;
  color: #c0392b;
}

/* ---- firma ---- */
.hm-sig {
  position: relative;
  height: calc(190 * var(--p));
  box-sizing: border-box;
  border: calc(1.5 * var(--p)) solid var(--c-input-border);
  border-radius: calc(12 * var(--p));
  background: #f5faf9;
  touch-action: none;
  cursor: crosshair;
}
.hm-sig.is-pulso {
  animation: hm-pulso-caja 1.2s ease-out 2;
}
@keyframes hm-pulso-caja {
  0% {
    box-shadow: 0 0 0 0 rgba(15, 118, 110, 0.45);
  }
  100% {
    box-shadow: 0 0 0 calc(10 * var(--p)) rgba(15, 118, 110, 0);
  }
}
.hm-sig svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.hm-sig path {
  fill: none;
  stroke: #1f2c2a;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.hm-sig__auto {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: hm-firma 1.1s ease-in-out forwards;
}
.hm-sig__auto--2 {
  animation-delay: 1s;
  animation-duration: 0.35s;
}
@keyframes hm-firma {
  to {
    stroke-dashoffset: 0;
  }
}
.hm-sig__acts {
  display: flex;
  justify-content: flex-end;
  gap: calc(10 * var(--p));
}
.hm-bm,
.hm-bd {
  font-weight: 700;
  font-size: calc(14 * var(--p));
  line-height: 1.5;
  border: 0;
  border-radius: calc(10 * var(--p));
  padding: calc(12 * var(--p)) calc(20 * var(--p));
  cursor: pointer;
}
.hm-bm {
  color: var(--c-ink);
  background: #e9f1ef;
}
.hm-bm:hover {
  background: #dce9e6;
}
.hm-bd {
  color: #fff;
  background: var(--c-danger);
}
.hm-bd:hover {
  background: #a53d52;
}

/* ---- contacto y envio ---- */
.hm-consent {
  display: flex;
  align-items: flex-start;
  gap: calc(10 * var(--p));
  width: 100%;
  font-size: calc(14.5 * var(--p));
  line-height: 1.55;
  color: var(--c-ink);
  background: none;
  border: 0;
  padding: 0;
  text-align: left;
  cursor: pointer;
}
.hm-consent__box {
  width: calc(17 * var(--p));
  height: calc(17 * var(--p));
  margin-top: calc(3 * var(--p));
  box-sizing: border-box;
  border: 1px solid #767676;
  border-radius: calc(3 * var(--p));
  background: #fff;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.hm-consent__box.on {
  background: var(--c-brand);
  border-color: var(--c-brand);
}
.hm-consent__box svg {
  width: 70%;
  height: 70%;
}
.hm-link {
  color: var(--c-brand);
  text-decoration: underline;
}
.hm-legal {
  font-size: calc(12.5 * var(--p));
  line-height: 1.6;
  color: var(--c-muted);
  text-align: justify;
}
.hm-submit {
  width: 100%;
  padding: calc(16 * var(--p));
  font-size: calc(16 * var(--p));
}
.hm-submit.is-ok {
  background: var(--c-success);
}
.hm-submit[aria-busy="true"] {
  opacity: 0.6;
}

/* ============ Lista de huespedes ============ */
.hm-lpage {
  padding: calc(16 * var(--p)) calc(16 * var(--p)) calc(40 * var(--p));
}
.hm-lshell {
  background: var(--c-shell);
  border: 1px solid var(--c-border-strong);
  border-radius: calc(14 * var(--p));
  box-shadow: 0 calc(8 * var(--p)) calc(28 * var(--p)) rgba(38, 50, 63, 0.1);
  padding: calc(14 * var(--p));
  display: flex;
  flex-direction: column;
  gap: calc(16 * var(--p));
}
.hm-lhero {
  background: var(--c-brand);
  border-radius: calc(14 * var(--p));
  padding: calc(20 * var(--p)) calc(18 * var(--p));
  display: flex;
  flex-direction: column;
  gap: calc(8 * var(--p));
}
.hm-lhero__t {
  font-size: calc(25 * var(--p));
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: calc(-0.4 * var(--p));
  color: #fff;
  margin: 0 0 calc(4 * var(--p));
}
.hm-lhero__w {
  font-size: calc(14 * var(--p));
  font-weight: 600;
  color: #fff;
}
.hm-lhero__p {
  font-size: calc(14.5 * var(--p));
  line-height: 1.55;
  color: #fff;
}
.hm-gstack {
  display: flex;
  flex-direction: column;
  gap: calc(10 * var(--p));
}
.hm-gcard {
  width: 100%;
  box-sizing: border-box;
  border-radius: calc(14 * var(--p));
  padding: calc(18 * var(--p)) calc(16 * var(--p));
  font-weight: 600;
  font-size: calc(16 * var(--p));
  line-height: 1.5;
  text-align: center;
  color: var(--c-ink);
}
.hm-gcard--pend {
  background: var(--c-pending);
  border: 0;
  box-shadow: 0 1px 2px rgba(38, 50, 63, 0.08);
  cursor: pointer;
}
.hm-gcard--pend:hover {
  background: var(--c-pending-hover);
}
.hm-gcard--done {
  background: #fff;
  border: 1px solid var(--c-border);
  box-shadow: 0 1px 2px rgba(38, 50, 63, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(12 * var(--p));
}
.hm-tick {
  width: calc(24 * var(--p));
  height: calc(24 * var(--p));
  flex: 0 0 auto;
}
.hm-note {
  font-size: calc(13.5 * var(--p));
  line-height: 1.6;
  color: var(--c-muted);
  text-align: center;
  padding: 0 calc(8 * var(--p));
}

/* ============ Encima de la pagina ============ */
.hm-toast {
  position: absolute;
  top: calc(8 * var(--p));
  right: calc(8 * var(--p));
  width: calc(100% - 16 * var(--p));
  max-width: calc(350 * var(--p));
  box-sizing: border-box;
  z-index: 6;
  border: 1px solid #e2dfdd;
  border-radius: calc(7 * var(--p));
  padding: calc(10 * var(--p));
  font-size: calc(17 * var(--p));
  line-height: 1.4;
  text-align: center;
  box-shadow: 0 calc(4 * var(--p)) calc(12 * var(--p)) rgba(0, 0, 0, 0.1);
  opacity: 0.95;
  animation: hm-toast 0.25s ease-out;
}
.hm-toast--ok {
  background: #e6f5e9;
  color: #155724;
}
.hm-toast--err {
  background: #fcedee;
  color: #721c24;
}
@keyframes hm-toast {
  from {
    opacity: 0;
    transform: translateY(calc(-8 * var(--p)));
  }
}
/* el "dedo" de la demo */
.hm-toque {
  position: absolute;
  z-index: 8;
  width: calc(44 * var(--p));
  height: calc(44 * var(--p));
  margin: calc(-22 * var(--p)) 0 0 calc(-22 * var(--p));
  border-radius: 50%;
  background: rgba(38, 50, 63, 0.28);
  box-shadow: 0 0 0 calc(2 * var(--p)) rgba(255, 255, 255, 0.85), 0 calc(3 * var(--p)) calc(10 * var(--p)) rgba(0, 0, 0, 0.25);
  pointer-events: none;
  animation: hm-toque 0.52s ease-out forwards;
}
@keyframes hm-toque {
  0% {
    opacity: 0;
    transform: scale(1.35);
  }
  35% {
    opacity: 1;
    transform: scale(1);
  }
  60% {
    transform: scale(0.82);
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}
.hm-tag {
  position: absolute;
  left: calc(8 * var(--p));
  bottom: calc(10 * var(--p));
  z-index: 6;
  font-size: calc(11 * var(--p));
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #6b7876;
  background: rgba(255, 255, 255, 0.9);
  padding: calc(2 * var(--p)) calc(7 * var(--p));
  border-radius: calc(5 * var(--p));
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .hm-bp,
  .hm-ck__ind {
    transition: none;
  }
  .hm-bp.is-pulso,
  .hm-sig.is-pulso,
  .is-nuevo,
  .hm-toast {
    animation: none;
  }
  .hm-sig__auto {
    animation: none;
    stroke-dashoffset: 0;
  }
  .hm-spin {
    animation-duration: 2.4s;
  }
}
</style>
