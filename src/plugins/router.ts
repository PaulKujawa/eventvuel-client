import { store } from "@/store/index";
import CategoryList from "@/views/CategoryList.vue";
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
  store.state.cityModule.city === null ? next({ name: "startPage" }) : next();
};

const lazyLoadEventList = () =>
  import(/* webpackChunkName: "event-list" */ "@/views/EventList.vue");

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
      component: lazyLoadEventList,
      name: "eventListConcerts",
      path: "/concert-events"
    },
    {
      beforeEnter: cityNavigationGuard,
      component: lazyLoadEventList,
      name: "eventListSports",
      path: "/sport-events"
    },
    {
      beforeEnter: cityNavigationGuard,
      component: lazyLoadEventList,
      name: "eventListArts",
      path: "/art-events"
    },
    {
      component: NotFound,
      name: "notFound",
      path: "*"
    }
  ]
});

export default router;
