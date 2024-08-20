import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTERS } from "../utils/router";
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
  Supplier,
  OrderStatusTest,
  ProfileGuest
} from "../pages";
import MasterUsLayout from "./users/theme/masterUsLayout";
import { CartProvider } from "./users/shoppingCartPage/CartContext";
import Login_signup from "./login_signup";
import { UserContext } from "../context/UserContext";
import UnauthorizedPage from "../component/Unauthorized";
import PrivateRoute from "src/component/PrivateRoute";
import Profile from "./admin/scenes/profile";

const RouterCustom = () => {
  const { user, loginContext } = useContext(UserContext);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      loginContext(sessionStorage.getItem("username"), sessionStorage.getItem("token"), sessionStorage.getItem("role"))
    }
  }, [])

  console.log('check user>>>>>>', user);

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
    {
      path: ROUTERS.USER.ORDER_STATUS,
      component: <OrderStatusTest />,
    },
    {
      path: ROUTERS.USER.PROFILE_GUEST,
      component: <ProfileGuest />,
    },
  ];
  const adminRouters = [
    {
      path: ROUTERS.ADMIN.HOME,
      component: <Dashboard />,
      // requiredRole: 'Admin',
    },
    {
      path: ROUTERS.ADMIN.DASHBOARD,
      component: <Dashboard />,
      // requiredRole: 'Admin',
    },
    {
      path: ROUTERS.ADMIN.TEAM,
      component: <Team />,
      // requiredRole: 'Admin',
    },
    {
      path: ROUTERS.ADMIN.CONTACT,
      component: <Contacts />,
      // requiredRole: 'Admin',
    },
    {
      path: ROUTERS.ADMIN.INVOICES,
      component: <Invoices />,
      // requiredRole: 'Admin',
    },
    {
      path: ROUTERS.ADMIN.AUTHOR,
      component: <Authors />,
      // requiredRole: 'Admin',
    },
    {
      path: ROUTERS.ADMIN.TYPE,
      component: <Types />,
      // requiredRole: 'Admin',
    },
    {
      path: ROUTERS.ADMIN.SUPPLIER,
      component: <Supplier />,
      // requiredRole: 'Admin',
    },
    {
      path: ROUTERS.ADMIN.PROFILE,
      component: <Profile />,
      // requiredRole: 'Admin',
    },
  ];
  const loginRouters = [
    {
      path: ROUTERS.LOGIN.SIGNIN,
      component: <Login_signup />,
    },
    {
      path: ROUTERS.LOGIN.UNAUTHORIZED,
      component: <UnauthorizedPage />,
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
        {adminRouters.map((item, key) => (
          <Route
            key={key}
            path={item.path}
            element={
              <PrivateRoute element={<HomePageAdmin screen={item.component} />} />
            }
          />
        ))}
        <Route path="/login" element={<Navigate to={ROUTERS.LOGIN.SIGNIN} />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
      </Routes>
    </CartProvider>
  );
};

export default RouterCustom;
