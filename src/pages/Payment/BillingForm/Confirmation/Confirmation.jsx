import { Button } from "@/components/Button/Button";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";
import SecurityLogo from "@/assets/logos/ic-security-safety.svg?react";

import s from "./Confirmation.module.scss";

export const Confirmation = () => {
  const { isSm } = useMediaQueriesContext();

  return (
    <section className={s.section}>
      <header className={s.header}>
        <div>
          <h2 className={s.heading}>Confirmation</h2>
          <p className={s.subheading}>
            We are getting to the end. Just few clicks and your rental is ready!
          </p>
        </div>
        <p className={s["step-status"]}>Step 4 of 4</p>
      </header>

      <ul className={s.list}>
        <li className={s.list__item}>
          <label className={s.label} htmlFor="input-marketing">
            <input id="input-marketing" type="checkbox" />
            <span>
              I agree with sending an Marketing and newsletter emails. No spam,
              promised!
            </span>
          </label>
        </li>
        <li className={s.list__item}>
          <label className={s.label} htmlFor="input-policy">
            <input id="input-policy" type="checkbox" />
            <span>
              I agree with our terms and conditions and privacy policy.
            </span>
          </label>
        </li>
      </ul>

      <Button size={isSm ? "lg" : "md"}>Rental Now</Button>

      <footer className={s.footer}>
        <SecurityLogo />
        <p className={s["safety-heading"]}>All your data are safe</p>
        <p className={s["safety-description"]}>
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </footer>
    </section>
  );
};
