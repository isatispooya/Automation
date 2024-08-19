import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClientProvider } from "react-query";
import { Client } from "../qureyClient.js";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={Client}>
    <MantineProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </MantineProvider>
  </QueryClientProvider>
);
