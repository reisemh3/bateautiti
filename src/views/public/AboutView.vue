<!-- eslint-disable prettier/prettier -->
<template>
  <div class="contact">
    <main>
      <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p class="text-3xl text-gray-700 font-bold mb-5">Le seul intermédiaire entre la mer et vous, c'est nous!</p>
        <p class="text-gray-500 text-lg">Nos {{ $store.state.fish.length }} produits de notre terroir maritimes.</p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  name: 'AboutView',
  components: {},
})
</script>

<style>
.home {
}

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
