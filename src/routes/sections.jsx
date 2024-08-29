import { lazy, Suspense, startTransition } from "react";
import { useRoutes, Navigate } from "react-router-dom";

// Lazy loading components
const LoginPage = lazy(() => import("../pages/login"));
const MainView = lazy(() => import("../pages/mainview"));
const Page404 = lazy(() => import("../pages/notFound"));
const Desk = lazy(() => import("../components/desk/desk"));
const CreateCompany = lazy(() => import("../pages/createCompany"));

// Skeleton Loader Component
function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4 p-4">
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
    </div>
  );
}

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<SkeletonLoader />}>
          <MainView />
        </Suspense>
      ),
    },
    {
      path: "login",
      element: (
        <Suspense fallback={<SkeletonLoader />}>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: "desk",
      element: (
        <Suspense fallback={<SkeletonLoader />}>
          <Desk />
        </Suspense>
      ),
    },
    {
      path: "404",
      element: (
        <Suspense fallback={<SkeletonLoader />}>
          <Page404 />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
    {
      path: "/createCompany",
      element: (
        <Suspense fallback={<SkeletonLoader />}>
          <CreateCompany />
        </Suspense>
      ),
    },
  ]);

  return routes;
}
