<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-side-icon v-on:click="toggleDrawer"></v-toolbar-side-icon>
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
  </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  props:{
    toggleDrawer: Function
  },
  data() {
    return {
      drawer: true
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