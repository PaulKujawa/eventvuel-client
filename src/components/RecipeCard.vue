<template>
  <v-card :hover="true">
    <v-img :src="url" aspect-ratio="2.75"></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
        <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({})
export default class RecipeCard extends Vue {
  private url = 'https://cdn.vuetifyjs.com/images/cards/desert.jpg';
}
</script>

<style scoped lang="scss">
@import '../css/_variables.scss';
</style>
