import { useQuery } from "@tanstack/react-query";

import { carsApi } from "@/api/carsApi";

// const transformToCarDto = (apiData) => {
//   return apiData.map((item) => item.car);
// };

export const usePopularCarsQuery = ({ limit = 5 } = {}) => {
  return useQuery({
    queryKey: ["cars", "popular", { limit }],
    queryFn: () => carsApi.getPopular({ limit }),
    // select: transformToCarDto,
  });
};
