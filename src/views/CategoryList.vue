<template>
  <v-layout column>
    <v-flex>
      <p class="display-1 text-xs-center grey--text">what are you up to?</p>
    </v-flex>

    <v-layout wrap justify-center>
      <v-flex v-for="category of categories" :key="category.title" xs12 sm4 lg3>
        <category-card :category="category"></category-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script lang="ts">
import CategoryCard from "@/components/CategoryCard.vue";
import { categories as TmCategories } from "@/tm-categories";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    CategoryCard
  }
})
export default class CategoryList extends Vue {
  public readonly categories = TmCategories;
}
</script>
