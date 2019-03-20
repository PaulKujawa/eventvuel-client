// tslint:disable:no-shadowed-variable
import { localStorageService } from "@/services/local-storage-service";
import { RootState } from "@/store/index";
import { Module, MutationTree } from "vuex";

export type CityState = {
  city: City | null;
};

export type City = {
  readonly country_id: number;
  readonly id: number;
  readonly name: string;
  readonly region_id?: number;
};

const state: CityState = {
  city: localStorageService.getItem<City>("city") || null
};

const mutations: MutationTree<CityState> = {
  setCity(state, payload: City) {
    const clone = { ...payload };
    state.city = clone;
    localStorageService.setItem("city", clone);
  }
};

export const cityModule: Module<CityState, RootState> = {
  mutations,
  state
};
