// frontend/components/ChatWindow/ChatWindow.js

import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';

import QuickActions from '../QuickActions/QuickActions';

const ChatWindow = () => {
  const [message, setMessage] = useState('');

  const handleQuickAction = (action) => {
    if (action === "Default") {
      setMessage(action);
    } else {
      setMessage('Please talk with me ');
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
