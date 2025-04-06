import { CarsGrid } from "@/components/CarsGrid/CarsGrid";
import { CarCard } from "@/components/CarCard/CarCard";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import { getRecommendedCars } from "./RecommendationCarSection.utils";
import s from "./RecommendationCarSection.module.scss";

export const RecommendationCarSection = () => {
  const { isSm } = useMediaQueriesContext();
  const recommendedCars = getRecommendedCars();

  const cardsList = recommendedCars
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
      <header className={s["section__header"]}>
        <h3 className={s["section__heading"]}>Recommendation Car</h3>
      </header>
      <CarsGrid size="sm" cardsList={cardsList} />
    </section>
  );
};
