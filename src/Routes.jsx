import { createBrowserRouter } from "react-router";

import { NotFound } from "./components/NotFound";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { CategoryDetails } from "./pages/CategoryDetails";
import App from "./App";
import { Home } from "./pages/Home";
import { WhishList } from "./pages/WhishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productID",
        element: <ProductDetails />,
      },
      {
        path: "categories/:categoryID",
        element: <CategoryDetails />,
      },
      {
        path: "whishlist",
        element: <WhishList />,
      },
    ],
  },
]);