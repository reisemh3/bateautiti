<!-- eslint-disable prettier/prettier -->
<template>
  <footer class="bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-100">
    <div class="container mx-auto px-4 sm:items-center">
      <hr class="mb-4 border-b-1 border-blueGray-200">
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4">
          <div class="text-center mb-2 md:text-left md:mb-0">
            <a href="https://www.creative-tim.com/?ref=npr-footeradmin" target="_blank" class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">Copyright © 2023 CFA INSTA</a>
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end  justify-center">
            <li><a href="/" target="_blank"
                class="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3">Accueil</a>
              </li>
            <li><a href="/contact" target="_blank"
                class="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3">Contact</a>
            </li>
            <li><a href="/blog" target="_blank"
                class="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3">Blog</a>
            </li>
            <li><a href="https://www.creative-tim.com/license?ref=npr-footeradmin" target="_blank"
                class="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3">Licenses</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PublicFoot',
}
</script>
