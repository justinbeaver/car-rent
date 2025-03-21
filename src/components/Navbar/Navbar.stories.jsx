import { Navbar } from "./Navbar";
import { MediaQueriesProvider } from "@/context/mediaQueriesContext";

export default {
  title: "Navbar",
  component: Navbar,
  tags: ["autodocs"],
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
