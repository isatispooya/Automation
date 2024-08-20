import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import { IoMdMenu } from "react-icons/io";
import {
  Box,
  createTheme,
  CssBaseline,
  IconButton,
  useMediaQuery,
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

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
              flexDirection: isMobile ? "row" : "row",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onToggleSidebar}
              sx={{ mr: 2 }}
            >
              <IoMdMenu />
            </IconButton>

            {!isMobile && (
              <Typography variant="h6" noWrap component="div">
                میزکار من 
              </Typography>
            )}

            <Avatar sx={{ bgcolor: "#e3f2fd", marginLeft: "auto" }}>
              <AccountPopover />
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
