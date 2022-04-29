import { RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
];

export default routes;
