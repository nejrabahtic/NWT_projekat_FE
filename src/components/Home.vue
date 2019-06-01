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
import Auth from '../services/Auth.js';

export default {
  name: "Home",
  data() {
    return {
      name: Auth.getName(),
      role: Auth.getRole()
    }
  }
};
</script>

<style scoped>
</style>