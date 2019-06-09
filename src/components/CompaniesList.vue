<template>
  <v-data-table :headers="headers" :items="companies" class="elevation-1">
    <template v-slot:items="props" class="text-xs-center">
      <td class="text-xs-left">{{ props.item.companyname }}</td>
      <td class="text-xs-left">{{ props.item.companyemail }}</td>
      <td class="text-xs-left">{{ props.item.companyinfo }}</td>
      <td class="text-xs-left">{{ props.item.companyphonenumber }}</td>
    </template>
  </v-data-table>
</template>

<script>
import CompanyService from '../services/CompanyService';

export default {
  name: "UsersList",
  data() {
    return {
      loading: true,
      companies: [],
      headers: [
        { text: "Company name", value: "companyname" },
        { text: "Email", value: "companyemail" },
        { text: "Info", value: "companyinfo" },
        { text: "Phone Number", value: "companyphonenumber" }
      ]
    };
  },
  mounted() {
    CompanyService.getCompanies()
      .then(response => {
        // eslint-disable-next-line
        console.log(response.data);
        this.companies = response.data;
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
        // eslint-disable-next-line
        console.log(error);
      });
  }
};
</script>

<style scoped>
</style>