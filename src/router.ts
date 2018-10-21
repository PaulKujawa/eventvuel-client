import EventList from '@/views/EventList.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/events',
    },
    {
      path: '/events',
      name: 'event-list',
      component: EventList,
    },
    {
      path: '/events/:id',
      name: 'event',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Event.vue'),
    },
  ],
});
