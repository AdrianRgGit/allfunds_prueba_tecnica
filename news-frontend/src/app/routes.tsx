import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Archive from "../pages/Archive/Archive";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/archive",
    element: <Archive />,
  },
]);

export default routes;
