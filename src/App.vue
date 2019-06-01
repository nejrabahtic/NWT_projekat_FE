<template>
  <v-app dark app>
    <Sidebar :drawer="drawer" :closeDrawer="closeDrawer"/>
    <Header :toggleDrawer="toggleDrawer" />
    <v-content light>
      <router-view :openDrawer="openDrawer"></router-view>
  </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  name: "App",
  components: {
    Sidebar,
    Header
  },
  data() {
    return {
      drawer: false
    }
  },
  methods:{
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    closeDrawer(){
      this.drawer = false;
    },
    openDrawer(){
      this.drawer = true;
    }
  }
};
</script>
