<template>
  <div>
    <Navbar />
    <div class="mt-24 mb-16">
      <!-- Hero -->
      <div class="text-center max-w-4xl mx-auto px-6">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Hospedy vs otros PMS
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Comparamos precios y funcionalidades con los principales PMS del
          mercado. Sin trucos, sin letra pequeña.
        </p>
      </div>

      <!-- Main comparison table -->
      <div class="max-w-6xl mx-auto px-6 mt-12">
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left p-4 border-b border-gray-200 w-1/5">
                  Característica
                </th>
                <th
                  class="text-center p-4 border-b border-gray-200 bg-primary/5 border-l-2 border-r-2 border-primary"
                >
                  <span class="text-primary font-bold text-lg">Hospedy</span>
                </th>
                <th class="text-center p-4 border-b border-gray-200">
                  Cloudbeds
                </th>
                <th class="text-center p-4 border-b border-gray-200">Mews</th>
                <th class="text-center p-4 border-b border-gray-200">
                  Amenitiz
                </th>
                <th class="text-center p-4 border-b border-gray-200">
                  Little Hotelier
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Pricing -->
              <tr class="bg-gray-50">
                <td colspan="6" class="p-4 font-bold text-lg">Precios</td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">
                  Precio base (6 habitaciones)
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary font-bold text-green-600"
                >
                  590€/año
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  ~1.200€/año
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  ~1.800€/año
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  ~600€/año
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  ~1.080€/año
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">
                  Comisión por reserva
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary font-bold text-green-600"
                >
                  0%
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  Variable
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  0.75-1.5%
                </td>
                <td class="p-4 border-b border-gray-100 text-center">0%</td>
                <td class="p-4 border-b border-gray-100 text-center">
                  Variable
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Prueba gratuita</td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary font-bold text-green-600"
                >
                  30 días
                </td>
                <td class="p-4 border-b border-gray-100 text-center">Demo</td>
                <td class="p-4 border-b border-gray-100 text-center">Demo</td>
                <td class="p-4 border-b border-gray-100 text-center">
                  14 días
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  30 días
                </td>
              </tr>

              <!-- Spanish compliance -->
              <tr class="bg-gray-50">
                <td colspan="6" class="p-4 font-bold text-lg">
                  Cumplimiento normativo español
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">
                  Partes de viajeros automáticos
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary"
                >
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-lg text-gray-500"
                >
                  Manual
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">
                  Envío a SES Hospedajes
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary"
                >
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-lg text-gray-500"
                >
                  Manual
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-green-50">
                <td class="p-4 border-b border-gray-100 font-semibold">
                  Envío a Ertzaintza (País Vasco)
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-green-100 border-l-2 border-r-2 border-primary"
                >
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">
                  Encuestas INE automáticas
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary"
                >
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
              </tr>

              <!-- Features -->
              <tr class="bg-gray-50">
                <td colspan="6" class="p-4 font-bold text-lg">
                  Funcionalidades
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Motor de reservas</td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary"
                >
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Channel Manager</td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary text-lg"
                >
                  1-3 OTAs incl.
                </td>
                <td class="p-4 border-b border-gray-100 text-center text-lg">
                  Incluido
                </td>
                <td class="p-4 border-b border-gray-100 text-center text-lg">
                  Incluido
                </td>
                <td class="p-4 border-b border-gray-100 text-center text-lg">
                  Incluido
                </td>
                <td class="p-4 border-b border-gray-100 text-center text-lg">
                  Incluido
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Facturación</td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary"
                >
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Auto check-in</td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary"
                >
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-lg text-gray-500"
                >
                  Addon
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
              </tr>

              <!-- Support -->
              <tr class="bg-gray-50">
                <td colspan="6" class="p-4 font-bold text-lg">Soporte</td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">Soporte en español</td>
                <td
                  class="p-4 border-b text-center bg-primary/5 border-l-2 border-r-2 border-primary"
                >
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-lg text-gray-500"
                >
                  Limitado
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center text-lg text-gray-500"
                >
                  Limitado
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">
                  Soporte por email + videollamada
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary"
                >
                  <svg
                    class="w-6 h-6 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg
                    class="w-6 h-6 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-lg text-gray-500 mt-4">
          * Precios aproximados basados en información pública. Consulta cada
          proveedor para precios actualizados. Febrero 2025.
        </p>
      </div>

      <!-- Spanish competitors -->
      <div class="max-w-5xl mx-auto px-6 mt-20">
        <h2 class="text-3xl font-bold text-center mb-8">Comparativa con PMS españoles</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse bg-white rounded-lg shadow">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left p-4 border-b border-gray-200">PMS</th>
                <th class="text-center p-4 border-b border-gray-200">Precio/año</th>
                <th class="text-center p-4 border-b border-gray-200">Channel Manager</th>
                <th class="text-center p-4 border-b border-gray-200">Partes auto</th>
                <th class="text-center p-4 border-b border-gray-200">Notas</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-primary/5 border-l-2 border-primary">
                <td class="p-4 border-b border-gray-100 font-bold text-primary">Hospedy</td>
                <td class="p-4 border-b border-gray-100 text-center font-bold text-green-600">350-1.290€</td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg class="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg class="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center text-sm text-gray-600">Todo incluido</td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100 font-medium">RuralGest (apts)</td>
                <td class="p-4 border-b border-gray-100 text-center">298€</td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg class="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg class="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center text-sm text-gray-600">20+ años en el mercado</td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100 font-medium">RuralGest (hotel)</td>
                <td class="p-4 border-b border-gray-100 text-center">980€</td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg class="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg class="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center text-sm text-gray-600">Competidor directo</td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100 font-medium">Avaibook</td>
                <td class="p-4 border-b border-gray-100 text-center">204-576€</td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg class="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center text-sm text-gray-500">Limitado</td>
                <td class="p-4 border-b border-gray-100 text-center text-sm text-red-600">+ 2-4% comisiones</td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100 font-medium">HotelManager</td>
                <td class="p-4 border-b border-gray-100 text-center">1.308€</td>
                <td class="p-4 border-b border-gray-100 text-center text-sm text-gray-500">Extra</td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg class="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center text-sm text-gray-600">Más caro</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-green-50 rounded-lg p-6 mt-8">
          <h3 class="font-semibold text-lg mb-3 text-green-800">Ventajas de Hospedy vs competencia española:</h3>
          <ul class="space-y-2 text-green-700">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>40-60% más barato que RuralGest (hoteles) y HotelManager</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>ÚNICO PMS con cumplimiento nativo español (partes SES + INE + regionales)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Sin comisiones en reservas directas (Avaibook cobra 2-4%)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Todo en uno: PMS + Channel Manager + Motor de reservas incluidos</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Key differentiators -->
      <div class="bg-primary/5 py-16 mt-20">
        <div class="max-w-4xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-12">
            Por qué elegir Hospedy
          </h2>
          <div class="grid lg:grid-cols-3 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"
              >
                <svg
                  class="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 class="font-semibold text-lg mb-2">
                Cumplimiento automático
              </h3>
              <p class="text-gray-600">
                Envío automático de partes a SES Hospedajes y Ertzaintza (País
                Vasco).
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"
              >
                <svg
                  class="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="font-semibold text-lg mb-2">Hasta 60% más barato</h3>
              <p class="text-gray-600">
                Desde 350€/año frente a +1.000€/año de la competencia.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"
              >
                <svg
                  class="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  ></path>
                </svg>
              </div>
              <h3 class="font-semibold text-lg mb-2">Soporte humano real</h3>
              <p class="text-gray-600">
                Teléfono, email y WhatsApp con personas reales que hablan
                español.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-20 px-6">
        <h2 class="text-3xl font-bold mb-4">
          ¿Quieres saber cuánto te costaría?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Solicita un presupuesto personalizado sin compromiso.
        </p>
        <NuxtLink class="btn btn-grad" to="/demo"
          >Solicitar presupuesto</NuxtLink
        >
      </div>

      <!-- COMMENTED OUT: Price calculator
            <div class="max-w-4xl mx-auto px-6 mt-20">
                <h2 class="text-3xl font-bold text-center mb-8">Calcula cuanto te ahorras</h2>
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <label class="block text-lg font-medium text-gray-700 mb-2">Numero de habitaciones:</label>
                            <input
                                type="number"
                                v-model="rooms"
                                @input="calculateSavings"
                                class="form-input text-center text-2xl w-32"
                                min="1"
                            >
                        </div>
                        <div class="text-center lg:text-left">
                            <p class="text-gray-600 mb-2">Ahorro anual estimado vs competencia:</p>
                            <p class="text-4xl font-bold text-green-600">{{ savings.toLocaleString() }}€</p>
                        </div>
                    </div>
                    <div class="mt-8 grid lg:grid-cols-3 gap-4 text-center">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-lg text-gray-500">Hospedy</p>
                            <p class="text-xl font-bold text-primary">{{ rididPrice }}€/año</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-lg text-gray-500">Media competencia</p>
                            <p class="text-xl font-bold text-gray-600">{{ competitorPrice.toLocaleString() }}€/año</p>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg">
                            <p class="text-lg text-gray-500">Tu ahorro</p>
                            <p class="text-xl font-bold text-green-600">{{ savings.toLocaleString() }}€/año</p>
                        </div>
                    </div>
                </div>
            </div>
            -->
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Comparativa PMS: Hospedy vs Cloudbeds, Mews, Amenitiz - Hospedy",
  meta: [
    {
      name: "description",
      content:
        "Compara Hospedy con otros PMS como Cloudbeds, Mews, Amenitiz y Little Hotelier. Precios, funcionalidades y cumplimiento normativo español.",
    },
  ],
});

const rooms = ref(6);
const rididPrice = ref(120);
const competitorPrice = ref(1200);
const savings = ref(1080);

function calculateSavings() {
  // Hospedy pricing logic
  const r = rooms.value || 0;
  if (r <= 0) {
    rididPrice.value = 0;
  } else if (r <= 6) {
    rididPrice.value = 120;
  } else if (r <= 10) {
    rididPrice.value = r * 25;
  } else if (r <= 20) {
    rididPrice.value = 250 + (r - 10) * 23;
  } else if (r <= 30) {
    rididPrice.value = 480 + (r - 20) * 21;
  } else if (r <= 40) {
    rididPrice.value = 690 + (r - 30) * 18;
  } else if (r <= 50) {
    rididPrice.value = 870 + (r - 40) * 15;
  } else {
    rididPrice.value = 1020 + (r - 50) * 12;
  }

  // Competitor average estimate (simplified)
  competitorPrice.value = Math.max(1200, r * 150);

  // Calculate savings
  savings.value = Math.max(0, competitorPrice.value - rididPrice.value);
}
</script>
