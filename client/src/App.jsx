import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import CategorizedPage from "./pages/CategorizedPage";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreatePage";
import Layout from "./Layout";
import UpdatePage from "./pages/UpdatePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:category",
        element: <CategorizedPage />,
      },
      {
        path: "/blog/:id",
        element: <DetailPage />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        path: "/update/:id",
        element: <UpdatePage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
