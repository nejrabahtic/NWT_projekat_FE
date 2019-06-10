<template>
    <component :is="getComponentName"></component>
</template>

<script>
import AuthService from '../services/AuthService.js';
import Match from "./Match";
import MatchCompany from "./MatchCompany";
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
                return Match;
            else if (this.role === "company")
                return MatchCompany;
            else 
                return NotFound;
        }   
    }
}
</script>