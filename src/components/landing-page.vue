<template lang="html">
  <div>
    <h1>{{title}}</h1>
    <router-link to="/login">Login</router-link>
    <router-link to="/about">About Us</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return{
      title: "Landing Page"
    }
  }
}
</script>

<style lang="css">
</style>
