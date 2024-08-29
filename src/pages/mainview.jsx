// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";
import Desk from "../components/desk/desk";

// ----------------------------------------------------------------------

export default function MainView() {
  return (
    <>
      <Helmet>
        <title> پنل کاربری | ایساتیس پویا </title>
      </Helmet>

      <Desk></Desk>
    </>
  );
}
