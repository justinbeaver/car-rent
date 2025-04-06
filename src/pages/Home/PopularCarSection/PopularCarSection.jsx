import { Link } from "react-router-dom";

import { Wrapper } from "@/components/Wrapper/Wrapper";
import { CarsGrid } from "@/components/CarsGrid/CarsGrid";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import { usePopularCars } from "./PopularCarSection.hooks";
import s from "./PopularCarSection.module.scss";

export const PopularCarSection = () => {
  const { isMd } = useMediaQueriesContext();

  const { cardsList, isLoading, isError, error } = usePopularCars({ limit: 4 });

  return (
    <section className={s.section}>
      <Wrapper size="md">
        <header className={s["section__header"]}>
          <h3 className={s["section__heading"]}>Popular Car</h3>
          <Link className={s["section__link"]} to="/cars">
            View All
          </Link>
        </header>

        {isLoading && <p>Loading...</p>}

        {isError && <p>{error.message}</p>}

        {!isLoading && !isError && (
          <CarsGrid
            variant={isMd ? "vertical" : "horizontal"}
            size="sm"
            cardsList={cardsList}
            className={s["cars-grid"]}
          />
        )}
      </Wrapper>
    </section>
  );
};
