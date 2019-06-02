import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import About from '@/components/About'
import NotFound from '@/components/NotFound'
// import RegistrationUser from '@/components/RegistrationUser'
// import RegistrationCompany from '@/components/RegistrationCompany'
import HomeCompany from '@/components/HomeCompany';
import Profile from '@/components/Profile';

import UsersList from '@/components/UsersList'
import User from '@/components/User'
import Auth from '../services/Auth.js';

Vue.use(VueRouter)


var router =  new VueRouter({
    mode: 'history',
    routes: [
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
            path: '/',
            name: 'Home',
            component: Home,   
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/about',
            name: 'About',
            component: About
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
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})

router.beforeEach((to, _from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth) && !Auth.isLoggedIn()){
        next({
            path: 'login'
        })
    } else {
        next();
    }
});

export default router;