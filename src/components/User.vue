<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-8">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Edit</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="person"
                  name="username"
                  label="Username"
                  readonly
                ></v-text-field>
                <v-text-field prepend-icon="email" name="email" label="Email"></v-text-field>
                <v-text-field prepend-icon="info" name="info" label="Info"></v-text-field>
                <v-text-field
                  prepend-icon="phone"
                  name="userPhone"
                  label="Phone Number"
                  id="userPhone"
                  mask="+### ## ###-###"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary">Save changes</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
</style>