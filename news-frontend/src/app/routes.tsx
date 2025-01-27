import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Archive from "../pages/Archive/Archive";
import CreateNew from "../pages/CreateNew/CreateNew";
import Error from "../pages/Error/Error";
import NotFound from "../pages/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/archive",
    element: <Archive />,
    errorElement: <Error />,
  },
  {
    path: "/create-new",
    element: <CreateNew />,
    errorElement: <Error />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
