import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import type { Recipe } from '../../types';
import { RecipeCard } from '../recipes/RecipeCard';

interface FavoritesListProps {
  /** List of favorite recipes */
  recipes: Recipe[];
  /** Callback when a recipe is clicked */
  onRecipeClick: (recipe: Recipe) => void;
  /** Callback when edit is clicked */
  onEdit: (recipe: Recipe) => void;
  /** Callback when delete is clicked */
  onDelete: (recipe: Recipe) => void;
  /** Callback when recipe is removed from favorites */
  onRemoveFromFavorites: (id: string) => void;
}

/**
 * Component displaying favorite recipes
 * Provides quick access to frequently used recipes
 */
export const FavoritesList: React.FC<FavoritesListProps> = ({
  recipes,
  onRecipeClick,
  onEdit,
  onDelete,
  onRemoveFromFavorites,
}) => {
  if (recipes.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 8,
          gap: 2,
        }}
      >
        <FavoriteBorderIcon sx={{ fontSize: 64, color: 'text.secondary' }} />
        <Typography variant="h6" color="text.secondary">
          Nincs kedvenc recept
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Jelölj meg recepteket kedvencként a gyors eléréshez!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Kedvenc receptek ({recipes.length})
      </Typography>
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard
              recipe={recipe}
              isFavorite={true}
              onClick={() => onRecipeClick(recipe)}
              onEdit={() => onEdit(recipe)}
              onDelete={() => onDelete(recipe)}
              onToggleFavorite={() => onRemoveFromFavorites(recipe.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
