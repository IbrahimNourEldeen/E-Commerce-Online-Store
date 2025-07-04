// App.tsx (محدث بالكامل)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Signin from "./components/registration/Signin";
import NewComponent from "./components/registration/NewComponent";
import CreateAcountComponent from "./components/registration/CreateAcountComponent";
import VerifyingMessage from "./components/registration/VerifyingMessage";
import EntringPassword from "./components/registration/EntringPassword";

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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/new-user",
    element: <NewComponent />,
  },
  {
    path: "/create-account",
    element: <CreateAcountComponent />,
  },
  {
    path: "/verify",
    element: <VerifyingMessage />,
  },
  {
    path: "/enter-password",
    element: <EntringPassword />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
