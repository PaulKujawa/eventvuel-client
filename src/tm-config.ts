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

export const eventSort = [
  { id: "eventdate", title: "Event Date" },
  { id: "onsaledate", title: "On-Sale Date" },
  { id: "popularity", title: "Popularity" }
];
