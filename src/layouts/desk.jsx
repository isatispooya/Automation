import React, { useState } from "react";
import Header from "../component/dashboard/header";
import SideBar from "../component/dashboard/sideBar";

const Desk = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} />
      <div className="relative flex">
        <div
          className={`fixed right-0 top-0 h-full  bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
            isSidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
          style={{ transitionProperty: 'transform, opacity' }}
        >
          <SideBar />
        </div>
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </>
  );
};

export default Desk;


