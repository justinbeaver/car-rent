import { CarsGrid } from "./CarsGrid";
import { CarCard } from "@/components/CarCard/CarCard";

export default {
  title: "CarsGrid",
  component: CarsGrid,
  tags: ["autodocs"],
};

const cars = [
  {
    id: 1,
    model: "Koenigsegg",
    type: "Sport",
    imgUrl: "/images/cars/koenigsegg.png",
    price: 99.0,
    specifications: {
      mileage: 90,
      transmission: "Manual",
      capacity: 2,
    },
  },
  {
    id: 2,
    model: "Nissan GT - R",
    type: "Sport",
    imgUrl: "/images/cars/nissan_gt-r.png",
    price: 100.0,
    discountedPrice: 80.0,
    specifications: {
      mileage: 80,
      transmission: "Manual",
      capacity: 2,
    },
  },
  {
    id: 3,
    model: "Rolls - Royce",
    type: "Sedan",
    imgUrl: "/images/cars/rolls-royce.png",
    price: 96.0,
    specifications: {
      mileage: 70,
      transmission: "Manual",
      capacity: 4,
    },
  },
  {
    id: 4,
    model: "Koenigsegg",
    type: "Sport",
    imgUrl: "/images/cars/koenigsegg.png",
    price: 99.0,
    specifications: {
      mileage: 90,
      transmission: "Manual",
      capacity: 2,
    },
  },
  {
    id: 5,
    model: "Nissan GT - R",
    type: "Sport",
    imgUrl: "/images/cars/nissan_gt-r.png",
    price: 100.0,
    discountedPrice: 80.0,
    specifications: {
      mileage: 80,
      transmission: "Manual",
      capacity: 2,
    },
  },
  {
    id: 6,
    model: "Rolls - Royce",
    type: "Sedan",
    imgUrl: "/images/cars/rolls-royce.png",
    price: 96.0,
    specifications: {
      mileage: 70,
      transmission: "Manual",
      capacity: 4,
    },
  },
  {
    id: 7,
    model: "Rolls - Royce",
    type: "Sedan",
    imgUrl: "/images/cars/rolls-royce.png",
    price: 96.0,
    specifications: {
      mileage: 70,
      transmission: "Manual",
      capacity: 4,
    },
  },
];

export const Vertical = {
  args: {
    variant: "horizontal",
    size: "sm",
    scrollbar: "visible",
    snap: "inline",
    cardsList: cars.map(({ id, ...rest }) => (
      <CarCard key={id} variant="horizontal" {...rest} />
    )),
  },
};
