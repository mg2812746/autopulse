// BalanceStatement.js
import React from 'react';
import { Paper, Typography, Container, List, ListItem, ListItemText, Grid } from '@mui/material';

const BalanceStatement = () => {
  // Dummy data for demonstration
  const balanceDetails = [
    { id: 1, date: '2024-02-01', description: 'Product Sales', amount: 150.0 },
    { id: 2, date: '2024-02-02', description: 'Service Revenue', amount: 75.5 },
    // Add more balance details as needed
  ];

  // Calculate total balance
  const totalBalance = balanceDetails.reduce((total, detail) => total + detail.amount, 0);

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', margin: 'auto', marginTop: '100px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Balance Statement
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              Date
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="right">
              Amount
            </Typography>
          </Grid>
        </Grid>
        <List>
          {balanceDetails.map((detail) => (
            <ListItem key={detail.id} style={{ borderBottom: '1px solid #ccc' }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ListItemText
                    primary={detail.date}
                    secondary={detail.description}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" align="right">
                    ${detail.amount.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" align="right" style={{ marginTop: '20px' }}>
          Total: ${totalBalance.toFixed(2)}
        </Typography>
      </Paper>
    </Container>
  );
};

export default BalanceStatement;
