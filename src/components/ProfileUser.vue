<template>
  <v-container fill-height>
    <v-layout row justify-center align-center>
      <v-layout row>
        <v-flex xs6>
          <v-layout column justify-center>
            <p class="display-1 text-xs-center">{{ username }}</p>
            <v-icon size="220">person</v-icon>
            <p class="display-2 text-xs-center" text-align-center>User</p>
          </v-layout>
        </v-flex>
        <v-flex xs6>
          <v-form>
            <v-text-field
              prepend-icon="person"
              label="Full Name"
              v-model="user.name"
              type="text"
              :readonly="!edit"
            ></v-text-field>
            <v-text-field
              prepend-icon="email"
              label="Email"
              v-model="user.email"
              type="text"
              :readonly="!edit"
            ></v-text-field>
            <v-text-field
              prepend-icon="phone"
              label="Phone Number"
              v-model="user.phone"
              mask="+### ## ###-###"
              :readonly="!edit"
            ></v-text-field>
            <v-textarea
              prepend-icon="info"
              v-model="user.info"
              label="About yourself:"
              :readonly="!edit"
            ></v-textarea>
          </v-form>
          <v-layout v-if="!edit" xs12 justify-end>
            <v-btn 
              @click="enterEditMode"
              >
              Edit
              <v-icon right>edit</v-icon>
            </v-btn>
          </v-layout>
          <v-layout v-else xs12 justify-end>
            <v-btn 
              @click="cancleEditMode"
              color="error"
              >
              Cancle
              <v-icon right>clear</v-icon>
            </v-btn>
            <v-btn 
              @click="saveUserData"
              color="success"
              >
              Save
              <v-icon right>check</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import Auth from '../services/Auth.js';
import User from '../services/User.js';
import axios from 'axios';

export default {
  name: "ProfileUser",
  data(){
    return {
      user: {
        name: "Muhamed Delalic",
        info: "Lead software Developer",
        email: "muha.dellaic@gmail.com",
        phone: "+387 62 223-500",
      },
      savedUser: {
        name: "",
        info: "",
        email: "",
        phone: ""
      },
      username: Auth.getName(),
      edit: false
    };
  },
  mounted(){
    User
      .getUserByToken()
      .then(response => {
        const { userEmail, userInfo, userName, userPhoneNumber } = JSON.parse(response.data);

        this.user = {
          name: userName? userName: "Not set",
          info: userInfo? userInfo: "Not set",
          email: userEmail? userEmail: "Not set",
          phone: userPhoneNumber? userPhoneNumber: "+000 00 000-000"
        }
        
      })
      .catch(error => {
        console.log(error);
      })
  },
  methods: {
    enterEditMode(){
      this.edit = true;
      this.savedUser = Object.assign({}, this.user);

    },
    cancleEditMode(){
      this.edit = false;
      this.user = Object.assign({}, this.savedUser);
    },
    saveUserData(){
      User
        .postUserData(this.user)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>