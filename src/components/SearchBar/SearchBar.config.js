import { cva } from "class-variance-authority";

import s from "./SearchBar.module.scss";

const searchBarBaseClass = "search-bar";

export const searchBarConfig = {
  variants: {
    variant: {
      separate: s[`${searchBarBaseClass}--separate`],
      combined: s[`${searchBarBaseClass}--combined`],
    },
  },
};

export const searchBarClass = cva(s[searchBarBaseClass], searchBarConfig);
