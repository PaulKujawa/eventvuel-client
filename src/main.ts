import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/vuetify';
import '@babel/polyfill';
import Vue from 'vue';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
