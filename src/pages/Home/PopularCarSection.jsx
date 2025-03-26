import { Link } from "react-router-dom";

import { Wrapper } from "@/components/Wrapper/Wrapper";
import { CarsGrid } from "@/components/CarsGrid/CarsGrid";
import { CarCard } from "@/components/CarCard/CarCard";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import { getPopularCars } from "./PopularCarSection.utils";

import s from "./PopularCarSection.module.scss";

export const PopularCarSection = () => {
  const { isMd } = useMediaQueriesContext();
  const popularCars = getPopularCars();

  const cardsList = popularCars
    .slice(0, 4)
    .map(({ id, images, ...rest }) => (
      <CarCard
        key={id}
        variant="vertical"
        carId={id}
        imgUrl={images[0]}
        {...rest}
      />
    ));

  return (
    <section className={s.section}>
      <Wrapper size="md">
        <header className={s["section__header"]}>
          <h3 className={s["section__heading"]}>Popular Car</h3>
          <Link className={s["section__link"]} to="/cars">
            View All
          </Link>
        </header>
        <CarsGrid
          variant={isMd ? "vertical" : "horizontal"}
          size="sm"
          cardsList={cardsList}
          className={s["cars-grid"]}
        />
      </Wrapper>
    </section>
  );
};
