import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Button,
  Typography,
  Paper,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import type { ShoppingItem } from '../../types';

interface ShoppingListProps {
  /** Shopping list items */
  items: ShoppingItem[];
  /** Callback when item is toggled */
  onToggle: (id: string) => void;
  /** Callback when item is removed */
  onRemove: (id: string) => void;
  /** Callback when new item is added */
  onAdd: (name: string) => void;
  /** Callback when checked items are cleared */
  onClearChecked: () => void;
}

/**
 * Shopping list component for managing shopping items
 * Allows adding, removing, and checking off items
 * Integrates with recipes to add ingredients
 */
export const ShoppingList: React.FC<ShoppingListProps> = ({
  items,
  onToggle,
  onRemove,
  onAdd,
  onClearChecked,
}) => {
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim()) {
      onAdd(newItem.trim());
      setNewItem('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const checkedCount = items.filter((item) => item.checked).length;

  return (
    <Box>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            size="small"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Új tétel hozzáadása..."
          />
          <Button
            variant="contained"
            onClick={handleAdd}
            startIcon={<AddIcon />}
            sx={{ minHeight: 44, minWidth: 100 }}
          >
            Hozzáad
          </Button>
        </Box>
      </Paper>

      {items.length === 0 ? (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
          A bevásárlólista üres. Adj hozzá tételeket, vagy válassz egy receptet!
        </Typography>
      ) : (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {checkedCount} / {items.length} kipipálva
            </Typography>
            {checkedCount > 0 && (
              <Button
                size="small"
                startIcon={<ClearIcon />}
                onClick={onClearChecked}
                sx={{ minHeight: 44 }}
              >
                Kipipáltak törlése
              </Button>
            )}
          </Box>

          <List>
            {items.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="törlés"
                    onClick={() => onRemove(item.id)}
                    sx={{ minWidth: 44, minHeight: 44 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{
                  backgroundColor: item.checked ? 'action.hover' : 'background.paper',
                  mb: 1,
                  borderRadius: 1,
                }}
              >
                <Checkbox
                  edge="start"
                  checked={item.checked}
                  onChange={() => onToggle(item.id)}
                  sx={{ minWidth: 44, minHeight: 44 }}
                />
                <ListItemText
                  primary={item.name}
                  sx={{
                    textDecoration: item.checked ? 'line-through' : 'none',
                    opacity: item.checked ? 0.6 : 1,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
};
