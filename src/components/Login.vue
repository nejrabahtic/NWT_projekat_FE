<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark>
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
              <v-radio-group  row v-model="role">
                <v-radio 
                  label="User"
                  value="user"
                />
                <v-radio
                  label="Company"
                  value="company"
                />
              </v-radio-group>

            </v-form>
          </v-card-text>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-on:click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      :bottom="true"
      :timeout="4000"
    > 
      Successfully loged in!
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>

import axios from 'axios';
import Auth from '../services/Auth.js';

export default {
  name: "LoginPage",
  props:{
    openDrawer: Function
  },
  data() {
    return {
      username: "",
      password: "",
      role: "user",
      usernameerror: false,
      passworderror: false,
      error: "",
      snackbar: false
    };
  },
  methods: {
    login(){
      axios
      .post("http://localhost:8081/auth/login", {
        username: this.username,
        password: this.password,
        role: this.role
      })
      .then(response => {
        // eslint-disable-next-line
        console.log(response.data);
        Auth.setToken(response.data);
        Auth.setUser(this.username, this.role);
        this.snackbar = true;
        setTimeout(() => {
          this.openDrawer();
          this.$router.push({ path: "/" })
        }, 800)
     
      })
      .catch(error => {
        this.error = "Username, password and/or role are wrong. Please try again with correct login information or register first"
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