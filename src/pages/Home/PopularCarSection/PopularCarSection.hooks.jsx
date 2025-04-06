import { CarCard } from "@/components/CarCard/CarCard";
import { usePopularCarsQuery } from "@/hooks/usePopularCarsQuery";

export const usePopularCars = ({ limit = 4 } = {}) => {
  const {
    data: popularCars,
    isLoading,
    isError,
    error,
  } = usePopularCarsQuery({ limit });

  const cardsList =
    popularCars?.map(({ id, images, ...rest }) => (
      <CarCard
        key={id}
        variant="vertical"
        carId={id}
        imgUrl={images?.[0].url}
        {...rest}
      />
    )) || [];

  return {
    cardsList,
    isLoading,
    isError,
    error,
  };
};
