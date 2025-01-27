import { RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import routes from "./routes";

const App = () => {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  );
};

export default App;
