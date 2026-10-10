<template>
  <PaginaFuncion
    clave="facturacion"
    nombre="Facturación"
    grupo="Gestiona tu alojamiento"
    h1="Facturas sin teclear: salen de la reserva"
    entradilla="La factura de cada reserva se genera con un clic, con la habitación, los extras y la tasa turística ya calculados. Y al final del trimestre, todo en una hoja de cálculo para tu gestoría."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  />
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'

const DESCRIPCION = 'Factura cada reserva con un clic, con extras, IVA y tasa turística calculados, con tu logo y tus series, y descarga el trimestre en Excel. Zenfisk incluido.'

useSeoPagina({
  titulo: 'Facturación para alojamientos turísticos',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'La factura de cada reserva, con un clic',
    texto: 'Desde la ficha de la reserva eliges a quién facturas y pulsas «Generar factura»: sale con todos los datos de la estancia.',
    puntos: [
      'A la agencia, al cliente o a su empresa',
      'Una factura por habitación, si separas la reserva',
      'La marcas como cobrada con su forma de pago: tarjeta, efectivo o transferencia',
      'Si cobras online y está todo pagado, se marca sola',
    ],
  },
  {
    titulo: 'Extras con su IVA',
    texto: 'El parking, el desayuno o la cuna se definen una vez, con su precio y su IVA (0, 4, 10 o 21 %), y se añaden a la reserva al facturar. Los que cambian cada vez, como el bar, sin precio fijo.',
  },
  {
    titulo: 'Tasa turística',
    texto: 'La configuras una sola vez en tu alojamiento, por noche o por estancia, con su importe para adultos y para niños, y Hospedy la aplica al facturar.',
  },
  {
    titulo: 'Series y facturas a mano',
    texto: 'Además de las facturas de las reservas, puedes tener tus propios talonarios, cada uno con su prefijo, su sufijo, su numeración y su inventario de servicios, para facturar lo que no es una estancia.',
  },
  {
    titulo: 'Con tu imagen',
    texto: 'Elige entre tres diseños de factura, sube tu logo y escribe el texto del pie. Vale para todas las facturas de tu alojamiento.',
  },
  {
    titulo: 'El trimestre, en un Excel',
    texto: 'Elige las fechas y descarga el listado de facturas en una hoja de cálculo, con las bases y el IVA, preparado para la declaración trimestral.',
  },
  {
    titulo: 'Y Zenfisk, incluido',
    texto: 'Mientras mantengas tu suscripción de Hospedy, tienes incluido Zenfisk, el programa de facturación y gastos con Verifactu, para el resto de tu negocio.',
  },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿Puedo facturar a la agencia o a una empresa?',
    respuesta: 'Sí. En cada reserva eliges si facturas a la agencia, al cliente o, si la reserva tiene una empresa asociada, a la empresa. Y por separado, a quién cobras.',
  },
  {
    pregunta: '¿Cómo se aplica la tasa turística?',
    respuesta: 'La defines una vez en la ficha de tu alojamiento: si va por noche o por estancia y su importe para adultos y para niños. A partir de ahí, Hospedy la aplica al facturar.',
  },
  {
    pregunta: '¿Cómo saco las facturas del trimestre?',
    respuesta: 'En «Facturación», eliges la fecha de inicio y la de fin y descargas el listado en una hoja de cálculo, con las bases y el IVA. Se lo pasas tal cual a tu gestoría.',
  },
  {
    pregunta: '¿Qué es Zenfisk?',
    respuesta: 'Es un programa de facturación y gastos con Verifactu para el resto de tu negocio. Va incluido mientras mantengas tu suscripción de Hospedy.',
  },
  {
    pregunta: '¿Puedo poner mi logo en las facturas?',
    respuesta: 'Sí. Subes tu logo, eliges uno de los tres diseños y escribes el texto del pie. Se aplica a todas las facturas de ese alojamiento.',
  },
]
</script>
