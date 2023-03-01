<template>
  <div class="home">
    <header></header>
    <main>
      Le projet fonctionne
      <div>{{ $store.state.fish.length }} fishes</div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {},
})
</script>

<style>
.home {
}
header {
  top: 0;
  position: sticky;
  min-height: 120px;
  background: #33afaf;
}
main {
  overflow-y: hidden;
  font-size: 120px;
}
</style>
