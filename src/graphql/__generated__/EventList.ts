/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EventList
// ====================================================

export interface EventList_eventList_events_eventDate {
  __typename: "Date";
  value: string;
}

export interface EventList_eventList_events_images_standard {
  __typename: "Image";
  url: string;
}

export interface EventList_eventList_events_images {
  __typename: "Images";
  standard: EventList_eventList_events_images_standard;
}

export interface EventList_eventList_events_priceRanges_includingTicketFees {
  __typename: "TicketFee";
  min: number;
}

export interface EventList_eventList_events_priceRanges {
  __typename: "PriceRanges";
  includingTicketFees: EventList_eventList_events_priceRanges_includingTicketFees;
}

export interface EventList_eventList_events_properties {
  __typename: "Properties";
  seats_available: boolean;
  sold_out: boolean;
}

export interface EventList_eventList_events {
  __typename: "Event";
  eventDate: EventList_eventList_events_eventDate | null;
  images: EventList_eventList_events_images | null;
  name: string;
  priceRanges: EventList_eventList_events_priceRanges | null;
  properties: EventList_eventList_events_properties;
  url: string;
}

export interface EventList_eventList {
  __typename: "EventList";
  events: EventList_eventList_events[];
  hasMore: boolean;
}

export interface EventList {
  eventList: EventList_eventList;
}

export interface EventListVariables {
  categoryIds: string[];
  cityId: string;
  sort?: string | null;
  start?: number | null;
}
