import { cva } from "class-variance-authority";

import s from "./Gallery.module.scss";

const galleryBaseClass = "gallery";

export const galleryConfig = {
  variants: {
    size: {
      sm: s[`${galleryBaseClass}--sm`],
      md: s[`${galleryBaseClass}--md`],
    },
  },
};

export const galleryClass = cva(s[galleryBaseClass], galleryConfig);
