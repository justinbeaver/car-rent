import PropTypes from "prop-types";

import { iconButtonClass, iconButtonConfig } from "./IconButton.config";

export const IconButton = ({
  variant = "secondary",
  size = "md",
  children,
  ...rest
}) => {
  return (
    <button className={iconButtonClass({ variant, size })} {...rest}>
      {children}
    </button>
  );
};

IconButton.propTypes = {
  variant: PropTypes.oneOf(Object.keys(iconButtonConfig.variants.variant))
    .isRequired,
  size: PropTypes.oneOf(Object.keys(iconButtonConfig.variants.size)).isRequired,
  children: PropTypes.node,
};
