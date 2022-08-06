/* router - router.js */


import MainPage from "@/pages/MainPage";
import {
    createRouter,
    createWebHistory
} from "vue-router";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";

const routes = [{
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    /* путь к странице где используем vuex */
    /* vuex - библиотека управления состояния */
    {
        path: '/store',
        component: PostPageWithStore
    },
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;