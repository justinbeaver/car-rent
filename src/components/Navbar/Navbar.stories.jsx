import { Navbar } from "./Navbar";
import { MediaQueriesProvider } from "@/context/mediaQueriesContext";

export default {
  component: Navbar,
  decorators: [
    (Story) => (
      <MediaQueriesProvider>
        <Story />
        {/* {Story()} */}
      </MediaQueriesProvider>
    ),
  ],
};

export const Primary = {};
