<template>
  <v-layout wrap>
    <v-flex xs12 sm4>
      <v-select disabled :items="genres" multiple prepend-icon="filter_list" label="All genres"></v-select>
    </v-flex>

    <v-flex xs12 sm4>
      <!-- vuetify positioning of icon calender_today is erroneous -->
      <v-select disabled :items="[]" prepend-icon="date_range" label="Select a date"></v-select>
    </v-flex>

    <v-flex x12 sm4>
      <v-select
        :items="sortings"
        item-text="title"
        item-value="id"
        v-model="appliedSorting"
        prepend-icon="sort"
        label="Sort"
      ></v-select>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { eventSort } from "@/tm-config";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class FilterBar extends Vue {
  public city = "London";
  public genres = ["a", "b", "c"];
  public sortings = eventSort;
  public appliedSorting = eventSort[0];
}
</script>