import { Children } from "react";
import { Wrapper } from "./Wrapper";

import { wrapperConfig } from "./Wrapper.config";

export default {
  title: "Wrapper",
  component: Wrapper,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: Object.keys(wrapperConfig.variants.size),
    },
    pad: {
      options: Object.keys(wrapperConfig.variants.pad),
    },
  },
};

export const Md = {
  args: {
    size: "md",
    pad: "md",
    children: (
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "var(--clr-primary-500)",
          color: "var(--clr-primary-0)",
        }}
      >
        Wrapped content
      </div>
    ),
  },
};
