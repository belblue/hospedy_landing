// Planes y precios de Hospedy: de aquí salen /precios, el resumen de la portada y los datos estructurados. Importes
// en euros y sin IVA, salvo la comisión de los cobros, que lo lleva incluido.

export interface Plan {
  nombre: string
  // '1-3 unidades'
  unidades: string
  unidadesMinimo: number
  // null: sin máximo
  unidadesMaximo: number | null
  mensual: number
  anual: number
  otasIncluidas: number
  // alta de cada agencia que pase de las incluidas
  altaOtaExtra: number
  recomendado?: boolean
  soportePrioritario?: boolean
  onboardingDedicado?: boolean
}

export const PLANES: Plan[] = [
  { nombre: 'Esencial', unidades: '1-3 unidades', unidadesMinimo: 1, unidadesMaximo: 3, mensual: 35, anual: 350, otasIncluidas: 1, altaOtaExtra: 79 },
  { nombre: 'Profesional', unidades: '4-10 unidades', unidadesMinimo: 4, unidadesMaximo: 10, mensual: 59, anual: 590, otasIncluidas: 2, altaOtaExtra: 49, recomendado: true },
  { nombre: 'Business', unidades: '11-25 unidades', unidadesMinimo: 11, unidadesMaximo: 25, mensual: 89, anual: 890, otasIncluidas: 3, altaOtaExtra: 29 },
  { nombre: 'Enterprise', unidades: '26+ unidades', unidadesMinimo: 26, unidadesMaximo: null, mensual: 129, anual: 1290, otasIncluidas: 5, altaOtaExtra: 29, soportePrioritario: true, onboardingDedicado: true },
]

// Cuota mensual de cada agencia que pase de las incluidas en el plan
export const CUOTA_OTA_EXTRA = 10

// Días de prueba gratis al registrarse
export const DIAS_DE_PRUEBA = 30

// Comisión de los cobros online (solo si se usan), IVA incluido y con la de Stripe dentro
export const COMISION_COBROS = { porcentaje: 3.9, fijo: 0.4 }
