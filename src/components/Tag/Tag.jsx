import PropTypes from "prop-types";

import { tagClass, tagConfig } from "./Tag.config";

export const Tag = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) => {
  return (
    <div className={`${tagClass({ variant, size })} ${className}`} {...rest}>
      {children}
    </div>
  );
};

Tag.propTypes = {
  variant: PropTypes.oneOf(Object.keys(tagConfig.variants.variant)).isRequired,
  size: PropTypes.oneOf(Object.keys(tagConfig.variants.size)).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
