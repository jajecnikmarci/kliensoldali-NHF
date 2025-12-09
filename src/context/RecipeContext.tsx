import React, { createContext, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Recipe, ShoppingItem } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Context value interface for the Recipe application
 */
export interface RecipeContextValue {
  /** All recipes */
  recipes: Recipe[];
  /** Add a new recipe */
  addRecipe: (recipe: Omit<Recipe, 'id' | 'createdAt'>) => void;
  /** Update an existing recipe */
  updateRecipe: (id: string, recipe: Partial<Recipe>) => void;
  /** Delete a recipe */
  deleteRecipe: (id: string) => void;
  /** Get a recipe by ID */
  getRecipe: (id: string) => Recipe | undefined;
  
  /** Shopping list items */
  shoppingList: ShoppingItem[];
  /** Set shopping list directly */
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingItem[]>>;
  /** Add item to shopping list */
  addToShoppingList: (name: string) => void;
  /** Remove item from shopping list */
  removeFromShoppingList: (id: string) => void;
  /** Toggle item checked status */
  toggleShoppingItem: (id: string) => void;
  /** Clear all checked items */
  clearCheckedItems: () => void;
  
  /** Favorite recipe IDs */
  favorites: string[];
  /** Add recipe to favorites */
  addToFavorites: (id: string) => void;
  /** Remove recipe from favorites */
  removeFromFavorites: (id: string) => void;
  /** Check if recipe is favorite */
  isFavorite: (id: string) => boolean;
}

export const RecipeContext = createContext<RecipeContextValue | undefined>(undefined);

/**
 * Provider component for the Recipe context
 * Manages all application state including recipes, shopping list, and favorites
 */
export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useLocalStorage<Recipe[]>('recipes', []);
  const [shoppingList, setShoppingList] = useLocalStorage<ShoppingItem[]>('shoppingList', []);
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

  /**
   * Add a new recipe to the collection
   */
  const addRecipe = useCallback((recipe: Omit<Recipe, 'id' | 'createdAt'>) => {
    const newRecipe: Recipe = {
      ...recipe,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setRecipes(prev => [...prev, newRecipe]);
  }, [setRecipes]);

  /**
   * Update an existing recipe
   */
  const updateRecipe = useCallback((id: string, updates: Partial<Recipe>) => {
    setRecipes(prev => prev.map(recipe => 
      recipe.id === id ? { ...recipe, ...updates } : recipe
    ));
  }, [setRecipes]);

  /**
   * Delete a recipe and remove it from favorites
   */
  const deleteRecipe = useCallback((id: string) => {
    setRecipes(prev => prev.filter(recipe => recipe.id !== id));
    setFavorites(prev => prev.filter(favId => favId !== id));
  }, [setRecipes, setFavorites]);

  /**
   * Get a recipe by its ID
   */
  const getRecipe = useCallback((id: string) => {
    return recipes.find(recipe => recipe.id === id);
  }, [recipes]);

  /**
   * Add an item to the shopping list
   */
  const addToShoppingList = useCallback((name: string) => {
    const newItem: ShoppingItem = {
      id: crypto.randomUUID(),
      name,
      checked: false,
    };
    setShoppingList(prev => [...prev, newItem]);
  }, [setShoppingList]);

  /**
   * Remove an item from the shopping list
   */
  const removeFromShoppingList = useCallback((id: string) => {
    setShoppingList(prev => prev.filter(item => item.id !== id));
  }, [setShoppingList]);

  /**
   * Toggle the checked status of a shopping list item
   */
  const toggleShoppingItem = useCallback((id: string) => {
    setShoppingList(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  }, [setShoppingList]);

  /**
   * Remove all checked items from the shopping list
   */
  const clearCheckedItems = useCallback(() => {
    setShoppingList(prev => prev.filter(item => !item.checked));
  }, [setShoppingList]);

  /**
   * Add a recipe to favorites
   */
  const addToFavorites = useCallback((id: string) => {
    setFavorites(prev => [...prev, id]);
  }, [setFavorites]);

  /**
   * Remove a recipe from favorites
   */
  const removeFromFavorites = useCallback((id: string) => {
    setFavorites(prev => prev.filter(favId => favId !== id));
  }, [setFavorites]);

  /**
   * Check if a recipe is in favorites
   */
  const isFavorite = useCallback((id: string) => {
    return favorites.includes(id);
  }, [favorites]);

  const value = useMemo(() => ({
    recipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipe,
    shoppingList,
    setShoppingList,
    addToShoppingList,
    removeFromShoppingList,
    toggleShoppingItem,
    clearCheckedItems,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  }), [
    recipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipe,
    shoppingList,
    setShoppingList,
    addToShoppingList,
    removeFromShoppingList,
    toggleShoppingItem,
    clearCheckedItems,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  ]);

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};
