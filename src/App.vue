<template>
  <v-app :class="{ 'gradient-bg': startPage }">
    <v-navigation-drawer app :disable-resize-watcher="true" v-model="drawerOpen">
      <v-list>
        <v-list-item
          :key="category.title"
          :to="{name: category.routeName}"
          v-for="category of categories"
        >
          <v-list-item-action>
            <v-icon>{{ category.svgPath }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>{{ category.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" v-if="!startPage">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon class="white--text" @click="drawerOpen = !drawerOpen"></v-app-bar-nav-icon>
      </span>

      <v-toolbar-title>
        <router-link class="white--text" style="cursor: pointer" tag="span" to="/">{{ appTitle }}</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          class="white--text"
          text
          :key="category.title"
          :to="{name: category.routeName}"
          v-for="category of categories"
        >
          <v-icon left>{{ category.svgPath }}</v-icon>
          {{ category.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container fluid grid-list-lg :fill-height="startPage">
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
import { tmCategories } from "@/models/category";
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({})
export default class App extends Vue {
  public readonly categories = tmCategories;
  public readonly appTitle = "Eventvuel";
  public drawerOpen = false;
  public startPage = true;

  @Watch("$route", { immediate: true })
  public onRouteChanged(to: Route): void {
    this.startPage = to.name === "startPage";
  }
}
</script>

<style lang="scss">
.gradient-bg {
  // pink, orange, cyan, teal lighten3
  background: linear-gradient(
    -45deg,
    #e694b0,
    #f7cd8b,
    #96dce8,
    #91c9c3
  ) !important;
  background-size: 400% 100% !important;
  animation: Gradient 5s ease infinite alternate;
}

@keyframes Gradient {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}
</style>

