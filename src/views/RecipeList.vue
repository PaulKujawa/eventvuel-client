<template>
  <v-layout row wrap>
    <v-flex v-for="n in 4" :key="n" xs12 sm6 md4 lg3>
      <RecipeCard></RecipeCard>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import RecipeCard from '@/components/RecipeCard.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    RecipeCard,
  },
})
export default class RecipeList extends Vue {
}
</script>
