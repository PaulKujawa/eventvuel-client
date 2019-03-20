import { cityModule, CityState } from "@/store/city";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export type RootState = {
  cityModule: CityState;
};

export const store = new Vuex.Store({
  modules: {
    cityModule
  }
});
