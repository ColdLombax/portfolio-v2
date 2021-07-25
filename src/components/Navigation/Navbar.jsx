import React, { useState } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
  },
  selected: {
    color: theme.palette.success.main,
    position: 'relative',
    '& &::before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '0.3em',
      position: 'absolute',
      top: '-1.3em',
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      color="primary"
    >
      <BottomNavigationAction classes={classes} label="ABOUT" />
      <BottomNavigationAction classes={classes} label="PROJECTS" />
      <BottomNavigationAction classes={classes} label="EXPERIENCE" />
    </BottomNavigation>
  );
}
