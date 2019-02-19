<template>
  <v-layout wrap>
    <v-flex xs12 sm4>
      <v-select
        clearable
        :disabled="!subCategories || !subCategories.length"
        @input="changed('categoryIds', $event)"
        :items="subCategories"
        item-text="name"
        item-value="id"
        label="All genres"
        multiple
        prepend-icon="filter_list"
      ></v-select>
    </v-flex>

    <v-flex xs12 sm4>
      <v-select :items="[]" disabled label="Select a date - WIP" prepend-icon="date_range"></v-select>
    </v-flex>

    <v-flex x12 sm4>
      <v-select
        @input="changed('sorting', $event)"
        item-text="title"
        item-value="id"
        :items="sortOptions"
        label="Sort"
        prepend-icon="sort"
        :value="value.sorting"
      ></v-select>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
export type EventListFilter = {
  sorting: "eventdate" | "onsaledate" | "popularity"; // TODO infer type from tm-config/eventListSortings
  categoryIds: number[];
};

import * as gqlSubcategories from "@/graphql/SubCategories.gql";
import { eventListSortings } from "@/tm-config";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  apollo: {
    subCategories: {
      query: gqlSubcategories,
      update(data) {
        return data.subCategories.sort(
          (a: { name: string }, b: { name: string }) =>
            a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        );
      },
      variables() {
        return { categoryId: this.categoryId };
      }
    }
  }
})
export default class FilterBar extends Vue {
  @Prop() public readonly value!: EventListFilter;
  @Prop() public readonly categoryId!: number;
  public sortOptions = eventListSortings;

  public changed(key: keyof EventListFilter, value: string): void {
    this.$emit("input", { ...this.value, [key]: value });
  }
}
</script>