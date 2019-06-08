<template>  
    <v-container>
        <v-form>
            <v-layout>
                <v-flex xs6 >
                    <v-text-field 
                        prepend-icon="person"
                        label="Name" 
                        type="text"
                        v-model="name"
                    ></v-text-field>
                    <v-text-field 
                        prepend-icon="location_on" 
                        label="Location" 
                        type="text"
                        v-model="location"
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
              ></v-textarea>
            <v-text-field 
                prepend-icon="styles" 
                label="Requirments:" 
                type="text"
                v-model="requirments"
            ></v-text-field>
            <v-item-group multiple>
                <v-subheader>Skills</v-subheader>
                <v-item></v-item>
                <v-item></v-item>
            </v-item-group>
        </v-form>
    </v-container>
</template>

<script>

export default {
    name: "JobCreation",
    data() {
        return {
            name: "",
            location: "",
            partTime: "fulltime",
            remote: "onsite"
        }
    }
};
</script>