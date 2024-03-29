// OrdersList.js
import React from 'react';
import { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Container, Grid } from '@mui/material';

// create data for orders
function createData(id, customer, product, quantity, price) {
  return { id, customer, product, quantity, price};
}
// generate list of orders
const OrdersList = () => {
  const ordersEndpoint = 'http://127.0.0.1:8000/get-orders';
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ordersEndpoint);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        console.log(jsonData);
        const formattedData = jsonData.map(item => createData(item.id, item.customer,
          item.product, item.quantity, item.price));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', margin: 'auto', marginTop: '100px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Orders
        </Typography>
        <List>
          {data.map((order) => (
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
                    ${order.price}
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
