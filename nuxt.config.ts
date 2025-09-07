export default defineNuxtConfig({
    typescript: {
      shim: false
    },
      app: {
      head: {
        charset: 'utf-16',
        viewport: 'width=device-width, initial-scale=1, maximum-scale=5.0',
        title: 'Ridid-Gestor de reservas PMS hotel',
        meta: [
          // <meta name="description" content="My amazing site">
          { name: 'description', content: 'Todo en una sola aplicación: Partes de viajeros, PMS con facturación, channel manager, motor de reservas, encuesta del INE y mucho más.' },
          { name: 'msapplication-TileColor', content: '#2667f7' },
          { name: 'theme-color', content: '#ffffff' },
          { name: 'author', content: 'Silatek.SLU' },
          { name: 'publisher', content: 'Silatek.SLU' },
          { name: 'copyright', content: 'Silatek.SLU' },
          { name: 'keywords', content: 'ridid, gestor reservas, PMS, INE, encuesta, partes, viajeros, facturacion,channel manager, motor reservas, escaner, DNI, guardia civil, policia nacional, ertzaintza, hotel, apartamentos, casa rural' },
          { name: 'page-topic', content: 'Software de gestión de reservas' },
          { name: 'robots', content: 'index, follow' },
        ],
        link:[
          {rel:'icon', type:'image/x-icon', href:'/favicon/favicon.ico'},
          {rel:'apple-touch-icon', type:'image/x-icon',sizes:'180x180', href:'/favicon/apple-touch-icon.png'},
          {rel:'icon', type:'image/x-icon',sizes:'32x32', href:'/favicon/favicon-32x32.png'},
          {rel:'icon', type:'image/x-icon',sizes:'16x16', href:'/favicon/favicon-16x16.png'},
          {rel:'mask-icon', color:'#2667f7', href:'/favicon/safari-pinned-tab.svg'},
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
        baseURL: "https://api.ridid.me",
      },
    },
    nitro: {
      preset: 'node-server',
    }    
  })