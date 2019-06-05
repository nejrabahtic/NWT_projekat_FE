import axios from 'axios';

export default {
    getSkills: () => (
        axios({
            method: 'get',
            url: 'http://localhost:3000/skills'
        })
    )
}