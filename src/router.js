import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Index"
import Confirm from "@/views/Confirm";
import Sign from "@/views/Sign";
import Save from "@/views/Save";
import Notice from "@/views/Notice"
import Complate from "@/views/Complate"
import Check from "@/views/Check"
import Success from "@/views/Success"
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: Index
        },
        {
            path: "/confirm",
            component: Confirm
        },
        {
            path:"/sign",
            component: Sign
        },
        {
            path:"/save",
            component: Save
        },
        {
            path:"/notice",
            component: Notice
        },
        {
            path:"/complate",
            component: Complate

        },
        {
            path:"/check",
            component: Check

        },
        {
            path:"/success",
            component: Success

        }
    ]
})
