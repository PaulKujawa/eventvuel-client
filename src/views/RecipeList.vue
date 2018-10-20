<template>
  <v-layout row wrap>
     <v-flex
      v-for="book in books" :key="book.id"
      xs12 sm6 md4
    >
      <RecipeCard :book="book"></RecipeCard>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import RecipeCard from '@/components/RecipeCard.vue';
import * as AllBooks from '@/graphql/AllBooks.gql';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    RecipeCard,
  },
  apollo: {
    books: {query: AllBooks},
  },
})
export default class RecipeList extends Vue {
  public books = [];
}
</script>

<style lang="scss">
.placeholder {
  background-color: $foo;
}
</style>
