<template>
  <v-container fill-height>
    <v-layout row justify-center align-center>
      <v-flex>
        <v-autocomplete
          :items="jobs"
          v-model="selectedJob"
          label="Jobs"  
          no-data-text="You currently don't have any jobs."
          change="autoCompleteChange"
        ></v-autocomplete>

        <v-data-table :headers="headers" :items="data" class="elevation-1">
          <template v-slot:items="props" class="text-xs-center">
            <td class="text-xs-left">{{ props.item.userName }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MatchService from '../services/MatchService.js';

export default {
  name: "Match",
  data() {
    return {
      edit: false,
      loading: true,
      headers: [
        { text: "User Name", value: "userName" },
        { text: "Status", value: "status" }
      ],
      jobs: [],
      selectedJob: null,
      jobsWithUsers: []
    };
  },
  computed:{
    data(){
      if(this.selectedJob == null)
        return [];
      return this.jobsWithUsers
              .filter(item => item.jobName === this.selectedJob)
              .map(item => ({status: (item.request === null)? "UNDECIDED" : (item.request.accepted)? "ACCEPTED": "DECLINED" , ...item}));
    }
  },
  mounted() {
    MatchService
      .getApplications()
      .then(response => {
        this.jobsWithUsers = JSON.parse(response.data);
        var jobsMap = {};
        this.jobsWithUsers.forEach(item => {
          jobsMap[item.jobName] = true;
        })
        this.jobs = Object.keys(jobsMap);
      })
      .catch(error => {
        console.log(error);
      })
  }
};
</script>

<style scoped>
</style>