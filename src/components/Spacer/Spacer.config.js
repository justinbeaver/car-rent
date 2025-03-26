import { cva } from "class-variance-authority";

import s from "./Spacer.module.scss";

const spacerBaseClass = "spacer";

export const spacerConfig = {
  variants: {
    variant: {
      inline: s[`${spacerBaseClass}--inline`],
      block: s[`${spacerBaseClass}--block`],
    },
    size: {
      100: s[`${spacerBaseClass}--100`],
      200: s[`${spacerBaseClass}--200`],
      300: s[`${spacerBaseClass}--300`],
      400: s[`${spacerBaseClass}--400`],
      500: s[`${spacerBaseClass}--500`],
      600: s[`${spacerBaseClass}--600`],
      700: s[`${spacerBaseClass}--700`],
      800: s[`${spacerBaseClass}--800`],
      900: s[`${spacerBaseClass}--900`],
      950: s[`${spacerBaseClass}--950`],
    },
  },
};

export const spacerClass = cva(s[spacerBaseClass], spacerConfig);
