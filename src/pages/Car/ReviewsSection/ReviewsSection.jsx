import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { ReviewCard } from "@/components/ReviewCard/ReviewCard";
import { Button } from "@/components/Button/Button";
import { Tag } from "@/components/Tag/Tag";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg?react";

import { useCarReviews } from "./ReviewsSection.hooks";
import s from "./ReviewsSection.module.scss";

export const ReviewsSection = ({ reviewsPerPage = 2 }) => {
  const { isMd } = useMediaQueriesContext();
  const { carId } = useParams();

  const {
    isLoading,
    isError,
    error,
    reviews,
    totalReviewsCount,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    resetToFirstPage,
  } = useCarReviews(carId, { perPage: reviewsPerPage });

  const reviewsCount = reviews.length || 0;

  const showNoReviewsMessage = !isLoading && !isError && reviewsCount == 0;
  const showReviews = !isLoading && !isError && reviewsCount > 0;
  const showShowMoreButton = !isLoading && !isError && hasNextPage;
  const showShowLessButton =
    !isLoading && !isError && !hasNextPage && reviewsCount > reviewsPerPage;

  return (
    <section id="reviews" className={s.section}>
      <h2 className={s.heading}>
        <span>Reviews</span>
        <Tag variant="primary" size="md">
          {totalReviewsCount}
        </Tag>
      </h2>

      {isLoading && <p>Loading...</p>}

      {isError && <p>{error.message}</p>}

      {showNoReviewsMessage && (
        <p className={s["no-reviews-message"]}>No reviews</p>
      )}
      {showReviews && (
        <ul className={s.reviews}>
          {reviews.map(({ id, ...rest }) => (
            <li key={id.toString()}>
              <ReviewCard size={isMd ? "md" : "sm"} {...rest} />
            </li>
          ))}
        </ul>
      )}

      {showShowMoreButton && (
        <Button
          variant="minimal"
          size={isMd ? "lg" : "md"}
          className={s["show-button"]}
          onClick={fetchNextPage}
          disabled={isFetchingNextPage}
        >
          <span>{isFetchingNextPage ? "Loading..." : "Show More"}</span>
          <ArrowDownIcon aria-hidden="true" />
        </Button>
      )}
      {showShowLessButton && (
        <Button
          variant="minimal"
          size={isMd ? "lg" : "md"}
          className={s["show-button"]}
          onClick={resetToFirstPage}
        >
          <span>Show Less</span>
        </Button>
      )}
    </section>
  );
};

ReviewsSection.propTypes = {
  reviewsPerPage: PropTypes.number,
};
