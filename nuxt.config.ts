export default defineNuxtConfig({
    compatibilityDate: '2025-12-30',
    typescript: {
      shim: false
    },
    site: {
      url: 'https://gethospedy.com',
      name: 'Hospedy',
    },
    app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' },
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1, maximum-scale=5.0',
        htmlAttrs: {
          lang: 'es'
        },
        title: 'Hospedy - Software PMS con partes de viajeros automaticos',
        titleTemplate: '%s | Hospedy',
        meta: [
          { name: 'description', content: 'Software de gestion hotelera con partes de viajeros automaticos a SES Hospedajes y Ertzaintza. Encuestas INE, channel manager y motor de reservas para hoteles, casas rurales y apartamentos.' },
          { name: 'msapplication-TileColor', content: '#0D9488' },
          { name: 'theme-color', content: '#ffffff' },
          { name: 'author', content: 'Hospedy - Silatek, S.L.U.' },
          { name: 'publisher', content: 'Silatek, S.L.U.' },
          { name: 'copyright', content: 'Silatek, S.L.U.' },
          { name: 'keywords', content: 'PMS hotel, software gestion hotelera, partes viajeros automaticos, SES Hospedajes, Ertzaintza, Pais Vasco, encuesta INE, channel manager, motor reservas, casa rural, apartamentos turisticos' },
          { name: 'page-topic', content: 'Software de gestion hotelera' },
          { name: 'robots', content: 'index, follow' },
          // Open Graph
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Hospedy' },
          { property: 'og:locale', content: 'es_ES' },
          { property: 'og:title', content: 'Hospedy - Software PMS con partes de viajeros automaticos' },
          { property: 'og:description', content: 'PMS con envio automatico de partes a SES Hospedajes y Ertzaintza (Pais Vasco). Gestion completa de hoteles, casas rurales y apartamentos.' },
          { property: 'og:image', content: 'https://gethospedy.com/og-image.png' },
          { property: 'og:url', content: 'https://gethospedy.com' },
          // Twitter Card
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Hospedy - Software PMS con partes de viajeros automaticos' },
          { name: 'twitter:description', content: 'PMS con envio automatico de partes a SES Hospedajes y Ertzaintza. Encuestas INE, channel manager y motor de reservas.' },
          { name: 'twitter:image', content: 'https://gethospedy.com/og-image.png' },
        ],
        link:[
          { rel: 'canonical', href: 'https://gethospedy.com' },
          { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
          { rel: 'mask-icon', color: '#0D9488', href: '/favicon/safari-pinned-tab.svg' },
          { rel: 'manifest', href: '/favicon/site.webmanifest' },
        ],
        script: [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Hospedy',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description: 'Software de gestion hotelera con partes de viajeros automaticos a SES Hospedajes y Ertzaintza. Encuestas INE, channel manager y motor de reservas.',
              url: 'https://gethospedy.com',
              author: {
                '@type': 'Organization',
                name: 'Silatek, S.L.U.',
                url: 'https://gethospedy.com'
              },
              // Rango de los planes publicados en /precios (EUR al mes, sin impuestos).
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '35',
                highPrice: '129',
                priceCurrency: 'EUR',
                offerCount: '4'
              }
              // aggregateRating: añadirlo solo con valoraciones reales de clientes que se
              // muestren en la página con su puntuación, y con ratingValue y reviewCount
              // iguales a lo que se ve (guía de Google "Review snippet"). Sin eso, Google
              // puede ignorar todo el marcado de la página.
            })
          }
        ]
      }
    },
    css: [
      '~/assets/css/main.css',
      '@fortawesome/fontawesome-svg-core/styles.css',
      'vue-toastification/dist/index.css'
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    runtimeConfig: {
      public: {
        // API del backend (formularios). Se sobrescribe por entorno con NUXT_PUBLIC_BASE_URL.
        baseURL: "https://api.hospedy.app",
        clarityId: process.env.NUXT_PUBLIC_CLARITY_ID || '',
      },
    },
    nitro: {
      preset: 'node-server',
    }    
  })