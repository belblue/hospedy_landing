<template>
  <PaginaFuncion
    clave="cobros"
    nombre="Cobros y depósitos"
    grupo="Vende sin intermediarios"
    h1="Cobra por adelantado, sin perseguir a nadie"
    entradilla="Cobra el total o un depósito con tarjeta cuando el huésped reserva en tu web, o mándale un enlace de pago por email. El dinero va a tu propia cuenta y cada cobro se apunta solo en su reserva."
    :descripcion="DESCRIPCION"
    :secciones="SECCIONES"
    :preguntas="PREGUNTAS"
  />
</template>

<script setup lang="ts">
import type { PreguntaFaq, SeccionFuncion } from '~/utils/contenido'
import { COMISION_COBROS } from '~/utils/precios'

const COMISION = `${String(COMISION_COBROS.porcentaje).replace('.', ',')} % + ${COMISION_COBROS.fijo.toFixed(2).replace('.', ',')} €`

const DESCRIPCION = `Cobra el total o un depósito con tarjeta al reservar en tu motor y envía enlaces de pago por email. ${COMISION} por cobro, IVA incluido, solo si lo usas.`

useSeoPagina({
  titulo: 'Cobros online y depósitos para tu alojamiento',
  descripcion: DESCRIPCION,
})

const SECCIONES: SeccionFuncion[] = [
  {
    titulo: 'Actívalo desde tu panel',
    texto: 'Lo conectas tú, en unos minutos y sin llamar a nadie.',
    puntos: [
      'En tu perfil: «Integraciones», «Pasarela de pagos», «Configurar»',
      'Lees y aceptas las condiciones de cobro',
      'Pulsas «Conectar con Stripe» y completas tu identidad y tu cuenta bancaria',
      'Cuando pone «Conectado y verificado», ya puedes cobrar',
    ],
    nota: 'Necesitas tener en tu perfil el NIF, el nombre o la razón social, la dirección y el email. Una sola conexión vale para todos tus alojamientos, y la cuenta de cobros es tuya.',
  },
  {
    titulo: 'Qué se cobra al reservar',
    texto: 'Eliges qué paga el huésped cuando reserva en tu motor: nada, el total o un depósito del 1 al 99 %. Si no paga a tiempo, la reserva se cancela sola y la habitación vuelve a estar libre.',
  },
  {
    titulo: 'Enlaces de pago',
    texto: 'Pide cualquier importe desde la ficha de la reserva, a partir de 0,50 €: el resto de la estancia, una noche más… Le llega por email, o copias el enlace y se lo mandas tú, y os avisamos a los dos cuando paga. También puede salir solo antes de la llegada, con las comunicaciones automáticas.',
  },
  {
    titulo: 'Todo cuadra solo',
    texto: 'Cada reserva lleva sus cuentas.',
    puntos: [
      'Cada cobro, con su estado, y cada intento fallido, con su motivo («La tarjeta ha caducado»)',
      'La reserva se marca pagada sola cuando está todo cobrado',
      'Si cancelas una reserva, sus cobros pendientes se anulan',
    ],
  },
  {
    titulo: 'Devoluciones con un clic',
    texto: 'Devuelves un cobro desde la propia reserva y el huésped recibe un email que se lo confirma.',
  },
  {
    titulo: 'Una comisión clara',
    texto: 'Solo pagas si cobras, y siempre lo mismo.',
    puntos: [
      `${COMISION} por cobro, IVA incluido, con la comisión de Stripe dentro`,
      'Si devuelves un cobro, la comisión no se devuelve',
      'Si pierdes una disputa con el banco del huésped, 20 € de gestión, IVA incluido',
      'Una factura al mes con todas las comisiones, que ya van descontadas de cada cobro',
      'El dinero llega a tu banco cada lunes',
    ],
    nota: 'El motor de reservas no cobra comisión por reserva: solo pagas la de los cobros con tarjeta, si los usas.',
  },
  {
    titulo: 'Menos reclamaciones',
    texto: 'En el extracto de la tarjeta del huésped aparece el nombre de tu alojamiento: reconoce el cargo y no lo reclama a su banco por error.',
  },
]

const PREGUNTAS: PreguntaFaq[] = [
  {
    pregunta: '¿Cuánto cuesta cobrar con Hospedy?',
    respuesta: `${COMISION} por cobro, IVA incluido, con la comisión de Stripe ya dentro. Solo pagas si cobras: no hay cuota aparte. Las comisiones del mes te llegan en una sola factura y ya están descontadas de cada cobro.`,
  },
  {
    pregunta: '¿Qué pasa si devuelvo un cobro?',
    respuesta: 'El huésped recupera lo que pagó y recibe un email. La comisión de ese cobro no se devuelve.',
  },
  {
    pregunta: '¿Y si el huésped reclama el cargo a su banco?',
    respuesta: 'Es una disputa: te avisamos por email y la respondes desde tu panel de Stripe con la reserva y vuestras comunicaciones. Son poco frecuentes y la mayoría se ganan. Solo si se pierde, el importe vuelve al huésped y se cobran 20 € de gestión, IVA incluido.',
  },
  {
    pregunta: '¿Cuándo llega el dinero a mi cuenta?',
    respuesta: 'Stripe te transfiere el saldo disponible una vez por semana, los lunes.',
  },
  {
    pregunta: '¿Necesito tener una cuenta de Stripe?',
    respuesta: 'No hace falta tenerla de antes: la creas al conectar, en el mismo paso, con tu identidad y tu cuenta bancaria. La cuenta es tuya y sirve para todos tus alojamientos.',
  },
]
</script>
