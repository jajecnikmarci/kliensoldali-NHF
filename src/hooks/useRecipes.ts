import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import type { RecipeContextValue } from '../context/RecipeContext';

/**
 * Hook to access the Recipe context
 * @throws Error if used outside of RecipeProvider
 */
export const useRecipes = (): RecipeContextValue => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};
