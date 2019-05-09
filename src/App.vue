<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Business Hookup</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <span class="mr-2">Button 1</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <DefaultPage/>
    </v-content>
  </v-app>
</template>



<script>
import DefaultPage from "./components/DefaultPage";

export default {
  name: "App",
  components: {
    DefaultPage
  },
  data() {
    return {
      //
    };
  }
};
</script>
