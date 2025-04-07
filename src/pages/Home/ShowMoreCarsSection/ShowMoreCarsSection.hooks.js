import { useQuery } from "@tanstack/react-query";

import { carsApi } from "@/api/carsApi";

export const useTotalCarsCount = () => {
  const { data } = useQuery({
    queryKey: ["cars", "getAll", { page: 1, perPage: 1 }],
    queryFn: () => carsApi.getAll({ page: 1, perPage: 1 }),
  });

  const totalCarsCount = data?.items;

  return { totalCarsCount };
};
