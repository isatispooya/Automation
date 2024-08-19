import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { IoMdMenu } from "react-icons/io";
import { Box, createTheme, CssBaseline, IconButton, Typography } from "@mui/material";

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
          right: 0 
        }}
      >
        <Toolbar>

          
        

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
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              background: 'linear-gradient(60deg,#2196f3, #1565c0)',
              position: 'fixed',
              zIndex: '1000',
            }}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                
                <Avatar sx={{ bgcolor: '#e3f2fd' }}>
                <AccountPopover />
              </Avatar>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
}
