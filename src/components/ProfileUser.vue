<template>
  <v-container fill-height>
    <v-layout row justify-center align-center>
      <v-layout column>
        <v-layout row>
          <v-flex xs6>
            <v-layout column justify-center>
              <p class="display-1 text-xs-center">{{ username }}</p>
              <v-icon size="220">person</v-icon>
              <p class="display-2 text-xs-center" text-align-center>User</p>
            </v-layout>
          </v-flex>
          <v-flex xs6>
            <v-form>
              <v-text-field
                prepend-icon="person"
                label="Full Name"
                v-model="user.name"
                type="text"
                :readonly="!edit"
                :loading="loading"
              ></v-text-field>
              <v-text-field
                prepend-icon="email"
                label="Email"
                v-model="user.email"
                type="text"
                :readonly="!edit"
                :loading="loading"
              ></v-text-field>
              <v-text-field
                prepend-icon="phone"
                label="Phone Number"
                v-model="user.phone"
                mask="+### ## ###-###"
                :readonly="!edit"
                :loading="loading"
              ></v-text-field>
              <v-textarea
                prepend-icon="info"
                v-model="user.info"
                label="About yourself:"
                :readonly="!edit"
                :loading="loading"
              ></v-textarea>
            </v-form>
            <v-layout v-if="!edit" xs12 justify-end>
              <v-btn 
                @click="enterEditMode"
                >
                Edit
                <v-icon right>edit</v-icon>
              </v-btn>
            </v-layout>
            <v-layout v-else xs12 justify-end>
              <v-btn 
                @click="cancleEditMode"
                color="error"
                >
                Cancle
                <v-icon right>clear</v-icon>
              </v-btn>
              <v-btn 
                @click="saveUserData"
                color="success"
                >
                Save
                <v-icon right>check</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-flex xs12>
          <v-item-group multiple>
            <v-subheader>Skills</v-subheader>
            <v-item
              v-for="(skill, index) in userSkills"
              :key="index"
            >
              <v-chip
                  v-model="skill.visible"
                  close
                  @input="removeSkill(skill)"
                >
                {{skill.name}}
              </v-chip>
            </v-item>
          </v-item-group>
        </v-flex>
        <v-flex xs12 pt-4>
          <v-autocomplete
              v-model="skillsToAdd"
              :items="fileredSkills"
              box
              chips
              label="Add skills"
              item-text="name"
              item-value="id"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  :selected="data.selected"
                  close
                  class="chip--select-multi"
                >
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>
                <template v-else>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                  </v-list-tile-content>
                </template>
              </template>
            </v-autocomplete>
        </v-flex>
        <v-layout xs12 justify-end>
          <v-btn @click="addSkills">
            Add
            <v-icon right>add</v-icon>
          </v-btn>
        </v-layout>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import AuthService from '../services/AuthService.js';
import UserService from '../services/UserService.js';
import SkillService from '../services/SkillService.js';

export default {
  name: "ProfileUser",
  data(){
    return {
      user: {
        name: "",
        info: "",
        email: "",
        phone: "",
        skills: []
      },
      savedUser: {
        name: "",
        info: "",
        email: "",
        phone: ""
      },
      username: AuthService.getName(),
      skills: [],
      userSkills: [],
      skillsToAdd: [],
      edit: false,
      loading: true
    };
  },
  computed: {
    fileredSkills(){
      return this.skills.filter( skill => {
        return !this.userSkills.find( userSkill => userSkill.name == skill.name);
      })
    }
  },
  mounted(){
    UserService
      .getUserByToken()
      .then(response => {
        const { userEmail, userInfo, userName, userPhoneNumber, skills } = JSON.parse(response.data);
        this.user = {
          name: userName? userName: "Not set",
          info: userInfo? userInfo: "Not set",
          email: userEmail? userEmail: "Not set",
          phone: userPhoneNumber? userPhoneNumber: "+000 00 000-000"
        }
        this.userSkills = skills.map(item => {
          return {
            id: item.id,
            name: item.skillName,
            visible: true
          }
        })
        this.loading = false;
      })
      .catch(error => {       
        // eslint-disable-next-line
        console.log(error);
        this.loading = false;
      })
    SkillService
      .getSkills()
      .then(response => {
        this.skills = response.data.map(item => {
          return {
            id: item.id,
            name: item.skillName,
            visible: true
          }
        });
      })
  },
  methods: {
    enterEditMode(){
      this.edit = true;
      this.savedUser = Object.assign({}, this.user);

    },
    cancleEditMode(){
      this.edit = false;
      this.user = Object.assign({}, this.savedUser);
    },
    saveUserData(){
      this.loading = true;
      UserService
        .postUserData({
            userName: this.user.name,
            userEmail: this.user.email,
            userInfo: this.user.info,
            userPhoneNumber: this.user.phone
        })
        .then(response => {
            const { userEmail, userInfo, userName, userPhoneNumber } = response.data;
            this.user = {
              name: userName? userName: "Not set",
              info: userInfo? userInfo: "Not set",
              email: userEmail? userEmail: "Not set",
              phone: userPhoneNumber? userPhoneNumber: "+000 00 000-000"
            }
            this.loading = false;
            this.edit = false;
        })
        .catch(error => {
          this.loading = true;
          // eslint-disable-next-line
          console.log(error);
        })
    },
    addSkills(){
      UserService
        .addSkillsToUser(this.skillsToAdd)
        .then(response => {
          this.userSkills = response.data.skills.map(item => {
            return {
              id: item.id,
              name: item.skillName,
              visible: true
            }
          })
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
        })
    },
    removeSkill(skill){
      UserService
        .removeSkillFromUser(skill)
        .then(response => {
          this.userSkills = response.data.skills.map(item => {
            return {
              id: item.id,
              name: item.skillName,
              visible: true
            }
          })
          this.skillsToAdd = [];
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
        });
    }
  }
}
</script>