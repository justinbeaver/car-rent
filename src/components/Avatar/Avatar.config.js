import { cva } from "class-variance-authority";

import s from "./Avatar.module.scss";

const avatarBaseClass = "avatar";

export const avatarConfig = {
  variants: {
    size: {
      sm: s[`${avatarBaseClass}--sm`],
      md: s[`${avatarBaseClass}--md`],
      lg: s[`${avatarBaseClass}--lg`],
    },
  },
};

export const avatarClass = cva(s[avatarBaseClass], avatarConfig);
