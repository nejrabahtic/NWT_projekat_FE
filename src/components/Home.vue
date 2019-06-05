<template>
  <v-container app dark fill-height>
    <v-layout justify-center align-center column pa-5>
      <div class="display-1 font-weight-black text-xs-center">
        <p>Welcome {{name}}</p>
        <p>Role: {{role}}</p>  
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import AuthService from '../services/AuthService.js';

export default {
  name: "Home",
  data() {
    return {
      name: AuthService.getName(),
      role: AuthService.getRole()
    }
  }
};
</script>

<style scoped>
</style>