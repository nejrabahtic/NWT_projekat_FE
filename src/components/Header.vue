<template>
  <v-toolbar app dark absolute clipped-left>
    <v-toolbar-side-icon v-on:click="changeDrawer"></v-toolbar-side-icon>
    <v-toolbar-title class="text-uppercase headline">
      <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        <span class="font-weight-light">Business</span> Hookup 
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-if="loggedIn === false"   
      flat
      @click="login"
    >Login</v-btn>
    <v-btn
      v-if="loggedIn === false"    
      flat
      @click="registration"
    >Register</v-btn>
  </v-toolbar>
  </template>

<script>
import Auth from '../services/Auth.js';

export default {
  name: "Header",
  props:{
    toggleDrawer: Function
  },
  data() {
    return {
      drawer: true,
      loggedIn: Auth.isLoggedIn()
    }
  },
  created() {
    
    Auth.subscribe("header_check", () => {
      this.loggedIn = Auth.isLoggedIn()
    })
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
    },
    changeDrawer(){
      if(Auth.isLoggedIn())
        this.toggleDrawer();
    }
  }
};
</script>

<style scoped>
</style>