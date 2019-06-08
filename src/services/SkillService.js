import axios from 'axios';

export default {
    getUserSkills: () => (
        axios({
            method: 'get',
            url: 'http://localhost:3000/users/skills'
        })
    ),
    getCompanySkills: () => (
        axios({
            method: 'get',
            url: 'http://localhost:3000/companies/skills'
        })
    )
}