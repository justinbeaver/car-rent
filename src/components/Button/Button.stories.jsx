import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    variant: "primary",
    size: "md",
    children: "Label",
  },
};
