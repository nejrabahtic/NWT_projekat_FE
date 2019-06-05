<template>
    <v-container fill-height>
        <v-layout row justify-center align-center>
            <v-layout column>
                <v-layout row>
                    <v-flex xs6>
                        <v-layout column justify-center>
                            <p class="display-1 text-xs-center">{{username}}</p>
                            <v-icon size="220">business</v-icon>
                            <p class="display-2 text-xs-center" text-align-center>Company</p>
                        </v-layout>
                    </v-flex>
                    <v-flex xs6>
                        <v-form>
                            <v-text-field
                                prepend-icon="business"
                                label="Full Name"
                                v-model="company.name"
                                type="text"
                                :readonly="!edit"
                                :loading="loading"
                            ></v-text-field>
                            <v-text-field
                                prepend-icon="email"
                                label="Email"
                                v-model="company.email"
                                type="text"
                                :readonly="!edit"
                                :loading="loading"
                            ></v-text-field>
                            <v-text-field
                                prepend-icon="phone"
                                label="Phone Number"
                                v-model="company.phone"
                                mask="+### ## ###-###"
                                :readonly="!edit"
                                :loading="loading"
                            ></v-text-field>
                            <v-textarea
                                prepend-icon="info"
                                v-model="company.info"
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
                                @click="saveCompanyData"
                                color="success"
                                >
                                Save
                                <v-icon right>check</v-icon>
                            </v-btn>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout xs12 pt-4 justify-center>
                    <v-btn
                        @click="navigateToJobCreation"
                    >
                        Add new job    
                    </v-btn>
                </v-layout>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
import AuthService from '../services/AuthService.js';
import CompanyService from '../services/CompanyService.js';
import router from '../router';

export default {
    name: "ProfileCompany",
    data(){
        return {
            username: AuthService.getName(),
            edit: false,
            loading: true,
            company: {
                name: "Name",
                email: "Email@email.com",
                phone: "+387 62 233-500",
                info: "Something"
            },
            savedCompany: {
                name: "",
                email: "",
                phone: "",
                info: ""
            }
        }
    },
    mounted(){
        CompanyService
            .getCompanyByToken()
            .then(response => {
                // eslint-disable-next-line
                console.log(JSON.parse(response.data));
                const { companyemail, companyinfo, companyname, companyphonenumber} = JSON.parse(response.data);
                this.company = {
                    name: companyname? companyname: "Not set",
                    info: companyinfo? companyinfo: "Not set",
                    email: companyemail? companyemail: "Not set",
                    phone: companyphonenumber? companyphonenumber: "+000 00 000-000"
                }
                this.loading = false;
            })
            .catch(error => {
                this.loading = false;
                // eslint-disable-next-line
                console.log(error);    
            })
    },
    methods: {
        enterEditMode(){
            this.edit = true;
            this.savedCompany = Object.assign({}, this.company);
        },
        cancleEditMode(){
            this.edit = false;
            this.company = Object.assign({}, this.savedCompany);
        },
        saveCompanyData(){
            this.loading = true;
            CompanyService
                .postCompanyData({
                    companyemail: this.company.email,
                    companyinfo: this.company.info,
                    companyname: this.company.name,
                    companyphonenumber: this.company.phone
                })
                .then(response => {
                    const { companyemail, companyinfo, companyname, companyphonenumber} = response.data;
                    this.company = {
                        name: companyname? companyname: "Not set",
                        info: companyinfo? companyinfo: "Not set",
                        email: companyemail? companyemail: "Not set",
                        phone: companyphonenumber? companyphonenumber: "+000 00 000-000"
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
        navigateToJobCreation(){
            router.push({path: "/job/creation"})
        }
    }
}

</script>