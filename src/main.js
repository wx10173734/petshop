import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import moment from 'moment'
Vue.prototype.moment = moment;

import router from "./router/router.js";

new Vue({
    render: h => h(App),
    router
}).$mount('#app')