<!-- eslint-disable prettier/prettier -->
<template>
  <main class="grow">
    <NotifBar/>
    <router-view />
  </main>
</template>

<script>
import NotifBar from '@/components/NotifBar.vue'
export default {
  components: {
    NotifBar,
  },
}
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: helvetica;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
