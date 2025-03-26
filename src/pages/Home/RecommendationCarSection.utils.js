import { allCars } from "@/data/allCars";
import { recommendedCarIds } from "@/data/recommendedCars";

export const getRecommendedCars = () => {
  const recommendedCars = allCars.filter((car) =>
    recommendedCarIds.includes(car.id)
  );

  return recommendedCars;
};
