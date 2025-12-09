import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import type { AlertColor } from '@mui/material';

interface FeedbackProps {
  /** Whether the feedback is visible */
  open: boolean;
  /** Callback when feedback should close */
  onClose: () => void;
  /** Feedback message */
  message: string;
  /** Severity level */
  severity?: AlertColor;
}

/**
 * Feedback component for displaying temporary messages
 * Provides user feedback for actions (success, error, info, warning)
 */
export const Feedback: React.FC<FeedbackProps> = ({
  open,
  onClose,
  message,
  severity = 'success',
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
