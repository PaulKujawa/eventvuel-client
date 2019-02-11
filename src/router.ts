import { store } from "@/store";
import CategoryList from "@/views/CategoryList.vue";
import EventList from "@/views/EventList.vue";
import Startpage from "@/views/Startpage.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      component: Startpage,
      name: "startPage",
      path: "/"
    },
    {
      component: CategoryList,
      name: "categoryList",
      path: "/categories"
    },
    {
      component: EventList,
      name: "eventListConcerts",
      path: "/concert-events"
    },
    {
      component: EventList,
      name: "eventListSports",
      path: "/sport-events"
    },
    {
      component: EventList,
      name: "eventListArts",
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

router.beforeEach((to, _from, next) => {
  if (store.selector.getCity() === null && to.name !== "startPage") {
    next({ name: "startPage" });
  } else {
    next();
  }
});

export default router;
