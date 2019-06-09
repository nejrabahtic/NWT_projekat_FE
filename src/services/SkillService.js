import axios from 'axios';

let baseUrl = 'localhost:3000'
//let baseUrl = '192.168.3.130:3000'

export default {
    getUserSkills: () => (
        axios({
            method: 'get',
            url: 'http://'+baseUrl+'/users/skills'
        })
    ),
    getCompanySkills: () => (
        axios({
            method: 'get',
            url: 'http://'+baseUrl+'/companies/skills'
        })
    )
}