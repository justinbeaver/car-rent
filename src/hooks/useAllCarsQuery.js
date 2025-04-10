import { useQuery } from "@tanstack/react-query";
import { carsApi } from "@/api/carsApi";

export const useAllCarsQuery = (params = {}) => {
  return useQuery({
    queryKey: ["cars", "getAll", params],
    queryFn: () => carsApi.getAll(params),
  });
};
