<template>
  <v-card color="accent" hover :to="{ name: category.routeName }">
    <v-img max-height="500px" :src="category.imageUrl"></v-img>

    <v-card-title>
      <h3 class="headline text-xs-center">{{ category.title }}</h3>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Category } from "@/tm-config";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class CategoryCard extends Vue {
  @Prop() public readonly category!: Category;
}
</script>
