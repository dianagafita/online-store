import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";

export default function Dashboard() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboar" />
      </Box>
    </Box>
  );
}
