import PropTypes from "prop-types";

import { AdCard } from "@/components/AdCard/AdCard";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import s from "./AdsGrid.module.scss";

export const AdsGrid = ({ adsList = [] }) => {
  const { isLg } = useMediaQueriesContext();

  return (
    <div className={s["ads-grid"]}>
      {adsList.map(({ id, variant, heading, description }) => (
        <AdCard
          key={id}
          variant={variant}
          size={isLg ? "lg" : "sm"}
          heading={heading}
          description={description}
        />
      ))}
    </div>
  );
};

AdsGrid.propTypes = {
  adsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      variant: AdCard.propTypes.variant,
      heading: AdCard.propTypes.heading,
      description: AdCard.propTypes.description,
    })
  ).isRequired,
};
