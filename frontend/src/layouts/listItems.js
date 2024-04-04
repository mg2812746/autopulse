import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import {useNavigate} from 'react-router-dom';

function ListItems(){
  const navigate = useNavigate();

  const handleClick = (path) => {
    // Navigate to the route when the button is clicked
    navigate(path);
  };
  return(
  <React.Fragment>
    <ListItemButton onClick={() => handleClick('/')}>
      <ListItemIcon>
        <DashboardIcon/>
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItemButton>
    <ListItemButton onClick={() => handleClick('/Orders')}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders"/>
    </ListItemButton>
    <ListItemButton onClick={() => handleClick('/Customers')}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton onClick={() => handleClick('/Report')}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton onClick={() => handleClick('/Inventory')}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Inventory" />
    </ListItemButton>
  </React.Fragment>
  );
  }

export default ListItems;