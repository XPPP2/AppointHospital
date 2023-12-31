import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/Index'
import Login from '../views/Login'
import Register from '../views/Register'
import Doctor from '../views/front/Doctor'
import User from '../views/front/User'
import Appoint from '../views/front/Appoint'
import Pay from '../views/front/Pay'
import AppointMine from '../views/front/AppointMine'
import CaseMine from '../views/front/CaseMine'

import AdminIndex from '../views/admin/Index'
import AdminLogin from '../views/admin/Login'
import AdminMember from '../views/admin/member/Member'
import AdminAdvert from '../views/admin/advert/Advert'
import AdminHospital from '../views/admin/hospital/Hospital'
import AdminDept from '../views/admin/hospital/Dept'
import AdminDoctor from '../views/admin/hospital/Doctor'
import AdminAppoint from '../views/admin/appoint/Appoint'
import AdminCase from '../views/admin/appoint/Case'
import AdminSetting from '../views/admin/appoint/Setting'
import AdminNotice from '../views/admin/sys/Notice'
import AdminUser from '../views/admin/sys/User'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }, 
        {
            path: '/doctor',
            name: 'Doctor',
            component: Doctor
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
        {
            path: '/appoint',
            name: 'Appoint',
            component: Appoint
        },
        {
            path: '/pay',
            name: 'Pay',
            component: Pay
        },
        {
            path: '/appoint_mine',
            name: 'AppointMine',
            component: AppointMine
        },      
        {
            path: '/case_mine',
            name: 'CaseMine',
            component: CaseMine
        },     
        {
            path: '/admin_index',
            name: 'AdminIndex',
            component: AdminIndex
        },
        {
            path: '/admin_login',
            name: 'AdminLogin',
            component: AdminLogin
        },
        {
            path: '/admin_member',
            name: 'AdminMember',
            component: AdminMember
        },
        {
            path: '/admin_advert',
            name: 'AdminAdvert',
            component: AdminAdvert
        },
        {
            path: '/admin_case',
            name: 'AdminCase',
            component: AdminCase
        },
        {
            path: '/admin_dept',
            name: 'AdminDept',
            component: AdminDept
        },
        {
            path: '/admin_doctor',
            name: 'AdminDoctor',
            component: AdminDoctor
        },
        {
            path: '/admin_appoint',
            name: 'AdminAppoint',
            component: AdminAppoint
        },
        {
            path: '/admin_hospital',
            name: 'AdminHospital',
            component: AdminHospital
        },
        {
            path: '/admin_setting',
            name: 'AdminSetting',
            component: AdminSetting
        },
        {
            path: '/admin_notice',
            name: 'AdminNotice',
            component: AdminNotice
        },
        {
            path: '/admin_user',
            name: 'AdminUser',
            component: AdminUser
        }
    ]
})