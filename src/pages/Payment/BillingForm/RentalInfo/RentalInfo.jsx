import { Spacer } from "@/components/Spacer/Spacer";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import s from "./RentalInfo.module.scss";

export const RentalInfo = () => {
  const { isSm } = useMediaQueriesContext();

  return (
    <section className={s.section}>
      <header className={s.header}>
        <div>
          <h2 className={s.heading}>Rental Info</h2>
          <p className={s.subheading}>Please select your rental date</p>
        </div>
        <p className={s["step-status"]}>Step 2 of 4</p>
      </header>

      <fieldset className={s.fieldset}>
        <legend className={s.legend}>Pick-Up</legend>
        <ul className={s.list}>
          <li className={s.list__item}>
            <label className={s.label} htmlFor="pick-up-location">
              Locations
            </label>
            <select
              id="pick-up-location"
              className={s["select-input"]}
              required
            >
              <option value="" selected disabled>
                Select your city
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </li>
          <li className={s.list__item}>
            <label className={s.label} htmlFor="pick-up-time">
              Time
            </label>
            <select id="pick-up-time" className={s["select-input"]} required>
              <option value="" selected disabled>
                Select your time
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </li>
          <li className={s.list__item}>
            <label className={s.label} htmlFor="pick-up-date">
              Date
            </label>
            <select id="pick-up-date" className={s["select-input"]} required>
              <option value="" selected disabled>
                Select your date
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </li>
        </ul>
      </fieldset>

      <Spacer size={isSm ? "600" : "500"} />

      <fieldset className={s.fieldset}>
        <legend className={s.legend}>Drop-Off</legend>
        <ul className={s.list}>
          <li className={s.list__item}>
            <label className={s.label} htmlFor="pick-up-location">
              Locations
            </label>
            <select
              id="pick-up-location"
              className={s["select-input"]}
              required
            >
              <option value="" selected disabled>
                Select your city
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </li>
          <li className={s.list__item}>
            <label className={s.label} htmlFor="pick-up-time">
              Time
            </label>
            <select id="pick-up-time" className={s["select-input"]} required>
              <option value="" selected disabled>
                Select your time
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </li>
          <li className={s.list__item}>
            <label className={s.label} htmlFor="pick-up-date">
              Date
            </label>
            <select id="pick-up-date" className={s["select-input"]} required>
              <option value="" selected disabled>
                Select your date
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </li>
        </ul>
      </fieldset>
    </section>
  );
};
