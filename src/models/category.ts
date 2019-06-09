import { mdiBike, mdiBrush, mdiMusic } from "@mdi/js";

export type Category = {
  svgPath: string;
  id: number;
  imgPath: string;
  routeName: string;
  title: string;
};

// free images from pexels.com
export const tmCategories: Category[] = [
  {
    id: 10002,
    imgPath: "/images/arts.jpeg",
    routeName: "eventListArts",
    svgPath: mdiBrush,
    title: "Art events"
  },
  {
    id: 10001,
    imgPath: "/images/concerts.jpeg",
    routeName: "eventListConcerts",
    svgPath: mdiMusic,
    title: "Concerts"
  },
  {
    id: 10004,
    imgPath: "/images/sports.jpeg",
    routeName: "eventListSports",
    svgPath: mdiBike,
    title: "Sport events"
  }
];
