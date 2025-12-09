import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import type { Recipe, Category, Difficulty } from '../../types';
import { Modal } from '../common/Modal';

interface RecipeFormProps {
  /** The recipe being edited, or null for new recipe */
  recipe: Recipe | null;
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Callback when form is submitted */
  onSubmit: (recipe: Omit<Recipe, 'id' | 'createdAt'>) => void;
}

const categories: Category[] = [
  'Előétel',
  'Főétel',
  'Desszert',
  'Leves',
  'Saláta',
  'Ital',
  'Egyéb',
];

const difficulties: Difficulty[] = ['Könnyű', 'Közepes', 'Nehéz'];

/**
 * Form component for creating or editing recipes
 * Provides full CRUD functionality with validation and error handling
 */
export const RecipeForm: React.FC<RecipeFormProps> = ({
  recipe,
  open,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Category>('Főétel');
  const [difficulty, setDifficulty] = useState<Difficulty>('Közepes');
  const [prepTime, setPrepTime] = useState(0);
  const [cookTime, setCookTime] = useState(0);
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [steps, setSteps] = useState<string[]>(['']);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /**
   * Reset form to initial state
   */
  const resetForm = useCallback(() => {
    setName('');
    setCategory('Főétel');
    setDifficulty('Közepes');
    setPrepTime(0);
    setCookTime(0);
    setIngredients(['']);
    setSteps(['']);
    setErrors({});
  }, []);

  // Populate form when editing existing recipe
  useEffect(() => {
    if (recipe) {
      setName(recipe.name);
      setCategory(recipe.category);
      setDifficulty(recipe.difficulty);
      setPrepTime(recipe.prepTime);
      setCookTime(recipe.cookTime);
      setIngredients(recipe.ingredients);
      setSteps(recipe.steps);
    } else {
      resetForm();
    }
  }, [recipe, open, resetForm]);

  /**
   * Validate form fields
   */
  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'A név megadása kötelező';
    }

    if (prepTime <= 0) {
      newErrors.prepTime = 'Az előkészítési idő pozitív szám kell legyen';
    }

    if (cookTime <= 0) {
      newErrors.cookTime = 'A főzési idő pozitív szám kell legyen';
    }

    const validIngredients = ingredients.filter((ing) => ing.trim());
    if (validIngredients.length === 0) {
      newErrors.ingredients = 'Legalább egy hozzávaló megadása kötelező';
    }

    const validSteps = steps.filter((step) => step.trim());
    if (validSteps.length === 0) {
      newErrors.steps = 'Legalább egy lépés megadása kötelező';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }

    const recipeData: Omit<Recipe, 'id' | 'createdAt'> = {
      name: name.trim(),
      category,
      difficulty,
      prepTime,
      cookTime,
      ingredients: ingredients.filter((ing) => ing.trim()),
      steps: steps.filter((step) => step.trim()),
    };

    onSubmit(recipeData);
    resetForm();
    onClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index: number, value: string) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const updateStep = (index: number, value: string) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={recipe ? 'Recept szerkesztése' : 'Új recept'}
      maxWidth="md"
      actions={
        <>
          <Button onClick={handleClose} sx={{ minHeight: 44 }}>
            Mégse
          </Button>
          <Button onClick={handleSubmit} variant="contained" sx={{ minHeight: 44 }}>
            Mentés
          </Button>
        </>
      }
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Recept neve"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          required
          fullWidth
        />

        <Grid container spacing={2}>
          <Grid xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Kategória</InputLabel>
              <Select
                value={category}
                label="Kategória"
                onChange={(e) => setCategory(e.target.value as Category)}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Nehézség</InputLabel>
              <Select
                value={difficulty}
                label="Nehézség"
                onChange={(e) => setDifficulty(e.target.value as Difficulty)}
              >
                {difficulties.map((diff) => (
                  <MenuItem key={diff} value={diff}>
                    {diff}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid xs={12} sm={4}>
            <TextField
              label="Előkészítés (perc)"
              type="number"
              value={prepTime}
              onChange={(e) => setPrepTime(Number(e.target.value))}
              error={!!errors.prepTime}
              helperText={errors.prepTime}
              required
              fullWidth
            />
          </Grid>

          <Grid xs={12} sm={4}>
            <TextField
              label="Főzési idő (perc)"
              type="number"
              value={cookTime}
              onChange={(e) => setCookTime(Number(e.target.value))}
              error={!!errors.cookTime}
              helperText={errors.cookTime}
              required
              fullWidth
            />
          </Grid>
        </Grid>

        <Box>
          <Typography variant="h6" gutterBottom>
            Hozzávalók
          </Typography>
          {errors.ingredients && (
            <Typography color="error" variant="caption">
              {errors.ingredients}
            </Typography>
          )}
          <List>
            {ingredients.map((ingredient, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  ingredients.length > 1 && (
                    <IconButton
                      edge="end"
                      aria-label="törlés"
                      onClick={() => removeIngredient(index)}
                      sx={{ minWidth: 44, minHeight: 44 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )
                }
              >
                <TextField
                  fullWidth
                  value={ingredient}
                  onChange={(e) => updateIngredient(index, e.target.value)}
                  placeholder="pl. 500g liszt"
                  size="small"
                />
              </ListItem>
            ))}
          </List>
          <Button
            startIcon={<AddIcon />}
            onClick={addIngredient}
            sx={{ minHeight: 44 }}
          >
            Hozzávaló hozzáadása
          </Button>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Elkészítés lépései
          </Typography>
          {errors.steps && (
            <Typography color="error" variant="caption">
              {errors.steps}
            </Typography>
          )}
          <List>
            {steps.map((step, index) => (
              <ListItem
                key={index}
                sx={{ alignItems: 'flex-start' }}
                secondaryAction={
                  steps.length > 1 && (
                    <IconButton
                      edge="end"
                      aria-label="törlés"
                      onClick={() => removeStep(index)}
                      sx={{ minWidth: 44, minHeight: 44 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )
                }
              >
                <ListItemText
                  primary={`${index + 1}. lépés`}
                  secondary={
                    <TextField
                      fullWidth
                      multiline
                      rows={2}
                      value={step}
                      onChange={(e) => updateStep(index, e.target.value)}
                      placeholder="Leírás..."
                      size="small"
                      sx={{ mt: 1 }}
                    />
                  }
                />
              </ListItem>
            ))}
          </List>
          <Button
            startIcon={<AddIcon />}
            onClick={addStep}
            sx={{ minHeight: 44 }}
          >
            Lépés hozzáadása
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
