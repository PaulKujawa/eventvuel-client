import App from "@/App.vue";
import "@/filters/index";
import { createProvider } from "@/plugins/apollo";
import router from "@/plugins/router";
import "@/plugins/sentry";
import vuetify from "@/plugins/vuetify";
import { store } from "@/store/index";
import "@babel/polyfill";
import Vue from "vue";

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App),
  router,
  store,
  // TODO vuetify bela state
  // @ts-ignore
  vuetify
}).$mount("#app");
