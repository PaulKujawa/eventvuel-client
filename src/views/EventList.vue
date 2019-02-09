<template>
  <v-layout column>
    <v-flex>
      <h1 class="text-xs-center display-2">{{ category.name }} in {{ city.name }}</h1>
    </v-flex>

    <v-flex>
      <FilterBar v-model="filter"></FilterBar>
    </v-flex>

    <v-flex>
      <v-progress-linear v-if="$apollo.queries.eventList.loading" :indeterminate="true"></v-progress-linear>
    </v-flex>

    <template v-if="eventList && eventList.events.length">
      <v-layout row wrap>
        <v-flex v-for="event of eventList.events" :key="event.id" xs12 sm4 md3 lg2>
          <EventCard :event="event"></EventCard>
        </v-flex>
      </v-layout>

      <v-flex text-xs-center>
        <v-btn v-if="eventList.hasMore" @click="showMore(eventList.events.length)">Gimme more</v-btn>
      </v-flex>
    </template>
  </v-layout>
</template>

<script lang="ts">
import EventCard from "@/components/EventCard.vue";
import FilterBar, { EventListFilter } from "@/components/FilterBar.vue";
import * as gqlEventList from "@/graphql/EventList.gql";
import { store } from "@/store";
import { Category, categoryConfig } from "@/tm-config";
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
  apollo: {
    eventList: {
      // debounce: 300,
      query: gqlEventList,
      variables() {
        return {
          cityId: this.city.id,
          sort: this.filter.sorting,

          // subCategoryIds: this.subCategoryIds.length
          //   ? this.subCategoryIds
          //   : [this.catgory.id],
          start: 0
        };
      }
    }
  },
  components: {
    EventCard,
    FilterBar
  }
})
export default class EventList extends Vue {
  public filter: EventListFilter = { sorting: "eventdate" };

  public city = { ...store.selector.getCity()! }; // TODO add routing guard for empty city
  public category: Category = { id: "", name: "" };
  // public subCategoryIds = [];
  private start = 0;

  @Watch("$route", { immediate: true })
  public onRouteChanged(to: Route) {
    this.category = categoryConfig[to.name!];
  }

  public showMore(eventAmount: number) {
    this.start += eventAmount;

    this.$apollo.queries.eventList.fetchMore({
      updateQuery: (previousResult, { fetchMoreResult }) => ({
        eventList: {
          __typename: previousResult.eventList.__typename,
          events: [
            ...previousResult.eventList.events,
            ...fetchMoreResult.eventList.events
          ],
          hasMore: fetchMoreResult.eventList.hasMore
        }
      }),
      variables: {
        cityId: this.city.id,
        // classification: this.classification,
        sort: this.filter.sorting,
        start: this.start
      }
    });
  }
}
</script>

<style lang="scss">
.placeholder {
  background-color: $foo;
}
</style>
