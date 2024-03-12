// OrdersList.js
import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Container, Grid } from '@mui/material';

const OrdersList = () => {
  // Dummy data for demonstration
  const orders = [
    { id: 1, customer: 'Customer 1', product: 'Product A', quantity: 2, price: 20.0 },
    { id: 2, customer: 'Customer 2', product: 'Product B', quantity: 1, price: 15.5 },
    // Add more orders as needed
  ];

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', margin: 'auto', marginTop: '100px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Orders
        </Typography>
        <List>
          {orders.map((order) => (
            <ListItem key={order.id} style={{ borderBottom: '1px solid #ccc' }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1">
                        {`${order.customer} - ${order.product}`}
                      </Typography>
                    }
                    secondary={`Quantity: ${order.quantity}`}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" align="right">
                    ${order.price.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default OrdersList;
