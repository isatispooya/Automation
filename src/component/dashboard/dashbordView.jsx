import Header from "./header";
import SideBar from "./sideBar";

const DashboardView = () => {
  return (
    <>
        <Header />
      <div className="">
        <SideBar className="ml-auto mt-5" />
      </div>
    </>
  );
};

export default DashboardView;
