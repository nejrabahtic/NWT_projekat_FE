<template>
  <v-app app dark class="primary">
    <v-content>
      <Header/>
      <router-view></router-view>
  </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      //
    };
  }
};
</script>
