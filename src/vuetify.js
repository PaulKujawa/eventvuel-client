// TODO use a webpack loader instead https://vuetifyjs.com/en/framework/a-la-carte#vuetify-loader
import Vue from "vue";
import {
  Vuetify,
  VApp,
  VBtn,
  VCard,
  VFooter,
  VGrid,
  VIcon,
  VImg,
  VNavigationDrawer,
  VTextField,
  VList,
  VProgressLinear,
  VSelect,
  VToolbar,
  transitions
} from "vuetify";

import "vuetify/src/stylus/app.styl";

import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VFooter,
    VGrid,
    VIcon,
    VImg,
    VNavigationDrawer,
    VTextField,
    VList,
    VProgressLinear,
    VSelect,
    VToolbar,
    transitions
  },
  theme: {
    // prettier-ignore
    primary: colors.blueGrey.base,
    secondary: colors.amber.base,
    accent: colors.brown.lighten4,
    // prettier-ignore
    error: colors.pink.base,
    warning: colors.orange.base,
    info: colors.cyan.base,
    success: colors.teal.base
  }
});
