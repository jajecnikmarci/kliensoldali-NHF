import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

/**
 * Header component displaying the application title
 * Follows Material Design guidelines with proper contrast and branding
 */
export const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar>
        <RestaurantMenuIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          Recept Gyűjtemény
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
