// Fechas en español para lo que se enseña en la página (el datetime de <time> va siempre en AAAA-MM o AAAA-MM-DD).

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

// '2026-09-25' o '2026-09' → «septiembre de 2026»
export function mesYAnio(fecha: string): string {
  const [anio, mes] = fecha.split('-')
  return `${MESES[Number(mes) - 1]} de ${anio}`
}
