import axios from 'axios';
import AuthService from './AuthService.js';

export default {
    getUserByToken: () => (
        axios({
            method: 'get',
            url: 'http://localhost:3000/user/profile',
            headers: { 
                "Authorization": AuthService.getToken() 
            }
        })
    ),
    postUserData: (user) => (
        axios({
            method: 'post',
            url: 'http://localhost:3000/user/change',
            headers: { 
                "Authorization": AuthService.getToken(),
                "Content-Type": "application/json"
            },
            data: user
        })
    ),
    addSkillsToUser: (skills) => (
        axios({
            method: 'post',
            url: 'http://localhost:3000/user/addskills',
            headers: {
                "Authorization": AuthService.getToken(),
                "Content-Type": "application/json"
            },
            data: skills
        })
    ),
    removeSkillFromUser: (skill) => (
        axios({
            method: 'delete',
            url: "http://localhost:3000/user/removeskill",
            headers: {
                "Authorization": AuthService.getToken(),
                "Content-Type": "application/json"
            },
            data: skill
        })
    )
};