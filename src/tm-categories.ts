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
    icon: "mdi-brush",
    id: 10002,
    imageUrl: "/images/arts.jpeg",
    routeName: "eventListArts",
    title: "Art events"
  },
  {
    icon: "mdi-music",
    id: 10001,
    imageUrl: "/images/concerts.jpeg",
    routeName: "eventListConcerts",
    title: "Concerts"
  },
  {
    icon: "mdi-bike",
    id: 10004,
    imageUrl: "/images/sports.jpeg",
    routeName: "eventListSports",
    title: "Sport events"
  }
];
