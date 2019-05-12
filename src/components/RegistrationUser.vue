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
              <v-form>
                <v-text-field
                  prepend-icon="person"
                  name="userName"
                  label="Name"
                  id="userName"
                  type="text"
                ></v-text-field>
                <v-text-field
                  prepend-icon="info"
                  name="userInfo"
                  label="Info"
                  id="userInfo"
                  type="text"
                ></v-text-field>
                <v-text-field
                  prepend-icon="email"
                  name="userEmail"
                  label="Email"
                  id="userEmail"
                  type="text"
                ></v-text-field>
                <v-text-field
                  prepend-icon="phone"
                  name="userPhone"
                  label="Phone Number"
                  id="userPhone"
                  mask="+387 6# ###-###"
                ></v-text-field>
              </v-form>
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