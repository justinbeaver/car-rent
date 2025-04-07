import { useQuery } from "@tanstack/react-query";

import { carsApi } from "@/api/carsApi";

export const useRecommendedCarsQuery = ({ limit = 8 } = {}) => {
  return useQuery({
    queryKey: ["cars", "recommended", { limit }],
    queryFn: () => carsApi.getRecommended({ limit }),
  });
};
