import { Button } from "@/components/Button/Button";
import carImg from "/images/look-3.jpg";

import s from "./RentalSummary.module.scss";

export const RentalSummary = () => {
  return (
    <section className={s.section}>
      <header>
        <h2 className={s.heading}>Rental Summary</h2>
        <p className={s.subheading}>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </header>

      <div className={s.overview}>
        <div>
          <img
            className={s["car-img"]}
            src={carImg}
            alt="picture of the selected car"
          />
        </div>
        <div>
          <p className={s["car-name"]}>Nissan GT-R</p>
          <p>review</p>
        </div>
      </div>

      <hr />

      <dl className={s.dl} aria-label="price breakdown">
        <div className={s["dl__item"]}>
          <dt className={s["dl__dt"]}>Subtotal </dt>
          <dd className={s["dl__dd"]}>$80.00</dd>
        </div>
        <div className={s["dl__item"]}>
          <dt className={s["dl__dt"]}>Tax</dt>
          <dd className={s["dl__dd"]}>$0</dd>
        </div>
      </dl>

      <div className={s["input-group"]}>
        <label className="visually-hidden" htmlFor="promo-code-input">
          Use promo code:
        </label>
        <input
          id="promo-code-input"
          className={s["text-input"]}
          type="text"
          placeholder="Apply promo code"
        />
        <Button className={s["input-button"]} variant="primary" size="sm">
          Apply now
        </Button>
      </div>

      <footer className={s.footer}>
        <div>
          <p className={s["footer__heading"]}>Total Rental Price</p>
          <p className={s["footer__subheading"]}>
            Overall price and includes rental discount
          </p>
        </div>
        <p className={s["footer__price"]}>$80.00</p>
      </footer>
    </section>
  );
};
