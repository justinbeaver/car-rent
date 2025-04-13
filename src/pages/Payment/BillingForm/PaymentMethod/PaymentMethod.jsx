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
    </section>
  );
};
