import { Routes, Route, Navigate  } from "react-router-dom";
import { ROUTERS } from "utils/router";
import {
  HomePageUS,
  ProductsPage,
  ProductDetailPage,
  ShoppingCartPage,
  CheckoutPage,
  HomePageAdmin,
  Dashboard,
  Team,
  Contacts,
  Invoices,
  Authors,
  Types,
  Supplier
} from "../pages";
import MasterUsLayout from "./users/theme/masterUsLayout";
import { CartProvider } from "../pages/users/shoppingCartPage/CartContext";
import Login_signup from "./login_signup";

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
  const adminRouters = [
    {
      path: ROUTERS.ADMIN.HOME,
      component: <HomePageAdmin />,
    },
    {
      path: ROUTERS.ADMIN.DASHBOARD,
      component: <Dashboard />,
    },
    {
      path: ROUTERS.ADMIN.TEAM,
      component: <Team />,
    },
    {
      path: ROUTERS.ADMIN.CONTACT,
      component: <Contacts />,
    },
    {
      path: ROUTERS.ADMIN.INVOICES,
      component: <Invoices />,
    },
    {
      path: ROUTERS.ADMIN.AUTHOR,
      component: <Authors />,
    },
    {
      path: ROUTERS.ADMIN.TYPE,
      component: <Types />,
    },
    {
      path: ROUTERS.ADMIN.SUPPLIER,
      component: <Supplier />,
    },
  ];
  const loginRouters = [
    {
      path: ROUTERS.LOGIN.SIGNIN,
      component: <Login_signup />,
    },
  ];
  return (
    <CartProvider>
    <Routes>
      {loginRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      {userRouters.map((item, key) => (
        <Route
          key={key}
          path={item.path}
          element={<MasterUsLayout>{item.component}</MasterUsLayout>}
        />
      ))}
      {adminRouters.map((item, key) =>
        item.path.startsWith("/admin") ? (
          <Route key={key} path={item.path} element={item.component} />
        ) : (
          <Route
            key={key}
            path={item.path}
            element={<HomePageAdmin screen={item.component} />}
          />
        )
      )}
      <Route path="/login" element={<Navigate to={ROUTERS.LOGIN.SIGNIN} />} />
    </Routes>
    </CartProvider>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
