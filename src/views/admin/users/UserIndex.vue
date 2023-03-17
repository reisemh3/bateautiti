<!-- eslint-disable prettier/prettier -->
<template>
    <div>
        User index works !
    </div>
  </template>

<script>
import { userService } from '@/_services'
export default {
  name: 'UserIndex',
  mounted() {
    userService
      .getAllUsers()
      .then(res => console.log(res.data.data))
      .catch(err => console.log(err))
  },
}
</script>

<style></style>
