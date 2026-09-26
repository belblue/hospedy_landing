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

                    <!-- Right: Form. Llega a la Bandeja del admin panel (useSolicitudWeb) -->
                    <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h2 class="text-xl font-semibold text-gray-900 mb-6">Solicita tu demo gratuita</h2>

                        <div v-if="!formSent" class="space-y-4">
                            <div>
                                <label for="asistida-nombre" class="block text-lg font-medium text-gray-700 mb-1">Nombre *</label>
                                <input id="asistida-nombre" v-model="name" type="text" maxlength="100" autocomplete="name" class="form-input" placeholder="Tu nombre">
                            </div>

                            <div>
                                <label for="asistida-email" class="block text-lg font-medium text-gray-700 mb-1">Email *</label>
                                <input id="asistida-email" v-model="email" type="email" maxlength="254" autocomplete="email" class="form-input" placeholder="tu@email.com">
                            </div>

                            <div>
                                <label for="asistida-alojamiento" class="block text-lg font-medium text-gray-700 mb-1">Nombre del alojamiento *</label>
                                <input id="asistida-alojamiento" v-model="propertyName" type="text" maxlength="150" autocomplete="organization" class="form-input" placeholder="Hotel, casa rural, apartamentos...">
                            </div>

                            <div>
                                <label for="asistida-unidades" class="block text-lg font-medium text-gray-700 mb-1">Número de unidades de alojamiento</label>
                                <!-- Los valores van tal cual al panel, que admite hasta 10 caracteres -->
                                <select id="asistida-unidades" v-model="propertyCount" class="form-input">
                                    <option value="">Selecciona...</option>
                                    <option value="1-5">1-5 habitaciones/apartamentos</option>
                                    <option value="6-10">6-10 habitaciones/apartamentos</option>
                                    <option value="11-20">11-20 habitaciones/apartamentos</option>
                                    <option value="21-50">21-50 habitaciones/apartamentos</option>
                                    <option value="50+">Más de 50</option>
                                </select>
                            </div>

                            <div>
                                <label for="asistida-telefono" class="block text-lg font-medium text-gray-700 mb-1">Teléfono (opcional)</label>
                                <input id="asistida-telefono" v-model="phone" type="tel" maxlength="30" autocomplete="tel" class="form-input" placeholder="+34 600 000 000">
                            </div>

                            <div>
                                <label for="asistida-mensaje" class="block text-lg font-medium text-gray-700 mb-1">Mensaje (opcional)</label>
                                <textarea id="asistida-mensaje" v-model="message" rows="3" maxlength="3000" class="form-input" placeholder="Cuéntanos qué te gustaría ver en la demo..."></textarea>
                            </div>

                            <div class="flex items-start gap-2">
                                <input type="checkbox" v-model="quiereNovedades" class="checkbox mt-1" id="novedades">
                                <label for="novedades" class="text-lg text-gray-600">
                                    Quiero recibir por email novedades de Hospedy (puedo darme de baja cuando quiera).
                                </label>
                            </div>

                            <!-- Trampa antispam: los robots rellenan todos los campos; una persona ni lo ve ni
                                 llega a él con el tabulador. Si llega relleno, el panel responde que todo ha ido
                                 bien y no hace nada. -->
                            <div class="campo-trampa" aria-hidden="true">
                                <label for="asistida-asunto">Deja este campo vacío</label>
                                <input id="asistida-asunto" v-model="trampa" type="text" name="asunto" tabindex="-1" autocomplete="off">
                            </div>

                            <AvisoFormularioNoDisponible v-if="!disponible" />
                            <template v-else>
                                <div ref="turnstileEl" class="flex justify-center"></div>
                                <p v-if="captchaError" class="text-red-600">
                                    No se ha podido cargar la verificación antispam. Recarga la página e inténtalo de nuevo.
                                </p>
                            </template>
                            <p v-if="errorEnvio" class="text-red-600" role="alert">{{ errorEnvio }}</p>

                            <button
                                type="button"
                                :disabled="sending || !disponible"
                                class="w-full btn btn-grad py-3 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
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
                            <!-- El texto que devuelve el panel -->
                            <p class="text-gray-600">{{ mensajeExito }}</p>
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

const route = useRoute()
const toast = useToast()
const { disponible: panelDisponible, emailValido, enviarSolicitud } = useSolicitudWeb()

const name = ref('')
const email = ref('')
const propertyName = ref('')
const propertyCount = ref('')
const phone = ref('')
const message = ref('')
const quiereNovedades = ref(false)
const trampa = ref('')
const sending = ref(false)
const formSent = ref(false)
const mensajeExito = ref('')
const errorEnvio = ref('')
const turnstileEl = ref<HTMLElement | null>(null)
const { token: captchaToken, error: captchaError, disponible: captchaDisponible, render: renderCaptcha, reset: resetCaptcha, remove: removeCaptcha } = useTurnstile('demo_asistida')
// Sin sitekey o sin la dirección del panel, el formulario no se puede enviar: se da el correo
const disponible = captchaDisponible && panelDisponible

onMounted(() => {
    if (disponible && turnstileEl.value) renderCaptcha(turnstileEl.value)
})

function aviso(texto: string, tipo: TYPE = TYPE.ERROR) {
    toast(texto, { position: POSITION.TOP_CENTER, type: tipo, timeout: 3000 })
}

async function submitForm() {
    errorEnvio.value = ''
    if (!name.value.trim() || !email.value.trim() || !propertyName.value.trim()) {
        aviso('Por favor, completa los campos obligatorios')
        return
    }
    if (!emailValido(email.value)) {
        aviso('Escribe un email válido')
        return
    }
    if (!captchaToken.value) {
        aviso('Espera a que termine la comprobación antispam e inténtalo de nuevo')
        return
    }

    sending.value = true
    try {
        mensajeExito.value = await enviarSolicitud({
            tipo: 'demo',
            nombre: name.value,
            email: email.value,
            alojamiento: propertyName.value,
            unidades: propertyCount.value,
            telefono: phone.value,
            mensaje: message.value,
            novedades: quiereNovedades.value,
            pagina: route.path,
            captcha_token: captchaToken.value,
            web: trampa.value,
        })
        removeCaptcha()
        formSent.value = true
        aviso('Solicitud enviada correctamente', TYPE.SUCCESS)
    } catch (e) {
        // El texto ya viene listo para enseñar: el del panel o el que invita a escribirnos
        errorEnvio.value = (e as Error).message
        // El token es de un solo uso: tras cualquier error del envío hay que pedir otro al widget.
        resetCaptcha()
    } finally {
        sending.value = false
    }
}
</script>
