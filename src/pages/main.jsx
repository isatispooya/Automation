// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";
import DashboardView from "../component/dashboardView";

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> پنل کاربری | ایساتیس پویا </title>
      </Helmet>
      <DashboardView />
    </>
  );
}
