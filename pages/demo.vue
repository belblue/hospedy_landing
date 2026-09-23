<template>
    <div>
        <Navbar />
        <div class="mt-24 mb-16">
            <!-- Hero Section -->
            <div class="text-center max-w-3xl mx-auto px-6">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Descubre Hospedy en una demo personalizada
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Te mostramos cómo automatizar el cumplimiento normativo y simplificar la gestión de tu alojamiento en solo 20 minutos.
                </p>
            </div>

            <!-- Form Section -->
            <div class="max-w-4xl mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-12">
                    <!-- Left: Benefits -->
                    <div class="space-y-6">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-6">En la demo verás:</h2>

                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">Partes de viajeros automáticos</h3>
                                <p class="text-gray-600">Cómo se envían solos a SES Hospedajes sin que tengas que hacer nada.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">Encuestas INE generadas solas</h3>
                                <p class="text-gray-600">Olvídate del papeleo mensual, Hospedy lo hace por ti.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">Gestión de reservas simplificada</h3>
                                <p class="text-gray-600">Un calendario visual donde todo está bajo control.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">Facturación automática</h3>
                                <p class="text-gray-600">Las facturas se generan solas cuando cierras una reserva.</p>
                            </div>
                        </div>

                        <!-- Trust indicators -->
                        <div class="pt-6 border-t border-gray-200 mt-8">
                            <p class="text-lg text-gray-500 mb-3">Sin compromiso. Sin tarjeta de crédito.</p>
                            <div class="flex items-center gap-4">
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-lg text-gray-600">20 min</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-lg text-gray-600">Personalizada</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-lg text-gray-600">En español</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Form -->
                    <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h2 class="text-xl font-semibold text-gray-900 mb-6">Solicita tu demo gratuita</h2>

                        <div v-if="!formSent" class="space-y-4">
                            <div>
                                <label class="block text-lg font-medium text-gray-700 mb-1">Nombre *</label>
                                <input type="text" v-model="name" class="form-input" placeholder="Tu nombre">
                            </div>

                            <div>
                                <label class="block text-lg font-medium text-gray-700 mb-1">Email *</label>
                                <input type="email" v-model="email" class="form-input" placeholder="tu@email.com">
                            </div>

                            <div>
                                <label class="block text-lg font-medium text-gray-700 mb-1">Nombre del alojamiento *</label>
                                <input type="text" v-model="propertyName" class="form-input" placeholder="Hotel, casa rural, apartamentos...">
                            </div>

                            <div>
                                <label class="block text-lg font-medium text-gray-700 mb-1">Número de unidades de alojamiento</label>
                                <select v-model="propertyCount" class="form-input">
                                    <option value="">Selecciona...</option>
                                    <option value="1-5">1-5 habitaciones/apartamentos</option>
                                    <option value="6-10">6-10 habitaciones/apartamentos</option>
                                    <option value="11-20">11-20 habitaciones/apartamentos</option>
                                    <option value="21-50">21-50 habitaciones/apartamentos</option>
                                    <option value="50+">Más de 50</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-lg font-medium text-gray-700 mb-1">Teléfono (opcional)</label>
                                <input type="tel" v-model="phone" class="form-input" placeholder="+34 600 000 000">
                            </div>

                            <div>
                                <label class="block text-lg font-medium text-gray-700 mb-1">Mensaje (opcional)</label>
                                <textarea v-model="message" rows="3" class="form-input" placeholder="Cuéntanos qué te gustaría ver en la demo..."></textarea>
                            </div>

                            <div class="flex items-start gap-2">
                                <input type="checkbox" v-model="quiereNovedades" class="checkbox mt-1" id="novedades">
                                <label for="novedades" class="text-lg text-gray-600">
                                    Quiero recibir por email novedades de Hospedy (puedo darme de baja cuando quiera).
                                </label>
                            </div>

                            <div ref="turnstileEl" class="flex justify-center"></div>
                            <p v-if="captchaError" class="text-red-600">
                                No se ha podido cargar la verificación antispam. Recarga la página e inténtalo de nuevo.
                            </p>

                            <button
                                :disabled="sending"
                                class="w-full btn btn-grad py-3 text-lg"
                                @click="submitForm"
                            >
                                {{ sending ? 'Enviando...' : 'Solicitar demo gratuita' }}
                            </button>

                            <p class="text-sm text-gray-500">
                                Responsable: Silatek, S.L.U. (Hospedy). Finalidad: organizar la demostración que solicitas y contactarte para ello. Legitimación: medidas precontractuales a petición tuya. Destinatarios: los proveedores de red, seguridad y correo que los tratan por nuestra cuenta; no cedemos tus datos salvo obligación legal. Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad en hola@hospedy.app; puedes reclamar ante la APDA o la AEPD. Más información en la <NuxtLink to="/privacidad" class="text-primary hover:underline">política de privacidad</NuxtLink>. Este formulario usa Cloudflare Turnstile contra el spam.
                            </p>
                        </div>

                        <!-- Success Message -->
                        <div v-else class="text-center py-8">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Solicitud enviada</h3>
                            <p class="text-gray-600">Nos pondremos en contacto contigo pronto para programar tu demo personalizada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { useToast, POSITION, TYPE } from 'vue-toastification/dist/index.mjs'

