import { Wrapper } from "@/components/Wrapper/Wrapper";
import { Spacer } from "@/components/Spacer/Spacer";

import { RentalSummary } from "./RentalSummary/RentalSummary";
import { BillingForm } from "./BillingForm/BillingForm";
import s from "./Payment.module.scss";

export const Payment = () => {
  return (
    <Wrapper size="lg" pad="lg">
      <Spacer size="600" />
      <div className={s.content}>
        <div className={s["rental-summary-column"]}>
          <RentalSummary />
        </div>
        <div className={s["billing-form-column"]}>
          <BillingForm />
        </div>
      </div>
      <Spacer size="600" />
    </Wrapper>
  );
};
