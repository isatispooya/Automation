// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";
import DashboardView from "../component/dashboard/dashbordView";


// ----------------------------------------------------------------------

export default function MainView() {
  return (
    <>
      <Helmet>
        <title> پنل کاربری | ایساتیس پویا </title>
      </Helmet>

      <DashboardView />
    </>
  );
}
