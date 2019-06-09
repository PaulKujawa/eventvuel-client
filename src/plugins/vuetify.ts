// tslint:disable:object-literal-sort-keys
import Vue from "vue";
import colors from "vuetify/es5/util/colors";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

// TODO vuetify beta has wrong typings
export default new (Vuetify as any)({
  theme: {
    themes: {
      light: {
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
    }
  }
});
