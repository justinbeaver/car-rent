import "@/index.scss";

/** @type { import('@storybook/react').Preview } */
export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen", // padded | centered | fullscreen
  },
  tags: ["autodocs"],
};
