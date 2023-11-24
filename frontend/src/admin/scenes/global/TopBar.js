import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../../hooks/useAuth";

export default function TopBar() {
  const { logout } = useAuth();

  const logoutHandler = () => {
    logout();
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" backgroundColor="grey" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"></InputBase>{" "}
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>{" "}
      </Box>

      <Box display="flex">
        <IconButton onClick={logoutHandler}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
