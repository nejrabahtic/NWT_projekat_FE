<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Company Registration</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="group"
                  name="companyName"
                  label="Name"
                  id="companyName"
                  type="text"
                ></v-text-field>
                <v-text-field
                  prepend-icon="info"
                  name="companyInfo"
                  label="Info"
                  id="companyInfo"
                  type="text"
                ></v-text-field>
                <v-text-field
                  prepend-icon="email"
                  name="companyEmail"
                  label="Email"
                  id="companyEmail"
                  type="text"
                ></v-text-field>
                <v-text-field
                  prepend-icon="phone"
                  name="companyPhone"
                  label="Phone Number"
                  id="companyPhone"
                  mask="phone"
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
  name: "RegistrationCompany",
  data() {
    return {
        companyName: "",
        companyInfo: "",
        companyEmail: "",
        companyPhone: ""
    };
  }
};
</script>

<style scoped>
</style>