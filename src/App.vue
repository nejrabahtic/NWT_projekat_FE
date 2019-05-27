<template>
  <v-app app dark>
    <Header :toggleDrawer="toggleDrawer" />
    <v-content>
      <Sidebar :drawer="drawer" />
      <router-view></router-view>
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
      drawer: false,

    };
  },
  methods:{
    toggleDrawer() {
      this.drawer = !this.drawer

    }
  }
};
</script>
