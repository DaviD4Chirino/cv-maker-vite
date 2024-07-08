import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DataProvider } from "./contexts/dataContext.tsx";
import { TemplateStateProvider } from "./contexts/templateContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <TemplateStateProvider>
        <App />
      </TemplateStateProvider>
    </DataProvider>
  </React.StrictMode>
);
