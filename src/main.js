import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from './routes';
import { store } from "./store";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.filter('capitalize', val => val.charAt(0).toUpperCase() + val.substr(1, val.length));
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount("#app");
