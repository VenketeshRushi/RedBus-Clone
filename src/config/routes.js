import { lazy } from "react";

export const routes = {
  home: {
    path: "/",
    component: lazy(() => import("../pages/Home/HomePage")),
  },
  login_page: {
    path: "/signin",
    component: lazy(() => import("../pages/LoginPage/LoginPage")),
  },
  signup_page: {
    path: "/signup",
    component: lazy(() => import("../pages/SignUpPage/SignUpPage")),
  },
};

const renderRoutes = Object.entries(routes);

export default renderRoutes;
