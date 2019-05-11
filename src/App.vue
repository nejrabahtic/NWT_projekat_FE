<template>
  <v-app app dark class="primary">
    <v-content>
      <Header/>
      <DefaultPage/>
      <!-- <LoginPage /> -->
      <!-- <Footer/> -->
  </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import DefaultPage from "./components/DefaultPage";
import LoginPage from "./components/LoginPage";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    DefaultPage,
    LoginPage
  },
  data() {
    return {
      //
    };
  }
};
</script>
