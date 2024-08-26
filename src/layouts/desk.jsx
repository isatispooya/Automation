import React, { useState } from "react";
import Header from "../component/dashboard/header";
import SideBar from "../component/dashboard/sideBar";
import ProfileView from "../pages/profileView";

const Desk = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleShowProfile = () => {
    setShowProfile(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex flex-grow">
        <div
          className={`fixed right-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
            isSidebarOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
          style={{ transitionProperty: "transform, opacity" }}
        >
          <SideBar onShowProfile={handleShowProfile} />
        </div>
        <main className="flex-grow p-4">
          {showProfile ? <ProfileView /> : children}
        </main>
      </div>
    </div>
  );
};

export default Desk;
