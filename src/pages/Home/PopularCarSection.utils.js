import { allCars } from "@/data/allCars";
import { popularCarIds } from "@/data/popularCars";

export const getPopularCars = () => {
  const popularCars = allCars.filter((car) => popularCarIds.includes(car.id));

  return popularCars;
};
