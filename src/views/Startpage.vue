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
import { cities, City } from "@/tm-config";
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";

@Component({})
export default class Startpage extends Vue {
  @Mutation public setCity!: (city: City) => void;
  public cityOptions = cities;

  public changed(city: City): void {
    this.setCity(city);
    this.$router.push({ name: "categoryList" });
  }
}
</script>
