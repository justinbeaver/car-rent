import VisaLogo from "@/assets/logos/visa.svg?react";
import PayPalLogo from "@/assets/logos/paypal.svg?react";
import BitcoinLogo from "@/assets/logos/bitcoin.svg?react";

import s from "./PaymentMethod.module.scss";

export const PaymentMethod = () => {
  return (
    <section className={s.section}>
      <header className={s.header}>
        <div>
          <h2 className={s.heading}>Payment Method</h2>
          <p className={s.subheading}>Please enter your payment method</p>
        </div>
        <p className={s["step-status"]}>Step 3 of 4</p>
      </header>

      <ul className={s.list}>
        <li className={s["list__item"]}>
          <label className={s.label} htmlFor="payment-credit-card">
            <input
              id="payment-credit-card"
              type="radio"
              name="payment"
              value="credit-card"
            />
            <span>Credit Card</span>
            <VisaLogo className={s["label-logo"]} aria-hidden="true" />
          </label>
        </li>
        <li className={s["list__item"]}>
          <label className={s.label} htmlFor="payment-paypal">
            <input
              id="payment-paypal"
              type="radio"
              name="payment"
              value="paypal"
            />
            <span>PayPal</span>
            <PayPalLogo className={s["label-logo"]} aria-hidden="true" />
          </label>
        </li>
        <li className={s["list__item"]}>
          <label className={s.label} htmlFor="payment-bitcoin">
            <input
              id="payment-bitcoin"
              type="radio"
              name="payment"
              value="bitcoin"
            />
            <span>Bitcoin</span>
            <BitcoinLogo className={s["label-logo"]} aria-hidden="true" />
          </label>
        </li>
      </ul>
    </section>
  );
};
