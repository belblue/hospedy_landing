// Agencias que la página del Channel Manager enseña a la vista, en este orden: las más habituales en el
// mercado español (lista revisada el 28-09-2026). Van por su id de canal en WuBook, que no cambia; el
// resto sale en el buscador y en «Ver las N agencias».
export const AGENCIAS_DESTACADAS: readonly number[] = [
  // las grandes
  2, 43, 1, 6, 192, 19, 155, 23, 99,
  // grupo eDreams
  163, 164, 165, 166,
  // agencias españolas
  13, 42, 117, 202, 264, 265, 167, 244, 259, 214,
  // bancos de camas y mayoristas
  9, 198, 174, 286, 229, 230, 102, 243,
  // Europa
  11, 3, 39,
  // hostels
  28, 20,
  // con encanto, escapadas y apartamentos
  195, 73, 38, 279, 177, 135,
]

// Cómo escribe cada marca su nombre, cuando el del channel manager no coincide.
const NOMBRES: Readonly<Record<number, string>> = {
  3: 'Hotel.de',
  6: 'Hotels.com',
  9: 'Hotelbeds',
  11: 'HRS',
  13: 'Atrápalo',
  23: 'lastminute.com',
  28: 'Hostelworld',
  38: 'Tablet Hotels',
  73: 'Mr & Mrs Smith',
  102: 'Sunhotels',
  192: 'Vrbo',
  198: 'W2M',
  214: 'Viajes InterRías',
  265: 'Viajes Aramón',
}

export function nombreDeAgencia(canal: number, nombre: string): string {
  return NOMBRES[canal] || nombre
}

// Para buscar sin tildes, mayúsculas, espacios ni puntos: «casas rurales» encuentra CasasRurales.net.
export function normalizarAgencia(texto: string): string {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '')
}
