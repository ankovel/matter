import React from 'react';
import { makeStyles, Typography, IconButton } from '@material-ui/core';
import { Shop } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: '20px',
    color: 'blue',
  },
  button: {
    backgroundColor: 'green',
  },
  icon: {
    color: 'pink',
  },
});

const App = () =>  {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>HELLO!</Typography>
      <IconButton className={classes.button}>
        <Shop className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default App;
