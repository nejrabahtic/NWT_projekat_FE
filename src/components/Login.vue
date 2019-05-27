<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field 
                  prepend-icon="person" 
                  name="username" 
                  label="Username"
                  id="username" 
                  type="text"
                  v-model="username"
                  :error="usernameerror"
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  v-model="password"
                  :error="passworderror"
                  :error-messages="error"
                ></v-text-field>
              </v-form>
            </v-card-text>
           
            <v-card-actions class="justify-center">
              <v-btn v-on:click="login" color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>

import axios from 'axios';


export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      usernameerror: false,
      passworderror: false,
      error: ""
    };
  },
  methods: {
    login(){
      axios
      .post("http://localhost:8081/auth/login", {
        username: this.username,
        password: this.password,
        role: "user"
      })
      .then( (response) => {
        // eslint-disable-next-line
        console.log(response.data);
        localStorage.token = response.data
      })
      .catch( (error) => {
        this.error = "Username or password are wrong. Please try again with  correct login information or register first"
        this.usernameerror = true;
        this.passworderror = true;
        // eslint-disable-next-line
        console.log(error);
      })
    }
  },
};
</script>

<style scoped>
</style>