import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/page/myHome/myHome.vue'
import Resource from '../views/page/resource/resource.vue'
import Test from '../views/page/test/test.vue'
import AddGroups from '../views/page/addGroups/addGroups.vue'
import Essay from '../views/page/essay/essay.vue'
import Register from '../views/page/register/register.vue'
import Login from '../views/page/login/login.vue'
import adminLogin from '../views/page/adminLogin/adminLogin.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/home'},
    { path: '/home', component: Home },
    { path: '/resource', component: Resource },
    {path: '/test', component: Test},
    {path: '/addgroups', component: AddGroups},
    {path: '/register', component: Register},
    {path: '/login', component: Login},
    {path: '/adminlogin', component: adminLogin},
    {path: '/essay/:zid', component: Essay, props: true},
]

const router = new VueRouter({
  routes
})

export default router
