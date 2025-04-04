import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";

import { MediaQueriesProvider } from "@/context/mediaQueriesContext";
import { queryClient } from "@/api/queryClient";

import { App } from "./App";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MediaQueriesProvider>
        <App />
      </MediaQueriesProvider>
    </QueryClientProvider>
  </StrictMode>
);
