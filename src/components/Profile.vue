<template>
    <component :is="getComponentName"></component>
</template>

<script>
// import ProfileUser from './ProfileUser';
// import ProfileCompany from './ProfileCompany';
import Auth from '../services/Auth.js';
import ProfileUser from "./ProfileUser";
import ProfileCompany from "./ProfileCompany";
import NotFound from "./NotFound";

export default {
    name: "Profile",
    data() {
        return {
            role: Auth.getRole()
        }
    },
    created() {
        Auth.subscribe("role_change", () => {
            this.role = Auth.getRole();
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