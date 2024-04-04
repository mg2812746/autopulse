import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Container } from '@mui/material';

const CustomerList = () => {
  // Dummy data for demonstration
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
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
                secondary={
                  <>
                    <Typography variant="body2" component="span" color="textPrimary">
                      Email: 
                    </Typography>
                    {' '}{customer.email}<br />
                    <Typography variant="body2" component="span" color="textPrimary">
                      Phone: 
                    </Typography>
                    {' '}{customer.phone}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default CustomerList;
