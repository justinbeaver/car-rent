import { IconButton } from "./IconButton";
import HeartFilledIcon from "@/assets/icons/heart-filled.svg?react";

export default {
  title: "IconButton",
  component: IconButton,
  tags: ["autodocs"],
};

export const Secondary = {
  args: {
    variant: "secondary",
    size: "md",
    children: <HeartFilledIcon />,
  },
};
