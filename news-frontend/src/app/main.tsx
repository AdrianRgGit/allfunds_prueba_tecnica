// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // NOTE: Comento el StrictMode para trabajar en modo desarrollo y que no me repita llamadas
  // <StrictMode>
    <App />
  // </StrictMode>,
);
