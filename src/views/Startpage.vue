<template>
  <v-layout justify-center align-center>
    <v-flex xs8 sm4 md3 lg2>
      <v-select
        @input="changed"
        :items="cityOptions"
        item-text="name"
        item-value="id"
        label="Your city"
        return-object
        v-model="city"
      ></v-select>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { store } from "@/store";
import { cities, City } from "@/tm-config";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Startpage extends Vue {
  public city: City | null = null;
  public cityOptions = cities;

  public mounted(): any {
    const city = store.selector.getCity();

    if (city) {
      // tslint:disable-next-line:prefer-object-spread
      this.city = Object.assign({}, city); // TODO object spread causes TS error
    }
  }

  public changed(): void {
    store.reducer.setCity(this.city!);
    this.$router.push({ name: "categoryList" });
  }
}
</script>
