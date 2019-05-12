<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-title class="headline white--text">
      <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        Business Hookup
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn 
      flat
      @click="login"
    >Login</v-btn>
    <v-btn 
      flat
      @click="registration"
    >Register</v-btn>
    <v-btn 
      flat
      @click="about"
    >About us</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      //
    }
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    registration() {
      this.$router.push('/registration')
    },
    about() {
      this.$router.push('/about')
    }
  },
};
</script>

<style scoped>
</style>