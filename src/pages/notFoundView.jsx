// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";
import NotFoundView from "../component/notFoundView";

// ----------------------------------------------------------------------

export default function pageNotFound() {
  return (
    <>
      <Helmet>
        <title> 404 | ایساتیس پویا </title>
      </Helmet>
      <NotFoundView />
    </>
  );
}
