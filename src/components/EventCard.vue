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
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Event {
  id: string;
  name: string;
  dates: {
    start: {
      localDate: string;
      localTime?: string;
    };
  };
  images: Array<{url: string, width: number}>;
}

@Component({})
export default class EventCard extends Vue {
  @Prop() public event!: Event;

  get url(): string {
    return this.event.images.find((image) => image.width === 640)!.url;
  }
}
</script>
