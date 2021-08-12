import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vSelect from 'vue-select'
import { BootstrapVue } from 'bootstrap-vue';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout the project
Vue.use(BootstrapVue);
Vue.component("v-select", vSelect);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

