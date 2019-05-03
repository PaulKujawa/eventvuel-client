import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
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
