import { Link } from "react-router-dom";

import { CarsGrid } from "@/components/CarsGrid/CarsGrid";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { CarCard } from "@/components/CarCard/CarCard";
import { Button } from "@/components/Button/Button";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";
import { allCars, popularCars } from "@/data/data";

import s from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <PopularCarSection />
      <RecommendationCarSection />
    </>
  );
};

const PopularCarSection = () => {
  const { isMd } = useMediaQueriesContext();

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
    <section>
      <Wrapper>
        <header className={s["section__header"]}>
          <h3 className={s["section__heading"]}>Popular Car</h3>
          <Link className={s["section__link"]}>View All</Link>
        </header>
        <CarsGrid
          variant={isMd ? "vertical" : "horizontal"}
          size="sm"
          cardsList={cardsList}
          style={{ "grid-column-end": `${isMd ? "md" : "full"}` }}
        />
      </Wrapper>
    </section>
  );
};

const RecommendationCarSection = () => {
  const { isSm } = useMediaQueriesContext();

  const cardsList = allCars
    .slice(0, 8)
    .map(({ id, images, ...rest }) => (
      <CarCard
        key={id}
        variant={isSm ? "vertical" : "horizontal"}
        carId={id}
        imgUrl={images[0]}
        {...rest}
      />
    ));

  return (
    <section>
      <Wrapper>
        <header className={s["section__header"]}>
          <h3 className={s["section__heading"]}>Recommendation Car</h3>
        </header>
        <CarsGrid size="sm" cardsList={cardsList} />
        <div className={s["show-more"]}>
          <Button to="cars" className={s["show-more__button"]}>
            Show more cars
          </Button>
          <p className={s["show-more__count"]}>120 Car</p>
        </div>
      </Wrapper>
    </section>
  );
};
