<template>
  <RecipeCard></RecipeCard>
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
