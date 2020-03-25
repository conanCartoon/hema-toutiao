import VueRouter from "vue-router"
import Vue from "vue"
Vue.use(VueRouter)
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import Welcome from "../views/Welcome.vue"
import auth from "@/utils/auth"

const routes = [
    {
        path: '/', component: Home, children: [
            { path: '/', component: Welcome }
        ]
    },
    { path: "/login", component: Login }
]
const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    const user = auth.getUser()
    if (to.path !== ('/login') && !user.token) return next('/login')
    next();
})
export default router