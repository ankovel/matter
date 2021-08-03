import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles({
  container: {},
});

const App = () =>  {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <Footer />
    </div>
    
  );
};

export default App;
