import PropTypes from "prop-types";

import avatarPlaceholder from "@/assets/icons/user.svg";

import { avatarClass, avatarConfig } from "./Avatar.config";
import s from "./Avatar.module.scss";

export const Avatar = ({
  size = "md",
  personName,
  avatarUrl = avatarPlaceholder,
  ...rest
}) => {
  return (
    <div className={avatarClass({ size })} {...rest}>
      <img className={s.img} src={avatarUrl} alt={`${personName}'s avatar`} />
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(Object.keys(avatarConfig.variants.size)).isRequired,
  personName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};
