export type Category = {
  icon: string;
  id: number;
  imageUrl: string;
  routeName: string;
  title: string;
};

// free images from pexels.com
export const categories: Category[] = [
  {
    icon: "brush",
    id: 10002,
    imageUrl: "/images/arts.jpeg",
    routeName: "eventListArts",
    title: "Art events"
  },
  {
    icon: "music_note",
    id: 10001,
    imageUrl: "/images/concerts.jpeg",
    routeName: "eventListConcerts",
    title: "Concerts"
  },
  {
    icon: "directions_bike",
    id: 10004,
    imageUrl: "/images/sports.jpeg",
    routeName: "eventListSports",
    title: "Sport events"
  }
];

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
