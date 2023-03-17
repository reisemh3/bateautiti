<!-- eslint-disable prettier/prettier -->
<template>
  <div class="admin">
    <!-- <PublicNav /> -->
    <div class="ad_contain">
      <div id="ad_side">
        <AdminNav />
      </div>
      <div id="ad_display" class="relative md:ml-64 bg-blueGray-100">
        <router-view />
      </div>
      <div id="ad_footer" class="relative md:ml-64">
        <PublicFoot />
      </div>
    </div>
  </div>
</template> 

<script>
import AdminNav from '@/components/AdminNav.vue'
import PublicNav from '@/components/PublicNav.vue'
import PublicFoot from '@/components/PublicFoot.vue'

export default {
  name: 'AdminLayout',
  components: {
    // PublicNav,
    AdminNav,
    PublicFoot,
  },
}
</script>
