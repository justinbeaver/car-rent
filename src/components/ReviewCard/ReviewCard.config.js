import { cva } from "class-variance-authority";

import s from "./ReviewCard.module.scss";

const reviewCardBaseClass = "review-card";

export const reviewCardConfig = {
  variants: {
    size: {
      sm: s[`${reviewCardBaseClass}--sm`],
      md: s[`${reviewCardBaseClass}--md`],
    },
  },
};

export const reviewCardClass = cva(s[reviewCardBaseClass], reviewCardConfig);
