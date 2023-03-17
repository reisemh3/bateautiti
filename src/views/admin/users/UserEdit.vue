<!-- eslint-disable prettier/prettier -->
<template>
    <div>
        User edit works !
        <div> {{ id }} </div>
    </div>
  </template>

<script>
export default {
  name: 'UserEdit',
  props: ['id'],
  /* variable retourne les objects */
  // data() {
  //   return {
  //     test: '',
  //   }
  // },
  /* variabes de déclaration des update et valeurs */
  // mounted() {
  //   console.log(this.$route.params.id)
  //   this.test = this.$route.params.id
  // },
  // updated() {
  //   console.log(this.$route.params.id)
  //   this.test = this.$route.params.id
  // },
}
</script>

<style></style>
