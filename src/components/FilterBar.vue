<template>
  <v-layout wrap>
    <v-flex xs12 sm4>
      <v-select :items="genres" disabled label="All genres" multiple prepend-icon="filter_list"></v-select>
    </v-flex>

    <v-flex xs12 sm4>
      <v-select :items="[]" disabled label="Select a date" prepend-icon="date_range"></v-select>
    </v-flex>

    <v-flex x12 sm4>
      <v-select
        item-text="title"
        item-value="id"
        :items="sortOptions"
        @input="changed('sorting', $event)"
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
};

import { eventListSortings } from "@/tm-config";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class FilterBar extends Vue {
  @Prop() public readonly value!: EventListFilter;
  public genres = ["a", "b", "c"];
  public sortOptions = eventListSortings;

  public mounted(): void {
    // providing initial setting
    // this.value = {};
  }

  public changed(key: keyof EventListFilter, value: string): void {
    this.$emit("input", { ...this.value, [key]: value });
  }
}
</script>