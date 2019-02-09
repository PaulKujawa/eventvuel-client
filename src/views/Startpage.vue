<template>
  <v-layout justify-center align-center>
    <v-flex xs8 sm4 md3 lg2>
      <!-- TODO use v-autocomplete with ajax -->
      <v-text-field
        v-model="city.name"
        v-on="city ? { 'click:append-outer': submit } : {}"
        v-on:keyup.enter="submit"
        label="Your city"
        append-outer-icon="chevron_right"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { store } from "@/store";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Event extends Vue {
  public city = store.selector.getCity();

  public submit(): void {
    // see https://github.com/vuejs/vue/issues/7349#issuecomment-458345808
    if (this.city) {
      store.reducer.setCity(this.city);
      this.$router.push({ name: "categoryList" });
    }
  }
}
</script>
