<template>
  <v-container fill-height>
    <v-layout row justify-center align-center>
      <v-layout column>
        <v-layout row>
          <v-flex xs6>
            <v-layout row justify-center>
              <v-btn @click="match">Find New Job</v-btn>
            </v-layout>
            <v-flex class="form" justify-center align-center>
              <v-form>
                <v-text-field
                  prepend-icon="business"
                  v-model="job.jobname"
                  name="jobname"
                  label="Job name"
                  readonly
                ></v-text-field>
                <v-text-field
                  prepend-icon="info"
                  v-model="job.jobinfo"
                  name="jobinfo"
                  label="Job info"
                  readonly
                ></v-text-field>
                <v-text-field
                  prepend-icon="location_on"
                  v-model="job.location"
                  name="location"
                  label="Location"
                  readonly
                ></v-text-field>
                <v-text-field
                  prepend-icon="style"
                  v-model="job.requirements"
                  name="requirements"
                  label="Requirements"
                ></v-text-field>
                <v-text-field
                  v-if="job.remote"
                  prepend-icon="schedule"
                  v-model="strings.remote"
                  name="remote"
                  label="Availability"
                ></v-text-field>
                <v-text-field
                  v-else
                  prepend-icon="schedule"
                  v-model="strings.onsite"
                  name="remote"
                  label="Availability"
                ></v-text-field>
                <v-text-field
                  v-if="job.partTime"
                  prepend-icon="watch_later"
                  v-model="strings.parttime"
                  name="partTime"
                  label="Work hours"
                ></v-text-field>
                <v-text-field
                  v-else
                  prepend-icon="watch_later"
                  v-model="strings.fulltime"
                  name="partTime"
                  label="Work hours"
                ></v-text-field>
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
          <v-flex xs6>
            <v-layout row justify-center align-center>
              <v-data-table :headers="headers" :items="matchesByUser" class="elevation-1">
                <template v-slot:items="props" class="text-xs-center">
                  <td class="text-xs-left">{{ props.item.jobname }}</td>
                  <td class="text-xs-left">{{ props.item.companyname }}</td>
                  <td class="text-xs-left">{{ props.item.status }}</td>
                </template>
              </v-data-table>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
//import MatchService from "../services/MatchService";

export default {
  name: "Match",
  data() {
    return {
      edit: false,
      loading: true,
      job: {
        jobname: "Job name",
        jobinfo: "Job info",
        location: "Job location",
        requirements: "Job requirements",
        remote: true,
        partTime: false
      },
      strings: {
        remote: "Remote",
        onsite: "On-Site",
        parttime: "Part Time",
        fulltime: "Full Time"
      },
      matchesByUser: [],
      headers: [
        { text: "Job name", value: "jobname" },
        { text: "Company name", value: "companyname" },
        { text: "Status", value: "status" }
      ]
    };
  },
  mounted() {
    /* MatchService.getMachesByUserId()
      .then(response => {
        // eslint-disable-next-line
        console.log(response.data);
        this.matchesByUser = response.data;
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
        // eslint-disable-next-line
        console.log(error);
      }); */
  },
  methods: {
    match() {
      //MatchService.match()
    }
  }
};
</script>

<style scoped>
.form {
  width: 60%;
  margin: auto;
}
</style>