<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <span class="title error--text">upsy daisy!</span>
          </v-card-title>

          <v-card-text>I don't remember this place.</v-card-text>

          <v-card-actions>
            <v-btn to="/">Home</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class NotFound extends Vue {}
</script>
