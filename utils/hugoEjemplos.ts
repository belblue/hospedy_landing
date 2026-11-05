// Conversaciones de ejemplo de Hugo para la maqueta del chat (MockChatHugo). Lo que Hugo y el hotelero se dicen sale del
// manual; las líneas de una propuesta se escriben como las escribe el programa en la tarjeta del panel, con nombres de
// ejemplo. Sin clases de Tailwind: utils/ no está en el content de Tailwind.

export interface EjemploHugo {
  // lo que se dijeron antes de la petición, si el ejemplo es una conversación
  antes?: { hugo?: boolean, texto: string }[]
  peticion: string
  respuesta: string
  // los pasos de la propuesta, en orden; sin pasos, la respuesta va sin tarjeta
  pasos: string[]
  descripcion: string
}

// La IA junto a la normativa: el móvil de la primera pantalla de la portada. El hotelero solo pregunta por qué ha fallado;
// Hugo da con el motivo, de los que pasan de verdad (un huésped con DNI dado de alta a mano sin su segundo apellido,
// obligatorio con DNI), le pide el dato que falta y prepara el resto
export const HUGO_PARTE_RECHAZADO: EjemploHugo = {
  antes: [
    { texto: '¿Por qué ha fallado el parte de Luis Gómez?' },
    { hugo: true, texto: 'Le falta el segundo apellido, obligatorio con DNI: en su ficha solo pone Gómez. ¿Cuál es?' },
  ],
  peticion: 'Martín',
  respuesta: 'Te preparo los dos pasos; revísalos y dime si los aplico.',
  pasos: [
    '1. Corregir en el huésped Luis Gómez (reserva 4385): segundo apellido - → Martín',
    '2. Volver a enviar al registro de viajeros el parte de Luis Gómez Martín (el sistema lo reenvía en unos minutos)',
  ],
  descripcion: 'Ejemplo del chat de Hugo: le preguntas por qué ha fallado el parte de Luis Gómez, ve que le falta el segundo apellido, obligatorio con DNI, y te lo pide; se lo dices y te prepara dos pasos, añadirlo y volver a enviar el parte, para que los confirmes con «Sí, aplicar».',
}

export const HUGO_MOVER_RESERVA: EjemploHugo = {
  peticion: 'Pasa la reserva de los Wilson a la 102',
  respuesta: 'La 102 está libre esas dos noches. Te preparo el cambio; revísalo y dime si lo aplico.',
  pasos: ['Mover la reserva 4471 (Marta Wilson, 10/11-12/11) de la 101 a la 102'],
  descripcion: 'Ejemplo del chat de Hugo: le pides pasar la reserva de los Wilson a la habitación 102, comprueba que está libre y te enseña el cambio para que lo confirmes con «Sí, aplicar».',
}

export const HUGO_PENDIENTES: EjemploHugo = {
  peticion: '¿Qué tengo pendiente hoy?',
  respuesta: 'Hoy tienes esto:\n• Una reserva de Booking sin habitación (Ana Ruiz, del 12 al 14)\n• El parte de Luis Gómez, rechazado por el registro\n• Dos salidas con el cobro pendiente\n• Tres mensajes de huéspedes sin contestar\n\nPuedo prepararte la colocación de la reserva y la corrección del parte. ¿Empiezo?',
  pasos: [],
  descripcion: 'Ejemplo del chat de Hugo: le preguntas qué tienes pendiente hoy y te lo cuenta por apartados, una reserva sin habitación, un parte rechazado, dos cobros de salidas y tres mensajes sin contestar, y se ofrece a preparar lo que puede arreglar él.',
}
