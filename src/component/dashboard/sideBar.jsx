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
      fontFamily: "Roboto, Arial, sans-serif",
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="fixed right-0"
        style={{ top: "3em", height: "calc(150vh - 10em)" }}
      >
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900 text-right">
              پنل دسترسی
            </h5>
          </div>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            <div className="relative">
              <div
                role="button"
                onClick={toggleDropdown}
                className="flex justify-between items-center w-full p-3 rounded-lg leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none cursor-pointer"
              >
                <div className="flex items-center">
                  <FaTasks className="ml-1" />
                  لیست وظایف
                </div>
                <RiArrowDropDownLine className="text-xl" />
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-1 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <div
                      role="button"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 cursor-pointer"
                    >
                      وظیفه ۱
                    </div>
                    <div
                      role="button"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 cursor-pointer"
                    >
                      وظیفه ۲
                    </div>
                    <div
                      role="button"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 cursor-pointer"
                    >
                      وظیفه ۳
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              role="button"
              className="flex text-left items-center w-full p-3 rounded-lg  leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <MdCoPresent className="ml-1" />
              حضور و غیاب
            </div>

            <div
              role="button"
              className="flex text-left items-center w-full p-3 rounded-lg  leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <CgProfile className="ml-1" />
              پروفایل
            </div>
            <div
              role="button"
              className="flex text-left items-center w-full p-3 rounded-lg  leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <CiSettings className="ml-1 text-xl" />
              تنظیمات
            </div>
            <div
              role="button"
              className="flex  items-center w-full p-3 rounded-lg text-end leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
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
