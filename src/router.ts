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
      path: '/concert-events',
      name: 'event-list-concerts',
      component: EventList,
    },
    {
      path: '/sport-events',
      name: 'event-list-sports',
      component: EventList,
    },
    {
      path: '/art-events',
      name: 'event-list-arts',
      component: EventList,
    },
    {
      path: '/miscellaneous-events',
      name: 'event-list-miscellaneous',
      component: EventList,
    },
    {
      path: '/events/:id',
      name: 'event',
      component: () => import(/* webpackChunkName: "event" */ '@/views/Event.vue'),
    },
  ],
});
