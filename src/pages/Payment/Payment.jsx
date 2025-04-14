import { Wrapper } from "@/components/Wrapper/Wrapper";
import { Spacer } from "@/components/Spacer/Spacer";

import { RentalSummary } from "./RentalSummary/RentalSummary";
import { BillingForm } from "./BillingForm/BillingForm";
import s from "./Payment.module.scss";

export const Payment = () => {
  return (
    <>
      <Wrapper>
        <Spacer size="600" />
        <div className={s.content}>
          <RentalSummary />
          <BillingForm />
        </div>
        <Spacer size="600" />
      </Wrapper>
    </>
  );
};
