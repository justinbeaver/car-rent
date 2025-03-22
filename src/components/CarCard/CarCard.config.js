import { cva } from "class-variance-authority";

import s from "./CarCard.module.scss";

const carCardBaseClass = "car-card";

export const carCardConfig = {
  variants: {
    variant: {
      vertical: s[`${carCardBaseClass}--vertical`],
      horizontal: s[`${carCardBaseClass}--horizontal`],
    },
  },
};

export const carCardClass = cva(s[carCardBaseClass], carCardConfig);
