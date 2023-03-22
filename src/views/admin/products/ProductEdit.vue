<!-- eslint-disable prettier/prettier -->
<template>
  <div class="home">
    <header class="sticky top-0"></header>
    <main>
      <div v-if="fish">
        <div v-if="fish" class="bloc p-4 max-w-[50%]">
          <div class="text-3xl pb-16 w-max">Edit : {{ fish.name }}</div>
          <div class="wrapper">
            <div class="w-max">Fish name :</div>
            <input class="txt" v-model="fish.name" />
            <div class="w-max">Sale</div>
            <input
              class="check"
              type="checkbox"
              name="On sale"
              v-model="fish.sale"
            />
            <div class="w-max">Fish Comment</div>
            <input class="txt" v-model="fish.comments" />
            <div class="w-max">Fish Price</div>
            <input class="txt" v-model="fish.price" />
            <div class="w-max">Fish unit</div>
            <input class="txt" v-model="fish.unit" />
          </div>
        </div>
        <div class="p-4">
          <button class="button" v-on:click="$router.back()">Back</button>
          <button class="delete-btn" v-on:click="update(fish)">
            Confirm Edit
          </button>
        </div>
      </div>
      <div v-else>
        <div class="m-8 text-2xl">No fish found</div>
      </div>
    </main>
  </div>
  </template>

<script>
import { loggedIn } from '@/_helpers/auth-guard'
import router from '@/router'
import { defineComponent } from 'vue'
import store from '../../../store'

export default {
  name: 'ProductEdit',
  props: ['id'],
  components: {},
  methods: {
    update(fish) {
      store.commit('updateFish', fish)
      router.back()
    },
  },
  computed: {
    fish() {
      const id = Number(this.$route.params.id)
      const fish = store.getters.getFishById(id)
      return fish || null
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    loggedIn().then(res => {
      console.log('loggedIn : ' + res)
      if (!res) {
        next('/login')
      } else {
        next()
      }
    })
  },
}

// data() {
//   return {
//     user: {},
//   }
// },
// methods: {
//   // Envoi à l'API pour modification
//   edit() {
//     userService
//       .updateUser(this.user)
//       .then(res => this.$router.push({ name: 'uList' }))
//       .catch(err => console.log(err))
//   },
// },
// mounted() {
//   // Récupération à l'affichage de l'utilisateur
//   userService
//     .getUser(this.id)
//     .then(res => {
//       this.user = res.data.data
//     })
//     .catch(err => console.log(err))
// },
</script>

<style></style>
