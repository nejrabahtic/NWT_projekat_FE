<template>
  <v-data-table :headers="headers" :items="users" class="elevation-1 table-view">
    <template v-slot:items="props" class="text-xs-center">
      <!-- <td>{{ props.item.name }}</td> -->
      <td class="text-xs-left">{{ props.item.id }}</td>
      <td class="text-xs-left">{{ props.item.username }}</td>
      <td class="text-xs-left">{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.info }}</td>
      <td class="text-xs-left">{{ props.item.phoneNumber }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "UsersList",
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "UserName", value: "username" },
        { text: "Email", value: "email" },
        { text: "Info", value: "info" },
        { text: "Phone Number", value: "phoneNumber" }
      ],
      users: [
        {
          id: "1",
          username: "nejrabahtic",
          email: "nejrabahtic@gmail.com",
          info: "Something about nejra",
          phoneNumber: "+387 00-000-000"
        },
        {
          id: "2",
          username: "delmond",
          email: "muhameddelalic@gmail.com",
          info: "Something about delmond",
          phoneNumber: "+387 000-111-222"
        },
        {
          id: "3",
          username: "nejrabahtic",
          email: "nejrabahtic@gmail.com",
          info: "Something about nejra",
          phoneNumber: "+387 00-000-000"
        },
        {
          id: "4",
          username: "delmond",
          email: "muhameddelalic@gmail.com",
          info: "Something about delmond",
          phoneNumber: "+387 000-111-222"
        },
        {
          id: "5",
          username: "nejrabahtic",
          email: "nejrabahtic@gmail.com",
          info: "Something about nejra",
          phoneNumber: "+387 00-000-000"
        },
        {
          id: "6",
          username: "delmond",
          email: "muhameddelalic@gmail.com",
          info: "Something about delmond",
          phoneNumber: "+387 000-111-222"
        }
      ]
    };
  }
};
</script>

<style scoped>
  .table-view{
    width: 70%;
    /* margin-left: auto; */
    margin: auto;
    margin-top: 5%;
  }
</style>