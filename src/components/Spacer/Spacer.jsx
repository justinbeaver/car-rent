import PropTypes from "prop-types";

import { spacerClass, spacerConfig } from "./Spacer.config";

export const Spacer = ({
  variant = "block",
  size = "400",
  className = "",
  ...rest
}) => {
  return (
    <div
      className={`${spacerClass({ variant, size })} ${className}`}
      aria-hidden="true"
      {...rest}
    />
  );
};

Spacer.propTypes = {
  variant: PropTypes.oneOf(Object.keys(spacerConfig.variants.variant))
    .isRequired,
  size: PropTypes.oneOf(Object.keys(spacerConfig.variants.size)).isRequired,
  className: PropTypes.string,
};
