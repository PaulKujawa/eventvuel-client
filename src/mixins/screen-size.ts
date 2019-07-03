import { Component, Vue } from "vue-property-decorator";

@Component
export default class ScreenSizeMixin extends Vue {
  public windowWidth = 0;
  private inThrottle = false;

  public mounted(): void {
    window.addEventListener("resize", this.throttle, {
      passive: true
    });

    this.throttle();
  }

  public beforeDestroy(): void {
    window.removeEventListener("resize", this.throttle);
  }

  public throttle() {
    if (!this.inThrottle) {
      this.inThrottle = true;
      this.windowWidth = window.innerWidth;
      setTimeout(() => (this.inThrottle = false), 200);
    }
  }
}
