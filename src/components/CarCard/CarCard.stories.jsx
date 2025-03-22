import { CarCard } from "./CarCard";

export default {
  title: "CarCard",
  component: CarCard,
  tags: ["autodocs"],
};

export const Vertical = {
  args: {
    variant: "vertical",
    model: "All New Rush",
    type: "SUV",
    imgUrl: "/images/cars/all-new-terios.png",
    price: 80.0,
    discountedPrice: 72.0,
    specifications: {
      mileage: 70,
      transmission: "Manual",
      capacity: 6,
    },
  },
};
