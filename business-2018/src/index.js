import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './app.vue';
import state from 'common/state.js';
import routes from 'common/router.js';

Vue.use(Vuex);
Vue.use(VueRouter);

var store = new Vuex.Store(state);
var router = new VueRouter({
    routes
});

Vue.config.debug = true;//开启错误提示
var app = new Vue({
    el:"#app",
    store,
    router,
    render:h => h(App)
});