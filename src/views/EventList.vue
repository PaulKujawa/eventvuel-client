<template>
  <v-layout column>
    <v-flex>
      <h1 class="display-2 grey--text text-xs-center">{{ category.title }} in {{ city.name }}</h1>
    </v-flex>

    <v-flex>
      <FilterBar :categoryId="category.id" v-model="filter"></FilterBar>
    </v-flex>

    <v-flex>
      <v-progress-linear color="secondary" indeterminate v-if="$apollo.queries.eventList.loading"></v-progress-linear>
    </v-flex>

    <template v-if="eventList && eventList.events.length">
      <v-layout row wrap>
        <v-flex v-for="event of eventList.events" :key="event.id" xs12 sm4 md3 lg2>
          <EventCard :event="event"></EventCard>
        </v-flex>
      </v-layout>

      <v-flex text-xs-center>
        <v-btn
          @click="showMore(eventList.events.length)"
          color="secondary"
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
import { store } from "@/store";
import { categories, Category, City } from "@/tm-config";
import { Component, Vue } from "vue-property-decorator";

@Component({
  apollo: {
    eventList: {
      query: gqlEventList,
      skip() {
        // wait for lifecycle-hook created()
        return !this.graphQlVariablesReady;
      },
      variables() {
        return {
          categoryIds: this.filter.categoryIds,
          cityId: this.city.id,
          sort: this.filter.sorting,
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
  public filter: EventListFilter = null as any;
  public category: Category = null as any;
  public city: City = null as any;
  public graphQlVariablesReady = false;
  private start = 0;

  public created() {
    this.category = categories.find(cat => cat.routeName === this.$route.name)!;
    // TODO object spread causes TS error
    // tslint:disable-next-line:prefer-object-spread
    this.city = Object.assign({}, store.selector.getCity());

    this.filter = {
      categoryIds: [this.category.id],
      sorting: "eventdate"
    };

    this.graphQlVariablesReady = true;
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
        categoryIds: this.filter.categoryIds,
        cityId: this.city.id,
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
