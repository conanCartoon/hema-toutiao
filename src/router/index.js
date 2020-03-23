import VueRouter from "vue-router"
import Vue from "vue"
Vue.use(VueRouter)
import Login from "../views/Login.vue"

const routes = [
    { path: "/login", component: Login }
]
const router = new VueRouter({
    routes
})
export default router