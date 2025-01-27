import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Archive from "../pages/Archive/Archive";
import CreateNew from "../pages/CreateNew/CreateNew";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/archive",
    element: <Archive />,
  },
  {
    path: "/create-new",
    element: <CreateNew />,
  },
]);

export default routes;
