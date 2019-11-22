<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import landingPage from './components/landing-page.vue';
import login from './components/login.vue';
import about from './components/aboutus.vue';

export default {
  components: {
    'landing-page': landingPage,
    'login': login,
    'about': about,
  },
  data() {
    return{

    }
  }
}
</script>

<style scoped>

</style>
