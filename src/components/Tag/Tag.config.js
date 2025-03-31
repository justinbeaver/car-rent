import { cva } from "class-variance-authority";

import s from "./Tag.module.scss";

const tagBaseClass = "tag";

export const tagConfig = {
  variants: {
    variant: {
      primary: s[`${tagBaseClass}--primary`],
    },
    size: {
      md: s[`${tagBaseClass}--md`],
    },
  },
};

export const tagClass = cva(s[tagBaseClass], tagConfig);
