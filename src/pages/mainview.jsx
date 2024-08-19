// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";
import Desk from "../layouts/desk";

// ----------------------------------------------------------------------

export default function MainView() {
  return (
    <>
      <Helmet>
        <title> پنل کاربری | ایساتیس پویا </title>
      </Helmet>

      <Desk>
        <h1>پنل کاربری</h1>
      </Desk>
    </>
  );
}
