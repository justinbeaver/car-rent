import PropTypes from "prop-types";

import { IconButton } from "@/components/IconButton/IconButton";
import { Button } from "@/components/Button/Button";
import HeartFilledIcon from "@/assets/icons/heart-filled.svg?react";
import GasStationIcon from "@/assets/icons/gas-station.svg?react";
import SteeringWheelIcon from "@/assets/icons/steering-wheel.svg?react";
import TwoUsersIcon from "@/assets/icons/two-users.svg?react";

import { carCardClass, carCardConfig } from "./CarCard.config";
import s from "./CarCard.module.scss";

export const CarCard = ({
  variant = "vertical",
  model,
  type,
  imgUrl,
  price,
  discountedPrice,
  specifications,
  ...rest
}) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const formattedDiscountedPrice = discountedPrice
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(discountedPrice)
    : null;

  return (
    <article className={carCardClass({ variant })} {...rest}>
      <div className={s.topper}>
        <header>
          <h2 className={s.heading}>{model}</h2>
          <p className={s.type}>{type}</p>
        </header>
        <IconButton variant="minimal" size="sm" aria-label="TODO">
          <HeartFilledIcon aria-hidden="true" />
        </IconButton>
      </div>
      <div className={s.body}>
        <div className={s["car-image"]}>
          <div className={s["img-wrapper"]}>
            <img className={s.img} src={imgUrl} alt="photo of the car" />
          </div>
        </div>
        <ul className={s["specifications"]} aria-label="specifications">
          <li className={s["specifications-item"]}>
            <GasStationIcon aria-hidden="true" />
            <p>
              <span className="visually-hidden">Mileage: </span>
              <span>{specifications.mileage}L</span>
            </p>
          </li>
          <li className={s["specifications-item"]}>
            <SteeringWheelIcon aria-hidden="true" />
            <p>
              <span className="visually-hidden">Transmission: </span>
              <span>{specifications.transmission}</span>
            </p>
          </li>
          <li className={s["specifications-item"]}>
            <TwoUsersIcon aria-hidden="true" />
            <p>
              <span className="visually-hidden">Capacity: </span>
              <span>{specifications.capacity} People</span>
            </p>
          </li>
        </ul>
      </div>
      <div className={s.footer}>
        <div className={s.cost}>
          <p>
            <span className="visually-hidden">Current price: </span>
            <span className={s.price}>
              {formattedDiscountedPrice
                ? formattedDiscountedPrice
                : formattedPrice}{" "}
              /
            </span>
            <span> day</span>
          </p>
          {formattedDiscountedPrice && (
            <p className={s["old-price"]}>
              <span className="visually-hidden">Old price: </span>
              <span>{formattedPrice}</span>
            </p>
          )}
        </div>
        <Button>Rental Now</Button>
      </div>
    </article>
  );
};

CarCard.propTypes = {
  variant: PropTypes.oneOf(Object.keys(carCardConfig.variants.variant))
    .isRequired,
  model: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number,
  specifications: PropTypes.shape({
    mileage: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
  }).isRequired,
};
