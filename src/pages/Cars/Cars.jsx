import { Wrapper } from "@/components/Wrapper/Wrapper";

import { SearchFilters } from "./SearchFilters/SearchFilters";
import { CarsGridSection } from "./CarsGridSection/CarsGridSection";
import s from "./Cars.module.scss";

export const Cars = () => {
  return (
    <Wrapper size="lg" pad="none">
      <div className={s["page-layout"]}>
        <SearchFilters />
        <CarsGridSection />
      </div>
    </Wrapper>
  );
};
