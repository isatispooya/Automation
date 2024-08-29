import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginForm from "./LoginForm";
import LoginOtpForm from "./otploginForm";
import LoginPic from "../../../src/assets/img/recover pass1.png";
import SmsLoginPic from "../../../src/assets/img/smsLogin.svg";

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

const LoginView = () => {
  const [isOtpFormVisible, setIsOtpFormVisible] = useState(false);
  const [nationalCode, setNationalCode] = useState("");
  const [captchaData, setCaptchaData] = useState(null);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsOtpFormVisible(true);
  };

  const handleBackToLogin = () => setIsOtpFormVisible(false);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid
          container
          sx={{ height: "100vh", alignItems: "center", px: { xs: 2, sm: 4 } }}
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            {isOtpFormVisible ? (
              <LoginOtpForm
                nationalCode={nationalCode}
                captchaData={captchaData}
                handleTransferLogin={handleBackToLogin}
              />
            ) : (
              <LoginForm
                handleSubmit={handleLoginSubmit}
                setNationalCode={setNationalCode}
                setCaptchaData={setCaptchaData}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" }, textAlign: "center" }}
          >
            <img
              style={{ width: "100%", height: "auto", maxWidth: "500px" }}
              src={isOtpFormVisible ? SmsLoginPic : LoginPic}
              alt="Login"
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default LoginView;
