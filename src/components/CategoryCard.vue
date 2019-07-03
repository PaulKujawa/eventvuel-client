<template>
  <v-card color="accent" hover :to="{ name: category.routeName }">
    <v-img :height="imageHeight" :src="category.imgPath"></v-img>

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

  get imageHeight() {
    const breakpoint = (this as any).$vuetify.breakpoint;

    if (breakpoint.xl) {
      return 600;
    } else if (breakpoint.mdAndUp) {
      return 550;
    }

    return 400;
  }
}
</script>
