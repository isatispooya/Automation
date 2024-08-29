import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import SideBar from "./sideBar";
import ProfileView from "../profile/profileView"; 
import CompanyView from "../company/CompanyView";
import CreateCompany from "../../pages/createCompany";

const Desk = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [view, setView] = useState("children");

  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleShowProfile = () => {
    setView("profile");
  };

  const handleShowCompany = () => {
    setView("company");
  };
  const handleRouteToCreateCompanyPage = () => {
    setView("createCompany");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex flex-grow overflow-hidden mt-8">
        <main
          className={`flex-grow p-4 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "mr-[250px]" : "mr-0"
          } `}
        >
          {view === "profile" && <ProfileView />}
          {view === "company" && <CompanyView />}
          {view === "createCompany" && <    CreateCompany />}

          {view === "children" && children}
        </main>
        <div
          className={`fixed right-0 top-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "250px", zIndex: 1000 }}
        >
          <SideBar
            onShowProfile={handleShowProfile}
            onShowCompany={handleShowCompany}
            onPageCreateCompany={handleRouteToCreateCompanyPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Desk;
