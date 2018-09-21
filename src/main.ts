import App from '@/App.vue';
import '@/plugins/vuetify';
import router from '@/router';
import '@babel/polyfill';
import Vue from 'vue';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
