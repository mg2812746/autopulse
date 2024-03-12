// OrdersPage.js
import React from "react";
import OrdersList from "../components/OrdersList";
import AppLayout from "../layouts/AppLayout";
import { Box } from "@mui/material";
const OrdersPage = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppLayout />
        <OrdersList />
      </Box>
    </>
  );
};

export default OrdersPage;
