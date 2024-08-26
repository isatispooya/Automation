import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import PropTypes from "prop-types";
import { OnRun } from "../api/config";

const LoginForm = ({ handleSubmit, setNationalCode }) => {
  const [captchaData, setCaptchaData] = useState({ image: '', encrypted_response: '' });
  const [captchaValue, setCaptchaValue] = useState("");
  const [isLoadingCaptcha, setIsLoadingCaptcha] = useState(true);
  const [nationalCode, setNationalCodeState] = useState("");

  const handleNationalCodeChange = (e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      toast.error("لطفاً فقط اعداد را وارد کنید");
      return;
    }

    if (value.length > 10) {
      toast.error("کد ملی نمی‌تواند بیش از 10 رقم باشد");
      return;
    }

    setNationalCodeState(value);
    setNationalCode(value);
  };

  const fetchCaptchaFromServer = async () => {
    setIsLoadingCaptcha(true);
    try {
      const { data: captcha } = await axios.get(`${OnRun}/captcha/`);

      if (captcha?.image && captcha?.encrypted_response) {
        setCaptchaData({ image: captcha.image, encrypted_response: captcha.encrypted_response });
        setCaptchaValue(""); // Reset the captcha input
      } else {
        throw new Error("Captcha data is undefined");
      }
    } catch (error) {
      console.error("Captcha error:", error);
      toast.error("خطا در دریافت کپچا، مجدداً بارگذاری کنید");
    } finally {
      setIsLoadingCaptcha(false);
    }
  };

  useEffect(() => {
    fetchCaptchaFromServer();
  }, []);

  const validateAndSubmit = (event) => {
    event.preventDefault();

    if (nationalCode.length !== 10) {
      toast.error("کد ملی باید  10 رقم باشد");
      return;
    }



    handleSubmit(event);
  };

  return (
    <Grid item xs={12} md={10}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#fff",
          mx: "auto",
          maxWidth: 400,
          position: "relative",
          top: "10%",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "#3730a3",
            width: 80,
            height: 80,
          }}
        />
        <Typography
          component="h1"
          variant="h5"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 2 }}
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
          onSubmit={validateAndSubmit}
          sx={{ width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="nationalCode"
                label="کد ملی"
                variant="outlined"
                size="medium"
                sx={{ borderRadius: 1 }}
                value={nationalCode}
                onChange={handleNationalCodeChange}
                inputProps={{ maxLength: 10 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="captcha"
                label="کد کپچا"
                variant="outlined"
                size="medium"
                sx={{ borderRadius: 1 }}
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)}
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
                  <img
                    src={`data:image/jpeg;base64,${captchaData.image}`}
                    alt="captcha"
                    onClick={fetchCaptchaFromServer}
                    style={{
                      width: "100%",
                      height: "80% ",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      objectFit: "contain",
                    }}
                  />
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
              bgcolor: "#3730a3",
              color: "#fff",
              "&:hover": {
                bgcolor: "#0d47a1",
              },
            }}
          >
            تایید
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Grid>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setNationalCode: PropTypes.func.isRequired,
};

export default LoginForm;
