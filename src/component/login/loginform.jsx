import React, { useState } from 'react';
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
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({
  fetchCaptcha,
  setCaptchaLogin,
  setNationalCode,
  captchaData,
  isLoadingCaptcha,
  handleSubmit
}) => {
  const [nationalCode, updateNationalCode] = useState("");

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

    updateNationalCode(value);
    setNationalCode(value);
  };

  const validateAndSubmit = (event) => {
    event.preventDefault();

    if (nationalCode.length < 10) {
      toast.error("کد ملی باید 10 رقم باشد.");
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
            bgcolor: "#1565c0",
            width: 80,
            height: 80,
          }}
        ></Avatar>
        <Typography
          component="h1"
          variant="h5"
          color="black"
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
                name="nationalCode"
                autoComplete="nationalCode"
                variant="outlined"
                size="medium"
                sx={{ borderRadius: 1 }}
                value={nationalCode}
                onChange={handleNationalCodeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="captcha"
                label="کد کپچا"
                name="captcha"
                autoComplete="captcha"
                variant="outlined"
                size="medium"
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
              bgcolor: "#1565c0",
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
  fetchCaptcha: PropTypes.func.isRequired, 
  handleSubmit: PropTypes.func.isRequired, 
  captchaData: PropTypes.object.isRequired, 
  isLoadingCaptcha: PropTypes.bool.isRequired, 
  setCaptchaLogin: PropTypes.func.isRequired, 
  setNationalCode: PropTypes.func.isRequired, 
};

export default LoginForm;
