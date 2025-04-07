import { CarCard } from "@/components/CarCard/CarCard";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";
import { useRecommendedCarsQuery } from "@/hooks/useRecommendedCarsQuery";

export const useCarCardsList = ({ limit = 8 } = {}) => {
  const { isSm } = useMediaQueriesContext();

  const {
    data: cars,
    isLoading,
    isError,
    error,
  } = useRecommendedCarsQuery({ limit });

  const cardsList =
    cars?.map(({ id, images, ...rest }) => (
      <CarCard
        key={id}
        variant={isSm ? "vertical" : "horizontal"}
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
