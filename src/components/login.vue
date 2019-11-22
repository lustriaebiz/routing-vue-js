<template lang="html">
  <div>
    <h2>{{title}}</h2>
    <router-link to="/">Home</router-link>
    <br><br>
    <!-- <form> -->
      Username: <input type="text" v-model="loginForm.username"><br><br>
      Email: <input type="email" v-model="loginForm.password"><br><br>
      <button v-on:click="loginSubmit()">Login</button>
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  data() {
    return{
      loginForm: {
        username: "admin",
        password: "123456"
      },
      title: "Login Page"
    }
  },
  methods: {
    loginSubmit(){
      if (this.loginForm.username == 'admin' && this.loginForm.password == '123456') {
        this.$router.push('/admin');
      }else {
        alert('error!!');
      }
    }
  }
}
</script>

<style lang="css">
</style>
