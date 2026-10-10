export default defineNuxtConfig({
    compatibilityDate: '2025-12-30',
    typescript: {
      shim: false
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
        // Cada página pone su título, descripción, canonical, Open Graph y robots con useSeoPagina, y sus datos
        // estructurados con useEsquema (composables/). Aquí solo lo común a todas.
        title: 'Programa de gestión para alojamientos turísticos',
        titleTemplate: '%s | Hospedy',
        meta: [
          { name: 'msapplication-TileColor', content: '#0D9488' },
          { name: 'theme-color', content: '#ffffff' },
          { name: 'author', content: 'Hospedy - Silatek, S.L.U.' },
          { name: 'publisher', content: 'Silatek, S.L.U.' },
          { name: 'copyright', content: 'Silatek, S.L.U.' },
          // Open Graph y tarjeta de X: la imagen por defecto (una página puede poner la suya)
          { property: 'og:site_name', content: 'Hospedy' },
          { property: 'og:locale', content: 'es_ES' },
          { property: 'og:image', content: 'https://gethospedy.com/og-image.png' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Hospedy: el planning de reservas en un portátil y el auto check-in del huésped en un móvil' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:image', content: 'https://gethospedy.com/og-image.png' },
          { name: 'twitter:image:alt', content: 'Hospedy: el planning de reservas en un portátil y el auto check-in del huésped en un móvil' },
        ],
        link:[
          { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
          { rel: 'mask-icon', color: '#0D9488', href: '/favicon/safari-pinned-tab.svg' },
          { rel: 'manifest', href: '/favicon/site.webmanifest' },
          // qué es Hospedy y sus páginas, para asistentes de IA (llmstxt.org)
          { rel: 'describedby', type: 'text/plain', href: '/llms.txt' },
        ],
      }
    },
    css: [
      '@fontsource-variable/nunito',
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
      // API del PMS de la que sale la lista de agencias del Channel Manager (/api/public/agencias). Solo
      // la usa el servidor de la web: el navegador nunca la llama. Por entorno con NUXT_RIDID_API_BASE;
      // vacía, la web enseña la copia de server/data/agencias-respaldo.json.
      rididApiBase: "",
      public: {
        // App de Hospedy (inicio de sesión y registro). Se sobrescribe por entorno con
        // NUXT_PUBLIC_CLIENT_APP_URL: en dev, el panel de dev; en prod, app.ridid.me hasta que el
        // panel se mude a app.hospedy.app.
        clientAppUrl: "https://app.ridid.me",
        // API del admin panel, que recibe los formularios de la web: contacto y demo asistida
        // (/api/public/solicitudes) y el cuestionario de la cuenta de demo (/api/demo/request). Por
        // entorno con NUXT_PUBLIC_PANEL_API_BASE (en dev, https://rididadminapi.silatek.net); vacía,
        // los formularios no se pueden enviar e invitan a escribir a hola@hospedy.app.
        panelApiBase: "",
        // Sitekey de Cloudflare Turnstile de los formularios, con NUXT_PUBLIC_TURNSTILE_SITE_KEY;
        // vacía, no se pinta el widget y los formularios enseñan el mismo aviso.
        turnstileSiteKey: "",
        // Cuenta de demo bajo demanda: se ofrece con NUXT_PUBLIC_DEMO_ENABLED=true y el panel
        // configurado; si no, sale como "Muy pronto" y /cuenta-demo remite a las otras dos formas
        // de probar.
        demoEnabled: false,
      },
    },
    routeRules: {
      // Cabeceras de seguridad de todas las respuestas, también de los estáticos (hardening, tanda 5.2). Sin
      // X-Frame-Options, cualquier web podía meter la página en un iframe. El «X-Powered-By» lo quita
      // server/plugins/seguridad.ts.
      '/**': {
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'SAMEORIGIN',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
      },
      // atajo del Programa Amigos: solo redirige, nunca se indexa
      '/r/**': { headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
      // la página de contacto de la web anterior
      '/contact': { redirect: { to: '/contacto', statusCode: 301 } },
    },
    nitro: {
      preset: 'node-server',
    }    
  })