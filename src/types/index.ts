/**
 * Difficulty level for a recipe
 */
export type Difficulty = 'Könnyű' | 'Közepes' | 'Nehéz';

/**
 * Recipe category types
 */
export type Category = 'Előétel' | 'Főétel' | 'Desszert' | 'Leves' | 'Saláta' | 'Ital' | 'Egyéb';

/**
 * Represents a single recipe with all its properties
 */
export interface Recipe {
  /** Unique identifier for the recipe */
  id: string;
  /** Name of the recipe */
  name: string;
  /** Category of the recipe */
  category: Category;
  /** List of ingredients needed */
  ingredients: string[];
  /** Step-by-step cooking instructions */
  steps: string[];
  /** Preparation time in minutes */
  prepTime: number;
  /** Cooking time in minutes */
  cookTime: number;
  /** Difficulty level */
  difficulty: Difficulty;
  /** Date when the recipe was created */
  createdAt: Date;
  /** Optional image URL */
  imageUrl?: string;
}

/**
 * Represents a shopping list item
 */
export interface ShoppingItem {
  /** Unique identifier for the item */
  id: string;
  /** Name of the item */
  name: string;
  /** Whether the item has been checked off */
  checked: boolean;
}

/**
 * Sort options for recipe list
 */
export type SortOption = 'name-asc' | 'name-desc' | 'time-asc' | 'time-desc' | 'date-asc' | 'date-desc';
