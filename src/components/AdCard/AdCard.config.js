import { cva } from "class-variance-authority";

import s from "./AdCard.module.scss";

const adCardBaseClass = "ad-card";

export const adCardConfig = {
  variants: {
    variant: {
      primary: s[`${adCardBaseClass}--primary`],
      secondary: s[`${adCardBaseClass}--secondary`],
    },
    size: {
      sm: s[`${adCardBaseClass}--sm`],
      lg: s[`${adCardBaseClass}--lg`],
    },
  },
};

export const adCardClass = cva(s[adCardBaseClass], adCardConfig);
