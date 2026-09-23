<template>
    <div id="cookies">
        <EmptyNavbar/>
        <div class="text-center mt-20">
            <p class="text-4xl text-primary">POLÍTICA DE COOKIES</p>
        </div>
        <div class="m-10">
            <p class="text-xl">Última actualización: 23 de septiembre de 2026.</p>
            <p class="text-xl mt-4">Esta web (gethospedy.com), de <span class="blue font-semibold">Silatek, S.L.U.</span>, no utiliza cookies propias ni de terceros, ni otras tecnologías similares, con fines analíticos, publicitarios o de elaboración de perfiles. Por eso no te pedimos consentimiento.</p>
            <p class="text-xl mt-4">Solo utiliza los elementos técnicos que se describen a continuación, necesarios para que la web funcione de forma segura y exentos de consentimiento.</p>

            <div class="flex justify-center my-8">
                <p class="text-2xl text-secondary">¿Qué son las cookies?</p>
            </div>
            <p class="text-xl">Las cookies son pequeños archivos que una web guarda en tu navegador para recordar información sobre tu visita. Hay otras tecnologías similares, como el almacenamiento local del navegador o los scripts que leen datos de tu dispositivo, a las que se aplican las mismas reglas.</p>

            <div class="flex justify-center my-8">
                <p class="text-2xl text-secondary">¿Qué utiliza esta web?</p>
            </div>
            <p class="text-xl"><strong>Cloudflare Turnstile en los formularios.</strong> Los formularios de contacto y de solicitud de demo usan Cloudflare Turnstile para distinguir a las personas de los programas automáticos (bots) y frenar el spam. Turnstile no instala cookies: hace unas comprobaciones técnicas en tu navegador y, para ello, Cloudflare recibe tu dirección IP y datos técnicos de tu navegador y de la conexión. Cloudflare trata esos datos por nuestra cuenta, como encargado del tratamiento, y, según su <a href="https://www.cloudflare.com/turnstile-privacy-policy/" class="text-primary" target="_blank" rel="noopener">anexo de privacidad de Turnstile</a>, también los usa por su cuenta para mejorar ese servicio.</p>
            <p class="text-xl mt-4"><strong>Posibles cookies técnicas de seguridad de Cloudflare.</strong> La web se sirve a través de la red de Cloudflare. Si están activas sus protecciones contra bots o contra el exceso de peticiones, Cloudflare puede instalar estas cookies:</p>
            <ul class="mt-2">
                <li class="text-xl list-disc"><code>__cf_bm</code>: ayuda a distinguir las visitas de personas de las de bots. Caduca tras 30 minutos de inactividad y no sirve para identificarte ni para seguirte de una web a otra.</li>
                <li class="text-xl list-disc"><code>_cfuvid</code>: permite aplicar límites de peticiones distinguiendo a los visitantes que comparten una misma dirección IP.</li>
            </ul>
            <p class="text-xl mt-4">Son estrictamente necesarias para la seguridad de la web y, por eso, están exentas de consentimiento.</p>
            <p class="text-xl mt-4"><strong>Tipografías.</strong> Las fuentes de la web se sirven desde nuestros propios servidores: tu navegador no se conecta a servicios externos de tipografías para cargarlas.</p>
            <p class="text-xl mt-4"><strong>Enlaces a redes sociales y WhatsApp.</strong> Son enlaces normales: no cargan nada de esas plataformas hasta que haces clic en ellos. A partir de ahí, se aplican sus propias políticas de cookies y de privacidad.</p>

            <div class="flex justify-center my-8">
                <p class="text-2xl text-secondary">Panel de clientes</p>
            </div>
            <p class="text-xl">El panel de clientes, en hospedy.app, usa sus propias cookies técnicas de sesión, que se explican allí.</p>

            <div class="flex justify-center my-8">
                <p class="text-2xl text-secondary">¿Cómo puedes gestionar las cookies?</p>
            </div>
            <p class="text-xl">Puedes ver, bloquear o borrar las cookies desde la configuración de tu navegador; en su ayuda encontrarás cómo hacerlo.</p>

            <div class="flex justify-center my-8">
                <p class="text-2xl text-secondary">Cambios y contacto</p>
            </div>
            <p class="text-xl">Si en el futuro usamos otras cookies o tecnologías similares, actualizaremos esta política y, cuando la ley lo exija, te pediremos antes tu consentimiento.</p>
            <p class="text-xl mt-4">Para cualquier duda, escríbenos a <a href="mailto:hola@hospedy.app" class="text-primary">hola@hospedy.app</a>. Cómo tratamos los datos personales se explica en la <NuxtLink to="/privacidad" class="text-primary">Política de privacidad</NuxtLink>.</p>
        </div>
        <Footer />
    </div>

</template>

<script setup lang="ts">
useHead({
    title: 'Política de cookies',
    meta: [{ name: 'description', content: 'Esta web no utiliza cookies analíticas ni publicitarias; solo los elementos técnicos necesarios.' }],
})
</script>
