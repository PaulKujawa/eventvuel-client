import EventList from "@/views/EventList.vue";
import Startpage from "@/views/Startpage.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      component: Startpage,
      path: "/"
    },
    {
      component: EventList,
      name: "event-list",
      path: "/events"
    },
    {
      component: EventList,
      meta: { classificationId: "KZFzniwnSyZfZ7v7nJ" },
      name: "event-list-concerts",
      path: "/concert-events"
    },
    {
      component: EventList,
      meta: { classificationId: "KZFzniwnSyZfZ7v7nE" },
      name: "event-list-sports",
      path: "/sport-events"
    },
    {
      component: EventList,
      meta: { classificationId: "KZFzniwnSyZfZ7v7na" },
      name: "event-list-arts",
      path: "/art-events"
    },
    {
      component: () =>
        import(/* webpackChunkName: "event" */ "@/views/Event.vue"),
      name: "event",
      path: "/events/:id"
    }
  ]
});
