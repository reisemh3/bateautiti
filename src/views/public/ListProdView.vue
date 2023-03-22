<template>
  <div class="home">
    <header class="sticky top-0"></header>
    <main class="overflow-y-hidden text-xl">
      <div class="grid grid-cols-3 gap-4 m-8">
        <div
          v-for="fish in $store.state.fishArray"
          v-on:click.stop.prevent="openWindow(fish.id)"
          :key="fish.id"
          class="bloc bg-blue-200 p-4 w-max-content shadow-sm border rounded outline outline-1 hover:bg-blue-300"
        >
          <div>
            {{ fish.name + ' ' + fish.id }}
          </div>
          <div class="text-sm italic font-light">
            {{
              fish.comments == ''
                ? 'Pas de description supplémentaire'
                : fish.comments
            }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { loggedIn } from '@/_helpers/auth-guard'

export default defineComponent({
  name: 'ListProdView',
  components: {},
  methods: {
    openWindow(id: string | URL | undefined) {
      this.$router.push('/product/' + id)
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
})
</script>

<style>
/* .home {
}
header {
  min-height: 120px;
  background: #3c7a1f;
} */
</style>
