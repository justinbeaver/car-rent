import { useQuery } from "@tanstack/react-query";
import { carsApi } from "@/api/carsApi";

export const useAllCarsQuery = ({
  limit = undefined,
  page = undefined,
  perPage = undefined,
} = {}) => {
  return useQuery({
    queryKey: ["cars", "getAll", { limit, page, perPage }],
    queryFn: () => carsApi.getAll({ limit, page, perPage }),
  });
};
