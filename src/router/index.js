import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import About from '@/components/About'
import NotFound from '@/components/NotFound'
import RegistrationUser from '@/components/RegistrationUser'
import RegistrationCompany from '@/components/RegistrationCompany'
import HomeCompany from '@/components/HomeCompany';

import UsersList from '@/components/UsersList'
import User from '@/components/User'
import Auth from '../services/Auth.js';

Vue.use(VueRouter)


var router =  new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            beforeEnter: (_to, _from , next) => {
                if(Auth.isLoggedIn()){
                    next("/")
                } else{
                    next();
                }
            }
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration,
            beforeEnter: (_to, _from , next) => {
                if(Auth.isLoggedIn()){
                    next("/")
                } else{
                    next();
                }
            }
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/register-user',
            name: 'RegistrationUser',
            component: RegistrationUser
        },
        {
            path: '/register-company',
            name: 'RegistrationCompany',
            component: RegistrationCompany
        },
        {
            path: '/company',
            name: 'HomeCompany',
            component: HomeCompany
        },
        {
            path: '/users',
            name: 'UsersList',
            component: UsersList
        },
        {
            path: '/user',
            name: 'User',
            component: User
        }
    ]
})

// router.beforeEach((to, from, next) => {

// });

export default router;