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
import PropTypes from "prop-types";


export default function Header({ onToggleSidebar }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#400a6f",
        dark: "#1d0553",
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
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
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

            <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
              <Avatar sx={{ bgcolor: "#e3f2fd" }}>
                <AccountPopover />
              </Avatar>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

Header.propTypes = {
  onToggleSidebar : PropTypes.func.isRequired,
};
