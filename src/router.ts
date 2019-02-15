import { store } from "@/store";
import CategoryList from "@/views/CategoryList.vue";
import EventList from "@/views/EventList.vue";
import NotFound from "@/views/NotFound.vue";
import Startpage from "@/views/Startpage.vue";
import Vue from "vue";
import Router, { NavigationGuard, RawLocation, Route } from "vue-router";

Vue.use(Router);

const cityNavigationGuard: NavigationGuard = (
  _to: Route,
  _from: Route,
  next: (to?: RawLocation) => void
) => {
  store.selector.getCity() === null ? next({ name: "startPage" }) : next();
};

const router = new Router({
  mode: "history",
  routes: [
    {
      component: Startpage,
      name: "startPage",
      path: "/"
    },
    {
      beforeEnter: cityNavigationGuard,
      component: CategoryList,
      name: "categoryList",
      path: "/categories"
    },
    {
      beforeEnter: cityNavigationGuard,
      component: EventList,
      name: "eventListConcerts",
      path: "/concert-events"
    },
    {
      beforeEnter: cityNavigationGuard,
      component: EventList,
      name: "eventListSports",
      path: "/sport-events"
    },
    {
      beforeEnter: cityNavigationGuard,
      component: EventList,
      name: "eventListArts",
      path: "/art-events"
    },
    {
      component: () =>
        import(/* webpackChunkName: "event" */ "@/views/Event.vue"),
      name: "event",
      path: "/events/:id"
    },
    {
      component: NotFound,
      name: "notFound",
      path: "*"
    }
  ]
});

export default router;
