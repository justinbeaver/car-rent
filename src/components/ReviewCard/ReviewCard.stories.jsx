import { ReviewCard } from "./ReviewCard";

export default {
  component: ReviewCard,
};

const content = {
  review:
    "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  date: "21 July 2022",
  rating: 4,
  user: {
    name: "Alex Stanton",
    avatarUrl: "",
    occupation: "CEO at Bukalapak",
  },
};

export const Sm = {
  args: {
    size: "sm",
    ...content,
  },
};
