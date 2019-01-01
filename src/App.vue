<template>
  <v-app>
    <v-navigation-drawer app v-model="drawerOpen">
      <v-list>
        <v-list-tile v-for="item of menuItems" :key="item.title" :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="drawerOpen = !drawerOpen"></v-toolbar-side-icon>
      </span>

      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">{{ appTitle }}</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.route">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid grid-list-lg>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- <v-footer app class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer> -->
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  public appTitle = 'Eventvuel';
  public drawerOpen = false;
  public menuItems = [
    { title: 'Concerts', route: { name: 'event-list-concerts' }, icon: 'music_note' },
    { title: 'Sports', route: { name: 'event-list-sports' }, icon: 'directions_bike' },
    { title: 'Arts & Theater', route: { name: 'event-list-arts' }, icon: 'brush' },
  ];
}
</script>
