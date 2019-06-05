<template>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark>
              <v-toolbar-title>Registration</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field 
                  prepend-icon="person" 
                  label="Username" 
                  type="text"
                  v-model="username"
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  label="Password"
                  type="password"
                  v-model="password"
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
              <v-btn @click="register">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-snackbar
        v-model="snackbar"
        :bottom="true"
        :timeout="4000"
      > 
        Successfully registered!
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
import AuthService from '../services/AuthService.js';

export default {
  name: "Registration",  
  props: {
    openDrawer: Function
  },
  data() {
    return {
      username: "",
      password: "",
      role: "user",
      snackbar: false
    };
  },
  methods: {
    register(){
      axios
        .post("http://localhost:8081/auth/register", {
          username: this.username,
          password: this.password,
          role: this.role
        })
        .then(response => {
          // eslint-disable-next-line
          console.log(response.data);
          AuthService.setToken(response.data);
          AuthService.setUser(this.username, this.role);
          this.snackbar = true;
          setTimeout(() => {
            this.openDrawer();
            this.$router.push({ path: "/" })
          }, 800)
     
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
        })
    }
  },
};
</script>

<style scoped>
</style>