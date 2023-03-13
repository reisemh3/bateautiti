<!-- eslint-disable prettier/prettier -->
<template>
  <nav class="sticky top-0 z-30 flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img class="fill-current h-12 w-12 mr-2" width="54" height="54" src="../assets/bateauthibaultLogo.svg" />
      <span class="font-semibold text-xl tracking-tight">Le Bateau de Thibault!</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
          <router-link to="/">Accueil</router-link>
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
          <router-link to="/article">Articles</router-link>
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
          <router-link to="/panier">Panier</router-link>
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
          <router-link to="/contact">Contact</router-link>
        </a>
      </div>
      <div>
        <a href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Download</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PublicNav',
}
</script>
