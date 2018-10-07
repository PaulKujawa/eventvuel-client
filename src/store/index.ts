import { recipe } from '@/store/modules/recipe/index';
import { RootState } from '@/store/types';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    version: '1.0.0',
  },
  modules: {
    recipe,
  },
});
