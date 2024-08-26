import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginOtpForm = ({ nationalCode, handelTransferLogin }) => {
  const [otpcode, setOtpCode] = useState(null);
  const Navigate = useNavigate();

  const handleSubmit = () => {
    Navigate("/");
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
        ></Avatar>
        <Typography
          component="h1"
          variant="h5"
          color="black"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 2 }}
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
                name="nationalCode"
                autoComplete="nationalCode"
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
                name="otpCode"
                autoComplete="otpCode"
                variant="outlined"
                size="medium"
                sx={{ borderRadius: 1 }}
                onChange={(e) => setOtpCode(e.target.value)}
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
          >
            ورود
          </Button>

          <div
            style={{
              display: "flex",
              marginTop: "10px",
              fontSize: "14px",
              fontWeight: "800",
            }}
          >
            <Typography style={{ fontSize: "14px" }} marginRight={0.5}>
              حساب کاربری دارید؟
            </Typography>
            <Link
              fullWidth
              size="medium"
              type="submit"
              variant="contained"
              style={{ color: "blue", textDecoration: "underLine" }}
              onClick={handelTransferLogin}
            >
              وارد شوید
            </Link>
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
          </div>
        </Box>
      </Box>
    </Grid>
  );
};

LoginOtpForm.propTypes = {
  nationalCode: PropTypes.object.isRequired,
  handelTransferLogin: PropTypes.func.isRequired,
};
export default LoginOtpForm;
