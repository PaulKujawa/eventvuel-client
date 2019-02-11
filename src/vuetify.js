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
    primary: colors.blueGrey.base, // "#607d8b"
    secondary: colors.amber.base, // "#ffc107"
    accent: colors.brown.lighten4, // brown.base = "#795548"
    // prettier-ignore
    error: colors.deepOrange.base, // "#ff5722"
    warning: colors.orange.base, // "#ff9800"
    info: colors.cyan.base, // "#00bcd4"
    success: colors.teal.base // "#009688"
  }
});
