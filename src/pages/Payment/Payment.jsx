import { Wrapper } from "@/components/Wrapper/Wrapper";
import { Spacer } from "@/components/Spacer/Spacer";

import { BillingForm } from "./BillingForm/BillingForm";

export const Payment = () => {
  return (
    <>
      <Wrapper>
        <Spacer size="500" />
        <BillingForm />
        <Spacer size="500" />
      </Wrapper>
    </>
  );
};
