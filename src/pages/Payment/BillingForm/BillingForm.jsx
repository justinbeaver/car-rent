import { BillingInfo } from "./BillingInfo/BillingInfo";
import { RentalInfo } from "./RentalInfo/RentalInfo";

export const BillingForm = () => {
  return (
    <form>
      <BillingInfo />
      <RentalInfo />
    </form>
  );
};
