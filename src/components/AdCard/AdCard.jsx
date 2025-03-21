import PropTypes from "prop-types";

import { Button } from "@/components/Button/Button";

import { adCardClass, adCardConfig } from "./AdCard.config";
import s from "./AdCard.module.scss";

export const AdCard = ({
  variant = "primary",
  size = "sm",
  heading,
  description,
  ...rest
}) => {
  return (
    <article className={adCardClass({ variant, size })} {...rest}>
      <div className={s["text-content"]}>
        <h2 className={s.heading}>{heading}</h2>
        <p className={s.description}>{description}</p>
      </div>
      <Button variant="primary" size={size === "lg" ? "lg" : "sm"}>
        Rental Car
      </Button>
    </article>
  );
};

AdCard.propTypes = {
  variant: PropTypes.oneOf(Object.keys(adCardConfig.variants.variant))
    .isRequired,
  size: PropTypes.oneOf(Object.keys(adCardConfig.variants.size)).isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
