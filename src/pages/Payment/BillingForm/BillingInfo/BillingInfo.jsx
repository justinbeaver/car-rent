import s from "./BillingInfo.module.scss";

export const BillingInfo = () => {
  return (
    <section className={s.section}>
      <header className={s.header}>
        <div>
          <h2 className={s.heading}>Billing Info</h2>
          <p className={s.subheading}>Please enter your info</p>
        </div>
        <p className={s["step-status"]}>Step 1 of 4</p>
      </header>
      <ul className={s.list}>
        <li className={s["list__item"]}>
          <label className={s.label} htmlFor="input-name">
            Name
          </label>
          <input
            id="input-name"
            className={s["text-input"]}
            type="text"
            placeholder="Your name"
          />
        </li>
        <li className={s["list__item"]}>
          <label className={s.label} htmlFor="input-address">
            Address
          </label>
          <input
            id="input-address"
            className={s["text-input"]}
            type="text"
            placeholder="Address"
          />
        </li>
        <li className={s["list__item"]}>
          <label className={s.label} htmlFor="input-phone">
            Phone number
          </label>
          <input
            id="input-phone"
            className={s["text-input"]}
            type="text"
            placeholder="Phone number"
          />
        </li>
        <li className={s["list__item"]}>
          <label className={s.label} htmlFor="input-city">
            Town / city
          </label>
          <input
            id="input-city"
            className={s["text-input"]}
            type="text"
            placeholder="Town or city"
          />
        </li>
      </ul>
    </section>
  );
};
