import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './components/Header/Header';

const useStyles = makeStyles({
  container: {
    width: '1140px',
    margin: '0 auto',
  }
});

const App = () =>  {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
    </div>
  );
};

export default App;
