//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

const Main = () => import('views/Main.vue');
const Home = () => import('views/home/Home.vue');
const User = () => import('views/user/User.vue');
const Manage = () => import('views/manage/Manage.vue');
const Approval = () => import('views/approval/Approval.vue');
const Apply = () => import('views/apply/Apply.vue');
const Calendar = () => import('views/calendar/Calendar.vue');
const Department = () => import('views/department/Department.vue');
const List = () => import('views/list/List.vue');
const Setting = () => import('views/setting/Setting')

const routes = [
    {
        path: "/",
        redirect: "/main"
    },
    {
        path: "/main",
        component: Main,
        redirect: "/home",
        children: [
            {
                path: "/home",
                component: Home
            },
            {
                path: "/user",
                component: User
            },
            {
                path: "/manage",
                component: Manage
            },
            {
                path: "/approval",
                component: Approval
            },
            {
                path: "/apply",
                component: Apply
            },
            {
                path: "/calendar",
                component: Calendar
            },
            {
                path: "/department",
                component: Department
            },
            {
                path: "/list",
                component: List
            },
            {
                path: "/setting",
                component: Setting
            },
        ]
    }
]

//创建路由对象
const router = new VueRouter({
    //配置路由和组件之间的关系
    routes,
    mode: "history"
})

//将router对象传入vue实例
export default router