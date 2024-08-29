// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";
import LoginView from "../components/login/loginView";

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> ورود | ایساتیس پویا </title>
      </Helmet>

      <LoginView />
    </>
  );
}
