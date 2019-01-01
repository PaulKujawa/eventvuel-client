/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EventsPage
// ====================================================

export interface EventsPage_eventsPage_events_dates_start {
  __typename: "Start";
  localDate: string;
  localTime: string | null;
}

export interface EventsPage_eventsPage_events_dates {
  __typename: "Dates";
  start: EventsPage_eventsPage_events_dates_start;
}

export interface EventsPage_eventsPage_events_images {
  __typename: "Image";
  url: string;
  width: number;
}

export interface EventsPage_eventsPage_events {
  __typename: "Event";
  name: string;
  url: string;
  dates: EventsPage_eventsPage_events_dates;
  images: EventsPage_eventsPage_events_images[];
}

export interface EventsPage_eventsPage {
  __typename: "EventsPage";
  events: EventsPage_eventsPage_events[];
  hasMore: boolean;
}

export interface EventsPage {
  eventsPage: EventsPage_eventsPage;
}

export interface EventsPageVariables {
  page: number;
  city: string;
  classification?: string | null;
}
