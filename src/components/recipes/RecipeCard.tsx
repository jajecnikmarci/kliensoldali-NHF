import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  IconButton,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { Recipe } from '../../types';

interface RecipeCardProps {
  /** The recipe to display */
  recipe: Recipe;
  /** Whether the recipe is favorited */
  isFavorite: boolean;
  /** Callback when recipe is clicked */
  onClick: () => void;
  /** Callback when edit is clicked */
  onEdit: () => void;
  /** Callback when delete is clicked */
  onDelete: () => void;
  /** Callback when favorite is toggled */
  onToggleFavorite: () => void;
}

/**
 * Card component displaying a single recipe
 * Provides quick actions and visual hierarchy following Material Design
 * Minimum 44x44px touch targets for all interactive elements
 */
export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isFavorite,
  onClick,
  onEdit,
  onDelete,
  onToggleFavorite,
}) => {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': { boxShadow: 4 },
        transition: 'box-shadow 0.3s',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }} onClick={onClick}>
        <Typography variant="h6" component="h2" gutterBottom>
          {recipe.name}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
          <Chip label={recipe.category} size="small" color="primary" />
          <Chip label={recipe.difficulty} size="small" />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
          <AccessTimeIcon fontSize="small" />
          <Typography variant="body2">{totalTime} perc</Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Box>
          <IconButton
            aria-label="kedvencekhez"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            sx={{ minWidth: 44, minHeight: 44 }}
          >
            {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
        
        <Box>
          <IconButton
            aria-label="szerkesztés"
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            sx={{ minWidth: 44, minHeight: 44 }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="törlés"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            color="error"
            sx={{ minWidth: 44, minHeight: 44 }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};
