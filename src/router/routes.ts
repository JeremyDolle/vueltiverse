import { RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';
import Details from '../views/Details.vue';

const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'details',
        path: '/character/:id',
        component: Details,
    },
];

export default routes;
