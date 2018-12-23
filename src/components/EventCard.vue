<template>
  <v-card :hover="true">
    <v-img :src="url"></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ event.name }}</h3>
        <p>{{ event.dates.start.localDate }}</p>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="green">Share</v-btn>
      <v-btn flat color="green">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { EventsPage_eventsPage_events } from '@/graphql/__generated__/Eventspage';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class EventCard extends Vue {
  @Prop() public event!: EventsPage_eventsPage_events;

  get url(): string {
    return this.event.images.find((image) => image.width === 640)!.url;
  }
}
</script>
