import { Button } from "@/components/Button/Button";

import { getTotalCarsCount } from "./ShowMoreCarsSection.utils";

import s from "./ShowMoreCarsSection.module.scss";

export const ShowMoreCarsSection = () => {
  const totalCarsCount = getTotalCarsCount();

  return (
    <div className={s["show-more"]}>
      <Button to="/cars" className={s["show-more__button"]}>
        Show more cars
      </Button>
      <p className={s["show-more__count"]}>
        <span className="visually-hidden">Total cars: </span>
        <span>{`${totalCarsCount} Car`}</span>
      </p>
    </div>
  );
};
