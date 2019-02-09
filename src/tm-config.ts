export type Category = {
  id: string;
  name: string;
};

export const categoryConfig: { [routeName: string]: Category } = {
  eventListArts: {
    id: "KZFzniwnSyZfZ7v7na",
    name: "Art events"
  },
  eventListConcerts: {
    id: "KZFzniwnSyZfZ7v7nE",
    name: "Concerts"
  },
  eventListSports: {
    id: "KZFzniwnSyZfZ7v7nJ",
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
