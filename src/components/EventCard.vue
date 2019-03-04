<template>
  <v-card :hover="true" :href="event.url" :target="'_blank'">
    <lazy-img :src="imageUrl"></lazy-img>

    <v-card-title>
      <div>
        <h3 class="grey--text">{{ event.name }}</h3>
      </div>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
// import { EventsPage_eventsPage_events } from "@/graphql/__generated__/Eventspage";
import LazyImg from "@/components/LazyImg.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { LazyImg }
})
export default class EventCard extends Vue {
  @Prop() public readonly event!: any;

  get imageUrl(): string {
    const { images } = this.event;

    if (images) {
      return (images as any).standard.url;
    }

    return "https://via.placeholder.com/150?text=coming+soon";
  }
}
</script>
