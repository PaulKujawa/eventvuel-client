<template>
  <v-layout column>
    <v-flex>
      <h1
        class="display-2 grey--text text-xs-center"
      >{{ category.title }} in {{ cityState.city.name }}</h1>
    </v-flex>

    <v-flex>
      <filter-bar :categoryId="category.id" @filterChange="filter = $event"></filter-bar>
    </v-flex>

    <v-flex>
      <v-progress-linear color="secondary" indeterminate v-if="$apollo.queries.eventList.loading"></v-progress-linear>
    </v-flex>

    <template v-if="eventList && eventList.events.length">
      <v-layout row wrap>
        <v-flex v-for="event of eventList.events" :key="event.id" xs12 sm4 md3 lg2>
          <event-card :event="event"></event-card>
        </v-flex>
      </v-layout>

      <v-flex text-xs-center>
        <v-btn
          @click="showMore(eventList.events.length)"
          color="secondary"
          :loading="$apollo.queries.eventList.loading"
          v-if="eventList.hasMore"
        >Gimme more</v-btn>
      </v-flex>
    </template>
  </v-layout>
</template>

<script lang="ts">
import EventCard from "@/components/EventCard.vue";
import FilterBar, { EventListFilter } from "@/components/FilterBar.vue";
import * as gqlEventList from "@/graphql/EventList.gql";
import { CityState } from "@/store/city";
import { categories, Category } from "@/tm-categories";
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { State } from "vuex-class";

@Component({
  apollo: {
    eventList: {
      query: gqlEventList,
      skip() {
        return this.filter === null;
      },
      variables() {
        return {
          categoryIds: this.filter.categoryIds,
          cityId: this.cityState.city.id,
          sort: this.filter.sort,
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
  @State("cityModule") public cityState!: CityState;
  public filter: EventListFilter | null = null;
  public category: Category = null as any;
  private start = 0;

  @Watch("$route", { immediate: true })
  public onRouteChanged(to: Route): void {
    this.category = categories.find(cat => cat.routeName === to.name)!;
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
        categoryIds: this.filter!.categoryIds,
        cityId: this.cityState.city!.id,
        sort: this.filter!.sort,
        start: this.start
      }
    });
  }
}
</script>
