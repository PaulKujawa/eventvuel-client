<template>
  <v-layout wrap>
    <v-flex xs12 sm6>
      <v-select multiple prepend-icon="filter_list" :items="items" label="All genres"></v-select>
    </v-flex>

    <v-flex xs12 sm6>
      <!-- vuetify positioning of icon calender_today is erroneous -->
      <v-select prepend-icon="date_range" :items="items" label="Select a date"></v-select>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class FilterBar extends Vue {
  public city = "London";
  public items = ["a", "b", "c"];
}
</script>