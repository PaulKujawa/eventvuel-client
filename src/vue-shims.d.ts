declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// TODO vuetify beta has wrong typings
declare module "vuetify/lib" {
  export default {} as any;
}

// TODO vuetify beta has wrong typings
declare module "vuetify/es5/util/colors" {
  export default {} as any;
}
