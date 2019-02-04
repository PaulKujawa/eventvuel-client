<template>
  <v-layout justify-center align-center>
    <v-flex xs8 sm4 md3 lg2>
      <v-text-field
        v-model="city"
        v-on="city ? { 'click:append-outer': navigate } : {}"
        v-on:keyup.enter="navigate"
        label="Your city"
        append-outer-icon="chevron_right"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Event extends Vue {
  public city = "";

  public navigate(): void {
    // see https://github.com/vuejs/vue/issues/7349#issuecomment-458345808
    if (this.city) {
      this.$router.push("/events");
    }
  }
}
</script>
