import { BillingInfo } from "./BillingInfo/BillingInfo";
import { RentalInfo } from "./RentalInfo/RentalInfo";
import { PaymentMethod } from "./PaymentMethod/PaymentMethod";
import { Confirmation } from "./Confirmation/Confirmation";

export const BillingForm = () => {
  return (
    <form>
      <BillingInfo />
      <RentalInfo />
      <PaymentMethod />
      <Confirmation />
    </form>
  );
};
