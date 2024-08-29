import { useState } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useOtp } from "../../hooks/useOtp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginOtpForm = ({ nationalCode, captchaData, handleTransferLogin }) => {
  const [otpCode, setOtpCode] = useState("");
  const navigate = useNavigate();
  const { sendOtp, isLoading, isError, error } = useOtp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpCode.trim()) {
      toast.error("لطفاً کد تایید را وارد کنید");
      return;
    }

    try {
      await sendOtp({
        national_code: nationalCode,
        encrypted_response: otpCode,
        captcha: captchaData?.captcha || "",
      });

      toast.success("کد تایید با موفقیت ارسال شد");
      navigate("/"); // هدایت به صفحه اصلی یا هر صفحه دلخواه دیگر
    } catch (error) {
      console.error("Failed to send OTP", error);
    }
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
          sx={{ fontWeight: 700, mb: 2, color: "black", textAlign: "center" }}
        >
          تایید شماره موبایل
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mb: 3 }}
        >
          لطفاً کدتایید ارسال شده به شماره موبایل خود را وارد کنید.
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                disabled
                fullWidth
                value={nationalCode}
                id="nationalCode"
                label="کد ملی"
                variant="outlined"
                size="medium"
                sx={{ borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="otpCode"
                label="کد تایید"
                variant="outlined"
                size="medium"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                sx={{ borderRadius: 1 }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 1,
              borderRadius: 1,
              boxShadow: 2,
              textTransform: "none",
              bgcolor: "#3730a3",
              color: "#fff",
              "&:hover": {
                bgcolor: "#0d47a1",
              },
            }}
            disabled={isLoading}
          >
            {isLoading ? "در حال ارسال..." : "ورود"}
          </Button>

          {isError && (
            <Typography color="error" variant="body2" align="center">
              {error?.message || "خطا در تأیید کد OTP"}
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              mt: 2,
              fontSize: "14px",
              fontWeight: "800",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px", mr: 0.5 }}>
              حساب کاربری دارید؟
            </Typography>
            <Link
              onClick={handleTransferLogin}
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              وارد شوید
            </Link>
          </Box>
        </Box>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Grid>
  );
};

LoginOtpForm.propTypes = {
  nationalCode: PropTypes.string.isRequired,
  captchaData: PropTypes.object, // می‌تواند null باشد
  handleTransferLogin: PropTypes.func.isRequired,
};

export default LoginOtpForm;
