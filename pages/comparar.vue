<template>
  <div>
    <div class="pt-24">
      <div class="max-w-6xl mx-auto px-6">
        <MigasDePan :migas="[{ nombre: 'Comparativa de PMS', ruta: '/comparar' }]" />
      </div>
      <!-- Hero -->
      <div class="text-center max-w-4xl mx-auto px-6 mt-8">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Hospedy vs otros PMS
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Comparamos precios y funcionalidades con los principales PMS del
          mercado. Sin trucos, sin letra pequeña.
        </p>
      </div>

      <!-- Main comparison table. El aviso, encima: los precios de otros son una referencia -->
      <div class="max-w-6xl mx-auto px-6 mt-12">
        <p class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-lg text-amber-900 mb-6">
          <svg class="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Precios de referencia aproximados, tomados de información pública en febrero de 2025. Pueden haber cambiado: consulta a cada proveedor.</span>
        </p>
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
                  Precio base, 6 habitaciones
                  <span class="block text-sm text-gray-500">referencia aproximada</span>
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary font-bold text-green-600"
                >
                  590&nbsp;€/año
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  ~1.200&nbsp;€/año
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  ~1.800&nbsp;€/año
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  ~600&nbsp;€/año
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  ~1.080&nbsp;€/año
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100">
                  Comisión por reserva
                </td>
                <td
                  class="p-4 border-b border-gray-100 text-center bg-primary/5 border-l-2 border-r-2 border-primary font-bold text-green-600"
                >
                  0&nbsp;%
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  Variable
                </td>
                <td class="p-4 border-b border-gray-100 text-center">
                  0,75-1,5&nbsp;%
                </td>
                <td class="p-4 border-b border-gray-100 text-center">0&nbsp;%</td>
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
                  1-5 OTAs incl.
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
      </div>

      <!-- Spanish competitors -->
      <div class="max-w-5xl mx-auto px-6 mt-20">
        <h2 class="text-3xl font-bold text-center mb-8">Comparativa con PMS españoles</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse bg-white rounded-lg shadow">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left p-4 border-b border-gray-200">PMS</th>
                <th class="text-center p-4 border-b border-gray-200">Precio/año <span class="block text-sm font-normal text-gray-500">referencia aproximada</span></th>
                <th class="text-center p-4 border-b border-gray-200">Channel Manager</th>
                <th class="text-center p-4 border-b border-gray-200">Partes auto</th>
                <th class="text-center p-4 border-b border-gray-200">Notas</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-primary/5 border-l-2 border-primary">
                <td class="p-4 border-b border-gray-100 font-bold text-primary">Hospedy</td>
                <td class="p-4 border-b border-gray-100 text-center font-bold text-green-600">350-1.290&nbsp;€</td>
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
                <td class="p-4 border-b border-gray-100 text-center text-sm text-gray-600">Todas las funciones</td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100 font-medium">RuralGest (apts)</td>
                <td class="p-4 border-b border-gray-100 text-center">298&nbsp;€</td>
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
                <td class="p-4 border-b border-gray-100 text-center">980&nbsp;€</td>
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
                <td class="p-4 border-b border-gray-100 text-center">204-576&nbsp;€</td>
                <td class="p-4 border-b border-gray-100 text-center">
                  <svg class="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="p-4 border-b border-gray-100 text-center text-sm text-gray-500">Limitado</td>
                <td class="p-4 border-b border-gray-100 text-center text-sm text-red-600">+ 2-4&nbsp;% comisiones</td>
              </tr>
              <tr>
                <td class="p-4 border-b border-gray-100 font-medium">HotelManager</td>
                <td class="p-4 border-b border-gray-100 text-center">1.308&nbsp;€</td>
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
              <IconoMarca tipo="si" class="mt-1" />
              <span>40-60&nbsp;% más barato que RuralGest (hoteles) y HotelManager</span>
            </li>
            <li class="flex items-start gap-2">
              <IconoMarca tipo="si" class="mt-1" />
              <span>Cumplimiento español de serie: partes a SES Hospedajes y Ertzaintza, encuestas del INE y documentos autonómicos</span>
            </li>
            <li class="flex items-start gap-2">
              <IconoMarca tipo="si" class="mt-1" />
              <span>Sin comisión por reserva en las reservas directas (Avaibook cobra un 2-4&nbsp;%)</span>
            </li>
            <li class="flex items-start gap-2">
              <IconoMarca tipo="si" class="mt-1" />
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
          <div class="grid md:grid-cols-2 gap-8">
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
              <h3 class="font-semibold text-lg mb-2">Hasta 60&nbsp;% más barato</h3>
              <p class="text-gray-600">
                Desde 350&nbsp;€/año frente a +1.000&nbsp;€/año de la competencia.
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
                Email y videollamada, con personas reales que hablan español.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"
              >
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-lg mb-2">Todas las funciones en todos los planes</h3>
              <p class="text-gray-600">
                No escondemos herramientas para los alojamientos pequeños ni cobramos cada función por separado.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Más comparativas, en el blog -->
      <section class="max-w-5xl mx-auto px-6 mt-20" aria-labelledby="titulo-mas-comparativas">
        <h2 id="titulo-mas-comparativas" class="text-3xl font-bold text-center mb-8">Más comparativas</h2>
        <ul class="grid md:grid-cols-3 gap-6">
          <li v-for="articulo in COMPARATIVAS" :key="articulo.slug">
            <NuxtLink :to="`/blog/${articulo.slug}`" class="group block h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
              <span class="font-semibold text-gray-900 group-hover:text-secondary">{{ articulo.titulo }}</span>
              <span class="block text-gray-600 mt-2">{{ articulo.extracto }}</span>
            </NuxtLink>
          </li>
        </ul>
        <p class="text-center mt-8">
          <NuxtLink to="/precios" class="btn btn-principal sm:flex-none inline-block px-8 py-3 font-semibold">Ver los precios de Hospedy</NuxtLink>
        </p>
      </section>

      <CtaFinal />

    </div>
  </div>
</template>

<script setup lang="ts">
import { ARTICULOS } from '~/utils/blog'

useSeoPagina({
    titulo: 'Comparativa de PMS para alojamientos en España',
    descripcion: 'Hospedy frente a Cloudbeds, Mews, Amenitiz y Little Hotelier: precios de referencia, funciones y cumplimiento de la normativa española.',
})

// los artículos del blog que comparan PMS
const COMPARATIVAS = ['mejores-pms-casas-rurales', 'hospedy-vs-ruralgest', 'cuanto-cuesta-pms-hotel']
  .map(slug => ARTICULOS.find(articulo => articulo.slug === slug))
  .filter((articulo): articulo is NonNullable<typeof articulo> => Boolean(articulo))
</script>
