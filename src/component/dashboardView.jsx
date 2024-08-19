import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const DashboardView = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        
      </Container>
    </ThemeProvider>
  );
};

export default DashboardView;
