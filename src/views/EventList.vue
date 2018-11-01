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
      v-if="$apollo.queries.mostRelevantEvents.loading"
      :indeterminate="true"
    ></v-progress-linear>

    <v-flex
      v-for="event in mostRelevantEvents" :key="event.id"
      xs12 sm6 md4
    >
      <EventCard :event="event"></EventCard>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import EventCard from '@/components/EventCard.vue';
import * as MostRelevantEvents from '@/graphql/MostRelevantEvents.gql';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    EventCard,
  },
  apollo: {
    mostRelevantEvents: {
      query: MostRelevantEvents,
      variables() {
        return {
          city: this.city,
        };
      },
      debounce: 300,
    },
  },
})
export default class EventList extends Vue {
  public mostRelevantEvents = [];
  public city = 'Berlin';
}
</script>

<style lang="scss">
.placeholder {
  background-color: $foo;
}
</style>
