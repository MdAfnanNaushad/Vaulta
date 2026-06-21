import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

import App from "./App";
import QueryProvider from "./providers/QueryProvider";
import {
  ThemeProvider
} from "../src/components/context/ThemeContext";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>

        <Toaster
          richColors
          position="top-right"
        />
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);