import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Skeleton, Stack } from "@mui/material";
import LoginPic from "../../../public/img/login.jpg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
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

export default function SignUp() {
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
  };

  const fetchCaptcha = async () => {
    setIsLoadingCaptcha(true);
    // Simulate an API call
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
          component={Box}
          sx={{ height: "100vh", alignItems: "center" }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 4,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: theme.palette.background.paper,
                margin: "40px",
              }}
            >
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: theme.palette.primary.main,
                  width: 66,
                  height: 66,
                }}
              ></Avatar>
              <Typography
                component="h1"
                variant="h5"
                gutterBottom
                color={theme.palette.text.primary}
                textAlign="center"
                sx={{ fontWeight: 700 }}
              >
                ورود به حساب کاربری
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                sx={{ mb: 3 }}
              >
                لطفاً اطلاعات خود را وارد کنید تا وارد حساب کاربری خود شوید
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="nationalCode"
                      label="کد ملی"
                      name="nationalCode"
                      autoComplete="nationalCode"
                      variant="outlined"
                      size="large"
                      sx={{ borderRadius: 1 }}
                      onChange={(e) => setNationalCode(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="captcha"
                      label="کد کپچا"
                      name="captcha"
                      autoComplete="captcha"
                      variant="outlined"
                      size="large"
                      sx={{ borderRadius: 1 }}
                      onChange={(e) => setCaptchaLogin(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {isLoadingCaptcha ? (
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        sx={{ my: 2 }}
                      >
                        <Skeleton variant="rounded" width={280} height={60} />
                      </Stack>
                    ) : (
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        sx={{ my: 2 }}
                      >
                        <Button onClick={fetchCaptcha} sx={{ p: 0 }}>
                          <img
                            src={`data:image/png;base64,${captchaData?.image}`}
                            alt="captcha"
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "4px",
                              border: "1px solid #ddd",
                              objectFit: "contain",
                            }}
                          />
                        </Button>
                      </Stack>
                    )}
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: 1,
                    boxShadow: 2,
                    textTransform: "none",
                    bgcolor: theme.palette.primary.main,
                    color: "#fff",
                    "&:hover": {
                      bgcolor: theme.palette.primary.dark,
                    },
                  }}
                >
                  ورود
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={LoginPic}
                alt="Login"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
