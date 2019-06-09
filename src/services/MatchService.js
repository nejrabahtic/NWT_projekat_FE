import axios from 'axios';
import AuthService from './AuthService.js';

//let baseUrl = 'localhost:3000'
let baseUrl = '192.168.1.8:3000'

export default {
    getHistory: () => (
        axios({
            method: 'get',
            url: 'http://'+baseUrl+'/match/profile',
            headers: { 
                "Authorization": AuthService.getToken() 
            }
        })
    ),
    getMatchesByUserId: (company) => (
        axios({
            method: 'get',
            url: 'http://'+baseUrl+'/match/user',
            headers: { 
                "Authorization": AuthService.getToken()
            }
        })
    )
};