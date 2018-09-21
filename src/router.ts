import RecipeList from '@/views/RecipeList.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recipes',
    },
    {
      path: '/recipes',
      name: 'recipe-list',
      component: RecipeList,
    },
    {
      path: '/recipes/:id',
      name: 'recipe',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Recipe.vue'),
    },
  ],
});
