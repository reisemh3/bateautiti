<template>
  <nav
    class="py-4 px-6 top-0 bottom-0 w-64 bg-blue-500 shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-9999"
  >
    <button
      class="flex items-center justify-center cursor-pointer text-blueGray-700 w-6 h-10 border-l-0 border-r border-t border-b border-solid border-blueGray-100 text-xl leading-none bg-white rounded-r border border-solid border-transparent absolute top-1/2 -right-24-px focus:outline-none z-9998"
    >
      <i class="fas fa-ellipsis-v"></i>
    </button>
    <div
      class="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <div
        class="flex bg-blue-500 flex-col opacity-100 relative mt-4 h-auto z-40 items-center flex-1 rounded w-full"
      >
        <a
          class="md:flex items-center flex-col text-center md:pb-2 text-white mr-0 inline-flex whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        >
          <router-link to="/">
            <img
              class="fill-current h-12 w-12 mr-2"
              width="54"
              height="54"
              src="../assets/bateauthibaultLogo.svg"
            />
          </router-link>
          <span><br />Bateau Thibault<br />Tableau de bord</span>
        </a>
        <div class="md:flex-col md:min-w-full flex flex-col list-none">
          <hr class="my-4 md:min-w-full" />
          <h6
            class="md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline hover:text-yellow-500"
          >
            <router-link to="/admin/dashboard">Dashboard</router-link>
          </h6>
        </div>
        <div class="md:flex-col md:min-w-full flex flex-col list-none">
          <hr class="my-4 md:min-w-full" />
          <h6
            class="md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline"
          >
            Utilisateurs
          </h6>
          <a
            href="#responsive-header"
            class="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-yellow-500"
          >
            <i class="fas fa-newspaper mr-2 text-sm text-blueGray-400"></i
            ><router-link to="/admin/users/index">Index</router-link></a
          >
          <a
            href="#responsive-header"
            class="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-yellow-500"
          >
            <i class="fas fa-user-circle mr-2 text-sm text-blueGray-400"></i
            ><router-link to="/admin/users/add">Ajouter</router-link></a
          >
          <a
            href="#responsive-header"
            class="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-yellow-500"
          >
            <i class="fas fa-paint-brush mr-2 text-sm text-blueGray-400"></i
            ><router-link to="/admin/users/edit/:id">Editer</router-link></a
          >
          <hr class="my-4 md:min-w-full" />
          <h6
            class="md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline"
          >
            Produits
          </h6>
          <a
            href="#responsive-header"
            class="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-yellow-500"
          >
            <i class="fab fa-angular mr-2 text-sm text-blueGray-400"></i
            ><router-link to="/admin/products/index">Index</router-link></a
          >
          <a
            href="#responsive-header"
            class="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-yellow-500"
          >
            <i class="fab fa-react mr-2 text-sm text-blueGray-400"></i>
            <router-link to="/admin/products/add">Ajouter</router-link></a
          >
          <a
            href="#responsive-header"
            class="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-yellow-500"
          >
            <i class="fab fa-vuejs mr-2 text-sm text-blueGray-400"></i>
            <router-link to="/admin/products/edit/:id">Editer</router-link>
          </a>
        </div>
        <div class="md:flex-col md:min-w-full flex flex-col list-none">
          <hr class="my-4 md:min-w-full" />
          <a
            @click="logout()"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
            >Logout</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { accountService } from '@/_services'
// import { mapGetters } from 'vuex'

export default {
  name: 'AdminNav',
  methods: {
    logout() {
      accountService.logout()
      this.$router.push('/')
    },
  },
  // computed: {
  //   ...mapGetters(['getMarcel']),
  // },
}
</script>
