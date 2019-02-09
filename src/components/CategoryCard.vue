<template>
  <v-card :hover="true" :to="category.route">
    <v-img :src="imageUrl"></v-img>

    <v-card-title>
      <h3 class="headline text-xs-center">{{ category.title }}</h3>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class CategoryCard extends Vue {
  @Prop() public category!: { title: string; route: { name: string } };

  get imageUrl(): string {
    return "https://via.placeholder.com/150";

    // return this.event.images.find(image => image.width === 640)!.url;
  }
}
</script>
