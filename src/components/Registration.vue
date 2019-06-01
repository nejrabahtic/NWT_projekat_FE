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
                  name="usernameRegistration" 
                  label="Username"
                  id="usernameRegistration" 
                  type="text"
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  name="passwordRegistration"
                  label="Password"
                  id="passwordRegistration"
                  type="password"
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
              <v-btn>Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      username: "",
      password: "",
      role: "user"
    };
  }
};
</script>

<style scoped>
</style>