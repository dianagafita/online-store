import React from "react";
import Header from "../dashboard/Header";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import OrderTrack from "../../../pages/OrderTrack/OrderTrack";

export default function OrderDetails() {
  const { orderId } = useParams();
  return (
    <Box m="20px" width={250}>
      <Header title="ORDER DETAILS" subtitle={`Order ${orderId} details`} />
      <OrderTrack showButton={false} />
    </Box>
  );
}