const config = useRuntimeConfig()
const baseURL = config.public.baseURL
const toast = useToast()

const name = ref('')
const email = ref('')
const propertyName = ref('')
const propertyCount = ref('')
const phone = ref('')
const message = ref('')
const quiereNovedades = ref(false)
const sending = ref(false)
const formSent = ref(false)
const turnstileEl = ref<HTMLElement | null>(null)
const { token: captchaToken, error: captchaError, render: renderCaptcha, reset: resetCaptcha } = useTurnstile('contact')

onMounted(() => {
    if (turnstileEl.value) renderCaptcha(turnstileEl.value)
})

async function submitForm() {
    if (!captchaToken.value) {
        toast("Espera a que termine la comprobación antispam e inténtalo de nuevo", {
            position: POSITION.TOP_CENTER,
            type: TYPE.ERROR,
            timeout: 3000
        })
        return
    }

    if (!name.value || !email.value || !propertyName.value) {
        toast("Por favor completa los campos obligatorios", {
            position: POSITION.TOP_CENTER,
            type: TYPE.ERROR,
            timeout: 3000
        })
        return
    }

    sending.value = true

    // El backend responde 200 también en los errores, con resultado "Error" y un mensaje.
    let mensajeError = ''
    try {
        const demoMessage = `
SOLICITUD DE DEMO
-----------------
Nombre: ${name.value}
Email: ${email.value}
Alojamiento: ${propertyName.value}
Unidades: ${propertyCount.value || 'No especificado'}
Teléfono: ${phone.value || 'No especificado'}
Quiere recibir novedades por email: ${quiereNovedades.value ? 'sí' : 'no'}

Mensaje: ${message.value || 'Sin mensaje adicional'}
        `.trim()

        const resp: any = await $fetch(`${baseURL}/api/contact/send_message`, {
            method: 'post',
            body: {
                contact_email: email.value,
                name: name.value,
                message: demoMessage,
                captcha_token: captchaToken.value
            }
        })
        if (resp && resp.resultado === 'Error') {
            mensajeError = resp.mensaje || ''
            throw new Error('backend')
        }

        formSent.value = true
        toast("Solicitud enviada correctamente", {
            position: POSITION.TOP_CENTER,
            type: TYPE.SUCCESS,
            timeout: 3000
        })
    } catch (e) {
        console.error('Error sending demo request:', e)
        toast(mensajeError || "Error al enviar la solicitud. Inténtalo de nuevo.", {
            position: POSITION.TOP_CENTER,
            type: TYPE.ERROR,
            timeout: 3000
        })
        // El token es de un solo uso: si el envío falla, hay que reponer el widget.
        resetCaptcha()
    } finally {
        sending.value = false
    }
}
</script>
