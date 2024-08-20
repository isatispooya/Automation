import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Box, InputAdornment } from "@mui/material";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { TbDoorExit } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import TextField from "@mui/material/TextField";
import { BsSearch } from "react-icons/bs";

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

  const initialSections = [
    {
      icon: <FaTasks />,
      label: "لیست وظایف",
      isOpen: false,
      child: [{ icon: <FaTasks />, label: "وظیفه 1", isOpen: false }],
    },
    {
      icon: <MdCoPresent />,
      label: "حضور و غیاب",
      isOpen: false,
      child: [{ icon: <MdCoPresent />, label: "اطلاعات مرخصی", isOpen: false }],
    },
    {
      icon: <CgProfile />,
      label: "پروفایل",
      isOpen: false,
      child: [
        { icon: <CgProfile />, label: "اطلاعات کاربر", isOpen: false },
        {
          icon: <CgProfile />,
          label: "تغییر رمز عبور",
          isOpen: false,
          child: [
            {
              icon: <CgProfile />,
              isOpen: false,
              label: " حریم خصوصی",
              child: [
                { icon: <CgProfile />, label: "سلام سلام", isOpen: false },
              ],
            },
          ],
        },
      ],
    },
    {
      icon: <CiSettings />,
      label: "تنظیمات",
      isOpen: false,
    },
    {
      icon: <TbDoorExit />,
      label: "خروج",
      color: "#d32f2f",
      isOpen: false,
    },
  ];

  const [sections, setSections] = useState(initialSections);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = (path) => {
    const newSections = [...sections];
    let currentSection = newSections;
    path.split("-").forEach((index, idx, array) => {
      if (idx === array.length - 1) {
        currentSection[index].isOpen = !currentSection[index].isOpen;
      } else {
        currentSection = currentSection[index].child;
      }
    });
    setSections(newSections);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term === "") {
      setSections(initialSections);
    } else {
      const newSections = filterSections(initialSections, term);
      setSections(newSections);
    }
  };

  const filterSections = (sections, term) => {
    return sections
      .map((section) => {
        let matchFound = false;
        if (section.label.startsWith(term)) {
          matchFound = true;
        }
        if (section.child) {
          const filteredChild = filterSections(section.child, term);

          if (filteredChild.some((child) => child.matchFound)) {
            matchFound = true;
            section.child = filteredChild;
            section.isOpen = true;
          } else {
            section.isOpen = false;
          }
        } else {
          section.isOpen = false;
        }

        return matchFound ? { ...section, matchFound } : null;
      })
      .filter(Boolean);
  };

  const renderSections = (sections, parentPath = "") => {
    return sections.map((section, index) => {
      const sectionPath = parentPath ? `${parentPath}-${index}` : `${index}`;

      return (
        <div key={sectionPath} className="relative mb-2">
          {section.child ? (
            <>
              <div
                role="button"
                onClick={() => toggleDropdown(sectionPath)}
                className="flex justify-between items-center w-full p-3 rounded-lg leading-tight transition-all duration-300 ease-in-out bg-gray-100 hover:bg-gray-200 cursor-pointer"
              >
                <div className="flex items-center">
                  {section.icon}
                  <span className="ml-1">{section.label}</span>
                </div>
                <RiArrowDropDownLine className="text-xl" />
              </div>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden rounded-lg  ${
                  section.isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                {renderSections(section.child, sectionPath)}
              </div>
            </>
          ) : (
            <div
              role="button"
              className={`flex text-left items-center w-full p-3 rounded-lg leading-tight transition-all duration-300 ease-in-out ${
                parentPath ? "" : "bg-gray-100 hover:bg-gray-200"
              } cursor-pointer`}
            >
              {section.icon}
              <span className="ml-1">{section.label}</span>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="fixed right-0 bg-blue-50"
        style={{ top: "4em", height: "calc(150vh - 10em)" }}
      >
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-full w-full max-w-[20rem] p-4 shadow-lg shadow-blue-900/10 overflow-y-auto">
          <h2 className="flex flex-row flex-nowrap items-center mt-5 mb-5">
            <span className="flex-grow block border-t border-gray-400"></span>
            <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium text-gray-600">
              پنل دسترسی
            </span>
            <span className="flex-grow block border-t border-gray-400"></span>
          </h2>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "16px",
            }}
          >
            <TextField
              id="outlined-textarea"
              variant="standard"
              placeholder="جستجو..."
              fullWidth
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BsSearch />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            {renderSections(sections)}
          </nav>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SideBar;
