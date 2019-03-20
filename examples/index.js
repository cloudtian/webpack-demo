import Vue from 'vue';
import App from './app.vue';
import router from './router';

import Componet from '../src/index';
Vue.use(Componet);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});