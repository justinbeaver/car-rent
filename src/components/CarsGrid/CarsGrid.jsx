import PropTypes from "prop-types";

import { carsGridClass, carsGridConfig } from "./CarsGrid.config";

export const CarsGrid = ({
  variant = "vertical",
  size = "md",
  scrollbar = "visible",
  snap = "inline",
  cardsList = [],
  ...rest
}) => {
  return (
    <div
      className={carsGridClass({ variant, size, scrollbar, snap })}
      {...rest}
    >
      {cardsList}
    </div>
  );
};

CarsGrid.propTypes = {
  variant: PropTypes.oneOf(Object.keys(carsGridConfig.variants.variant))
    .isRequired,
  size: PropTypes.oneOf(Object.keys(carsGridConfig.variants.size)).isRequired,
  scrollbar: PropTypes.oneOf(Object.keys(carsGridConfig.variants.scrollbar))
    .isRequired,
  snap: PropTypes.oneOf(Object.keys(carsGridConfig.variants.snap)).isRequired,
  cardsList: PropTypes.arrayOf(PropTypes.node).isRequired,
};
