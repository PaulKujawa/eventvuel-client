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
      ></v-select>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { City } from "@/store/city";
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";

@Component({})
export default class Startpage extends Vue {
  @Mutation public setCity!: (city: City) => void;
  public cityOptions: City[] = [
    // TODO if ever possible, fetch via API
    { country_id: 276, id: 60000, name: "Berlin" },
    { country_id: 276, id: 60075, name: "Hamburg" }
  ];

  public changed(city: City): void {
    this.setCity(city);
    this.$router.push({ name: "categoryList" });
  }
}
</script>
