export type Category = {
  id: number;
  name: string;
};

export const categoryConfig: { [routeName: string]: Category } = {
  eventListArts: {
    id: 10002,
    name: "Art events"
  },
  eventListConcerts: {
    id: 10001,
    name: "Concerts"
  },
  eventListSports: {
    id: 10004,
    name: "Sport events"
  }
};

export const eventListSortings = [
  { id: "eventdate", title: "Event Date" },
  { id: "onsaledate", title: "On-Sale Date" },
  { id: "popularity", title: "Popularity" }
];

export type City = { id: number; name: string; country_id: number };

// TODO only tentative
export const cities: City[] = [
  {
    country_id: 276,
    id: 60000,
    name: "Berlin"
  },
  {
    country_id: 276,
    id: 60075,
    name: "Hamburg"
  }
];
