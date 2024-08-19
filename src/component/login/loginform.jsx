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


const LoginForm = ({fetchCaptcha,setCaptchaLogin,setNationalCode,captchaData,isLoadingCaptcha,handleSubmit}) => {


  return (
    <Grid item xs={12} md={6}>
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
          onSubmit={handleSubmit}
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
                onChange={(e) => setNationalCode(e.target.value)}
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
    </Grid>
  );
};

LoginForm.propTypes = {
  fetchCaptcha: PropTypes.func.isRequired, // تابع برای دریافت Captcha
  handleSubmit: PropTypes.func.isRequired, // تابع برای پس از ارسال کد OTP و ورود
  captchaData: PropTypes.object.isRequired, // اطلاعات Captcha
  isLoadingCaptcha: PropTypes.bool.isRequired, // وضعیت بارگذاری Captcha
  setCaptchaLogin: PropTypes.func.isRequired, // تابع برای تنظیم Captcha در فرآیند ورود
  setNationalCode: PropTypes.func.isRequired, // تابع برای تنظیم کد ملی
};
export default LoginForm;
