import React from 'react';
import Customers from "../components/sidebar/Customers";
import AppLayout from "../layouts/AppLayout";
import Box from "@mui/material/Box";

function CustomersPage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppLayout />
        <Customers />
      </Box>
    </>
  );
}

export default CustomersPage;