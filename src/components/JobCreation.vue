<template>  
    <v-container fill-height>
        <v-form style="width:100%">
            <v-layout >
                <v-flex xs6>
                    <v-text-field 
                        prepend-icon="person"
                        label="Name" 
                        type="text"
                        v-model="name"
                        hint="Must be between 6 and 80 characters."
                        counter="80"
                    ></v-text-field>
                    <v-text-field 
                        prepend-icon="location_on" 
                        label="Location" 
                        type="text"
                        v-model="location"
                        hint="Must be between 10 and 80 characters."
                        counter="80"

                    ></v-text-field>
                </v-flex>
                <v-flex offset-xs1 xs2>
                    <v-radio-group pt-1 column v-model="partTime" label="Working hours:" >
                        <v-radio
                            label="Full-time"
                            value="fulltime"
                        ></v-radio>
                        <v-radio 
                            label="Part-time"
                            value="parttime"
                        />
                    </v-radio-group>
                </v-flex>
                <v-flex offset-xs1 xs2>
                    <v-radio-group pt-1 column v-model="remote" label="Flexibility:" >
                        <v-radio 
                        label="On-site"
                        value="onsite"
                        />
                        <v-radio
                        label="Remote"
                        value="remote"
                        ></v-radio>
                    </v-radio-group>
                </v-flex>
            </v-layout>
            <v-textarea
                prepend-icon="info"
                v-model="info"
                label="Job information:"
                hint="Must be between 20 and 500 characters."
                counter="500"
              ></v-textarea>
            <v-text-field 
                prepend-icon="style" 
                label="Requirments:" 
                type="text"
                v-model="requirements"
                hint="Must be between 10 and 250 characters."
                counter="250"
            ></v-text-field>
            <v-flex xs12 pl-4 pt-4>
                <v-autocomplete
                    v-model="skillsToAdd"
                    :items="skills"
                    box
                    chips
                    label="Add skills"
                    item-text="name"
                    item-value="ref"
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
                <v-btn @click="clearJob" color="error">
                    Clear
                    <v-icon right>clear</v-icon>
                </v-btn>    
                <v-btn @click="createJob" color="success">
                    Create
                    <v-icon right>add</v-icon>
                </v-btn>
            </v-layout>
        </v-form>
        <v-snackbar
            v-model="snackbar"
            :bottom="true"
            :timeout="4000"
            > 
            Successfully created Job!
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
import SkillService from '../services/SkillService.js';
import CompanyService from '../services/CompanyService.js';

export default {
    name: "JobCreation",
    data() {
        return {
            name: "",
            location: "",
            partTime: "fulltime",
            remote: "onsite",
            info: "",
            requirements: "",
            skills: [],
            skillsToAdd: [],
            snackbar: false
        }
    },
    mounted(){
        SkillService
            .getCompanySkills()
            .then(response => {
                this.skills = response.data.map(item => {
                    return {
                        id: item.id,
                        name: item.skillName,
                        visible: true,
                        ref: item
                    }
                });
            })
            .catch(error => {
                console.log(error);
            })
    },
    methods:{
        createJob(){
            const { name, location, partTime, remote, info, requirements, skillsToAdd } = this;
            var job = 
            {
                jobname: name,
                location,
                partTime: (partTime === "parttime"),
                remote: (remote === "remote"),
                jobinfo: info,
                requirements,
                skills: skillsToAdd
            }
            CompanyService
                .addJob(job)
                .then(response => {
                    this.snackbar = true;
                    setTimeout(() => {
                        this.$router.push({ path: "/profile" })
                    }, 800)
                    
                })
                .catch(error => {
                    console.log(error);
                })
        },
        clearJob(){

            this.name = "";
            this.location = "";
            this.partTime = "fulltime";
            this.remote = "onsite";
            this.info = "";
            this.requirements = "";
            this.skillsToAdd = [];
        }
    }
};
</script>