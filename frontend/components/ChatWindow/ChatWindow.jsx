// ChatWindow.jsx
import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';

import QuickActions from '../QuickActions/QuickActions';

const ChatWindow = () => {
  const [message, setMessage] = useState('');

  const handleQuickAction = (action) => {
    switch (action) {
      case 'turn_to_bullet_points':
        setMessage('Turning text into bullet points...');
        break;
      case 'summarize_paragraph':
        setMessage('Summarizing the paragraph...');
        break;
      case 'create_mcqs':
        setMessage('Creating MCQs from the paragraph...');
        break;
      default:
        setMessage('Action not recognized.');
    }
    // eslint-disable-next-line no-console
    console.log(`Quick action triggered: ${action}`);
  };

  return (
    <Box
      sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}
    >
      <QuickActions onAction={handleQuickAction} />
      <Typography variant="body1" sx={{ marginTop: '20px' }}>
        {message}
      </Typography>
    </Box>
  );
};

export default ChatWindow;
