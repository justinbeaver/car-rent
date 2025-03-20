import { cva } from "class-variance-authority";

import s from "./IconButton.module.scss";

const iconButtonBaseClass = "icon-button";

export const iconButtonConfig = {
  variants: {
    variant: {
      secondary: s[`${iconButtonBaseClass}--secondary`],
      minimal: s[`${iconButtonBaseClass}--minimal`],
    },
    size: {
      sm: s[`${iconButtonBaseClass}--sm`],
      md: s[`${iconButtonBaseClass}--md`],
    },
  },
};

export const iconButtonClass = cva(s[iconButtonBaseClass], iconButtonConfig);
