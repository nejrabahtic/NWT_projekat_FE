<template>
  <v-container fill-height>
    <v-layout row justify-center align-center>
      <v-data-table :headers="headers" :items="users" class="elevation-1">
        <template v-slot:items="props" class="text-xs-center">
          <td class="text-xs-left">{{ props.item.id }}</td>
          <td class="text-xs-left">{{ props.item.userName }}</td>
          <td class="text-xs-left">{{ props.item.userEmail }}</td>
          <td class="text-xs-left">{{ props.item.userInfo }}</td>
          <td class="text-xs-left">{{ props.item.userPhoneNumber }}</td>
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>

<script>
import UserService from "../services/UserService";

export default {
  name: "UsersList",
  data() {
    return {
      loading: true,
      users: [],
      headers: [
        { text: "Id", value: "id" },
        { text: "Username", value: "userName" },
        { text: "Email", value: "userEmail" },
        { text: "Info", value: "userInfo" },
        { text: "Phone Number", value: "userPhoneNumber" }
      ]
    };
  },
  mounted() {
    UserService.getUsers()
      .then(response => {
        // eslint-disable-next-line
        console.log(response.data);
        this.users = response.data;
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
