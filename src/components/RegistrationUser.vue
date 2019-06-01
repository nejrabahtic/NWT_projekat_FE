<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>User Registration</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
             
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "RegistrationUser",
  data() {
    return {
        userName: "",
        userInfo: "",
        userEmail: "",
        userPhone: ""
    };
  }
};
</script>

<style scoped>
</style>