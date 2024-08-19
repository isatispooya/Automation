import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { IoMdMenu } from "react-icons/io";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function Header({ onToggleSidebar }) {
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar 
        position="fixed" 
        sx={{ 
          width: "100%", 
          left: 0, 
          right: 0 
        }}
      >
        <Toolbar>
          {/* Avatar on the left side */}
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="avatar"
            sx={{ mr: 2 }}
          >
            <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
          </IconButton>
          
          <div style={{ flexGrow: 1 }} /> */}
          
        

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onToggleSidebar}
          >
            <IoMdMenu />
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
