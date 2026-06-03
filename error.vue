<template>
    <div class=" ">
        <EmptyNavbar />
        <div class="flex justify-center mt-20">
            <div class="  text-center">                
                <div class="flex justify-center "> 
                    <img src="/error404.svg" class="lg:w-1/4 w-1/2" alt="pagina no exontrada- error" >
                </div>
                <p class="text-center text-4xl my-10 text-secondary mb-4">Error, sitio no encontrado.</p>
                <NuxtLink class="btn btn-grad p-3" to="/" title="volver a la pagina principal de Hospedy">Volver a la web</NuxtLink>
            </div>                       
        </div>    
        <div class="w-full fixed bottom-0">                     
            <Footer />
        </div> 
    </div>       
</template>  
<script setup>

</script>