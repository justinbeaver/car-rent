import { Wrapper } from "@/components/Wrapper/Wrapper";
import { Spacer } from "@/components/Spacer/Spacer";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import { PopularCarSection } from "./PopularCarSection/PopularCarSection";
import { RecommendationCarSection } from "./RecommendationCarSection/RecommendationCarSection";
import { ShowMoreCarsSection } from "./ShowMoreCarsSection/ShowMoreCarsSection";

export const Home = () => {
  const { isMd } = useMediaQueriesContext();

  return (
    <>
      <Spacer size="600" />
      <PopularCarSection />
      <Spacer size="600" />
      <Wrapper>
        <RecommendationCarSection />
        <Spacer size={isMd ? "950" : "800"} />
        <ShowMoreCarsSection />
      </Wrapper>
      <Spacer size={isMd ? "950" : "800"} />
    </>
  );
};
