<!-- eslint-disable prettier/prettier -->
<template>
  <div class="public">
    <PublicNav />
    <router-view />
    <PublicFoot />
  </div>
</template>

<script>
import PublicNav from '@/components/PublicNav.vue'
import PublicFoot from '@/components/PublicFoot.vue'
export default {
  name: 'PublicLayout',
  components: {
    PublicNav,
    PublicFoot,
  },
}
</script>
