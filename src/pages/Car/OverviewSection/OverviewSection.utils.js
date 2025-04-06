export const getCarSpecifications = (car) => {
  return [
    { label: "Type Car", value: car.type },
    { label: "Capacity", value: `${car.specifications.capacity} Person` },
    { label: "Transmission", value: car.specifications.transmission },
    { label: "Mileage", value: `${car.specifications.mileage} L` },
  ];
};
