
<template lang="html">
  <div>
    <h2>{{title}}</h2>
    <router-link to="/login">logout</router-link> |
    <router-link to="/admin/hero">Hero</router-link> |
    <router-link to="/admin/kit">Kit</router-link>
    <br><br>
      <router-view></router-view>
  </div>
</template>

<script>

import admin from './admin.vue';
import kit from './kit.vue';
import hero from './hero.vue';

export default {
  components: {
    'admin': admin,
    'kit': kit,
    'hero': hero
  },
  data() {
    return{
      title: 'Dashboard Admin'
    }
  }
}
</script>

<style lang="css">
</style>
