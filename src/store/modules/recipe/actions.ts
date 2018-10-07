import { RecipeState } from '@/store/modules/recipe/types';
import { RootState } from '@/store/types';
import axios from 'axios';
import { ActionTree } from 'vuex';

export const actions: ActionTree<RecipeState, RootState> = {
    fetchRecipes({commit}): void {
        axios({
            url: 'http://dev.vpit.vg/en/api/recipes',
        }).then((response) => {
            commit('recipesLoaded', response.data);
        }, (error) => {
            window.console.log(error);
            commit('recipesError');
        });
    },
};
