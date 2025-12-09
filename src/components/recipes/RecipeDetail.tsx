import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import type { Recipe } from '../../types';
import { Modal } from '../common/Modal';

interface RecipeDetailProps {
  /** The recipe to display */
  recipe: Recipe | null;
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Callback when ingredients should be added to shopping list */
  onAddToShoppingList: (ingredients: string[]) => void;
}

/**
 * Detailed view of a single recipe
 * Displays all recipe information and allows adding ingredients to shopping list
 */
export const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipe,
  open,
  onClose,
  onAddToShoppingList,
}) => {
  if (!recipe) return null;

  const totalTime = recipe.prepTime + recipe.cookTime;

  const handleAddToShoppingList = () => {
    onAddToShoppingList(recipe.ingredients);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={recipe.name}
      maxWidth="md"
      actions={
        <Button
          startIcon={<ShoppingCartIcon />}
          onClick={handleAddToShoppingList}
          variant="contained"
          sx={{ minHeight: 44 }}
        >
          Hozzáadás bevásárlólistához
        </Button>
      }
    >
      <Box>
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip label={recipe.category} color="primary" />
          <Chip label={recipe.difficulty} />
          <Chip
            icon={<AccessTimeIcon />}
            label={`${totalTime} perc`}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Előkészítés: {recipe.prepTime} perc
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Főzés: {recipe.cookTime} perc
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Hozzávalók
        </Typography>
        <List dense>
          {recipe.ingredients.map((ingredient, index) => (
            <ListItem key={index}>
              <ListItemText primary={ingredient} />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Elkészítés
        </Typography>
        <List>
          {recipe.steps.map((step, index) => (
            <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
              <Paper
                sx={{
                  p: 2,
                  width: '100%',
                  backgroundColor: 'action.hover',
                }}
              >
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {index + 1}. lépés
                </Typography>
                <Typography variant="body2">{step}</Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};
