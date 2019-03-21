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
        :value="settings.categoryIds.filter(id => id !== categoryId)"
      ></v-select>
    </v-flex>

    <v-flex xs12 sm4>
      <v-select :items="[]" disabled label="Select a date - WIP" prepend-icon="date_range"></v-select>
    </v-flex>

    <v-flex x12 sm4>
      <v-select
        @input="changed('sort', $event)"
        item-text="title"
        item-value="id"
        :items="sortOptions"
        label="Sort"
        prepend-icon="sort"
        :value="settings.sort"
      ></v-select>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import * as gqlSubcategories from "@/graphql/SubCategories.gql";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

type SortOptionId = "eventdate" | "onsaledate" | "popularity";

export type EventListFilter = {
  sort: SortOptionId;
  categoryIds: number[];
};

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
  @Prop() public readonly categoryId!: number;
  public settings: EventListFilter = null as any;
  public sortOptions: Array<{ id: SortOptionId; title: string }> = [
    { id: "eventdate", title: "Event Date" },
    { id: "onsaledate", title: "On-Sale Date" },
    { id: "popularity", title: "Popularity" }
  ];

  @Watch("$route", { immediate: true })
  public onRouteChanged({ query }: Route) {
    this.settings = {
      categoryIds: [].concat((query.categoryIds as any) || this.categoryId),
      sort: (query.sort as any) || "eventdate"
    };

    this.$emit("filterChange", this.settings);
  }

  public changed(key: keyof EventListFilter, value: any): void {
    this.$router.push({
      name: this.$route.name,
      query: { ...this.$route.query, [key]: value }
    });
  }
}
</script>