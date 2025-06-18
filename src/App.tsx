import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
