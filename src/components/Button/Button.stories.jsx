import { Button } from "./Button";

import { buttonConfig } from "./Button.config";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: Object.keys(buttonConfig.variants.variant),
      control: { type: "select" },
    },
    size: {
      options: Object.keys(buttonConfig.variants.size),
      control: { type: "select" },
    },
  },
};

export const Primary = {
  args: {
    variant: "primary",
    size: "md",
    children: "Label",
  },
};
