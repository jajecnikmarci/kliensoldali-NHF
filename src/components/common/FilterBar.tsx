import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import type { Category, SortOption } from '../../types';

interface FilterBarProps {
  /** Current category filter */
  category: Category | 'Összes';
  /** Callback when category changes */
  onCategoryChange: (category: Category | 'Összes') => void;
  /** Current sort option */
  sortBy: SortOption;
  /** Callback when sort option changes */
  onSortChange: (sort: SortOption) => void;
}

const categories: (Category | 'Összes')[] = [
  'Összes',
  'Előétel',
  'Főétel',
  'Desszert',
  'Leves',
  'Saláta',
  'Ital',
  'Egyéb',
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'name-asc', label: 'Név (A-Z)' },
  { value: 'name-desc', label: 'Név (Z-A)' },
  { value: 'time-asc', label: 'Idő (növekvő)' },
  { value: 'time-desc', label: 'Idő (csökkenő)' },
  { value: 'date-asc', label: 'Dátum (legrégebbi)' },
  { value: 'date-desc', label: 'Dátum (legújabb)' },
];

/**
 * Filter bar component for filtering and sorting recipes
 * Provides category filtering and multiple sort options
 */
export const FilterBar: React.FC<FilterBarProps> = ({
  category,
  onCategoryChange,
  sortBy,
  onSortChange,
}) => {
  const handleCategoryChange = (event: SelectChangeEvent) => {
    onCategoryChange(event.target.value as Category | 'Összes');
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    onSortChange(event.target.value as SortOption);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
      <FormControl size="small" sx={{ minWidth: 150, flex: 1 }}>
        <InputLabel>Kategória</InputLabel>
        <Select value={category} label="Kategória" onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 180, flex: 1 }}>
        <InputLabel>Rendezés</InputLabel>
        <Select value={sortBy} label="Rendezés" onChange={handleSortChange}>
          {sortOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
