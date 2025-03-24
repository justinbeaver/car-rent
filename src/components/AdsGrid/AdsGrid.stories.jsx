import { AdsGrid } from "./AdsGrid";
import { MediaQueriesProvider } from "@/context/mediaQueriesContext";

export default {
  component: AdsGrid,
  decorators: [
    (Story) => (
      <MediaQueriesProvider>
        <Story />
      </MediaQueriesProvider>
    ),
  ],
};

export const Primary = {
  args: {
    adsList: [
      {
        id: 1,
        variant: "primary",
        heading: "The Best Platform for Car Rental",
        description:
          "Ease of doing a car rental safely and reliably. Of course at a low price.",
      },
      {
        id: 2,
        variant: "secondary",
        heading: "Easy way to rent a car at a low price",
        description:
          "Providing cheap car rental services and safe and comfortable facilities.",
      },
    ],
  },
};
