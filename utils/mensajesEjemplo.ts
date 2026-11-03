// Las conversaciones de ejemplo de la maqueta de Mensajes (MockMensajes): el Hotel Alameda, el mismo de las otras
// maquetas, un viernes 9 de octubre de 2026 a las 11:00, el «hoy» del planning de ejemplo. Lucía Ferrer y Martín Soler
// son los huéspedes del auto check-in de ejemplo. Las fechas van ya escritas como las pinta el panel.
//
// Sin clases de Tailwind: utils/ no está en el content de Tailwind.

export const ALOJAMIENTO_EJEMPLO = 'Hotel Alameda'
export const DIRECCION_ALOJAMIENTO = 'hotel-alameda@guests.hospedy.app'
// el «ahora» de la maqueta, para lo que pase mientras se usa
export const RELOJ_MENSAJES = { dia: '9 oct', h: 11, m: 0 }

export type Entrega = 'enviando' | 'enviado' | 'entregado' | 'no_entregado'

// Lo que se ve en «Ver el correo»: el correo tal como le llegó al huésped
export interface CorreoEjemplo {
  asunto: string
  idioma: 'es' | 'en'
  tipo: 'checkin' | 'resumen' | 'respuesta'
  // llegada y salida como las pone el correo: [día, «viernes», «desde las 15:00»]
  llegada?: [string, string, string]
  salida?: [string, string, string]
}

export interface MensajeEjemplo {
  id: number
  dir: 'in' | 'out'
  cuando: string
  // lo que escribió el huésped, o la respuesta del hotel
  texto?: string
  // lo que salió de Hospedy: el tipo de correo («Check-in online») o, si lo escribió el hotel, «Respuesta»
  titulo?: string
  respuesta?: boolean
  entrega?: Entrega
  motivo?: string
  para?: string
  correo?: CorreoEjemplo
  adjunto?: { nombre: string, tamano: string }
  nuevo?: boolean
  puedeReenviar?: boolean
  reenvioDe?: string
  reenviado?: string
}

export interface HiloEjemplo {
  id: number
  titular: string
  email: string
  localizador: string
  fechas: string
  // en la lista: cuánto hace del último mensaje
  cuando: string
  noLeidos: number
  entregaFallida: boolean
  // espera algo del hotel: cuenta en «Pendientes» y en el número del menú
  esperando: boolean
  zanjada: boolean
  mensajes: MensajeEjemplo[]
  // lo que contesta el huésped a la respuesta del hotel, unos segundos después
  contesta?: string
}

const CHECKIN_LUCIA: CorreoEjemplo = {
  asunto: 'Check-in online · 9–11 oct 2026 · HPDY-1759912846',
  idioma: 'es',
  tipo: 'checkin',
  llegada: ['9 oct 2026', 'viernes', 'desde las 15:00'],
  salida: ['11 oct 2026', 'domingo', 'hasta las 12:00'],
}

const CHECKIN_CARMEN: CorreoEjemplo = {
  asunto: 'Check-in online · 12–15 oct 2026 · HPDY-1759658710',
  idioma: 'es',
  tipo: 'checkin',
  llegada: ['12 oct 2026', 'lunes', 'desde las 15:00'],
  salida: ['15 oct 2026', 'jueves', 'hasta las 12:00'],
}

