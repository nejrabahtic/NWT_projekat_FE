import axios from 'axios';
import AuthService from './AuthService.js';

export default {
    getCompanyByToken: () => (
        axios({
            method: 'get',
            url: 'http://localhost:3000/company/profile',
            headers: { 
                "Authorization": AuthService.getToken() 
            }
        })
    ),
    postCompanyData: (company) => (
        axios({
            method: 'post',
            url: 'http://localhost:3000/company/change',
            headers: { 
                "Authorization": AuthService.getToken(),
                "Content-Type": "application/json"
            },
            data: company
        })
    ),
    addJob: (job) => (
        axios({
            method: 'post',
            url: 'http://localhost:3000/company/addJob',
            headers: { 
                "Authorization": AuthService.getToken(),
                "Content-Type": "application/json"
            },
            data: job
        })
    )
};