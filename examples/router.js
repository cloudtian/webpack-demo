import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */ './views/home.vue')
    }, {
        path: '/card',
        component: () => import(/* webpackChunkName: "card" */ './views/card.vue')
    }]
});

