import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FilterCardProvider } from "./Context.jsx";


import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterCardProvider>
      <App />
    </FilterCardProvider>
  </StrictMode>
);
