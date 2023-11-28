import { Box, IconButton } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../../hooks/useAuth";

export default function TopBar() {
  const { logout } = useAuth();

  const logoutHandler = () => {
    logout();
  };

  return (
    <Box
      display="flex"
      justifyContent={{ xs: "flex-end", md: "flex-end" }}
      alignItems="center"
      p={2}
    >
      <Box>
        <IconButton onClick={logoutHandler}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
