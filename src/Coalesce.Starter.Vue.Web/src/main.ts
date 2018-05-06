import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { AxiosClient as CoalesceAxiosClient } from 'coalesce-vue'

Vue.config.productionTip = false;

CoalesceAxiosClient.defaults.baseURL = '/api'
CoalesceAxiosClient.defaults.withCredentials = true

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
