<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-text-field
        v-model="city"
        label="City"
        required
      ></v-text-field>
    </v-flex>

    <v-progress-linear
      v-if="$apollo.queries.eventsPage.loading"
      :indeterminate="true"
    ></v-progress-linear>

    <template v-if="eventsPage">
      <v-flex
        v-for="event in eventsPage.events" :key="event.id"
        xs12 sm6 md4 lg3
      >
        <EventCard :event="event"></EventCard>
      </v-flex>

      <v-flex xs12>
        <v-btn
          v-if="eventsPage.hasMore"
          color="info"
          @click="showMore"
        >
          Show more
        </v-btn>
      </v-flex>
    </template>
  </v-layout>
</template>

<script lang="ts">
import EventCard from '@/components/EventCard.vue';
import * as gqlEventsPage from '@/graphql/EventsPage.gql';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { EventCard },
  apollo: {
    eventsPage: {
      query: gqlEventsPage,
      variables() { return { page: 0, city: this.city }; },
      debounce: 300,
    },
  },
})
export default class EventList extends Vue {
  public city = 'Berlin';
  private page = 0;

  public showMore() {
    this.page++;
    this.$apollo.queries.eventsPage.fetchMore({
      variables: { page: this.page, city: this.city },
      updateQuery: (previousResult, { fetchMoreResult }) => ({
        eventsPage: {
          __typename: previousResult.eventsPage.__typename,
          events: [...previousResult.eventsPage.events, ...fetchMoreResult.eventsPage.events],
          hasMore: fetchMoreResult.eventsPage.hasMore,
        },
      }),
    });
  }
}
</script>

<style lang="scss">
.placeholder {
  background-color: $foo;
}
</style>
