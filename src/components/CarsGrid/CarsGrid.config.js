import { cva } from "class-variance-authority";

import s from "./CarsGrid.module.scss";

const carsGridBaseClass = "cars-grid";

export const carsGridConfig = {
  variants: {
    variant: {
      horizontal: s[`${carsGridBaseClass}--horizontal`],
      vertical: s[`${carsGridBaseClass}--vertical`],
    },
    size: {
      sm: s[`${carsGridBaseClass}--sm`],
      md: s[`${carsGridBaseClass}--md`],
      lg: s[`${carsGridBaseClass}--lg`],
    },
    scrollbar: {
      visible: null,
      hidden: s[`${carsGridBaseClass}__scrollbar--hidden`],
    },
    snap: {
      none: null,
      inline: s[`${carsGridBaseClass}__snap--inline`],
    },
  },
};

export const carsGridClass = cva(s[carsGridBaseClass], carsGridConfig);
