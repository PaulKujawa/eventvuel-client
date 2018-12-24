import Vue from 'vue'
// import colors from 'vuetify/es5/util/colors'

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
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  // theme: {
  //   primary: colors.red.darken1, // #E53935
  //   secondary: colors.red.lighten4, // #FFCDD2
  //   accent: colors.indigo.base // #3F51B5
  // },
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
    VToolbar,
    transitions
  },
})
