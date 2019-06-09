import Vue from "vue";

Vue.filter("price", (value: number) => (value / 100).toFixed(2) + "€");