export function conversacionesDeEjemplo(): HiloEjemplo[] {
  return [
    {
      id: 1,
      titular: 'Lucía Ferrer Olmedo',
      email: 'lucia.ferrer@gmail.com',
      localizador: 'HPDY-1759912846',
      fechas: '9 → 11 oct',
      cuando: 'hace 12 min',
      noLeidos: 1,
      entregaFallida: false,
      esperando: true,
      zanjada: false,
      mensajes: [
        { id: 11, dir: 'out', titulo: 'Check-in online', cuando: '7 oct, 10:02', entrega: 'entregado', para: 'lucia.ferrer@gmail.com', correo: CHECKIN_LUCIA },
        {
          id: 12,
          dir: 'in',
          cuando: '9 oct, 10:48',
          nuevo: true,
          texto: 'Hola, ya hemos hecho el check-in online los dos. Llegaremos tarde, sobre las 23:30, porque salimos de Zaragoza después de trabajar. ¿Habrá alguien en recepción para darnos la llave?',
        },
      ],
      contesta: '¡Genial, muchas gracias! Hasta esta noche.',
    },
    {
      id: 2,
      titular: 'Mark Johnson',
      email: 'mark.johnson@outlook.com',
      localizador: '1759401127',
      fechas: '23 → 26 oct',
      cuando: 'hace 2 h',
      noLeidos: 1,
      entregaFallida: false,
      esperando: true,
      zanjada: false,
      mensajes: [
        {
          id: 21,
          dir: 'out',
          titulo: 'Resumen de la reserva',
          cuando: '5 oct, 17:20',
          entrega: 'entregado',
          para: 'mark.johnson@outlook.com',
          correo: {
            asunto: 'Your booking summary · 23–26 Oct 2026 · 1759401127',
            idioma: 'en',
            tipo: 'resumen',
            llegada: ['23 Oct 2026', 'Friday', 'from 15:00'],
            salida: ['26 Oct 2026', 'Monday', 'by 12:00'],
          },
        },
        {
          id: 22,
          dir: 'in',
          cuando: '9 oct, 08:31',
          nuevo: true,
          texto: 'Hi! Could you please issue the invoice for our stay to my company? I attach the company details. Thanks, Mark',
          adjunto: { nombre: 'company-details.pdf', tamano: '96 KB' },
        },
      ],
      contesta: 'Perfect, thank you very much!',
    },
    {
      id: 3,
      titular: 'Javier Ortega Ruiz',
      email: 'javier.ortega@gmial.com',
      localizador: '1759838203',
      fechas: '16 → 18 oct',
      cuando: 'ayer',
      noLeidos: 0,
      entregaFallida: true,
      esperando: true,
      zanjada: false,
      mensajes: [
        {
          id: 31,
          dir: 'out',
          titulo: 'Resumen de la reserva',
          cuando: '8 oct, 19:05',
          entrega: 'no_entregado',
          motivo: 'la dirección no existe',
          para: 'javier.ortega@gmial.com',
          puedeReenviar: true,
          correo: {
            asunto: 'Resumen de su reserva · 16–18 oct 2026 · 1759838203',
            idioma: 'es',
            tipo: 'resumen',
            llegada: ['16 oct 2026', 'viernes', 'desde las 15:00'],
            salida: ['18 oct 2026', 'domingo', 'hasta las 12:00'],
          },
        },
      ],
    },
    {
      id: 4,
      titular: 'Carmen Ruiz Navarro',
      email: 'carmen.ruiz@yahoo.es',
      localizador: 'HPDY-1759658710',
      fechas: '12 → 15 oct',
      cuando: 'hace 2 días',
      noLeidos: 0,
      entregaFallida: false,
      esperando: false,
      zanjada: false,
      mensajes: [
        { id: 41, dir: 'out', titulo: 'Check-in online', cuando: '6 oct, 12:15', entrega: 'entregado', para: 'carmen.ruiz@yahoo.es', correo: CHECKIN_CARMEN },
        { id: 42, dir: 'in', cuando: '6 oct, 21:14', texto: 'Buenas noches. Viajamos con nuestro hijo de 8 meses: ¿tenéis cuna para la habitación?' },
        {
          id: 43,
          dir: 'out',
          respuesta: true,
          titulo: 'Respuesta',
          cuando: '7 oct, 09:02',
          entrega: 'entregado',
          para: 'carmen.ruiz@yahoo.es',
          texto: 'Hola, Carmen: sí, os dejamos la cuna montada en la habitación, sin coste. ¡Hasta el lunes!',
          correo: { asunto: 'Re: Check-in online · 12–15 oct 2026 · HPDY-1759658710', idioma: 'es', tipo: 'respuesta' },
        },
      ],
    },
    {
      id: 5,
      titular: 'Peter Müller',
      email: 'peter.mueller@web.de',
      localizador: '1758790255',
      fechas: '28 sep → 2 oct',
      cuando: '2 oct',
      noLeidos: 0,
      entregaFallida: false,
      esperando: false,
      zanjada: true,
      mensajes: [
        { id: 51, dir: 'in', cuando: '2 oct, 10:05', texto: 'Thank you for everything, we had a lovely stay. We will be back next summer!' },
        {
          id: 52,
          dir: 'out',
          respuesta: true,
          titulo: 'Respuesta',
          cuando: '2 oct, 12:30',
          entrega: 'entregado',
          para: 'peter.mueller@web.de',
          texto: 'Thank you, Peter! It was a pleasure to have you. See you next summer.',
          correo: { asunto: 'Re: Thank you · 1758790255', idioma: 'en', tipo: 'respuesta' },
        },
      ],
    },
  ]
}
