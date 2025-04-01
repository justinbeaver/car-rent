import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MediaQueriesProvider } from "@/context/mediaQueriesContext";

import { App } from "./App";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MediaQueriesProvider>
      <App />
    </MediaQueriesProvider>
  </StrictMode>
);
