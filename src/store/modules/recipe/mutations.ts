import { Recipe, RecipeState } from '@/store/modules/recipe/types';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<RecipeState> = {
    recipesLoaded(state, payload: Recipe[]): void {
        state.error = false;
        state.recipes = payload;
    },
    recipesError(state): void {
        state.error = true;
        state.recipes = [];
    },
};
