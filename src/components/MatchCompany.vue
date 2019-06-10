<template>
  <v-container fill-height>
    <v-layout row justify-center align-center>
      <v-flex>
        <v-data-table :headers="headers" :items="data" class="elevation-1">
          <template v-slot:items="props" class="text-xs-center">
            <td class="text-xs-left">{{ props.item.jobname }}</td>
            <td class="text-xs-left">{{ props.item.companyname }}</td>
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
      data: [],
      headers: [
        { text: "Job name", value: "jobname" },
        { text: "Company name", value: "companyname" }
      ]
    };
  },
  mounted() {
    /* MatchService.getJobListFromCompany()
      .then(response => {
        // eslint-disable-next-line
        console.log(response.data);
        this.data = response.data;
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
        // eslint-disable-next-line
        console.log(error);
      }); */
  }
};
</script>

<style scoped>
</style>