import { IconButton } from "./IconButton";
import HeartFilledIcon from "@/assets/icons/heart-filled.svg?react";

export default {
  component: IconButton,
};

export const Secondary = {
  args: {
    variant: "secondary",
    size: "md",
    children: <HeartFilledIcon />,
  },
};
