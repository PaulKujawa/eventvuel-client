<template>
  <v-layout column>
    <v-flex>
      <h1 class="text-xs-center display-2">Events for {{ city }}</h1>
    </v-flex>

    <v-flex>
      <FilterBar></FilterBar>
    </v-flex>

    <v-vlex>
      <v-progress-linear v-if="$apollo.queries.eventsPage.loading" :indeterminate="true"></v-progress-linear>
    </v-vlex>

    <v-layout row wrap>
      <v-flex v-for="event of eventsPage.events" :key="event.id" xs12 sm4 md3 lg2>
        <EventCard :event="event"></EventCard>
      </v-flex>
    </v-layout>

    <v-flex text-xs-center>
      <v-btn v-if="eventsPage.hasMore" @click="showMore(eventsPage.events.length)">Gimme more</v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import EventCard from "@/components/EventCard.vue";
import FilterBar from "@/components/FilterBar.vue";
import * as gqlEventsPage from "@/graphql/EventsPage.gql";
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
  apollo: {
    eventsPage: {
      // debounce: 300,
      query: gqlEventsPage,
      variables() {
        return {
          // city: this.city,
          // classification: this.classification || undefined,
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
  public city = "London";
  private start = 0;
  private classification: string | null = null;

  @Watch("$route", { immediate: true })
  public onRouteChanged(to: Route) {
    this.classification = to.meta.classificationId || null;
    window.console.log(this.classification);
  }

  public showMore(eventAmount: number) {
    this.start += eventAmount;

    this.$apollo.queries.eventsPage.fetchMore({
      updateQuery: (previousResult, { fetchMoreResult }) => ({
        eventsPage: {
          __typename: previousResult.eventsPage.__typename,
          events: [
            ...previousResult.eventsPage.events,
            ...fetchMoreResult.eventsPage.events
          ],
          hasMore: fetchMoreResult.eventsPage.hasMore
        }
      }),
      variables: {
        // city: this.city,
        // classification: this.classification,
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
