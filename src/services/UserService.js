import axios from 'axios';
import AuthService from './AuthService.js';

let baseUrl = 'localhost:3000'
//let baseUrl = '192.168.3.130:3000'

export default {
    getUserByToken: () => (
        axios({
            method: 'get',
            url: 'http://'+baseUrl+'/user/profile',
            headers: { 
                "Authorization": AuthService.getToken() 
            }
        })
    ),
    postUserData: (user) => (
        axios({
            method: 'post',
            url: 'http://'+baseUrl+'/user/change',
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
            url: 'http://'+baseUrl+'/user/addskills',
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
            url: 'http://'+baseUrl+'/user/removeskill',
            headers: {
                "Authorization": AuthService.getToken(),
                "Content-Type": "application/json"
            },
            data: skill
        })
    ),
    getUsers: () => (
        axios({
            method: 'get',
            url: 'http://'+baseUrl+'/users/users',
            headers: { 
                "Authorization": AuthService.getToken() 
            }
        })
    ),
};