<template>
  <v-layout column>
    <v-flex>
      <p class="display-1 text-xs-center grey--text">what are you up to?</p>
    </v-flex>

    <v-layout wrap justify-center>
      <v-flex v-for="category of categories" :key="category.title" xs12 sm4 lg3>
        <CategoryCard :category="category"></CategoryCard>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script lang="ts">
import CategoryCard from "@/components/CategoryCard.vue";
import { store } from "@/store";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    CategoryCard
  }
})
export default class CategoryList extends Vue {
  public city = store.selector.getCity();
  public categories = [
    { title: "Concerts", route: { name: "eventListConcerts" } },
    { title: "Sports", route: { name: "eventListSports" } },
    { title: "Arts & Theater", route: { name: "eventListArts" } }
  ];
}
</script>
