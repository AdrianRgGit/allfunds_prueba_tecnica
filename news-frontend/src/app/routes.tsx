import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Archive from "../pages/Archive/Archive";
import CreateNew from "../pages/CreateNew/CreateNew";
import Error from "../pages/Error/Error";
import NotFound from "../pages/NotFound/NotFound";

// NOTE: RUTAS DE LA APLICACIÓN
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/archived",
    element: <Archive />,
    errorElement: <Error />,
  },
  {
    path: "/create-new",
    element: <CreateNew />,
    errorElement: <Error />,
  },

  // NOTE: RUTA NO ENCONTRADA
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
