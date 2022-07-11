import Auth from '@/middlewares/auth'
import config from '@/config'

const Routes = [
    {
        path: '/',
        name: config.routes.dashboard,
        meta: {
            middleware: [Auth]
        },
        component: () => import(/* webpackChunkName: "dashboard" */ "@/modules/dashboard/views/index.vue")
    },
    {
        path: '/login',
        name: config.routes.login,
        meta: {
            layout: 'auth'
        },
        component: () => import(/* webpackChunkName: "login" */ "@/modules/auth/views/login.vue")
    },
    {
        path: '/register',
        name: config.routes.register,
        meta: {
            layout: 'auth'
        },
        component: () => import(/* webpackChunkName: "register" */ "@/modules/auth/views/register.vue")
    },
    {
        path: '/products',
        name: config.routes.products,
        meta: {
            middleware: [Auth]
        },
        component: () => import(/* webpackChunkName: "products" */ "@/modules/product/index.vue")
    },
    {
        path: '/stores',
        name: config.routes.stores,
        meta: {
            middleware: [Auth]
        },
        component: () => import(/* webpackChunkName: "products" */ "@/modules/store/index.vue")
    },
    {
        path: '/settings',
        name: config.routes.settings,
        meta: {
            middleware: [Auth]
        },
        component: () => import(/* webpackChunkName: "products" */ "@/modules/setting/index.vue")
    },
    {
        // Routes Example
        path: '/articles',
        component: () => import(/* webpackChunkName: "articles" */ "@/modules/article/views/layout.vue"),
        children: [
            {
                path: "",
                name: config.routes.article,
                component: () =>
                  import(/* webpackChunkName: "articles" */ "@/modules/article/views/index.vue"),
            },
            {
                path: "create",
                name: config.routes.createArticle,
                component: () =>
                  import(/* webpackChunkName: "articles" */ "@/modules/article/views/create.vue"),
            },
            {
                path: ":id",
                name: config.routes.detailArticle,
                component: () =>
                  import(/* webpackChunkName: "articles" */ "@/modules/article/views/detail.vue"),
            }
        ]
    },
    {
        path: '*',
        name: config.routes.pageNotFound,
        meta: {
            layout: 'page-not-found-layout'
        },
        component: () => import(/* webpackChunkName: "pagenotfound" */"@/components/PageNotFound.vue")
    }
]

export default Routes