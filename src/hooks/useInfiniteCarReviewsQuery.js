import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

import { reviewsApi } from "@/api/reviewsApi";

export const useInfiniteCarReviewsQuery = (
  carId,
  { page = 1, perPage = 10 } = {}
) => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["reviews", "infinite", carId, page, perPage],
    queryFn: ({ pageParam }) =>
      reviewsApi.getByCarId({ carId, page: pageParam, perPage }),
    initialPageParam: page,
    getNextPageParam: (lastPage) => lastPage.next,
  });

  const queryClient = useQueryClient();

  const resetToFirstPage = () => {
    queryClient.resetQueries({
      queryKey: ["reviews", "infinite", carId, page, perPage],
    });
  };

  return {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    resetToFirstPage,
  };
};
