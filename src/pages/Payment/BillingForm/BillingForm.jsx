import { BillingInfo } from "./BillingInfo/BillingInfo";
import { RentalInfo } from "./RentalInfo/RentalInfo";
import { PaymentMethod } from "./PaymentMethod/PaymentMethod";
import { Confirmation } from "./Confirmation/Confirmation";
import s from "./BillingForm.module.scss";

export const BillingForm = () => {
  return (
    <form className={s.form}>
      <BillingInfo />
      <RentalInfo />
      <PaymentMethod />
      <Confirmation />
    </form>
  );
};
