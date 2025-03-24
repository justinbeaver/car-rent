import { Footer } from "./Footer";
import { MediaQueriesProvider } from "@/context/mediaQueriesContext";

export default {
  component: Footer,
  decorators: [
    (Story) => (
      <MediaQueriesProvider>
        <Story />
      </MediaQueriesProvider>
    ),
  ],
};

export const Primary = {};
