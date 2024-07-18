import React, { useState } from 'react';

import { AddCircleOutline } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';

const QuickActions = ({ onAction }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [actions, setActions] = useState([
    'Default',
    'Analyze Text',
    'Summarize Text',
    'Brain Storm',
    'Study Plan',
  ]);

  // Generate random action suggestions
  const getQuickActions = () => {
    const res = [];
    res.push(actions[0]);
    const indexArr = [];
    const n = actions.length;
    for (let i = 0; i < 3; i += 1) {
      let idx = Math.floor(Math.random() * (n - 1)) + 1;
      while (indexArr.includes(idx)) {
        idx = Math.floor(Math.random() * (n - 1)) + 1;
      }
      indexArr.push(idx);
      res.push(actions[idx]);
    }
    return res;
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setActions(getQuickActions());
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleActionClick = (action) => {
    setLoading(true);
    setSelectedAction(action);
    onAction(action);
    setTimeout(() => {
      setLoading(false);
      setSelectedAction('');
    }, 2000); // Simulate loading time
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        startIcon={
          loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <AddCircleOutline />
          )
        }
        sx={{
          backgroundColor: selectedAction ? 'green' : '#6C63FF',
          color: '#FFFFFF',
          borderRadius: '24px',
          textTransform: 'none',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: selectedAction ? 'darkgreen' : '#5753CC',
          },
          '& .MuiCircularProgress-root': {
            color: '#FFFFFF',
          },
        }}
        onClick={handleClick}
      >
        {selectedAction || 'Actions'}
      </Button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ]}
        sx={{ zIndex: 1 }}
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              <MenuItem onClick={() => handleActionClick(actions[0])}>
                {actions[0]}
              </MenuItem>
              <MenuItem onClick={() => handleActionClick(actions[1])}>
                {actions[1]}
              </MenuItem>
              <MenuItem onClick={() => handleActionClick(actions[2])}>
                {actions[2]}
              </MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Box>
  );
};

export default QuickActions;
