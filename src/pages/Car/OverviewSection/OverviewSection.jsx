import { useParams } from "react-router-dom";

import { Gallery } from "@/components/Gallery/Gallery";
import { IconButton } from "@/components/IconButton/IconButton";
import { Button } from "@/components/Button/Button";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";
import { useCarQuery } from "@/hooks/useCarQuery";
import { formatPrice } from "@/utils/formatters";
import HeartFilledIcon from "@/assets/icons/heart-filled.svg?react";

import { getCarSpecifications } from "./OverviewSection.utils";
import s from "./OverviewSection.module.scss";

export const OverviewSection = () => {
  return (
    <section className={s.overview}>
      <CarGallery />
      <CarDetails />
    </section>
  );
};

const CarGallery = () => {
  const { isMd } = useMediaQueriesContext();
  const { carId } = useParams();

  const { data: car, isLoading } = useCarQuery(carId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const images = car?.images || [];

  return (
    <Gallery
      size={isMd ? "md" : "sm"}
      images={images.map(({ url, alt }) => ({
        url,
        previewUrl: url,
        alt,
      }))}
    />
  );
};

const CarDetails = () => {
  const { carId } = useParams();

  const { data: car, isLoading } = useCarQuery(carId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const specifications = getCarSpecifications(car);
  const price = formatPrice(car.price);
  const discountedPrice =
    car.discountedPrice === undefined ? null : formatPrice(car.discountedPrice);

  return (
    <article className={s.article}>
      <header className={s.header}>
        <div>
          <h2 className={s.heading}>{car.model}</h2>
          {/* TODO rating */}
        </div>
        <IconButton variant="secondary" size="sm" aria-label="TODO">
          <HeartFilledIcon aria-hidden="true" />
        </IconButton>
      </header>
      <p className={s.description}>{car.description}</p>
      <ul className={s.specifications}>
        {specifications.map(({ label, value }) => (
          <li key={label} className={s["specification__item"]}>
            <span>{label}</span>
            <span className={s["specifications__value"]}>{value}</span>
          </li>
        ))}
      </ul>
      <footer className={s.footer}>
        <div className={s.cost}>
          <p>
            <span className="visually-hidden">Current price: </span>
            <span className={s.price}>
              {discountedPrice ? discountedPrice : price}
              {" /"}
            </span>
            <span> day</span>
          </p>
          {discountedPrice && (
            <p>
              <span className="visually-hidden">Old price: </span>
              <span className={s["old-price"]}>{price}</span>
            </p>
          )}
        </div>
        <Button size="lg">Rent Now</Button>
      </footer>
    </article>
  );
};
