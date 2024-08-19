import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Avatar,
  Popover,
  Divider,
  MenuItem,
  Typography,
  ListItemIcon,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import { CiLogout } from "react-icons/ci";

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const FakeData = {
    name: "آندیا",
    fname: "آرمانی",
    phone: "09920118015",
    nationalCode: "4421997003",
    role: "مدیرعامل",
  };

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleLogout = () => {
    setOpen(null);
    navigate("/login");
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          cursor: "pointer",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: (theme) => alpha(theme.palette.primary.main, 0.08),
          transition: "background 0.3s ease, transform 0.3s ease",
          "&:hover": {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
            transform: "scale(1.1)",
          },
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          sx={{
            width: 40,
            height: 40,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {FakeData.name.charAt(0)}
        </Avatar>
      </Box>
      <Popover
        open={!!open}
        anchorEl={open}
        onClose={() => setOpen(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 260,
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
            borderRadius: "16px",
            overflow: "hidden",
            backgroundColor: "background.paper",
            transition: "all 0.3s ease",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              right: "14px",
              width: 0,
              height: 0,
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              borderBottom: "12px solid white",
              transform: "translateY(-100%)",
            },
          },
        }}
      >
        <Box
          sx={{
            my: 2,
            px: 2,
            direction: "ltr",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: (theme) => theme.palette.primary.light,
              width: 64,
              height: 64,
              fontSize: "1.5rem",
              color: "white",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              mb: 2,
            }}
          >
            {FakeData.name.charAt(0)}
          </Avatar>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "text.primary" }}
          >
            {FakeData.name} {FakeData.fname}
            <Typography
              variant="body2"
              component="span"
              sx={{
                color: "text.secondary",
                fontStyle: "italic",
                ml: 0.5,
              }}
            >
              ({FakeData.role})
            </Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {FakeData.nationalCode}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            موبایل: {FakeData.phone}
          </Typography>
          <Divider sx={{ my: 2, width: "100%" }} />

          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">انتخاب نقش</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>مدیرعامل</MenuItem>
                <MenuItem value={20}>مشتری</MenuItem>
                <MenuItem value={30}>برنامه نویس</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Divider sx={{ my: 2, width: "100%" }} />
          <MenuItem
            onClick={handleLogout}
            sx={{
              py: 1.5,
              px: 2,
              color: "error.main",
              borderRadius: "8px",
              width: "100%",
              justifyContent: "center",
              transition: "background 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: (theme) =>
                  alpha(theme.palette.error.main, 0.1),
                color: "error.dark",
                transform: "translateX(4px)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 36,
                color: "inherit",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CiLogout size={24} />
            </ListItemIcon>
            <Typography variant="body1" fontWeight="medium">
              خروج
            </Typography>
          </MenuItem>
        </Box>
      </Popover>
    </>
  );
}
