import * as React from "react";
import Inventory from "../components/sidebar/Inventory";
import Box from "@mui/material/Box";
import AppLayout from "../layouts/AppLayout";

function InventoryPage() {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <AppLayout />
        <Inventory />
      </Box>
    </React.Fragment>
  );
}

export default InventoryPage;
