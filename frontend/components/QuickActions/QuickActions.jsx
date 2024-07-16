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

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleActionClick = (action) => {
    setLoading(true);
    setSelectedAction(action);
    onAction(action);
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
              <MenuItem
                onClick={() =>
                  handleActionClick('Turn this into bullet points')
                }
              >
                Turn this into bullet points
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleActionClick('Summarize the above paragraph')
                }
              >
                Summarize the above paragraph
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleActionClick('Create MCQs from the paragraph')
                }
              >
                Create MCQs from the paragraph
              </MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Box>
  );
};

export default QuickActions;
