import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "utils/router";
import {
  HomePageUS,
  ProductsPage,
  ProductDetailPage,
  ShoppingCartPage,
  CheckoutPage,
} from "../pages";
import MasterUsLayout from "./users/theme/masterUsLayout";
import { CartProvider } from "../pages/users/shoppingCartPage/CartContext";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePageUS />,
    },
    {
      path: ROUTERS.USER.PRODUCTS,
      component: <ProductsPage />,
    },
    {
      path: ROUTERS.USER.PRODUCT_DETAIL,
      component: <ProductDetailPage />,
    },
    {
      path: ROUTERS.USER.SHOPPING_CART,
      component: <ShoppingCartPage />,
    },
    {
      path: ROUTERS.USER.CHECKOUT,
      component: <CheckoutPage />,
    },
  ];

  return (
    <CartProvider>
    <MasterUsLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterUsLayout>
    </CartProvider>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
