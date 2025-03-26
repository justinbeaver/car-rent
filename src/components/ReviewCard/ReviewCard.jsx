import PropTypes from "prop-types";

import { Avatar } from "@/components/Avatar/Avatar";

import { reviewCardClass, reviewCardConfig } from "./ReviewCard.config";
import s from "./ReviewCard.module.scss";

export const ReviewCard = ({ size = "sm", review, date, rating, user }) => {
  return (
    <article className={reviewCardClass({ size })}>
      <Avatar
        size={size === "sm" ? "md" : "lg"}
        personName={user.name}
        avatarUrl={user.avatarUrl}
      />
      <div>
        <header className={s.header}>
          <div>
            <h3 className={s["user-name"]}>{user.name}</h3>
            <p className={s.occupation}>{user.occupation}</p>
          </div>
          <div>
            <p className={s.date}>{date}</p>
            {/* TODO Rating */}
          </div>
        </header>
        <p className={s.review}>{review}</p>
      </div>
    </article>
  );
};

ReviewCard.propTypes = {
  size: PropTypes.oneOf(Object.keys(reviewCardConfig.variants.size)).isRequired,
  review: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    occupation: PropTypes.string,
  }).isRequired,
};
