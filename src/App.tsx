import React, { useState, useMemo } from 'react';
import { Container, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Header } from './components/common/Header';
import { Navigation } from './components/common/Navigation';
import type { NavigationView } from './components/common/Navigation';
import { Feedback } from './components/common/Feedback';
import { RecipeList } from './components/recipes/RecipeList';
import { RecipeDetail } from './components/recipes/RecipeDetail';
import { RecipeForm } from './components/recipes/RecipeForm';
import { ShoppingList } from './components/shopping/ShoppingList';
import { FavoritesList } from './components/favorites/FavoritesList';
import { RecipeProvider } from './context/RecipeContext';
import { useRecipes } from './hooks/useRecipes';
import type { Recipe } from './types';

/**
 * Main application content component
 * Manages navigation, modals, and user interactions
 */
const AppContent: React.FC = () => {
  const {
    recipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipe,
    shoppingList,
    addToShoppingList,
    removeFromShoppingList,
    toggleShoppingItem,
    clearCheckedItems,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  } = useRecipes();

  const [currentView, setCurrentView] = useState<NavigationView>('recipes');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState<Recipe | null>(null);
  const [feedback, setFeedback] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  /**
   * Get favorite recipes using useMemo for performance
   */
  const favoriteRecipes = useMemo(() => {
    return recipes.filter((recipe) => favorites.includes(recipe.id));
  }, [recipes, favorites]);

  /**
   * Handle recipe click to show details
   */
  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setDetailOpen(true);
  };

  /**
   * Handle adding ingredients to shopping list
   */
  const handleAddToShoppingList = (ingredients: string[]) => {
    ingredients.forEach((ingredient) => addToShoppingList(ingredient));
    showFeedback('Hozzávalók hozzáadva a bevásárlólistához!', 'success');
    setDetailOpen(false);
  };

  /**
   * Handle toggling favorite status
   */
  const handleToggleFavorite = (id: string) => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
      showFeedback('Eltávolítva a kedvencekből', 'info');
    } else {
      addToFavorites(id);
      showFeedback('Hozzáadva a kedvencekhez!', 'success');
    }
  };

  /**
   * Handle opening form for new recipe
   */
  const handleAddNew = () => {
    setEditingRecipe(null);
    setFormOpen(true);
  };

  /**
   * Handle opening form for editing recipe
   */
  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setFormOpen(true);
  };

  /**
   * Handle form submission
   */
  const handleFormSubmit = (recipeData: Omit<Recipe, 'id' | 'createdAt'>) => {
    if (editingRecipe) {
      updateRecipe(editingRecipe.id, recipeData);
      showFeedback('Recept sikeresen frissítve!', 'success');
    } else {
      addRecipe(recipeData);
      showFeedback('Új recept létrehozva!', 'success');
    }
  };

  /**
   * Handle delete confirmation dialog
   */
  const handleDeleteClick = (recipe: Recipe) => {
    setRecipeToDelete(recipe);
    setDeleteDialogOpen(true);
  };

  /**
   * Handle confirmed delete
   */
  const handleDeleteConfirm = () => {
    if (recipeToDelete) {
      deleteRecipe(recipeToDelete.id);
      showFeedback('Recept törölve', 'success');
      setDeleteDialogOpen(false);
      setRecipeToDelete(null);
      setDetailOpen(false);
    }
  };

  /**
   * Show feedback message
   */
  const showFeedback = (
    message: string,
    severity: 'success' | 'error' | 'info' | 'warning' = 'success'
  ) => {
    setFeedback({ open: true, message, severity });
  };

  const favoritesSet = useMemo(() => new Set(favorites), [favorites]);

  return (
    <Box sx={{ pb: 8 }}>
      <Header />
      <Container maxWidth="lg">
        {currentView === 'recipes' && (
          <RecipeList
            recipes={recipes}
            favorites={favoritesSet}
            onRecipeClick={handleRecipeClick}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
            onToggleFavorite={handleToggleFavorite}
            onAddNew={handleAddNew}
          />
        )}

        {currentView === 'favorites' && (
          <FavoritesList
            recipes={favoriteRecipes}
            onRecipeClick={handleRecipeClick}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
            onRemoveFromFavorites={handleToggleFavorite}
          />
        )}

        {currentView === 'shopping' && (
          <ShoppingList
            items={shoppingList}
            onToggle={toggleShoppingItem}
            onRemove={removeFromShoppingList}
            onAdd={addToShoppingList}
            onClearChecked={clearCheckedItems}
          />
        )}
      </Container>

      <Navigation value={currentView} onChange={setCurrentView} />

      <RecipeDetail
        recipe={selectedRecipe}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        onAddToShoppingList={handleAddToShoppingList}
      />

      <RecipeForm
        recipe={editingRecipe}
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
      />

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Recept törlése</DialogTitle>
        <DialogContent>
          Biztosan törölni szeretnéd a(z) "{recipeToDelete?.name}" receptet?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} sx={{ minHeight: 44 }}>
            Mégse
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained" sx={{ minHeight: 44 }}>
            Törlés
          </Button>
        </DialogActions>
      </Dialog>

      <Feedback
        open={feedback.open}
        onClose={() => setFeedback({ ...feedback, open: false })}
        message={feedback.message}
        severity={feedback.severity}
      />
    </Box>
  );
};

/**
 * Root application component
 * Wraps the app with RecipeProvider context
 */
const App: React.FC = () => {
  return (
    <RecipeProvider>
      <AppContent />
    </RecipeProvider>
  );
};

export default App;
