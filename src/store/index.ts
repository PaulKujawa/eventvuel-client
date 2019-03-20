import { cityModule, CityState } from "@/store/city";
import { favoritesModule, FavoritesState } from "@/store/favorites";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export type RootState = {
  cityModule: CityState;
  favoritesModule: FavoritesState;
};

export const store = new Vuex.Store({
  modules: {
    cityModule,
    favoritesModule
  }
});
