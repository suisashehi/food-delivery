import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";

const root = document.getElementById("root");
if (!root) {
  console.error("Root element not found");
} else {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
