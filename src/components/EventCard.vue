<template>
  <v-card :hover="true" :href="event.url" :target="'_blank'">
    <lazy-img :src="imageUrl"></lazy-img>

    <v-card-title>{{ event.name }}</v-card-title>

    <v-card-actions class="grey--text">
      {{ eventDate }}
      <template v-if="price">
        <v-spacer></v-spacer>
        {{ price|price }}
      </template>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import LazyImg from "@/components/LazyImg.vue";
import { EventList_eventList_events } from "@/graphql/__generated__/EventList";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { LazyImg }
})
export default class EventCard extends Vue {
  @Prop() public readonly event!: EventList_eventList_events;

  get eventDate(): string {
    if (!this.event.eventDate) {
      return "";
    }

    const date = new Date(this.event.eventDate.value);

    return date.toLocaleDateString("de-DE");
  }

  get price(): number {
    if (!this.event.priceRanges) {
      return 0;
    }

    return this.event.priceRanges.includingTicketFees.min;
  }

  get imageUrl(): string {
    const { images } = this.event;

    if (images) {
      return (images as any).standard.url;
    }

    return "https://via.placeholder.com/150?text=coming+soon";
  }
}
</script>
