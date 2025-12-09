import React, { useState, useMemo } from 'react';
import { Grid, Box, Fab, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import type { Recipe, Category, SortOption } from '../../types';
import { RecipeCard } from './RecipeCard';
import { SearchBar } from '../common/SearchBar';
import { FilterBar } from '../common/FilterBar';

interface RecipeListProps {
  /** List of recipes to display */
  recipes: Recipe[];
  /** Set of favorite recipe IDs */
  favorites: Set<string>;
  /** Callback when a recipe is clicked */
  onRecipeClick: (recipe: Recipe) => void;
  /** Callback when edit is clicked */
  onEdit: (recipe: Recipe) => void;
  /** Callback when delete is clicked */
  onDelete: (recipe: Recipe) => void;
  /** Callback when favorite is toggled */
  onToggleFavorite: (id: string) => void;
  /** Callback when add new recipe is clicked */
  onAddNew: () => void;
}

/**
 * List component for displaying and filtering recipes
 * Implements search, category filtering, and sorting
 * Uses useMemo for performance optimization
 */
export const RecipeList: React.FC<RecipeListProps> = ({
  recipes,
  favorites,
  onRecipeClick,
  onEdit,
  onDelete,
  onToggleFavorite,
  onAddNew,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<Category | 'Összes'>('Összes');
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');

  // Filter and sort recipes with useMemo for performance
  const filteredRecipes = useMemo(() => {
    let filtered = recipes;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (category !== 'Összes') {
      filtered = filtered.filter((recipe) => recipe.category === category);
    }

    // Sort recipes
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'time-asc':
          return (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime);
        case 'time-desc':
          return (b.prepTime + b.cookTime) - (a.prepTime + a.cookTime);
        case 'date-asc':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'date-desc':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    return sorted;
  }, [recipes, searchTerm, category, sortBy]);

  return (
    <Box>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <FilterBar
        category={category}
        onCategoryChange={setCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {filteredRecipes.length === 0 ? (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
          Nincs megjeleníthető recept.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filteredRecipes.map((recipe) => (
            <Grid xs={12} sm={6} md={4} key={recipe.id}>
              <RecipeCard
                recipe={recipe}
                isFavorite={favorites.has(recipe.id)}
                onClick={() => onRecipeClick(recipe)}
                onEdit={() => onEdit(recipe)}
                onDelete={() => onDelete(recipe)}
                onToggleFavorite={() => onToggleFavorite(recipe.id)}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <Fab
        color="primary"
        aria-label="új recept hozzáadása"
        sx={{ position: 'fixed', bottom: 80, right: 16, minWidth: 56, minHeight: 56 }}
        onClick={onAddNew}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};
