<template>
  <v-card color="accent" hover :to="{ name: category.routeName }">
    <v-img :height="imageHeight" :src="category.imgPath"></v-img>

    <v-card-title class="justify-center">
      <h3 class="headline">{{ category.title }}</h3>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import ScreenSizeMixin from "@/mixins/screen-size";
import { Category } from "@/models/category";
import { mixins } from "vue-class-component";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class CategoryCard extends mixins(ScreenSizeMixin) {
  @Prop() public readonly category!: Category;
  public imageHeight = 0;

  @Watch("windowWidth", { immediate: true })
  public onResize(width: number): void {
    this.imageHeight = width > 960 ? 550 : 400;
  }
}
</script>
