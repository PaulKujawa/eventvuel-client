<template>
  <v-layout row wrap>
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
    mostRelevantEvents: {query: MostRelevantEvents},
  },
})
export default class EventList extends Vue {
  public mostRelevantEvents = [];
}
</script>

<style lang="scss">
.placeholder {
  background-color: $foo;
}
</style>
