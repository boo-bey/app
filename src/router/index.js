import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Layout',
        component: () =>
            import ('@/views/Layout.vue'),
        children: [{
                path: '/',
                name: 'Home',
                component: () =>
                    import ('@/views/Home.vue')
            },
            {
                path: '/news',
                name: 'News',
                component: () =>
                    import ('@/views/News.vue')
            },
            {
                path: '/main',
                name: 'Main',
                component: () =>
                    import ('@/views/Main.vue')
            }

        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('@/views/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    console.log(to.path)
    next()
})
export default router