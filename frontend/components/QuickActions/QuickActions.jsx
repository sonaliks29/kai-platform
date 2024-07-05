import React, { useState } from 'react';

import { AddCircleOutline } from '@mui/icons-material';
import {
  Box,
  Button,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';

const QuickActions = ({ onAction }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        startIcon={<AddCircleOutline />}
        sx={{
          backgroundColor: '#6C63FF',
          color: '#FFFFFF',
          borderRadius: '24px',
          textTransform: 'none',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: '#5753CC',
          },
        }}
        onClick={handleClick}
      >
        Actions
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="top">
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              <MenuItem
                onClick={() => {
                  onAction('turn_to_bullet_points');
                  handleClose();
                }}
              >
                Turn this into bullet points
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onAction('summarize_paragraph');
                  handleClose();
                }}
              >
                Summarize the above paragraph
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onAction('create_mcqs');
                  handleClose();
                }}
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
