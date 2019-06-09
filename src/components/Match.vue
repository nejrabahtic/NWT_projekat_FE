<template>
  <v-container fill-height fluid>
    <v-layout row justify-center align-center>
          <v-flex xs5 offset-xr1>
            <v-layout row justify-center>
              <v-btn
                @click="getMatch"
              >Match</v-btn>
            </v-layout>
            <v-flex class="form" justify-center align-center>
              <v-form>
                <v-text-field prepend-icon="business" name="jobname" label="Job name" readonly></v-text-field>
                <v-text-field prepend-icon="info" name="jobinfo" label="Job info" readonly></v-text-field>
                <v-text-field prepend-icon="location_on" name="location" label="Location" readonly></v-text-field>
                <v-text-field prepend-icon="style" name="requirements" label="Requirements"></v-text-field>
                <!-- <v-text-field
                  v-if="remote ? remote : !remote"
                  prepend-icon="schedule"
                  name="remote"
                  label="Availability"
                ></v-text-field>
                <v-text-field
                  v-if="partTime ? partTime : !partTime"
                  prepend-icon="watch_later"
                  name="partTime"
                  label="Work hours"
                ></v-text-field> -->
              </v-form>
            </v-flex>
            <v-layout row justify-center>
              <v-btn color="primary" dark>
                Accept
                <v-icon dark right>check_circle</v-icon>
              </v-btn>
              <v-btn color="red" dark>
                Decline
                <v-icon dark right>block</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
          <v-flex xs5 offset-xr1>
            <v-layout row justify-center align-center>
              <v-data-table :headers="headers" :items="history" class="elevation-1">
                <template v-slot:items="props" class="text-xs-center">
                  <td class="text-xs-left">{{ props.item.jobname }}</td>
                  <td class="text-xs-left">{{ props.item.companyname }}</td>
                  <td class="text-xs-left">{{ props.item.status }}</td>
                </template>
              </v-data-table>
            </v-layout>
          </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Match",
  data() {
    return {
      edit: false,
      loading: true,
      histories: [],
      headers: [
        { text: "Job name", value: "jobname" },
        { text: "Company name", value: "companyname" },
        { text: "Status", value: "status" }
      ]
    };
  },
  mounted() {
    
  }
};
</script>

<style scoped>
  .form {
    margin: auto;
  }
</style>