import PropTypes from "prop-types";

import { buttonClass, buttonConfig } from "./Button.config";

export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) => {
  return (
    <button
      className={`${buttonClass({ variant, size })} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(buttonConfig.variants.variant))
    .isRequired,
  size: PropTypes.oneOf(Object.keys(buttonConfig.variants.size)).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
