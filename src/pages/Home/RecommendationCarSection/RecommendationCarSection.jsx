import { CarsGrid } from "@/components/CarsGrid/CarsGrid";

import { useCarCardsList } from "./RecommendationCarSection.hooks";
import s from "./RecommendationCarSection.module.scss";

export const RecommendationCarSection = () => {
  const { cardsList, isLoading, isError, error } = useCarCardsList({
    limit: 8,
  });

  return (
    <section>
      <header className={s["section__header"]}>
        <h3 className={s["section__heading"]}>Recommendation Car</h3>
      </header>

      {isLoading && <p>Loading...</p>}

      {isError && <p>{error.message}</p>}

      {!isLoading && !isError && <CarsGrid size="sm" cardsList={cardsList} />}
    </section>
  );
};
