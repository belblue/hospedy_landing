<template>
    <div>
        <div class="flex bg-white fixed top-0 w-full z-10 shadow py-1 px-4">
            <NuxtLink class="lg:block hidden" to="/" title="volver a la pagina principal de Ridid ">            
                <img src="/logo.svg" alt="logo ridid" class="w-36">
            </NuxtLink>
            <NuxtLink class="block lg:hidden" to="/" title="volver a la pagina principal de Ridid ">            
                <img src="/logor.svg" alt="logo ridid" class="w-8">
            </NuxtLink>

            
            <div class="lg:flex ml-auto hidden">
                <span class="mt-2 mx-4"><NuxtLink class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary flex flex-wrap" href="#check-in-huespedes">Check-in  </NuxtLink></span>
                <span class="mt-2 mx-4"><NuxtLink class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary flex flex-wrap" href="#gestor-reservas">Gestor reservas  </NuxtLink></span>
                <span class="mt-2 mx-4"><NuxtLink class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary flex flex-wrap" href="#motor-reservas">Motor</NuxtLink></span>
                <span class="mt-2 mx-4"><NuxtLink class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary flex flex-wrap" href="#precios">Precios</NuxtLink></span>

                <span class="mt-2 mx-4"><NuxtLink class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary flex flex-wrap" href="#channel-manager">Channel manager</NuxtLink></span>
                <span class="mt-2 mx-4"><NuxtLink class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary flex flex-wrap" href="#diseño-web">Diseño web</NuxtLink></span>
                <span class="mt-2 mx-4"><NuxtLink class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary flex flex-wrap" href="#contacto">Contacto</NuxtLink></span>
               <!-- <a class="mx-4 p-2.5" href="https://www.facebook.com/Ridid-122157706306005/?modal=admin_todo_tour" title="cuenta de facebook de Ridid"  target="_blank" aria-label="facebook">
                    <img class="bg-white rounded-md" width="25px" src="/facebook.svg" alt="cuenta de facebook Ridid">
                </a>
                <a href="https://www.instagram.com/ridid.me/" class="mx-4  p-2.5" title="cuenta de instagram de Ridid" aria-label="instagram"  target="_blank">
                    <img class="bg-white rounded-sm" width="25px" src="/instagram.svg" alt="cuenta de instagram Ridid"> 
                </a>   -->  
                <a title="Envíanos un mesaje por whatsapp" target="_blank" href="https://wa.me/34974550022" class="mx-4 p-2">
                        <img class="" width="30px"  src="/whatsapp.svg" alt="cuenta de whatsapp de Ridid">
                </a>

            </div>
            <div class="lg:ml-auto mx-auto mt-3">
                <a class="btn btn-grad align-middle flex flex-wrap" href="https://app.ridid.me/" >Iniciar sesión</a>
            </div>
            <div class="block lg:hidden">
                <button v-if="open==false" @click="openMenu()">
                    <img class="mt-1 w-10"  src="/hamburger.svg" alt="desplegar menu de Rididd">
                </button>
                <button v-else @click="closeMenu()"> 
                    <img class="mt-1 w-10 "  src="/close.svg" alt="plegar menu de Rididd">
                </button>
            </div>
        </div>
        <div v-if="open==true" class="fixed top-12 ml-auto grid w-full z-8 bg-white text-center drop-shadow-xl">
            <span class="mb-4 mx-2"><a class="text-black p-2.5 text-2xl rounded-lg hover:bg-tertiary" href="#check-in-clientes">Check-in</a></span>
            <span class="mb-4 mx-2"><a class="text-black p-2.5 text-2xl rounded-lg hover:bg-tertiary" href="#gestor-reservas">Gestor de reservas</a></span>
            <span class="mb-4 mx-2"><a class="text-black p-2.5 text-2xl rounded-lg hover:bg-tertiary" href="#motor-reservas">Motor de reservas</a></span>
            <span class="mb-4 mx-2"><a class="text-black p-2.5 text-2xl rounded-lg hover:bg-tertiary" href="#precios">Precios</a></span>
            <span class="mb-4 mx-2"><a class="text-black p-2.5 text-2xl rounded-lg hover:bg-tertiary" href="#channel-manager">Channel manager</a></span>
            <span class="mb-4 mx-2"><a class="text-black p-2.5 text-2xl rounded-lg hover:bg-tertiary" href="#diseño-web">Diseño web</a></span>
            <span class="mb-4 mx-2"><a class="text-black p-2.5 text-2xl rounded-lg hover:bg-tertiary" href="#contacto">Contacto</a></span>
            <div class="flex justify-center my-4">
                <a class="mx-8 p-2.5" href="https://www.facebook.com/Ridid-122157706306005/?modal=admin_todo_tour" title="cuenta de facebook de Ridid"  target="_blank" aria-label="facebook">
                    <img class="bg-white rounded-md" width="40px" src="/facebook.svg" alt="cuenta de facebook Ridid">
                </a>
                <a href="https://www.instagram.com/ridid.me/" class="mx-8  p-2.5" title="cuenta de instagram de Ridid" aria-label="instagram"  target="_blank">
                    <img class="bg-white rounded-sm" width="40px" src="/instagram.svg" alt="cuenta de instagram Ridid"> 
                </a>   
                <a class="mx-8 p-2" title="Envíanos un mesaje por whatsapp" target="_blank" href="https://wa.me/34974550022" >
                    <img class="" width="45px"  src="/whatsapp.svg" alt="cuenta de whatsapp de Ridid">
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

    const open=ref(false) 

    async function openMenu() {
        console.log('miau')
        open.value=true   
        console.log(open)
     
    }
      async function closeMenu() {
       console.log('miau') 
       open.value=false
       console.log(open)
      }
</script>