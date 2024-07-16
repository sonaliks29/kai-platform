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
  const [actions, setActions] = useState(["Default", "Analyze Text",
    "Summarize Text", "Brain Storm", "Study Plan"]);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    let newActions = getQuickActions();
    setActions(newActions);
    // console.log(newActions);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  
  // Generate random action suggestions
  // Return an array of randomly generated actions
  const getQuickActions = () => {
    // pick up 3 random suggestions from the data
    let res = [];
    let indexArr = [];
    let n = actions.length;
    for (let i = 0; i < 3; i++) {
      let idx = Math.floor(Math.random() * (n - 1)) + 1;
      while (indexArr.includes(idx)) { // repeat until there is new random number generated
        idx = Math.floor(Math.random() * (n - 1)) + 1;
      }
      indexArr.push(idx);
      res.push(actions[idx]);
    }
    return res;
  };

  // Add new action prompts into collection
  const addQuickActions = async (data) => {
    actions.push(data);
    setActions(actions);
  };

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
                onClick={() => {
                  onAction(actions[0]);
                  handleClose();
                }}
              >
                {/* Turn this into bullet points */}
                {actions[0]}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onAction(actions[1]);
                  handleClose();
                }}
              >
                {/* Summarize the above paragraph */}
                {actions[1]}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onAction(actions[2]);
                  handleClose();
                }}
              >
                {/* Create MCQs from the paragraph */}
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
