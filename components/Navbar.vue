<template>
  <div>
    <div
      :class="[
        'flex items-center justify-between bg-white/80 backdrop-blur-md fixed top-0 w-full z-10 shadow-sm py-2 px-6 transition-transform duration-300',
        isHidden ? '-translate-y-full' : 'translate-y-0'
      ]"
    >
      <NuxtLink
        class="lg:block hidden"
        to="/"
        title="volver a la pagina principal de Hospedy"
      >
        <img src="/logo.svg" alt="logo hospedy" class="w-36" />
      </NuxtLink>
      <NuxtLink
        class="block lg:hidden"
        to="/"
        title="volver a la pagina principal de Hospedy"
      >
        <img src="/logor.svg" alt="logo hospedy" class="w-8" />
      </NuxtLink>

      <div class="lg:flex items-center gap-6 hidden">
        <NuxtLink
          class="text-black p-2 text-lg rounded-lg hover:bg-tertiary"
          href="/#gestiona"
          >Gestiona</NuxtLink
        >
        <NuxtLink
          class="text-black p-2 text-lg rounded-lg hover:bg-tertiary"
          href="/#cumple"
          >Cumple</NuxtLink
        >
        <NuxtLink
          class="text-black p-2 text-lg rounded-lg hover:bg-tertiary"
          href="/#crece"
          >Crece</NuxtLink
        >
        <NuxtLink
          class="text-black p-2 text-lg rounded-lg hover:bg-tertiary"
          href="/precios"
          >Precios</NuxtLink
        >
        <NuxtLink
          class="text-black p-2 text-lg rounded-lg hover:bg-tertiary"
          href="/#testimonios"
          >Opiniones</NuxtLink
        >
        <NuxtLink
          class="text-black p-2 text-lg rounded-lg hover:bg-tertiary"
          href="/#contacto"
          >Contacto</NuxtLink
        >
        <a
          title="Envianos un mensaje por WhatsApp"
          target="_blank"
          href="https://wa.me/376619224"
          class="p-2"
        >
          <img
            class=""
            width="28px"
            src="/whatsapp.svg"
            alt="WhatsApp de Hospedy"
          />
        </a>
      </div>
      <div class="">
        <a
          class="btn btn-grad-gold align-middle flex flex-wrap text-black"
          href="https://app.hospedy.app/"
          >Iniciar sesión</a
        >
      </div>
      <div class="block lg:hidden">
        <button v-if="open == false" @click="openMenu()">
          <img
            class="mt-1 w-10"
            src="/hamburger.svg"
            alt="desplegar menu de Hospedy"
          />
        </button>
        <button v-else @click="closeMenu()">
          <img class="mt-1 w-10" src="/close.svg" alt="plegar menu de Hospedy" />
        </button>
      </div>
    </div>
    <div
      v-if="open == true"
      class="fixed top-12 ml-auto grid w-full z-8 bg-white text-center drop-shadow-xl py-4"
    >
      <span class="mb-3 mx-2"
        ><a
          class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary"
          href="/#gestiona"
          @click="closeMenu()"
          >Gestiona tu alojamiento</a
        ></span
      >
      <span class="mb-3 mx-2"
        ><a
          class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary"
          href="/#cumple"
          @click="closeMenu()"
          >Cumple la normativa</a
        ></span
      >
      <span class="mb-3 mx-2"
        ><a
          class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary"
          href="/#crece"
          @click="closeMenu()"
          >Crece en ventas</a
        ></span
      >
      <span class="mb-3 mx-2"
        ><a
          class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary"
          href="/precios"
          @click="closeMenu()"
          >Precios</a
        ></span
      >
      <span class="mb-3 mx-2"
        ><a
          class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary"
          href="/#testimonios"
          @click="closeMenu()"
          >Opiniones</a
        ></span
      >
      <span class="mb-3 mx-2"
        ><a
          class="text-black p-2.5 text-xl rounded-lg hover:bg-tertiary"
          href="/#contacto"
          @click="closeMenu()"
          >Contacto</a
        ></span
      >
      <div class="flex justify-center my-4 pt-2 border-t border-gray-100">
        <a
          class="mx-6 p-2.5"
          href="https://www.facebook.com/Ridid-122157706306005/?modal=admin_todo_tour"
          title="Facebook de Hospedy"
          target="_blank"
          aria-label="facebook"
        >
          <img
            class="bg-white rounded-md"
            width="35px"
            src="/facebook.svg"
            alt="Facebook Hospedy"
          />
        </a>
        <a
          href="https://www.instagram.com/ridid.me/"
          class="mx-6 p-2.5"
          title="Instagram de Hospedy"
          aria-label="instagram"
          target="_blank"
        >
          <img
            class="bg-white rounded-sm"
            width="35px"
            src="/instagram.svg"
            alt="Instagram Hospedy"
          />
        </a>
        <a
          class="mx-6 p-2"
          title="WhatsApp de Hospedy"
          target="_blank"
          href="https://wa.me/376619224"
        >
          <img class="" width="40px" src="/whatsapp.svg" alt="WhatsApp Hospedy" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const open = ref(false);
const isHidden = ref(false);
const lastScrollY = ref(0);
const heroHeight = ref(0);

async function openMenu() {
  open.value = true;
}

async function closeMenu() {
  open.value = false;
}

function handleScroll() {
  const currentScrollY = window.scrollY;

  // Only hide/show after scrolling past hero section
  if (currentScrollY > heroHeight.value) {
    // Scrolling down - hide navbar
    if (currentScrollY > lastScrollY.value) {
      isHidden.value = true;
    }
    // Scrolling up - show navbar
    else {
      isHidden.value = false;
    }
  } else {
    // Always show navbar in hero section
    isHidden.value = false;
  }

  lastScrollY.value = currentScrollY;
}

onMounted(() => {
  // Get hero section height (approximately viewport height)
  heroHeight.value = window.innerHeight;
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
