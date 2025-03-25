import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { buttonClass, buttonConfig } from "./Button.config";

export const Button = ({
  variant = "primary",
  size = "md",
  to = "",
  className = "",
  children,
  ...rest
}) => {
  const ElementType = to === "" ? "button" : Link;

  return (
    <ElementType
      to={to === "" ? null : to}
      className={`${buttonClass({ variant, size })} ${className}`}
      {...rest}
    >
      {children}
    </ElementType>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(buttonConfig.variants.variant))
    .isRequired,
  size: PropTypes.oneOf(Object.keys(buttonConfig.variants.size)).isRequired,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
