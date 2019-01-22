import { createProvider } from "@/apollo";
import App from "@/App.vue";
import router from "@/router";
import "@/vuetify";
import "@babel/polyfill";
import Vue from "vue";

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App),
  router
}).$mount("#app");
