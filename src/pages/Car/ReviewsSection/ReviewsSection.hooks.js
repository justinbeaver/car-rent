import { useInfiniteCarReviewsQuery } from "@/hooks/useInfiniteCarReviewsQuery";

export const useCarReviews = (carId, { perPage = 3 } = {}) => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    resetToFirstPage,
  } = useInfiniteCarReviewsQuery(carId, { perPage });

  const totalReviewsCount = data?.pages[0].items || 0;
  const reviews = data?.pages.flatMap((page) => page.data) || [];

  return {
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    resetToFirstPage,
    totalReviewsCount,
    reviews,
  };
};
