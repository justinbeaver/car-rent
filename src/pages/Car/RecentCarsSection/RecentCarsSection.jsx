import { Link } from "react-router-dom";

import { CarsGrid } from "@/components/CarsGrid/CarsGrid";
import { CarCard } from "@/components/CarCard/CarCard";
import { usePopularCarsQuery } from "@/hooks/usePopularCarsQuery";

import s from "./RecentCarsSection.module.scss";

export const RecentCarsSection = () => {
  const {
    data: recentCars,
    isLoading,
    isError,
    error,
  } = usePopularCarsQuery({ limit: 2 });

  const recentCarCards =
    recentCars?.map((car) => (
      <CarCard
        key={car.id}
        variant="vertical"
        size="sm"
        carId={car.id}
        model={car.model}
        type={car.type}
        imgUrl={car.images[0].url}
        price={car.price}
        discountedPrice={car.discountedPrice}
        specifications={car.specifications}
      />
    )) || [];

  return (
    <section>
      <header className={s.header}>
        <h2 className={s.heading}>Recent Cars</h2>
        <Link className={s["view-all-link"]} to="/cars">
          View All
        </Link>
      </header>

      {isLoading && <p>Loading...</p>}

      {isError && <p>{error.message}</p>}

      {!isLoading && !isError && <CarsGrid cardsList={recentCarCards} />}
    </section>
  );
};
