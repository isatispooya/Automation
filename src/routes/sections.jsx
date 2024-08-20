import { lazy, Suspense, startTransition } from "react";
import { useRoutes, Navigate } from "react-router-dom";

// Lazy loading components
const LoginPage = lazy(() => import("../pages/login"));
const MainView = lazy(() => import("../pages/mainview"));
const Page404 = lazy(() => import("../pages/notFoundView"));
const Desk = lazy(() => import("../layouts/desk"));

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <MainView />
        </Suspense>
      ),
    },
    {
      path: "login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: "desk",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Desk />
        </Suspense>
      ),
    },
    {
      path: "404",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Page404 />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

