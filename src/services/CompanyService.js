import axios from 'axios';
import AuthService from './AuthService.js';

let baseUrl = 'localhost:3000'
//let baseUrl = '192.168.3.130:3000'

export default {
    getCompanyByToken: () => (
        axios({
            method: 'get',
            url: 'http://'+baseUrl+'/company/profile',
            headers: { 
                "Authorization": AuthService.getToken() 
            }
        })
    ),
    postCompanyData: (company) => (
        axios({
            method: 'post',
            url: 'http://'+baseUrl+'/company/change',
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
            url: 'http://'+baseUrl+'/company/addJob',
            headers: { 
                "Authorization": AuthService.getToken(),
                "Content-Type": "application/json"
            },
            data: job
        })
    ),
    getCompanies: () => (
        axios({
            method: 'get',
            url: 'http://'+baseUrl+'/companies/companies',
            headers: { 
                "Authorization": AuthService.getToken() 
            }
        })
    ),
};