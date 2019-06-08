<template>
    <v-navigation-drawer
      clipped
      v-model="drawer"
      fixed
      left
      stateless
      app
    >
      <v-list class="pt-4" dense dark flat >
        <v-list-tile v-for="item in items" :key="item.title" router :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
          no-action
          sub-group
          v-model="companies.active"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>business</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Company</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="company in companies.routes"
            :key="company.name"
            router
            :to="company.route"
            >
            <v-list-tile-title>{{ company.name }}</v-list-tile-title>
          </v-list-tile>

        </v-list-group>
        <v-list-group
          no-action
          sub-group
          v-model="users.active"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>people</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>User</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="user in users.routes"
            :key="user.name"
            router
            :to="user.route"
            >
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          </v-list-tile>
          
        </v-list-group>
        <v-list-group
          no-action
          sub-group
          v-model="jobs.active"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>card_travel</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Jobs</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="job in jobs.routes"
            :key="job.name"
            router
            :to="job.route"
            >
            <v-list-tile-title>{{ job.name }}</v-list-tile-title>
          </v-list-tile>
          
        </v-list-group>
        <v-list-tile @click="signout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Sign out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import AuthService from "../services/AuthService.js";
import router from '../router';

  export default {
    props: {
      drawer: Boolean,
      closeDrawer: Function
    },
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard', route: '/' },
          { title: 'Profile', icon: 'person', route: '/profile' },
          { title: 'About', icon: 'question_answer', route: '/about' }
        ],
        companies:{
          active: true,
          routes: [
            {
              route: "/company/overview",
              name: "Overview"
            }
          ]
        },
        users: {
          active: true,
          routes: [
            {
              route: "/users/overview",
              name: "Overview"
            }
          ]
        },
        jobs: {
          active: true,
          routes: [
            {
              route: "/jobs/create",
              name: "Create"
            },
            {
              route: "/jobs/overview",
              name: "Overview"
            }
          ]
        },
        right: null
      }
    },
    methods: {
      signout(){
        AuthService.clear()
        this.closeDrawer();
        router.push({path: "/login"});
      }

    },
  }
</script>