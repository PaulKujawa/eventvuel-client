<template>
  <v-card color="accent" hover :to="{ name: category.routeName }">
    <v-img :src="category.imgPath"></v-img>

    <v-card-title class="justify-center">
      <h3 class="headline">{{ category.title }}</h3>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Category } from "@/models/category";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CategoryCard extends Vue {
  @Prop() public readonly category!: Category;
}
</script>
