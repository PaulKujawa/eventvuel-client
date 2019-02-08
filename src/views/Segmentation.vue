<template>
  <v-layout column>
    <v-flex>
      <p class="display-1 text-xs-center grey--text">what are you up to?</p>
    </v-flex>

    <v-layout wrap justify-center>
      <v-flex v-for="segment of segmentations" :key="segment.title" xs12 sm4 lg3>
        <SegmentCard :segment="segment"></SegmentCard>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script lang="ts">
import SegmentCard from "@/components/SegmentCard.vue";
import { localStorageService } from "@/services/local-storage-service";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    SegmentCard
  }
})
export default class Segmentation extends Vue {
  public city = "";
  public segmentations = [
    { title: "Concerts", route: { name: "event-list-concerts" } },
    { title: "Sports", route: { name: "event-list-sports" } },
    { title: "Arts & Theater", route: { name: "event-list-arts" } }
  ];

  public mounted(): void {
    this.city = localStorageService.getItem("city") || "";
  }
}
</script>
