import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { IoMdMenu } from "react-icons/io";
import {
  Box,
  createTheme,
  CssBaseline,
  IconButton,
  Typography,
} from "@mui/material";

import { ThemeProvider } from "@emotion/react";
import AccountPopover from "./common/account-popover";

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
          right: 0,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={onToggleSidebar}
            >
              <IoMdMenu />
            </IconButton>
            <Avatar sx={{ bgcolor: "#e3f2fd" }}>
              <AccountPopover />
            </Avatar>
            
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
