<template>
  <v-img :src="lazySrc"></v-img>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class LazyImg extends Vue {
  @Prop() public src!: string;
  private observer: IntersectionObserver = null as any;
  private intersected = false;

  public mounted(): void {
    this.observer = new IntersectionObserver(
      ([element]) => {
        if (element.isIntersecting) {
          this.intersected = true;
          this.observer.disconnect();
        }
      },
      {
        rootMargin: "120px"
      }
    );

    this.observer.observe(this.$el);
  }

  public destroyed(): void {
    this.observer.disconnect();
  }

  public get lazySrc(): string {
    return this.intersected ? this.src : "";
  }
}
</script>
