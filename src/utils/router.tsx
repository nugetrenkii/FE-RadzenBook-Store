export const ROUTERS = {
  USER: {
    HOME: "/",
    PRODUCTS: "/san-pham",
    PRODUCT_DETAIL: "/san-pham/chi-tiet/:id",
    SHOPPING_CART: "/gio-hang",
    CHECKOUT: "/thanh-toan",
    ORDER_STATUS: "/order-status",
    PROFILE_GUEST: "/profile-guest",
  },
  ADMIN: {
    HOME: "/admin",
    DASHBOARD: "/dashboard",
    TEAM: "/team",
    CONTACT: "/contacts",
    INVOICES: "/invoices",
    AUTHOR: "/authors",
    TYPE: "/types",
    SUPPLIER: "/suppliers",
    PROFILE: "/profile",
  },
  LOGIN: {
    SIGNIN: "/login",
    SIGNUP: "/register",
    UNAUTHORIZED: "/unauthorized"
  }
};
