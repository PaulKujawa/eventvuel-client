<template>
  <v-card :hover="true">
    <v-img :src="url" aspect-ratio="2.75"></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ recipe.name }}</h3>
        <p>
          {{ recipe.vegan ? 'Vegan' : 'Non-Vegan' }} portions: {{ recipe.servings }} {{ times }}
        </p>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="green">Share</v-btn>
      <v-btn flat color="green">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Recipe } from '@/store/modules/recipe/types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class RecipeCard extends Vue {
  @Prop() public recipe!: Recipe;
  private url = 'https://loremflickr.com/500/270/recipe,healthy?random=' + this.recipe.id;

  get times(): string {
    if (!this.recipe.preparation_time || !this.recipe.cook_time) {
      return '';
    }

    return `${this.recipe.preparation_time} / ${this.recipe.cook_time}`
  }
}
</script>

<style scoped lang="scss">
@import '../css/_variables.scss';
</style>
