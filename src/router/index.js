import { createRouter, createWebHistory } from 'vue-router';
import PortfolioVue from './routes/Portfolio.vue';

const routes = [
    {
        path: '/',
        name: 'Portfolio',
        component: PortfolioVue
    },
    /* {
        path: '/login',
        name: 'Login',
        component: LoginVue
    } */
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
