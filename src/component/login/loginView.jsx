import React, { useState, useEffect } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginPic from "../../../public/img/login.jpg";
import LoginForm from "./loginform";
import LoginOtpForm from './otploginform'; 

const theme = createTheme({
  // Your theme configuration here
});

const LoginView = () => {
  const [isOtpFormVisible, setIsOtpFormVisible] = useState(false); // State to toggle forms
  const [isLoadingCaptcha, setIsLoadingCaptcha] = useState(true);
  const [captchaData, setCaptchaData] = useState(null);
  const [nationalCode, setNationalCode] = useState("");
  const [captchaLogin, setCaptchaLogin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      nationalCode: data.get("nationalCode"),
      captcha: data.get("captcha"),
    });
    setIsOtpFormVisible(true); // Show OTP form on submit
  };

  const fetchCaptcha = async () => {
    setIsLoadingCaptcha(true);
    setTimeout(() => {
      setCaptchaData({ image: "iVBORw0KGgoAAAANSUhEUgAAAA..." });
      setIsLoadingCaptcha(false);
    }, 2000);
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid
          container
          sx={{ height: "100vh", alignItems: "center", px: { xs: 12, sm: 4 } }}
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            {!isOtpFormVisible ? (
              <LoginForm
                fetchCaptcha={fetchCaptcha}
                handleSubmit={handleSubmit}
                isLoadingCaptcha={isLoadingCaptcha}
                captchaData={captchaData}
                setCaptchaLogin={setCaptchaLogin}
                setNationalCode={setNationalCode}
              />
            ) : (
              <LoginOtpForm />
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                backgroundColor: "#f0f0f0",
              }}
            >
              <img
                src={LoginPic}
                alt="Login"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default LoginView;
