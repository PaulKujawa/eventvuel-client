<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-text-field
        v-model="city"
        label="City"
        required
      ></v-text-field>
    </v-flex>

    <ApolloQuery
      :query="require('@/graphql/EventsPage.gql')"
      :variables="{ page: 0, city }"
      :debounce="300"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <v-progress-linear
          v-if="loading"
          :indeterminate="true"
        ></v-progress-linear>

        <div v-else-if="error" class="error apollo">An error occured</div>

        <div v-else-if="data">
          <v-flex
            v-for="event in data.eventsPage.events" :key="event.id"
            xs12 sm6 md4 lg3
          >
            <EventCard :event="event"></EventCard>
          </v-flex>

          <v-flex xs12>
            <v-btn color="info"
              v-if="data.eventsPage.hasMore"
              @click="showMore"
            >
              Show more
            </v-btn>
          </v-flex>
        </div>

        <div v-else class="no-result apollo">No result :(</div>
      </template>              
    </ApolloQuery>
  </v-layout>
</template>

<script lang="ts">
import EventCard from '@/components/EventCard.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    EventCard,
  },
})
export default class EventList extends Vue {
  public city = 'Berlin';
  private page = 0;

  public showMore() {
    this.page++;
    this.$apollo.queries.eventsPage.fetchMore({
      variables: {
        page: this.page,
        city: this.city,
      },
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
