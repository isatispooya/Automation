import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import LoginOtpForm from "../component/login/otploginform";

// ----------------------------------------------------------------------

export const LoginPage = lazy(() => import("../pages/login"));
export const Main = lazy(() => import("../pages/main"));
export const Page404 = lazy(() => import("../pages/notFoundView"));

// ----------------------------------------------------------------------
export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense>
          <Outlet />
        </Suspense>
      ),
    },
    {
      path: "login",
      element: <LoginPage />,
    },

    {
      path: "/",
      element: <Main />,
    },

    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
    {
      path: "404",
      element: <Page404 />,
    },
  ]);

  return routes;
}
