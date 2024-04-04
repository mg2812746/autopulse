// Connect to backend
import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Container, Grid } from '@mui/material';

const InventoryList = () => {
  // Dummy data for demonstration
  const inventory = [
    { id: 1, name: 'Product A', quantity: 10, price: 20 },
    { id: 2, name: 'Product B', quantity: 15, price: 30 },
    // Add more inventory items as needed
  ];

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', margin: 'auto', marginTop: '100px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Inventory
        </Typography>
        <List>
          {inventory.map((item) => (
            <ListItem key={item.id} style={{ borderBottom: '1px solid #ccc' }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1">
                        {item.name}
                      </Typography>
                    }
                    secondary={`Quantity: ${item.quantity}`}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" align="right">
                    ${item.price.toFixed(2)}
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

export default InventoryList;
