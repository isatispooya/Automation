import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { TbDoorExit } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";

const SideBar = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
        dark: "#155a8a",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        paper: "#ffffff",
      },
      text: {
        primary: "#333333",
        secondary: "#666666",
      },
    },
    typography: {
      fontFamily: "Vazir, Roboto, Arial, sans-serif",
      h5: {
        fontWeight: 700,
        fontSize: "1.5rem",
      },
      body2: {
        fontSize: "0.875rem",
      },
    },
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(Array(5).fill(false));

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleTask = (index) => {
    const newTaskOpen = [...taskOpen];
    newTaskOpen[index] = !newTaskOpen[index];
    setTaskOpen(newTaskOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="fixed right-0 bg-blue-50"
        style={{ top: "3em", height: "calc(150vh - 10em)" }}
      >
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-full w-full max-w-[20rem] p-4 shadow-lg shadow-blue-900/10">
          <div className="mb-4 p-4 bg-blue-100 rounded-lg shadow-inner text-right">
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
              پنل دسترسی
            </h5>
          </div>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            <div className="relative">
              <div
                role="button"
                onClick={toggleDropdown}
                className="flex justify-between items-center w-full p-3 rounded-lg leading-tight transition-all duration-300 ease-in-out bg-gray-100 hover:bg-gray-200 cursor-pointer"
              >
                <div className="flex items-center">
                  <FaTasks className="ml-1" />
                  لیست وظایف
                </div>
                <RiArrowDropDownLine className="text-xl" />
              </div>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  dropdownOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <div key={index} className="relative mb-2">
                    <div
                      role="button"
                      onClick={() => toggleTask(index)}
                      className="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      وظیفه {index + 1}
                      <RiArrowDropDownLine className="text-xl" />
                    </div>
                    <div
                      className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                        taskOpen[index] ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div
                        role="button"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        آیتم 1 از وظیفه {index + 1}
                      </div>
                      <div
                        role="button"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        آیتم 2 از وظیفه {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              role="button"
              className="flex text-left items-center w-full p-3 rounded-lg leading-tight transition-all duration-300 ease-in-out bg-gray-100 hover:bg-gray-200 cursor-pointer"
            >
              <MdCoPresent className="ml-1" />
              حضور و غیاب
            </div>

            <div
              role="button"
              className="flex text-left items-center w-full p-3 rounded-lg leading-tight transition-all duration-300 ease-in-out bg-gray-100 hover:bg-gray-200 cursor-pointer"
            >
              <CgProfile className="ml-1" />
              پروفایل
            </div>
            <div
              role="button"
              className="flex text-left items-center w-full p-3 rounded-lg leading-tight transition-all duration-300 ease-in-out bg-gray-100 hover:bg-gray-200 cursor-pointer"
            >
              <CiSettings className="ml-1 text-xl" />
              تنظیمات
            </div>
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-end leading-tight transition-all duration-300 ease-in-out bg-gray-100 hover:bg-gray-200 cursor-pointer"
            >
              <TbDoorExit className="ml-1" />
              خروج
            </div>
          </nav>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SideBar;
