import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";
import Vue from "vue";

if (process.env.NODE_ENV === "production") {
  // Global handler for exceptions thrown in components
  // based on https://vuejs.org/v2/api/#errorHandler

  Sentry.init({
    dsn: "https://f4bff808934147208699f6ae33f6385f@sentry.io/1487577",
    integrations: [new Integrations.Vue({ Vue, attachProps: true })]
  });
}
