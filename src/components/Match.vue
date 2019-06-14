<template>
  <v-container fill-height fluid>
    <v-layout row justify-center align-center>
          <v-flex xs5 offset-xs1>
            <v-layout row justify-center>
              <v-btn
                @click="getMatch"
              >Match</v-btn>
            </v-layout>
            <v-flex v-if="matchid !== null" class="form" justify-center align-center>
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
            <v-flex v-else class="form notMatched">
              <v-layout row justify-center align-center fill-height class="px-4"  >
                <v-flex text-xs-center class="px-4">
                  <p class="display-1 px-4">Please press the match button above so we can find you a job!</p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-layout row justify-center>
              <v-btn 
                :disabled="matchid === null"
                color="primary" 
                dark
                @click="acceptJob"
                >
                Accept
                <v-icon dark right>check_circle</v-icon>
              </v-btn>
              <v-btn 
                :disabled="matchid === null"
                color="red" 
                dark
                @click="declineJob"
                >
                Decline
                <v-icon dark right>block</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
          <v-flex xs5 offset-xr1>
            <v-layout row justify-center align-center>
              <v-data-table :headers="headers" :items="matchesByUser" class="elevation-1">
                <template v-slot:items="props" class="text-xs-center">
                  <td class="text-xs-left">{{ props.item.jobname }}</td>
                  <td class="text-xs-left">{{ props.item.companyname }}</td>
                  <td class="text-xs-left">{{ props.item.status === 1? "ACCEPTED":    
                                              props.item.status === 2? "DECLINED":
                                              "NOT ANSWERED"}}</td>
                </template>
              </v-data-table>
            </v-layout>
          </v-flex>

    </v-layout>
    <v-snackbar
    v-model="snackbar"
    :bottom="true"
    :timeout="4000"
  > 
    We found a job for you!
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
import MatchService from '../services/MatchService.js';

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
      matchid: null,
      matchesByUser: [],
      headers: [
        { text: "Job name", value: "jobname" },
        { text: "Company name", value: "companyname" },
        { text: "Status", value: "status" }
      ],
      snackbar: false
    };
  },
  methods: {
    getMatch(){
      MatchService
        .match()
        .then(response => {
          console.log(response.data);
          const {jobname, jobinfo, location, partTime, remote, requirements} = response.data.job;
          this.job = {
              jobname,
              jobinfo,
              location,
              requirements,
              remote,
              partTime
            }
          this.matchid = response.data.id;
          this.snackbar = true;
        })
        .catch(error => {
          console.log(error);
        })
    },
    acceptJob(){
      MatchService
        .decide(this.matchid, true)
        .then(response => {
            console.log(response);
            this.matchid = null;
            this.updateHistory();

        })
        .catch(error => {
            console.log(error);
        })
    }, 
    declineJob(){
      MatchService
        .decide(this.matchid, false)
        .then(response => {
            console.log(response);
            this.matchid = null;
            this.updateHistory();
        })
        .catch(error => {
            console.log(error);
        })
    },
    updateHistory(){
      MatchService.getMatchesByUserId()
      .then(response => {
        // eslint-disable-next-line
        console.log(response.data);
        this.matchesByUser = JSON.parse(response.data).map(match => ({
          jobname: match.jobName,
          companyname: match.companyName,
          status: (match.request)? match.request.accepted? 1: 2 : 3
        }));
        // this.loading = false;
      })
      .catch(error => {
        // this.loading = false;
        // eslint-disable-next-line
        console.log(error);
      }); 
    }
  },
  mounted() {
     MatchService.getMatchesByUserId()
      .then(response => {
        // eslint-disable-next-line
        console.log(response.data);
        this.matchesByUser = JSON.parse(response.data).map(match => ({
          jobname: match.jobName,
          companyname: match.companyName,
          status: (match.request)? match.request.accepted? 1: 2 : 3
        }));
        // this.loading = false;
      })
      .catch(error => {
        // this.loading = false;
        // eslint-disable-next-line
        console.log(error);
      }); 
  }
};
</script>

<style scoped>
  .form {
    margin: auto;
  }
  .notMatched{
    height: 474.167px;
  }
</style>