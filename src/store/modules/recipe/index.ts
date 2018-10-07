import { actions } from '@/store/modules/recipe/actions';
import { getters } from '@/store/modules/recipe/getters';
import { mutations } from '@/store/modules/recipe/mutations';
import { RecipeState } from '@/store/modules/recipe/types';
import { RootState } from '@/store/types';
import { Module } from 'vuex';

export const recipe: Module<RecipeState, RootState> = {
    namespaced: true,
    state: {
        recipes: [],
        error: false,
    },
    actions,
    getters,
    mutations,
};
