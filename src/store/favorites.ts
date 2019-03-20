// tslint:disable:no-shadowed-variable
// tslint:disable:prefer-object-spread
import { RootState } from "@/store/index";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

export type FavoritesState = {
  favorites: Favorite[];
};

export type Favorite = {
  text: string;
  checked: boolean;
};

const state: FavoritesState = {
  favorites: []
};

const actions: ActionTree<FavoritesState, RootState> = {
  addFavoriteAsync({ commit }, id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(data => data.json())
      .then(item => {
        const favorite: Favorite = { text: item.title, checked: false };
        commit("addFavorite", favorite);
      });
  }
};

const getters: GetterTree<FavoritesState, RootState> = {
  dones: (state, _getters, _rootState) =>
    state.favorites.filter(favorite => favorite.checked),
  favorites: state => state.favorites.filter(favorite => !favorite.checked)
};

const mutations: MutationTree<FavoritesState> = {
  addFavorite(state, payload) {
    const clone = Object.assign({}, payload);
    state.favorites.push(clone);
  }
};

export const favoritesModule: Module<FavoritesState, RootState> = {
  actions,
  getters,
  mutations,
  state
};
