import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { buttonClass, buttonConfig } from "./Button.config";

export const Button = ({
  variant = "primary",
  size = "md",
  href = "",
  to = "",
  className = "",
  children,
  ...rest
}) => {
  let ElementType;

  if (href !== "") {
    ElementType = "a";
  } else if (to !== "") {
    ElementType = Link;
  } else {
    ElementType = "button";
  }

  return (
    <ElementType
      href={href === "" ? null : href}
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
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
