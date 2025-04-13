import { BillingInfo } from "./BillingInfo/BillingInfo";
import { PaymentMethod } from "./PaymentMethod/PaymentMethod";
import { RentalInfo } from "./RentalInfo/RentalInfo";

export const BillingForm = () => {
  return (
    <form>
      <BillingInfo />
      <RentalInfo />
      <PaymentMethod />
    </form>
  );
};
