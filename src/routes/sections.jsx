import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

// ----------------------------------------------------------------------

export const LoginPage = lazy(() => import("../pages/login"));
export const MainView = lazy(() => import("../pages/mainview"));
export const Page404 = lazy(() => import("../pages/notFoundView"));
export const Desk = lazy(() => import("../layouts/desk") )

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
      path : "desk",
      element : <Desk/>
    },
    {
      path: "/",
      element: <MainView />,
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
