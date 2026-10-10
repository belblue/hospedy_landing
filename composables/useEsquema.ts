// Datos estructurados (JSON-LD de schema.org) para buscadores y asistentes de IA. Salen de los mismos datos que pinta
// la página (utils/), para que digan exactamente lo que se ve: un marcado que no coincide con la página lo ignoran.
//
// Organization y WebSite van en todas las páginas (el layout); SoftwareApplication, solo en la portada y en /precios.
import { CONTACTO, DEFINICION, SITIO_URL, urlAbsoluta } from '~/utils/sitio'
import { TODAS_LAS_FUNCIONES } from '~/utils/navegacion'
import { PLANES } from '~/utils/precios'

type Esquema = Record<string, unknown>

const ID_ORGANIZACION = `${SITIO_URL}/#organizacion`
const ID_WEB = `${SITIO_URL}/#web`
const ID_SOFTWARE = `${SITIO_URL}/#software`

// Sin dirección ni teléfono, y sin sameAs: las redes sociales siguen siendo las de la marca anterior
export function esquemaOrganizacion(): Esquema {
  return {
    '@type': 'Organization',
    '@id': ID_ORGANIZACION,
    name: 'Hospedy',
    legalName: 'Silatek, S.L.U.',
    url: `${SITIO_URL}/`,
    logo: { '@type': 'ImageObject', url: `${SITIO_URL}/email/hospedy-logo.png`, width: 520, height: 140 },
    description: DEFINICION,
    email: CONTACTO.email,
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'customer support', email: CONTACTO.email, availableLanguage: ['es'], areaServed: 'ES' },
    ],
  }
}

export function esquemaWeb(): Esquema {
  return {
    '@type': 'WebSite',
    '@id': ID_WEB,
    url: `${SITIO_URL}/`,
    name: 'Hospedy',
    inLanguage: 'es-ES',
    publisher: { '@id': ID_ORGANIZACION },
  }
}

export function esquemaSoftware(): Esquema {
  return {
    '@type': 'SoftwareApplication',
    '@id': ID_SOFTWARE,
    name: 'Hospedy',
    description: DEFINICION,
    url: `${SITIO_URL}/`,
    image: `${SITIO_URL}/og-image.png`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Programa de gestión hotelera (PMS)',
    operatingSystem: 'Web',
    browserRequirements: 'Funciona en el navegador del ordenador, la tableta o el móvil, sin instalar nada',
    inLanguage: 'es-ES',
    publisher: { '@id': ID_ORGANIZACION },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Hoteles, hostales, casas rurales y apartamentos turísticos en España',
    },
    featureList: TODAS_LAS_FUNCIONES.map(funcion => funcion.nombre),
    offers: PLANES.map(plan => ({
      '@type': 'Offer',
      name: `Plan ${plan.nombre}`,
      description: `${plan.unidades}, con todas las funciones`,
      url: `${SITIO_URL}/precios`,
      price: plan.mensual,
      priceCurrency: 'EUR',
      eligibleQuantity: {
        '@type': 'QuantitativeValue',
        minValue: plan.unidadesMinimo,
        ...(plan.unidadesMaximo ? { maxValue: plan.unidadesMaximo } : {}),
        unitText: 'unidades de alojamiento',
      },
      priceSpecification: [
        {
          '@type': 'UnitPriceSpecification',
          price: plan.mensual,
          priceCurrency: 'EUR',
          valueAddedTaxIncluded: false,
          referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
        },
        {
          '@type': 'UnitPriceSpecification',
          price: plan.anual,
          priceCurrency: 'EUR',
          valueAddedTaxIncluded: false,
          referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'ANN' },
        },
      ],
    })),
  }
}

// Una página de la web y de qué trata. En las funciones, de Hospedy: se nombra aquí mismo para que la página se
// entienda sola, sin depender de que el buscador haya leído la portada.
export function esquemaPagina(
  tipo: 'WebPage' | 'ContactPage' | 'AboutPage' | 'CollectionPage',
  pagina: { nombre: string, descripcion: string, ruta: string, sobreHospedy?: boolean },
): Esquema {
  const url = urlAbsoluta(pagina.ruta)
  return {
    '@type': tipo,
    '@id': `${url}#pagina`,
    url,
    name: pagina.nombre,
    description: pagina.descripcion,
    inLanguage: 'es-ES',
    isPartOf: { '@id': ID_WEB },
    ...(pagina.sobreHospedy ? { about: { '@type': 'SoftwareApplication', '@id': ID_SOFTWARE, name: 'Hospedy' } } : {}),
    ...(tipo === 'AboutPage' || tipo === 'ContactPage' ? { mainEntity: { '@id': ID_ORGANIZACION } } : {}),
  }
}

// Migas de pan: de la portada a la página actual
export function esquemaMigas(migas: { nombre: string, ruta: string }[]): Esquema {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: migas.map((miga, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: miga.nombre,
      item: urlAbsoluta(miga.ruta),
    })),
  }
}

// Preguntas y respuestas que se ven en la página, con el mismo texto
export function esquemaPreguntas(preguntas: { pregunta: string, respuesta: string }[]): Esquema {
  return {
    '@type': 'FAQPage',
    mainEntity: preguntas.map(p => ({
      '@type': 'Question',
      name: p.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: p.respuesta },
    })),
  }
}

// Mete un bloque JSON-LD en la cabecera. La clave evita duplicados si la página lo pide dos veces. «<» va escapado:
// un texto con «</script>» no puede cerrar la etiqueta.
export function useEsquema(clave: string, esquema: Esquema) {
  useHead({
    script: [{
      key: `esquema-${clave}`,
      type: 'application/ld+json',
      innerHTML: JSON.stringify({ '@context': 'https://schema.org', ...esquema }).replace(/</g, '\\u003c'),
    }],
  })
}
