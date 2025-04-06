import { useQuery } from "@tanstack/react-query";

import { carsApi } from "@/api/carsApi";

export const useCarQuery = (carId) => {
  return useQuery({
    queryKey: ["cars", "getById", carId],
    queryFn: () => carsApi.getById(carId),
  });
};
