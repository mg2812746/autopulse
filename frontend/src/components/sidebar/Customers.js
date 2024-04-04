/* Connect to backend with entity Customers(id, name)  */
import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Container } from '@mui/material';

const CustomerList = () => {
  // Dummy data for demonstration
  const customers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more customers as needed
  ];

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', margin: 'auto', marginTop: '100px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Customer List
        </Typography>
        <List>
          {customers.map((customer) => (
            <ListItem key={customer.id} style={{ borderBottom: '1px solid #ccc' }}>
              <ListItemText
                primary={customer.name}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default CustomerList;
