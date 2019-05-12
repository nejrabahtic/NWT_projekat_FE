import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import About from '@/components/About'
import NotFound from '@/components/NotFound'
import RegistrationUser from '@/components/RegistrationUser'
import RegistrationCompany from '@/components/RegistrationCompany'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration
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
        }
    ]
})