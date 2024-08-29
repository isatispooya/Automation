import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { RouterLink } from "../routes/components";
// import error404 from "../../assets/img/error404.jpg";

// ----------------------------------------------------------------------

export default function NotFoundView() {
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
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Container>
            <Box
              sx={{
                py: 12,
                maxWidth: 580,
                mx: "auto",
                display: "flex",
                minHeight: "100vh",
                textAlign: "center",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3" sx={{ mb: 3 }}>
                با عرض پوزش، صفحه پیدا نشد!
              </Typography>

              <Typography sx={{ color: "text.secondary" }}>
                متأسفیم، ما نتوانستیم صفحه مورد نظر شما را پیدا کنیم. شاید شما
                آدرس را اشتباه تایپ کرده اید؟ از درستی آدرس خود مطمئن شوید.
              </Typography>

              {/* <Box
                component="img"
                src={error404}
                sx={{
                  mx: "auto",
                  height: 300,
                  my: { xs: 5, sm: 10 },
                }}
              /> */}

              <Button
                href="/"
                size="large"
                variant="contained"
                component={RouterLink}
                sx={{ backgroundColor: "#0d47a1" }}
              >
                بازگشت به خانه
              </Button>
            </Box>
          </Container>
        </Container>
      </ThemeProvider>
    </>
  );
}
