import PropTypes from "prop-types";

import { wrapperClass, wrapperConfig } from "./Wrapper.config";

export const Wrapper = ({ size = "md", pad = "md", children, ...rest }) => {
  return (
    <div className={wrapperClass({ size, pad })} {...rest}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  size: PropTypes.oneOf(Object.keys(wrapperConfig.variants.size)).isRequired,
  pad: PropTypes.oneOf(Object.keys(wrapperConfig.variants.pad)).isRequired,
  children: PropTypes.node,
};
