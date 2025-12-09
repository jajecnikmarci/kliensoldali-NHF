import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

/**
 * Navigation view types
 */
export type NavigationView = 'recipes' | 'favorites' | 'shopping';

interface NavigationProps {
  /** Current active view */
  value: NavigationView;
  /** Callback when navigation changes */
  onChange: (view: NavigationView) => void;
}

/**
 * Bottom navigation component for switching between main views
 * Touch-optimized with 44x44px minimum target sizes
 */
export const Navigation: React.FC<NavigationProps> = ({ value, onChange }) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: NavigationView) => {
    onChange(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Receptek"
          value="recipes"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Kedvencek"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Bevásárlólista"
          value="shopping"
          icon={<ShoppingCartIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};
