<template>
  <v-layout row wrap>
    <v-text-field v-model="city" prepend-icon="room" label="City" required></v-text-field>

    <v-progress-linear v-if="$apollo.queries.eventsPage.loading" :indeterminate="true"></v-progress-linear>

    <template v-if="eventsPage && eventsPage.events.length">
      <v-layout row wrap>
        <v-flex v-for="event of eventsPage.events" :key="event.id" xs12 sm4 md3 lg2>
          <EventCard :event="event"></EventCard>
        </v-flex>
      </v-layout>

      <v-btn v-if="eventsPage.hasMore" @click="showMore" color="secondary">Show more</v-btn>
    </template>
  </v-layout>
</template>

<script lang="ts">
import EventCard from "@/components/EventCard.vue";
import * as gqlEventsPage from "@/graphql/EventsPage.gql";
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
  apollo: {
    eventsPage: {
      debounce: 300,
      query: gqlEventsPage,
      variables() {
        return {
          city: this.city,
          classification: this.classification || undefined,
          page: 0
        };
      }
    }
  },
  components: {
    EventCard
  }
})
export default class EventList extends Vue {
  public city = "London";
  private page = 0;
  private classification: string | null = null;

  @Watch("$route", { immediate: true })
  public onRouteChanged(to: Route) {
    this.classification = to.meta.classificationId || null;
  }

  public showMore() {
    this.page++;

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
        city: this.city,
        classification: this.classification,
        page: this.page
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
