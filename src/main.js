import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
require("./api/interceptor");
Vue.config.productionTip = false;
const { token } = localStorage;
store.commit("auth/LOGIN", token);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
