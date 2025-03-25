import { Gallery } from "./Gallery";

export default {
  component: Gallery,
};

const images = [
  {
    url: "/images/cars/cr-v.png",
    previewUrl: "/images/cars/cr-v.png",
    alt: "",
  },
  {
    url: "/images/cars/koenigsegg.png",
    previewUrl: "/images/cars/koenigsegg.png",
    alt: "",
  },
  {
    url: "/images/cars/nissan_gt-r.png",
    previewUrl: "/images/cars/nissan_gt-r.png",
    alt: "",
  },
];

export const Primary = {
  args: {
    size: "sm",
    images,
  },
};
