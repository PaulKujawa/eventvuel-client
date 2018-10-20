<template>
  <v-card :hover="true">
    <v-img :src="url" aspect-ratio="2.75"></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ book.title }}</h3>
        <p>{{ book.author }}</p>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="green">Share</v-btn>
      <v-btn flat color="green">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class RecipeCard extends Vue {
  @Prop() public book!: {id: number, title: string, author: string};
  private url = 'https://loremflickr.com/500/270/recipe,healthy?random=' + this.book.id;
}
</script>
