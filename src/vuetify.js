import Vue from 'vue'
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
