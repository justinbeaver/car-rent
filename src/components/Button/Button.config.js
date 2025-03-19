import { cva } from "class-variance-authority";

import s from "./Button.module.scss";

const buttonBaseClass = "button";

export const buttonConfig = {
  variants: {
    variant: {
      primary: s[`${buttonBaseClass}--primary`],
      secondary: s[`${buttonBaseClass}--secondary`],
      minimal: s[`${buttonBaseClass}--minimal`],
    },
    size: {
      sm: s[`${buttonBaseClass}--sm`],
      md: s[`${buttonBaseClass}--md`],
      lg: s[`${buttonBaseClass}--lg`],
    },
  },
};

export const buttonClass = cva(s[buttonBaseClass], buttonConfig);
