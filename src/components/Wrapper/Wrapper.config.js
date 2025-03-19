import { cva } from "class-variance-authority";

import { generateSizeRanges } from "./Wrapper.utils";

import s from "./Wrapper.module.scss";

const wrapperBaseClass = "wrapper";

const sizes = ["middle", "sm", "md", "lg", "full"];

const sizeRanges = generateSizeRanges(wrapperBaseClass, sizes);

export const wrapperConfig = {
  variants: {
    size: {
      sm: [
        s[`${wrapperBaseClass}__start--sm`],
        s[`${wrapperBaseClass}__end--sm`],
      ],
      md: [
        s[`${wrapperBaseClass}__start--md`],
        s[`${wrapperBaseClass}__end--md`],
      ],
      lg: [
        s[`${wrapperBaseClass}__start--lg`],
        s[`${wrapperBaseClass}__end--lg`],
      ],
      full: [
        s[`${wrapperBaseClass}__start--full`],
        s[`${wrapperBaseClass}__end--full`],
      ],
      ...sizeRanges,
    },
    pad: {
      none: s[`${wrapperBaseClass}__pad--none`],
      sm: null,
      md: s[`${wrapperBaseClass}__pad--md`],
      lg: s[`${wrapperBaseClass}__pad--lg`],
    },
  },
};

export const wrapperClass = cva(s[wrapperBaseClass], wrapperConfig);
