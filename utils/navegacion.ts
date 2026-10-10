// Mapa de la web: de aquí salen la barra, el pie, las páginas de índice, el sitemap y los datos estructurados.
//
// «actualizado» es la fecha del último cambio de CONTENIDO de la página (el lastmod del sitemap): se cambia al tocar
// lo que dice la página, no al tocar su diseño. Sin clases de Tailwind: utils/ no está en el content de Tailwind.
import { ARTICULOS } from './blog'

export interface PaginaWeb {
  nombre: string
  ruta: string
  // una línea: lo que resuelve la página (menús e índices)
  descripcion?: string
  // AAAA-MM-DD
  actualizado: string
  // false: lleva noindex y no va en el sitemap
  indexar?: boolean
}

export interface GrupoDeFunciones {
  titulo: string
  items: PaginaWeb[]
}

export const PORTADA: PaginaWeb = { nombre: 'Inicio', ruta: '/', actualizado: '2026-10-02' }

export const FUNCIONES: GrupoDeFunciones[] = [
  {
    titulo: 'Gestiona tu alojamiento',
    items: [],
  },
  {
    titulo: 'Cumple la normativa',
    items: [
      {
        nombre: 'Partes de viajeros',
        ruta: '/funciones/partes-viajeros',
        descripcion: 'Se envían solos a la policía, sin entrar en ningún portal',
        actualizado: '2026-09-25',
      },
      {
        nombre: 'Encuestas INE y documentos autonómicos',
        ruta: '/funciones/encuestas-ine',
        descripcion: 'La encuesta de ocupación, al INE con un clic; y los documentos autonómicos',
        actualizado: '2026-09-25',
      },
    ],
  },
  {
    titulo: 'Vende sin intermediarios',
    items: [
      {
        nombre: 'Channel Manager',
        ruta: '/funciones/channel-manager',
        descripcion: 'Precios y disponibilidad de todas tus agencias en un calendario',
        actualizado: '2026-10-03',
      },
      {
        nombre: 'Motor de reservas',
        ruta: '/funciones/motor-reservas',
        descripcion: 'Reservas directas en tu web, sin comisión por reserva',
        actualizado: '2026-09-25',
      },
    ],
  },
]

export const PARA_QUIEN: PaginaWeb[] = [
  { nombre: 'Hoteles y hostales', ruta: '/hoteles', actualizado: '2026-09-25' },
  { nombre: 'Casas rurales', ruta: '/casas-rurales', actualizado: '2026-09-25' },
  { nombre: 'Apartamentos turísticos', ruta: '/apartamentos', actualizado: '2026-09-28' },
]

export const RECURSOS: PaginaWeb[] = [
  { nombre: 'Blog y guías', ruta: '/blog', actualizado: '2026-09-28' },
  { nombre: 'Comparativa de PMS', ruta: '/comparar', actualizado: '2026-10-02' },
  { nombre: 'Preguntas frecuentes', ruta: '/faq', actualizado: '2026-10-02' },
]

export const EMPRESA: PaginaWeb[] = [
  { nombre: 'Precios', ruta: '/precios', actualizado: '2026-10-02' },
  { nombre: 'Ver una demo', ruta: '/demo', actualizado: '2026-09-26' },
  { nombre: 'Programa Amigos', ruta: '/programa-amigos', actualizado: '2026-09-25' },
]

export const LEGAL: PaginaWeb[] = [
  // el domicilio tiene que estar publicado, pero no hace falta que lo recojan los buscadores
  { nombre: 'Aviso legal', ruta: '/aviso_legal', actualizado: '2026-09-24', indexar: false },
  { nombre: 'Privacidad', ruta: '/privacidad', actualizado: '2026-10-04' },
  { nombre: 'Cookies', ruta: '/cookies', actualizado: '2026-09-23' },
  { nombre: 'Encargo del tratamiento', ruta: '/encargo-tratamiento', actualizado: '2026-10-04' },
]

// Solo se indexa con la cuenta de demo activada; mientras tanto la página remite a las otras formas de probar
export const CUENTA_DEMO: PaginaWeb = { nombre: 'Cuenta de demo', ruta: '/cuenta-demo', actualizado: '2026-09-26' }

// Páginas que van en el sitemap, con su fecha de último cambio
export function paginasDelSitemap({ demoLista }: { demoLista: boolean }): { ruta: string, actualizado: string }[] {
  const paginas: PaginaWeb[] = [
    PORTADA,
    ...FUNCIONES.flatMap(grupo => grupo.items),
    ...PARA_QUIEN,
    ...EMPRESA,
    ...RECURSOS,
    ...ARTICULOS.map(articulo => ({ nombre: articulo.titulo, ruta: `/blog/${articulo.slug}`, actualizado: articulo.actualizado })),
    ...(demoLista ? [CUENTA_DEMO] : []),
    ...LEGAL,
  ]
  const vistas = new Set<string>()
  return paginas
    .filter(pagina => pagina.indexar !== false && !vistas.has(pagina.ruta) && vistas.add(pagina.ruta))
    .map(({ ruta, actualizado }) => ({ ruta, actualizado }))
}
