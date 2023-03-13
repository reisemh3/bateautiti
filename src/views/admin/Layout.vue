<!-- eslint-disable prettier/prettier -->
<template>
    <div class="admin">
      <PublicNav />
      Admin Layout
      <router-view />
      <PublicFoot />
    </div>
  </template>

<script>
export default {
  name: 'AdminLayout',
}
</script>
