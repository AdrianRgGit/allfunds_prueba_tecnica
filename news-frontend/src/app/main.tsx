// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // NOTE: COMENTO EL STRICTMODE PARA TRABAJAR EN MODO DESARROLLO Y QUE NO ME REPITA LLAMADAS
  // <StrictMode>
  <App />,
  // </StrictMode>,
);
