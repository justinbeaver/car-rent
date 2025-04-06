import { Wrapper } from "@/components/Wrapper/Wrapper";
import { Spacer } from "@/components/Spacer/Spacer";

import { OverviewSection } from "./OverviewSection/OverviewSection";
import { ReviewsSection } from "./ReviewsSection/ReviewsSection";
import { RecentCarsSection } from "./RecentCarsSection/RecentCarsSection";

export const Car = () => {
  return (
    <>
      <Wrapper size="md" pad="md">
        <Spacer size="600" />
        <OverviewSection />
        <Spacer size="600" />
        <ReviewsSection />
        <Spacer size="600" />
        <RecentCarsSection />
        <Spacer size="600" />
      </Wrapper>
    </>
  );
};
