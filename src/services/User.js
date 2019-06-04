import axios from 'axios';
import Auth from './Auth.js';

export default {
    getUserByToken: () => (
        axios({
            method: 'get',
            url: 'http://localhost:3000/user/profile',
            headers: { 
                "Authorization": Auth.getToken() 
            }
        })
    ),
    postUserData: (user) => (
        axios({
            method: 'post',
            url: 'http://localhost:3000/user/change',
            headers: { 
                "Authorization": Auth.getToken(),
                "Content-Type": "application/json"
            },
            data: user
        })
    )
};