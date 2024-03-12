// ReportPage.js
import React, { useState } from "react";
import ReportChart from "../components/ReportChart";
import {
  Container,
  Paper,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import AppLayout from "../layouts/AppLayout";
import Box from "@mui/material/Box";
const ReportPage = () => {
  const combinedData = [
    { month: "January", revenue: 1500, expenses: 800, profits: 700 },
    { month: "February", revenue: 2200, expenses: 1200, profits: 1000 },
    { month: "March", revenue: 1800, expenses: 1000, profits: 800 },
    { month: "April", revenue: 2500, expenses: 1500, profits: 1000 },
    // Add more data points as needed
  ];
  const [chartData, setChartData] = useState(combinedData); // Initial data showing both profits and expenses
  const handleToggle = (dataType) => {
    setChartData((data) => {
      let newData;
      switch (dataType) {
        case "revenue":
          newData = combinedData.map(({ month, revenue }) => ({
            month,
            revenue,
            label: "Revenue",
          }));
          break;
        case "expenses":
          newData = combinedData.map(
            ({ month, revenue, expenses, profits }) => ({
              month,
              expenses,
              label: "Expenses",
            })
          );
          break;
        case "profits":
          newData = combinedData.map(
            ({ month, revenue, expenses, profits }) => ({
              month,
              profits,
              label: "Profits",
            })
          );
          break;
        default:
          newData = combinedData.map(
            ({ month, revenue, expenses, profits }) => ({
              month,
              value: revenue + expenses + profits,
              label: "Combined",
              revenue,
              expenses,
              profits,
            })
          );
          break;
      }
      return newData;
    });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppLayout />

        <Container component="main" maxWidth="md">
          <Paper
            elevation={3}
            style={{ padding: "20px", margin: "auto", marginTop: "100px" }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Monthly Report
            </Typography>
            <ButtonGroup variant="contained" style={{ marginBottom: "20px" }}>
              <Button onClick={() => handleToggle("revenue")}>Revenue</Button>
              <Button onClick={() => handleToggle("expenses")}>Expenses</Button>
              <Button onClick={() => handleToggle("profits")}>Profits</Button>
              <Button onClick={() => handleToggle("combined")}>Combined</Button>
            </ButtonGroup>
            <ReportChart data={chartData} />
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default ReportPage;
