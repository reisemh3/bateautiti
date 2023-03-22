<!-- eslint-disable prettier/prettier -->
<template>
    <div>
      Product edit works !
      <div> {{ id }} </div>
    </div>
  </template>

<script>
export default {
  name: 'ProductEdit',
  props: ['id'],
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
}
</script>

<style></style>
