<template>
  <v-app>
    <v-navigation-drawer app v-model="drawerOpen">
      <!-- <v-list>
        <v-list-tile :to="{name: 'start-page'}">
          <v-list-tile-action>
            <v-icon>{{ 'room' }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>{{ city }}</v-list-tile-content>
        </v-list-tile>
      </v-list>-->
    </v-navigation-drawer>

    <v-toolbar app v-if="toolbarVisible">
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="drawerOpen = !drawerOpen"></v-toolbar-side-icon>
      </span>

      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">{{ appTitle }}</router-link>
      </v-toolbar-title>

      <!-- <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat :to="{name: 'start-page'}">
          <v-icon left>room</v-icon>
          {{ city }}
        </v-btn>
      </v-toolbar-items>-->
    </v-toolbar>

    <v-content>
      <v-container fluid grid-list-lg fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- <v-footer app class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>-->
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({})
export default class App extends Vue {
  public appTitle = "Eventvuel";
  public drawerOpen = false;
  public toolbarVisible = false;

  @Watch("$route", { immediate: true })
  public onRouteChanged(to: Route): void {
    this.toolbarVisible = to.path !== "/";
  }
}
</script>
