import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Button, Paper, Typography, Divider } from '@mui/material';
import '../styles/HomePage.css'; // Import your CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header" style={{ backgroundColor: '#f0f4f7', borderBottom: '1px solid #e0e0e0' }}>
        <Container >
          <Grid container justifyContent="space-between" alignItems="center" spacing={2} className="navbar">
            <Grid item>
              <Button component={Link} to="/" className="logo-button" disableRipple style={{color:'#000'}}>
                E-commerce Manager
              </Button>
            </Grid>
            <Grid item>
              <nav>
                <Paper elevation={0} className="nav-links-paper">
                  <Button component={Link} to="/" className="nav-link" disableRipple>Home</Button>
                  <Button component={Link} to="/orders" className="nav-link" disableRipple>Orders</Button>
                  <Button component={Link} to="/products" className="nav-link" disableRipple>Products</Button>
                </Paper>
              </nav>
            </Grid>
          </Grid>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="hero-section" >
        <Container>
          <Paper elevation={3} className="hero-box" style={{ padding: '30px', textAlign: 'center' }}>
            <Typography variant="h1" gutterBottom>Welcome to E-Commerce Manager</Typography>
            <Typography variant="body1" gutterBottom>Easily Manage Orders Across Multiple Platforms</Typography>
            <Button variant="contained" color="primary" component={Link} to="/get-started">Get Started</Button>
          </Paper>
        </Container>
      </section>

      {/* Featured Section */}
      <section className="featured-section" >
        <Container>
          <Typography variant="h2" align="center" gutterBottom>Featured Section</Typography>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} className="feature-box" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#e0f2f1' }}>
                <Typography variant="h4" gutterBottom>Manage Orders</Typography>
                <Typography variant="body1" gutterBottom>Efficiently track and manage orders from multiple platforms.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} className="feature-box" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0e4d7' }}>
                <Typography variant="h4" gutterBottom>Track Shipments</Typography>
                <Typography variant="body1" gutterBottom>Keep track of shipments and delivery statuses in real-time.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} className="feature-box" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#e9e4f0' }}>
                <Typography variant="h4" gutterBottom>Inventory Management</Typography>
                <Typography variant="body1" gutterBottom>Effortlessly manage inventory levels and stock availability.</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="call-to-action" >
        <Container>
          <Paper elevation={3} className="cta-box" style={{ padding: '50px', textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>Sign Up for Free</Typography>
            <Button variant="contained" color="success" component={Link} to="/sign-up">Sign Up</Button>
          </Paper>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ backgroundColor: '#37474f', color: '#ffffff' }}>
        <Container>
          <Divider style={{ backgroundColor: '#9e9e9e' }} />
          <Typography variant="body2" align="center" gutterBottom>&copy; 2024 E-Commerce Manager</Typography>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
