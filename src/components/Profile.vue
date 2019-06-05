<template>
    <component :is="getComponentName"></component>
</template>

<script>
// import ProfileUser from './ProfileUser';
// import ProfileCompany from './ProfileCompany';
import AuthService from '../services/AuthService.js';
import ProfileUser from "./ProfileUser";
import ProfileCompany from "./ProfileCompany";
import NotFound from "./NotFound";

export default {
    name: "Profile",
    data() {
        return {
            role: AuthService.getRole()
        }
    },
    created() {
        AuthService.subscribe("role_change", () => {
            this.role = AuthService.getRole();
        })
    },
    computed: {
        getComponentName: function() {
            if(this.role === "user")
                return ProfileUser;
            else if (this.role === "company")
                return ProfileCompany;
            else 
                return NotFound;
        }   
    }
}
</script>