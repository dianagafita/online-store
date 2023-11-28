import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import { Typography } from "antd";

export default function Dashboard() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboar" />
      </Box>
      <Box m="20px" width={250}>
        <Typography>
          <span style={{ color: "white" }}>
            Manage the users,products and the orders!
          </span>
        </Typography>
      </Box>
    </Box>
  );
}
