<template>
  <v-layout row wrap>
    <v-flex
      v-for="recipe in recipeState.recipes.docs"
      :key="recipe.id"
      xs12 sm6 md4
    >
      <RecipeCard :recipe="recipe"></RecipeCard>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import RecipeCard from '@/components/RecipeCard.vue';
import { RecipeState } from '@/store/modules/recipe/types';
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

@Component({
  components: {
    RecipeCard,
  },
})
export default class RecipeList extends Vue {
  @State((state) => state.recipe) public recipeState!: RecipeState;
  @Action('fetchRecipes', {namespace: 'recipe'}) public fetchRecipes!: () => void;

  public mounted(): void {
    this.fetchRecipes();
  }
}
</script>
