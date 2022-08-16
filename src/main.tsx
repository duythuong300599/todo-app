import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import "./index.css";

import { StoreProvider } from "./stores";
import i18n from "./translations/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StoreProvider>
  </React.StrictMode>
);
